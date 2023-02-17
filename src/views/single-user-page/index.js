// material-ui
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import service from '../../services/User';
import Form from 'components/forms/SingleUser';
import ChangePassword from 'components/forms/ChangePassword';

const SamplePage = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [user, setUser] = useState(undefined);
    const id = useParams().id;

    useEffect(() => {
        service.getUserById(id, token).then(setUser);
    }, []);

    return (
        <MainCard title="Actualizar datos">
            <Form data={user} />
            <ChangePassword />
        </MainCard>
    );
};

export default SamplePage;
