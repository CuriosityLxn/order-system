import React     from 'react';
import PropTypes from 'prop-types';

import './ProductItem.scss';

class ProductItem extends React.Component {
  static propTypes = {
    product: PropTypes.object
  };


  render() {
    console.log('ProductItem props:', this.props);
    const {product} = this.props;
    if (!product) {
      return null;
    }
    return (
      <div className='product-item-one'>
        <div style={{float:'left'}}>
          <img
            width='180px'
            height='180px'
            className='product-img'
            src={product.coverPic}
          />
        </div>
        {this.renderProductInfos()}
      </div>
    );
  }

  renderProductInfos() {
    const {product} = this.props;
    return (
      <div className="product-img-rig">
        <div className='product-name'>
          {product.name}
        </div>
        <div>{ this.renderPrice() }</div>
      </div>
    );
  }

  renderPrice() {
    const { product } = this.props;

    return (
      <div className='product-price'>
        { this.normalPrice() /* 可优化：显示划线市场价和优惠价 */ }
        <div className="status normal-status"> 月售{product.salesNum} </div>
      </div>
    );
  }

  normalPrice() {
    return (
      <div className="product-fle normal-price">
        <span className="market-price">
          &yen;{this.props.product.price}
        </span>
      </div>
    );
  }
}


export default ProductItem;
