import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import MuiThemeProvider from "@/components/providers/MuiThemeProvider";

import Header from "@/components/layout/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CartProvider } from "@/components/contexts/cart/cartProvider";
import { Container } from "@mui/material";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MatechStore - E-commerce de Tecnologia",
  description: "Loja online de produtos tecnológicos com os melhores preços",
};

export default function RootLayout({
  children,
  drawer
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <CartProvider>
              <Header />
              <Container maxWidth="xl" sx={{ mt: 4, mb: 4, minHeight: '80vh' }}>
                {children}
              </Container>
              {drawer}
              {/* <CartDrawer /> */}
            </CartProvider>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
