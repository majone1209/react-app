import love from "./../assets/love-icon.svg";

const Tags = () => {
  return (
    <div className="tags">
      <div className="tags__tags">
        Tag 1<img className="tags__tags__icon" src={love} alt="love-icon" />
      </div>
      <div className="tags__tags">
        Tag 2<img className="tags__tags__icon" src={love} alt="love-icon" />
      </div>
      <div className="tags__tags">
        Tag 3<img className="tags__tags__icon" src={love} alt="love-icon" />
      </div>
    </div>
  );
};

export default Tags;
