
import styled from "styled-components";
import { Props } from "./props";
import StyleProps from "../_style-props";

export const StyledInput = styled.input`
    font-size: 15px;
    outline: none;

    ${(props: StyleProps<Props>) => `
        color: ${props.t.textInput.color};
        background-color: ${props.t.textInput.background};
        border: ${props.t.textInput.borderSize}px solid ${props.t.textInput.border};
    `}

    font-weight: 500;
    border-radius: 4px;
    box-sizing: border-box;

    ${(props: StyleProps<Props>) => `
        ${props.p.inputSize === 'small' ?
            `
            font-size: 13px;
            padding: 5px ${props.p.shape === 'pill' ? "11px" : "9px"};
            `
        : props.p.inputSize === 'medium' ?
            `
            font-size: 15px;
            padding: 8px ${props.p.shape === 'pill' ? "10px" : ""};
            `
        : /* large */ `
            font-size: 19px;
            padding: 12px ${props.p.shape === 'pill' ? "15px" : ""};
        `}
    `}

    ${(props: StyleProps<Props>) => `
        ${props.p.variant === "primary" ? `
            background: ${props.t.textInput.background};
            color: ${props.t.textInput.color};
        ` : /* secondary */ `
            background: ${props.t.textInput.background};
            color: ${props.t.textInput.color};
            border: ${props.t.textInput.borderSize / 2}px solid ${props.t.textInput.secondaryBorder};
        `}
    `}

    ${(props: StyleProps<Props>) => `
        ${props.p.shape === 'pill' ?
            `
            border-radius: 20px;
            `
        : /* default */ `
            border-radius: ${props.t.borderRadius}px;
        `}
    `}
`
