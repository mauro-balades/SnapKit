import { HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
}

export const defaultProps: Props = {
    variant: 'primary',
    size: 'medium'
}
