import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReportTable from '../containers/ReportTable';
var parser = require('fast-xml-parser');
import {uploadFile, viewFile} from '../actions/index';

class App extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.convertToJSON = this.convertToJSON.bind(this);
  }


  convertToJSON(xmlText,xmlFileObj){

    const reader = new FileReader();
    let xmlFileString;
    reader.onload = () => {
      xmlFileString = reader.result;
      if(parser.validate(xmlText) === true) {
        const {name, lastModified, size, type}=xmlFileObj;
        var jsonObj = parser.parse(xmlText);
        this.props.uploadFile(jsonObj,xmlFileString,{name, lastModified, size, type});
      }
      else {
        console.log("XML not valid");
      }
    };
    reader.readAsDataURL(xmlFileObj);

  }

  onSubmit(event){
    event.preventDefault();
    // alert('form submit');
    console.log(event.target[0].files[0]);
    let xmlFile = event.target[0].files[0];
    const reader = new FileReader();
    let xmlText="";
    reader.onload = () => {
      xmlText = reader.result;
      this.convertToJSON(xmlText,xmlFile);
    };
    reader.readAsText(xmlFile);
    // this.setState({displayFile: this.props.currentFile});
  }
  render(){

    if(! _.isEmpty(this.props)){
      return (
        <div>
          <form method="post" onSubmit={this.onSubmit} encType="multipart/form-data">
            <input type="file" id="file" name="file" />
            <button type="submit">Submit</button>
          </form>
          <ReportTable justUploaded={true} error={this.props.currentFile.errorMessage}/>
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
	return bindActionCreators({uploadFile, viewFile},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
