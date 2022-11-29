import React, {useState, useEffect} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


export default function CalificarTarea(props) {
  console.log(props, "data.props")
  const [ranking, setRanking] = useState(props.ranking)
    const [estrellas, setEstrellas]= useState(props.style)
    
    useEffect(()=>{
        if(props.card === false){
            if(ranking <= 2){
                setEstrellas({color: "red"})
              }else{
                setEstrellas({color: "green"})
              }
        }     
    }, [ranking])

    const indexStart= (index)=>{
        setRanking(index+1)
    }
    
  return (
    <div class="flex items-center mt-4 text-3xl text-yellow-500 ">
    {
        [...new Array(5)].map((star, index) => {
          return index < ranking ? <AiFillStar key={index} style={estrellas} onClick={() => indexStart(index)}/> : <AiOutlineStar key={index} style={estrellas} onClick={() => indexStart(index)}/>
        })
      }

    </div>
  )
}
