
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
            padding: 5px 10px;
            font-size: 14px;
            line-height: 1.25rem;
            `
        : props.p.size === 'medium' ? 
            `
            padding: 10px 20px;
            font-size: 20px;
            line-height: 1.25rem;
            `
        : /* large */ `
            padding: 15px 30px;
            font-size: 20px;
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
