import '../../styles/custom.css';
export const ActiveState = ({ state }) => {
    console.log(state);

    const STATE = state ? 'Activo' : 'Deshabilitado';

    return <td className={state ? 'state success' : 'state fail'}>{STATE}</td>;
};
