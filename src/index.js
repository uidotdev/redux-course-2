import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.Fragment>
    <ColorfulBorder />
    <App />
  </React.Fragment>,
  document.getElementById('root')
)