import {ButtonProps} from "../buttons";
import {CardTitle, CardTitleProps} from "../cards";
interface CardTitleButtonsProps extends CardTitleProps{
    buttons: Array<ButtonProps>
}
export class CardTitleButtons extends __React.Component<CardTitleButtonsProps, {}> { }