
import React from "react";
import { Context } from "../context";
import { StyledTextInput } from "./styles";
import {Props, defaultProps} from "./props";
import { ITheme } from "../theme";

export * as TextInputProps from "./props";

export class TextInput extends React.Component<Props> {
    static contextType = Context;
    static defaultProps = defaultProps;

    render() {
        let themeContext = this.context as ITheme;

        return (
            <StyledTextInput t={themeContext} p={this.props} {...this.props} />
        )
    }
}
