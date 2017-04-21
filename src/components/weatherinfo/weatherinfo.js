class WeatherInfoController {
	constructor(weatherInfoService) {

		this.city = "Mumbai";
		this.weatherInfoService = weatherInfoService;
		this.weatherinfo;
		this.fields = ["Date", "Pressure", "Humidity", "Speed", "Wind Direction(degrees - meteorological)"]
	}
	getWeatherInfo(){
		var that = this;
		this.weatherInfoService.getData(this.city).then(function(response){
			
			that.weatherinfo = response.data;
			that.dataStatus = true;

		});

	}	
}

const WeatherInfo = {
	template: require('./weatherinfo.html'),
	controller: WeatherInfoController,
	controllerAs: "model"
};
export default WeatherInfo;