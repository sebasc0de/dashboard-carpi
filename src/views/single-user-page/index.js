// material-ui
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import service from '../../services/User';
import Form from 'components/forms/SingleUser';
import ChangePassword from 'components/forms/ChangePassword';
import VisibilitySwitch from '../../components/tables/VisibilitySwitch';

const SamplePage = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [user, setUser] = useState(undefined);
    const id = useParams().id;

    console.log(user);

    useEffect(() => {
        service.getUserById(id, token).then(setUser);
    }, []);

    const changeVisibilityHandler = () => service.toggleUserState(user.id, false, token);

    return (
        <MainCard
            title="Actualizar datos"
            secondary={
                user && (
                    <VisibilitySwitch
                        activeValue="Habilitado"
                        disabledValue="Deshabilitado"
                        handler={changeVisibilityHandler}
                        defaultValue={user.isActive}
                    />
                )
            }
        >
            <Form data={user} />
            <ChangePassword />
        </MainCard>
    );
};

export default SamplePage;
