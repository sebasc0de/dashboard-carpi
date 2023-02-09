import styles from '../../styles/table.module.css';
import { IconEyeOff, IconTrash } from '@tabler/icons';

export const Buttons = ({ deleteAction, hideAction }) => {
    // Delete handler
    const handleDelete = () => {};

    // Hide handler
    const handleHide = () => {
        hideAction();
    };

    return (
        <td className={styles.actionButtons}>
            {hideAction && <IconEyeOff onClick={handleHide} size={20} />}
            {deleteAction && <IconTrash onClick={handleDelete} size={20} />}
        </td>
    );
};
