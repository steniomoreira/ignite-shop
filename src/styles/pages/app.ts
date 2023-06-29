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

export const HandbagContainer = styled('div', {
    position: "relative",

    span: {
        position: "absolute",
        right: 0,

        transform: 'translateX(30%) translateY(-25%)',

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: 27,
        height: 27,
        background: "$green500",
        color: "$white",
        border: '3px solid $gray900',
        borderRadius: '50%',
        
        fontSize: '0.875rem',
        fontWeight: 700,
    }

})