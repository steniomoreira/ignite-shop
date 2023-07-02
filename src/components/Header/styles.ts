import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',    
    padding: '2rem 1rem',

    '> div': {
      marginLeft: 'auto',
      width: 48,
      height: 48,
    },
})