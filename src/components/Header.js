import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ExploreIcon from '@material-ui/icons/Explore';
import GroupIcon from '@material-ui/icons/Group';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    height: '6vh',
    justifyContent: 'center',
  },
  drawer: {
    width: "25vw",
    minWidth: '250px',
  },
}));

function Header(props) {
  const classes = useStyles();

  const [showDrawer, setShowDrawer] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <WhatshotIcon fontSize="large" />
          <Typography>Astromatch</Typography>
          <div className={classes.root}></div>
          <IconButton
            onClick={() => setShowDrawer(true)}
            children={<MenuIcon />}
          />
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onOpen={() => setShowDrawer(true)}
      >
        <box className={classes.drawer}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={()=>props.changePage('Explore')}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>
            <ListItem button onClick={()=>props.changePage('Matchs')}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Matchs" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem>
              <ListItemText primary="Dark Mode" />
              <Switch
                checked={darkMode}
                onChange={()=>setDarkMode(!darkMode)}
                name="checkedB"
                color="primary"
              />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Clear" />
            </ListItem>
          </List>
        </box>
      </SwipeableDrawer>
    </>
  );
}

export default Header;
