import __ReactToolboxAddons from "../index.d.ts";

export interface FlexListTheme {
    /**
     * Used for the root element of the list.
     */
    list?: string;
}

interface FlexListProps extends __ReactToolboxAddons.Props {
    /**
     * Flexlist items alignment
     */
    align: string;
    /**
     * Children to pass through the component.
     */
    children?: __React.ReactNode;
    /**
     * If true, each element in the list will have a ripple effect on click
     * @default false
     */
    ripple?: boolean;
    /**
     * If true, the elements in the list will display a hover effect and a pointer cursor.
     * @default false
     */
    selectable?: boolean;
    /**
     * Classnames object defining the component style.
     */
    theme?: FlexListTheme;
}

export class FlexList extends __React.Component<FlexListProps, {}> { }
