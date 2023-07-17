import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

const History2 = () => {
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

  const deleteDoc = (id: string) => {

  }

  useEffect( () => {
    fetchData()
  }, [])


  const renderSessionsTable = () => {
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
          <button className="btn-delete" onClick={() => deleteDoc(item.id)} >
            Delete
          </button>
        </td>
      </tr>
    )
  }

  console.log(data)
 
  return (
    <div className="table-container">
      <br/>
      <Link to="/">
          Main Page
      </Link>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Short Shots</th>
              <th>Short Percent</th>
              <th>Total Medium Shots</th>
              <th>Medium Percent</th>
              <th>Total Long Shots</th>
              <th>Long Percent</th>
              <th>Total Shots</th>
              <th>Overall Percent</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {renderSessionsTable()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History2