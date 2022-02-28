import React from 'react';
import AddAnimal from './AddAnimal';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

export default function AnimalsList({ animalsProps, onDelete, onAdd, onEdit }) {

    return (
        <div id='animalsTable'>

            {/* <h2>Liste de tous les animaux</h2> */}
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Prénom</th>
                        <th>Âge</th>
                        <th>Genre</th>
                        <th>Date d'arrivée</th>
                        <th>Date d'adoption</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        animalsProps.map((animal, i) => {
                            return (
                                <tr key={animal.id}>
                                    <td id='index'>{animal.id}</td>
                                    <td>{animal.animal}</td>
                                    <td>{animal.name}</td>
                                    <td>{animal.age} {animal.age < 2 ? 'an' : 'ans'}</td>
                                    <td>{animal.gender}</td>
                                    <td>{animal.arrival}</td>
                                    <td>{animal.departure == null ? 'Tjs au centre' : animal.departure}</td>
                                    <td><FaPen className='icon' style={penStyle} onClick={() => onEdit(animal.id)} /><FaTrashAlt className='icon' style={trashStyle} onClick={() => onDelete(animal.id)} /></td> {/* Pen + Trash icons */}
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <div>
                <AddAnimal onAdd={onAdd} />
            </div>

            <p id='totalAnimals'>Nombre total d'animaux : <strong id='totalNumber'>{animalsProps.length}</strong></p>

        </div>
    );
}


const penStyle = {
    color: 'var(--color-grey-blue)',
    cursor: 'pointer',
}

const trashStyle = {
    color: 'var(--color-red)',
    cursor: 'pointer',
    marginLeft: '20px',
}