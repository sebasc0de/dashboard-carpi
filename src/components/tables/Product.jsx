import { Buttons } from './Buttons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../styles/table.module.css';

export const Product = ({ data, labels }) => {
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
                        <td>
                            <Buttons hideAction={toggleVisibility} />
                        </td>
                        <td>
                            <img
                                src="https://erasmusnation-com.ams3.digitaloceanspaces.com/woocommerce-placeholder.png"
                                alt=""
                                width={50}
                                height={50}
                            />
                        </td>
                        <td className={styles.link}>
                            <a>{item.name}</a>
                        </td>
                        <td>{item.carpiId}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={`/products/${item.id}`}>{item.price}</Link>
                        </td>
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
