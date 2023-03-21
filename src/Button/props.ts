import { HTMLAttributes, ReactNode } from "react";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'ghost';
    size: 'small' | 'medium' | 'large';
    icon?: ReactNode;
    shape: 'circle' | 'pill' | 'default';
    iconProps: HTMLAttributes<HTMLSpanElement>; 
}

export const defaultProps: Props = {
    variant: 'primary',
    size: 'medium',
    shape: 'default',
    iconProps: {}
}
