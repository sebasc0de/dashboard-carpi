import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import { Button } from 'components/Button';
import { Order as Table } from 'components/tables/Order';
import { OrdersLabels as data } from '../../data/tables';
import repository from '../../repositories/line';

// ==============================|| TYPOGRAPHY ||============================== //

const Lines = () => {
    const user = useSelector((state) => state.auth.user);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        repository.getAll().then(setLines);
    }, []);

    return (
        <MainCard title="Lineas" secondary={<Button text="Crear linea" link="/create-line" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={lines} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Lines;
