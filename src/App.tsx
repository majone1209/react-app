import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Field from "./components/field";
import Tags from "./components/tags";
import Pagination from "./components/pagination";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Button />
      <Checkbox />
      <Tags />
      <div className="container">
        <Field />
        <Pagination />
      </div>
    </div>
  );
};

export default App;
