import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; 
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth()

const LogoutButton = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let unsubscribe = onAuthStateChanged( auth, (user) => {
      if (!user) {
        navigate('/'); 
      }
    })

    return () => unsubscribe()
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate('/'); 
    } catch (error) {
      alert('Error signing out')
      console.error('Error signing out:', error);
    }
  }

  return (
    <div>
      <button className="btn-logout" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutButton