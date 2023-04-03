
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

    display: flex;
    align-items: center;
    justify-content: space-around;

    ${(props: StyleProps<Props>) => `
        ${props.p.size === 'small' ?
            `
            padding: 5px 10px;
            font-size: 14px;
            line-height: 1.25rem;

            & span.snap-kit--button-icon:first-child {
                width: 1em;
                height: 1em;
                fill: currentcolor;
            }
            `
        : props.p.size === 'medium' ? 
            `
            padding: 10px 20px;
            font-size: 20px;
            line-height: 1.25rem;

            & span.snap-kit--button-icon:first-child {
                width: 25px;
                height: 25px;

                margin-right: 10px;
            }
            `
        : /* large */ `
            padding: 15px 30px;
            font-size: 20px;

            & span.snap-kit--button-icon:first-child {
                width: 25px;
                height: 25px;

                margin-right: 15px;
            }
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
        ` : props.p.variant === "ghost" ? `
            color: ${props.t.colors.secondary};
            border: 1px solid ${props.t.colors.secondaryBorder};
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.15);

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
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

    ${(props: StyleProps<Props>) => `
        ${props.p.shape === 'circle' ?
            `
            border-radius: 50%;
            `
        : props.p.shape === 'pill' ?
            `
            border-radius: 30px;
            `
        : /* default */ `
            border-radius: ${props.t.borderRadius}px;
        `}
    `}

    & span.snap-kit--button-icon:first-child {
        position: relative;
        display: block;
    }

    & span.snap-kit--button-icon:first-child > svg {
        width: 100%;
        height: 100%;

        display: block;
    }
`
