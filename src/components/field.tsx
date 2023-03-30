const Field = () => {
  return (
    <div className="field">
      <label className="field__label" htmlFor="fname">
        First name:
      </label>
      <input className="field__label" id="fname" type="firstname" />
      <button className="field__item">Submit</button>
    </div>
  );
};

export default Field;
