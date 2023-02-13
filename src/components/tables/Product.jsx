import { Buttons } from './Buttons';
import { useSelector } from 'react-redux';
import styles from '../../styles/table.module.css';
import { Link } from 'react-router-dom';

export const Product = ({ data, labels }) => {
    const user = useSelector((state) => state.auth.user);

    const toggleVisibility = async (id, value) => console.log('estamos en espera');

    console.log(data);

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
                        <Buttons hideAction={() => toggleVisibility(item.id, false)} />
                        <td></td>
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
