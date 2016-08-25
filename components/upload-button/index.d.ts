import __ReactToolbox from "../index.d.ts";

interface UploadButtonTheme {
    'uploadButton' : String;
    'uploadButton--section' : String;
    'uploadButton--button' : String;
    'uploadButton--button_hover' : String;
    'uploadButton--image' : String;
    'uploadButton--image_white' : String;
    'uploadButton--icon' : String;
}

interface UploadButtonProps extends __ReactToolbox.Props {
    /**
     * Children to pass through the component.
     */
    children?: __React.ReactNode;
    /**
     * Classnames object defining the component style.
     */
    theme?: UploadButtonTheme;
    className : String;
    preview? : Boolean;
    icon? : String;

}

export class UploadButton extends __React.Component<UploadButtonProps, {}> { }
