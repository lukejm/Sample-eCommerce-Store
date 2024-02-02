import { getAuth, signOut } from 'firebase/auth';

function SignOut() {
  const signOutUser = async () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      // sign out successful
      console.log("success: signed out");
    }).catch((error) => {
      console.log("error: couldn't sign out", error);
    });
  };

  return (
    <div>
      <h1>SignOutPage</h1>
      <button onClick={signOutUser}>Sign Out</button>
    </div>
  );
}
export default SignOut;