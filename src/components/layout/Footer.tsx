import {
	Typography,
	Grid,
	Box,
} from '@mui/material';

const Footer = () => {
	return (
		<Box sx={{ mt: 8, p: 4, bgcolor: 'grey.50', borderRadius: 2 }}>
			<Typography variant="h5" component="h3" gutterBottom fontWeight="bold" textAlign="center">
				Por que escolher a MatechStore?
			</Typography>
			<Grid container spacing={3} sx={{ mt: 2 }}>
				<Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
					<Typography variant="h6" gutterBottom>
						🚚 Entrega Rápida
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Entrega grátis para compras acima de R$ 199,00
					</Typography>
				</Grid>
				<Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
					<Typography variant="h6" gutterBottom>
						🛡️ Garantia Estendida
					</Typography>
					<Typography variant="body2" color="text.secondary">
						12 meses de garantia em todos os produtos
					</Typography>
				</Grid>
				<Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
					<Typography variant="h6" gutterBottom>
						💰 Melhor Preço
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Preços competitivos e promoções exclusivas
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}


export default Footer;