import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';


require('./CateNav.scss');

export default class CateNavWidget extends Component {
  static propTypes = {
    nav      : PropTypes.array,
    onChange : PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  static defaultProps = {
    nav: []
  }

  onSelect(evt) {
    const { onChange } = this.props;
    const { index } = evt.currentTarget.dataset;

    onChange && onChange(this.props.nav[index]);
    this.setState({ index });
  }

  getList() {
    const { nav } = this.props;
    if (nav.length === 0) {
      return;
    }

    return nav.map((o, i) => {
      return (
        <li className={cx('nav-cell', {active: i === parseInt(this.state.index, 10)})}
            key={i} data-index={i} onClick={::this.onSelect}>
            <a>{o.label}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <section className='m-cate-nav'>
        <ul className="nav-list">
          {::this.getList()}
        </ul>
      </section>
    );
  }
}
