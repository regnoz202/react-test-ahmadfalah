import React, { useState } from 'react'
import "../src/Modal.css"

export default function Card(props) {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
    {modal && (
    <div className='modal'>
    <div className='overlay' onClick={toggleModal}></div>
    <div className='modal-content'>
        <h1 className='text-3xl font-bold'>{props.name}</h1>
        <h3>
          Continent: {props.continent}
        </h3>
        <h3>
          Capital: {props.capital}
        </h3>
        <h3>
          Population: {props.population}
        </h3>
        <h3>
          Area: {props.size}
        </h3>
        <button
        className='close-modal'
        onClick={toggleModal}
        >CLOSE</button>
    </div>
  </div>
  )}

  <div className="shadow-xl card card-compact w-96 bg-base-200">
  <figure><img src={props.flag} alt="Flag" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.name}</h2>
    <p>{props.fullname}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary" onClick={toggleModal}>Details</button>
    </div>
  </div>
</div>

</>
  )
}
