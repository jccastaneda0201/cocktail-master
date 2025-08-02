const NewsLetter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Newsletter</h4>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" name="name" id="name" defaultValue="Your name" />
      </div>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Your last name"
        />
      </div>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="example@example.com"
        />
      </div>
      <button type="submit" className="form-btn">
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter;
