import __ReactToolbox from "../index.d.ts";

export interface EditableAvatarTheme {
    avatar: String;
    image: String;
    letter: String;
    'avatar--photo_camera': String;
}

interface EditableAvatarProps extends __ReactToolbox.Props {
    theme?: EditableAvatarTheme;
    className?: String;
    editable?: Boolean;
    image?: String;
    onUpload?(): void;
}

export class EditableAvatar extends __React.Component<EditableAvatarProps, {}> { }

export default EditableAvatar;
