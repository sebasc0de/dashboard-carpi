import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput, Typography, useMediaQuery } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Auth from 'services/Auth';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const Form = ({ ...others }) => {
    const product = others.data;
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const customization = useSelector((state) => state.customization);

    if (!product) return <p>Esperando...</p>;
    return (
        <>
            <h2>Datos del producto</h2>
            <Formik
                initialValues={{
                    name: product.name,
                    line: product.type,
                    size: product.size,
                    stock: product.stock,
                    description: product.description,
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Debes ingresar un nombre de usuario')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const { submit, ...data } = values;
                        const register = await Auth.registerWithEmailAndPassword(data);
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
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
                        {/* Product name */}
                        <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-name">Nombre completo</InputLabel>
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
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product line */}
                        <FormControl fullWidth error={Boolean(touched.line && errors.line)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-line">Linea de producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-line"
                                type="text"
                                value={values.line}
                                name="line"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.name && errors.name && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product size */}
                        <FormControl fullWidth error={Boolean(touched.size && errors.size)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-size">Tamaño del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-size"
                                type="text"
                                value={values.size}
                                name="size"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.size && errors.size && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product stock */}
                        <FormControl fullWidth error={Boolean(touched.stock && errors.stock)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-stock">Stock del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="number"
                                value={values.stock}
                                name="stock"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.size && errors.size && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.name}
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
                                    Actualizar datos
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Form;
