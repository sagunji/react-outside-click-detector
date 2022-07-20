import PropTypes from "prop-types";
import React, { useRef, useEffect, RefObject } from "react";
import { IOutsideClickDetectorProps } from "./OutsideClickDetector.types";

/**
 * Hook that alerts clicks outside of the passed ref.
 */

function useOutsideClickDetector(
  ref: RefObject<HTMLDivElement>,
  onClose: () => void,
  exceptions: Array<string | HTMLDivElement | HTMLSpanElement>
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     * Except for nodes provided as exceptions
     */

    function handleClickOutside(event: any) {
      const skipClose = exceptions.some((ex) => {
        let exception = ex;
        if (typeof ex === "string") {
          const element = document.getElementById(ex) as HTMLElement;
          exception = element;
        }

        return (
          exception &&
          ((exception as HTMLDivElement | HTMLSpanElement).contains(
            event.target
          ) ||
            (exception as HTMLDivElement | HTMLSpanElement).isEqualNode(
              event.target
            ))
        );
      });

      if (skipClose) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose, exceptions]);
}

/**
 * Component that alerts if you click outside of it
 */

function OutsideClickDetector({
  children,
  onClose,
  exceptions = [],
  ...rest
}: IOutsideClickDetectorProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClickDetector(wrapperRef, onClose, exceptions);

  return (
    <div ref={wrapperRef} {...rest}>
      {children}
    </div>
  );
}

OutsideClickDetector.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

export default OutsideClickDetector;
