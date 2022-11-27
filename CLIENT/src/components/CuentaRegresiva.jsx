import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


export default function CuentaRegresiva() {
const maximun_date = useSelector((state) => state.tasks)


    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()
    const startTimer = () => {
        const cuentaRegresiva = new Date(maximun_date.map(e => e === e.maximun_date)).getTime()
        

        // la siguiente funcion debe tener un parametro con la fecha limite
        interval = setInterval(() => {
            const inmediato = new Date().getTime()

            const regresiva = cuentaRegresiva - inmediato
            
            const dias = Math.floor(regresiva / (24 * 60 * 60 * 1000))
            const horas = Math.floor(regresiva % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
            const minutos = Math.floor(regresiva % (24 * 60 * 60 * 1000) / (1000 * 60))
            const segundos = Math.floor(regresiva % (60 * 1000) / 1000)

            if (regresiva < 0){


                clearInterval(interval.current)
            }else {
                setTimerDays(dias)
                setTimerHours(horas)
                setTimerMinutes(minutos)
                setTimerSeconds(segundos)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        // console.log(maximum_date, "date tarea")
    })
    

  return (
    <div className='flex flex-row text-center'>
    <section>
        <p>{timerDays}</p>
        <small>Dias</small>
    </section>{" "}
        <span> : </span>
    <section>
        <p>{timerHours}</p>
        <small>Horas</small>
    </section>{" "}
    <span> : </span>
    <section>
        <p>{timerMinutes}</p>
        <small>Minutos</small>
    </section>{" "}
    <span> : </span>
    <section>
        <p>{timerSeconds}</p>
        <small>Segundos</small>
    </section>

    </div>
  )
}
