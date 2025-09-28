import Image from 'next/image';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';

interface CartItemProps {
  children?: React.ReactNode;
  action: React.ReactNode;
  title: string;
  imgSrc: string;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  return (
    <ListItem
      divider
      sx={{ px: 0 }}
      secondaryAction={props.action}
    >
      <ListItemAvatar sx={{ mr: 2 }}>
        <Avatar
          variant="rounded"
          sx={{ width: 56, height: 56 }}
        >
          <Image
            width={46}
            height={46}
            src={props.imgSrc}
            alt={props.title}
            loading='eager'
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        slotProps={{ primary: { component: 'div' } }}
        primary={props.children}
      />
    </ListItem>
  );
}

export default CartItem;
