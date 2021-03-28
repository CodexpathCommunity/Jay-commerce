import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { ShoppingCart } from "@material-ui/icons";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const ImageUrl =
    "data:image/png;base64,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";

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={ImageUrl}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />
            Jay-commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
