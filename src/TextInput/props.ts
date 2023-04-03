import { HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLInputElement> {
    variant: 'primary' | 'secondary';
    inputSize: 'small' | 'medium' | 'large';
    shape: 'pill' | 'default';
}

export const defaultProps: Props = {
    variant: 'primary',
    inputSize: 'medium',
    shape: 'default',
}
