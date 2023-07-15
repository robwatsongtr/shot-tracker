import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from 'react';
import './../App.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const History = () => {
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

  const renderSessions = () => {
    return data.map( (item) =>
      <div key={item.id} className='session-item' >
        <br/>
        <span>Date: {item.date.toDate().toLocaleString()}</span>
        <span>Total Short Shots: {item.sTotal}</span>
        <span>Short Percent: {item.sPercent.toFixed(1)}%</span>
        <span>Total Medium Shots: {item.mTotal}</span>
        <span>Medium Percent: {item.mPercent.toFixed(1)}%</span>
        <span>Total Long Shots: {item.lTotal}</span>
        <span>Long Percent: {item.lPercent.toFixed(1)}%</span>
        <span>Total Shots: {item.oTotal}</span>
        <span>Overall Percent: {item.oPercent.toFixed(1)}%</span>
        <br />
      </div>
    )
  }

  return (
    <div className="session-container">
      <br/>
      <Link to="/">
          Main Page
      </Link>
      {renderSessions()}
    </div>
  )
}

export default History