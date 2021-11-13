import { useState } from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';

//url
const BASE_URL = 'https://www.metaweather.com/api/location';
//cors anywhere
const CROSS_DOMAIN = 'https://ancient-fjord-73536.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    //woeid == "where on earth id"
    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });

        if (!data || data.length === 0) {
            setError('La ubicación no existe, ¿Está seguro de haberlo escrito bien?');
            setLoading(false);
            return;
        };
        return data[0];
    };

    const getForecastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);
        
        if (!data || data.length === 0) {
            setError('Hubo un error en el servidor, inténtelo nuevamente.');
            setLoading(false);
            return;
        };
        return data;
    };

    const gatherForecastData = data => {

        let photo = "";
        const selectPhoto = (e) => {
            switch (e) {
                case "Nieve":
                    return photo = "https://www.wallpaperup.com/uploads/wallpapers/2014/12/07/543647/59730345dff7c179a63ec5fa8d7fb38c.jpg";
                case "Aguanieve":
                    return photo = "https://www.meteorologiaenred.com/wp-content/uploads/2019/03/cellisca.jpg";
                case "Granizo":
                    return photo = "https://i.ytimg.com/vi/utPa2F34_Kw/maxresdefault.jpg";
                case "Tormenta electrica":
                    return photo = "https://purposedrivenmindz.org/wp-content/uploads/2020/09/johannesburg-thunderstorm-derek-keats-flickr-1024x576-1.jpg";
                case "Lluvia":
                    return photo = "https://www.fbcnews.com.fj/wp-content/uploads/2020/03/heavy-rain.jpg";
                case "Llovizna":
                    return photo = "https://www.nitro.pe/images/2017/julio/foto_lluvia.jpg";
                case "Chubascos":
                    return photo = "https://www.meteosojuela.es/wp-content/uploads/2019/04/chubascos-cortinas-IMG_2566.jpgorig1300con.jpg";
                case "Nublado":
                    return photo = "https://publicdomainpictures.net/pictures/60000/velka/sky-filled-with-heavy-clouds.jpg";
                case "Parcialmente nublado":
                    return photo = "https://jooinn.com/images/cloudy-97.jpg";
                case "Despejado":
                    return photo = "https://i.pinimg.com/originals/e6/3c/8e/e63c8e3cc3597aea168234102efcedd6.jpg";
                default: break;
            };
        };
        selectPhoto(data.consolidated_weather[0].weather_state_name);

        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title, photo);
        
        setForecast({ currentDay });
        setLoading(false);
    };

    const submitRequest = async location => {
        setLoading(true);
        setError(false);

        const response = await getWoeid(location);
        if (!response?.woeid) return;

        const data = await getForecastData(response.woeid);
        if (!data) return;

        //traduccion
        const translate = (e) => {
            switch (e) {
                case "Snow":
                    return data.consolidated_weather[0].weather_state_name = "Nieve";
                case "Sleet":
                    return data.consolidated_weather[0].weather_state_name = "Aguanieve";
                case "Hail":
                    return data.consolidated_weather[0].weather_state_name = "Granizo";
                case "Thunder":
                    return data.consolidated_weather[0].weather_state_name = "Tormenta electrica";
                case "Heavy Rain":
                    return data.consolidated_weather[0].weather_state_name = "Lluvia";
                case "Light Rain":
                    return data.consolidated_weather[0].weather_state_name = "Llovizna";
                case "Showers":
                    return data.consolidated_weather[0].weather_state_name = "Chubascos";
                case "Heavy Cloud":
                    return data.consolidated_weather[0].weather_state_name = "Nublado";
                case "Light Cloud":
                    return data.consolidated_weather[0].weather_state_name = "Parcialmente nublado";
                case "Clear":
                    return data.consolidated_weather[0].weather_state_name = "Despejado";
                default:
                    return;
            }
        };

        translate(data.consolidated_weather[0].weather_state_name);

        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    };

};

export default useForecast;