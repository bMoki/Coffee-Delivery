import { ThemeProvider } from "styled-components";
import { PaymentOptionCard } from "./components/PaymentOptionCard";
import { QuantityButton } from "./components/QuantityButton";
import { GlobalStyle } from "./styles/global";

import { CreditCard, Money, Bank } from "phosphor-react";


import { defaultTheme } from './styles/themes/default';
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./context/CartContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
