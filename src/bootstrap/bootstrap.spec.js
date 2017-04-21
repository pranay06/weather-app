import '../app'; 

describe("The bootstrap component", function(){
    beforeEach(window.module("weatherApp"));
    var bootstrapComponent;
    beforeEach(window.inject(function($componentController){
        bootstrapComponent = $componentController("bootstrapApp",{
            $scope: {}
        });
    }));

    it("can be created", function(){
        expect(bootstrapComponent).toBeDefined();
    });
});


