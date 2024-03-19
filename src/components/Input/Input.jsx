"use client"

import React, { useEffect, useState } from 'react'

const Input = ({movieDeatils, ret}) => {

    const [movieId, setId] = useState(1011985)

    function handleChange({target}) {
        setId(target.value)
    }

    useEffect(()=>{
        fetchData()
    }, [movieId])

    async function fetchData(){
        const movieDeatilsData = await movieDeatils(movieId)
        ret(movieDeatilsData)
    }

    

  return (
    <input className='text-black' value={movieId} onChange={handleChange} type='number'/>
  )
}

export default Input