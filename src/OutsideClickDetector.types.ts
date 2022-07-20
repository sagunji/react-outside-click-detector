export interface IOutsideClickDetectorProps {
  children: JSX.Element[] | JSX.Element;
  onClose: () => void;
  exceptions: Array<string | HTMLSpanElement | HTMLDivElement>;
  source: string;
  [key: string]: any;
}
