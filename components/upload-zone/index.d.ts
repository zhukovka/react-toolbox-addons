import __ReactToolbox from "../index.d.ts";

interface UploadTheme {
    dropZone : string;
    'dropZone--active' : string
}

interface UploadProps extends __ReactToolbox.Props {
    /**
     * Children to pass through the component.
     */
    children?: __React.ReactNode;
    /**
     * Classnames object defining the component style.
     */
    theme?: UploadTheme;
    activeClass : String;
    className : String;

}

export class Upload extends __React.Component<DropZoneProps, {}> { }
