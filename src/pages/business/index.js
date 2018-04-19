import React from 'react';
import { connect } from 'react-redux';


require('../../styles/index.scss');


class Businesspage extends React.Component {
  render() {
    return (
      <div className='business'>
        Business！
      </div>
    );
  }
}

export default connect()(Businesspage);
