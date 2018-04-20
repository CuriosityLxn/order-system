import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import CateNav     from '../components/CateNav';
import ProductList from '../components/ProductListComponent';

require('./client.scss');


class Clientpage extends React.Component {
  static propTypes = {
    nav: PropTypes.array,
    list: PropTypes.array
  };

  static defaultProps = {
    nav: [
      {label: '炒菜'},
      {label: '沙拉'},
      {label: '主食'},
      {label: '饮料'}
    ],
    list: [
      { name     : '米饭',
        coverPic : 'https://images.freeimages.com/images/large-previews/aa7/boiled-rice-1327721.jpg',
        price    : 2.5,
        salesNum : 15
      },
      { name     : '米饭',
        coverPic : 'https://images.freeimages.com/images/large-previews/aa7/boiled-rice-1327721.jpg',
        price    : 2.5,
        salesNum : 15
      }
    ]
  };

  render() {
    console.log('client list:', this.props.list);
    return (
      <div className='clint'>
        <div className='banner'>
          <img className='banner-img' src='../images/client-banner.jpg' />
        </div>
        <div className='cate-wrap'>
          <CateNav nav={this.props.nav} onChange={this.navChange}/>
          <div className='cate-right'>
            <ProductList list={this.props.list} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Clientpage);
