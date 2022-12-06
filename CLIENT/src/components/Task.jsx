import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector, } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTask, deleteTask } from '../redux/actions' 
import Footer from './Footer'
import CalificarTarea from './CalificarTarea'
import CuentaRegresiva from './CuentaRegresiva'
import SearchTask from './SearchTask'




function Task ({props, }) {


    const dispatch = useDispatch()
    const data = useSelector((state) => state.tasks)

    useEffect(() => {
        dispatch(getTask())
    }, [dispatch])
    
    const handledelete = (e) => {
    dispatch(deleteTask(e._id))
    dispatch(getTask())
    }

    const handleClick = (e) => {
        e.preventDefault();
    }


return (
    <div>
        <div className="container mx-auto mt-5">
            <nav className="flex items-center justify-between flex-wrap bg-yellow-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                        {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                        <span className="mr-4 font-bold text-blue-900 text-6xl tracking-tight">Tasks</span>
                    </div>
                    <div className="block lg:hidden">
                        <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" 
                        className=
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Semanal
                        </a>
                        <a href="#responsive-header" 
                        className=
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Mensual
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Anual
                        </a>
                    </div>
                    <div>
                       <div className=' my-2 '><SearchTask/></div> 
                        <a href="Create" className="inline-block text-sm px-4 py-2 leading-none 
                        border rounded text-white border-white 
                        hover:border-transparent hover:text-teal-500
                        hover:bg-white mt-4 lg:mt-0
                        transition ease-in-out duration-700 
                        " onClick={(e) =>handleClick}>
                        Crear Tarea</a>
                    </div>
                </div>
            </nav>

                <div className=" flex flex-wrap  p-4  ">
                    {
                        data.map((elem, i) => {
                            return(
                                <div class="flex justify-center my-4 mx-6  " >
                                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                                    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                                    <div class="p-6 flex flex-col justify-start">
                                    <h5 class="text-gray-900 text-xl uppercase mb-2 font-bold">{elem.title}</h5>
                                    <p class="text-gray-700 text-base ">
                                        
                                        {elem.description}
                                        <br/>
                                        {elem.date_create.slice(0, 10)}
                                        <br/>
                                        {elem.maximum_date.slice(0, 10)}
                                        <br/>
                                        <p className="">Responsable: {elem.responsible}</p>
                                        <br/>
                                        <p className="">{elem.fulfilled}</p>
                                    </p>
                                    <div className="flex items-center ">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calificar</label>
                                    </div>
                                        <div className='mt-3'>
                                            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded" onClick={() => handledelete(elem)}>Eliminar</button>
                                            <Link to={`/edit/${elem._id}`} ><td className="bg-transparent text center ml-2 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">Editar</td></Link>
                                        </div>
                                <CalificarTarea
                                    ranking={props}
                                />
                                <div className='mt-4 text-xl text-center ml-2 font-bold'>
                                <CuentaRegresiva 
                                 maximun_date = {elem.maximum_date}  
                                />
                                                             
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


// timerDays={elem.maximun_date} 
// timerHours={elem.maximun_date}
// timerMinutes={elem.maximun_date}
// timerSeconds={elem.maximun_date}



{/* <div  className=" flex columns-4 p-4 border-blue">
<div key={i} className=" columns-4 justify-between  max-w-sm w-full lg:max-w-full lg:flex">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">

    <div className="  place-items-center border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8 ml-4 mr-4 mt-4">
            <div className="text-gray-900 p-4 bg-blue-700 font-bold text-xl mb-2">{elem.title}</div>
            <p className="text-gray-700 mt-4 text-base">{elem.description}</p>
            <p className="text-gray-700 text-base">{elem.date_create.slice(0, 10)}</p>
            <p className="text-gray-700 text-base">{elem.fulfilled}</p>
            <p className="text-gray-700 text-base">{elem.maximum_date.slice(0, 10)}</p>
        </div>
        <div className="">
            <img className="w-10 h-10 rounded-full mr-4" src="https://imgs.search.brave.com/j4IGLUo25doWO4HUTlToem2BBcrj5jKHqkjrItss8vI/rs:fit:626:417:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mb3RvLWdyYXRp/cy9tdWplci1iYXN0/YW50ZS1qb3Zlbi1x/dWUtdHJhYmFqYS1j/b21wdXRhZG9yYS1w/b3J0YXRpbC1zdS1v/ZmljaW5hXzEzMDEt/NDI2OC5qcGc" alt="Avatar"/>
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{elem.responsible}</p>
            </div>
        </div>
        <div>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded" onClick={() => handledelete(elem)}>Eliminar</button>
            <Link to={`/edit/${elem._id}`} ><td className="bg-transparent text center hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">Editar</td></Link>  
            {/* <button onClick={() => handledelete()}><img src="CLIENT/basura.png" alt='h'></img></button>
            <button onClick={() => handleEdit()}><img src='CLIENT/boton-editar.png' alt='j'></img></button> 
        </div>
        <div className="flex items-center mt-2 h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calificar</label>
        </div>
    </div>

</div>    
</div>
</div> */}