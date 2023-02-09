import { Buttons } from './Buttons';
import { useSelector } from 'react-redux';
import service from '../../services/Product';
import styles from '../../styles/table.module.css';

export const Product = ({ data, labels }) => {
    const user = useSelector((state) => state.auth.user);

    const toggleVisibility = (id, value) => service.toggleVisibility(id, value, user.token);

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
                        <Buttons hideAction={(e) => toggleVisibility(item.id, false)} />
                        <td></td>
                        <td>{item.carpiId}</td>s<td>{item.name}</td>
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
