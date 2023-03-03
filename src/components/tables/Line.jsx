import { Link } from 'react-router-dom';
import styles from '../../styles/table.module.css';

export const Line = ({ data, labels }) => {
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
                            <Link to={`/lines/${item.id}`}>
                                <a>{item.name}</a>
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
