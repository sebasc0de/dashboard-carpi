import { Link } from 'react-router-dom';

export const Button = ({ text, link }) => {
    return (
        <Link to="/create-company">
            <button>{text}</button>
        </Link>
    );
};
