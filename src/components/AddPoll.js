import * as React from 'react'
import { handeAddPoll } from '../actions/polls'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function AddPoll () {
  const history = useHistory()
  const dispatch = useDispatch()

  const [options, setOptions] = React.useState({
    a: '', b: '', c: '', d: ''
  })

  const [question, setQuestion] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/')
    dispatch(handeAddPoll({
      question,
      ...options
    }))
  }

  const handleInputChange = ({ target }) => {
    const { value, name } = target

    setOptions({
      ...options,
      [name]: value
    })
  }

  const isDisabled = () => {
    return question === ''
      || options.a === ''
      || options.b === ''
      || options.c === ''
      || options.d === ''
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3 style={{marginBottom: 5}}>What is your question?</h3>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        name='question'
        className="input"
        type="text"
      />

      <h3>What are the options?</h3>

      <label className="label" htmlFor="input">A.</label>
      <input
        value={options.a}
        onChange={handleInputChange}
        name='a'
        className="input"
        type="text"
      />

      <label className="label" htmlFor="input">B.</label>
      <input
        value={options.b}
        onChange={handleInputChange}
        name='b'
        className="input"
        type="text"
      />

      <label className="label" htmlFor="input">C.</label>
      <input
        value={options.c}
        onChange={handleInputChange}
        name='c'
        className="input"
        type="text"
      />

      <label className="label" htmlFor="input">D.</label>
      <input
        value={options.d}
        onChange={handleInputChange}
        name='d'
        className="input"
        type="text"
      />

      <button className='btn' type='submit' disabled={isDisabled()}>
        Submit
      </button>
    </form>
  )
}