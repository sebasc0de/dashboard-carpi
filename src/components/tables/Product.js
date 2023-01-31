import styles from '../../styles/table.module.css';

export const Product = () => {
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
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    );
};
