import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getinfoName } from '../redux/actions'

export default function SearchTask() {
  const dispatch = useDispatch()
  const [name, SetName] = useState('')

  const handleSearch = (e) => {
    SetName(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(!name){
          alert("Ingrese nombre de busqueda")
      }else{
          try{ dispatch(getinfoName(name))
            }
          catch(e){
              console.log(e, "soy el error ")
          }
    }
  }

  return (
    <div>
      <form>
        <input
        className='h-8 mr-2 border rounded text-center'
          type='text'
          value={name}
          placeholder= "  Nombre de Tarea..."
          onChange={(e) => handleSearch(e)}
        />
        <button className="inline-block text-sm px-4 py-2 leading-none 
                        border rounded text-white border-white 
                        hover:border-transparent hover:text-teal-500
                        hover:bg-white mt-4 lg:mt-0
                        transition ease-in-out duration-700 
                        " disabled={Object.keys(!name).length} type='submit' onClick={(e) => handleSubmit(e)}>BUSCAR</button>
      </form>
    </div>
  )
}
