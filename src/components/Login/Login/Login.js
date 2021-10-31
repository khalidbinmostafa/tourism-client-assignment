import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Login = () => {
    const {
        user,
        googleSignIn,
        handleEmail,
        handlePassword,
        error,
        signInWithEmailPassword,
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn().then(result => {
            history.push(redirectUrl);
        });
    };

    return (
        <>
            <Container className="mt-5">
                <h1>Please Login</h1>

                <br />
                <br />
                <Button onClick={handleGoogleLogin} variant="info" type="submit">
                    Google Sign In
                </Button>

                {!user?.displayName && <p className="text-danger">{error}</p>}
            </Container>
        </>
    );
};

export default Login;