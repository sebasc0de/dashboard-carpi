// material-ui
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import repository from '../../repositories/company';
import Form from 'components/forms/SingleCompany';

const SamplePage = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [company, setCompany] = useState(undefined);
    const id = useParams().id;

    useEffect(() => {
        repository.getById(id, token).then(setCompany);
    }, []);

    return (
        <MainCard title="Actualizar datos">
            <Form data={company} />
        </MainCard>
    );
};

export default SamplePage;
