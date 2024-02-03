import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component.jsx";
import {useState} from "react";
import {signInUserFromEmailPassword} from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";

const defaultFormFields = {
  email: '',
  password: ''
}

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields( {...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserFromEmailPassword(email, password);
    } catch (error) {
      console.log("error: logging in.", error);
    } finally {
      setFormFields(defaultFormFields);
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Sign In.</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <Button type='submit'>Sign In</Button>
      </form>
    </div>


  );
}

export default SignIn;