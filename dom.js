const body = document.querySelector("body");
const header = document.createElement("header");
const content = document.createElement("div");
const headerText = document.createElement("h1");
const dataEntry = document.createElement("div");
const cityEntry = document.createElement("div");
const inputCity = document.createElement("input");
const submitCity = document.createElement("button");
const unitEntry = document.createElement("div");
const unitLabel = document.createElement("label");
const unitSelect = document.createElement("select");
const unitOptionUs = document.createElement("option");
const unitOptionMetric = document.createElement("option");
const unitOptionUk = document.createElement("option");

content.classList.add("content");
dataEntry.classList.add("data-entry");
cityEntry.classList.add("city-entry");
unitEntry.classList.add("unit-entry");

headerText.textContent = "Weathercheck";
inputCity.placeholder = "City";
submitCity.textContent = "Check weather";
unitLabel.textContent = "Choose units";
unitOptionUs.textContent = "US";
unitOptionMetric.textContent = "Metric";
unitOptionUk.textContent = "UK";

body.appendChild(header);
body.appendChild(content);
header.appendChild(headerText);
header.appendChild(dataEntry);
dataEntry.appendChild(cityEntry);
dataEntry.appendChild(unitEntry);
cityEntry.appendChild(inputCity);
cityEntry.appendChild(submitCity);
unitEntry.appendChild(unitLabel);
unitEntry.appendChild(unitSelect);
unitSelect.appendChild(unitOptionMetric);
unitSelect.appendChild(unitOptionUs);
unitSelect.appendChild(unitOptionUk);

function createCurrentWeatherContainer() {
  const weatherContainer = document.createElement("div");
  const currentInfoContainer = document.createElement("div");
  const infoHeader = document.createElement("div");
  const infoHeaderText = document.createElement("h2");
  const dataAndDescriptionContainer = document.createElement("div");
  const concreteDataContainer = document.createElement("div");
  const overallDescriptionContainer = document.createElement("div");
  const overallDescriptionText = document.createElement("h3");
  const timeContainer = document.createElement("div");
  const timeSpan = document.createElement("span");
  const localtimeEl = document.createElement("h2");
  const conditionsEl = document.createElement("p");
  const temperatureEl = document.createElement("h1");
  const windspeedContainer = document.createElement("div");
  const windspeedImg = document.createElement("img");
  const windspeedText = document.createElement("p");

  weatherContainer.classList.add("weather-container");
  currentInfoContainer.classList.add("current-info-container");
  infoHeader.classList.add("info-header");
  infoHeaderText.classList.add("info-header-text");
  dataAndDescriptionContainer.classList.add("data-and-description");
  concreteDataContainer.classList.add("concrete-data-container");
  overallDescriptionContainer.classList.add("overall-description-container");
  overallDescriptionText.classList.add("overall-description-text");
  timeContainer.classList.add("time-container");
  timeSpan.classList.add("time-span");
  localtimeEl.classList.add("localtime");
  conditionsEl.classList.add("conditions");
  temperatureEl.classList.add("temperature");
  windspeedContainer.classList.add("windspeed-container");
  windspeedImg.classList.add("windspeed-image");
  windspeedText.classList.add("windspeed-text");

  timeSpan.textContent = "Local time";
  windspeedImg.src = "./assets/wind.png";

  content.appendChild(weatherContainer);
  weatherContainer.appendChild(currentInfoContainer);
  currentInfoContainer.appendChild(infoHeader);
  currentInfoContainer.appendChild(dataAndDescriptionContainer);
  infoHeader.appendChild(infoHeaderText);
  dataAndDescriptionContainer.appendChild(concreteDataContainer);
  dataAndDescriptionContainer.appendChild(overallDescriptionContainer);
  overallDescriptionContainer.appendChild(overallDescriptionText);
  concreteDataContainer.appendChild(timeContainer);
  timeContainer.appendChild(timeSpan);
  timeContainer.appendChild(localtimeEl);
  concreteDataContainer.appendChild(conditionsEl);
  concreteDataContainer.appendChild(temperatureEl);
  concreteDataContainer.appendChild(windspeedContainer);
  windspeedContainer.appendChild(windspeedImg);
  windspeedContainer.appendChild(windspeedText);

  return weatherContainer;
}

function createUpcomingWeatherContainer() {
  const weatherContainer = document.querySelector(".weather-container");
  const futureInfoContainer = document.createElement("div");
  const condTempDate = document.createElement("div");
  const conditionsContainer = document.createElement("div");
  const conditionsImage = document.createElement("img");
  const tempWindContainer = document.createElement("div");
  const tempRange = document.createElement("h1");
  const windspeedContainer = document.createElement("div");
  const windspeedImg = document.createElement("img");
  const windspeedText = document.createElement("h3");
  const dateContainer = document.createElement("div");
  const dayText = document.createElement("h1");
  const dateText = document.createElement("p");

  futureInfoContainer.classList.add("future-info-container");
  condTempDate.classList.add("cond-temp-date");
  conditionsContainer.classList.add("conditions-container");
  conditionsImage.classList.add("conditions-image");
  tempWindContainer.classList.add("temp-wind-container");
  tempRange.classList.add("temp-range");
  windspeedContainer.classList.add("day-windspeed");
  windspeedImg.classList.add("day-windspeed-image");
  windspeedText.classList.add("day-windspeed-text");
  dateContainer.classList.add("date-container");
  dayText.classList.add("day-text");
  dateText.classList.add("date-text");

  windspeedImg.src = "./assets/wind.png";

  futureInfoContainer.appendChild(condTempDate);
  condTempDate.appendChild(conditionsContainer);
  condTempDate.appendChild(tempWindContainer);
  condTempDate.appendChild(dateContainer);
  conditionsContainer.appendChild(conditionsImage);
  tempWindContainer.appendChild(tempRange);
  tempWindContainer.appendChild(windspeedContainer);
  windspeedContainer.appendChild(windspeedImg);
  windspeedContainer.appendChild(windspeedText);
  dateContainer.appendChild(dayText);
  dateContainer.appendChild(dateText);
  weatherContainer.appendChild(futureInfoContainer);

  return futureInfoContainer;
}
