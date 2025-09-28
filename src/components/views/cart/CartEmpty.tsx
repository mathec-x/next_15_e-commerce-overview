import FlexBox from "@/components/layout/FlexBox";
import { ShoppingCart } from "@mui/icons-material";
import { Typography } from "@mui/material";

const CartEmpty = () => {
  return (
    <FlexBox
      p={2}
      flex={1}
      flexDirection='column'
      gap={2}
    >
      <ShoppingCart sx={{ fontSize: 64, color: 'grey.400' }} />
      <Typography variant="body1" color="text.secondary">
        Seu carrinho está vazio
      </Typography>
    </FlexBox>
  )
}

export default CartEmpty;
