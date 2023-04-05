
import React from "react";
import { Context } from "../context";
import { StyledInput } from "./styles";
import {Props, defaultProps} from "./props";
import { ITheme } from "../theme";

export * as InputProps from "./props";

export class Input extends React.Component<Props> {
    static contextType = Context;
    static defaultProps = defaultProps;

    render() {
        let themeContext = this.context as ITheme;

        return (
            <StyledInput t={themeContext} p={this.props} {...this.props} />
        )
    }
}
