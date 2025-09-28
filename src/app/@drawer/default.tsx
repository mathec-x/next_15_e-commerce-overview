'use client';

import {
	Badge,
	Fab,
	Grow,

} from '@mui/material';

import {
	ShoppingCart,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { useCart } from '@/components/contexts/cart/useCart';
import { useState } from 'react';

const hideInPaths = ['/cart', '/checkout'];

export default function DrawerDefault() {
	const router = useRouter();
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(true);
	const openDrawer = () => {
		setIsOpen(false);
		setTimeout(() => {
			router.push('/cart')
		}, 255); // Tempo para a animação do fab
	};
	const { getTotalItems } = useCart();

	if (hideInPaths.includes(pathname)) {
		return null;
	}

	return (
		<Grow
			in={isOpen}
			style={{ transformOrigin: '0 0 0' }}
			{...(!isOpen ? { timeout: 355 } : {})}
		>
			<Fab
				color="primary"
				aria-label="carrinho"
				sx={{
					position: 'fixed',
					bottom: 16,
					right: 16,
					zIndex: 1000
				}}
				onClick={openDrawer}
			>
				<Badge badgeContent={getTotalItems()} color="secondary">
					<ShoppingCart />
				</Badge>
			</Fab>
		</Grow>
	)
}