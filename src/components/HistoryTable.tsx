import { db } from '../firebase'
import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

const HistoryTable = () => {
  const [ data, setData ] = useState<any[]>([])
  
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs( 
        query(collection(db, 'sessions'), orderBy(`date`))
      )
      // need to make sure id is saved with each document
      const documentsData = querySnapshot.docs.map( (doc) => {
        return { id: doc.id, ...doc.data() }
      })
      setData(documentsData)
    } catch (err) {
      console.log(`Error: `, err)
    }
  }

  const deleteSession = async (id: string) => {
    try {
      const docRef = doc(db, 'sessions', id)
      await deleteDoc(docRef)
      // The filter() method creates a shallow copy of a portion of a given array, 
      // filtered down to just the elements from the given array that pass the test 
      // implemented by the provided function.
      setData( data.filter( item => item.id !== id)) // remove deleted item from array
      alert(`Success deleting document: ${id}`)
    } catch(err) {
      alert(`Error deleting document ${id}: ${err} `)
      console.error(`Error deleting document ${id}: ${err}`)
    }
  }

  useEffect( () => {
    fetchData()
  }, [])

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
      <div className="table-container">
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total Short Shots</th>
                <th>Short %</th>
                <th>Total Medium Shots</th>
                <th>Medium %</th>
                <th>Total Long Shots</th>
                <th>Long %</th>
                <th>Total Shots</th>
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