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
import service from '../../services/Product';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const Form = ({ ...others }) => {
    const token = useSelector((state) => state.auth.user.token);
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
                    code: product.code,
                    description: product.desc,
                    carpiId: product.carpiId,
                    size: product.size,
                    weight: product.weight,
                    color: product.color,
                    stock: product.stock,
                    max: product.max,
                    min: product.min,
                    productInPromotion: product.productInPromotion,
                    submit: null
                }}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const { submit, ...data } = values;
                        const request = await service.editById(product.id, data, token);
                        console.log(request);
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

                        {/* Product code */}
                        <FormControl fullWidth error={Boolean(touched.code && errors.code)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-name">Codigo del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-name"
                                type="text"
                                value={values.code}
                                name="code"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.code && errors.code && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.code}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product Description */}
                        <FormControl
                            fullWidth
                            error={Boolean(touched.description && errors.description)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-product-size">Descripcion del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-size"
                                type="text"
                                value={values.description}
                                name="description"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.description && errors.description && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.description}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Carpi id */}
                        <FormControl fullWidth error={Boolean(touched.carpiId && errors.carpiId)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-size">Carpi id</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-size"
                                type="text"
                                value={values.carpiId}
                                name="carpiId"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.carpiId && errors.carpiId && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.carpiId}
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

                        {/* Product weight */}
                        <FormControl fullWidth error={Boolean(touched.weight && errors.weight)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-size">Peso del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-size"
                                type="text"
                                value={values.weight}
                                name="weight"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.weight && errors.weight && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.weight}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product color */}
                        <FormControl fullWidth error={Boolean(touched.color && errors.color)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-stock">Color del producto</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="number"
                                value={values.color}
                                name="color"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.color && errors.color && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.color}
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

                        {/* Product Max */}
                        <FormControl fullWidth error={Boolean(touched.max && errors.max)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-stock">Max</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="number"
                                value={values.max}
                                name="max"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.max && errors.max && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.max}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product Min */}
                        <FormControl fullWidth error={Boolean(touched.max && errors.max)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-product-stock">Min</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="number"
                                value={values.min}
                                name="min"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.min && errors.min && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.min}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {/* Product in promotion */}
                        <FormControl
                            fullWidth
                            error={Boolean(touched.productInPromotion && errors.productInPromotion)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-product-stock">En promocion</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-product-stock"
                                type="boolean"
                                value={values.productInPromotion}
                                name="productInPromotion"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.productInPromotion && errors.productInPromotion && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.productInPromotion}
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
