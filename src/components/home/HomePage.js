import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
     <div className="jumbotron">
      <h1>Kwangs Administration</h1>
      <p>React, Redux and Router in ES6, for ultra responsive jobs.</p>
      <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
     </div>
    ); 
  }
}

export default HomePage;
