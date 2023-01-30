import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Button } from 'components/Button';
import { Product as Table } from 'components/tables/Product';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
    <MainCard title="Productos" secondary={<Button text="Hello world" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
                <Table />
            </Grid>
        </Grid>
    </MainCard>
);

export default Typography;
