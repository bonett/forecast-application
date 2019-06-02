(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(98)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=a.n(r),l=(a(37),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),d=a(31),p=a(9),h={application_name:"forecast application",button_reference:"follow me !"},f={placeholder:"Are you looking for a estimated forecast in your location ?",search_button:"reset city desire"},y={description:"The city name doesn\xb4t exist in our database =( "},v={linkedin:"https://www.linkedin.com/in/wilfrido-bonett-paez",instagram:"https://www.instagram.com/bonett2",twitter:"https://twitter.com/wbonett10"},b=(a(38),function(){var e=function(e){switch(console.log(e),e){case"instagram":return window.open(v.instagram);case"linkedin":return window.open(v.linkedin);case"logo":return window.location.href;default:return window.open(v.twitter)}};return i.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},i.a.createElement("div",{className:"container"},i.a.createElement("a",{className:"brand",onClick:function(){return e("logo")}},h.application_name),i.a.createElement("div",{className:"social text-right"},i.a.createElement("a",{onClick:function(){return e("instagram")},className:"fa fa-instagram"}),i.a.createElement("a",{onClick:function(){return e("linkedin")},className:"fa fa-linkedin"}),i.a.createElement("a",{onClick:function(){return e("twitter")},className:"fa fa-twitter"}))))}),g=(a(39),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleUpdateCity=function(e){a.props.callSearchAgainCity(e)},a.handleDeleteCity=function(e,t){var n={index:e,city:t};a.props.callDeleteCity(n)},a.renderLastCities=function(e){return e.length>5?e.slice(e.length-5,e.length):e},a.state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cities,a=this.renderLastCities(t);return i.a.createElement("div",null,a.map(function(t,a){return i.a.createElement("div",{className:"card text-center",key:a},i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title",onClick:function(){return e.handleUpdateCity(t)}},t),i.a.createElement("a",{className:"btn btn-primary",onClick:function(){return e.handleDeleteCity(a,t)}},i.a.createElement("i",{className:"fa fa-close"}))))}))}}]),t}(n.Component)),E=(a(40),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).validateClearButton=function(e){e.target.value.length>0?a.setState({disableClearButton:!1,value:e.target.value}):a.setState({disableClearButton:!0,value:""})},a.clearForm=function(){a.setState({value:"",disableClearButton:!0}),a.props.callClearFromHeader("")},a.handleKeyPress=function(e){"Enter"==e.key&&a.props.callbackFromHeader(e.target.value)},a.state={value:"",disableClearButton:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.disableClearButton,a=e.value;return i.a.createElement("div",{className:"col-12 col-md-12 mb-2 mb-md-0"},i.a.createElement("input",{type:"text",name:"name",className:"input-location",id:"name",value:a,onKeyPress:this.handleKeyPress,onChange:this.validateClearButton,autoFocus:!0,required:!0}),i.a.createElement("label",null,i.a.createElement("span",null,f.placeholder)),i.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:t,onClick:this.clearForm},f.search_button))}}]),t}(n.Component)),C=(a(41),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getCityFromInput=function(e){a.props.searchCityByInput(e)},a.clearCityData=function(){a.props.resetCitySearch("")},a.getCityDetailsAgain=function(e){a.props.serchCityAgain(e)},a.getDeleteCity=function(e){a.props.deleteCity(e)},a.state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.historyData;return i.a.createElement("header",{className:"masthead-content text-white text-center"},i.a.createElement("div",{className:"overlay"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},i.a.createElement(E,{callbackFromHeader:this.getCityFromInput,callClearFromHeader:this.clearCityData}))),i.a.createElement("div",{className:"row toaster-content"},null!==e?i.a.createElement(g,{cities:e,callDeleteCity:this.getDeleteCity,callSearchAgainCity:this.getCityDetailsAgain}):null)))}}]),t}(n.Component)),w=(a(42),function(){return i.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show text-center",role:"alert"},i.a.createElement("strong",null,"Ops!")," ",y.description)}),N=a(18),O={width:"100%",height:"100%"},j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.latitude,a=e.longitude;return i.a.createElement(N.Map,{google:this.props.google,zoom:12,style:O,initialCenter:{lat:t,lng:a}})}}]),t}(n.Component),k=Object(N.GoogleApiWrapper)({apiKey:"AIzaSyD22eQXfI0Hjciax0946NkjGCsID4eA6h0"})(j),S=(a(57),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return i.a.createElement("div",{className:"location-content"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"card card-location customize"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-7"},i.a.createElement(k,{latitude:e.latitude,longitude:e.longitude})),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title text-center"},e.name," - ",e.country),i.a.createElement("h6",{className:"card-item"},"Humidity: ",i.a.createElement("span",null,e.humidity," %")),i.a.createElement("h6",{className:"card-item"},"Temperature: ",i.a.createElement("span",null,e.temperature," C\xba")),i.a.createElement("h6",{className:"card-item"},"Pressure: ",i.a.createElement("span",null,e.pressure)),i.a.createElement("h6",{className:"card-item"},"Max Temperature: ",i.a.createElement("span",null,e.temperature_max," C\xba")),i.a.createElement("h6",{className:"card-item"},"Min Temperature: ",i.a.createElement("span",null,e.temperature_min," C\xba")),i.a.createElement("h6",{className:"card-item"},"Wind: ",i.a.createElement("span",null,e.wind)))))))))}}]),t}(n.Component)),x=(a(58),function(){return i.a.createElement("footer",{className:"text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("h4",{className:"footer-text"},"made with ",i.a.createElement("i",{className:"fa fa-heart with-love heart-color"})," in Colombia by: Wilfrido Bonett Paez")))}),D=function(e){return"".concat("http://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&appid=").concat("50c2553a4684fe575761d6b2f6f7203f")},I=a(28),F=a.n(I),B=function(e){return F()(e).from("K").to("C").toFixed(0)},A=function(e){var t=e.main,a=t.humidity,n=t.temp,i=t.pressure,r=t.temp_max,c=t.temp_min,l=e.coord.lon,s=e.coord.lat,o=e.wind.speed,u=B(r),m=B(c);return{humidity:a,temperature:B(n),pressure:i,temperature_max:u,temperature_min:m,longitude:l,latitude:s,name:e.name,country:e.sys.country,wind:"".concat(o," m/s")}},_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).validateCityHint=function(e,t){for(var a,n=0;n<e.length;n++){if(e[n]===t){a=!0;break}a=!1}return a},a.getCityForecastDetails=function(e){var t=D(e),n=a.state.list;fetch(t).then(function(e){return e.json()}).then(function(t){if(200===t.cod)if(null===n){sessionStorage.setItem("cities",JSON.stringify(e));var i=A(t);a.setState({data:i,city:e})}else{if(a.validateCityHint(n,e)){var r=A(t);a.setState({data:r,city:e})}else{n.push(e),sessionStorage.setItem("cities",JSON.stringify(n));var c=A(t);a.setState({data:c,city:e})}}else a.setState({visible:!0},function(){window.setTimeout(function(){a.setState({visible:!1})},3e3)})}).catch(function(e){console.log("Error:",e)})},a.getLastCityForecastDetails=function(e){var t=D(e);fetch(t).then(function(e){return e.json()}).then(function(t){var n=A(t);a.setState({data:n,city:e})}).catch(function(e){console.log("Error:",e)})},a.deleteCityHistory=function(e){var t=a.state.list;t.splice(t.findIndex(function(t,a){return a===e.index&&t===e.city}),1),sessionStorage.setItem("cities",JSON.stringify(t)),a.setState({city:null,list:t})},a.clearForm=function(){a.setState({city:null,visible:!1,data:{}})},a.state={city:null,data:{},visible:!1,list:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){null!==sessionStorage.getItem("cities")?this.setState({list:JSON.parse(sessionStorage.getItem("cities"))}):(sessionStorage.setItem("cities",JSON.stringify([])),this.setState({list:JSON.parse(sessionStorage.getItem("cities"))}))}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.data,n=e.visible,r=JSON.parse(sessionStorage.getItem("cities"));return i.a.createElement("div",{className:"app-content"},n?i.a.createElement(w,null):null,i.a.createElement(b,null),i.a.createElement(C,{searchCityByInput:this.getCityForecastDetails,resetCitySearch:this.clearForm,serchCityAgain:this.getLastCityForecastDetails,historyData:r,deleteCity:this.deleteCityHistory}),i.a.createElement("div",{className:"wrapper-content"},t?i.a.createElement(S,{data:a}):null),i.a.createElement(x,null))}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{exact:!0,path:"/",component:_})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.bfae49d3.chunk.js.map