import React from 'react'

import './LoadingPage.css'
import CharacterImg from '../../img/CharacterImg.png'

function LoadingPage() {
  return (
    <div style={{ width: '100%', height: '100%'}}>
      <div style={{ width: '100%', margin: '0px auto' }}>
        <div className='loadingPage_main_container'>
          <div style={{ paddingTop: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src={ CharacterImg } style={{ width: '246px' }}/>
          </div>
          <div><p style={{ fontSize: '25px', textAlign: 'center', margin: 0, color: '#0E4A84' }}>Chatbot for Korea Foreign</p></div>
          <a href='/chatbot'>
            <div style={{ width: '330px', height: '50px', border: '1px solid #0E4A84', borderRadius: '45px', marginTop: '131px'}}>
              <p style={{ fontSize: '25px', textAlign: 'center', margin: 0, color: '#0E4A84', paddingBottom: '100px' }}>Free To Start</p>
            </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage