import { styled } from "../../styles";

export const ArrowButton = styled('button', {
  width: '136px',
  minHeight: 656,

  color: '$white',
  border: 0,

  padding: '1rem',
  cursor: 'pointer',

  zIndex: 20,

  variants: {
    linearGradient: {
      left: {
        background: 'linear-gradient(90deg, #0000006b 0, transparent 100%)',
        textAlign: 'left',
      },
      right: {
        background: 'linear-gradient(90deg, transparent 0, #0000006b 100%)',
        textAlign: 'right',
      }
    }
  },

  '&:disabled': {
    background: "transparent",
    color: "transparent",

    pointerEvents: 'none'
  }
})