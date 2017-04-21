

class WeatherInfoService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getData(cityName) {
        var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

        var request = {
          method: 'GET',
          url: URL,
          params: {
            q: cityName,
            mode: 'json',
            units: 'imperial',
            appid: 'f0a6a262ad71b70e55df6f24d6be9ccc'
          }
        };

        return this.$http(request); 
    }
}

export default WeatherInfoService;