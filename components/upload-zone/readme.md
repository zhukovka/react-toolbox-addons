# DropZone

Component for uploading files with dragging.
Required parentHandler for handling files.
When drop file of files on Component, will fire function that return event.

## Properties

| Name          | Type                    | Default     | Description|
|:-----|:-----|:-----|:-----|
| `children`    | `Node`                  |             | Children for the avatar. You can pass an SVG for a custom icon or, for example, an image.|
| `className`   | `String`                | `''`        | Set a class to style the Component.|
| `activeClass`   | `String`                | `''`        | Set a class for style Component, also you can overwrite theme class --active .|
| `theme`       | `Object`  | `null`   | Classnames object defining the component style.|

## Theme

| Name     | Description|
|:---------|:-----------|
| `dropZone` | Used for the root class of the element.|
| `dropZone--active`  |User when effect drop over on the element.|
