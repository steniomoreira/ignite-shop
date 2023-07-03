import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 590,
    textAlign: 'center',
    marginTop: '1.5rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  'div + div': {
    marginLeft: '-52px',
  }
})

export const ImageWrapper = styled('div', { 
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea482 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
  borderRadius: '50%',
  padding: '0.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  }  
})