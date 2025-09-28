'use client';

import CartContent from "@/components/views/cart/CartContent";
import { useRouter } from "next/navigation";

const CartPage = () => {
	const router = useRouter();
	const handleClose = () => {
		router.push('/');
	};

	return (
		<CartContent onClose={handleClose} />
	);
};

export default CartPage;