import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { CompanyLabels } from '../../data/tables';
import { gridSpacing } from 'store/constant';
import { Product as Table } from 'components/tables/Product';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/product';

// ==============================|| TYPOGRAPHY ||============================== //

const Shadow = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        repository.getAll().then(setProducts);
    }, []);

    return (
        <MainCard title="Companias" secondary={<Button text="Hello world" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={products} labels={CompanyLabels} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Shadow;
