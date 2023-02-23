import styles from '../../styles/table.module.css';
import { Button, TextField } from '@mui/material';
import { TABLE_CONFIG } from 'config/Notifications';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Discount = ({ id, defaultValue }) => {
    const [value, setValue] = useState(defaultValue | '');

    const handler = () => {
        if (value.length >= 1) toast(`Se agrego ${value} de descuento a esta compania`, TABLE_CONFIG);
    };

    return (
        <td className={styles.discount}>
            <TextField value={value} onChange={(e) => setValue(e.target.value)} id="filled-basic" label="Descuento" variant="filled" />
            <Button onClick={handler} size="small" variant="contained">
                Aplicar
            </Button>
        </td>
    );
};

export default Discount;
