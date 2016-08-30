import __ReactToolbox from "../index.d.ts";

interface NavigationChipsTheme {
    RTNavigationChips : string;
    'RTNavigationChips--header' : string,
    'RTNavigationChips--chip' : string,
    'RTNavigationChips--chip--line' : string,
    'RTNavigationChips--avatar' : string,
    'RTNavigationChips--avatar--active' : string,
}

interface NavigationChipsProps extends __ReactToolbox.Props {
    /**
     * Children to pass through the component.
     */
    children?: __React.ReactNode;
    /**
     * Classnames object defining the component style.
     */
    theme?: NavigationChipsTheme;
    headers : Array;
    className : String;
    currentIndex : Number;

}

export class NavigationChips extends __React.Component<NavigationChipsProps, {}> { }
