import './navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'skyblue'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

        <Link className="item-nav" to="/">Home</Link>
        <Link className="item-nav" to="/memes">Memes</Link>
        <Link className="item-nav" to="/contact">Contact</Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
