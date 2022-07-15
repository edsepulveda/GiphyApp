import GifItem from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (

    <>
    <h1>{ category }</h1>
    {
      isLoading && (<h2>Loading...</h2>)
    }
    <div className="card-grid">
      {
        images.map( ( image ) =>(
          <GifItem key={ image.id }
          //Modulo Spread hacia imagen para recibir todas las props que especificamos en GifItem [title,url,id] 
          { ...image }
          
          />
        ) )
      }
    </div>
    </>
  )
}
