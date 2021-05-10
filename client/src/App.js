import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './components/images/memories.png';

import useStyles from './styles';

const App = () => {
    
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maximum='lg'>
            <AppBar className={ classes.appBar } color='inherit' position='static'>
                <Typography className={ classes.heading } variant='h2' align='center'> Memory </Typography>
                <img className={ classes.image } src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainConatiner} container justify='space-between' align-item='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId} /></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};

export default App;