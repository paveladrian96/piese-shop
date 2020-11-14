import { createGlobalStyle} from "styled-components"
import * as pallete from "./constants/theme"

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: "Noto Sans JP","Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: white;
        color: ${pallete.dark_color};
        font-size: 16px;
        margin: 0;
        box-sizing: border-box;
        font-weight: 300;
    }
`

// light: #F6F4F2
// dark: #425664
// contrat: #C6AD8F
// // 