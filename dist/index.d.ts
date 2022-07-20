/// <reference types="react" />
import PropTypes from 'prop-types';

interface IOutsideClickDetectorProps {
    children: JSX.Element[] | JSX.Element;
    onClose: () => void;
    exceptions: Array<string | HTMLSpanElement | HTMLDivElement>;
    source: string;
    [key: string]: any;
}

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

export { OutsideClickDetector as default };
