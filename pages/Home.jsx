import React from 'react'
import { useState } from 'react'
import {getCountries} from "../apis/getCountries"
import { useEffect } from 'react'
import Card from '../components/Card'
import { Container } from 'postcss'


export default function Home() {

     const [countriesList, setCountriesList] = useState([])

  useEffect(()=>{
    getCountries().then((res)=> {
      setCountriesList(res)
    })
  }, [])

  const CardList = () => {
    return countriesList.map((countries, i) => {
      return(
        <div key={i}>
          <Card
          flag={countries.href.flag}
          name={countries.name}
          fullname={countries.full_name}
          continent={countries.continent}
          capital={countries.capital}
          population={countries.population}
          size={countries.size}
          />
        </div>
      )
    })
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 ">
      <CardList/>
    </div>
    </div>
  )
}
