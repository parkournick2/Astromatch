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
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    width: "25vw",
    minWidth: '250px',
  },
}));

function Header() {
  const classes = useStyles();

  const [showDrawer, setShowDrawer] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <AppBar position="fixed">
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
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
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
