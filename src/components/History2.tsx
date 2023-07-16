import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

const History2 = () => {
  const [ data, setData ] = useState<any[]>([])
    
  useEffect( () => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs( 
          query( collection(db, 'sessions'), orderBy(`date`) )
        )
        const documentsData = querySnapshot.docs.map( (doc) => doc.data() )
        setData(documentsData)
      } catch (err) {
        console.log(`Error: `, err)
      }
    }

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
      </tr>
    )
  }

 
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