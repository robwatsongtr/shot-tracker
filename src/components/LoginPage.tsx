import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

const auth = getAuth()

const LoginPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let unsubscribe = onAuthStateChanged( auth, (user) => {
      if (user) navigate('/mainPage'); // Redirect to the dashboard after successful login
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

  const pageStyle: React.CSSProperties = { 
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return ( 
    <div style={pageStyle}>
      <h2>Shot Tracker</h2>
      <br/>
      <Button onClick={handleGoogleSignIn} variant="contained" size="small"> 
        Sign in 
      </Button>
    </div>
  )
}

export default LoginPage 