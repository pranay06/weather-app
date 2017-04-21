import '../index';

describe("The About component", function() {
	beforeEach(window.module("components.module"));

	var aboutComponent;
	var $componentController;
	beforeEach(window.inject(function(_$componentController_){
		$componentController = _$componentController_;
		aboutComponent = $componentController("about", null, {});
	}));

	it("can be created", function() {
		expect(aboutComponent).toBeDefined();
	});
});