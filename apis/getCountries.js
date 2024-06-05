import axios from "axios"

const tokenKey = import.meta.env.VITE_TOKEN

export const getCountries = async() =>{
     const countries = await axios.get(`https://restfulcountries.com/api/v1/countries`, {
          headers: 
          `Authorization: Bearer ${tokenKey}`
          }
     )
     console.log(countries.data.data)
     return countries.data.data
}