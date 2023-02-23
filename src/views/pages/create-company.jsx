import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, useMediaQuery } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import repository from '../../repositories/company';
import { toast } from 'react-toastify';
import { ERROR_CONFIG, TABLE_CONFIG } from 'config/Notifications';

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const user = useSelector((state) => state.auth.user);
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);

    return (
        <Formik
            initialValues={{
                name: '',
                type: '',
                direction: '',
                phone: '',
                cuit: '',
                email: '',
                physicalAddress: '',
                shippingAddress: '',
                purchasingManager: '',
                user: user.id
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Debes ingresar un nombre')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    const { user: submit, ...data } = values;
                    const request = await repository.create(data, user.token);

                    if (request) toast('Todo ha salido bien, la compania se creo con exito', TABLE_CONFIG);

                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                    }
                } catch (err) {
                    toast('Ha habido un error con el servidor, intentalo mas tarde', ERROR_CONFIG);
                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setErrors({ user: err.message });
                        setSubmitting(false);
                    }
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <h2>Datos basicos</h2>
                    {/* Name */}
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-name">Nombre</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-name"
                            type="text"
                            value={values.name}
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.name && errors.name && (
                            <FormHelperText error id="standard-weight-helper-text-product-name">
                                {errors.name}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Direccion */}
                    <FormControl fullWidth error={Boolean(touched.direction && errors.direction)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-desc">Direccion</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-desc"
                            type="text"
                            value={values.direction}
                            name="direction"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.direction && errors.direction && (
                            <FormHelperText error id="standard-weight-helper-text-product-desc">
                                {errors.direction}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Phone */}
                    <FormControl fullWidth error={Boolean(touched.phone && errors.phone)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-stock">Telefono</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.phone}
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.phone && errors.phone && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.phone}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <h2>Datos de contacto</h2>

                    {/* Cuit */}
                    <FormControl fullWidth error={Boolean(touched.cuit && errors.cuit)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-name">Nombre</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-name"
                            type="text"
                            value={values.cuit}
                            name="cuit"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.cuit && errors.cuit && (
                            <FormHelperText error id="standard-weight-helper-text-product-name">
                                {errors.cuit}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Email */}
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-desc">Direccion</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-desc"
                            type="text"
                            value={values.email}
                            name="direction"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-product-desc">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Direccion fisica*/}
                    <FormControl
                        fullWidth
                        error={Boolean(touched.physicalAddress && errors.physicalAddress)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-product-stock">Direccion fisica</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.physicalAddress}
                            name="physicalAddress"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.physicalAddress && errors.physicalAddress && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.physicalAddress}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Direccion de envios*/}
                    <FormControl
                        fullWidth
                        error={Boolean(touched.shippingAddress && errors.shippingAddress)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-product-stock">Direccion de envios</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.shippingAddress}
                            name="shippingAddress"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.shippingAddress && errors.shippingAddress && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.shippingAddress}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Jefe de compras */}
                    <FormControl
                        fullWidth
                        error={Boolean(touched.purchasingManager && errors.purchasingManager)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-product-stock">Jefe de compras</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.purchasingManager}
                            name="purchasingManager"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.purchasingManager && errors.purchasingManager && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.purchasingManager}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                Crear compania
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default FirebaseLogin;
