import arrow from "./../assets/arrow-left.svg"
import arrowr from "./../assets/arrowr-right.svg"

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__icon">
        <img src={arrow} alt="arrow-left" />
      </div>
      <div className="pagination__number">1</div>
      <div className="pagination__number">2</div>
      <div className="pagination__number">3</div>
      <div className="pagination__number">4</div>
      <div className="pagination__icon">
        <img src={arrowr} alt="arrow-right" />
      </div>
    </div>
  );
};

export default Pagination;
