import { Buttons } from './Buttons';
import { Link } from 'react-router-dom';
import styles from '../../styles/table.module.css';
import { ActiveState } from './ActiveState';

export const Product = ({ data, labels }) => {
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
                            <img
                                src="https://erasmusnation-com.ams3.digitaloceanspaces.com/woocommerce-placeholder.png"
                                alt=""
                                width={50}
                                height={50}
                            />
                        </td>
                        <td className={styles.link}>
                            <Link to={`/products/${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.carpiId}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <ActiveState state={item.published} />
                        <td></td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
