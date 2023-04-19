import { ComponentProps } from "react";

export interface ModalProps extends ComponentProps<"div"> {
  title: string;
  description: string;
}
