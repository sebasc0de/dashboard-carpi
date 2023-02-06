import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const Private = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        !user ? navigate('iniciar-sesion') : navigate('/');
    }, [user]);

    return <main>{children}</main>;
};
