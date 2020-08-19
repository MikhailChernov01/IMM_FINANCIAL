import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { accountDelete, accountEdit, accountShow } from "../redux/actionLocal";


const useStyles = makeStyles({
  root: {
    width: "100%",
    heigth: "100%",
  },
});

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  height: 56px;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77,0,38,0.5), 3px 0 3px #FF002B, 5px 0 3px #800015, 6px 2px 3px rgba(77,0,13,0.5), 6px 0 9px #FF5500, 8px 0 9px #802A00, 9px 2px 9px rgba(77,25,0,0.5), 9px 0 18px #FFD500, 11px 0 18px #806A00, 12px 2px 18px rgba(77,66,0,0.5), 12px 0 30px #D4FF00, 14px 0 30px #6A8000, 15px 2px 30px rgba(64,77,0,0.5), 15px 0 45px #80FF00, 17px 0 45px #408000, 2px 2px 2px rgba(206,89,55,0);
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const Action = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

function Account() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch()
  const { id } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleVisible = () => {
    setVisible((state) => (state = !state));
  };

  useEffect(() => {
    dispatch(accountShow());
  }, [dispatch]);
  
  return (
    <>
      <Rotate>Account {id}</Rotate>

      <Action>
        <Button onClick={(e)=>{e.stopPropagation();dispatch(accountEdit(id))}}>Edit</Button>
        <Button as={ReversedButton} onClick={(e)=>{e.stopPropagation();dispatch(accountDelete(id))}}>Delete</Button>
        <Button onClick= {() => {handleClickOpen()}}>Buy</Button>
      </Action>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Buy stock</DialogTitle>
        <DialogContent>
          <DialogContentText>  
            It may take a while to process your purchase
          </DialogContentText>
          <TextField
            // onChange={(e) => setInputs(e)}
            autoFocus
            margin="dense"
            id="name"
            label="Company"
            type="text"
            fullWidth
          />
          <TextField
            // onChange={(e) => setInputs(e)}
            autoFocus
            margin="dense"
            id="name"
            label="Count"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Account;
