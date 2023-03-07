import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { RolesLabels as data } from '../../data/tables';
import { gridSpacing } from 'store/constant';
import { Role as Table } from 'components/tables/Role';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/product';

// ==============================|| TYPOGRAPHY ||============================== //

const Roles = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        repository.getAll().then(setProducts);
    }, []);

    return (
        <MainCard title="Roles" secondary={<Button text="Hello world" link="" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={products} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Roles;
