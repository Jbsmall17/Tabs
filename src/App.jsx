import React,{ useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./index.css"

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading,setLoading] = useState(false)

  if(loading){
    return <h1 className='loading'>Loading...</h1>
  }
  return (
    <section className="section">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
    </section>
  )
}

export default App
