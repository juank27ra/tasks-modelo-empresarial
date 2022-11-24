import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getTask, deleteTask, EditTask } from '../redux/actions'  
import Create from './CreateTask'
import Footer from './Footer'
// import Button from "@material-tailwind/react/Button";
// import Checkbox from "@material-tailwind/react/Checkbox";


function Task () {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.tasks)
    // const boton = document.querySelector('#boton')
    const menu = document.querySelector('#menu')
    
    useEffect(() => {
        dispatch(getTask())
    }, [dispatch])
    
    const handledelete = (e) => {
        console.log(e, "soy linea 20")
    dispatch(deleteTask())
    dispatch(getTask())
    }
    const handleEdit = (e) => {
        console.log(e, "soy linea 25")
    dispatch(EditTask())
    dispatch(getTask())
    }

const handleClick = (e) => {
    e.preventDefault();
    console.log("me dió click")
      menu.classList.toggle('hidden')
  }
// boton.addEventListener('click', () => {
//     console.log("me dió click en punto")
//     menu.classList.toggle('hidden')
// })
return (
    <div>
        <div class="container mx-auto mt-5">
            <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                        {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                        <span class="font-semibold text-xl tracking-tight">Tasks</span>
                    </div>
                    <div class="block lg:hidden">
                        <button id='boton' class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                <div id='menu' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="#responsive-header" 
                        class=
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Semanal
                        </a>
                        <a href="#responsive-header" 
                        class=
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Mensual
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Anual
                        </a>
                    </div>
                    <div>
                        <a href="Create" class="inline-block text-sm px-4 py-2 leading-none 
                        border rounded text-white border-white 
                        hover:border-transparent hover:text-teal-500
                        hover:bg-white mt-4 lg:mt-0
                        transition ease-in-out duration-700 
                        " onClick={(e) =>handleClick}>
                        Crear Tarea</a>
                    </div>
                </div>
            </nav>
    
            <Create/>

                <div class=" flex flex-wrap container mx-auto mt-10 mb-20 text-center">
                    {
                        data.map((e, i) => {
                            return(
                                <div  class=" columns ">
                                <div key={i} class=" columns-4 justify-evenly  max-w-sm w-full lg:max-w-full lg:flex">
                                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
    <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
    </div>
    <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calificar</label>
    </div>
                                    <div class="columns-3 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div class="mb-8 ml-4 mr-4 mt-4">
                                            <div class="text-gray-900 font-bold text-xl mb-2">{e.title}</div>
                                            <p class="text-gray-700 text-base">{e.description}</p>
                                            <p class="text-gray-700 text-base">{e.date_create.slice(0, 10)}</p>
                                            <p class="text-gray-700 text-base">{e.fulfilled}</p>
                                            <p class="text-gray-700 text-base">{e.maximum_date.slice(0, 10)}</p>
                                        </div>
                                        <div class="flex items-center">
                                            <img class="w-10 h-10 rounded-full mr-4" src="https://imgs.search.brave.com/j4IGLUo25doWO4HUTlToem2BBcrj5jKHqkjrItss8vI/rs:fit:626:417:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mb3RvLWdyYXRp/cy9tdWplci1iYXN0/YW50ZS1qb3Zlbi1x/dWUtdHJhYmFqYS1j/b21wdXRhZG9yYS1w/b3J0YXRpbC1zdS1v/ZmljaW5hXzEzMDEt/NDI2OC5qcGc" alt="Avatar"/>
                                            <div class="text-sm">
                                                <p class="text-gray-900 leading-none">{e.responsible}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded" onClick={() => handledelete()}>Eliminar</button>
                                            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded" onClick={() => handleEdit()}>Editar</button>
                                            {/* <button onClick={() => handledelete()}><img src="CLIENT/basura.png" alt='h'></img></button>
                                            <button onClick={() => handleEdit()}><img src='CLIENT/boton-editar.png' alt='j'></img></button> */}
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            </div>
                            )  
                        })
                    }
                    </div>
                </div>

            <Footer/>


            </div>
    )
}

export default Task