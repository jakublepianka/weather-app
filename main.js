async function getCityInfo(city = "Warsaw", unit = "metric") {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit.toLowerCase()}&key=CRPV2TCZ7LKD4S3PXEBG8ACUJ&contentType=json`;
    response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Oops", error);
  }
}

function getLocaltime(timezone) {
  const dateOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZone: timezone,
  };
  const formatter = new Intl.DateTimeFormat("en-US", dateOptions);
  return formatter.format(new Date());
}

function transformObject(infoObj) {
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const days = [];

  for (const day of infoObj.days.splice(1, 14)) {
    days.push({
      dayName: dayNames[new Date(day.datetime).getDay()],
      date: new Date(day.datetime)
        .toLocaleDateString("en-UK")
        .split("/")
        .splice(0, 2)
        .join("/"),
      tempmin: day.tempmin,
      tempmax: day.tempmax,
      description: day.conditions,
      windspeed: day.windspeed,
    });
  }

  return {
    location: infoObj.resolvedAddress,
    localTime: getLocaltime(infoObj.timezone),
    temperature: infoObj.currentConditions.temp,
    pressure: infoObj.currentConditions.pressure,
    snow: infoObj.currentConditions.snow,
    windspeed: infoObj.currentConditions.windspeed,
    description: infoObj.description,
    conditions: infoObj.currentConditions.conditions,
    days: days,
  };
}

function chooseCurrentWeatherImage(conditions) {
  const word = conditions.split(" ").join("").toLowerCase();

  switch (true) {
    case word.includes("storm"):
      return "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('./assets/storm.jpg') no-repeat top / cover";
    case word.includes("snow"):
      return "url('./assets/snow.jpg') no-repeat top / cover";
    case word.includes("rain"):
      return "url('./assets/rain.jpg') no-repeat top / cover";
    case word.includes("cloud") || word.includes("overcast"):
      return "url('./assets/cloud.jpg') no-repeat bottom / cover";
    case word.includes("clear"):
      return "url('./assets/sun.jpg') no-repeat top / cover";
    default:
      return "url('./assets/cloud.jpg') no-repeat bottom / cover";
  }
}

function chooseFutureWeatherIcon(conditions) {
  const word = conditions.split(" ").join("").toLowerCase();

  switch (true) {
    case word.includes("storm"):
      return "./assets/storm.png";
    case word.includes("snow"):
      return "./assets/snow.png";
    case word.includes("rain"):
      return "./assets/rain.png";
    case word.includes("cloud"):
      return "./assets/cloud.png";
    case word.includes("clear"):
      return "./assets/sun.png";
    default:
      return "./assets/cloud.png";
  }
}

function loadCurrentWeather(weatherObj) {
  let speedUnit;
  let tempUnit;

  switch (true) {
    case header.querySelector("select").value === "US":
      speedUnit = " mph";
      tempUnit = " F°";
      break;
    case header.querySelector("select").value === "Metric":
      speedUnit = " km/h";
      tempUnit = " C°";
      break;
    case header.querySelector("select").value === "UK":
      speedUnit = " mph";
      tempUnit = " C°";
      break;
  }

  const weatherContainer = createCurrentWeatherContainer();
  weatherContainer.querySelector(".current-info-container").style.background =
    chooseCurrentWeatherImage(weatherObj.conditions);
  weatherContainer.querySelector(".info-header-text").textContent =
    weatherObj.location;
  weatherContainer.querySelector(".overall-description-text").textContent =
    weatherObj.description;
  weatherContainer.querySelector(".localtime").textContent =
    weatherObj.localTime;
  weatherContainer.querySelector(".conditions").textContent =
    weatherObj.conditions;
  weatherContainer.querySelector(".temperature").textContent =
    weatherObj.temperature + tempUnit;
  weatherContainer.querySelector(".windspeed-text").textContent =
    weatherObj.windspeed + speedUnit;
}

function loadUpcomingWeather(upcomingDays) {
  let speedUnit;
  let tempUnit;

  switch (true) {
    case header.querySelector("select").value === "US":
      speedUnit = " mph";
      tempUnit = " F°";
      break;
    case header.querySelector("select").value === "Metric":
      speedUnit = " km/h";
      tempUnit = " C°";
      break;
    case header.querySelector("select").value === "UK":
      speedUnit = " mph";
      tempUnit = " C°";
      break;
  }

  upcomingDays.forEach((day) => {
    const container = createUpcomingWeatherContainer(day.date);
    container.querySelector(".conditions-image").src = chooseFutureWeatherIcon(
      day.description
    );
    container.querySelector(
      ".temp-range"
    ).textContent = `${day.tempmin} - ${day.tempmax}${tempUnit}`;
    container.querySelector(
      ".day-windspeed-text"
    ).textContent = `${day.windspeed}${speedUnit}`;
    container.querySelector(".day-text").textContent = day.dayName;
    container.querySelector(".date-text").textContent = day.date;
  });
}

submitCity.addEventListener("click", () => {
  content.replaceChildren();
  getCityInfo(inputCity.value).then((response) => {
    const transformed = transformObject(response);
    loadCurrentWeather(transformed);
    loadUpcomingWeather(transformed.days);
  });
});

unitSelect.addEventListener("change", () => {
  content.replaceChildren();
  getCityInfo(inputCity.value, unitSelect.value).then((response) => {
    const transformed = transformObject(response);
    loadCurrentWeather(transformed);
    loadUpcomingWeather(transformed.days);
  });
});
