import '../index';

describe("The weather info component", function() {
	beforeEach(window.module("components.module"));
	var weatherComponent;
	var $componentController;
	beforeEach(window.inject(function(_$componentController_){
		$componentController = _$componentController_;
		weatherComponent = $componentController("weatherInfo", null, {});
	}));

	it("can be created", function() {
		expect(weatherComponent).toBeDefined();
	});

});