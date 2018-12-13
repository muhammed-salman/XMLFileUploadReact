import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import ReportTable from './ReportTable';
var parser = require('fast-xml-parser');
import {getAllFiles, viewFile} from '../actions/index';

class FileList extends Component {
  constructor(props){
    super(props);
    this.props.getAllFiles();
  }

  generateRows = () => {
    let files = this.props.allFiles, table=[];

    for(let i=0;i<_.size(files);i++){
      table.push(
            <tr key={files[i]._id}>
                <td key={i+"-name"}>{files[i].fileAttr.name}</td>
                <td key={i+"-timestamp"}>
                  {files[i].timeStamp}
                </td>
                <td key={i+"-report"}>
                  <Link
                    onClick={()=>this.props.viewFile(files[i]._id)}
                    to="/viewreport">View Report</Link>
                </td>
            </tr>
            );
    }
    return table;
  }

  render(){
    console.log("List Props", this.props);  
    if(! _.isEmpty(this.props) && !_.isEmpty(this.props.allFiles)){
      return (
        <div className="list-container">
          <h2>List of Uploaded Files</h2>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Upload Timestamp</th>
                <th>Report</th>
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
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getAllFiles, viewFile},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FileList);
