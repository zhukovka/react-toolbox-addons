import __ReactToolbox from "../index.d.ts";

interface CardActionsProps extends __ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: __React.ReactNode;
  /**
   * Classnames object defining the component style.
   */
  theme?: CardActionsTheme;
}

export class CardActions extends __React.Component<CardActionsProps, {}> { }
