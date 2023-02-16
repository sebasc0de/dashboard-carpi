import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { gridSpacing } from 'store/constant';
import { Product as Table } from 'components/tables/Product';
import { OrdersLabels as data } from '../../data/tables';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/order';
import { useSelector } from 'react-redux';

// ==============================|| TYPOGRAPHY ||============================== //

const Orders = () => {
    const user = useSelector((state) => state.auth.user);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        repository.getAll(user.token).then(setOrders);
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
