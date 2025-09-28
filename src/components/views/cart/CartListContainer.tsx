import FlexBox from '@/components/layout/FlexBox';
import {
  Box,
  Typography,
  List,
  Button,
} from '@mui/material';

interface CartListContainerProps {
  children?: React.ReactNode;
  onClose: () => void;
  onCheckout: () => void;
  total: string
}

const CartListContainer: React.FC<CartListContainerProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" height='calc(94vh - 64px)'>
      <List sx={{ overflow: 'auto', height: '100%' }}>
        {props.children}
      </List>
      <Box>
        <FlexBox my={2} justifyContent="space-between">
          <Typography >Total:</Typography>
          <Typography color="primary" fontWeight="bold">
            {props.total}
          </Typography>
        </FlexBox>
        <Button
          variant="outlined"
          fullWidth
          color="inherit"
          onClick={props.onClose}
          sx={{ mb: 1 }}
        >
          Continuar Comprando
        </Button>
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={props.onCheckout}
        >
          Finalizar Compra
        </Button>
      </Box>
    </Box>
  )
}

export default CartListContainer;