import __ReactToolboxAddons from "../index.d.ts";

export interface BottomSheetTheme {
  /**
   * Added to the root element in case it's accept type.
   */
  accept?: string;
  /**
   * Added to the root element when its active.
   */
  active?: string;
  /**
   * Used for the button inside the component.
   */
  button?: string;
  /**
   * Added to the root element in case it's cancel type.
   */
  cancel?: string;
  /**
   * Used for the icon element.
   */
  icon?: string;
  /**
   * Used for the label element.
   */
  label?: string;
  /**
   * Used as the className for the root element of the component.
   */
  bottomsheet?: string;
  /**
   * Added to the root element in case it's warning type.
   */
  warning?: string;
}

interface BottomSheetProps extends __ReactToolboxAddons.Props {
  /**
   * If true, the bottomsheet will be active.
   * @default true
   */
  active?: boolean;
  /**
   * String key for an icon or Element which will be displayed in left side of the bottomsheet.
   */
  icon?: string;
  /**
   * Classnames object defining the component style.
   */
  theme?: BottomSheetTheme;
  /**
   * If true, bottomsheet-item tag, will have overflow visible
   */
  visibleBody?: boolean

}

export class BottomSheet extends __React.Component<BottomSheetProps, {}> { }

export default BottomSheet;
