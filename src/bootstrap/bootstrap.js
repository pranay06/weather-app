class bootstrapAppController {
}

const bootstrapAppComponent = {
  template: require('./bootstrap.html'),
  controller: bootstrapAppController,
  $routeConfig: [
			{
				path:"/weatherInfo", component:"weatherInfo", name: "Weather"
			},
			{
				path:"/about", component:"about", name: "About"
			},
			{ 
				path: "/**", redirectTo: ["Weather"] 
			}
		]
};

export default bootstrapAppComponent;

