import { signInWithGooglePopup} from "../../utils/firebase/firebase.utils.js";
import Button from "../button/button.component.jsx";

function GoogleSignIn() {

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  }

  return (
    <Button type='button' buttonType='google' onClick={logGoogleUser}>Google</Button>
  );
}
export default GoogleSignIn;