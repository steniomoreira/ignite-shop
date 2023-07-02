import { styled } from '../../styles';

export const CartContainer = styled('div', {
  position: "relative",

  span: {
    position: "absolute",
    right: 0,

    transform: 'translateX(60%) translateY(-25%)',

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