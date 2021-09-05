import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Welcome} exact/>
    </BrowserRouter>
  );
}

export default App;
