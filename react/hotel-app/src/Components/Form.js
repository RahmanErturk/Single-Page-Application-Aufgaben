import { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    check_in: "",
    check_out: "",
  });

  const handleInput = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    setValues({
      first_name: "",
      last_name: "",
      check_in: "",
      check_out: "",
    });
    console.log(values);
  };

  return (
    <form onSubmit={handleForm} onChange={handleInput}>
      <h3>Add new Guest</h3>
      <label htmlFor="nameInput">
        <input
          type="text"
          placeholder="First name"
          id="firstNameInput"
          value={values.first_name}
          name="first_name"
        />
      </label>
      <label htmlFor="nameInput">
        <input
          type="text"
          placeholder="Last name"
          id="lastNameInput"
          value={values.last_name}
          name="last_name"
        />
      </label>
      <label htmlFor="nameInput">
        <input
          type="date"
          id="checkInDateInput"
          value={values.check_in}
          name="check_in"
        />
      </label>
      <label htmlFor="nameInput">
        <input
          type="date"
          id="checkOutDateInput"
          value={values.check_out}
          name="check_out"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
