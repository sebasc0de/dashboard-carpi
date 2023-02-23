import { Link } from 'react-router-dom';
import Discount from '../tables/Discount';
import styles from '../../styles/table.module.css';

export const Company = ({ data, labels }) => {
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
                        <Discount id={item.id} />

                        <td>
                            <Link to={`/companies/${item.id}`}>{item.name}</Link>
                        </td>

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
