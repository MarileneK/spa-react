import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function EditAnimal({ selectedAnimal, setSelectedAnimal, animals, setAnimals, setModal }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(selectedAnimal.id, "-> selectedAnimal.id");

        const animalIndex = animals.findIndex((animal) => parseInt(selectedAnimal.id) === parseInt(animal.id)); // Searches for the index of the selected animal. IMPORTANT: if findIndex() returns false -> -1 // parseInt() = converts into integer

        // If id not found, returns nothing & stops reading the rest of the function
        if (animalIndex === -1) return;

        // console.log(animalIndex, '-> animalIndex');
        // console.log(selectedAnimal, '-> selectedAnimal');

        let animalsCopy = animals; // IMPORTANT: I have to make a copy of the state animals BECAUSE we cannot change it directly 
        animalsCopy.splice(animalIndex, 1, selectedAnimal); // With splice(), returns an array & updates the animalsCopy with the modified info of the student
        // console.log(updatedStudents, '-> updatedStudents');
        // console.log(animals, '-> animals');

        setAnimals(animalsCopy); // Updates animals state

        setModal(false); // Closes the modal

        setSelectedAnimal(null); // Resets the selectedAnimal to null 

        // ------------------------------------------------------------------------

        // CODE WORKING BUT PROBLEM: adds the modified student at the bottom of the list
        // const handleSubmit = (e) => {
        //     e.preventDefault(); 

        //     console.log(selectedAnimal.id, "-> selectedAnimal.id");

        //     // Filters the student WITHOUT the student on which I clicked
        //     const filteredStudents = aninals.filter((student) => student.id !== selectedAnimal.id); // Returns all aninals EXCEPT the ID I clicked on

        //     // Update aninals state with the update info
        //     setAnimals([...filteredStudents, selectedAnimal]); // ...selectedAnimal = I make a copy and I add it

        //     setModal(false);

        //     setSelectedAnimal(null);
        // }

    }


    return (
        <div className='backdrop'>
            <div className='modal'>
                <div className='close-icon'>
                    <FaTimes onClick={() => { setModal(false); setSelectedAnimal(null) }} /> {/* setModal(false) = closes the modal // setSelectedAnimal(null) = resets the selectedAnimal at null */}
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='animal'>Type</label>
                    <input
                        id='animal'
                        type="text"
                        value={selectedAnimal?.animal} // Adds '?' for optional key in case the key is null
                        onChange={(e) => setSelectedAnimal({ ...selectedAnimal, animal: e.target.value })}
                    />

                    <label htmlFor='name'>Prénom</label>
                    <input
                        id='name'
                        type="text"
                        value={selectedAnimal?.name} // Adds '?' for optional key in case the key is null
                        onChange={(e) => setSelectedAnimal({ ...selectedAnimal, name: e.target.value })} // setSelectedAnimal = updates selectedAnimal. I have to make a copy of selectedAnimal & it checks if there's an existing key 'firstName', it will replace the value. IF there's no such key, it will create one
                    />

                    <label htmlFor='gender'>Genre</label>
                    <select
                        id='gender'
                        name='gender'
                        onChange={(e) => setSelectedAnimal({ ...selectedAnimal, gender: e.target.value })}
                    >
                        <option selected disabled>-- Choisir --</option>
                        <option
                            value="femelle"
                        >Femelle</option>
                        <option
                            value="mâle"
                        >Mâle</option>
                    </select>

                    <label htmlFor='age'>Âge</label>
                    <input
                        id='age'
                        type="number"
                        value={selectedAnimal?.age}
                        onChange={(e) => setSelectedAnimal({ ...selectedAnimal, age: e.target.value })}
                    />

                    <label htmlFor='arrival'>Date d'arrivée</label>
                    <input
                        id='arrival'
                        type="date"
                        value={selectedAnimal?.arrival}
                        onChange={(e) => setSelectedAnimal({ ...selectedAnimal, arrival: e.target.value })}
                    />

                    <label htmlFor='departure'>Date d'adoption</label>
                    <input
                        id='departure'
                        type="date"
                        value={selectedAnimal?.departure}
                        onChange={(e) => setSelectedAnimal({ ...selectedAnimal, departure: e.target.value })}
                    />

                    <button type="submit" className='btn-modify'>Valider</button>
                </form>

            </div>
        </div>
    );
}
