/**
 * Created by mitya on 8/23/16.
 */
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import theme from './theme.scss';
const CardActionsRight = (props) => (
    <CardActions {...props} theme={theme} />
);

export default CardActionsRight;