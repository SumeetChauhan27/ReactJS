import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>

      <div className="card">
        <div><div className="top">
          <img src="https://shorturl.at/7NnxS" alt="" />
          <button>Save <Bookmark size={12} color='#b1b1b1' /></button>
        </div>

        <div className="center">
          <h3>Amazon <span> 5 Days ago </span> </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div></div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button size={12} color='#b1b1b1'  >Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default App
