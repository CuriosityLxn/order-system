import React            from 'react';
import PropTypes        from 'prop-types';
import ProductItem      from './ProductItem';

import 'normalize.css';
import './ProductList.scss';

class ProductListComponent extends React.Component {
  static propTypes = {
    list            : PropTypes.array,
    // products        : PropTypes.array,
    loading         : PropTypes.bool,
    defaultText     : PropTypes.string,
    liteBorder      : PropTypes.bool
  };

  static defaultProps = {
    // list            : [],
    loading         : false,
    defaultText     : '已经抢光啦',
    liteBorder      : false    //无边框
  };

  render() {
    const {list} = this.props;
    return (
      <section className='product-list-container littletTop'>
        {
          list.length > 0 ?
          <div className="product-bg">
            <ul className='product-list-one'>
              {this.getList(list)}
            </ul>
          </div>
          :
          this.renderPlaceHolder()
        }
      </section>
    );
  }

  renderPlaceHolder() {
    const {loading, defaultText} = this.props;
    if (loading) {
      return (
        <div className="tip-ull">正在加载...请稍后</div>
      );
    }
    if (defaultText) {
      return (
        <div className="tip-ull">
          {defaultText}
        </div>
      );
    }
    return null;
  }

  getList(products) {
    if (!products) {
      return;
    }

    return products.map((o, i) => {
      return (
        <li key={i}>
          <ProductItem product={o}/>
        </li>
      );
    });
  }
}


export default ProductListComponent;
