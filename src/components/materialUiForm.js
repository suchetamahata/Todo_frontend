import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  //const [uuid, setUuid] = React.useState("")
  let uname = ''

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    localStorage.setItem('uname', uname);
    setOpen(false);
  };
  const handleChange = (e) =>{
    uname = e.target.value
  }

  return (
    <div>
      <Button variant="outlined" color="primary"  onClick={handleClickOpen}>
        Set User Id
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Set User Id</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you are a new user please set your UserId. This will help verify its you in second login.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your Userid"
            type="string"
            fullWidth
            onChange={handleChange} 
            //value={uuid}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
