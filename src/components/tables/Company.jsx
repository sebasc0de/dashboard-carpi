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
                        <td className={styles.link}>
                            <Link to={`/companies/${item.id}`}>{item.name}</Link>
                        </td>

                        <td>{item.direction}</td>
                        <td>{item.phone}</td>
                        <td>{item.cuit}</td>
                        <td>{item.email}</td>
                        <td>{item.discount}</td>
                        <td>{item.physicalAddress}</td>
                        <td>{item.shippingAddress}</td>
                        <td>{item.purchasingManager}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
