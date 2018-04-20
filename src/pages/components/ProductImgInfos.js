import React     from 'react';
import PropTypes from 'prop-types';
import Img       from '@hlj/ui/Image';
// import hljurl    from '@hlj/hljurl';
// import { judgeProductState } from './helper';

class ProductImgInfos extends React.Component {
  static propTypes = {
    product: PropTypes.object
  };


  render() {
    const product = this.props;
    const {
      coverPic              // 封面图
      // productStatusDesc  // 商品描述
    } = product;
    console.log('product:', product);
    // const { notNormalState, isServiceMore } = judgeProductState(product);
    return (
    /* 跳转到作品详情页，优化功能：这可以单写一个预览弹窗
    <a className='product-img-wrap'
        // {'not-normal-state': notNormalState},
      href={hljurl.product(product.id || product.productId)}
    >
    */
      <section>
        <Img
          lazy
          animate
          width="180px"
          className="product-img"
          src={coverPic}
        />
      </section>
    // </a>
    );
  }
}

export default ProductImgInfos;
