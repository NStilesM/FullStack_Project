import React from 'react';
import {Link } from 'react-router-dom';

import { checkUser } from '../../util/api_util_session';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            identifier: '',
            userExists: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderPasswordField = this.renderPasswordField.bind(this)
    }

    // componentDidUpdate(oldProps, oldState) {
    //     console.log(this.props.errors)
    //     if (this.props.errors !== oldProps.errors) {
    //         console.log(oldProps)
    //     }

    // }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value});
        };
    }

 
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.userExists && this.props.formType === "Log in") {
            // debugger
            // checkUser(this.state.identifier);
            //     .then(resp => (resp.json()))
            //     .then(exists => this.setState({userExists: true }));
            // chaining .then on promise to call view
    
            this.setState({ userExists: true });
        } else {
            this.setState({ userExists: false });
            this.props.formFunction(this.state);    

        }
        // .then(() => this.props.history.push('/questions'));
    }

    errors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li className="error-items" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderPasswordField() {
        if (this.state.userExists) {
            return (
                <>
                    <br />
                    <label className="password">
                        <input
                            className="password-input"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update("password")}
                        />
                    </label>
                </>
            );
        }
    }

    render() {
        // console.log(this.state)
        if (this.props.formType === "sign up" ) { 
            // debugger
        return (
            <main className="signup-page-container">

                <div className = "signup-form-container">
                    <h2 className= "signup-title">Presenter {this.props.formType}</h2>
                    <form onSubmit={this.handleSubmit} className="form-box">


                        <label className="firstname">
                            <input className="firstname-input" type="text" value={this.state.first_name} placeholder="First name" onChange={this.update('first_name')}/>
                        </label>
                        <label className="lastname">
                            <input className="lastname-input" type="text" value={this.state.last_name} placeholder="Last name" onChange={this.update('last_name')}/>
                        </label>
                        <label className="username" >
                            <input className="username-input" type="username" value={this.state.username} placeholder="Username" onChange={this.update('username')} />
                        </label>
                        <label className="email" >
                            <input className="email-input" type="email" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
                        </label>
                        <label className="password">
                            <input className="password-input" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}/>
                        </label>
                        {this.errors()}
                        <button className="signup-submit blue-button" type="submit">Sign up</button>

                    </form>
                </div>
                <div className="signup-visual">
                    <img className="splash-image" src="https://meded.ucsf.edu/sites/meded.ucsf.edu/files/inline-images/poll-illustration_2.png" />
                </div>
            </main>
            
        )
    } else {
            if (this.state.userExists) {

                return (
                            <main className="login-page">

                                <form onSubmit={this.handleSubmit} className="login-form-box">
                                    <h2 className="login-title">{this.props.formType}</h2>
                                    
                
                                    <label className="email" >
                                        <input className="email-input" type="text" value={this.state.identifier} placeholder="Happy Birthday Megan" onChange={this.update('identifier')} />
                                    </label>
                                    {this.renderPasswordField()}
                                    {this.errors()}
                
                                
                                    <button className="login-submit" type="submit">{this.props.formType}</button>
                                    <div className="link-to-signup-container">
                                        <p className="link-to-signup">Need an account?</p><Link className="link-to-signup" to="/signup">Create one now</Link>
                                    </div>
                                </form>
                            </main>
                )
            } else {
                return (
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <h2 className="login-title">{this.props.formType}</h2>

                            <label className="email" >
                                <input className="email-input" type="text" value={this.state.identifier} placeholder="Email or Username" onChange={this.update('identifier')} />
                            </label>
                            {this.errors()}

                            <button className="login-submit" type="submit">Next</button>
                            <div className="link-to-signup-container">
                                <p className="link-to-signup">Need an account?</p><Link className="link-to-signup" to="/signup">Create one now</Link>
                            </div>
                    
                        </form>
                    </div>
                )
            }
        }
    }
}
export default SessionForm;