import { styled } from "@mui/material";
import { ThemeProvider } from "styled-components";
import AppBar from "./components/globals/AppBar";
import Header from "./components/Header";
import theme from "./utils/theme/theme";

function App() {
  return (
    <div>
      <AppBar />
	  <Header/>
    </div>
  );
}

export default App;
