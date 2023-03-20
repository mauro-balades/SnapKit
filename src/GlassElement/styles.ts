
import styled from "styled-components";
import { Props } from "./props";
import StyleProps from "../_style-props";

export const StyledGlass = styled.div`
    ${(props: StyleProps<Props>) => `
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(${props.p.blurLevel}px);
        -webkit-backdrop-filter: blur(${props.p.blurLevel}px);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        color: ${props.t.colors.primary};
        padding: 20px;
    `}
`
