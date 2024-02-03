import './sign-in-form.styles.scss';
import FormInput from "../form-input/form-input.component.jsx";
import {useContext, useState} from "react";
import {signInUserFromEmailPassword} from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";
import {UserContext} from "../../context/user.context.jsx";

const defaultFormFields = {
  email: '',
  password: ''
}

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields( {...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInUserFromEmailPassword(email, password);
    } catch (error) {
      console.log("error: logging in.", error);
    } finally {
      setFormFields(defaultFormFields);
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Sign In.</h2>
      <span>Sign in with your email and password.</span>
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

export default SignInForm;