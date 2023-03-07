import { Buttons } from './Buttons';
import { Link } from 'react-router-dom';
import styles from '../../styles/table.module.css';

export const Role = ({ data, labels }) => {
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

                        <td>
                            <Link to={`/users/${item.id}`}>{item.name}</Link>
                        </td>

                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
