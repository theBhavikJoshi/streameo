import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="ui top attached menu">
        <a className="item" href='#'>
          Streamy
        </a>
        <div className="right menu" href='#'>
          <a className="item">
            All Streams
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;
