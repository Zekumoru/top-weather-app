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

  return (await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('https://api.open-meteo.com/v1/forecast', { params })).data;
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
  const { data } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: _api_keys_json__WEBPACK_IMPORTED_MODULE_2__.openweathermap,
    },
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxh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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9DYXJkLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL0NhcmRzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9DdXJyZW50V2VhdGhlckRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvV2VhdGhlci5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTFhO1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG5tYWluID4gc2VjdGlvbiB7XFxuICBtYXJnaW46IDE2cHggMDtcXG59XFxuXFxuLnNrZWxldG9uIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGFuaW1hdGlvbjogc2tlbGV0b24tbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uLnNrZWxldG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbnNwYW4uc2tlbGV0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5pbmZvIHNwYW4uc2tlbGV0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBza2VsZXRvbi1sb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzMCUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNDUlKTtcXG4gIH1cXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDE2cHggMDtcXG59XFxuXFxuLm1haW4taGVhZGVyIC5sb2dvLWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi8qIFNFQVJDSCBCQVIgKi9cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyOmZvY3VzLXdpdGhpbiB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkLFxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkICsgLnNlYXJjaCxcXG4jc2VhcmNoLWJhcjpoYXMoOmRpc2FibGVkKSB7XFxuICBjdXJzb3I6IHdhaXQ7XFxufVxcblxcbiNzZWFyY2gtYmFyIC5zZWFyY2gge1xcbiAgd2lkdGg6IDAuOWVtO1xcbiAgaGVpZ2h0OiAwLjllbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1iYXIgaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWJhciBpbnB1dDpkaXNhYmxlZCB7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuXFxuLyogV0VBVEhFUiBJTkZPICovXFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xcbiAgI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICB9XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZGVncmVlcyB7XFxuICBmb250LXNpemU6IDAuNmVtO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZGVncmVlcyA6ZGlzYWJsZWQge1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBjdXJzb3I6IHdhaXQ7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZGVncmVlcyAuc2VsZWN0ZWQge1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAucGlwZS1ib3JkZXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5leHRyYSA+IHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcXG4gIGdhcDogMTZweDtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLmV4dHJhIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBjb2x1bW4tZ2FwOiA4cHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi8qIE1BSU4gKi9cXG5cXG5oMiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbiNob3VybHktd2VhdGhlcixcXG4jZGFpbHktd2VhdGhlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmNhcmRzID4gbGkge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAyNDBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY2FyZHMgLnRpbWUsXFxuLmNhcmRzIC5kYXkge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmNhcmRzIC53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jYXJkcyAuaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmNhcmRzIC5pbmZvID4gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY2FyZHMgLmluZm8gLmljb24ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5jYXJkcyAucHJlY2lwaXRhdGlvbiArIC51bml0IHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG5cXG4uY2FyZHMgLmxvdy10ZW1wZXJhdHVyZSB7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLm1haW4tZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciBzZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgLmxvZ28ge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLm1haW4tZm9vdGVyIGgzIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIC5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciAubG9nby1pY29uIHtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxufVxcblxcbi5jcmVkaXRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY3JlZGl0cyBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY3JlZGl0cyAuaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBERVNLVE9QICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZXh0cmEgPiB1bCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSwyREFBMkQ7RUFDN0Q7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTFhO1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbm1haW4ge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG5tYWluID4gc2VjdGlvbiB7XFxuICBtYXJnaW46IDE2cHggMDtcXG59XFxuXFxuLnNrZWxldG9uIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGFuaW1hdGlvbjogc2tlbGV0b24tbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uLnNrZWxldG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbnNwYW4uc2tlbGV0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5pbmZvIHNwYW4uc2tlbGV0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBza2VsZXRvbi1sb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzMCUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNDUlKTtcXG4gIH1cXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDE2cHggMDtcXG59XFxuXFxuLm1haW4taGVhZGVyIC5sb2dvLWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi8qIFNFQVJDSCBCQVIgKi9cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNzZWFyY2gtYmFyOmZvY3VzLXdpdGhpbiB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkLFxcbiNzZWFyY2gtYmFyIGlucHV0OmRpc2FibGVkICsgLnNlYXJjaCxcXG4jc2VhcmNoLWJhcjpoYXMoOmRpc2FibGVkKSB7XFxuICBjdXJzb3I6IHdhaXQ7XFxufVxcblxcbiNzZWFyY2gtYmFyIC5zZWFyY2gge1xcbiAgd2lkdGg6IDAuOWVtO1xcbiAgaGVpZ2h0OiAwLjllbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1iYXIgaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWJhciBpbnB1dDpkaXNhYmxlZCB7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuXFxuLyogV0VBVEhFUiBJTkZPICovXFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xcbiAgI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICB9XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZGVncmVlcyB7XFxuICBmb250LXNpemU6IDAuNmVtO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZGVncmVlcyA6ZGlzYWJsZWQge1xcbiAgY29sb3I6ICM2MDYwNjA7XFxuICBjdXJzb3I6IHdhaXQ7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZGVncmVlcyAuc2VsZWN0ZWQge1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAucGlwZS1ib3JkZXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kaXNwbGF5IC5leHRyYSA+IHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcXG4gIGdhcDogMTZweDtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWRpc3BsYXkgLmV4dHJhIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBjb2x1bW4tZ2FwOiA4cHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi8qIE1BSU4gKi9cXG5cXG5oMiB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbiNob3VybHktd2VhdGhlcixcXG4jZGFpbHktd2VhdGhlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmNhcmRzID4gbGkge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAyNDBweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY2FyZHMgLnRpbWUsXFxuLmNhcmRzIC5kYXkge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmNhcmRzIC53ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jYXJkcyAuaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmNhcmRzIC5pbmZvID4gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY2FyZHMgLmluZm8gLmljb24ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5jYXJkcyAucHJlY2lwaXRhdGlvbiArIC51bml0IHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG5cXG4uY2FyZHMgLmxvdy10ZW1wZXJhdHVyZSB7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuLm1haW4tZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciBzZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgLmxvZ28ge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLm1haW4tZm9vdGVyIGgzIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIC5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5tYWluLWZvb3RlciAubG9nby1pY29uIHtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxufVxcblxcbi5jcmVkaXRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY3JlZGl0cyBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY3JlZGl0cyAuaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBERVNLVE9QICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICNjdXJyZW50LXdlYXRoZXItZGlzcGxheSAuZXh0cmEgPiB1bCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJ0B6ZWt1bW9ydS1kZXYvc3ZnLWxvYWRlci9TdmdMb2FkZXInO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFNjcm9sbEJvb3N0ZXIgZnJvbSAnc2Nyb2xsYm9vc3Rlcic7XG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL3NjcmlwdHMvV2VhdGhlcic7XG5pbXBvcnQgQ3VycmVudFdlYXRoZXJEaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9DdXJyZW50V2VhdGhlckRpc3BsYXknO1xuaW1wb3J0IENhcmRzRGlzcGxheSBmcm9tICcuL3NjcmlwdHMvQ2FyZHNEaXNwbGF5JztcbmltcG9ydCBDYXJkIGZyb20gJy4vc2NyaXB0cy9DYXJkJztcblxuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5jb25zdCBob3VybHlEaXNwbGF5ID0gbmV3IENhcmRzRGlzcGxheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmx5LXdlYXRoZXInKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJseS13ZWF0aGVyID4gLmNhcmRzJykpO1xuY29uc3QgZGFpbHlEaXNwbGF5ID0gbmV3IENhcmRzRGlzcGxheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFpbHktd2VhdGhlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFpbHktd2VhdGhlciA+IC5jYXJkcycpKTtcbmxldCBsb2FkaW5nID0gZmFsc2U7XG5cbmhvdXJseURpc3BsYXkuc2hvd0xvYWRpbmcoKTtcbmRhaWx5RGlzcGxheS5zaG93TG9hZGluZygpO1xuXG5DdXJyZW50V2VhdGhlckRpc3BsYXkub25DaGFuZ2VEZWdyZWUgPSBzdWJtaXQ7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01TdmdMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IENhcmQubG9hZEljb25zKCk7XG5cbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdWJtaXQoKSk7XG5cbiAgc2VhcmNoLmNsaWNrKCk7XG59KTtcblxuY2l0eS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY2l0eS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIHN1Ym1pdCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY2l0eS52YWx1ZSkge1xuICAgIGNpdHkuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIGNpdHkhJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2l0eS5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0KCkge1xuICBpZiAobG9hZGluZykgcmV0dXJuO1xuICBpZiAoIWNpdHkudmFsdWUpIHtcbiAgICBjaXR5LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSBjaXR5IScpO1xuICAgIGNpdHkucmVwb3J0VmFsaWRpdHkoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaXR5LmRpc2FibGVkID0gdHJ1ZTtcbiAgbG9hZGluZyA9IHRydWU7XG4gIGNpdHkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2ZldGNoV2VhdGhlcicsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gIEN1cnJlbnRXZWF0aGVyRGlzcGxheS5zaG93TG9hZGluZygpO1xuICBob3VybHlEaXNwbGF5LnNob3dMb2FkaW5nKCk7XG4gIGRhaWx5RGlzcGxheS5zaG93TG9hZGluZygpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IFdlYXRoZXIuZ2V0KGNpdHkudmFsdWUsIHtcbiAgICAgIHRlbXBlcmF0dXJlX3VuaXQ6IEN1cnJlbnRXZWF0aGVyRGlzcGxheS50ZW1wZXJhdHVyZVVuaXQsXG4gICAgfSk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBzZXRDdXJyZW50V2VhdGhlckRpc3BsYXkod2VhdGhlciksXG4gICAgICBzZXRIb3VybHlXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSxcbiAgICAgIHNldERhaWx5V2VhdGhlckRpc3BsYXkod2VhdGhlciksXG4gICAgXSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY2l0eS5zZXRDdXN0b21WYWxpZGl0eShlcnJvci5tZXNzYWdlKTtcbiAgICBjaXR5LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNpdHkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBjaXR5LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdmaW5pc2hGZXRjaFdlYXRoZXInLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRDdXJyZW50V2VhdGhlckRpc3BsYXkod2VhdGhlcikge1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyO1xuICBjb25zdCBjdXJyZW50SW5kZXggPSB3ZWF0aGVyLmhvdXJseS50aW1lLmluZGV4T2YoY3VycmVudFdlYXRoZXIudGltZSk7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoY3VycmVudFdlYXRoZXIudGltZSk7XG5cbiAgQ3VycmVudFdlYXRoZXJEaXNwbGF5LnNldCh7XG4gICAgaWNvbjogYXdhaXQgV2VhdGhlci5nZXRJY29uKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJjb2RlLCBpc0RheXRpbWUoY3VycmVudFRpbWUpKSxcbiAgICBjdXJyZW50SG91cjogZm9ybWF0KGN1cnJlbnRUaW1lLCAncCcpLFxuICAgIHRlbXBlcmF0dXJlOiBjdXJyZW50V2VhdGhlci50ZW1wZXJhdHVyZSxcbiAgICBmZWVsc0xpa2U6IHdlYXRoZXIuaG91cmx5LmFwcGFyZW50X3RlbXBlcmF0dXJlW2N1cnJlbnRJbmRleF0sXG4gICAgcHJlY2lwaXRhdGlvbjogd2VhdGhlci5ob3VybHkucHJlY2lwaXRhdGlvbltjdXJyZW50SW5kZXhdLFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyLmhvdXJseS5yZWxhdGl2ZWh1bWlkaXR5XzJtW2N1cnJlbnRJbmRleF0sXG4gICAgd2luZDogY3VycmVudFdlYXRoZXIud2luZHNwZWVkLFxuICB9KTtcblxuICBDdXJyZW50V2VhdGhlckRpc3BsYXkuaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXItaWNvbicpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRIb3VybHlXZWF0aGVyRGlzcGxheSh3ZWF0aGVyKSB7XG4gIGNvbnN0IHsgdGltZSwgd2VhdGhlcmNvZGUsIHByZWNpcGl0YXRpb24gfSA9IHdlYXRoZXIuaG91cmx5O1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXIuaG91cmx5LnRlbXBlcmF0dXJlXzJtO1xuXG4gIGNvbnN0IGNhcmRzID0gW107XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSB3ZWF0aGVyLmhvdXJseS50aW1lLmluZGV4T2Yod2VhdGhlci5jdXJyZW50X3dlYXRoZXIudGltZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gc3RhcnRJbmRleCArIGk7XG5cbiAgICBjYXJkcy5wdXNoKChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0ID0gbmV3IERhdGUodGltZVtpbmRleF0pO1xuICAgICAgY29uc3QgaWNvbiA9IGF3YWl0IFdlYXRoZXIuZ2V0SWNvbih3ZWF0aGVyY29kZVtpbmRleF0sIGlzRGF5dGltZSh0KSk7XG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pY29uJyk7XG5cbiAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpY29uLCBmb3JtYXQodCwgJ3AnKSwgbnVsbCk7XG4gICAgICBjYXJkLmFkZFRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlW2luZGV4XSk7XG4gICAgICBjYXJkLmFkZFByZWNpcGl0YXRpb24ocHJlY2lwaXRhdGlvbltpbmRleF0pO1xuXG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9KSgpKTtcbiAgfVxuXG4gIGhvdXJseURpc3BsYXkucmVuZGVyKGF3YWl0IFByb21pc2UuYWxsKGNhcmRzKSk7XG4gIG5ldyBTY3JvbGxCb29zdGVyKHtcbiAgICB2aWV3cG9ydDogaG91cmx5RGlzcGxheS52aWV3cG9ydCxcbiAgICBjb250ZW50OiBob3VybHlEaXNwbGF5LmNvbnRlbnQsXG4gICAgc2Nyb2xsTW9kZTogJ3RyYW5zZm9ybScsXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgZW11bGF0ZVNjcm9sbDogdHJ1ZSxcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldERhaWx5V2VhdGhlckRpc3BsYXkod2VhdGhlcikge1xuICBjb25zdCB7IHRpbWUsIHdlYXRoZXJjb2RlIH0gPSB3ZWF0aGVyLmRhaWx5O1xuICBjb25zdCBoaWdoVGVtcGVyYXR1cmUgPSB3ZWF0aGVyLmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heDtcbiAgY29uc3QgbG93VGVtcGVyYXR1cmUgPSB3ZWF0aGVyLmRhaWx5LnRlbXBlcmF0dXJlXzJtX21pbjtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IHdlYXRoZXIuZGFpbHkucHJlY2lwaXRhdGlvbl9zdW07XG5cbiAgY29uc3QgY2FyZHMgPSBbXTtcbiAgdGltZS5mb3JFYWNoKCh0aW1lLCBpbmRleCkgPT4ge1xuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBjYXJkcy5wdXNoKChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBpY29uID0gYXdhaXQgV2VhdGhlci5nZXRJY29uKHdlYXRoZXJjb2RlW2luZGV4XSk7XG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pY29uJyk7XG5cbiAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpY29uLCBmb3JtYXQodGltZSwgJ2VlZScpLCBudWxsKTtcbiAgICAgIGNhcmQuYWRkSGlnaExvd1RlbXBlcmF0dXJlKGhpZ2hUZW1wZXJhdHVyZVtpbmRleF0sIGxvd1RlbXBlcmF0dXJlW2luZGV4XSk7XG4gICAgICBjYXJkLmFkZFByZWNpcGl0YXRpb24ocHJlY2lwaXRhdGlvbltpbmRleF0pO1xuXG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9KSgpKTtcbiAgfSk7XG5cbiAgZGFpbHlEaXNwbGF5LnJlbmRlcihhd2FpdCBQcm9taXNlLmFsbChjYXJkcykpO1xuICBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgdmlld3BvcnQ6IGRhaWx5RGlzcGxheS52aWV3cG9ydCxcbiAgICBjb250ZW50OiBkYWlseURpc3BsYXkuY29udGVudCxcbiAgICBzY3JvbGxNb2RlOiAndHJhbnNmb3JtJyxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBlbXVsYXRlU2Nyb2xsOiB0cnVlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNEYXl0aW1lKHRpbWUpIHtcbiAgcmV0dXJuIHRpbWUuZ2V0SG91cnMoKSA+PSA2ICYmIHRpbWUuZ2V0SG91cnMoKSA8IDE4O1xufVxuIiwiaW1wb3J0IFN2Z0xvYWRlciBmcm9tICdAemVrdW1vcnUtZGV2L3N2Zy1sb2FkZXIvU3ZnTG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIHN0YXRpYyAjVEVNUEVSQVRVUkVfSUNPTjtcbiAgc3RhdGljICNQUkVDSVBJVEFUSU9OX0lDT047XG5cbiAgaWNvbjtcbiAgdGltZTtcbiAgaW5mb0xpc3Q7XG5cbiAgY29uc3RydWN0b3IoaWNvbiwgdGltZSkge1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmluZm9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0aGlzLmluZm9MaXN0LmNsYXNzTmFtZSA9ICdpbmZvJztcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBsb2FkSWNvbnMoKSB7XG4gICAgaWYgKENhcmQuI1RFTVBFUkFUVVJFX0lDT04pIHJldHVybjtcbiAgICBDYXJkLiNURU1QRVJBVFVSRV9JQ09OID0gYXdhaXQgU3ZnTG9hZGVyLmxvYWQoJ2ltYWdlcy90ZW1wZXJhdHVyZS5zdmcnLCB7IGNvbG9yYWJsZTogdHJ1ZSwgY2xhc3M6ICdpY29uJyB9KTtcbiAgICBDYXJkLiNQUkVDSVBJVEFUSU9OX0lDT04gPSBhd2FpdCBTdmdMb2FkZXIubG9hZCgnaW1hZ2VzL3ByZWNpcGl0YXRpb24uc3ZnJywgeyBjb2xvcmFibGU6IHRydWUsIGNsYXNzOiAnaWNvbicgfSk7XG4gIH1cblxuICBhZGRUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSkge1xuICAgIGNvbnN0IGxpID0gdGhpcy4jY3JlYXRlSW5mbyhDYXJkLiNURU1QRVJBVFVSRV9JQ09OLCAnPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidW5pdFwiPsKwPC9zcGFuPjwvc3Bhbj4nKTtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcubnVtYmVyJykudGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZTtcbiAgICB0aGlzLmluZm9MaXN0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGxpKTtcbiAgfVxuXG4gIGFkZEhpZ2hMb3dUZW1wZXJhdHVyZShoaWdoLCBsb3cpIHtcbiAgICBjb25zdCBsaSA9IHRoaXMuI2NyZWF0ZUluZm8oQ2FyZC4jVEVNUEVSQVRVUkVfSUNPTiwgJzxzcGFuIGNsYXNzPVwiaGlnaC10ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+MTM8L3NwYW4+PHNwYW4gY2xhc3M9XCJ1bml0XCI+wrA8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cImxvdy10ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwibnVtYmVyXCI+ODwvc3Bhbj48c3BhbiBjbGFzcz1cInVuaXRcIj7CsDwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgbGkucXVlcnlTZWxlY3RvcignLmhpZ2gtdGVtcGVyYXR1cmUgLm51bWJlcicpLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcihoaWdoKTtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcubG93LXRlbXBlcmF0dXJlIC5udW1iZXInKS50ZXh0Q29udGVudCA9IE1hdGguZmxvb3IobG93KTtcbiAgICB0aGlzLmluZm9MaXN0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGxpKTtcbiAgfVxuXG4gIGFkZFByZWNpcGl0YXRpb24ocHJlY2lwaXRhdGlvbikge1xuICAgIGNvbnN0IGxpID0gdGhpcy4jY3JlYXRlSW5mbyhDYXJkLiNQUkVDSVBJVEFUSU9OX0lDT04sICc8c3BhbiBjbGFzcz1cInByZWNpcGl0YXRpb25cIj4wLjI8L3NwYW4+IDxzcGFuIGNsYXNzPVwidW5pdFwiPm1tPC9zcGFuPicpO1xuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXBpdGF0aW9uJykudGV4dENvbnRlbnQgPSBwcmVjaXBpdGF0aW9uO1xuICAgIHRoaXMuaW5mb0xpc3QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBsaSk7XG4gIH1cblxuICAjY3JlYXRlSW5mbyhpY29uLCBjb250ZW50KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmFwcGVuZENoaWxkKGljb24uY2xvbmVOb2RlKHRydWUpKTtcbiAgICBsaS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvbnRlbnQpO1xuICAgIHJldHVybiBsaTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAjdmlld3BvcnQ7XG4gICNjb250ZW50O1xuXG4gIGNvbnN0cnVjdG9yKHZpZXdwb3J0LCBjb250ZW50KSB7XG4gICAgdGhpcy4jdmlld3BvcnQgPSB2aWV3cG9ydDtcbiAgICB0aGlzLiNjb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldCB2aWV3cG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlld3BvcnQ7XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29udGVudDtcbiAgfVxuXG4gIGFwcGVuZChjYXJkKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoY2FyZC5pY29uKTtcbiAgICBsaS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8cCBjbGFzcz1cInRpbWVcIj48L3A+Jyk7XG4gICAgbGkucXVlcnlTZWxlY3RvcignLnRpbWUnKS50ZXh0Q29udGVudCA9IGNhcmQudGltZTtcbiAgICBsaS5hcHBlbmRDaGlsZChjYXJkLmluZm9MaXN0KTtcblxuICAgIHRoaXMuI2NvbnRlbnQuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG5cbiAgcmVuZGVyKGNhcmRzKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIGNhcmRzLmZvckVhY2godGhpcy5hcHBlbmQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLiNjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgIDxzdmcgY2xhc3M9XCJ3ZWF0aGVyLWljb24gc2tlbGV0b25cIiAvPlxuICAgICAgPHAgY2xhc3M9XCJkYXlcIj48c3BhbiBjbGFzcz1cInNrZWxldG9uXCI+PC9zcGFuPjwvcD5cbiAgICAgIDx1bCBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwic2tlbGV0b25cIj48L3NwYW4+PC9saT5cbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwic2tlbGV0b25cIj48L3NwYW4+PC9saT5cbiAgICAgIDwvdWw+YDtcblxuICAgIHRoaXMuI2NvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4jY29udGVudC5jbG9uZU5vZGUoKTtcbiAgICBjb250ZW50LnN0eWxlID0gJyc7XG4gICAgdGhpcy4jY29udGVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgY29udGVudCk7XG4gICAgdGhpcy4jY29udGVudC5yZW1vdmUoKTtcbiAgICB0aGlzLiNjb250ZW50ID0gY29udGVudDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy4jY29udGVudC5hcHBlbmRDaGlsZChsaS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgZGlzcGxheSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcblxuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXItZGlzcGxheScpO1xuY29uc3QgZWxlbWVudHMgPSB7XG4gIGN1cnJlbnRIb3VyOiBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWhvdXInKSxcbiAgdGVtcGVyYXR1cmU6IGluZm8ucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlID4gLm51bWJlcicpLFxuICBmZWVsc0xpa2U6IGluZm8ucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UgPiAubnVtYmVyJyksXG4gIHByZWNpcGl0YXRpb246IGluZm8ucXVlcnlTZWxlY3RvcignLnByZWNpcGl0YXRpb24nKSxcbiAgaHVtaWRpdHk6IGluZm8ucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JyksXG4gIHdpbmQ6IGluZm8ucXVlcnlTZWxlY3RvcignLndpbmQnKSxcbn07XG5cbmNvbnN0IGRlZ3JlZXMgPSBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy5kZWdyZWVzJyk7XG5jb25zdCBjZWxzaXVzQnV0dG9uID0gZGVncmVlcy5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2Vsc2l1cycpO1xuY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRlZ3JlZXMucXVlcnlTZWxlY3RvcignYnV0dG9uLmZhaHJlbmhlaXQnKTtcblxubGV0IHRlbXBlcmF0dXJlVW5pdCA9ICdjZWxzaXVzJztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShkaXNwbGF5LCAndGVtcGVyYXR1cmVVbml0Jywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRlbXBlcmF0dXJlVW5pdDtcbiAgfSxcbn0pO1xuXG5jZWxzaXVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhbmdlRGVncmVlKGNlbHNpdXNCdXR0b24sICdjZWxzaXVzJykpO1xuZmFocmVuaGVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZURlZ3JlZShmYWhyZW5oZWl0QnV0dG9uLCAnZmFocmVuaGVpdCcpKTtcblxuZnVuY3Rpb24gY2hhbmdlRGVncmVlKGJ1dHRvbiwgZGVncmVlKSB7XG4gIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSBkZWdyZWVzLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICBpZiAocHJldmlvdXNTZWxlY3RlZCA9PT0gYnV0dG9uKSByZXR1cm47XG5cbiAgcHJldmlvdXNTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgdGVtcGVyYXR1cmVVbml0ID0gZGVncmVlO1xuXG4gIGlmICh0eXBlb2YgZGlzcGxheS5vbkNoYW5nZURlZ3JlZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRpc3BsYXkub25DaGFuZ2VEZWdyZWUoZGVncmVlKTtcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2hXZWF0aGVyJywgKCkgPT4ge1xuICBjZWxzaXVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbmlzaEZldGNoV2VhdGhlcicsICgpID0+IHtcbiAgY2Vsc2l1c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBmYWhyZW5oZWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN2Z0xvYWRlZCcsICgpID0+IHtcbiAgbGV0IGljb24gPSBpbmZvLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWljb24nKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGlzcGxheSwgJ2ljb24nLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGljb247XG4gICAgfSxcbiAgICBzZXQoc3ZnKSB7XG4gICAgICBpY29uLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBzdmcpO1xuICAgICAgaWNvbi5yZW1vdmUoKTtcbiAgICAgIGljb24gPSBzdmc7XG4gICAgfSxcbiAgfSk7XG59KTtcblxuT2JqZWN0LmtleXMoZWxlbWVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNba2V5XTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRpc3BsYXksIGtleSwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnRleHRDb250ZW50O1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfSxcbiAgfSk7XG59KTtcblxuZGlzcGxheS5zZXQgPSBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcbiAgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChbcGFyYW0sIHZhbHVlXSkgPT4ge1xuICAgIGlmICghZGlzcGxheVtwYXJhbV0pIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBkaXNwbGF5IGVsZW1lbnQgJyR7cGFyYW19J2ApO1xuICAgIGRpc3BsYXlbcGFyYW1dID0gdmFsdWU7XG4gIH0pO1xufTtcblxuZGlzcGxheS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2VhdGhlci1pY29uIHNrZWxldG9uJyk7XG4gIGRpc3BsYXkuaWNvbiA9IGljb247XG4gIGRpc3BsYXkuY3VycmVudEhvdXIgPSAnLS06LS0nO1xuICBkaXNwbGF5LnRlbXBlcmF0dXJlID0gJy0tJztcbiAgZGlzcGxheS5mZWVsc0xpa2UgPSAnLSc7XG4gIGRpc3BsYXkucHJlY2lwaXRhdGlvbiA9ICctJztcbiAgZGlzcGxheS5odW1pZGl0eSA9ICctJztcbiAgZGlzcGxheS53aW5kID0gJy0nO1xufTtcbiIsImltcG9ydCBTdmdMb2FkZXIgZnJvbSAnQHpla3Vtb3J1LWRldi9zdmctbG9hZGVyL1N2Z0xvYWRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEFQSV9LRVlTIGZyb20gJy4uLy5hcGkta2V5cy5qc29uJztcbmltcG9ydCB3bW9JY29uQ29udmVyc2lvbiBmcm9tICcuL3dtby1pY29uLWNvbnZlcnNpb24uanNvbic7XG5cbmNvbnN0IFdlYXRoZXIgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG5cbldlYXRoZXIuZ2V0ID0gYXN5bmMgZnVuY3Rpb24gKGNpdHksIHBhcmFtcykge1xuICBjb25zdCB7IGxhdCwgbG9uIH0gPSBhd2FpdCBnZXRDaXR5Q29vcmQoY2l0eSk7XG5cbiAgcGFyYW1zID0ge1xuICAgIGxhdGl0dWRlOiBsYXQsXG4gICAgbG9uZ2l0dWRlOiBsb24sXG4gICAgY3VycmVudF93ZWF0aGVyOiB0cnVlLFxuICAgIHRpbWV6b25lOiAnYXV0bycsXG4gICAgaG91cmx5OiBbXG4gICAgICAnYXBwYXJlbnRfdGVtcGVyYXR1cmUnLFxuICAgICAgJ3RlbXBlcmF0dXJlXzJtJyxcbiAgICAgICdwcmVjaXBpdGF0aW9uJyxcbiAgICAgICdyZWxhdGl2ZWh1bWlkaXR5XzJtJyxcbiAgICAgICd3ZWF0aGVyY29kZScsXG4gICAgXSxcbiAgICBkYWlseTogW1xuICAgICAgJ3RlbXBlcmF0dXJlXzJtX21heCcsXG4gICAgICAndGVtcGVyYXR1cmVfMm1fbWluJyxcbiAgICAgICdwcmVjaXBpdGF0aW9uX3N1bScsXG4gICAgICAnd2VhdGhlcmNvZGUnLFxuICAgIF0sXG4gICAgLi4ucGFyYW1zLFxuICB9O1xuXG4gIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdCcsIHsgcGFyYW1zIH0pKS5kYXRhO1xufTtcblxuV2VhdGhlci5nZXRJY29uID0gYXN5bmMgZnVuY3Rpb24gKHdtbywgZGF5dGltZSA9IHRydWUpIHtcbiAgY29uc3QgdGltZSA9IChkYXl0aW1lKSA/ICd3ZWF0aGVyLWRheScgOiAnd2VhdGhlci1uaWdodCc7XG4gIHRyeSB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHt0aW1lfS8ke3dtb0ljb25Db252ZXJzaW9uW3dtb10uZnVsbH0uc3ZnYDtcbiAgICByZXR1cm4gYXdhaXQgU3ZnTG9hZGVyLmxvYWQocGF0aCwge1xuICAgICAgY29sb3JhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBpY29uIGZvciB3bW8gY29kZSAke3dtb31gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBsb2FkIGljb24gd2l0aCB3bW8gY29kZSAke3dtb31gKTtcbiAgICB9XG4gIH1cbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENpdHlDb29yZChjaXR5KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3QnLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBxOiBjaXR5LFxuICAgICAgYXBwaWQ6IEFQSV9LRVlTLm9wZW53ZWF0aGVybWFwLFxuICAgIH0sXG4gIH0pO1xuICBpZiAoIWRhdGEubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0NpdHkgbm90IGZvdW5kIScpO1xuICByZXR1cm4gZGF0YVswXTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVpbGRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9wX3dlYXRoZXJfYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvcF93ZWF0aGVyX2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc196ZWt1bW9ydS1kZXZfc3ZnLWxvYWRlcl9TdmdMb2FkZXJfanMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9mb3JtYXRfaW4tNmIxMTlhXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9