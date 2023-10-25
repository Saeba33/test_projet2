import axios from 'axios';
import { useState } from 'react';

const GlobalArray = {
    location_id: {'Hossegor'},
    swell_wave_height: {''},
    wave_direction: {''},
    wave_period: {''},
    windspeed_unit: {''},
    winddirection_10m: {''},
    temperature_unit: {''},
    weathercode: {''},
    precipation: {''},
    sunrise: {''},
    sunset: {''},
    precipation: {''},
};


const Array = () => {
    const [data, setData] = useState();
    const getData = () => {
        axios.get('https://open-meteo.com/en/docs/marine-weather-api#latitude=44.9791&longitude=-1.0796&hourly=wave_height,wave_direction,wave_period,wind_wave_height,wind_wave_direction,wind_wave_period,wind_wave_peak_period,swell_wave_height,swell_wave_direction,swell_wave_period,swell_wave_peak_period&timezone=Europe%2FLondon')
    .then ((response) => {
        setData(response.data.results[0]);
    });
};
    return (
        <div id="ArrayContainer">
          <GlobalArray
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}
          location_id={data.location}          
          />
        </div>
    );
};

export default Array;