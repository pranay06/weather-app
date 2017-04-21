import '../index';

describe("The weather info service", function(){
	
	var weatherInfoService = {};
	var $httpBackend;
	var expectedApiRequest = "http://api.openweathermap.org/data/2.5/forecast/daily?appid=f0a6a262ad71b70e55df6f24d6be9ccc&mode=json&q=Mumbai&units=imperial";
	var expectedApiResponse = {"city":{"id":1275339,"name":"Mumbai","coord":{"lon":72.8479,"lat":19.0144},"country":"IN","population":0},"cod":"200","message":0.2322107,"cnt":7,"list":[{"dt":1492758000,"temp":{"day":96.8,"min":83.97,"max":96.8,"night":83.97,"eve":91.47,"morn":96.8},"pressure":1022.82,"humidity":90,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":4.15,"deg":226,"clouds":0},{"dt":1492844400,"temp":{"day":84.6,"min":81.55,"max":84.92,"night":82.45,"eve":84.42,"morn":81.55},"pressure":1023.67,"humidity":88,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":5.17,"deg":216,"clouds":0},{"dt":1492930800,"temp":{"day":86.29,"min":81.91,"max":86.52,"night":81.91,"eve":85.53,"morn":82.51},"pressure":1024.15,"humidity":83,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.87,"deg":237,"clouds":0},{"dt":1493017200,"temp":{"day":90.18,"min":71.31,"max":90.18,"night":74.95,"eve":89.22,"morn":71.31},"pressure":1006.3,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.84,"deg":313,"clouds":0},{"dt":1493103600,"temp":{"day":90.52,"min":71.29,"max":90.52,"night":74.55,"eve":89.73,"morn":71.29},"pressure":1006.24,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.65,"deg":303,"clouds":0},{"dt":1493190000,"temp":{"day":89.64,"min":70.61,"max":89.64,"night":73.92,"eve":89.62,"morn":70.61},"pressure":1005.55,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.37,"deg":331,"clouds":0},{"dt":1493276400,"temp":{"day":91.54,"min":70.32,"max":91.78,"night":76.21,"eve":91.78,"morn":70.32},"pressure":1004.92,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.63,"deg":330,"clouds":0}]};

	beforeEach(window.module("components.module"));

	beforeEach(window.inject(function(_weatherInfoService_, _$httpBackend_){
		weatherInfoService = _weatherInfoService_;
		$httpBackend = _$httpBackend_;
	}));

	// it("should handle errors", function() {
	// 	var response;

	// 	$httpBackend.expect('GET', expectedApiRequest)
	// 		.respond(500);

	// 	weatherInfoService.getData('someBogusData')
	// 		.then(function(data){
	// 			response = data;
	// 		})
	// 		.catch(function(data) {
	// 			response = data;
	// 		});
	// 	$httpBackend.flush();
	// 	expect(response).toEqual('Error!');

		
	// });

	it("should return valid weather data", function() {
		var response;

		$httpBackend.when('GET', expectedApiRequest)
			.respond(200, expectedApiResponse);

		weatherInfoService.getData('Mumbai')
			.then(function(data){
				console.log(data);
				response = data.data;
			});
		$httpBackend.flush();
		expect(response.city).toEqual(expectedApiResponse.city);	
	});
});


 