const widgetTemplate = `
(function() {
window.$weather = {
getCurrentLocation: function() {
if (navigator.geolocation) {
var self = this;
navigator.geolocation.getCurrentPosition(function(position) {
self.fetchWeather(self.parseWeatherResponse, position.coords.latitude, position.coords.longitude);
});
}
},
fetchWeather: function(callback, lat, lon){
var path = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=da6fa1f2e8ba83123a10526612467714&units=metric';
var xobj = new XMLHttpRequest();
var self = this;
xobj.overrideMimeType("application/json");
xobj.open('GET', path, true);
xobj.onreadystatechange = function () {
if (xobj.readyState == 4 && xobj.status == "200") {
callback.call(self,JSON.parse(xobj.responseText));
}
};
xobj.send(null);  
},
parseWeatherResponse: function(response){
this.data.temperature = this.data.unit == 'metric' ? response.main.temp+'&#176;C': response.main.temp*1.8+32+'&#176;F';
this.data.windSpeed = Math.round(response.wind.speed*3.6);
this.data.windDirection= ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.round(response.wind.deg/45)];
this.data.image= response.weather[0].icon;
this.data.location= response.name;
this.paintWidget();
},
paintWidget: function() {
var html = "<div id='container' class='widget'><h1>"+this.data.title+"</h1><div class='content'> <img class='inline-block' src='http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+this.data.image+".png' /> <div class='details inline-block'><div class='city'>"+this.data.location+"</div><div class='temperature'>"+this.data.temperature+"</div><div class='wind "+this.data.wind+"'>Wind <span>"+this.data.windDirection+" "+this.data.windSpeed+"km/h</span></div></div></div></div>";
var css = ".inline-block{ display: inline-block; vertical-align: middle; } body { font-family: sans-serif; } h1, widget-editor-text{ font-size: 14px; color: #424242; font-weight: 500; margin-left: 10px; text-transform: uppercase; } .input-box { width: 60%; height: 25px; border: 2px solid #B9B9B9; padding: 5px; font-size: 18px; } .off{display: none;} #weatherWidgetContainer .widget { margin: 5px; width: 275px; height: 200px; border: 1px solid #B9B9B9; padding: 10px; background-color: #F4F4F4; } .go-butn { cursor: pointer; background-color: #F4F4F4; color: #3a3a3a; border: 1px solid #B9B9B9; height: 38px; font-size: 12px; width: 100%; margin-top: 5px; } .content { margin: 0 auto; } .temperature { font-weight: bold; font-size: 28px; } .city { font-size: 18px; } .wind{ font-size: 14px; color: #B9B9B9; } .wind span { color: #424242; } .details { margin-left: 10px; } .details div { margin-top: 3px; } .half-width { display: flex; }";
var child = document.createElement('div');
child.innerHTML = html;
child = child.firstChild;
document.getElementById('weatherWidgetContainer').appendChild(child);
var style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
document.getElementById('weatherWidgetContainer').appendChild(style);
},
build: function(initParams) {
this.getCurrentLocation();
}
}
})();`;
export default widgetTemplate;
