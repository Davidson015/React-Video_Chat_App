import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles( theme => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}) );

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h3" align="center">Video Call App</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

window.onload = () => {
  alert("Directions for use:\n\n\n1. Once the website loads up, enable it permission to use your video and audio.\n\n2. After which you fill in your name.\n\n3. To call another User, the User would send you an ID which you would copy to paste on the Field requesting for 'ID to call'\n\tN:B. If you're the one wanting to be called; click on the 'Copy your ID' button which would immediately copy your ID to your device's Clipboard after which you send that ID to the other Person wanting to call you.\n\n\n\nP.S --> Once you Hang Up on a call, The Page Refreshes and generates a new user ID for you. Also, if you refresh the page for any reason, a new user ID will be generated.")
};

export default App
