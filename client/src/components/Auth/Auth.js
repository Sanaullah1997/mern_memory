import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Input from './Input';
import Icon from './Icons';

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup ] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        //handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data : { result, token }});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log("Google Sign In Failed. Try again later!!")
    };

    const classes = useStyles();
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="name" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="name" label="First Name" handleChange={handleChange} half />
                            </> 
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {isSignup && <Input name="confirm password" label="ReEnter Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button className={classes.submit} variant='contained' color='primary' type="submit" fullWidth>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                    clientId= "1011673928333-iqt2l5vo3b4demub7ttjque1fda7u0ro.apps.googleusercontent.com"
                    render = {(renderProps) => (
                        <Button 
                        className={classes.googleButton} 
                        color="primary" 
                        fullWidth 
                        variant='contained' 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                        startIcon={<Icon/>}
                        >
                        Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                    <Grid container justify='flex-end'>
                    <Grid item>
                    <Button onClick={ switchMode }>
                    { isSignup ? 'Already have an account? Sign In' : "Don't have account ? Sign Up" }
                    </Button> 
                    </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
