import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';


const History = () => {
  const [ data, setData ] = useState<any[]>([])
    
  useEffect( () => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'sessions'))
        const documentsData = querySnapshot.docs.map( (doc) => doc.data() )
        setData(documentsData)
      } catch (err) {
        console.log(`Error: `, err)
      }
    }
    
    fetchData()
  }, [])

  return <h2>History</h2>
}

export default History