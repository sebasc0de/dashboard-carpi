import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../styles/table.module.css';
import OrderState from './OrderState';

export const Order = ({ data, labels }) => {
    const user = useSelector((state) => state.auth.user);

    const toggleVisibility = async (id, value) => console.log('estamos en espera');

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
                        <OrderState />
                        <td>{item.carpiId}</td>
                        <td>
                            <Link to={`/products/${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>
                            <span className={styles.published}>publicado</span>
                        </td>
                        <td></td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
