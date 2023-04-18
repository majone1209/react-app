import Button from "../components/button";
import Card from "../components/card";
import Checkbox from "../components/checkbox";
import Field from "../components/field";
import Headline from "../components/headline";
import Input from "../components/input";
import Navigation from "../components/navigation";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <div className="container">
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
      <div>
        <h2>Card vježba</h2>
        <div className="card__grid">
          <Card title="Sand" desc="Ovo je prvi tekst o pijesku" />
          <Card title="Sun" desc="Ovo je drugi tekst o Suncu" />
          <Card title="Brown" desc="Ovo je treći tekst o smeđoj" />
          <Card title="Dune" desc="Ovo je četvrti tekst o dini" />
        </div>
      </div>
    </div>
  );
};

export default Exe;
