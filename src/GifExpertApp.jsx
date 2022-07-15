import { useState } from 'react'
import { AddCategories, GifGrid } from './components'

export const GifExpertApp = () => {

  //Cambio de  estado de las Categoria de los GIFS 
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;
    setCategories([ newCategory,...categories])
  }


  return (
    <>
    <h1>Buscador de GIFS</h1>

    {/* <AddCategories onNewCategory = { e => onAddCategory(e) }/> */}
    <AddCategories onNewCategory = { onAddCategory } listCategories = {categories} />

    {/* <button onClick={ onAddCategory }>Agregar</button> */}

    {
      categories.map(category => (
        <GifGrid key={category} category={ category }/>
      ))
    }
    
    </>
  )
}
