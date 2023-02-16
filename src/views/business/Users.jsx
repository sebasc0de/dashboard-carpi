import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { UsersLabels as data } from '../../data/tables';
import { gridSpacing } from 'store/constant';
import { User as Table } from 'components/tables/User';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/user';
import { useSelector } from 'react-redux';

// ==============================|| TYPOGRAPHY ||============================== //

const Users = () => {
    const user = useSelector((state) => state.auth.user);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        repository.getAll(user.token).then(setUsers);
    }, []);

    return (
        <MainCard title="Usuarios" secondary={<Button text="Hello world" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12}>
                    <Table data={users} labels={data} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Users;
