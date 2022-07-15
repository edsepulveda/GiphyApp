import { useState } from "react"


export const AddCategories = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) =>{
        setInputValue(target.value);

    }

    const onSubmit = (event) =>{
        event.preventDefault()
        const newInputValue = inputValue.trim()
        
        if(newInputValue.length <= 1) return;

        onNewCategory( newInputValue )
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text" 
        placeholder="Ingrese nombre de Gifs..." 
        value={inputValue} onChange={onInputChange}/>
    </form>
    
  )
}
