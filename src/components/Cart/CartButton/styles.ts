import { styled} from '../../../styles';

export const CartButtonContainer = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: 0,
  borderRadius: 6,
  padding:' 0.75rem',

  width: 56,
  height: 56,

  cursor: 'pointer',

  variants: {
    color: {
      green: {
        background: '$green500',
        color: '$white',
      },

      gray: {
        background: '$gray800',
        color: '$gray500',
      },
    },
  },

  defaultVariants: {
    color: 'green'
  },
  
  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    color: '$gray300',
  },
})