import SignUpForm from "../../components/sign-up/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in/sign-in-form.component.jsx";
import './auth.styles.scss';
import GoogleSignIn from "../../components/sign-in/google-sign-in-form.component.jsx";

function AuthComponent() {

  return (
    <div className='authentication-container'>
      <div>
        <SignInForm />
        <GoogleSignIn />
      </div>
      <SignUpForm/>
    </div>
  );
}

export default AuthComponent;