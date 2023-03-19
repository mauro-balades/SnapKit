
export interface IButtonTheme {
    background: string;
    secondaryBackground: string;

    color: string;
    secondaryColor: string;

    border: string;
    secondaryBorder: string;
};

export interface ITheme {
    variant: 'light' | 'dark';
    borderRadius: number;
    buttons: IButtonTheme;
};
