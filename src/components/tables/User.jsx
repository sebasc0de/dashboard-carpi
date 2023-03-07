import { ActiveState } from './ActiveState';
import { Link } from 'react-router-dom';
import styles from '../../styles/table.module.css';

export const User = ({ data, labels }) => {
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
                        <td>
                            <Link to={`/users/${item.id}`}>{item.email}</Link>
                        </td>

                        <td>{item.fullName}</td>
                        <ActiveState state={item.isActive} />
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
