import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { RolesLabels as data } from '../../data/tables';
import { gridSpacing } from 'store/constant';
import { Role as Table } from 'components/tables/Role';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/role';
import { useSelector } from 'react-redux';

// ==============================|| TYPOGRAPHY ||============================== //

const Roles = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        repository.getAll(token).then(setRoles);
    }, []);

    return (
        <MainCard title="Roles" secondary={<Button text="Crear rol" link="/create-role" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={roles} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Roles;
