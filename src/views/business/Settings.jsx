import { Grid } from '@mui/material';

// project imports
import { Button } from 'components/Button';
import { UsersLabels as data } from '../../data/tables';
import { gridSpacing } from 'store/constant';
import { Product as Table } from 'components/tables/Product';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import repository from '../../repositories/product';

// ==============================|| TYPOGRAPHY ||============================== //

const Settings = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        repository.getAll().then(setProducts);
    }, []);

    return (
        <MainCard title="Configuraciones">
            <p>Aun no hay configuraciones disponibles</p>
        </MainCard>
    );
};

export default Settings;
