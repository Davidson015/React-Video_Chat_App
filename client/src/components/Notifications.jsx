import React, { useContext } from 'react'
import { Button, Grid, Container, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: '100%',
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  container: {
    width: '100%',
    margin: '35px 0',
    padding: 0,
    // [theme.breakpoints.down('xs')]: {
    //   width: '80%',
    // },
    backgroundColor: '#ddd',
  },
  padding: {
    padding: 20,
  },
 }));

const Notifications = () => {
  const { answerCall, declineCall, call, callAccepted } = useContext(SocketContext);

  const classes = useStyles();
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Container className={classes.container}>
          <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <h1>{call.name || 'Guest'} is Calling: </h1>
          </div>
          
          <Grid container className={classes.gridContainer}>
            
            <Grid item xs={6} md={6} className={classes.padding}>
              <Button variant="contained" color="primary" onClick={answerCall} fullWidth>
                Answer
              </Button>
            </Grid>

            <Grid item xs={6} md={6} className={classes.padding}>
              <Button variant="contained" color="secondary" onClick={declineCall} fullWidth>
                Decline
              </Button>
            </Grid>

          </Grid>
        </Container>
      )}
      
    </>
  )
}

export default Notifications;