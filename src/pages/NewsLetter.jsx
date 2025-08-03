import { Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.error(error);
  }
};

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Newsletter</h4>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />
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
          placeholder="Your last name"
          required
        />
      </div>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
          disabled
          required
        />
      </div>
      <button type="submit" className="form-btn">
        Subscribe
      </button>
    </Form>
  );
};

export default NewsLetter;
