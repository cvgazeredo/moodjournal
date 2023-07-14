import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { JournalProvider } from "./contexts/HistoryContext";



export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <BrowserRouter>
        <JournalProvider>
          <Router />
        </JournalProvider>
      </BrowserRouter>
      
      <GlobalStyle />
      
      
  </ThemeProvider>
  )
}


