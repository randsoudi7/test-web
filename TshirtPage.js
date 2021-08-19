import react,{useState ,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'



const TshirtPage=()=>{

let [Tshirt,setTshirt]=useState()
let {ID} =useParams();

useEffect(()=>
{
    axios.get('http://localhost:4000/Tshirt/'+ID)
    .then(res=>
    {
        console.log(res)
        setTshirts(res.data)

    })

}

