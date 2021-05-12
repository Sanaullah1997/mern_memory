import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';
import memories from '../images/memories.png';

const Navbar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} color='inherit' position='static'>
            <div className='classes.brandContiner'>
                <Typography className={classes.heading} component={Link} to='/' variant='h2' align='center'> Memory </Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.name} variant='h6'>{user.result.name}</Typography>
                        <Button className={classes.logout} variant='contained' color='secondary'>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>

    );
};

export default Navbar;
