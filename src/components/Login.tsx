import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const auth = getAuth()

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user)  => {
      if (user) {
        navigate('/mainPage'); // Redirect to the dashboard after successful login
      }
    })

    return () => unsubscribe()
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider(); 
      await signInWithPopup(auth, provider);
      navigate('/mainPage')
    } catch (error) {
      alert('Error signing in with Google')
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