import React, { useState } from 'react';

export default function AddAnimal({ onAdd }) {

    const [animal, setAnimal] = useState('');
    const [name, setName] = useState('');
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    // handleSubmit() is triggered WHEN I CLICK 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents from page refresh

        if (!animal || !name || !arrival || !age || !gender) { // Checks if the user inputs are empty, THEN displays an alert
            alert('Merci de bien vouloir remplir tous les champs.');
            return
        }

        onAdd({ animal, name, arrival, age, gender }); // If user inputs are ok, THEN I call my onAdd() function

        // Clears the input
        setAnimal('');
        setName('');
        setArrival('');
        setDeparture('');
        setAge('');
        setGender('');
    }

    return (
        <div id='addAnimal-section' className='animalsList'>

            {/* IMPORTANT: onSubmit() on the form + value={useState} (onChange() & value) in the input */}
            <form onSubmit={handleSubmit}>

                <div className='formField'>
                    <label htmlFor='animal'>Type</label>
                    <input
                        id='animal'
                        type='text'
                        // placeholder='Type'
                        className='formInput'
                        required
                        value={animal} // value={nameOfTheState} = in order to retrieve user input
                        onChange={(e) => setAnimal(e.target.value)} // onChange={arrow function} = checks if I get the input
                    ></input>
                </div>

                <div className='formField'>
                    <label htmlFor='name'>Prénom</label>
                    <input
                        id='name'
                        type='text'
                        // placeholder='Prénom'
                        className='formInput'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>

                <div className='formField'>
                    <label htmlFor='age'>Âge</label>
                    <input
                        id='age'
                        type='number'
                        // placeholder='Âge'
                        className='formInput'
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    ></input>
                </div>

                <div className='formField'>
                    <label htmlFor='gender'>Genre</label>
                    <select
                        id='gender'
                        name='gender'
                        className='formInput'
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option selected disabled>-- Choisir --</option>
                        <option
                            value="femelle"
                        >Femelle</option>
                        <option
                            value="mâle"
                        >Mâle</option>
                    </select>
                </div>

                <div className='formField'>
                    <label htmlFor='arrival'>Date d'arrivée</label>
                    <input
                        id='arrival'
                        type='date'
                        // placeholder="Date d'arrivée"
                        className='formInput'
                        required
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    ></input>
                </div>

                <button type='submit' className='btn-add'>Ajouter</button>
            </form>

        </div>
    );
}
