/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManipulation": () => (/* binding */ domManipulation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domManipulation = (() => {
  const preventPageReload = () => {
    const FORM = document.querySelector('#weather-form');
    FORM.addEventListener('click', (e) => {
      e.preventDefault();
    });
  };

  const getWeatherUrl = () => {
    let API_URL_CALL;
    let UNIT;
    const CITY_NAME = document.querySelector('#city-name').value;
    const CELSIUS = document.querySelector('#celsius').checked;

    if (CELSIUS) {
      API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=51d8626e1f1408b78641a58cf1dbb707&units=metric`;
      UNIT = 'Celsius';
    } else {
      API_URL_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=51d8626e1f1408b78641a58cf1dbb707&units=imperial`;
      UNIT = 'Fahrenheit';
    }

    return [API_URL_CALL, UNIT];
  };

  const setBackground = (imageUrl) => {
    const BACKGROUND = document.querySelector('#bg-image');
    BACKGROUND.style.backgroundImage = `url('${imageUrl}')`;
    BACKGROUND.style.backgroundSize = 'cover';
    BACKGROUND.style.backgroundPosition = 'center';
  };

  const setWeatherInfo = (cityName, mainTemp, description, minTemp, maxTemp) => {
    const CARD = document.querySelector('#weather-info');
    const TEMP_CARD = document.querySelector('#temp-card');
    TEMP_CARD.classList.remove('d-none');
    const CITY = document.querySelector('#city');

    CITY.innerHTML = `${cityName}`;

    CARD.innerHTML = `
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Temperature:</span> ${mainTemp}º (${domManipulation.getWeatherUrl()[1]})
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Weather:</span> ${description}
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Min Temp:</span> ${minTemp}º (${domManipulation.getWeatherUrl()[1]})
            </li>
            <li class="list-group-item bg-primary text-white border-0 text-center">
                <span class="fw-bold">Max Temp:</span> ${maxTemp}º (${domManipulation.getWeatherUrl()[1]})
            </li>
        `;
  };

  return {
    preventPageReload, getWeatherUrl, setBackground, setWeatherInfo,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ domManipulation });

/***/ }),

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callApi": () => (/* binding */ callApi),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const callApi = (() => {
  const getResponse = async () => {
    try {
      const response = await fetch(_DOM__WEBPACK_IMPORTED_MODULE_0__.domManipulation.getWeatherUrl()[0]);
      const weather = await response.json();

      const imageURL = `https://api.unsplash.com/photos/random?client_id=NCBaOQJIb0LqtbRq7KmDTq7TLlVSqqzHoOnBVm2OVEo&query=${weather.weather[0].description}`;
      const imageResponse = await fetch(imageURL);
      const image = await imageResponse.json();

      _DOM__WEBPACK_IMPORTED_MODULE_0__.domManipulation.setBackground(image.urls.full);

      _DOM__WEBPACK_IMPORTED_MODULE_0__.domManipulation.setWeatherInfo(
        weather.name,
        weather.main.temp,
        weather.weather[0].description,
        weather.main.temp_min,
        weather.main.temp_max,
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  const renderWeather = () => {
    const WEATHER_BTN = document.querySelector('#weather-btn');
    WEATHER_BTN.addEventListener('click', () => {
      getResponse();
    });
  };

  return {
    renderWeather,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ callApi });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./src/async.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



_DOM__WEBPACK_IMPORTED_MODULE_1__.domManipulation.setBackground('src/winter-summer-drawn-spring-autumn-1920x1080-38359.jpg');

_DOM__WEBPACK_IMPORTED_MODULE_1__.domManipulation.preventPageReload();

_async__WEBPACK_IMPORTED_MODULE_0__.callApi.renderWeather();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsVUFBVTtBQUNwRjtBQUNBLEtBQUs7QUFDTCwwRUFBMEUsVUFBVTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixTQUFTOztBQUVqQztBQUNBO0FBQ0EsNERBQTRELFNBQVMsS0FBSyxtQ0FBbUM7QUFDN0c7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0EseURBQXlELFFBQVEsS0FBSyxtQ0FBbUM7QUFDekc7QUFDQTtBQUNBLHlEQUF5RCxRQUFRLEtBQUssbUNBQW1DO0FBQ3pHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLENBQUMsa0JBQWtCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RE07O0FBRWpDO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQywrREFBNkI7QUFDaEU7O0FBRUEsNkhBQTZILCtCQUErQjtBQUM1SjtBQUNBOztBQUVBLE1BQU0sK0RBQTZCOztBQUVuQyxNQUFNLGdFQUE4QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyxVQUFVLEU7Ozs7OztVQ3RDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ007O0FBRXhDLCtEQUE2Qjs7QUFFN0IsbUVBQWlDOztBQUVqQyx5REFBcUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgcHJldmVudFBhZ2VSZWxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgRk9STSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWZvcm0nKTtcbiAgICBGT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRXZWF0aGVyVXJsID0gKCkgPT4ge1xuICAgIGxldCBBUElfVVJMX0NBTEw7XG4gICAgbGV0IFVOSVQ7XG4gICAgY29uc3QgQ0lUWV9OQU1FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IENFTFNJVVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2Vsc2l1cycpLmNoZWNrZWQ7XG5cbiAgICBpZiAoQ0VMU0lVUykge1xuICAgICAgQVBJX1VSTF9DQUxMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtDSVRZX05BTUV9JmFwcGlkPTUxZDg2MjZlMWYxNDA4Yjc4NjQxYTU4Y2YxZGJiNzA3JnVuaXRzPW1ldHJpY2A7XG4gICAgICBVTklUID0gJ0NlbHNpdXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICBBUElfVVJMX0NBTEwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke0NJVFlfTkFNRX0mYXBwaWQ9NTFkODYyNmUxZjE0MDhiNzg2NDFhNThjZjFkYmI3MDcmdW5pdHM9aW1wZXJpYWxgO1xuICAgICAgVU5JVCA9ICdGYWhyZW5oZWl0JztcbiAgICB9XG5cbiAgICByZXR1cm4gW0FQSV9VUkxfQ0FMTCwgVU5JVF07XG4gIH07XG5cbiAgY29uc3Qgc2V0QmFja2dyb3VuZCA9IChpbWFnZVVybCkgPT4ge1xuICAgIGNvbnN0IEJBQ0tHUk9VTkQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmctaW1hZ2UnKTtcbiAgICBCQUNLR1JPVU5ELnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2VVcmx9JylgO1xuICAgIEJBQ0tHUk9VTkQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgIEJBQ0tHUk9VTkQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gIH07XG5cbiAgY29uc3Qgc2V0V2VhdGhlckluZm8gPSAoY2l0eU5hbWUsIG1haW5UZW1wLCBkZXNjcmlwdGlvbiwgbWluVGVtcCwgbWF4VGVtcCkgPT4ge1xuICAgIGNvbnN0IENBUkQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pbmZvJyk7XG4gICAgY29uc3QgVEVNUF9DQVJEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtY2FyZCcpO1xuICAgIFRFTVBfQ0FSRC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBjb25zdCBDSVRZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcblxuICAgIENJVFkuaW5uZXJIVE1MID0gYCR7Y2l0eU5hbWV9YDtcblxuICAgIENBUkQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBib3JkZXItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlRlbXBlcmF0dXJlOjwvc3Bhbj4gJHttYWluVGVtcH3CuiAoJHtkb21NYW5pcHVsYXRpb24uZ2V0V2VhdGhlclVybCgpWzFdfSlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGJvcmRlci0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+V2VhdGhlcjo8L3NwYW4+ICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBib3JkZXItMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPk1pbiBUZW1wOjwvc3Bhbj4gJHttaW5UZW1wfcK6ICgke2RvbU1hbmlwdWxhdGlvbi5nZXRXZWF0aGVyVXJsKClbMV19KVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy1wcmltYXJ5IHRleHQtd2hpdGUgYm9yZGVyLTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5NYXggVGVtcDo8L3NwYW4+ICR7bWF4VGVtcH3CuiAoJHtkb21NYW5pcHVsYXRpb24uZ2V0V2VhdGhlclVybCgpWzFdfSlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIGA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcmV2ZW50UGFnZVJlbG9hZCwgZ2V0V2VhdGhlclVybCwgc2V0QmFja2dyb3VuZCwgc2V0V2VhdGhlckluZm8sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7IGRvbU1hbmlwdWxhdGlvbiB9OyIsImltcG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9IGZyb20gJy4vRE9NJztcblxuZXhwb3J0IGNvbnN0IGNhbGxBcGkgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRSZXNwb25zZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkb21NYW5pcHVsYXRpb24uZ2V0V2VhdGhlclVybCgpWzBdKTtcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGNvbnN0IGltYWdlVVJMID0gYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP2NsaWVudF9pZD1OQ0JhT1FKSWIwTHF0YlJxN0ttRFRxN1RMbFZTcXF6SG9PbkJWbTJPVkVvJnF1ZXJ5PSR7d2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG4gICAgICBjb25zdCBpbWFnZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVUkwpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBpbWFnZVJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgZG9tTWFuaXB1bGF0aW9uLnNldEJhY2tncm91bmQoaW1hZ2UudXJscy5mdWxsKTtcblxuICAgICAgZG9tTWFuaXB1bGF0aW9uLnNldFdlYXRoZXJJbmZvKFxuICAgICAgICB3ZWF0aGVyLm5hbWUsXG4gICAgICAgIHdlYXRoZXIubWFpbi50ZW1wLFxuICAgICAgICB3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIHdlYXRoZXIubWFpbi50ZW1wX21pbixcbiAgICAgICAgd2VhdGhlci5tYWluLnRlbXBfbWF4LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJXZWF0aGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFdFQVRIRVJfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItYnRuJyk7XG4gICAgV0VBVEhFUl9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRSZXNwb25zZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyV2VhdGhlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgY2FsbEFwaSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2FsbEFwaSB9IGZyb20gJy4vYXN5bmMnO1xuaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSAnLi9ET00nO1xuXG5kb21NYW5pcHVsYXRpb24uc2V0QmFja2dyb3VuZCgnc3JjL3dpbnRlci1zdW1tZXItZHJhd24tc3ByaW5nLWF1dHVtbi0xOTIweDEwODAtMzgzNTkuanBnJyk7XG5cbmRvbU1hbmlwdWxhdGlvbi5wcmV2ZW50UGFnZVJlbG9hZCgpO1xuXG5jYWxsQXBpLnJlbmRlcldlYXRoZXIoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=