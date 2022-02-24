import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/comm.png";
import useStyles from "./style";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          className={classes.title}
        >
          <img
            src={logo}
            alt="commerce.js"
            height="25px"
            className={classes.image}
          />
          mShop
        </Typography>
        <div className={classes.grow} />
        {location.pathname === "/" && (
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart Items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
