import { ActiveState } from './ActiveState';
import { Buttons } from './Buttons';
import { Link } from 'react-router-dom';
import { TABLE_CONFIG } from 'config/Notifications';
import styles from '../../styles/table.module.css';

// project imports
import service from '../../services/User';
import { useSelector } from 'react-redux';

export const User = ({ data, labels }) => {
    const token = useSelector((state) => state.auth.user.token);

    const handleDelete = (id, state) => service.toggleUserState(id, state, token);

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
                        <Buttons hideAction={() => handleDelete(item.id, item.isActive)} />

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
