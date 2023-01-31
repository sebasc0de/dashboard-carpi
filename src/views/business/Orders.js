import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { gridSpacing } from 'store/constant';
import { Product as Table } from 'components/tables/Product';
import { OrdersLabels as data } from '../../data/tables';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/product';

// ==============================|| TYPOGRAPHY ||============================== //

const Orders = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        repository.getAll().then(setProducts);
    }, []);

    return (
        <MainCard title="Pedidos" secondary={<Button text="Hello world" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={products} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Orders;
