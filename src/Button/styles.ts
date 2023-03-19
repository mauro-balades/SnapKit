
import styled from "styled-components";
import { Props } from "./props";
import StyleProps from "../_style-props";

export const StyledButton = styled.button`
    outline: none;
    border: none;

    font-weight: 600;
    cursor: pointer;

    user-select: none;
    transition: .15s;

    ${(props: StyleProps<Props>) => `
        ${props.p.size === 'small' ? 
            `
            padding: 7px 13px;
            font-size: .875rem;
            line-height: 1.25rem;
            `
        : props.p.size === 'medium' ? 
            `
            padding: 10px 16px;
            font-size: 1rem;
            line-height: 1.25rem;
            `
        : /* large */ `
            padding: 12px 18px;
            font-size: 1.30rem;
        `}
    `}

    ${(props: StyleProps<Props>) => `
        ${props.p.variant === "primary" ? `
            background: ${props.t.buttons.background};
            border-radius: ${props.t.borderRadius}px;
            color: ${props.t.buttons.color};
            border: ${props.t.buttons.borderSize}px solid;

            &:hover {
                background: ${props.t.buttons.secondaryBackground};
                border-color: ${props.t.buttons.background};
                color: ${props.t.buttons.background};
            }
        ` : /* secondary */ `
            background: ${props.t.buttons.secondaryBackground};
            border-radius: ${props.t.borderRadius}px;
            color: ${props.t.buttons.secondaryColor};
            border: ${props.t.buttons.borderSize}px solid;
            border-color: ${props.t.buttons.background};

            &:hover {
                background: ${props.t.buttons.background};
                color: ${props.t.buttons.secondaryBackground};
            }
        `}
    `}
`
