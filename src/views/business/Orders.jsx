import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import { Button } from 'components/Button';
import { Order as Table } from 'components/tables/Order';
import { OrdersLabels as data } from '../../data/tables';
import repository from '../../repositories/product';

// ==============================|| TYPOGRAPHY ||============================== //

const Orders = () => {
    const user = useSelector((state) => state.auth.user);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        repository.getAll().then(setOrders);
    }, []);

    return (
        <MainCard title="Pedidos" secondary={<Button text="Hello world" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={orders} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Orders;
