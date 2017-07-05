import React from 'react';
import { Link } from 'react-router-dom';

class Test extends React.Component {
  render() {
    return (
      <div className='test'>
        <h3>Test page</h3>
        <span>Go to: </span>
        <Link to='/home'>
          home page
        </Link>
      </div>
    )
  }
}

export default Test;
