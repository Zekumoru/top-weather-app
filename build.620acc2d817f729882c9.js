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

  try {
    const weather = await _scripts_Weather__WEBPACK_IMPORTED_MODULE_4__["default"].get(city.value, {
      temperature_unit: _scripts_CurrentWeatherDisplay__WEBPACK_IMPORTED_MODULE_5__["default"].temperatureUnit,
    });

    await Promise.all([
      setCurrentWeatherDisplay(weather),
      setHourlyWeatherDisplay(weather),
      setDailyWeatherDisplay(weather),
    ]);
  }
  catch (error) {
    city.setCustomValidity(error.message);
    city.reportValidity();
    throw new Error(error);
  }

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
  const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`https://api.openweathermap.org/geo/1.0/direct/?q=${city}&appid=${_api_keys_json__WEBPACK_IMPORTED_MODULE_2__.openweathermap}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvQ2FyZHNEaXNwbGF5LmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL0N1cnJlbnRXZWF0aGVyRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9XZWF0aGVyLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbm1haW4gPiBzZWN0aW9uIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4uc2tlbGV0b24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi53ZWF0aGVyLWljb24uc2tlbGV0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuc3Bhbi5za2VsZXRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmluZm8gc3Bhbi5za2VsZXRvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLWxvYWRpbmcge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDMwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0NSUpO1xcbiAgfVxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmxvZ28taWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLyogU0VBUkNIIEJBUiAqL1xcblxcbiNzZWFyY2gtYmFyIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3NlYXJjaC1iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQsXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQgKyAuc2VhcmNoLFxcbiNzZWFyY2gtYmFyOmhhcyg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI3NlYXJjaC1iYXIgLnNlYXJjaCB7XFxuICB3aWR0aDogMC45ZW07XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYTZhNmE2O1xcbn1cXG5cXG4vKiBXRUFUSEVSIElORk8gKi9cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAjY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIDpkaXNhYmxlZCB7XFxuICBjb2xvcjogIzYwNjA2MDtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIC5zZWxlY3RlZCB7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5waXBlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLmV4dHJhID4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZXh0cmEgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLyogTUFJTiAqL1xcblxcbmgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI2hvdXJseS13ZWF0aGVyLFxcbiNkYWlseS13ZWF0aGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2FyZHMgPiBsaSB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jYXJkcyAudGltZSxcXG4uY2FyZHMgLmRheSB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNhcmRzIC5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLmluZm8gPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jYXJkcyAuaW5mbyAuaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNhcmRzIC5wcmVjaXBpdGF0aW9uICsgLnVuaXQge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcblxcbi5jYXJkcyAubG93LXRlbXBlcmF0dXJlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4ubWFpbi1mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIHNlY3Rpb246bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciAubG9nbyB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgaDMge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIC5sb2dvLWljb24ge1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIC5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERFU0tUT1AgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5leHRyYSA+IHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLDJEQUEyRDtFQUM3RDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbm1haW4gPiBzZWN0aW9uIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4uc2tlbGV0b24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi53ZWF0aGVyLWljb24uc2tlbGV0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuc3Bhbi5za2VsZXRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmluZm8gc3Bhbi5za2VsZXRvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrZWxldG9uLWxvYWRpbmcge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDMwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0NSUpO1xcbiAgfVxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmxvZ28taWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLyogU0VBUkNIIEJBUiAqL1xcblxcbiNzZWFyY2gtYmFyIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3NlYXJjaC1iYXI6Zm9jdXMtd2l0aGluIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQsXFxuI3NlYXJjaC1iYXIgaW5wdXQ6ZGlzYWJsZWQgKyAuc2VhcmNoLFxcbiNzZWFyY2gtYmFyOmhhcyg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI3NlYXJjaC1iYXIgLnNlYXJjaCB7XFxuICB3aWR0aDogMC45ZW07XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYTZhNmE2O1xcbn1cXG5cXG4vKiBXRUFUSEVSIElORk8gKi9cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAjY3VycmVudC13ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIDpkaXNhYmxlZCB7XFxuICBjb2xvcjogIzYwNjA2MDtcXG4gIGN1cnNvcjogd2FpdDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5kZWdyZWVzIC5zZWxlY3RlZCB7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5waXBlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLmV4dHJhID4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZXh0cmEgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLyogTUFJTiAqL1xcblxcbmgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI2hvdXJseS13ZWF0aGVyLFxcbiNkYWlseS13ZWF0aGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY2FyZHMgPiBsaSB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jYXJkcyAudGltZSxcXG4uY2FyZHMgLmRheSB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNhcmRzIC5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uY2FyZHMgLmluZm8gPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jYXJkcyAuaW5mbyAuaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNhcmRzIC5wcmVjaXBpdGF0aW9uICsgLnVuaXQge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcblxcbi5jYXJkcyAubG93LXRlbXBlcmF0dXJlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG4ubWFpbi1mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIHNlY3Rpb246bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciAubG9nbyB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgaDMge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIC5sb2dvLWljb24ge1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jcmVkaXRzIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jcmVkaXRzIC5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERFU0tUT1AgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5leHRyYSA+IHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnQHpla3Vtb3J1LWRldi9zdmctbG9hZGVyL1N2Z0xvYWRlcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgU2Nyb2xsQm9vc3RlciBmcm9tICdzY3JvbGxib29zdGVyJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vc2NyaXB0cy9XZWF0aGVyJztcbmltcG9ydCBDdXJyZW50V2VhdGhlckRpc3BsYXkgZnJvbSAnLi9zY3JpcHRzL0N1cnJlbnRXZWF0aGVyRGlzcGxheSc7XG5pbXBvcnQgQ2FyZHNEaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9DYXJkc0Rpc3BsYXknO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9zY3JpcHRzL0NhcmQnO1xuXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IGhvdXJseURpc3BsYXkgPSBuZXcgQ2FyZHNEaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3VybHktd2VhdGhlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmx5LXdlYXRoZXIgPiAuY2FyZHMnKSk7XG5jb25zdCBkYWlseURpc3BsYXkgPSBuZXcgQ2FyZHNEaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseS13ZWF0aGVyJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseS13ZWF0aGVyID4gLmNhcmRzJykpO1xubGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuaG91cmx5RGlzcGxheS5zaG93TG9hZGluZygpO1xuZGFpbHlEaXNwbGF5LnNob3dMb2FkaW5nKCk7XG5cbkN1cnJlbnRXZWF0aGVyRGlzcGxheS5vbkNoYW5nZURlZ3JlZSA9IHN1Ym1pdDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN2Z0xvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgQ2FyZC5sb2FkSWNvbnMoKTtcblxuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdCgpKTtcblxuICBzZWFyY2guY2xpY2soKTtcbn0pO1xuXG5jaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgc3VibWl0KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjaXR5LnZhbHVlKSB7XG4gICAgY2l0eS5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgY2l0eSEnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaXR5LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gIGlmIChsb2FkaW5nKSByZXR1cm47XG4gIGlmICghY2l0eS52YWx1ZSkge1xuICAgIGNpdHkuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGNpdHkhJyk7XG4gICAgY2l0eS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNpdHkuZGlzYWJsZWQgPSB0cnVlO1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgY2l0eS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZmV0Y2hXZWF0aGVyJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgQ3VycmVudFdlYXRoZXJEaXNwbGF5LnNob3dMb2FkaW5nKCk7XG4gIGhvdXJseURpc3BsYXkuc2hvd0xvYWRpbmcoKTtcbiAgZGFpbHlEaXNwbGF5LnNob3dMb2FkaW5nKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgV2VhdGhlci5nZXQoY2l0eS52YWx1ZSwge1xuICAgICAgdGVtcGVyYXR1cmVfdW5pdDogQ3VycmVudFdlYXRoZXJEaXNwbGF5LnRlbXBlcmF0dXJlVW5pdCxcbiAgICB9KTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHNldEN1cnJlbnRXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSxcbiAgICAgIHNldEhvdXJseVdlYXRoZXJEaXNwbGF5KHdlYXRoZXIpLFxuICAgICAgc2V0RGFpbHlXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSxcbiAgICBdKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjaXR5LnNldEN1c3RvbVZhbGlkaXR5KGVycm9yLm1lc3NhZ2UpO1xuICAgIGNpdHkucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgY2l0eS5kaXNhYmxlZCA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGNpdHkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2ZpbmlzaEZldGNoV2VhdGhlcicsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEN1cnJlbnRXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gd2VhdGhlci5jdXJyZW50X3dlYXRoZXI7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IHdlYXRoZXIuaG91cmx5LnRpbWUuaW5kZXhPZihjdXJyZW50V2VhdGhlci50aW1lKTtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShjdXJyZW50V2VhdGhlci50aW1lKTtcblxuICBDdXJyZW50V2VhdGhlckRpc3BsYXkuc2V0KHtcbiAgICBpY29uOiBhd2FpdCBXZWF0aGVyLmdldEljb24oY3VycmVudFdlYXRoZXIud2VhdGhlcmNvZGUsIGlzRGF5dGltZShjdXJyZW50VGltZSkpLFxuICAgIGN1cnJlbnRIb3VyOiBmb3JtYXQoY3VycmVudFRpbWUsICdwJyksXG4gICAgdGVtcGVyYXR1cmU6IGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLFxuICAgIGZlZWxzTGlrZTogd2VhdGhlci5ob3VybHkuYXBwYXJlbnRfdGVtcGVyYXR1cmVbY3VycmVudEluZGV4XSxcbiAgICBwcmVjaXBpdGF0aW9uOiB3ZWF0aGVyLmhvdXJseS5wcmVjaXBpdGF0aW9uW2N1cnJlbnRJbmRleF0sXG4gICAgaHVtaWRpdHk6IHdlYXRoZXIuaG91cmx5LnJlbGF0aXZlaHVtaWRpdHlfMm1bY3VycmVudEluZGV4XSxcbiAgICB3aW5kOiBjdXJyZW50V2VhdGhlci53aW5kc3BlZWQsXG4gIH0pO1xuXG4gIEN1cnJlbnRXZWF0aGVyRGlzcGxheS5pY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pY29uJyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEhvdXJseVdlYXRoZXJEaXNwbGF5KHdlYXRoZXIpIHtcbiAgY29uc3QgeyB0aW1lLCB3ZWF0aGVyY29kZSwgcHJlY2lwaXRhdGlvbiB9ID0gd2VhdGhlci5ob3VybHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gd2VhdGhlci5ob3VybHkudGVtcGVyYXR1cmVfMm07XG5cbiAgY29uc3QgY2FyZHMgPSBbXTtcbiAgY29uc3Qgc3RhcnRJbmRleCA9IHdlYXRoZXIuaG91cmx5LnRpbWUuaW5kZXhPZih3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgY29uc3QgaW5kZXggPSBzdGFydEluZGV4ICsgaTtcblxuICAgIGNhcmRzLnB1c2goKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHQgPSBuZXcgRGF0ZSh0aW1lW2luZGV4XSk7XG4gICAgICBjb25zdCBpY29uID0gYXdhaXQgV2VhdGhlci5nZXRJY29uKHdlYXRoZXJjb2RlW2luZGV4XSwgaXNEYXl0aW1lKHQpKTtcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWljb24nKTtcblxuICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGljb24sIGZvcm1hdCh0LCAncCcpLCBudWxsKTtcbiAgICAgIGNhcmQuYWRkVGVtcGVyYXR1cmUodGVtcGVyYXR1cmVbaW5kZXhdKTtcbiAgICAgIGNhcmQuYWRkUHJlY2lwaXRhdGlvbihwcmVjaXBpdGF0aW9uW2luZGV4XSk7XG5cbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH0pKCkpO1xuICB9XG5cbiAgaG91cmx5RGlzcGxheS5yZW5kZXIoYXdhaXQgUHJvbWlzZS5hbGwoY2FyZHMpKTtcbiAgbmV3IFNjcm9sbEJvb3N0ZXIoe1xuICAgIHZpZXdwb3J0OiBob3VybHlEaXNwbGF5LnZpZXdwb3J0LFxuICAgIGNvbnRlbnQ6IGhvdXJseURpc3BsYXkuY29udGVudCxcbiAgICBzY3JvbGxNb2RlOiAndHJhbnNmb3JtJyxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBlbXVsYXRlU2Nyb2xsOiB0cnVlLFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0RGFpbHlXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSB7XG4gIGNvbnN0IHsgdGltZSwgd2VhdGhlcmNvZGUgfSA9IHdlYXRoZXIuZGFpbHk7XG4gIGNvbnN0IGhpZ2hUZW1wZXJhdHVyZSA9IHdlYXRoZXIuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWF4O1xuICBjb25zdCBsb3dUZW1wZXJhdHVyZSA9IHdlYXRoZXIuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gd2VhdGhlci5kYWlseS5wcmVjaXBpdGF0aW9uX3N1bTtcblxuICBjb25zdCBjYXJkcyA9IFtdO1xuICB0aW1lLmZvckVhY2goKHRpbWUsIGluZGV4KSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGNhcmRzLnB1c2goKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGljb24gPSBhd2FpdCBXZWF0aGVyLmdldEljb24od2VhdGhlcmNvZGVbaW5kZXhdKTtcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWljb24nKTtcblxuICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGljb24sIGZvcm1hdCh0aW1lLCAnZWVlJyksIG51bGwpO1xuICAgICAgY2FyZC5hZGRIaWdoTG93VGVtcGVyYXR1cmUoaGlnaFRlbXBlcmF0dXJlW2luZGV4XSwgbG93VGVtcGVyYXR1cmVbaW5kZXhdKTtcbiAgICAgIGNhcmQuYWRkUHJlY2lwaXRhdGlvbihwcmVjaXBpdGF0aW9uW2luZGV4XSk7XG5cbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH0pKCkpO1xuICB9KTtcblxuICBkYWlseURpc3BsYXkucmVuZGVyKGF3YWl0IFByb21pc2UuYWxsKGNhcmRzKSk7XG4gIG5ldyBTY3JvbGxCb29zdGVyKHtcbiAgICB2aWV3cG9ydDogZGFpbHlEaXNwbGF5LnZpZXdwb3J0LFxuICAgIGNvbnRlbnQ6IGRhaWx5RGlzcGxheS5jb250ZW50LFxuICAgIHNjcm9sbE1vZGU6ICd0cmFuc2Zvcm0nLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGVtdWxhdGVTY3JvbGw6IHRydWUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0RheXRpbWUodGltZSkge1xuICByZXR1cm4gdGltZS5nZXRIb3VycygpID49IDYgJiYgdGltZS5nZXRIb3VycygpIDwgMTg7XG59XG4iLCJpbXBvcnQgU3ZnTG9hZGVyIGZyb20gJ0B6ZWt1bW9ydS1kZXYvc3ZnLWxvYWRlci9TdmdMb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgc3RhdGljICNURU1QRVJBVFVSRV9JQ09OO1xuICBzdGF0aWMgI1BSRUNJUElUQVRJT05fSUNPTjtcblxuICBpY29uO1xuICB0aW1lO1xuICBpbmZvTGlzdDtcblxuICBjb25zdHJ1Y3RvcihpY29uLCB0aW1lKSB7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMuaW5mb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRoaXMuaW5mb0xpc3QuY2xhc3NOYW1lID0gJ2luZm8nO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGxvYWRJY29ucygpIHtcbiAgICBpZiAoQ2FyZC4jVEVNUEVSQVRVUkVfSUNPTikgcmV0dXJuO1xuICAgIENhcmQuI1RFTVBFUkFUVVJFX0lDT04gPSBhd2FpdCBTdmdMb2FkZXIubG9hZCgnaW1hZ2VzL3RlbXBlcmF0dXJlLnN2ZycsIHsgY29sb3JhYmxlOiB0cnVlLCBjbGFzczogJ2ljb24nIH0pO1xuICAgIENhcmQuI1BSRUNJUElUQVRJT05fSUNPTiA9IGF3YWl0IFN2Z0xvYWRlci5sb2FkKCdpbWFnZXMvcHJlY2lwaXRhdGlvbi5zdmcnLCB7IGNvbG9yYWJsZTogdHJ1ZSwgY2xhc3M6ICdpY29uJyB9KTtcbiAgfVxuXG4gIGFkZFRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKSB7XG4gICAgY29uc3QgbGkgPSB0aGlzLiNjcmVhdGVJbmZvKENhcmQuI1RFTVBFUkFUVVJFX0lDT04sICc8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3M9XCJudW1iZXJcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ1bml0XCI+wrA8L3NwYW4+PC9zcGFuPicpO1xuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXInKS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlO1xuICAgIHRoaXMuaW5mb0xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbGkpO1xuICB9XG5cbiAgYWRkSGlnaExvd1RlbXBlcmF0dXJlKGhpZ2gsIGxvdykge1xuICAgIGNvbnN0IGxpID0gdGhpcy4jY3JlYXRlSW5mbyhDYXJkLiNURU1QRVJBVFVSRV9JQ09OLCAnPHNwYW4gY2xhc3M9XCJoaWdoLXRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3M9XCJudW1iZXJcIj4xMzwvc3Bhbj48c3BhbiBjbGFzcz1cInVuaXRcIj7CsDwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVwibG93LXRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3M9XCJudW1iZXJcIj44PC9zcGFuPjxzcGFuIGNsYXNzPVwidW5pdFwiPsKwPC9zcGFuPjwvc3Bhbj4nKTtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcuaGlnaC10ZW1wZXJhdHVyZSAubnVtYmVyJykudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKGhpZ2gpO1xuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy5sb3ctdGVtcGVyYXR1cmUgLm51bWJlcicpLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcihsb3cpO1xuICAgIHRoaXMuaW5mb0xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbGkpO1xuICB9XG5cbiAgYWRkUHJlY2lwaXRhdGlvbihwcmVjaXBpdGF0aW9uKSB7XG4gICAgY29uc3QgbGkgPSB0aGlzLiNjcmVhdGVJbmZvKENhcmQuI1BSRUNJUElUQVRJT05fSUNPTiwgJzxzcGFuIGNsYXNzPVwicHJlY2lwaXRhdGlvblwiPjAuMjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ1bml0XCI+bW08L3NwYW4+Jyk7XG4gICAgbGkucXVlcnlTZWxlY3RvcignLnByZWNpcGl0YXRpb24nKS50ZXh0Q29udGVudCA9IHByZWNpcGl0YXRpb247XG4gICAgdGhpcy5pbmZvTGlzdC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGxpKTtcbiAgfVxuXG4gICNjcmVhdGVJbmZvKGljb24sIGNvbnRlbnQpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaWNvbi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGxpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY29udGVudCk7XG4gICAgcmV0dXJuIGxpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICN2aWV3cG9ydDtcbiAgI2NvbnRlbnQ7XG5cbiAgY29uc3RydWN0b3Iodmlld3BvcnQsIGNvbnRlbnQpIHtcbiAgICB0aGlzLiN2aWV3cG9ydCA9IHZpZXdwb3J0O1xuICAgIHRoaXMuI2NvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0IHZpZXdwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLiN2aWV3cG9ydDtcbiAgfVxuXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNjb250ZW50O1xuICB9XG5cbiAgYXBwZW5kKGNhcmQpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBsaS5hcHBlbmRDaGlsZChjYXJkLmljb24pO1xuICAgIGxpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxwIGNsYXNzPVwidGltZVwiPjwvcD4nKTtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcudGltZScpLnRleHRDb250ZW50ID0gY2FyZC50aW1lO1xuICAgIGxpLmFwcGVuZENoaWxkKGNhcmQuaW5mb0xpc3QpO1xuXG4gICAgdGhpcy4jY29udGVudC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cblxuICByZW5kZXIoY2FyZHMpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgY2FyZHMuZm9yRWFjaCh0aGlzLmFwcGVuZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuI2NvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzaG93TG9hZGluZygpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgPHN2ZyBjbGFzcz1cIndlYXRoZXItaWNvbiBza2VsZXRvblwiIC8+XG4gICAgICA8cCBjbGFzcz1cImRheVwiPjxzcGFuIGNsYXNzPVwic2tlbGV0b25cIj48L3NwYW4+PC9wPlxuICAgICAgPHVsIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJza2VsZXRvblwiPjwvc3Bhbj48L2xpPlxuICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJza2VsZXRvblwiPjwvc3Bhbj48L2xpPlxuICAgICAgPC91bD5gO1xuXG4gICAgdGhpcy4jY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiNjb250ZW50LmNsb25lTm9kZSgpO1xuICAgIGNvbnRlbnQuc3R5bGUgPSAnJztcbiAgICB0aGlzLiNjb250ZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBjb250ZW50KTtcbiAgICB0aGlzLiNjb250ZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuI2NvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLiNjb250ZW50LmFwcGVuZENoaWxkKGxpLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBkaXNwbGF5ID0ge307XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuXG5jb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5Jyk7XG5jb25zdCBlbGVtZW50cyA9IHtcbiAgY3VycmVudEhvdXI6IGluZm8ucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaG91cicpLFxuICB0ZW1wZXJhdHVyZTogaW5mby5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUgPiAubnVtYmVyJyksXG4gIGZlZWxzTGlrZTogaW5mby5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZSA+IC5udW1iZXInKSxcbiAgcHJlY2lwaXRhdGlvbjogaW5mby5xdWVyeVNlbGVjdG9yKCcucHJlY2lwaXRhdGlvbicpLFxuICBodW1pZGl0eTogaW5mby5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKSxcbiAgd2luZDogaW5mby5xdWVyeVNlbGVjdG9yKCcud2luZCcpLFxufTtcblxuY29uc3QgZGVncmVlcyA9IGluZm8ucXVlcnlTZWxlY3RvcignLmRlZ3JlZXMnKTtcbmNvbnN0IGNlbHNpdXNCdXR0b24gPSBkZWdyZWVzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jZWxzaXVzJyk7XG5jb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZGVncmVlcy5xdWVyeVNlbGVjdG9yKCdidXR0b24uZmFocmVuaGVpdCcpO1xuXG5sZXQgdGVtcGVyYXR1cmVVbml0ID0gJ2NlbHNpdXMnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGRpc3BsYXksICd0ZW1wZXJhdHVyZVVuaXQnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGVtcGVyYXR1cmVVbml0O1xuICB9LFxufSk7XG5cbmNlbHNpdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VEZWdyZWUoY2Vsc2l1c0J1dHRvbiwgJ2NlbHNpdXMnKSk7XG5mYWhyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhbmdlRGVncmVlKGZhaHJlbmhlaXRCdXR0b24sICdmYWhyZW5oZWl0JykpO1xuXG5mdW5jdGlvbiBjaGFuZ2VEZWdyZWUoYnV0dG9uLCBkZWdyZWUpIHtcbiAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IGRlZ3JlZXMucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gIGlmIChwcmV2aW91c1NlbGVjdGVkID09PSBidXR0b24pIHJldHVybjtcblxuICBwcmV2aW91c1NlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB0ZW1wZXJhdHVyZVVuaXQgPSBkZWdyZWU7XG5cbiAgaWYgKHR5cGVvZiBkaXNwbGF5Lm9uQ2hhbmdlRGVncmVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGlzcGxheS5vbkNoYW5nZURlZ3JlZShkZWdyZWUpO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmZXRjaFdlYXRoZXInLCAoKSA9PiB7XG4gIGNlbHNpdXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBmYWhyZW5oZWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmluaXNoRmV0Y2hXZWF0aGVyJywgKCkgPT4ge1xuICBjZWxzaXVzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGZhaHJlbmhlaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3ZnTG9hZGVkJywgKCkgPT4ge1xuICBsZXQgaWNvbiA9IGluZm8ucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkaXNwbGF5LCAnaWNvbicsIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gaWNvbjtcbiAgICB9LFxuICAgIHNldChzdmcpIHtcbiAgICAgIGljb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIHN2Zyk7XG4gICAgICBpY29uLnJlbW92ZSgpO1xuICAgICAgaWNvbiA9IHN2ZztcbiAgICB9LFxuICB9KTtcbn0pO1xuXG5PYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1trZXldO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGlzcGxheSwga2V5LCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9LFxuICB9KTtcbn0pO1xuXG5kaXNwbGF5LnNldCA9IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xuICBPYmplY3QuZW50cmllcyhwYXJhbXMpLmZvckVhY2goKFtwYXJhbSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKCFkaXNwbGF5W3BhcmFtXSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnZhbGlkIGRpc3BsYXkgZWxlbWVudCAnJHtwYXJhbX0nYCk7XG4gICAgZGlzcGxheVtwYXJhbV0gPSB2YWx1ZTtcbiAgfSk7XG59O1xuXG5kaXNwbGF5LnNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gIGljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3ZWF0aGVyLWljb24gc2tlbGV0b24nKTtcbiAgZGlzcGxheS5pY29uID0gaWNvbjtcbiAgZGlzcGxheS5jdXJyZW50SG91ciA9ICctLTotLSc7XG4gIGRpc3BsYXkudGVtcGVyYXR1cmUgPSAnLS0nO1xuICBkaXNwbGF5LmZlZWxzTGlrZSA9ICctJztcbiAgZGlzcGxheS5wcmVjaXBpdGF0aW9uID0gJy0nO1xuICBkaXNwbGF5Lmh1bWlkaXR5ID0gJy0nO1xuICBkaXNwbGF5LndpbmQgPSAnLSc7XG59O1xuIiwiaW1wb3J0IFN2Z0xvYWRlciBmcm9tICdAemVrdW1vcnUtZGV2L3N2Zy1sb2FkZXIvU3ZnTG9hZGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQVBJX0tFWVMgZnJvbSAnLi4vLmFwaS1rZXlzLmpzb24nO1xuaW1wb3J0IHdtb0ljb25Db252ZXJzaW9uIGZyb20gJy4vd21vLWljb24tY29udmVyc2lvbi5qc29uJztcblxuY29uc3QgV2VhdGhlciA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcblxuV2VhdGhlci5nZXQgPSBhc3luYyBmdW5jdGlvbiAoY2l0eSwgcGFyYW1zKSB7XG4gIGNvbnN0IHsgbGF0LCBsb24gfSA9IGF3YWl0IGdldENpdHlDb29yZChjaXR5KTtcblxuICBwYXJhbXMgPSB7XG4gICAgbGF0aXR1ZGU6IGxhdCxcbiAgICBsb25naXR1ZGU6IGxvbixcbiAgICBjdXJyZW50X3dlYXRoZXI6IHRydWUsXG4gICAgdGltZXpvbmU6ICdhdXRvJyxcbiAgICBob3VybHk6IFtcbiAgICAgICdhcHBhcmVudF90ZW1wZXJhdHVyZScsXG4gICAgICAndGVtcGVyYXR1cmVfMm0nLFxuICAgICAgJ3ByZWNpcGl0YXRpb24nLFxuICAgICAgJ3JlbGF0aXZlaHVtaWRpdHlfMm0nLFxuICAgICAgJ3dlYXRoZXJjb2RlJyxcbiAgICBdLFxuICAgIGRhaWx5OiBbXG4gICAgICAndGVtcGVyYXR1cmVfMm1fbWF4JyxcbiAgICAgICd0ZW1wZXJhdHVyZV8ybV9taW4nLFxuICAgICAgJ3ByZWNpcGl0YXRpb25fc3VtJyxcbiAgICAgICd3ZWF0aGVyY29kZScsXG4gICAgXSxcbiAgICAuLi5wYXJhbXMsXG4gIH07XG5cbiAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0LycsIHsgcGFyYW1zIH0pKS5kYXRhO1xufTtcblxuV2VhdGhlci5nZXRJY29uID0gYXN5bmMgZnVuY3Rpb24gKHdtbywgZGF5dGltZSA9IHRydWUpIHtcbiAgY29uc3QgdGltZSA9IChkYXl0aW1lKSA/ICd3ZWF0aGVyLWRheScgOiAnd2VhdGhlci1uaWdodCc7XG4gIHRyeSB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHt0aW1lfS8ke3dtb0ljb25Db252ZXJzaW9uW3dtb10uZnVsbH0uc3ZnYDtcbiAgICByZXR1cm4gYXdhaXQgU3ZnTG9hZGVyLmxvYWQocGF0aCwge1xuICAgICAgY29sb3JhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBpY29uIGZvciB3bW8gY29kZSAke3dtb31gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBsb2FkIGljb24gd2l0aCB3bW8gY29kZSAke3dtb31gKTtcbiAgICB9XG4gIH1cbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENpdHlDb29yZChjaXR5KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3QvP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVlTLm9wZW53ZWF0aGVybWFwfWApO1xuICBpZiAoIWRhdGEubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0NpdHkgbm90IGZvdW5kIScpO1xuICByZXR1cm4gZGF0YVswXTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVpbGRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9wX3dlYXRoZXJfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvcF93ZWF0aGVyX2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc196ZWt1bW9ydS1kZXZfc3ZnLWxvYWRlcl9TdmdMb2FkZXJfanMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9mb3JtYXRfaW4tNmIxMTlhXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9