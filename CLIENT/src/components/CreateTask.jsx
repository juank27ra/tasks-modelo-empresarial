import React, {useState} from 'react'
import { postTask, getTask } from '../redux/actions'  
import { useDispatch } from 'react-redux'


export default function CreateTask() {
const dispatch = useDispatch()
const [input, setInput] = useState({
  title: '',
  description: '',
  date_create: '',
  maximum_date: '',
  fulfilled: '',
  responsible: ''
})
// const menu = document.querySelector('#menu')

const handleChange=(e) =>{
  const {name, value} = e.target
  setInput({
      ...input,
      [name] : value
  })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTask(input))
    dispatch(getTask())
    setInput({
      title: '',
      description: '',
      date_create: '',
      maximum_date: '',
      fulfilled: '',
      responsible: ''
    })
}

  return (
    <div >
    <h1  className=" container mx-auto mt-5 text-center text-white bg-blue-500 border-blue p-5"  >Crear tu Tarea</h1>
    <button type="button" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full ml-6 mt-6 hover:bg-purple-200 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Volver</button>
      <form id='menu' className="w-full max-w-lg container mx-auto mt-5" onSubmit={(e) => handleSubmit(e)}>
          <div  className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              title
              </label>
              <input value={input.title} name="title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => handleChange(e)} id="grid-task" type="text" placeholder="Task" />
              <p className="text-gray-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              responsible
              </label>
              <input value={input.responsible} name="responsible" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} id="grid-last-name" type="text" placeholder="Name" />
            </div>
          </div>
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              date_create
              </label>
              <input 
              value={input.date_create} 
              name="date_create" 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              onChange={(e) => handleChange(e)} 
              id="grid-first-name" 
              type="date" 
              placeholder="date"
              /> 
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              maximum_date
              </label>
              <input value={input.maximum_date} name="maximum_date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} id="grid-last-name" type="date" placeholder="date" />
          </div>
      </div>
  <div className="flex flex-wrap -mx-3 mb-6 ">
    <div className="w-full px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      description
      </label>
      <textarea value={input.description} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} size="xl" id="grid-textarea" type="textarea" placeholder='Description short or items' />
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      fulfilled
      </label>
      <div className="relative">
        <select onChange={(e) => handleChange(e)} name="fulfilled" value={input.fulfilled} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center" id="grid-state" >
          <option  type= 'checkbox' value={true} className="text-green-700" >True</option>
          <option  type= 'checkbox' value={false} className="text-red-700" >False</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" for="grid-zip" >
        Persona que Califica
      </label>
      <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" placeholder="Name admin or Incharged" required />
    </div> */}
  </div>
  <div className="flex justify-center mt-5 ">
    <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Crear
    </button>
  </div>
</form>
    </div>
  )
}
