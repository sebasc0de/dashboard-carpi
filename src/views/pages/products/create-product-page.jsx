import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);

    return (
        <>
            <Formik
                initialValues={{
                    name: 'Product de prueba por sebas',
                    description: 'esto ees un producto de prueba',
                    stock: 0,
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().min(5).required('Debes ingresar un nombre'),
                    password: Yup.string().max(255).required('Debes ingresar un password')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const { submit, ...data } = values;

                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.log(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
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
                            error={Boolean(touched.description && errors.description)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-product-desc">Descripcion</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-desc"
                                type="text"
                                value={values.description}
                                name="description"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.description && errors.description && (
                                <FormHelperText error id="standard-weight-helper-text-product-desc">
                                    {errors.description}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Stock */}
                        <FormControl fullWidth error={Boolean(touched.stock && errors.stock)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-stock">Stock</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="number"
                                value={values.stock}
                                name="stock"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.stock && errors.stock && (
                                <FormHelperText error id="standard-weight-helper-text-product-stock">
                                    {errors.stock}
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
