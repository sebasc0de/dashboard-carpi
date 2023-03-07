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
import repository from '../../repositories/line';
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
                productType: '',
                properties: '',
                size: '',
                other: '',
                aplications: '',
                fqa: [
                    {
                        question: 'Una duda...',
                        answer: 'Mi respuesta'
                    }
                ]
            }}
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
                    console.log(err);
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

                    {/* Product Type */}
                    <FormControl
                        fullWidth
                        error={Boolean(touched.productType && errors.productType)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-product-desc">Tipo de producto</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-desc"
                            type="text"
                            value={values.productType}
                            name="productType"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.productType && errors.productType && (
                            <FormHelperText error id="standard-weight-helper-text-product-desc">
                                {errors.productType}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Properties */}
                    <FormControl
                        fullWidth
                        error={Boolean(touched.properties && errors.properties)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-product-stock">Propiedades</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.properties}
                            name="properties"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.properties && errors.properties && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.properties}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Size */}
                    <FormControl fullWidth error={Boolean(touched.size && errors.size)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-name">Tamanio</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-name"
                            type="text"
                            value={values.size}
                            name="size"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                        />
                        {touched.size && errors.size && (
                            <FormHelperText error id="standard-weight-helper-text-product-name">
                                {errors.size}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Other */}
                    <FormControl fullWidth error={Boolean(touched.other && errors.other)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-desc">Otros</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-desc"
                            type="text"
                            value={values.other}
                            name="other"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.other && errors.other && (
                            <FormHelperText error id="standard-weight-helper-text-product-desc">
                                {errors.other}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* Applications */}
                    <FormControl
                        fullWidth
                        error={Boolean(touched.aplications && errors.aplications)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-product-stock">Aplicaciones</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.aplications}
                            name="aplications"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.aplications && errors.aplications && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.aplications}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* FAQ*/}
                    <FormControl fullWidth error={Boolean(touched.fqa && errors.fqa)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-product-stock">Preguntas frecuentes</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-product-stock"
                            type="text"
                            value={values.fqa}
                            name="fqa"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.fqa && errors.fqa && (
                            <FormHelperText error id="standard-weight-helper-text-product-stock">
                                {errors.fqa}
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
                                Crear linea
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default FirebaseLogin;
