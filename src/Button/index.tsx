
import React from "react";
import { Context } from "../context";
import { StyledButton } from "./styles";
import {Props, defaultProps} from "./props";
import { ITheme } from "../theme";

export * from "./props";

export class Button extends React.Component<Props> {
    static contextType = Context;
    static defaultProps = defaultProps;

    render() {
        let themeContext = this.context as ITheme;

        return (
            <StyledButton t={themeContext} p={this.props}>
                {this.props.children}
            </StyledButton>
        )
    }
}
