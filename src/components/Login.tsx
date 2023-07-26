import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
const auth = getAuth()

const Login = () => {

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider(); 
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
 
  return ( 
    <div>
      <h2>Login Page</h2>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  )
}

export default Login 