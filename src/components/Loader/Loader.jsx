import React from "react";
import styles from './Loader.module.css';

const Loader = () => (
	<div class="container my-5">
		<div class="weather-sun">
			<div class="sun">
				<div class="rays"></div>
				<div class="rays"></div>
				<div class="rays"></div>
				<div class="rays"></div>
			</div>
		</div>
		<div className={styles.loaderText}>
			<h2 class="text-light">Cargando...</h2>
			<h5 class="text-light">Esto puede demorar unos segundos</h5>
		</div>
	</div>
);

export default Loader;