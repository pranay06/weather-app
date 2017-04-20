import angular from 'angular';
import NavBar from './navbar/navbar';
import WeatherInfo from './weatherinfo/weatherinfo'
const module = angular.module('components.module', [])
	.component('navBar', NavBar)
	.component('weatherInfo',WeatherInfo)
	.name;

export default module;	