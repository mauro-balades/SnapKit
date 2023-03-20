import { ITheme } from "../theme"

export const lightTheme: ITheme = {
    variant: 'light',
    borderRadius: 6,

    buttons: {
        background: '#000',
        secondaryBackground: '#fff',

        color: '#fff',
        secondaryColor: '#000',

        border: '#000',
        secondaryBorder: 'rgb(31 41 55)',
        borderSize: 2,
    },

    colors: {
        primary: '#000',
        secondary: 'rgba(0,0,0,.7)',

        secondaryBorder: '#ccc'
    },
}

export const darkTheme: ITheme = {
    variant: 'dark',
    borderRadius: 6,

    buttons: {
        background: '#fff',
        secondaryBackground: '#000',

        color: '#000',
        secondaryColor: '#fff',

        border: '#fff',
        secondaryBorder: 'rgb(31 41 55)',
        borderSize: 2,
    },

    colors: {
        primary: '#000',
        secondary: 'rgba(0,0,0,.7)',

        secondaryBorder: '#ccc'
    },
}
