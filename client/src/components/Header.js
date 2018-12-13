import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return(
      <div className="heading--top">
        <Link to="/"><h1>Vehicle Identifier</h1></Link>
        <hr/>
      </div>
  );
};
export default Header;
