import { Link } from 'react-router-dom';

export const Button = ({ text, link }) => {
    return (
        <Link to={link}>
            <button>{text}</button>
        </Link>
    );
};
