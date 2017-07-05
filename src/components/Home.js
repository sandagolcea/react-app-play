import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Sample home page</h3>
        <span>Go to: </span>
        <Link to='/test'>
          Test page
        </Link>
      </div>
    )
  }
}

export default Home;
