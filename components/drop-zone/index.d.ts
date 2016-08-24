import __ReactToolbox from "../index.d.ts";

interface DropZoneTheme {
    dropZone : string;
    'dropZone--active' : string
}

interface DropZoneProps extends __ReactToolbox.Props {
    /**
     * Children to pass through the component.
     */
    children?: __React.ReactNode;
    /**
     * Classnames object defining the component style.
     */
    theme?: DropZoneTheme;
    activeClass : String;
    className : String;

}

export class DropZone extends __React.Component<DropZoneProps, {}> { }
