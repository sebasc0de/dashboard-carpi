import styles from '../../styles/table.module.css';
import { IconEyeOff, IconTrash } from '@tabler/icons';

export const Buttons = ({ handleDelete, handleHide }) => {
    return (
        <td className={styles.actionButtons}>
            <IconEyeOff size={20} />
            <IconTrash onClick={handleDelete} size={20} />
        </td>
    );
};
