import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { gridSpacing } from 'store/constant';
import { Product as Table } from 'components/tables/Product';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { ProductLabels } from '../../data/tables';
import repository from '../../repositories/product';
import { TitleOptions } from 'components/TitleOptions';

// ==============================|| TYPOGRAPHY ||============================== //

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        repository.getAll().then(setProducts);
    }, []);

    return (
        <MainCard title="Productos" secondary={<TitleOptions />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={products} labels={ProductLabels} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Products;
