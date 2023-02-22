import { Link } from 'react-router-dom';

export const Button = ({ text, link }) => {
    return (
        <Link to="/create-product">
            <button>{text}</button>
        </Link>
    );
};
