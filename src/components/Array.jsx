import axios from 'axios';
import { useState } from 'react';

const GlobalArray = {
    location_id: 'Hossegor',
    swell_wave_height: '6',
    wave_direction: 'SO',
    wave_period: '',
    windspeed_unit: '',
    winddirection_10m: '',
    temperature_unit: '',
    weathercode: '',
    precipation: '',
    sunrise: '',
    sunset: '',
    
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
          location={data.location_id}
          swell={data.swell_wave_height}
          wavedirection={data.wave_direction}
          waveperiod={data.wave_period}
          windspeed={data.windspeed_unit}
          winddirection={data.winddirection_10m}
          temperature={data.temperature_unit}
          weather={data.weathercode}
          precipitation={data.precipation}
          sunrise={data.sunrise}
          sunset={data. sunset}
          />
         <button className="button" type="button" onClick={getData}>Get Data</button>
        </div>
    );
};

export default Array;