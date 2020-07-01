import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import colors from "utils/constants/colors";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        -moz-box-sizing: border-box; /* Firefox  */
        -webkit-box-sizing: border-box; /* Safari */
        box-sizing: border-box; /* CSS3 Standard */
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    input{
        border-radius:10px;
        border: 1px solid ${colors.mainGrey};
        padding:0px 30px;
        &:focus{
            outline:none;
        }
        &::placeholder{
            color:${colors.mainGrey}
        }
        
    }
    button{
        border-radius:10px;
        border:none;
        cursor:pointer;
        &:focus{
            outline:none;
        }
    }
`;
