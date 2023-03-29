import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Button />
      <Checkbox />
      <Form />
      <div className="container">Hello World</div>
    </div>
  );
};

export default App;
