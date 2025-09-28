'use client'

import FlexBox from '@/components/layout/FlexBox';
import {
  Card,
  CardContent,
  CardActions,
  Chip,
  Box,
  CardActionArea,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  imgSrc: string;
  title: string;
  category: string;
  children: React.ReactNode;
  discountPercentage: number;
  isEnabled: boolean;
  actions?: React.ReactNode;
  action?: string;
}

const ProductCard = ({ imgSrc, title, category, children, actions, discountPercentage = 0, action, isEnabled }: ProductCardProps) => {
  const router = useRouter();
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
    >
      <CardActionArea onClick={() => action && router.push(action)}>
        <Box position="relative">
          <FlexBox
            width="100%"
            height={200}
            position="relative"
            overflow="hidden"
            bgcolor="grey.100"
            sx={{
              '& img': !isEnabled ? { opacity: 0.5 } : {}
            }}
          >
            <Image
              width={200}
              height={200}
              priority
              src={imgSrc}
              alt={title}
            />
          </FlexBox>
          {(discountPercentage > 0 || !isEnabled) && (
            <Chip
              label={!isEnabled ? "Esgotado" : `-${discountPercentage}%`}
              color="secondary"
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8
              }}
            />
          )}
          <Chip
            label={category}
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              bgcolor: 'rgba(255, 255, 255, 0.9)'
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          {children}
        </CardContent>
      </CardActionArea>

      <CardActions>
        {actions}
      </CardActions>
    </Card >
  )
}

export default ProductCard;
