/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\ninput[type=\"text\"] {\n  min-width: 0;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  color: inherit;\n  cursor: pointer;\n}\n\nhtml {\n  background-color: #18191a;\n  color: #e6e6e6;\n}\n\nhtml,\nbody {\n  overflow-x: hidden;\n}\n\nmain {\n  padding: 0 16px;\n}\n\nmain > section {\n  margin: 16px 0;\n}\n\n.skeleton {\n  opacity: 0.7;\n  animation: skeleton-loading 1s linear infinite alternate;\n}\n\n.weather-icon.skeleton {\n  border-radius: 100%;\n}\n\nspan.skeleton {\n  display: inline-block;\n  width: 60px;\n  height: 1rem;\n}\n\n.info span.skeleton {\n  width: 80px;\n  height: 1.2rem;\n}\n\n@keyframes skeleton-loading {\n  0% {\n    background-color: hsl(0, 0%, 30%);\n  }\n\n  100% {\n    background-color: hsl(0, 0%, 45%);\n  }\n}\n\n/* HEADER */\n\n.main-header {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  margin: 16px 0;\n}\n\n.main-header .logo-icon {\n  width: 60px;\n  height: 60px;\n}\n\n/* SEARCH BAR */\n\n#search-bar {\n  margin: 16px 0;\n  background-color: #333;\n  display: flex;\n  align-items: center;\n  padding: 14px 16px;\n  border-radius: 2px;\n  font-size: 1.4rem;\n  gap: 8px;\n}\n\n#search-bar:focus-within {\n  outline: 1px solid white;\n}\n\n#search-bar input:disabled,\n#search-bar input:disabled + .search,\n#search-bar:has(:disabled) {\n  cursor: wait;\n}\n\n#search-bar .search {\n  width: 0.9em;\n  height: 0.9em;\n  position: relative;\n  cursor: pointer;\n}\n\n#search-bar input {\n  flex: 1;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  outline: none;\n}\n\n#search-bar input:disabled {\n  color: #a6a6a6;\n}\n\n/* WEATHER INFO */\n\n#current-weather-display {\n  margin-top: 24px;\n  display: grid;\n}\n\n@media screen and (min-width: 380px) {\n  #current-weather-display {\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  }\n}\n\n#current-weather-display .main {\n  display: flex;\n  gap: 16px;\n  font-size: 1.2rem;\n}\n\n#current-weather-display .content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n#current-weather-display .weather-icon {\n  width: 100px;\n  height: 100px;\n}\n\n#current-weather-display .temperature {\n  display: flex;\n  font-size: 4rem;\n  gap: 4px;\n}\n\n#current-weather-display .degrees {\n  font-size: 0.6em;\n  color: #888;\n}\n\n#current-weather-display .degrees :disabled {\n  color: #606060;\n  cursor: wait;\n}\n\n#current-weather-display .degrees .selected {\n  color: #e6e6e6;\n}\n\n#current-weather-display .pipe-border {\n  border-right: 1px solid;\n  margin-right: 6px;\n}\n\n#current-weather-display .extra > ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 16px;\n  margin: 16px 0;\n}\n\n#current-weather-display .extra li {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: repeat(2, auto);\n  column-gap: 8px;\n}\n\n#current-weather-display .icon {\n  width: 40px;\n  height: 40px;\n  grid-row: 1 / -1;\n}\n\n/* MAIN */\n\nh2 {\n  margin-bottom: 8px;\n}\n\n#hourly-weather,\n#daily-weather {\n  overflow: hidden;\n}\n\n.cards {\n  display: flex;\n  gap: 16px;\n}\n\n.cards > li {\n  width: 140px;\n  height: 240px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #333;\n  padding: 16px 24px;\n  border-radius: 4px;\n}\n\n.cards .time,\n.cards .day {\n  margin-top: 4px;\n  margin-bottom: 12px;\n}\n\n.cards .weather-icon {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 8px;\n}\n\n.cards .info {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.cards .info > li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n}\n\n.cards .info .icon {\n  width: 2rem;\n  height: 2rem;\n}\n\n.cards .precipitation + .unit {\n  font-size: 0.8em;\n  margin-left: 2px;\n}\n\n.cards .low-temperature {\n  margin-left: 4px;\n  font-size: 0.7em;\n}\n\n/* FOOTER */\n\n.main-footer {\n  font-size: 1.1rem;\n  margin: 16px;\n  margin-top: 32px;\n  margin-bottom: 48px;\n}\n\n.main-footer section:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.main-footer .logo {\n  font-size: 1.1em;\n}\n\n.main-footer h3 {\n  margin-top: 8px;\n}\n\n.main-footer .logo {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.main-footer .logo-icon {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.credits {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n}\n\n.credits a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.credits .icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-left: 2px;\n  cursor: pointer;\n}\n\n/* DESKTOP */\n\n@media screen and (min-width: 768px) {\n  #current-weather-display .extra > ul {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\ninput[type=\"text\"] {\n  min-width: 0;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  color: inherit;\n  cursor: pointer;\n}\n\nhtml {\n  background-color: #18191a;\n  color: #e6e6e6;\n}\n\nhtml,\nbody {\n  overflow-x: hidden;\n}\n\nmain {\n  padding: 0 16px;\n}\n\nmain > section {\n  margin: 16px 0;\n}\n\n.skeleton {\n  opacity: 0.7;\n  animation: skeleton-loading 1s linear infinite alternate;\n}\n\n.weather-icon.skeleton {\n  border-radius: 100%;\n}\n\nspan.skeleton {\n  display: inline-block;\n  width: 60px;\n  height: 1rem;\n}\n\n.info span.skeleton {\n  width: 80px;\n  height: 1.2rem;\n}\n\n@keyframes skeleton-loading {\n  0% {\n    background-color: hsl(0, 0%, 30%);\n  }\n\n  100% {\n    background-color: hsl(0, 0%, 45%);\n  }\n}\n\n/* HEADER */\n\n.main-header {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  margin: 16px 0;\n}\n\n.main-header .logo-icon {\n  width: 60px;\n  height: 60px;\n}\n\n/* SEARCH BAR */\n\n#search-bar {\n  margin: 16px 0;\n  background-color: #333;\n  display: flex;\n  align-items: center;\n  padding: 14px 16px;\n  border-radius: 2px;\n  font-size: 1.4rem;\n  gap: 8px;\n}\n\n#search-bar:focus-within {\n  outline: 1px solid white;\n}\n\n#search-bar input:disabled,\n#search-bar input:disabled + .search,\n#search-bar:has(:disabled) {\n  cursor: wait;\n}\n\n#search-bar .search {\n  width: 0.9em;\n  height: 0.9em;\n  position: relative;\n  cursor: pointer;\n}\n\n#search-bar input {\n  flex: 1;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  outline: none;\n}\n\n#search-bar input:disabled {\n  color: #a6a6a6;\n}\n\n/* WEATHER INFO */\n\n#current-weather-display {\n  margin-top: 24px;\n  display: grid;\n}\n\n@media screen and (min-width: 380px) {\n  #current-weather-display {\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  }\n}\n\n#current-weather-display .main {\n  display: flex;\n  gap: 16px;\n  font-size: 1.2rem;\n}\n\n#current-weather-display .content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n#current-weather-display .weather-icon {\n  width: 100px;\n  height: 100px;\n}\n\n#current-weather-display .temperature {\n  display: flex;\n  font-size: 4rem;\n  gap: 4px;\n}\n\n#current-weather-display .degrees {\n  font-size: 0.6em;\n  color: #888;\n}\n\n#current-weather-display .degrees :disabled {\n  color: #606060;\n  cursor: wait;\n}\n\n#current-weather-display .degrees .selected {\n  color: #e6e6e6;\n}\n\n#current-weather-display .pipe-border {\n  border-right: 1px solid;\n  margin-right: 6px;\n}\n\n#current-weather-display .extra > ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 16px;\n  margin: 16px 0;\n}\n\n#current-weather-display .extra li {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: repeat(2, auto);\n  column-gap: 8px;\n}\n\n#current-weather-display .icon {\n  width: 40px;\n  height: 40px;\n  grid-row: 1 / -1;\n}\n\n/* MAIN */\n\nh2 {\n  margin-bottom: 8px;\n}\n\n#hourly-weather,\n#daily-weather {\n  overflow: hidden;\n}\n\n.cards {\n  display: flex;\n  gap: 16px;\n}\n\n.cards > li {\n  width: 140px;\n  height: 240px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #333;\n  padding: 16px 24px;\n  border-radius: 4px;\n}\n\n.cards .time,\n.cards .day {\n  margin-top: 4px;\n  margin-bottom: 12px;\n}\n\n.cards .weather-icon {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 8px;\n}\n\n.cards .info {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.cards .info > li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n}\n\n.cards .info .icon {\n  width: 2rem;\n  height: 2rem;\n}\n\n.cards .precipitation + .unit {\n  font-size: 0.8em;\n  margin-left: 2px;\n}\n\n.cards .low-temperature {\n  margin-left: 4px;\n  font-size: 0.7em;\n}\n\n/* FOOTER */\n\n.main-footer {\n  font-size: 1.1rem;\n  margin: 16px;\n  margin-top: 32px;\n  margin-bottom: 48px;\n}\n\n.main-footer section:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.main-footer .logo {\n  font-size: 1.1em;\n}\n\n.main-footer h3 {\n  margin-top: 8px;\n}\n\n.main-footer .logo {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.main-footer .logo-icon {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.credits {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n}\n\n.credits a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.credits .icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-left: 2px;\n  cursor: pointer;\n}\n\n/* DESKTOP */\n\n@media screen and (min-width: 768px) {\n  #current-weather-display .extra > ul {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _zekumoru_dev_svg_loader_SvgLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zekumoru-dev/svg-loader/SvgLoader */ "./node_modules/@zekumoru-dev/svg-loader/SvgLoader.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var scrollbooster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scrollbooster */ "./node_modules/scrollbooster/src/index.js");
/* harmony import */ var _scripts_Weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Weather */ "./src/scripts/Weather.js");
/* harmony import */ var _scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/CurrentWeatherDisplay */ "./src/scripts/CurrentWeatherDisplay.js");
/* harmony import */ var _scripts_CardsDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/CardsDisplay */ "./src/scripts/CardsDisplay.js");
/* harmony import */ var _scripts_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/Card */ "./src/scripts/Card.js");










const city = document.querySelector('#city');
const hourlyDisplay = new _scripts_CardsDisplay__WEBPACK_IMPORTED_MODULE_6__["default"](document.querySelector('#hourly-weather'), document.querySelector('#hourly-weather > .cards'));
const dailyDisplay = new _scripts_CardsDisplay__WEBPACK_IMPORTED_MODULE_6__["default"](document.querySelector('#daily-weather'), document.querySelector('#daily-weather > .cards'));
let weather;
let loading = false;

hourlyDisplay.showLoading();
dailyDisplay.showLoading();

_scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__["default"].onChangeDegree = submit;

window.addEventListener('DOMSvgLoaded', async () => {
  await _scripts_Card__WEBPACK_IMPORTED_MODULE_7__["default"].loadIcons();

  const search = document.querySelector('.search');
  search.addEventListener('click', () => submit());

  search.click();
});

city.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') e.preventDefault();
});

city.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    submit();
    return;
  }

  if (!city.value) {
    city.setCustomValidity('Please enter a city!');
    return;
  }

  city.setCustomValidity('');
});

async function submit() {
  if (loading) return;
  if (!city.value) {
    city.setCustomValidity('Please enter a city!');
    city.reportValidity();
    return;
  }

  city.disabled = true;
  loading = true;
  city.dispatchEvent(new Event('fetchWeather', { bubbles: true }));
  _scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__["default"].showLoading();
  hourlyDisplay.showLoading();
  dailyDisplay.showLoading();

  const previousWeather = weather;
  try {
    weather = await _scripts_Weather__WEBPACK_IMPORTED_MODULE_4__["default"].get(city.value, {
      temperature_unit: _scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__["default"].temperatureUnit,
    });
  }
  catch (error) {
    city.disabled = false;
    city.setCustomValidity(error.message);
    city.reportValidity();
    weather = previousWeather;
  }

  await Promise.all([
    setCurrentWeatherDisplay(weather),
    setHourlyWeatherDisplay(weather),
    setDailyWeatherDisplay(weather),
  ]);

  city.disabled = false;
  loading = false;
  city.dispatchEvent(new Event('finishFetchWeather', { bubbles: true }));
}

async function setCurrentWeatherDisplay(weather) {
  const currentWeather = weather.current_weather;
  const currentIndex = weather.hourly.time.indexOf(currentWeather.time);
  const currentTime = new Date(currentWeather.time);

  _scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__["default"].set({
    icon: await _scripts_Weather__WEBPACK_IMPORTED_MODULE_4__["default"].getIcon(currentWeather.weathercode, isDaytime(currentTime)),
    currentHour: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(currentTime, 'p'),
    temperature: currentWeather.temperature,
    feelsLike: weather.hourly.apparent_temperature[currentIndex],
    precipitation: weather.hourly.precipitation[currentIndex],
    humidity: weather.hourly.relativehumidity_2m[currentIndex],
    wind: currentWeather.windspeed,
  });

  _scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__["default"].icon.setAttribute('class', 'weather-icon');
}

async function setHourlyWeatherDisplay(weather) {
  const { time, weathercode, precipitation } = weather.hourly;
  const temperature = weather.hourly.temperature_2m;

  const cards = [];
  const startIndex = weather.hourly.time.indexOf(weather.current_weather.time);
  for (let i = 0; i < 24; i++) {
    const index = startIndex + i;

    cards.push((async () => {
      const t = new Date(time[index]);
      const icon = await _scripts_Weather__WEBPACK_IMPORTED_MODULE_4__["default"].getIcon(weathercode[index], isDaytime(t));
      icon.setAttribute('class', 'weather-icon');

      const card = new _scripts_Card__WEBPACK_IMPORTED_MODULE_7__["default"](icon, (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(t, 'p'), null);
      card.addTemperature(temperature[index]);
      card.addPrecipitation(precipitation[index]);

      return card;
    })());
  }

  hourlyDisplay.render(await Promise.all(cards));
  new scrollbooster__WEBPACK_IMPORTED_MODULE_3__["default"]({
    viewport: hourlyDisplay.viewport,
    content: hourlyDisplay.content,
    scrollMode: 'transform',
    direction: 'horizontal',
    emulateScroll: true,
  });
}

async function setDailyWeatherDisplay(weather) {
  const { time, weathercode } = weather.daily;
  const highTemperature = weather.daily.temperature_2m_max;
  const lowTemperature = weather.daily.temperature_2m_min;
  const precipitation = weather.daily.precipitation_sum;

  const cards = [];
  time.forEach((time, index) => {
    time = new Date(time);
    cards.push((async () => {
      const icon = await _scripts_Weather__WEBPACK_IMPORTED_MODULE_4__["default"].getIcon(weathercode[index]);
      icon.setAttribute('class', 'weather-icon');

      const card = new _scripts_Card__WEBPACK_IMPORTED_MODULE_7__["default"](icon, (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(time, 'eee'), null);
      card.addHighLowTemperature(highTemperature[index], lowTemperature[index]);
      card.addPrecipitation(precipitation[index]);

      return card;
    })());
  });

  dailyDisplay.render(await Promise.all(cards));
  new scrollbooster__WEBPACK_IMPORTED_MODULE_3__["default"]({
    viewport: dailyDisplay.viewport,
    content: dailyDisplay.content,
    scrollMode: 'transform',
    direction: 'horizontal',
    emulateScroll: true,
  });
}

function isDaytime(time) {
  return time.getHours() >= 6 && time.getHours() < 18;
}


/***/ }),

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _zekumoru_dev_svg_loader_SvgLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zekumoru-dev/svg-loader/SvgLoader */ "./node_modules/@zekumoru-dev/svg-loader/SvgLoader.js");


class Card {
  static #TEMPERATURE_ICON;
  static #PRECIPITATION_ICON;

  icon;
  time;
  infoList;

  constructor(icon, time) {
    this.icon = icon;
    this.time = time;
    this.infoList = document.createElement('ul');
    this.infoList.className = 'info';
  }

  static async loadIcons() {
    if (Card.#TEMPERATURE_ICON) return;
    Card.#TEMPERATURE_ICON = await _zekumoru_dev_svg_loader_SvgLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load('images/temperature.svg', { colorable: true, class: 'icon' });
    Card.#PRECIPITATION_ICON = await _zekumoru_dev_svg_loader_SvgLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load('images/precipitation.svg', { colorable: true, class: 'icon' });
  }

  addTemperature(temperature) {
    const li = this.#createInfo(Card.#TEMPERATURE_ICON, '<span class="temperature"><span class="number"></span><span class="unit">°</span></span>');
    li.querySelector('.number').textContent = temperature;
    this.infoList.insertAdjacentElement('afterbegin', li);
  }

  addHighLowTemperature(high, low) {
    const li = this.#createInfo(Card.#TEMPERATURE_ICON, '<span class="high-temperature"><span class="number">13</span><span class="unit">°</span></span> <span class="low-temperature"><span class="number">8</span><span class="unit">°</span></span>');
    li.querySelector('.high-temperature .number').textContent = Math.floor(high);
    li.querySelector('.low-temperature .number').textContent = Math.floor(low);
    this.infoList.insertAdjacentElement('afterbegin', li);
  }

  addPrecipitation(precipitation) {
    const li = this.#createInfo(Card.#PRECIPITATION_ICON, '<span class="precipitation">0.2</span> <span class="unit">mm</span>');
    li.querySelector('.precipitation').textContent = precipitation;
    this.infoList.insertAdjacentElement('beforeend', li);
  }

  #createInfo(icon, content) {
    const li = document.createElement('li');
    li.appendChild(icon.cloneNode(true));
    li.insertAdjacentHTML('beforeend', content);
    return li;
  }
}


/***/ }),

/***/ "./src/scripts/CardsDisplay.js":
/*!*************************************!*\
  !*** ./src/scripts/CardsDisplay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  #viewport;
  #content;

  constructor(viewport, content) {
    this.#viewport = viewport;
    this.#content = content;
  }

  get viewport() {
    return this.#viewport;
  }

  get content() {
    return this.#content;
  }

  append(card) {
    const li = document.createElement('li');

    li.appendChild(card.icon);
    li.insertAdjacentHTML('beforeend', '<p class="time"></p>');
    li.querySelector('.time').textContent = card.time;
    li.appendChild(card.infoList);

    this.#content.appendChild(li);
  }

  render(cards) {
    this.clear();
    cards.forEach(this.append.bind(this));
  }

  clear() {
    this.#content.innerHTML = '';
  }

  showLoading() {
    const li = document.createElement('li');
    li.innerHTML = `
      <svg class="weather-icon skeleton" />
      <p class="day"><span class="skeleton"></span></p>
      <ul class="info">
        <li><span class="skeleton"></span></li>
        <li><span class="skeleton"></span></li>
      </ul>`;

    this.#content.innerHTML = '';

    const content = this.#content.cloneNode();
    content.style = '';
    this.#content.insertAdjacentElement('beforebegin', content);
    this.#content.remove();
    this.#content = content;

    for (let i = 0; i < 10; i++) {
      this.#content.appendChild(li.cloneNode(true));
    }
  }
});


/***/ }),

/***/ "./src/scripts/CurrentWeatherDisplay.js":
/*!**********************************************!*\
  !*** ./src/scripts/CurrentWeatherDisplay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

const info = document.querySelector('#current-weather-display');
const elements = {
  currentHour: info.querySelector('.current-hour'),
  temperature: info.querySelector('.temperature > .number'),
  feelsLike: info.querySelector('.feels-like > .number'),
  precipitation: info.querySelector('.precipitation'),
  humidity: info.querySelector('.humidity'),
  wind: info.querySelector('.wind'),
};

const degrees = info.querySelector('.degrees');
const celsiusButton = degrees.querySelector('button.celsius');
const fahrenheitButton = degrees.querySelector('button.fahrenheit');

let temperatureUnit = 'celsius';
Object.defineProperty(display, 'temperatureUnit', {
  get() {
    return temperatureUnit;
  },
});

celsiusButton.addEventListener('click', () => changeDegree(celsiusButton, 'celsius'));
fahrenheitButton.addEventListener('click', () => changeDegree(fahrenheitButton, 'fahrenheit'));

function changeDegree(button, degree) {
  const previousSelected = degrees.querySelector('.selected');
  if (previousSelected === button) return;

  previousSelected.classList.remove('selected');
  button.classList.add('selected');
  temperatureUnit = degree;

  if (typeof display.onChangeDegree === 'function') {
    display.onChangeDegree(degree);
  }
}

window.addEventListener('fetchWeather', () => {
  celsiusButton.disabled = true;
  fahrenheitButton.disabled = true;
});

window.addEventListener('finishFetchWeather', () => {
  celsiusButton.disabled = false;
  fahrenheitButton.disabled = false;
});

window.addEventListener('DOMSvgLoaded', () => {
  let icon = info.querySelector('.weather-icon');

  Object.defineProperty(display, 'icon', {
    get() {
      return icon;
    },
    set(svg) {
      icon.insertAdjacentElement('beforebegin', svg);
      icon.remove();
      icon = svg;
    },
  });
});

Object.keys(elements).forEach((key) => {
  const element = elements[key];
  Object.defineProperty(display, key, {
    get() {
      return element.textContent;
    },
    set(value) {
      element.textContent = value;
    },
  });
});

display.set = function (params = {}) {
  Object.entries(params).forEach(([param, value]) => {
    if (!display[param]) throw new SyntaxError(`Invalid display element '${param}'`);
    display[param] = value;
  });
};

display.showLoading = function () {
  const icon = document.createElement('svg');
  icon.setAttribute('class', 'weather-icon skeleton');
  display.icon = icon;
  display.currentHour = '--:--';
  display.temperature = '--';
  display.feelsLike = '-';
  display.precipitation = '-';
  display.humidity = '-';
  display.wind = '-';
};


/***/ }),

/***/ "./src/scripts/Weather.js":
/*!********************************!*\
  !*** ./src/scripts/Weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _zekumoru_dev_svg_loader_SvgLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zekumoru-dev/svg-loader/SvgLoader */ "./node_modules/@zekumoru-dev/svg-loader/SvgLoader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _api_keys_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.api-keys.json */ "./src/.api-keys.json");
/* harmony import */ var _wmo_icon_conversion_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wmo-icon-conversion.json */ "./src/scripts/wmo-icon-conversion.json");





const Weather = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

Weather.get = async function (city, params) {
  const { lat, lon } = await getCityCoord(city);

  params = {
    latitude: lat,
    longitude: lon,
    current_weather: true,
    timezone: 'auto',
    hourly: [
      'apparent_temperature',
      'temperature_2m',
      'precipitation',
      'relativehumidity_2m',
      'weathercode',
    ],
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'weathercode',
    ],
    ...params,
  };

  return (await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('https://api.open-meteo.com/v1/forecast/', { params })).data;
};

Weather.getIcon = async function (wmo, daytime = true) {
  const time = (daytime) ? 'weather-day' : 'weather-night';
  try {
    const path = `images/${time}/${_wmo_icon_conversion_json__WEBPACK_IMPORTED_MODULE_3__[wmo].full}.svg`;
    return await _zekumoru_dev_svg_loader_SvgLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load(path, {
      colorable: true,
    });
  }
  catch (error) {
    if (error instanceof TypeError) {
      throw new TypeError(`Missing icon for wmo code ${wmo}`);
    }
    else {
      throw new Error(`Could not load icon with wmo code ${wmo}`);
    }
  }
};

async function getCityCoord(city) {
  const data = await (await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_api_keys_json__WEBPACK_IMPORTED_MODULE_2__.openweathermap}`)).json();
  if (!data.length) throw new Error('City not found!');
  return data[0];
}


/***/ }),

/***/ "./src/.api-keys.json":
/*!****************************!*\
  !*** ./src/.api-keys.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"openweathermap":"09c8ea67ddd84d6566549ab998b23190"}');

/***/ }),

/***/ "./src/scripts/wmo-icon-conversion.json":
/*!**********************************************!*\
  !*** ./src/scripts/wmo-icon-conversion.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"0":{"full":"113","codes":["113"]},"1":{"full":"116","codes":["116"]},"2":{"full":"119 122","codes":["119","122"]},"3":{"full":"143","codes":["143"]},"45":{"full":"248","codes":["248"]},"48":{"full":"260","codes":["260"]},"51":{"full":"176 179 293 299 353","codes":["176","179","293","299","353"]},"53":{"full":"185","codes":["185"]},"55":{"full":"263 266","codes":["263","266"]},"56":{"full":"281","codes":["281"]},"57":{"full":"284","codes":["284"]},"61":{"full":"296 302","codes":["296","302"]},"63":{"full":"296 302","codes":["296","302"]},"65":{"full":"308","codes":["308"]},"66":{"full":"311 314","codes":["311","314"]},"67":{"full":"365","codes":["365"]},"71":{"full":"326 332","codes":["326","332"]},"73":{"full":"326 332","codes":["326","332"]},"75":{"full":"33","codes":["33"]},"77":{"full":"326 332","codes":["326","332"]},"80":{"full":"296 302","codes":["296","302"]},"81":{"full":"308","codes":["308"]},"82":{"full":"308","codes":["308"]},"85":{"full":"326 332","codes":["326","332"]},"86":{"full":"338","codes":["338"]},"95":{"full":"389","codes":["389"]},"96":{"full":"389","codes":["389"]},"99":{"full":"395","codes":["395"]}}');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"build": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktop_weather_app"] = self["webpackChunktop_weather_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_zekumoru-dev_svg-loader_SvgLoader_js-node_modules_date-fns_esm_format_in-6b119a"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuMmI3YTliN2RkMTI0MDQzYTQzODkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxlQUFlLGNBQWMsMkJBQTJCLHFEQUFxRCxHQUFHLFFBQVEsMEJBQTBCLEdBQUcsMEJBQTBCLGlCQUFpQixHQUFHLFlBQVksaUJBQWlCLGtDQUFrQyxtQkFBbUIsb0JBQW9CLEdBQUcsVUFBVSw4QkFBOEIsbUJBQW1CLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLFVBQVUsb0JBQW9CLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLGVBQWUsaUJBQWlCLDZEQUE2RCxHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIsMEJBQTBCLGdCQUFnQixpQkFBaUIsR0FBRyx5QkFBeUIsZ0JBQWdCLG1CQUFtQixHQUFHLGlDQUFpQyxRQUFRLHdDQUF3QyxLQUFLLFlBQVksd0NBQXdDLEtBQUssR0FBRyxrQ0FBa0Msa0JBQWtCLGNBQWMsNEJBQTRCLHdCQUF3QixtQkFBbUIsR0FBRyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLHFDQUFxQyxtQkFBbUIsMkJBQTJCLGtCQUFrQix3QkFBd0IsdUJBQXVCLHVCQUF1QixzQkFBc0IsYUFBYSxHQUFHLDhCQUE4Qiw2QkFBNkIsR0FBRyxvR0FBb0csaUJBQWlCLEdBQUcseUJBQXlCLGlCQUFpQixrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLHVCQUF1QixZQUFZLGtDQUFrQyxtQkFBbUIsaUJBQWlCLGtCQUFrQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxvREFBb0QscUJBQXFCLGtCQUFrQixHQUFHLDBDQUEwQyw4QkFBOEIsa0VBQWtFLEtBQUssR0FBRyxvQ0FBb0Msa0JBQWtCLGNBQWMsc0JBQXNCLEdBQUcsdUNBQXVDLFlBQVksa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsNENBQTRDLGlCQUFpQixrQkFBa0IsR0FBRywyQ0FBMkMsa0JBQWtCLG9CQUFvQixhQUFhLEdBQUcsdUNBQXVDLHFCQUFxQixnQkFBZ0IsR0FBRyxpREFBaUQsbUJBQW1CLGlCQUFpQixHQUFHLGlEQUFpRCxtQkFBbUIsR0FBRywyQ0FBMkMsNEJBQTRCLHNCQUFzQixHQUFHLDBDQUEwQyxrQkFBa0IsZ0VBQWdFLGNBQWMsbUJBQW1CLEdBQUcsd0NBQXdDLGtCQUFrQixvQ0FBb0Msd0NBQXdDLG9CQUFvQixHQUFHLG9DQUFvQyxnQkFBZ0IsaUJBQWlCLHFCQUFxQixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyxzQ0FBc0MscUJBQXFCLEdBQUcsWUFBWSxrQkFBa0IsY0FBYyxHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLHVCQUF1Qix1QkFBdUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLHdCQUF3QixHQUFHLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLEdBQUcsd0JBQXdCLGdCQUFnQixpQkFBaUIsR0FBRyxtQ0FBbUMscUJBQXFCLHFCQUFxQixHQUFHLDZCQUE2QixxQkFBcUIscUJBQXFCLEdBQUcsa0NBQWtDLHNCQUFzQixpQkFBaUIscUJBQXFCLHdCQUF3QixHQUFHLDJDQUEyQyx1QkFBdUIsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLHdCQUF3QixrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyw2QkFBNkIsaUJBQWlCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLGdFQUFnRSxhQUFhLEdBQUcsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsR0FBRyxvQkFBb0IsMEJBQTBCLGVBQWUsZ0JBQWdCLHFCQUFxQixvQkFBb0IsR0FBRywyREFBMkQsMENBQTBDLDRDQUE0QyxLQUFLLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvQ2FyZHNEaXNwbGF5LmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL0N1cnJlbnRXZWF0aGVyRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9XZWF0aGVyLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbm1haW4gPiBzZWN0aW9uIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4uc2tlbGV0b24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi53ZWF0aGVyLWljb24uc2tlbGV0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuc3Bhbi5za2VsZXRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmluZm8gc3Bhbi5za2VsZXRvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLWxvYWRpbmcge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDMwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0NSUpO1xcbiAgfVxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmxvZ28taWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLyogU0VBUkNIIEJBUiAqL1xcblxcbiNzZWFyY2gtYmFyIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3NlYXJjaC1iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQsXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQgKyAuc2VhcmNoLFxcbiNzZWFyY2gtYmFyOmhhcyg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI3NlYXJjaC1iYXIgLnNlYXJjaCB7XFxuICB3aWR0aDogMC45ZW07XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYTZhNmE2O1xcbn1cXG5cXG4vKiBXRUFUSEVSIElORk8gKi9cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAjY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIDpkaXNhYmxlZCB7XFxuICBjb2xvcjogIzYwNjA2MDtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIC5zZWxlY3RlZCB7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5waXBlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLmV4dHJhID4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZXh0cmEgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLyogTUFJTiAqL1xcblxcbmgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI2hvdXJseS13ZWF0aGVyLFxcbiNkYWlseS13ZWF0aGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2FyZHMgPiBsaSB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jYXJkcyAudGltZSxcXG4uY2FyZHMgLmRheSB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNhcmRzIC5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLmluZm8gPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jYXJkcyAuaW5mbyAuaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNhcmRzIC5wcmVjaXBpdGF0aW9uICsgLnVuaXQge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcblxcbi5jYXJkcyAubG93LXRlbXBlcmF0dXJlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4ubWFpbi1mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIHNlY3Rpb246bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciAubG9nbyB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgaDMge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIC5sb2dvLWljb24ge1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIC5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERFU0tUT1AgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5leHRyYSA+IHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLDJEQUEyRDtFQUM3RDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbm1haW4gPiBzZWN0aW9uIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4uc2tlbGV0b24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi53ZWF0aGVyLWljb24uc2tlbGV0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuc3Bhbi5za2VsZXRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmluZm8gc3Bhbi5za2VsZXRvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLWxvYWRpbmcge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDMwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0NSUpO1xcbiAgfVxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmxvZ28taWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLyogU0VBUkNIIEJBUiAqL1xcblxcbiNzZWFyY2gtYmFyIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3NlYXJjaC1iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQsXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQgKyAuc2VhcmNoLFxcbiNzZWFyY2gtYmFyOmhhcyg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI3NlYXJjaC1iYXIgLnNlYXJjaCB7XFxuICB3aWR0aDogMC45ZW07XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYTZhNmE2O1xcbn1cXG5cXG4vKiBXRUFUSEVSIElORk8gKi9cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAjY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIDpkaXNhYmxlZCB7XFxuICBjb2xvcjogIzYwNjA2MDtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIC5zZWxlY3RlZCB7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5waXBlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLmV4dHJhID4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZXh0cmEgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLyogTUFJTiAqL1xcblxcbmgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI2hvdXJseS13ZWF0aGVyLFxcbiNkYWlseS13ZWF0aGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2FyZHMgPiBsaSB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jYXJkcyAudGltZSxcXG4uY2FyZHMgLmRheSB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNhcmRzIC5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLmluZm8gPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jYXJkcyAuaW5mbyAuaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNhcmRzIC5wcmVjaXBpdGF0aW9uICsgLnVuaXQge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcblxcbi5jYXJkcyAubG93LXRlbXBlcmF0dXJlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4ubWFpbi1mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIHNlY3Rpb246bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciAubG9nbyB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgaDMge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIC5sb2dvLWljb24ge1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIC5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERFU0tUT1AgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5leHRyYSA+IHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnQHpla3Vtb3J1LWRldi9zdmctbG9hZGVyL1N2Z0xvYWRlcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgU2Nyb2xsQm9vc3RlciBmcm9tICdzY3JvbGxib29zdGVyJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vc2NyaXB0cy9XZWF0aGVyJztcbmltcG9ydCBDdXJyZW50V2VhdGhlckRpc3BsYXkgZnJvbSAnLi9zY3JpcHRzL0N1cnJlbnRXZWF0aGVyRGlzcGxheSc7XG5pbXBvcnQgQ2FyZHNEaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9DYXJkc0Rpc3BsYXknO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9zY3JpcHRzL0NhcmQnO1xuXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IGhvdXJseURpc3BsYXkgPSBuZXcgQ2FyZHNEaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3VybHktd2VhdGhlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmx5LXdlYXRoZXIgPiAuY2FyZHMnKSk7XG5jb25zdCBkYWlseURpc3BsYXkgPSBuZXcgQ2FyZHNEaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseS13ZWF0aGVyJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseS13ZWF0aGVyID4gLmNhcmRzJykpO1xubGV0IHdlYXRoZXI7XG5sZXQgbG9hZGluZyA9IGZhbHNlO1xuXG5ob3VybHlEaXNwbGF5LnNob3dMb2FkaW5nKCk7XG5kYWlseURpc3BsYXkuc2hvd0xvYWRpbmcoKTtcblxuQ3VycmVudFdlYXRoZXJEaXNwbGF5Lm9uQ2hhbmdlRGVncmVlID0gc3VibWl0O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3ZnTG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBDYXJkLmxvYWRJY29ucygpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3VibWl0KCkpO1xuXG4gIHNlYXJjaC5jbGljaygpO1xufSk7XG5cbmNpdHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmNpdHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBzdWJtaXQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNpdHkudmFsdWUpIHtcbiAgICBjaXR5LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBjaXR5IScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNpdHkuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgaWYgKGxvYWRpbmcpIHJldHVybjtcbiAgaWYgKCFjaXR5LnZhbHVlKSB7XG4gICAgY2l0eS5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgY2l0eSEnKTtcbiAgICBjaXR5LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2l0eS5kaXNhYmxlZCA9IHRydWU7XG4gIGxvYWRpbmcgPSB0cnVlO1xuICBjaXR5LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdmZXRjaFdlYXRoZXInLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICBDdXJyZW50V2VhdGhlckRpc3BsYXkuc2hvd0xvYWRpbmcoKTtcbiAgaG91cmx5RGlzcGxheS5zaG93TG9hZGluZygpO1xuICBkYWlseURpc3BsYXkuc2hvd0xvYWRpbmcoKTtcblxuICBjb25zdCBwcmV2aW91c1dlYXRoZXIgPSB3ZWF0aGVyO1xuICB0cnkge1xuICAgIHdlYXRoZXIgPSBhd2FpdCBXZWF0aGVyLmdldChjaXR5LnZhbHVlLCB7XG4gICAgICB0ZW1wZXJhdHVyZV91bml0OiBDdXJyZW50V2VhdGhlckRpc3BsYXkudGVtcGVyYXR1cmVVbml0LFxuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNpdHkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjaXR5LnNldEN1c3RvbVZhbGlkaXR5KGVycm9yLm1lc3NhZ2UpO1xuICAgIGNpdHkucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB3ZWF0aGVyID0gcHJldmlvdXNXZWF0aGVyO1xuICB9XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIHNldEN1cnJlbnRXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSxcbiAgICBzZXRIb3VybHlXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSxcbiAgICBzZXREYWlseVdlYXRoZXJEaXNwbGF5KHdlYXRoZXIpLFxuICBdKTtcblxuICBjaXR5LmRpc2FibGVkID0gZmFsc2U7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgY2l0eS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZmluaXNoRmV0Y2hXZWF0aGVyJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0Q3VycmVudFdlYXRoZXJEaXNwbGF5KHdlYXRoZXIpIHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSB3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlcjtcbiAgY29uc3QgY3VycmVudEluZGV4ID0gd2VhdGhlci5ob3VybHkudGltZS5pbmRleE9mKGN1cnJlbnRXZWF0aGVyLnRpbWUpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKGN1cnJlbnRXZWF0aGVyLnRpbWUpO1xuXG4gIEN1cnJlbnRXZWF0aGVyRGlzcGxheS5zZXQoe1xuICAgIGljb246IGF3YWl0IFdlYXRoZXIuZ2V0SWNvbihjdXJyZW50V2VhdGhlci53ZWF0aGVyY29kZSwgaXNEYXl0aW1lKGN1cnJlbnRUaW1lKSksXG4gICAgY3VycmVudEhvdXI6IGZvcm1hdChjdXJyZW50VGltZSwgJ3AnKSxcbiAgICB0ZW1wZXJhdHVyZTogY3VycmVudFdlYXRoZXIudGVtcGVyYXR1cmUsXG4gICAgZmVlbHNMaWtlOiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZVtjdXJyZW50SW5kZXhdLFxuICAgIHByZWNpcGl0YXRpb246IHdlYXRoZXIuaG91cmx5LnByZWNpcGl0YXRpb25bY3VycmVudEluZGV4XSxcbiAgICBodW1pZGl0eTogd2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybVtjdXJyZW50SW5kZXhdLFxuICAgIHdpbmQ6IGN1cnJlbnRXZWF0aGVyLndpbmRzcGVlZCxcbiAgfSk7XG5cbiAgQ3VycmVudFdlYXRoZXJEaXNwbGF5Lmljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWljb24nKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0SG91cmx5V2VhdGhlckRpc3BsYXkod2VhdGhlcikge1xuICBjb25zdCB7IHRpbWUsIHdlYXRoZXJjb2RlLCBwcmVjaXBpdGF0aW9uIH0gPSB3ZWF0aGVyLmhvdXJseTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSB3ZWF0aGVyLmhvdXJseS50ZW1wZXJhdHVyZV8ybTtcblxuICBjb25zdCBjYXJkcyA9IFtdO1xuICBjb25zdCBzdGFydEluZGV4ID0gd2VhdGhlci5ob3VybHkudGltZS5pbmRleE9mKHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLnRpbWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBjb25zdCBpbmRleCA9IHN0YXJ0SW5kZXggKyBpO1xuXG4gICAgY2FyZHMucHVzaCgoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdCA9IG5ldyBEYXRlKHRpbWVbaW5kZXhdKTtcbiAgICAgIGNvbnN0IGljb24gPSBhd2FpdCBXZWF0aGVyLmdldEljb24od2VhdGhlcmNvZGVbaW5kZXhdLCBpc0RheXRpbWUodCkpO1xuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItaWNvbicpO1xuXG4gICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaWNvbiwgZm9ybWF0KHQsICdwJyksIG51bGwpO1xuICAgICAgY2FyZC5hZGRUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZVtpbmRleF0pO1xuICAgICAgY2FyZC5hZGRQcmVjaXBpdGF0aW9uKHByZWNpcGl0YXRpb25baW5kZXhdKTtcblxuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfSkoKSk7XG4gIH1cblxuICBob3VybHlEaXNwbGF5LnJlbmRlcihhd2FpdCBQcm9taXNlLmFsbChjYXJkcykpO1xuICBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgdmlld3BvcnQ6IGhvdXJseURpc3BsYXkudmlld3BvcnQsXG4gICAgY29udGVudDogaG91cmx5RGlzcGxheS5jb250ZW50LFxuICAgIHNjcm9sbE1vZGU6ICd0cmFuc2Zvcm0nLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGVtdWxhdGVTY3JvbGw6IHRydWUsXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXREYWlseVdlYXRoZXJEaXNwbGF5KHdlYXRoZXIpIHtcbiAgY29uc3QgeyB0aW1lLCB3ZWF0aGVyY29kZSB9ID0gd2VhdGhlci5kYWlseTtcbiAgY29uc3QgaGlnaFRlbXBlcmF0dXJlID0gd2VhdGhlci5kYWlseS50ZW1wZXJhdHVyZV8ybV9tYXg7XG4gIGNvbnN0IGxvd1RlbXBlcmF0dXJlID0gd2VhdGhlci5kYWlseS50ZW1wZXJhdHVyZV8ybV9taW47XG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25fc3VtO1xuXG4gIGNvbnN0IGNhcmRzID0gW107XG4gIHRpbWUuZm9yRWFjaCgodGltZSwgaW5kZXgpID0+IHtcbiAgICB0aW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgY2FyZHMucHVzaCgoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgaWNvbiA9IGF3YWl0IFdlYXRoZXIuZ2V0SWNvbih3ZWF0aGVyY29kZVtpbmRleF0pO1xuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItaWNvbicpO1xuXG4gICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaWNvbiwgZm9ybWF0KHRpbWUsICdlZWUnKSwgbnVsbCk7XG4gICAgICBjYXJkLmFkZEhpZ2hMb3dUZW1wZXJhdHVyZShoaWdoVGVtcGVyYXR1cmVbaW5kZXhdLCBsb3dUZW1wZXJhdHVyZVtpbmRleF0pO1xuICAgICAgY2FyZC5hZGRQcmVjaXBpdGF0aW9uKHByZWNpcGl0YXRpb25baW5kZXhdKTtcblxuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfSkoKSk7XG4gIH0pO1xuXG4gIGRhaWx5RGlzcGxheS5yZW5kZXIoYXdhaXQgUHJvbWlzZS5hbGwoY2FyZHMpKTtcbiAgbmV3IFNjcm9sbEJvb3N0ZXIoe1xuICAgIHZpZXdwb3J0OiBkYWlseURpc3BsYXkudmlld3BvcnQsXG4gICAgY29udGVudDogZGFpbHlEaXNwbGF5LmNvbnRlbnQsXG4gICAgc2Nyb2xsTW9kZTogJ3RyYW5zZm9ybScsXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgZW11bGF0ZVNjcm9sbDogdHJ1ZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzRGF5dGltZSh0aW1lKSB7XG4gIHJldHVybiB0aW1lLmdldEhvdXJzKCkgPj0gNiAmJiB0aW1lLmdldEhvdXJzKCkgPCAxODtcbn1cbiIsImltcG9ydCBTdmdMb2FkZXIgZnJvbSAnQHpla3Vtb3J1LWRldi9zdmctbG9hZGVyL1N2Z0xvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBzdGF0aWMgI1RFTVBFUkFUVVJFX0lDT047XG4gIHN0YXRpYyAjUFJFQ0lQSVRBVElPTl9JQ09OO1xuXG4gIGljb247XG4gIHRpbWU7XG4gIGluZm9MaXN0O1xuXG4gIGNvbnN0cnVjdG9yKGljb24sIHRpbWUpIHtcbiAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5pbmZvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdGhpcy5pbmZvTGlzdC5jbGFzc05hbWUgPSAnaW5mbyc7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgbG9hZEljb25zKCkge1xuICAgIGlmIChDYXJkLiNURU1QRVJBVFVSRV9JQ09OKSByZXR1cm47XG4gICAgQ2FyZC4jVEVNUEVSQVRVUkVfSUNPTiA9IGF3YWl0IFN2Z0xvYWRlci5sb2FkKCdpbWFnZXMvdGVtcGVyYXR1cmUuc3ZnJywgeyBjb2xvcmFibGU6IHRydWUsIGNsYXNzOiAnaWNvbicgfSk7XG4gICAgQ2FyZC4jUFJFQ0lQSVRBVElPTl9JQ09OID0gYXdhaXQgU3ZnTG9hZGVyLmxvYWQoJ2ltYWdlcy9wcmVjaXBpdGF0aW9uLnN2ZycsIHsgY29sb3JhYmxlOiB0cnVlLCBjbGFzczogJ2ljb24nIH0pO1xuICB9XG5cbiAgYWRkVGVtcGVyYXR1cmUodGVtcGVyYXR1cmUpIHtcbiAgICBjb25zdCBsaSA9IHRoaXMuI2NyZWF0ZUluZm8oQ2FyZC4jVEVNUEVSQVRVUkVfSUNPTiwgJzxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cIm51bWJlclwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInVuaXRcIj7CsDwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgbGkucXVlcnlTZWxlY3RvcignLm51bWJlcicpLnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmU7XG4gICAgdGhpcy5pbmZvTGlzdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBsaSk7XG4gIH1cblxuICBhZGRIaWdoTG93VGVtcGVyYXR1cmUoaGlnaCwgbG93KSB7XG4gICAgY29uc3QgbGkgPSB0aGlzLiNjcmVhdGVJbmZvKENhcmQuI1RFTVBFUkFUVVJFX0lDT04sICc8c3BhbiBjbGFzcz1cImhpZ2gtdGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cIm51bWJlclwiPjEzPC9zcGFuPjxzcGFuIGNsYXNzPVwidW5pdFwiPsKwPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJsb3ctdGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cIm51bWJlclwiPjg8L3NwYW4+PHNwYW4gY2xhc3M9XCJ1bml0XCI+wrA8L3NwYW4+PC9zcGFuPicpO1xuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXRlbXBlcmF0dXJlIC5udW1iZXInKS50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IoaGlnaCk7XG4gICAgbGkucXVlcnlTZWxlY3RvcignLmxvdy10ZW1wZXJhdHVyZSAubnVtYmVyJykudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKGxvdyk7XG4gICAgdGhpcy5pbmZvTGlzdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBsaSk7XG4gIH1cblxuICBhZGRQcmVjaXBpdGF0aW9uKHByZWNpcGl0YXRpb24pIHtcbiAgICBjb25zdCBsaSA9IHRoaXMuI2NyZWF0ZUluZm8oQ2FyZC4jUFJFQ0lQSVRBVElPTl9JQ09OLCAnPHNwYW4gY2xhc3M9XCJwcmVjaXBpdGF0aW9uXCI+MC4yPC9zcGFuPiA8c3BhbiBjbGFzcz1cInVuaXRcIj5tbTwvc3Bhbj4nKTtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcucHJlY2lwaXRhdGlvbicpLnRleHRDb250ZW50ID0gcHJlY2lwaXRhdGlvbjtcbiAgICB0aGlzLmluZm9MaXN0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgbGkpO1xuICB9XG5cbiAgI2NyZWF0ZUluZm8oaWNvbiwgY29udGVudCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5hcHBlbmRDaGlsZChpY29uLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgbGkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjb250ZW50KTtcbiAgICByZXR1cm4gbGk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgI3ZpZXdwb3J0O1xuICAjY29udGVudDtcblxuICBjb25zdHJ1Y3Rvcih2aWV3cG9ydCwgY29udGVudCkge1xuICAgIHRoaXMuI3ZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gICAgdGhpcy4jY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXQgdmlld3BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZpZXdwb3J0O1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG4gIH1cblxuICBhcHBlbmQoY2FyZCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGxpLmFwcGVuZENoaWxkKGNhcmQuaWNvbik7XG4gICAgbGkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHAgY2xhc3M9XCJ0aW1lXCI+PC9wPicpO1xuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy50aW1lJykudGV4dENvbnRlbnQgPSBjYXJkLnRpbWU7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2FyZC5pbmZvTGlzdCk7XG5cbiAgICB0aGlzLiNjb250ZW50LmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIHJlbmRlcihjYXJkcykge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICBjYXJkcy5mb3JFYWNoKHRoaXMuYXBwZW5kLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy4jY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHNob3dMb2FkaW5nKCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICA8c3ZnIGNsYXNzPVwid2VhdGhlci1pY29uIHNrZWxldG9uXCIgLz5cbiAgICAgIDxwIGNsYXNzPVwiZGF5XCI+PHNwYW4gY2xhc3M9XCJza2VsZXRvblwiPjwvc3Bhbj48L3A+XG4gICAgICA8dWwgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInNrZWxldG9uXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInNrZWxldG9uXCI+PC9zcGFuPjwvbGk+XG4gICAgICA8L3VsPmA7XG5cbiAgICB0aGlzLiNjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuI2NvbnRlbnQuY2xvbmVOb2RlKCk7XG4gICAgY29udGVudC5zdHlsZSA9ICcnO1xuICAgIHRoaXMuI2NvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGNvbnRlbnQpO1xuICAgIHRoaXMuI2NvbnRlbnQucmVtb3ZlKCk7XG4gICAgdGhpcy4jY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuI2NvbnRlbnQuYXBwZW5kQ2hpbGQobGkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IGRpc3BsYXkgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XG5cbmNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLWRpc3BsYXknKTtcbmNvbnN0IGVsZW1lbnRzID0ge1xuICBjdXJyZW50SG91cjogaW5mby5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1ob3VyJyksXG4gIHRlbXBlcmF0dXJlOiBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZSA+IC5udW1iZXInKSxcbiAgZmVlbHNMaWtlOiBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlID4gLm51bWJlcicpLFxuICBwcmVjaXBpdGF0aW9uOiBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXBpdGF0aW9uJyksXG4gIGh1bWlkaXR5OiBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpLFxuICB3aW5kOiBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyksXG59O1xuXG5jb25zdCBkZWdyZWVzID0gaW5mby5xdWVyeVNlbGVjdG9yKCcuZGVncmVlcycpO1xuY29uc3QgY2Vsc2l1c0J1dHRvbiA9IGRlZ3JlZXMucXVlcnlTZWxlY3RvcignYnV0dG9uLmNlbHNpdXMnKTtcbmNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkZWdyZWVzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5mYWhyZW5oZWl0Jyk7XG5cbmxldCB0ZW1wZXJhdHVyZVVuaXQgPSAnY2Vsc2l1cyc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZGlzcGxheSwgJ3RlbXBlcmF0dXJlVW5pdCcsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiB0ZW1wZXJhdHVyZVVuaXQ7XG4gIH0sXG59KTtcblxuY2Vsc2l1c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZURlZ3JlZShjZWxzaXVzQnV0dG9uLCAnY2Vsc2l1cycpKTtcbmZhaHJlbmhlaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VEZWdyZWUoZmFocmVuaGVpdEJ1dHRvbiwgJ2ZhaHJlbmhlaXQnKSk7XG5cbmZ1bmN0aW9uIGNoYW5nZURlZ3JlZShidXR0b24sIGRlZ3JlZSkge1xuICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gZGVncmVlcy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgaWYgKHByZXZpb3VzU2VsZWN0ZWQgPT09IGJ1dHRvbikgcmV0dXJuO1xuXG4gIHByZXZpb3VzU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIHRlbXBlcmF0dXJlVW5pdCA9IGRlZ3JlZTtcblxuICBpZiAodHlwZW9mIGRpc3BsYXkub25DaGFuZ2VEZWdyZWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBkaXNwbGF5Lm9uQ2hhbmdlRGVncmVlKGRlZ3JlZSk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoV2VhdGhlcicsICgpID0+IHtcbiAgY2Vsc2l1c0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGZhaHJlbmhlaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmaW5pc2hGZXRjaFdlYXRoZXInLCAoKSA9PiB7XG4gIGNlbHNpdXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01TdmdMb2FkZWQnLCAoKSA9PiB7XG4gIGxldCBpY29uID0gaW5mby5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJyk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRpc3BsYXksICdpY29uJywge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBpY29uO1xuICAgIH0sXG4gICAgc2V0KHN2Zykge1xuICAgICAgaWNvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgc3ZnKTtcbiAgICAgIGljb24ucmVtb3ZlKCk7XG4gICAgICBpY29uID0gc3ZnO1xuICAgIH0sXG4gIH0pO1xufSk7XG5cbk9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2tleV07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkaXNwbGF5LCBrZXksIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH0sXG4gIH0pO1xufSk7XG5cbmRpc3BsYXkuc2V0ID0gZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW3BhcmFtLCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoIWRpc3BsYXlbcGFyYW1dKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgZGlzcGxheSBlbGVtZW50ICcke3BhcmFtfSdgKTtcbiAgICBkaXNwbGF5W3BhcmFtXSA9IHZhbHVlO1xuICB9KTtcbn07XG5cbmRpc3BsYXkuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItaWNvbiBza2VsZXRvbicpO1xuICBkaXNwbGF5Lmljb24gPSBpY29uO1xuICBkaXNwbGF5LmN1cnJlbnRIb3VyID0gJy0tOi0tJztcbiAgZGlzcGxheS50ZW1wZXJhdHVyZSA9ICctLSc7XG4gIGRpc3BsYXkuZmVlbHNMaWtlID0gJy0nO1xuICBkaXNwbGF5LnByZWNpcGl0YXRpb24gPSAnLSc7XG4gIGRpc3BsYXkuaHVtaWRpdHkgPSAnLSc7XG4gIGRpc3BsYXkud2luZCA9ICctJztcbn07XG4iLCJpbXBvcnQgU3ZnTG9hZGVyIGZyb20gJ0B6ZWt1bW9ydS1kZXYvc3ZnLWxvYWRlci9TdmdMb2FkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBBUElfS0VZUyBmcm9tICcuLi8uYXBpLWtleXMuanNvbic7XG5pbXBvcnQgd21vSWNvbkNvbnZlcnNpb24gZnJvbSAnLi93bW8taWNvbi1jb252ZXJzaW9uLmpzb24nO1xuXG5jb25zdCBXZWF0aGVyID0ge307XG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuXG5XZWF0aGVyLmdldCA9IGFzeW5jIGZ1bmN0aW9uIChjaXR5LCBwYXJhbXMpIHtcbiAgY29uc3QgeyBsYXQsIGxvbiB9ID0gYXdhaXQgZ2V0Q2l0eUNvb3JkKGNpdHkpO1xuXG4gIHBhcmFtcyA9IHtcbiAgICBsYXRpdHVkZTogbGF0LFxuICAgIGxvbmdpdHVkZTogbG9uLFxuICAgIGN1cnJlbnRfd2VhdGhlcjogdHJ1ZSxcbiAgICB0aW1lem9uZTogJ2F1dG8nLFxuICAgIGhvdXJseTogW1xuICAgICAgJ2FwcGFyZW50X3RlbXBlcmF0dXJlJyxcbiAgICAgICd0ZW1wZXJhdHVyZV8ybScsXG4gICAgICAncHJlY2lwaXRhdGlvbicsXG4gICAgICAncmVsYXRpdmVodW1pZGl0eV8ybScsXG4gICAgICAnd2VhdGhlcmNvZGUnLFxuICAgIF0sXG4gICAgZGFpbHk6IFtcbiAgICAgICd0ZW1wZXJhdHVyZV8ybV9tYXgnLFxuICAgICAgJ3RlbXBlcmF0dXJlXzJtX21pbicsXG4gICAgICAncHJlY2lwaXRhdGlvbl9zdW0nLFxuICAgICAgJ3dlYXRoZXJjb2RlJyxcbiAgICBdLFxuICAgIC4uLnBhcmFtcyxcbiAgfTtcblxuICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3QvJywgeyBwYXJhbXMgfSkpLmRhdGE7XG59O1xuXG5XZWF0aGVyLmdldEljb24gPSBhc3luYyBmdW5jdGlvbiAod21vLCBkYXl0aW1lID0gdHJ1ZSkge1xuICBjb25zdCB0aW1lID0gKGRheXRpbWUpID8gJ3dlYXRoZXItZGF5JyA6ICd3ZWF0aGVyLW5pZ2h0JztcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXRoID0gYGltYWdlcy8ke3RpbWV9LyR7d21vSWNvbkNvbnZlcnNpb25bd21vXS5mdWxsfS5zdmdgO1xuICAgIHJldHVybiBhd2FpdCBTdmdMb2FkZXIubG9hZChwYXRoLCB7XG4gICAgICBjb2xvcmFibGU6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGljb24gZm9yIHdtbyBjb2RlICR7d21vfWApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGxvYWQgaWNvbiB3aXRoIHdtbyBjb2RlICR7d21vfWApO1xuICAgIH1cbiAgfVxufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eUNvb3JkKGNpdHkpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVlTLm9wZW53ZWF0aGVybWFwfWApKS5qc29uKCk7XG4gIGlmICghZGF0YS5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignQ2l0eSBub3QgZm91bmQhJyk7XG4gIHJldHVybiBkYXRhWzBdO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidWlsZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b3Bfd2VhdGhlcl9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9wX3dlYXRoZXJfYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3pla3Vtb3J1LWRldl9zdmctbG9hZGVyX1N2Z0xvYWRlcl9qcy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2Zvcm1hdF9pbi02YjExOWFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=