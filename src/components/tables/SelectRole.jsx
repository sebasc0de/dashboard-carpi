import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import repository from '../../repositories/role';
import { useSelector } from 'react-redux';

export default function SelectVariants() {
    const token = useSelector((state) => state.auth.user.token);
    const [activeRole, setActiveRole] = React.useState('');
    const [roles, setRoles] = React.useState([]);

    const handleChange = (event) => {
        setActiveRole(event.target.value);
    };

    useEffect(() => {
        repository.getAll(token).then(setRoles);
    }, []);

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Rol de usuario</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={activeRole}
                    onChange={handleChange}
                    label="Rol de usuario"
                >
                    {roles.length > 1 &&
                        roles.map((item) => (
                            <MenuItem key={item.id} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </div>
    );
}
