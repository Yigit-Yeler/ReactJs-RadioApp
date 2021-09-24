import React, { useState, useEffect } from "react"
import './App.css';
import { DATA } from './Data'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const [url, setUrl] = useState(null)

  const changeUrl = (url) => {
    setUrl(url)
  }
  return (
    <div >
      <div className="header">
        yStation
      </div>
      <div className="App">
        {DATA.map((item) => (
          <a onClick={() => changeUrl(item.url)}
            className="radio-station"
            style={{ cursor: "pointer" }}>
            <img src={item.image}
              style={{ width: 250, height: 250 }} />
          </a>
        ))}
      </div>
      <div className="player">
        <AudioPlayer
          autoPlay
          showJumpControls={false}
          src={url}
          onPlay={e => console.log("onPlay")}
        // other props here
        />
      </div>

    </div>
  );
}

export default App;
