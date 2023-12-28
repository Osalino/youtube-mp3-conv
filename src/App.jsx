import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo.png'

function App() {

  return (
    <div className='App'>
      <div id="logo">
        <img src={Logo}/>
        <h2>MP3 Downloader</h2>
      </div>

      <div id="body">
        <input type="text" />
        <span>It might take a moment to cover you video</span>
      </div>
      <button>Download Now!</button>
    </div>
  )
}

export default App
