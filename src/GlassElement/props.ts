import { HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    blurLevel: number;
}

export const defaultProps: Props = {
    blurLevel: 20,
}
