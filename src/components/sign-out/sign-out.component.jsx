import {signOutUser} from "../../utils/firebase/firebase.utils.js";

function SignOut() {

  const signOut = () => signOutUser();

  return (
    <div>
      <h1>SignOutPage</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
export default SignOut;