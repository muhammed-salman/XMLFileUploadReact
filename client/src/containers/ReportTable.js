import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import $ from 'jquery';
import {uploadFile, viewFile} from '../actions/index';


class ReportTable extends Component {
  constructor(props){
		super(props);
    this.generateRows = this.generateRows.bind(this);
    this.getVehicleType = this.getVehicleType.bind(this);
    this.summary={"Big Wheel":0,"Bicycle":0,"Motorcycle":0,"Hang Glider":0,"Car":0,"Unknown":0};
	}

  getVehicleType = (vehicle) => {
    if(_.isEmpty(vehicle.wheels.wheel)){
      if(vehicle.frame.material=="plastic" && vehicle.powertrain=="bernoulli")
        return "Hang Glider";
    }
    else{
      if(vehicle.frame.material=="plastic" && vehicle.powertrain=="human" && _.size(vehicle.wheels.wheel)==3)
      {
        const {wheel} = vehicle.wheels;
        let posSet= new Set(['front','left rear','right rear']);
        for(let i=0;i<3;i++)
          if(posSet.has(wheel[i].position) && wheel[i].material=="plastic")
            posSet.delete(wheel[i].position);
        if(_.isEmpty(posSet))
          return "Big Wheel";
      }
      else{
        if(vehicle.frame.material=="metal" && _.size(vehicle.wheels.wheel)==2){
          const {wheel} = vehicle.wheels;
          let posSet= new Set(['front','rear']);
          for(let i=0;i<2;i++)
            if(posSet.has(wheel[i].position) && wheel[i].material=="metal")
              posSet.delete(wheel[i].position);
          if(_.isEmpty(posSet)){
            return (vehicle.powertrain=="human")?"Bicycle":((vehicle.powertrain=="internal combustion")?"Motorcycle":"Unknown");
          }
        }
        else{
          if(vehicle.frame.material=="metal" && vehicle.powertrain=="internal combustion" && _.size(vehicle.wheels.wheel)==4){
            const {wheel} = vehicle.wheels;
            let posSet= new Set(['right front','left front','right rear','left rear']);
            for(let i=0;i<4;i++)
              if(posSet.has(wheel[i].position) && wheel[i].material=="metal")
                posSet.delete(wheel[i].position);
            return (_.isEmpty(posSet))? "Car":"Unknown";
          }
        }
      }
    }
    return "Unknown";
  }

  generateRows = () => {
    const {justUploaded, currentFile, displayFile} = this.props;
    const fileObject = (justUploaded)?currentFile:displayFile;

    const vehicles = fileObject.vehicles;

    let table=[];
    for (const key of Object.keys(this.summary)) {
      this.summary[key]=0;
    }

    for(let i=0;i<_.size(vehicles);i++){
      let vname= this.getVehicleType(vehicles[i]);
      this.summary[vname]++;
      table.push(
            <tr key={i}>
                <td key={vehicles[i].id+"-name"}>{vname}</td>
                <td key={vehicles[i].id+"-id"}>{vehicles[i].id}</td>
                <td key={vehicles[i].id+"-frame"}>
                  {vehicles[i].frame.material}
                </td>
                <td key={vehicles[i].id+"-powertrain"}>
                  {vehicles[i].powertrain}
                </td>
                <td key={vehicles[i].id+"-wheels"}>
                  {
                    (!_.isEmpty(vehicles[i].wheels.wheel))?vehicles[i].wheels.wheel.map(w=>w.position+"-->"+w.material+","):'none'
                  }
                </td>
                <td key={vehicles[i].id+"-timestamp"}>
                  {fileObject.timeStamp}
                </td>
                <td key={vehicles[i].id+"-file"}>
                  <a
                     download={fileObject.fileAttr.name}
                      href={fileObject.xmlFileString}
                      target="_new"
                    >
                    View File
                  </a>
                </td>
            </tr>
            );
    }
    let summaryRow = "Summary: ";
    for (const key of Object.keys(this.summary)) {
      summaryRow += "   "+key+" = "+this.summary[key];
    }
    table.push(<tr key="summary-row"><td colSpan="7" key="summary-col">{summaryRow}</td></tr>);
    return table;
  }

  render(){
    // console.log('report table',this.props);
    if(_.isEmpty(this.props.error) && (!_.isEmpty(this.props.displayFile.vehicles) || this.props.justUploaded)){
      return (
      <div className="schedule-container">
        <h2>File Report</h2>
        <table>
          <thead>
            <tr>
              <th>Vehicle Name</th>
              <th>Vehicle ID</th>
              <th>Frame</th>
              <th>Powertrain</th>
              <th>Wheels</th>
              <th>Timestamp</th>
              <th>File Link</th>
            </tr>
          </thead>
          <tbody>
            {this.generateRows()}
          </tbody>
        </table>
      </div>

      );
    }
    else {
      if(!_.isEmpty(this.props.error))
        return (<div>{this.props.error}</div>);
      else
        return <div>Upload a file to see the report</div>;
    }
  }
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({uploadFile, viewFile},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ReportTable);
