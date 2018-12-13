import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return (
      <div className="navigator">
        <Link to="/fileupload">File Upload</Link>
        <Link to="/uploadedfiles">Uploaded Files</Link>
        <hr/>
      </div>
    );
  }
}

export default Navigation;
