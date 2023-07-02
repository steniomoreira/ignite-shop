import { styled } from "..";

export const Container = styled('div', {
    position: "relative",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
    
    overflow: "hidden",
})

export const Header = styled('header',  {
    position: "relative",

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

export const Sidepanel = styled('aside', {
    position: "absolute",
    right: 0,

    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",

    background: '$gray800',

    width: '100%',
    maxWidth: 480,
    height: '100%',

    padding: "3rem",

    zIndex: 100,

    transform: 'translateX(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    
    variants: {
        isOpen: {
            true:{ opacity: 1, transform: 'translateX(0%)', },
        },
    },    

    h2: {
        margin: '1.5rem 0 0.5rem',
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '$gray100',
    }    
})

export const SidepanelClose = styled('button', {
    position: "absolute",
    top: '1.5rem',
    right: '1.5rem',

    background: 'none',
    color: "$gray500",
    border: 0,

    cursor: "pointer",
})

export const SidepanelItemContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    gap: '1.5rem',
})

export const SidepanelItem = styled('div', {
    display: "flex",
    gap: 20,

    img: {
        maxWidth: 100,
        borderRadius: 8,
    },

    h2: {
        fontSize: '1.125rem',
        fontWeight: 400,
        color: '$gray300',
        lineHeight: '160%',

        strong: {
            display: 'block',
            color: "$gray100",
            fontWeight: 700,
            marginTop: 2,
        },
    },

    button: {
        background: "transparent",
        border: 0,
        color: '$green500',
        fontSize: '1rem',
        fontWeight: 700,

        height: 26,
        marginTop: '0.5rem',
    }

})

export const SidepanelFooter = styled('div', {
    
    ul: {
        width: '100%',                   

        li: {
            display: 'flex',
            marginTop: '1rem',
            

            strong: {
                flex: 1,
                textAlign: 'right',
                fontSize: '1.125rem',
                fontWeight: 400,               
            },       
            
            
            '&:last-child ': {
                fontSize: '1.125rem',
                fontWeight: 700,
                
                strong: {
                    fontSize: '1.5rem',
                    fontWeight: 700,
                }
            }
        },

      


    },

    button: {
        marginTop: '3.125rem',
        width: '100%',
    }
})