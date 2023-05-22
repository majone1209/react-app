import Button from "./button";

type CardProps = {
  title: string;
  desc: string;
};

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className="card">
      <img
        className="card__img--img"
        src="https://images.unsplash.com/photo-1680849219172-71e4f632b282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="sand"
      />
      <h2 className="card__title">{title}</h2>
      <p className="card__desc">{desc}</p>
      <div className="card__footer card__header">
        <Button value="OK" />
        <Button value="Cancel" />
      </div>
    </div>
  );
};

export default Card;
