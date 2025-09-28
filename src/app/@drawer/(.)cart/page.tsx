'use client';

import CartDrawer from '@/components/views/cart/CartDrawer';
import { useRouter } from 'next/navigation';

export default function Drawer() {
  const router = useRouter();
  const closeDrawer = () => router.back();

  return <CartDrawer onClose={closeDrawer} />;
}
