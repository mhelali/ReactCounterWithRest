import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../actions/homeActions';
import cookie from 'react-cookies';
import toastr from 'toastr';

export class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      login: { username: "", password: "" },
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);    
  }

  onChange(event) {
    const field = event.target.name;
    let login = Object.assign({}, this.state.login);
    login[field] = event.target.value;
    this.setState({ login: login });
  }

  onLogin(e) {    
    if (this.state.login.username == 'abc@gmail.com' && this.state.login.password == '123') {
        let tmpLoginData = {
            username: this.state.login.username,
            password : this.state.login.password
        };
        cookie.save('access_token', tmpLoginData, {path: '/'});
        browserHistory.push('/home');
    }else{
        toastr.error('Invalid username or password');
    }
  }  

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
        <div className="login-form">
        <form onSubmit={this.submitHandler}>
            <h2 className="text-center">Log in</h2>       
            <div className="form-group">
                <input type="text" name="username" value={this.state.login.username}
                onChange={this.onChange}   className="form-control" placeholder="Username" required="required"/>
            </div>
            <div className="form-group" >
                <input type="password" name="password" value={this.state.login.password}  onChange={this.onChange} className="form-control" placeholder="Password" required="required"/>
            </div>
            <div className="form-group">
                <button type="button" onClick={()=>this.onLogin()} className="btn btn-primary btn-block">Log in</button>
            </div>
        </form>
    </div>
    );
  }
}  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(mapDispatchToProps)(LoginPage);
