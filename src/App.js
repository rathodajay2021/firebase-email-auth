import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Website from "./Components/Website";
import { UtilityStyles } from "./Styles/Utils";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {
  return (
    <BrowserRouter className="App">
      <AuthProvider>
        <Website />
        <UtilityStyles />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
