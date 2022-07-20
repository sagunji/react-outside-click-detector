/// <reference types="react" />
import PropTypes from "prop-types";
import { IOutsideClickDetectorProps } from "./OutsideClickDetector.types";
/**
 * Component that alerts if you click outside of it
 */
declare function OutsideClickDetector({ children, onClose, exceptions, ...rest }: IOutsideClickDetectorProps): JSX.Element;
declare namespace OutsideClickDetector {
    var propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default OutsideClickDetector;
