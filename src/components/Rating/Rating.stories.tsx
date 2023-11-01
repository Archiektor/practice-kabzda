import {action} from '@storybook/addon-actions';
import {Rating} from './Rating';

export default {
    component: Rating,
};

const onChangeHandler = action('on Change');

export const EmptyRating = () => {
    return <Rating value={0}/>
}

export const RatingOneStar = () => {
    return <Rating value={1}/>
}

export const RatingThreeStar = () => {
    return <Rating value={3}/>
}

export const RatingFiveStar = () => {
    return <Rating value={5}/>
}

export const customizableRating = () => {
    //const [value, setValue] = useState<ValueType>(5);

    return <Rating value={5} onChange={onChangeHandler}/>
}