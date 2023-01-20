import React,{ useState,useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./index.css"
import axios from "axios"
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading,setLoading] = useState(true)
  const [jobs,setJobs] = useState([])
  const [value,setValue] = useState(0)

  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      setJobs(response.data)
      setLoading(false)
    })
    .catch(reject=>console.log(reject))
  },[])
  if(loading){
    return <h1 className='loading'>Loading...</h1>
  }
  const {company,title,dates,duties,id} = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
        {
          jobs.map((job,index)=>{
            return <button 
                    key={job.id} 
                    onClick={()=>setValue(index)} 
                    className={`job-btn ${index === value && 'active-btn'}`}>{job.company}</button>
          })
        }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((dutie,index)=>{
              return <div key={index} className='job-desc'>
                <FaAngleDoubleRight/>
                <p>{duties}</p>
              </div>
            })
          }
        </article>
      </div>
      <button type="button" className='btn'>more info</button>
    </section>
  )
}

export default App
