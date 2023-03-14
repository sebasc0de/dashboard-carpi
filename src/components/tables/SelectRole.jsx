import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import repository from '../../repositories/role';
import { useSelector } from 'react-redux';

export default function DialogSelect() {
    const user = useSelector((state) => state.auth.user);
    const [open, setOpen] = React.useState(false);
    const [activeRol, setActiveRol] = React.useState('');
    const [roles, setRoles] = React.useState([]);

    const handleChange = (event) => {
        setActiveRol(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'test') return alert(activeRol);

        setOpen(false);
    };

    React.useEffect(() => {
        repository.getAll(user.token).then(setRoles);
    }, []);

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Cambiar rol
            </Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Cambia el rol del usuario</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel htmlFor="demo-dialog-native">Rol</InputLabel>
                            <Select
                                native
                                value={activeRol}
                                onChange={handleChange}
                                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                            >
                                {roles.map((item) => (
                                    <option value={item.name}>{item.name}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleClose('test')}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
