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

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const user = useSelector((state) => state.auth.user);
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);

    return (
        <>
            <Formik
                initialValues={{
                    name: 'Compania de prueba',
                    direction: 'SAn pedro 321',
                    phone: '3382819002002',
                    user: user.id
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Debes ingresar un nombre')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const { user: submit, ...data } = values;
                        const request = await repository.create(data, user.token);
                        console.log(request);
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.log(err);
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
                        {/* Name */}
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-name">Nombre del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-name"
                                type="name"
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

                        {/* Description */}
                        <FormControl
                            fullWidth
                            error={Boolean(touched.direction && errors.direction)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-product-desc">Descripcion</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-desc"
                                type="text"
                                value={values.direction}
                                name="description"
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

                        {/* Stock */}
                        <FormControl fullWidth error={Boolean(touched.phone && errors.phone)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-stock">Stock</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="number"
                                value={values.phone}
                                name="stock"
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
                                    Crear producto
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
