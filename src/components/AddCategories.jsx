import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newInputValue = inputValue.trim()
    if (newInputValue.length <= 1) return
    setInputValue('')
    onNewCategory(newInputValue)
  }

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Ingrese nombre de Gifs...'
        value={inputValue} onChange={onInputChange}
      />
    </form>
  )
}

AddCategories.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
