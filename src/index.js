import { callApi } from './async';
import { domManipulation } from './DOM';

domManipulation.setBackground('src/winter-summer-drawn-spring-autumn-1920x1080-38359.jpg');

domManipulation.preventPageReload();

callApi.renderWeather();
