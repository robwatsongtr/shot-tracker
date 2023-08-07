import { db } from '../firebase'
import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, User } from "firebase/auth"

const auth = getAuth()

const HistoryTable = () => {
  // Don't want this <any> but having a hard time getting an 
  // interface to work with how Firestore stores the date
  const [ data, setData ] = useState<any[]>([])
  const [ user, setUser ] = useState<User | null>(null) 
  const [ uid, setUid] = useState<string | null>(null)
  const displayName = user?.displayName
  const email = user?.email
 
  useEffect( () => {
    const fetchData = async () => {
      console.log("reading db")
      try {
        const querySnapshot = await getDocs( 
          query( collection(db, 'sessions'), orderBy(`date`) )
        )
        // need to make sure id is saved with each document
        const documentsData = querySnapshot.docs.map( (doc) => {
          return { id: doc.id, ...doc.data() }
        })
        // Filter on user ID. TO DO, get rid of <any> like above in data state 
        if (uid) {
          setData( documentsData.filter( (doc: any) => doc.userId === uid )) 
        }
      } catch (err) {
        console.error(`Error: `, err)
        alert('Error reading from database. Check console.')
      }
    }

    fetchData()
  }, [uid] )

  const deleteSession = async (id: string) => {
    try {
      const docRef = doc(db, 'sessions', id)
      await deleteDoc(docRef)
      setData( data.filter( item => item.id !== id) ) 
      alert(`Success deleting document: ${id}`)
    } catch (err) {
      alert(`Error deleting document ${id}: ${err} `)
      console.error(`Error deleting document ${id}: ${err}`)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (user) => {
      setUser(user);
      setUid( user ? user.uid : null )
    });

    return () => unsubscribe();
  }, []);

  const renderSessionsTableRow = () => {
    return data.map( (item) => 
      <tr key={item.id} >
        <td>{item.date.toDate().toLocaleString()}</td>
        <td>{item.sTotal}</td>
        <td>{item.sPercent.toFixed(1)}%</td>
        <td>{item.mTotal}</td>
        <td>{item.mPercent.toFixed(1)}%</td>
        <td>{item.lTotal}</td>
        <td>{item.lPercent.toFixed(1)}%</td>
        <td>{item.oTotal}</td>
        <td>{item.oPercent.toFixed(1)}%</td>
        <td>
          <button className="btn-delete" onClick={ () => deleteSession(item.id) }>
            Delete
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className='session-container'>
      <br/>
        <Link to="/">
            Main Page
        </Link>
      <br/> {displayName} <br/>
      <h5> {email} </h5> 
      <div className="table-container">
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total Short Attempts</th>
                <th>Short %</th>
                <th>Total Medium Attempts</th>
                <th>Medium %</th>
                <th>Total Long Attempts</th>
                <th>Long %</th>
                <th>Total Attempts</th>
                <th>Overall %</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {renderSessionsTableRow()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoryTable