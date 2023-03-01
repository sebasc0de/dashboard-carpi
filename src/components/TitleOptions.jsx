import { Button } from './Button';
import { RefreshButton } from './RefreshButton';

export const TitleOptions = ({ textButton, link }) => {
    return (
        <div>
            <RefreshButton />
            <Button text={textButton} link={link} />
        </div>
    );
};
