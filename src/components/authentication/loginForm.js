import React, { Component } from "react";
import Authentication from "../../util/authentication";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Card, Button } from 'react-bootstrap';

class Login extends Component {
    state = {
        redirectToReferrer: false,
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        Authentication.authenticate(this.state.username, this.state.password,
            () => {
                this.setState({ redirectToReferrer: true, username: '', password: '' });
            },
            () => {
                this.setState({ redirectToReferrer: false, password: '' });
            }
        );
    };

    render() {
        const { redirectToReferrer } = this.state;
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        if (redirectToReferrer === true) {
            return <Redirect to={from} />;
        }
        return (
            <Card style={{ marginTop: "100px" }}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{Authentication.error === 401 ? <p>Invalid username/password</p> : <p></p>}</Card.Subtitle>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>


        );
    }
}

export default withRouter(Login);