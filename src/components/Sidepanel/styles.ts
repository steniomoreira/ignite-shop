import { styled } from '../../styles'

export const SidepanelContainer = styled('aside', {
  position: "fixed",
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column",

  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',

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

  '> h2': {
  
      fontSize: '$lg',
      fontWeight: 700,
      color: '$gray100',
      marginTop: '3rem',
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: '1.5rem',

    marginTop: '2rem',   
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

export const SidepanelItem = styled('div', {
    display: "flex",
    gap: 20,

    img: {
        maxWidth: 100,
        borderRadius: 8,
    },  

    span: {
        display: "flex",
        flexDirection: "column",

        h2: {
            fontSize: '$md',
            fontWeight: 400,
            color: '$gray300',
            lineHeight: '160%',
      
            strong: {
                display: 'block',
                color: "$gray100",
                fontWeight: 700,
            },
        },
    },  

    button: {
        background: "transparent",
        border: 0,
        color: '$green500',
        fontSize: '1rem',
        fontWeight: 700,

        width: 'max-content',
        height: 26,
        marginTop: 'auto',
        
        '&:disabled': {
            opacity: 0.7,
            cursor: 'not-allowed'
        },

        '&:not(:disabled):hover': {
            color: '$green300',
        },
    }

})

export const SidepanelFooter = styled('div', {
  marginTop: 'auto',
  
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