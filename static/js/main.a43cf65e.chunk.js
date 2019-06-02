(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(83)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(28),a(1)),o=a(2),s=a(4),u=a(3),m=a(5),d={application_name:"forecast application",button_reference:"follow me !"},p={placeholder:"Are you looking for a estimated forecast in your location ?",search_button:"reset city desire"},h={description:"The city name doesn\xb4t exist in our database =( "},f={linkedin:"https://www.linkedin.com/in/wilfrido-bonett-paez",instagram:"https://www.instagram.com/bonett2",twitter:"https://twitter.com/wbonett10"},y=(a(29),function(){var e=function(e){switch(console.log(e),e){case"instagram":return window.open(f.instagram);case"linkedin":return window.open(f.linkedin);case"logo":return window.location.href;default:return window.open(f.twitter)}};return r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"brand",onClick:function(){return e("logo")}},d.application_name),r.a.createElement("div",{className:"social text-right"},r.a.createElement("a",{onClick:function(){return e("instagram")},className:"fa fa-instagram"}),r.a.createElement("a",{onClick:function(){return e("linkedin")},className:"fa fa-linkedin"}),r.a.createElement("a",{onClick:function(){return e("twitter")},className:"fa fa-twitter"}))))}),v=(a(30),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleUpdateCity=function(e){a.props.callSearchAgainCity(e)},a.handleDeleteCity=function(e,t){var n={index:e,city:t};a.props.callDeleteCity(n)},a.renderLastCities=function(e){return e.length>5?e.slice(e.length-5,e.length):e},a.state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cities,a=this.renderLastCities(t);return r.a.createElement("div",null,a.map(function(t,a){return r.a.createElement("div",{className:"card text-center",key:a},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",onClick:function(){return e.handleUpdateCity(t)}},t),r.a.createElement("a",{className:"btn btn-primary",onClick:function(){return e.handleDeleteCity(a,t)}},r.a.createElement("i",{className:"fa fa-close"}))))}))}}]),t}(n.Component)),b=(a(31),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).validateClearButton=function(e){e.target.value.length>0?a.setState({disableClearButton:!1,value:e.target.value}):a.setState({disableClearButton:!0,value:""})},a.clearForm=function(){a.setState({value:"",disableClearButton:!0}),a.props.callClearFromHeader("")},a.handleKeyPress=function(e){"Enter"==e.key&&a.props.callbackFromHeader(e.target.value)},a.state={value:"",disableClearButton:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.disableClearButton,a=e.value;return r.a.createElement("div",{className:"col-12 col-md-12 mb-2 mb-md-0"},r.a.createElement("input",{type:"text",name:"name",className:"input-location",id:"name",value:a,onKeyPress:this.handleKeyPress,onChange:this.validateClearButton,autoFocus:!0,required:!0}),r.a.createElement("label",null,r.a.createElement("span",null,p.placeholder)),r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:t,onClick:this.clearForm},p.search_button))}}]),t}(n.Component)),E=(a(32),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getCityFromInput=function(e){a.props.searchCityByInput(e)},a.clearCityData=function(){a.props.resetCitySearch("")},a.getCityDetailsAgain=function(e){a.props.serchCityAgain(e)},a.getDeleteCity=function(e){a.props.deleteCity(e)},a.state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.historyData;return r.a.createElement("header",{className:"masthead-content text-white text-center"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},r.a.createElement(b,{callbackFromHeader:this.getCityFromInput,callClearFromHeader:this.clearCityData}))),r.a.createElement("div",{className:"row toaster-content"},null!==e?r.a.createElement(v,{cities:e,callDeleteCity:this.getDeleteCity,callSearchAgainCity:this.getCityDetailsAgain}):null)))}}]),t}(n.Component)),g=(a(33),function(){return r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show text-center",role:"alert"},r.a.createElement("strong",null,"Ops!")," ",h.description)}),C=a(15),w={width:"100%",height:"100%"},N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.latitude,a=e.longitude;return r.a.createElement(C.Map,{google:this.props.google,zoom:12,style:w,initialCenter:{lat:t,lng:a}})}}]),t}(n.Component),O=Object(C.GoogleApiWrapper)({apiKey:"AIzaSyD22eQXfI0Hjciax0946NkjGCsID4eA6h0"})(N),j=(a(48),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"location-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card card-location customize"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement(O,{latitude:e.latitude,longitude:e.longitude})),r.a.createElement("div",{className:"col-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},e.name," - ",e.country),r.a.createElement("h6",{className:"card-item"},"Humidity: ",r.a.createElement("span",null,e.humidity," %")),r.a.createElement("h6",{className:"card-item"},"Temperature: ",r.a.createElement("span",null,e.temperature," C\xba")),r.a.createElement("h6",{className:"card-item"},"Pressure: ",r.a.createElement("span",null,e.pressure)),r.a.createElement("h6",{className:"card-item"},"Max Temperature: ",r.a.createElement("span",null,e.temperature_max," C\xba")),r.a.createElement("h6",{className:"card-item"},"Min Temperature: ",r.a.createElement("span",null,e.temperature_min," C\xba")),r.a.createElement("h6",{className:"card-item"},"Wind: ",r.a.createElement("span",null,e.wind)))))))))}}]),t}(n.Component)),k=(a(49),function(){return r.a.createElement("footer",{className:"text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"footer-text"},"made with ",r.a.createElement("i",{className:"fa fa-heart with-love heart-color"})," in Colombia by: Wilfrido Bonett Paez")))}),x=function(e){return"".concat("http://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&appid=").concat("50c2553a4684fe575761d6b2f6f7203f")},S=a(22),D=a.n(S),F=function(e){return D()(e).from("K").to("C").toFixed(0)},I=function(e){var t=e.main,a=t.humidity,n=t.temp,r=t.pressure,i=t.temp_max,c=t.temp_min,l=e.coord.lon,o=e.coord.lat,s=e.wind.speed,u=F(i),m=F(c);return{humidity:a,temperature:F(n),pressure:r,temperature_max:u,temperature_min:m,longitude:l,latitude:o,name:e.name,country:e.sys.country,wind:"".concat(s," m/s")}},B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getCityForecastDetails=function(e){var t=x(e),n=a.state.list;fetch(t).then(function(e){return e.json()}).then(function(t){if(200===t.cod){n.push(e),sessionStorage.setItem("cities",JSON.stringify(n));var r=I(t);a.setState({data:r,city:e})}else a.setState({visible:!0},function(){window.setTimeout(function(){a.setState({visible:!1})},3e3)})}).catch(function(e){console.log("Error:",e)})},a.getLastCityForecastDetails=function(e){var t=x(e);fetch(t).then(function(e){return e.json()}).then(function(t){var n=I(t);a.setState({data:n,city:e})}).catch(function(e){console.log("Error:",e)})},a.deleteCityHistory=function(e){var t=a.state.list;t.splice(t.findIndex(function(t,a){return a===e.index&&t===e.city}),1),sessionStorage.setItem("cities",JSON.stringify(t)),a.setState({city:null,list:t})},a.clearForm=function(){a.setState({city:null,visible:!1,data:{}})},a.state={city:null,data:{},visible:!1,list:JSON.parse(sessionStorage.getItem("cities"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.data,n=e.visible,i=JSON.parse(sessionStorage.getItem("cities"));return r.a.createElement("div",{className:"app-content"},n?r.a.createElement(g,null):null,r.a.createElement(y,null),r.a.createElement(E,{searchCityByInput:this.getCityForecastDetails,resetCitySearch:this.clearForm,serchCityAgain:this.getLastCityForecastDetails,historyData:i,deleteCity:this.deleteCityHistory}),r.a.createElement("div",{className:"wrapper-content"},t?r.a.createElement(j,{data:a}):null),r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.a43cf65e.chunk.js.map