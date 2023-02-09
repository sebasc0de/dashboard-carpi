import styles from '../../styles/table.module.css';
import { Buttons } from './Buttons';

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
                        <Buttons />
                        <td></td>
                        <td>{item.carpiId}</td>
                        <td>{item.name}</td>
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
