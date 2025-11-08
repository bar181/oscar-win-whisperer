import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye } from "lucide-react";
import tiffImage from "@/assets/tiff-toronto.jpg";

interface CurrentWeather {
  temperature: number;
  windSpeed: number;
  humidity: number;
  weatherCode: number;
  visibility: number;
}

interface ForecastDay {
  date: string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
  precipitation: number;
}

const getWeatherIcon = (code: number) => {
  if (code === 0) return <Sun className="w-12 h-12 text-gold" />;
  if (code <= 3) return <Cloud className="w-12 h-12 text-muted-foreground" />;
  if (code <= 67) return <CloudRain className="w-12 h-12 text-blue-400" />;
  return <CloudRain className="w-12 h-12 text-blue-600" />;
};

const getWeatherDescription = (code: number) => {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 67) return "Rainy";
  return "Heavy rain";
};

const Weather = () => {
  const [current, setCurrent] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Toronto coordinates
        const lat = 43.65107;
        const lon = -79.347015;
        
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/Toronto&forecast_days=5`
        );
        
        const data = await response.json();
        
        setCurrent({
          temperature: Math.round(data.current.temperature_2m),
          windSpeed: Math.round(data.current.wind_speed_10m),
          humidity: data.current.relative_humidity_2m,
          weatherCode: data.current.weather_code,
          visibility: Math.round(data.current.visibility / 1000),
        });

        const forecastData: ForecastDay[] = data.daily.time.map((date: string, index: number) => ({
          date: new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          maxTemp: Math.round(data.daily.temperature_2m_max[index]),
          minTemp: Math.round(data.daily.temperature_2m_min[index]),
          weatherCode: data.daily.weather_code[index],
          precipitation: Math.round(data.daily.precipitation_sum[index]),
        }));

        setForecast(forecastData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section with TIFF Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={tiffImage} 
          alt="Toronto International Film Festival" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-gold mb-2">Toronto Weather</h1>
            <p className="text-xl text-muted-foreground">Home of the Toronto International Film Festival</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="current">Current Weather</TabsTrigger>
            <TabsTrigger value="forecast">5-Day Forecast</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            {loading ? (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">Loading weather data...</p>
                </CardContent>
              </Card>
            ) : current ? (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Main Weather Card */}
                <Card className="bg-gradient-gold border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-3xl">Current Conditions</CardTitle>
                    <CardDescription className="text-lg">Toronto, Ontario, Canada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        {getWeatherIcon(current.weatherCode)}
                        <div>
                          <div className="text-6xl font-bold">{current.temperature}°C</div>
                          <div className="text-xl text-muted-foreground mt-2">
                            {getWeatherDescription(current.weatherCode)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Weather Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="hover:shadow-gold transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Wind className="w-5 h-5 text-gold" />
                        <CardTitle className="text-lg">Wind Speed</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{current.windSpeed}</p>
                      <p className="text-muted-foreground">km/h</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-gold transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-gold" />
                        <CardTitle className="text-lg">Humidity</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{current.humidity}</p>
                      <p className="text-muted-foreground">%</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-gold transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-gold" />
                        <CardTitle className="text-lg">Visibility</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{current.visibility}</p>
                      <p className="text-muted-foreground">km</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12 text-center">
                  <p className="text-destructive">Failed to load weather data</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="forecast">
            {loading ? (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">Loading forecast...</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {forecast.map((day, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-gold transition-all hover:scale-105"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-center">{day.date}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-center">
                        {getWeatherIcon(day.weatherCode)}
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          {getWeatherDescription(day.weatherCode)}
                        </p>
                        <div className="flex justify-center gap-3 text-lg font-semibold">
                          <span className="text-gold">{day.maxTemp}°</span>
                          <span className="text-muted-foreground">{day.minTemp}°</span>
                        </div>
                        {day.precipitation > 0 && (
                          <p className="text-sm text-blue-400 mt-2">
                            💧 {day.precipitation}mm
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Weather;
