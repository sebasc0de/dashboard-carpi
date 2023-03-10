import { SET_USER } from 'store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import auth from '../services/Auth';

export const Private = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        !user ? navigate('iniciar-sesion') : navigate('/');
    }, [user]);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (user) {
                const newToken = await auth.revalidateToken(user.token);
                dispatch({ type: SET_USER, payload: newToken.data });
            }
        }, 3600000);

        return () => clearInterval(interval);
    }, [user]);

    return <main>{children}</main>;
};
