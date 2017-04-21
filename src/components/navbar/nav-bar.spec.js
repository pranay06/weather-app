import '../index'; 

describe("The Nav bar component", function() {
	beforeEach(window.module("components.module"));
	var navBarComponent;
	var $componentController;
	beforeEach(window.inject(function(_$componentController_){
		$componentController = _$componentController_;
		navBarComponent = $componentController("navBar",null, {});
	}));

	it("can be created", function(){
		expect(navBarComponent).toBeDefined();
		expect(navBarComponent.$onInit).toBeDefined();
	});
	it("has 2 items", function() {
		expect(navBarComponent).toBeDefined();
		expect(navBarComponent.items.length).toEqual(2);
	});

	describe('#onItemClicked', function() {
		it("selects the clicked item", function() {
			expect(navBarComponent).toBeDefined();
			
			var itemToClick = navBarComponent.items[1];
			expect(itemToClick.isActive).toBe(false);

			navBarComponent.onItemClicked(itemToClick);
			expect(itemToClick.isActive).toBe(true);
		});
	});

});