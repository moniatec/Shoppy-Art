import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import CheckoutBtn from "./CheckoutBtn";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
      display: "block",
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="#84bdca"
        onClick={handleClick}
      >
        Proceed to checkout
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <TextField id="standard-basic" label="Email" />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <TextField id="standard-basic" label="Street address" />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <TextField id="standard-basic" label="Zip Code" />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <TextField id="standard-basic" label="Card Number" />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <TextField id="standard-basic" label="Expiration Date" />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <CheckoutBtn />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
      </StyledMenu>
    </div>
  );
}
