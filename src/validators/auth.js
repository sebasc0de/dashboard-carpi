import { ERROR_CONFIG } from '../config/Notifications';
import { toast } from 'react-toastify';
import validator from 'validator';

const loginValidator = (data) => {
    if (!validator.isEmail(data.email)) {
        toast('Debes ingresar un email valido', ERROR_CONFIG);
        return false;
    }

    return true;
};

const registerValidator = (data) => {
    if (!validator.isEmail(data.email)) {
        toast('Debes introducir un email valido', ERROR_CONFIG);
        return false;
    }

    if (!validator.isStrongPassword(data.password)) {
        toast('Debes introducir una contrasenia fuerte', ERROR_CONFIG);
        return false;
    }

    if (data.password !== data.passwordConfirmation) {
        toast('Las contrasenias deben ser iguales', ERROR_CONFIG);
        return false;
    }

    if (validator.isEmpty(data.fullName)) {
        toast('No puedes introducir un nombre de usuario vacio', ERROR_CONFIG);
        return false;
    }

    return true;
};

export { loginValidator, registerValidator };
