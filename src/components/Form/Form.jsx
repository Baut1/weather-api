import React, {useState} from 'react';
// import styles from './Form.module.css';

const Form = ({ submitSearch }) => {

    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location.length === 0) return;
        submitSearch(location);
    };

    return (
        <div class="col-4 offset-4 my-5">
            <form onSubmit={onSubmit}>
                <label htmlFor="ciudad" class="text-light my-3">Ingrese una ciudad: </label>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="ciudad"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Ej: Buenos Aires"
                        required
                    />
                </div>
                <button type="submit" class="btn btn-success" onClick={onSubmit}>
                    {/* <span class="material-icons-outlined">search</span> */}
                    BUSCAR
                </button>
            </form>
        </div>
    );
};

export default Form;