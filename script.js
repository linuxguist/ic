var unitIsCelcius = true;
var globalForecast = [];

// Maps the API's icons to the ones from https://erikflowers.github.io/weather-icons/
var weatherIconsMap = {
  "01d": "wi-day-sunny",
  "01n": "wi-night-clear",
  "02d": "wi-day-cloudy",
  "02n": "wi-night-cloudy",
  "03d": "wi-cloud",
  "03n": "wi-cloud",
  "04d": "wi-cloudy",
  "04n": "wi-cloudy",
  "09d": "wi-showers",
  "09n": "wi-showers",
  "10d": "wi-day-hail",
  "10n": "wi-night-hail",
  "11d": "wi-thunderstorm",
  "11n": "wi-thunderstorm",
  "13d": "wi-snow",
  "13n": "wi-snow",
  "50d": "wi-fog",
  "50n": "wi-fog"
};


$(function(){
  getClientPosition();
  startClock();  
});


function startClock(){
  setInterval(function(){
    $("#localTime").text(new Date().toLocaleTimeString());
  }, 1000);
}


function getClientPosition(){
  $.getJSON("https://ipapi.co/json/", function(position) {
    $("#cityName").text(position.city);
    $("#cityCode").text(position.country);
    
    getWeatherData(position.latitude, position.longitude);
  });
}


function getWeatherData(latitude, longitude){
  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast/daily?APPID=9b4bbf30228eb8528d36e79d05da1fac&lat=" + latitude + "&lon=" + longitude + "&units=metric&cnt=5",
    cache: true,
    // headers: {
      // "Access-Control-Allow-Headers": "x-requested-with"
    // },
    success: function(forecast){
      globalForecast = forecast;
      updateForecast(forecast);

      // Stops Refresh button's spinning animation
      $("#refreshButton").html("<i class='fa fa-refresh fa-fw'></i> Refresh");
    },
    error: function(error){
      console.log("Error with ajax: "+ error);
    }
  });
}


// Update view values from passed forecast
function updateForecast(forecast){

  // Present day
  var today = forecast.list[0];
  $("#tempDescription").text(toCamelCase(today.weather[0].description));
  $("#humidity").text(today.humidity);
  $("#wind").text(today.speed);
  $("#localDate").text(getFormattedDate(today.dt));
  $("#main-icon").addClass(weatherIconsMap[today.weather[0].icon]);
  $("#mainTemperature").text(Math.round(today.temp.day));
  $("#mainTempHot").text(Math.round(today.temp.max));
  $("#mainTempLow").text(Math.round(today.temp.min));


  // Following days data
  for(var i = 1; i < (forecast.list).length; i++){
    var day = forecast.list[i];

    // Day short format e.g. Mon
    var dayName = getFormattedDate(day.dt).substring(0,3);

    // weather icon from map
    var weatherIcon = weatherIconsMap[day.weather[0].icon];

    $("#forecast-day-" + i + "-name").text(dayName);
    $("#forecast-day-" + i + "-icon").addClass(weatherIcon);
    $("#forecast-day-" + i + "-main").text(Math.round(day.temp.day));
    $("#forecast-day-" + i + "-ht").text(Math.round(day.temp.max));
    $("#forecast-day-" + i + "-lt").text(Math.round(day.temp.min));
  }


// testi="Equals,,,,"+textvi+",,,,I Repeat.,,,,"+textvi;
//    console.log(testi);
     // responsiveVoice.speak(textvi,'UK English Female', parameters);  
       // responsiveVoice.speak("    I Repeat.    ",'UK English Female', parameters);  
//       responsiveVoice.speak( testi.toString(), 'UK English Female', parameters);

  responsiveVoice.speak("Hi, Welcome to the Information Center.", 'UK English Female', parameters);

  console.log(new Date().toLocaleTimeString());


  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Time now is,,,,. : "+(new Date().toLocaleTimeString()), 'UK English Female', parameters);    
            
}, 4000); // How long you want the delay to be, measured in milliseconds.


  console.log($('#localDate').html());


  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Day today is,,,,. : "+$('#localDate').html(), 'UK English Female', parameters);    
            
}, 10000); // How long you want the delay to be, measured in milliseconds.





  console.log($('#cityName').html());
  console.log($('#cityCode').html());

  console.log($('#mainTemperature').html());
  console.log($('#tempDescription').html());

  console.log($('#mainTempHot').html());
  console.log($('#mainTempLow').html());
  
  console.log($('#humidity').html());
  console.log($('#wind').html());




var cc = {
'AF': 'Afghanistan',
'AL': 'Albania',
'DZ': 'Algeria',
'AS': 'American Samoa',
'AD': 'Andorra',
'AO': 'Angola',
'AI': 'Anguilla',
'AQ': 'Antarctica',
'AG': 'Antigua and Barbuda',
'AR': 'Argentina',
'AM': 'Armenia',
'AW': 'Aruba',
'AU': 'Australia',
'AT': 'Austria',
'AZ': 'Azerbaijan',
'BS': 'Bahamas ',
'BH': 'Bahrain',
'BD': 'Bangladesh',
'BB': 'Barbados',
'BY': 'Belarus',
'BE': 'Belgium',
'BZ': 'Belize',
'BJ': 'Benin',
'BM': 'Bermuda',
'BT': 'Bhutan',
'BO': 'Bolivia ',
'BQ': 'Bonaire, Sint Eustatius and Saba',
'BA': 'Bosnia and Herzegovina',
'BW': 'Botswana',
'BV': 'Bouvet Island',
'BR': 'Brazil',
'IO': 'British Indian Ocean Territory ',
'BN': 'Brunei Darussalam',
'BG': 'Bulgaria',
'BF': 'Burkina Faso',
'BI': 'Burundi',
'CV': 'Cabo Verde',
'KH': 'Cambodia',
'CM': 'Cameroon',
'CA': 'Canada',
'KY': 'Cayman Islands ',
'CF': 'Central African Republic ',
'TD': 'Chad',
'CL': 'Chile',
'CN': 'China',
'CX': 'Christmas Island',
'CC': 'Cocos ',
'CO': 'Colombia',
'KM': 'Comoros ',
'CD': 'Congo ',
'CG': 'Congo ',
'CK': 'Cook Islands ',
'CR': 'Costa Rica',
'HR': 'Croatia',
'CU': 'Cuba',
'CW': 'Curaçao',
'CY': 'Cyprus',
'CZ': 'Czechia',
'CI': 'Côte d Ivoire',
'DK': 'Denmark',
'DJ': 'Djibouti',
'DM': 'Dominica',
'DO': 'Dominican Republic ',
'EC': 'Ecuador',
'EG': 'Egypt',
'SV': 'El Salvador',
'GQ': 'Equatorial Guinea',
'ER': 'Eritrea',
'EE': 'Estonia',
'SZ': 'Eswatini',
'ET': 'Ethiopia',
'FK': 'Falkland Islands ',
'FO': 'Faroe Islands ',
'FJ': 'Fiji',
'FI': 'Finland',
'FR': 'France',
'GF': 'French Guiana',
'PF': 'French Polynesia',
'TF': 'French Southern Territories ',
'GA': 'Gabon',
'GM': 'Gambia ',
'GE': 'Georgia',
'DE': 'Germany',
'GH': 'Ghana',
'GI': 'Gibraltar',
'GR': 'Greece',
'GL': 'Greenland',
'GD': 'Grenada',
'GP': 'Guadeloupe',
'GU': 'Guam',
'GT': 'Guatemala',
'GG': 'Guernsey',
'GN': 'Guinea',
'GW': 'Guinea-Bissau',
'GY': 'Guyana',
'HT': 'Haiti',
'HM': 'Heard Island and McDonald Islands',
'VA': 'Holy See ',
'HN': 'Honduras',
'HK': 'Hong Kong',
'HU': 'Hungary',
'IS': 'Iceland',
'IN': 'India',
'ID': 'Indonesia',
'IR': 'Iran ',
'IQ': 'Iraq',
'IE': 'Ireland',
'IM': 'Isle of Man',
'IL': 'Israel',
'IT': 'Italy',
'JM': 'Jamaica',
'JP': 'Japan',
'JE': 'Jersey',
'JO': 'Jordan',
'KZ': 'Kazakhstan',
'KE': 'Kenya',
'KI': 'Kiribati',
'KP': 'Korea ',
'KR': 'Korea ',
'KW': 'Kuwait',
'KG': 'Kyrgyzstan',
'LA': 'Lao Peoples Democratic Republic ',
'LV': 'Latvia',
'LB': 'Lebanon',
'LS': 'Lesotho',
'LR': 'Liberia',
'LY': 'Libya',
'LI': 'Liechtenstein',
'LT': 'Lithuania',
'LU': 'Luxembourg',
'MO': 'Macao',
'MG': 'Madagascar',
'MW': 'Malawi',
'MY': 'Malaysia',
'MV': 'Maldives',
'ML': 'Mali',
'MT': 'Malta',
'MH': 'Marshall Islands ',
'MQ': 'Martinique',
'MR': 'Mauritania',
'MU': 'Mauritius',
'YT': 'Mayotte',
'MX': 'Mexico',
'FM': 'Micronesia ',
'MD': 'Moldova ',
'MC': 'Monaco',
'MN': 'Mongolia',
'ME': 'Montenegro',
'MS': 'Montserrat',
'MA': 'Morocco',
'MZ': 'Mozambique',
'MM': 'Myanmar',
'NA': 'Namibia',
'NR': 'Nauru',
'NP': 'Nepal',
'NL': 'Netherlands ',
'NC': 'New Caledonia',
'NZ': 'New Zealand',
'NI': 'Nicaragua',
'NE': 'Niger ',
'NG': 'Nigeria',
'NU': 'Niue',
'NF': 'Norfolk Island',
'MP': 'Northern Mariana Islands ',
'NO': 'Norway',
'OM': 'Oman',
'PK': 'Pakistan',
'PW': 'Palau',
'PS': 'Palestine, State of',
'PA': 'Panama',
'PG': 'Papua New Guinea',
'PY': 'Paraguay',
'PE': 'Peru',
'PH': 'Philippines ',
'PN': 'Pitcairn',
'PL': 'Poland',
'PT': 'Portugal',
'PR': 'Puerto Rico',
'QA': 'Qatar',
'MK': 'Republic of North Macedonia',
'RO': 'Romania',
'RU': 'Russian Federation ',
'RW': 'Rwanda',
'RE': 'Réunion',
'BL': 'Saint Barthélemy',
'SH': 'Saint Helena, Ascension and Tristan da Cunha',
'KN': 'Saint Kitts and Nevis',
'LC': 'Saint Lucia',
'MF': 'Saint Martin ',
'PM': 'Saint Pierre and Miquelon',
'VC': 'Saint Vincent and the Grenadines',
'WS': 'Samoa',
'SM': 'San Marino',
'ST': 'Sao Tome and Principe',
'SA': 'Saudi Arabia',
'SN': 'Senegal',
'RS': 'Serbia',
'SC': 'Seychelles',
'SL': 'Sierra Leone',
'SG': 'Singapore',
'SX': 'Sint Maarten ',
'SK': 'Slovakia',
'SI': 'Slovenia',
'SB': 'Solomon Islands',
'SO': 'Somalia',
'ZA': 'South Africa',
'GS': 'South Georgia and the South Sandwich Islands',
'SS': 'South Sudan',
'ES': 'Spain',
'LK': 'Sri Lanka',
'SD': 'Sudan ',
'SR': 'Suriname',
'SJ': 'Svalbard and Jan Mayen',
'SE': 'Sweden',
'CH': 'Switzerland',
'SY': 'Syrian Arab Republic',
'TW': 'Taiwan ',
'TJ': 'Tajikistan',
'TZ': 'Tanzania, United Republic of',
'TH': 'Thailand',
'TL': 'Timor-Leste',
'TG': 'Togo',
'TK': 'Tokelau',
'TO': 'Tonga',
'TT': 'Trinidad and Tobago',
'TN': 'Tunisia',
'TR': 'Turkey',
'TM': 'Turkmenistan',
'TC': 'Turks and Caicos Islands ',
'TV': 'Tuvalu',
'UG': 'Uganda',
'UA': 'Ukraine',
'AE': 'United Arab Emirates ',
'GB': 'United Kingdom of Great Britain and Northern Ireland ',
'UM': 'United States Minor Outlying Islands ',
'US': 'United States of America ',
'UY': 'Uruguay',
'UZ': 'Uzbekistan',
'VU': 'Vanuatu',
'VE': 'Venezuela ',
'VN': 'Viet Nam',
'VG': 'Virgin Islands ',
'VI': 'Virgin Islands ',
'WF': 'Wallis and Futuna',
'EH': 'Western Sahara',
'YE': 'Yemen',
'ZM': 'Zambia',
'ZW': 'Zimbabwe',
'AX': 'Åland Islands'
}


  console.log("Country name is " + cc[$('#cityCode').html()]);

  
  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Temperature in "+$('#cityName').html()+","+cc[$('#cityCode').html()]+" is. "+$('#mainTemperature').html()+" Degree Celcius."+" Its description is. "+$('#tempDescription').html()+". Today's expected minimum temperature is "+$('#mainTempLow').html()+" degree celcius. Expected maximum temperature is "+$('#mainTempHot').html()+" degree celcius. Humidity is "+$('#humidity').html()+" percent. Wind speed is "+$('#wind').html()+" meter per second.", 'UK English Female', parameters);    
            
}, 16000); // How long you want the delay to be, measured in milliseconds.



var days = {
   'Mon': 'Monday',
   'Tue': 'Tuesday',
   'Wed': 'Wednesday',
   'Thu': 'Thursday',
   'Fri': 'Friday',
   'Sat': 'Saturday',
   'Sun': 'Sunday'
}

// days[date]

  console.log(days[$('#forecast-day-1-name').html()]);
  console.log($('#forecast-day-1-main').html());
  console.log($('#forecast-day-1-ht').html());
  console.log($('#forecast-day-1-lt').html());

  console.log(days[$('#forecast-day-2-name').html()]);
  console.log($('#forecast-day-2-main').html());
  console.log($('#forecast-day-2-ht').html());
  console.log($('#forecast-day-2-lt').html());

  console.log(days[$('#forecast-day-3-name').html()]);
  console.log($('#forecast-day-3-main').html());
  console.log($('#forecast-day-3-ht').html());
  console.log($('#forecast-day-3-lt').html());

  console.log(days[$('#forecast-day-4-name').html()]);
  console.log($('#forecast-day-4-main').html());
  console.log($('#forecast-day-4-ht').html());
  console.log($('#forecast-day-4-lt').html());



  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Forecast Temperature for "+days[$('#forecast-day-1-name').html()]+" is "+$('#forecast-day-1-main').html()+" degree celcius. Expected high is "+$('#forecast-day-1-ht').html()+" degree celcius. Expected low is "+$('#forecast-day-1-lt').html()+" degree celcius.", 'UK English Female', parameters);    
            
}, 36000); // How long you want the delay to be, measured in milliseconds.


  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Forecast Temperature for "+days[$('#forecast-day-2-name').html()]+" is "+$('#forecast-day-2-main').html()+" degree celcius. Expected high is "+$('#forecast-day-2-ht').html()+" degree celcius. Expected low is "+$('#forecast-day-2-lt').html()+" degree celcius.", 'UK English Female', parameters);    
            
}, 48000); // How long you want the delay to be, measured in milliseconds.



  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Forecast Temperature for "+days[$('#forecast-day-3-name').html()]+" is "+$('#forecast-day-3-main').html()+" degree celcius. Expected high is "+$('#forecast-day-3-ht').html()+" degree celcius. Expected low is "+$('#forecast-day-3-lt').html()+" degree celcius.", 'UK English Female', parameters);    
            
}, 60000); // How long you want the delay to be, measured in milliseconds.


  setTimeout(function (){
  
  // Something you want delayed.

    responsiveVoice.speak("Forecast Temperature for "+days[$('#forecast-day-4-name').html()]+" is "+$('#forecast-day-4-main').html()+" degree celcius. Expected high is "+$('#forecast-day-4-ht').html()+" degree celcius. Expected low is "+$('#forecast-day-4-lt').html()+" degree celcius.", 'UK English Female', parameters);    
            
}, 72000); // How long you want the delay to be, measured in milliseconds.

  
}


// Refresh button handler
$("#refreshButton").on("click", function(){
  // Starts Refresh button's spinning animation
  $("#refreshButton").html("<i class='fa fa-refresh fa-spin fa-fw'></i>");
  getWeatherData();
});


// Celcius button handler.
// Converts every shown value to Celcius
$("#celcius").on("click", function(){
  if(!unitIsCelcius){
    $("#farenheit").removeClass("active");
    this.className = "active";

    // main day
    var today = globalForecast.list[0];
    today.temp.day = toCelcius(today.temp.day);
    today.temp.max = toCelcius(today.temp.max);
    today.temp.min = toCelcius(today.temp.min);
    globalForecast.list[0] = today;

    // week
    for(var i = 1; i < 5; i ++){
      var weekDay = globalForecast.list[i];
      weekDay.temp.day = toCelcius(weekDay.temp.day);
      weekDay.temp.max = toCelcius(weekDay.temp.max);
      weekDay.temp.min = toCelcius(weekDay.temp.min);
      globalForecast[i] = weekDay;
    }

    // update view with updated values
    updateForecast(globalForecast);

    unitIsCelcius = true;
  }
});


// Farenheit button handler
// Converts every shown value to Farenheit
$("#farenheit").on("click", function(){  
  if(unitIsCelcius){
    $("#celcius").removeClass("active");
    this.className = "active";
    
    // main day
    var today = globalForecast.list[0];
    today.temp.day = toFerenheit(today.temp.day);
    today.temp.max = toFerenheit(today.temp.max);
    today.temp.min = toFerenheit(today.temp.min);
    globalForecast.list[0] = today;

    // week
    for(var i = 1; i < 5; i ++){
      var weekDay = globalForecast.list[i];
      weekDay.temp.day = toFerenheit(weekDay.temp.day);
      weekDay.temp.max = toFerenheit(weekDay.temp.max);
      weekDay.temp.min = toFerenheit(weekDay.temp.min);
      globalForecast[i] = weekDay;
    }

    // update view with updated values
    updateForecast(globalForecast);
    
    unitIsCelcius = false;
  }
});


// Applies the following format to date: WeekDay, Month Day, Year
function getFormattedDate(date){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date * 1000).toLocaleDateString("en-US",options);
}


// Formats the text to CamelCase
function toCamelCase(str) {
  var arr = str.split(" ").map(
    function(sentence){
      return sentence.charAt(0).toUpperCase() + sentence.substring(1);
    }
  );
  return arr.join(" ");
}


// Converts to Celcius
function toCelcius(val){
  return Math.round((val - 32) * (5/9));
}


// Converts to Farenheit
function toFerenheit(val){
  var degrees = (val * 1.8) + 32;
  var rounded = Math.round(degrees);
  return rounded;
}