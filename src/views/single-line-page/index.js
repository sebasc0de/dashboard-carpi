// material-ui
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import repository from '../../repositories/line';

const SamplePage = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [line, setLine] = useState(undefined);
    const id = useParams().id;

    useEffect(() => {
        repository.getById(id).then(setLine);
    }, []);

    console.log(line);

    return <MainCard title="Actualizar datos"></MainCard>;
};

export default SamplePage;
