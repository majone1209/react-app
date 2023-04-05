import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Field from "./components/field";
import Tags from "./components/tags";
import Pagination from "./components/pagination";
import TransformExe from "./components/transform-exe";
import Headline from "./components/headline";
import "./styles/styles.scss";
import Input from "./components/input";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <h2>Navigation, Button, Checkbox, Tags and Field</h2>
        <Navigation />
        <Button value="Animate me" animate={true} />
        <Checkbox />
        <Tags />
        <Field />
        <hr />
        <h2>Pagination</h2>
        <Pagination />
        <hr />
        <div className="container">
          <h2>Input</h2>
          <Input label="First name" />
          <Input label="Last name" rounded validation="Ovo je validacija" />
        </div>
      </div>
      <div className="container">
        <h2>Transform property exercise</h2>
        <TransformExe />
        <hr />
      </div>
      <div className="container">
        <h2>Flex exercise</h2>
        <Headline />
        <hr />
      </div>
    </div>
  );
};

export default App;
