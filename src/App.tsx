import { BrowserRouter, Route, Routes } from "react-router";

import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";

import RootLayout from "@/components/layout/RootLayout";

import CatchAll from "@/pages/CatchAll";
import Home from "@/pages/Home";

import theme from "@/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<RootLayout />}>
            <Route index element={<Home />} />
            
            <Route path="*" element={<CatchAll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
