export interface WeatherResponse {
    main: Main;
    wind: Wind;
    weather: Weather[];
  }
  
  export interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  }
  
  export interface Wind {
    speed: number;
  }
  
  export interface Weather {
    description: string;
    icon: string;
  }
  