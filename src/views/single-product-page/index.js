// material-ui
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MainCard from 'ui-component/cards/MainCard';
import VisibilitySwitch from '../../components/tables/VisibilitySwitch';

// project imports
import repository from '../../repositories/product';
import Form from 'components/forms/SingleProduct';
import { useSelector } from 'react-redux';

const SamplePage = () => {
    const token = useSelector((state) => state.auth.user.token);
    const [product, setProduct] = useState(undefined);
    const id = useParams().id;

    useEffect(() => {
        repository.getById(id).then(setProduct);
    }, []);

    return (
        <MainCard
            title="Actualizar datos"
            secondary={product && <VisibilitySwitch id={id} defaultValue={product.published} token={token} />}
        >
            <Form data={product} />
        </MainCard>
    );
};

export default SamplePage;
