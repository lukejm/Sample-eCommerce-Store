import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up/sign-up-form.component.jsx";
import './sign-in.styles.scss';

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>SignInPage</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;