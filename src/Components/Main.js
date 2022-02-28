import AnimalsList from './AnimalsList';

export default function Main({ animalsProps, onDelete, onAdd, onEdit }) {

    return (
        <div className='container'>
            <main>
                <h1>Gestion des animaux</h1>

                <div>
                    <AnimalsList animalsProps={animalsProps} onDelete={onDelete} onAdd={onAdd} onEdit={onEdit} />
                </div>
            </main>
        </div>
    );
}
