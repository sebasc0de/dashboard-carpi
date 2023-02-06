import { Buttons } from './Buttons';
import { TABLE_CONFIG } from 'config/Notifications';
import { toast } from 'react-toastify';
import styles from '../../styles/table.module.css';

export const Company = ({ data, labels }) => {
    const handleDelete = (param) => toast(`El product se ha borrado con exito, refresca la pagina para ver los cambios`, TABLE_CONFIG);

    if (!data | !labels) return <p>Loading</p>;
    return (
        <div className={styles.container}>
            <table>
                <tr>
                    {labels.map((label, i) => (
                        <th key={i}>{label}</th>
                    ))}
                </tr>

                {data.map((item) => (
                    <tr key={item.id}>
                        <Buttons handleDelete={() => handleDelete(item.name)} />
                        <td>Nombre</td>
                        <td>Mayorista/minorista</td>
                        <td>Direccion</td>
                        <td>Phone</td>
                        <td>Cuit</td>
                        <td>Email</td>
                        <td>Direccion fisica</td>
                        <td>Direccion de envio</td>
                        <td>Jefe de compras</td>
                        <td>Informacion adicional</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
