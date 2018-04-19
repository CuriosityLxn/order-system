import React from 'react';
import { connect } from 'react-redux';


require('./client.scss');


class Clientpage extends React.Component {
  render() {
    return (
      <div className='clint'>
        <div className='banner'>
          <img className='banner-img' src='../images/banner.jpg' />
        </div>
      </div>
    );
  }
}

export default connect()(Clientpage);
