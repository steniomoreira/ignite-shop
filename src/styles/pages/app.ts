import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header',  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',    
    padding: '2rem 1rem',

    button: {
        width: 48,
        height: 48,
    },
})