import { ButtonProps } from "./Button.props";
import classNames from "classnames";

import "./Button.scss";

const Button = ({
  className,
  children,
  disabled,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames("button", className, {
        ["disabled"]: disabled,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
