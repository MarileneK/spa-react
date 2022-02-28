import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import EditAnimal from './Components/EditAnimal';

const LOCALE_STORAGE_KEY = 'animalKey';

function App() {

  // ARRAY OF ANIMALS
  const [animals, setAnimals] = useState([
    { id: 1, animal: 'chat', name: 'Whiskas', arrival: '2022-21-01', departure: null, gender: "femelle", age: 2 },
    { id: 2, animal: 'chien', name: 'Milou', arrival: '2019-07-03', departure: null,gender: "mâle", age: 1 },
    { id: 3, animal: 'tortue', name: 'Caroline', arrival: '2008-12-11', departure: null, gender: "femelle", age: 50 },
    { id: 4, animal: 'cochon', name: 'Peggy', arrival: '2015-05-15', departure: null, gender: "femelle", age: 8 },
    { id: 5, animal: 'cheval', name: 'Jolly Jumper', arrival: '2018-01-08', departure: null, gender: "mâle", age: 7 }
  ]);

  const [modal, setModal] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null); // IMPORTANT: this state will save an OBJECT
  // console.log(selectedStudent, '-> selectedStudent');

  // useEffect() : in order to retrieve new animals on page load
  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)); // IMPORTANT: parse the data to be able to display on browser!!

    if (storedAnimals) { // Only if there are animals in local storage, THEN displays on browser
      setAnimals(storedAnimals);
    }
  }, []);


  // useEffect() : in order to update the "animals" state everytime it changes
  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(animals)); // IMPORTANT: stringify the data to save in local storage!!!
  }, [animals]);


  // onAdd(): ADD A NEW ANIMAL
  const onAdd = (pet) => {
    // console.log(pet, "-> pet");

    const id = Math.floor(Math.random() * 1000) + 1; // Generates a new ID
    // console.log(id, "-> id");

    const newAnimal = { id, ...pet }; // Creates an object with the new ID generated + a copy of the new student (to be created)
    // console.log(newStudent, "-> newStudent");

    setAnimals([...animals, newAnimal]); // Updates the array of animals = makes a copy of the current array & adds the new student to it
    // console.log(animals, '-> animals');
  }

  // onEdit(): EDIT AN ANIMAL
  const onEdit = (id) => {
    // console.log('edit', id);
    setSelectedAnimal(animals.find((animal) => animal.id === id)); // Selects object animal on which I clicked AND = find() returns the element which corresponds to the condition I declared (ex: array, object...). setSelectedAnimal will update the selectedStudent state to the returned value by find() on animals array.

    setModal(true); // Opens the modal

    // console.log(selectedStudent, "-> selectedStudent");
  }

  // onDelete(): DELETE AN ANIMAL
  const onDelete = (id) => {
    // console.log('delete', id);
    setAnimals(animals.filter((student) => student.id !== id)); // Returns all animals EXCEPT the ID I clicked on
    // console.log(animals, '-> animals');
  }
  

  return (
    <div className='main-container'>
      {modal && <EditAnimal selectedAnimal={selectedAnimal} setSelectedAnimal={setSelectedAnimal} animals={animals} setAnimals={setAnimals} setModal={setModal}/>} {/* IF modal AND <EditStudent /> exists, THEN displays */}
      <Header />
      <Main animalsProps={animals} onDelete={onDelete} onAdd={onAdd} onEdit={onEdit}/>
      <Footer />
    </div>
  );
}

export default App;
