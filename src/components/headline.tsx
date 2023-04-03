import icon from "./../assets/location-icon.svg";

const Headline = () => {
  return (
    <div>
      <div className="headline">
        <div className="headline__text">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmV8fHx8fHwxNjgwNTQ2MTI2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
            alt="frineds-image"
          />
          <h4>Text</h4>
        </div>
        <div>
          <img className="headline__icon" src={icon} alt="location-icon" />
        </div>
      </div>
      <hr />
      <div className="headline--2">
        <div className="headline--2__text2">
          <h4>Text2</h4>
          <img className="headline__icon" src={icon} alt="location-icon" />
        </div>
      </div>
      <hr />
      <div className="headline--3">
        <div className="headline--3__text3">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGhvbmV8fHx8fHwxNjgwNTQ2MTI2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
            alt="frineds-image"
          />
          <h4>Text3</h4>
        </div>
      </div>
    </div>
  );
};

export default Headline;
