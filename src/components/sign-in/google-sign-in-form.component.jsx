import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";

function GoogleSignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <Button type='button' buttonType='google' onClick={logGoogleUser}>Google</Button>
  );
}
export default GoogleSignIn;