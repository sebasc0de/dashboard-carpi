import styles from '../../styles/table.module.css';

export const Product = ({ data }) => {
    if (!data) return <p>Loading</p>;
    return (
        <div className={styles.container}>
            <table>
                <tr>
                    <th>Imagen</th>
                    <th>Carpi Id</th>
                    <th>Nombre</th>
                    <th>Tamanio</th>
                    <th>peso</th>
                    <th>color</th>
                    <th>precio</th>
                    <th>tipo</th>
                    <th>stock</th>
                    <th>En promocion</th>
                    <th>Publicado</th>
                </tr>
                {data.map((item) => (
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>{item.carpiId}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
