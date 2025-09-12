const units = {
	0: 'US',
	1: 'Metric',
	2: 'UK'
};

async function getCityInfo(city = 'Warsaw', units = 'metric'){
	try {
		const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=CRPV2TCZ7LKD4S3PXEBG8ACUJ&contentType=json`
		response = await fetch(url);
		return response.json();
	} catch(error) {
		console.error('Oops', error);
	}
}

function getLocaltime(timezone) {
	const dateOptions = {
		hour: "numeric", 
		minute: "numeric", 
		timeZone: timezone
	}
	const formatter = new Intl.DateTimeFormat("en-US", dateOptions);
	return formatter.format(new Date());
}

function transformObject(infoObj){
	return {
		location: infoObj.resolvedAddress,
		localTime: getLocaltime(infoObj.timezone),
		temperature: infoObj.currentConditions.temp,
		pressure: infoObj.currentConditions.pressure,
		snow:	infoObj.currentConditions.snow,
		windspeed: infoObj.currentConditions.windspeed,
		description: infoObj.description,
		conditions: infoObj.currentConditions.conditions,
		days: infoObj.days,
	}
}

getCityInfo().then(response => {
	console.log(transformObject(response));
});
