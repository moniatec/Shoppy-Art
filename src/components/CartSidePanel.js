// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField id="standard-basic" label="Email" />
//       </div>
//       <div>
//         <TextField id="standard-basic" label="Street address" />
//       </div>
//       <div>
//         <TextField id="standard-basic" label="Zip Code" />
//       </div>
//       <div>
//         <TextField id="standard-basic" label="Card Number" />
//       </div>
//       <div>
//         <TextField id="standard-basic" label="Expiration Date" />
//       </div>
//     </form>
//   );
// }

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutBtn from "./CheckoutBtn";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

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
  const handleClickCheckout = () => {}; // remove this and put a new modal for a message

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
        {/* <form
          // className={classes.root}
          noValidate
          autoComplete="off"
        > */}
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
              {/* <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="#6fb3c2"
                onClick={handleClickCheckout}
              >
                Submit
              </Button> */}
              <CheckoutBtn />
            </ListItemIcon>
          </StyledMenuItem>
        </div>
        {/* </form> */}
      </StyledMenu>
    </div>
  );
}
