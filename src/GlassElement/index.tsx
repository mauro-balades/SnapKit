
import React from "react";
import { Context } from "../context";
import { StyledGlass } from "./styles";
import {Props, defaultProps} from "./props";
import { ITheme } from "../theme";

export * as GlassElementProps from "./props";

export class GlassElement extends React.Component<Props> {
    static contextType = Context;
    static defaultProps = defaultProps;

    render() {
        let themeContext = this.context as ITheme;

        return (
            <StyledGlass t={themeContext} p={this.props} {...this.props}>
                {this.props.children}
            </StyledGlass>
        )
    }
}
