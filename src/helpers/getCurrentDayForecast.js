const getCurrentDayForecast = (data, title, photo) => ({
    location: title,
    temperature: Math.round(data.the_temp),
    weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather_state_name,
    weatherPhoto: photo
});

export default getCurrentDayForecast;