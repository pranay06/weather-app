class AboutController {
	constructor() {
		this.aboutText = "This page has been created just to have routing feature.";
	}
}
const About = {
	template: require('./about.html'),
	controller: AboutController,
	controllerAs: 'model'
};

export default About;