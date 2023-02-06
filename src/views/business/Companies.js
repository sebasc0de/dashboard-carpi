import { Grid } from '@mui/material';

// project imports
import { CompanyLabels as data } from '../../data/tables';
import { gridSpacing } from 'store/constant';
import { Company as Table } from 'components/tables/Company';
import { TitleOptions } from 'components/TitleOptions';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/product';

// ==============================|| TYPOGRAPHY ||============================== //

const Companies = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        repository.getAll().then(setProducts);
    }, []);

    return (
        <MainCard title="Companias" secondary={<TitleOptions />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={products} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Companies;
