import angular from 'angular';
import NavBar from './navbar/navbar';
import WeatherInfo from './weatherinfo/weatherinfo';
import About from './about/about';
import WeatherInfoService from './weatherinfo/weatherinfo.service';
const module = angular.module('components.module', [])
	.component('navBar', NavBar)
	.component('weatherInfo',WeatherInfo)
	.component('about', About)
	.service('weatherInfoService', WeatherInfoService)
	.name;

export default module;	