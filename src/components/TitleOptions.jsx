import { Button } from './Button';
import { RefreshButton } from './RefreshButton';

export const TitleOptions = ({ textButton }) => {
    return (
        <div>
            <RefreshButton />
            <Button text={textButton} />
        </div>
    );
};
