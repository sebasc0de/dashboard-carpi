// material-ui
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// user service
import service from '../../services/User';

const SamplePage = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [user, setUser] = useState(undefined);
    const id = useParams().id;

    useEffect(() => {
        service.getUserById(id, token).then(setUser);
    }, []);

    return (
        <MainCard title="Usuarios">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut
                enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue
                dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president,
                sunk in culpa qui officiate descent molls anim id est labours.
            </Typography>
        </MainCard>
    );
};

export default SamplePage;
