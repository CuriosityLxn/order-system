import React from 'react';
import { connect } from 'react-redux';


require('../../styles/index.scss');


class Homepage extends React.Component {
  render() {
    return (
      <div className='log-in'>
        <div className='login-container'>
          <div className='header'>无山珍</div>
          <div className='header-tips'>没有山珍海味，也能唇齿留香</div>
          <div className='wrapper'>
            <div className='login-content'>
              {/* 可改进：参考m站登陆窗，@hlj.ui 有 PhoneInputComponent, PasswordInput 组件可复用*/}
              <table className='login'>
                <tbody>
                  <tr>
                    <td>
                      <p>Username:</p>
                      <input type="text"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Password:</p>
                      <input type="password"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                       className='submit-button'
                       type="submit"
                       onClick={::this.jump}>Log in</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  jump() {
    window.location = 'client.html';
  }
}

export default connect()(Homepage);
