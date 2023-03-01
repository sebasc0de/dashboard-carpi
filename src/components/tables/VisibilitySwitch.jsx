import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import service from '../../services/Product';
import { toast } from 'react-toastify';
import { TABLE_CONFIG } from 'config/Notifications';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)'
        }
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff'
            }
        }
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200
        })
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box'
    }
}));

export default function CustomizedSwitches({ id, token }) {
    const [visibility, setVisibility] = useState(false);

    const handler = async () => {
        setVisibility(!visibility);

        try {
            const change = await service.toggleVisibility(id, visibility, token);
            change && toast('La accion se realizo con exito', TABLE_CONFIG);
        } catch (e) {
            alert('mal');
        }
    };

    return (
        <Stack onChange={handler} direction="row" spacing={1} alignItems="center">
            <Typography>Escondido</Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>Visible en tienda</Typography>
        </Stack>
    );
}
