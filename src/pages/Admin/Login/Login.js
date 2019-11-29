import React, {Component} from 'react';
import {connect} from "react-redux";
import './login.css'
import {Button, Col, Form, FormControl, FormGroup, Grid} from "react-bootstrap";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',

        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/admin/news')
        // this.props.dispatch(login(this.state.login));
    };


    render() {
        return <div className='title-image'>
            <Grid>
                <Form className='login-input-position'
                      horizontal
                      onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Col mdOffset={4} sm={4}>
                            Логин
                            <FormControl
                                required
                                value={this.state.login}
                                onChange={e => this.setState({login: e.target.value})}/>
                                <br/>
                                Пароль
                            <FormControl
                                required
                                type="password"
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col mdOffset={4} sm={4}>
                            <div className='pull-right'>
                                <Button bsStyle='primary'
                                        type='submit'>
                                    Войти
                                </Button>
                            </div>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        </div>
    }
}

// const mapStateToProps = state => {
//     return {
//         logged: state.query.logged,
//         data: state.query.data,
//         findData: state.query.findData
//     }
// };

export default connect()(Login);