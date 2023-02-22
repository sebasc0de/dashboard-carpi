// material-ui
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MainCard from 'ui-component/cards/MainCard';

// project imports
import repository from '../../repositories/product';
import Form from 'components/forms/SingleProduct';

const SamplePage = () => {
    const [product, setProduct] = useState(undefined);
    const id = useParams().id;

    useEffect(() => {
        repository.getById(id).then(setProduct);
    }, []);

    return (
        <MainCard title="Actualizar datos">
            <Form data={product} />
        </MainCard>
    );
};

export default SamplePage;
