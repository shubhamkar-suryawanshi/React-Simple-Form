import { useState } from 'react';

function Form() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    number: '',
    option: '',
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <p>
            You have submitted form successfully
            <br />
          </p>
        ) : null}
        <input
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={(e) => {
            return setValues({ ...values, name: e.target.value });
          }}
        />
        <br />
        {submitted && !values.name ? <span>Please Enter your name</span> : null}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={(e) => {
            return setValues({ ...values, email: e.target.value });
          }}
        />
        <br />
        {submitted && !values.email ? (
          <span>Please Enter your email</span>
        ) : null}
        <br />
        <input
          type="number"
          placeholder="Phone Number"
          value={values.number}
          onChange={(e) => {
            return setValues({ ...values, number: e.target.value });
          }}
        />
        <br />
        {submitted && !values.number ? (
          <span>Please Enter your number</span>
        ) : null}
        <br />
        <select
          value={values.option}
          onChange={(e) => {
            return setValues({ ...values, option: e.target.value });
          }}
        >
          <option>React</option>
          <option>Next</option>
        </select>
        <br />
        {submitted && !values.option ? (
          <span>Please select an option</span>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
