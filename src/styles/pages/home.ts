import { styled } from "..";

export const HomeContainer = styled('main', {
    position: 'relative',
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
})

export const ArrowContainer = styled('div', {
    position: 'absolute',
    width: '100%',
    minHeight: 656,

    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",   
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea482 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 10,

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'grid',
        gridTemplateColumns: '1fr 56px',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',       

        strong: {
            fontSize: '$lg',
            color: '$gray100'
        },
        
        a: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: '4px',
            
            textDecoration: 'none'
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})