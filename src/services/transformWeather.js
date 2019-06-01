import convert from 'convert-units';

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(0);
}


const transformWeather = weather_data => {
    const { humidity, temp, pressure, temp_max, temp_min } = weather_data.main;
    const { longitude, latitude } = weather_data.coord;
    const { speed } = weather_data.wind;
    const temperature_max = getTemp(temp_max);
    const temperature_min = getTemp(temp_min);
    const temperature = getTemp(temp);
    const name = weather_data.name;
    const country = weather_data.sys.country;

    const data = {
        humidity,
        temperature,
        pressure,
        temperature_max,
        temperature_min,
        longitude,
        latitude,
        name,
        country,
        wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;