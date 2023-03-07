import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Crear rol
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Crea un nuevo rol de usuario</DialogTitle>
                <DialogContent>
                    <DialogContentText>Aqui podras crear un nuevo rol de usuario</DialogContentText>
                    <TextField
                        autoComplete="off"
                        margin="dense"
                        id="name"
                        label="Nombre del rol"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                    <Button onClick={handleClose}>Crear rol</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
