import SignUpForm from "../../components/sign-up/sign-up-form.component.jsx";
import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils.js";
import SignIn from "../../components/sign-in/sign-in.component.jsx";

function AuthComponent() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>SignInPage</h1>
      <SignIn />
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm/>
    </div>
  );
}

export default AuthComponent;