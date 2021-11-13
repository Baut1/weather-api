import React from "react";
import styles from './Instrucciones.module.css';

const Instrucciones = () => (
    <aside className={styles.instrucciones}>
        <div class="card-body bg-dark text-light m-5">
            <div className="card-body">
                <h3 className="card-title mb-4">Acerca de</h3>
                <p class="card-text">Para utilizar el buscador es importante escribir el nombre
                de la ciudad en el formato correcto, a la izquierda se encuentra el listado de
                ciudades disponibles ordenado alfabéticamente.
                </p>
            </div>
        </div>
    </aside>
);

export default Instrucciones;