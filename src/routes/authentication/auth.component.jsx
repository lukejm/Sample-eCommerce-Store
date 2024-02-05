import SignUpForm from "../../components/sign-up/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in/sign-in-form.component.jsx";
import './auth.styles.scss';

function AuthComponent() {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default AuthComponent;