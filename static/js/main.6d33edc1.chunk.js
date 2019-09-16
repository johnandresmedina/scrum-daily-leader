(window["webpackJsonpscrum-daily-leader"]=window["webpackJsonpscrum-daily-leader"]||[]).push([[0],{120:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"rootReducer",{enumerable:!0,get:function(){return i.rootReducer}}),Object.defineProperty(t,"DevTools",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=r(a(197)),i=a(320),l=r(a(322)),o=n.default;t.default=o},139:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(313);var n=r(a(0)),i=r(a(314)),l=r(a(315)),o=function(e){var t=e.active,a=e.description,r=e.index,o=e.name,c=e.selected,u=e.removeParticipant,d=(0,i.default)({participant__selected:c});return n.default.createElement("div",{className:"participant"},n.default.createElement("div",{className:d},n.default.createElement(l.default,{active:t,description:a,title:o,handleDeleteClick:function(){u(r)}})))};t.default=o},177:function(e,t){},181:function(e,t,a){e.exports=a(182)},182:function(e,t,a){"use strict";var r=a(56),n=a(5);a(183),a(184);var i=n(a(0)),l=n(a(32)),o=n(a(189)),c=r(a(488)),u=n(a(120));l.default.render(i.default.createElement(u.default,{store:(0,o.default)()}),document.getElementById("root")),c.unregister()},183:function(e,t,a){},189:function(e,t,a){"use strict";e.exports=a(190)},190:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(80)),i=a(72),l=r(a(192)),o=r(a(196)),c=a(120),u=a(487);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=[o.default,(0,l.default)()],p=i.applyMiddleware.apply(void 0,f),v=function(){var e=(0,u.loadState)(),t=(0,i.createStore)(c.rootReducer,e?{participantsState:s({},e)}:e,p);return t.subscribe((function(){(0,u.saveState)({participants:t.getState().participantsState.participants})})),t};t.default=v},197:function(e,t,a){"use strict";e.exports=a(198)},198:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=a(31),l=r(a(202)),o=function(e){var t=e.store;return n.default.createElement(i.Provider,{store:t},n.default.createElement(l.default,null))};t.default=o},202:function(e,t,a){"use strict";var r=a(56),n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(203);var i=n(a(0)),l=a(21),o=n(a(218)),c=n(a(224)),u=n(a(227)),d=n(a(243)),s=n(a(247)),f=r(a(252)),p=(0,o.default)((function(){return i.default.createElement("div",{className:"app"},i.default.createElement(c.default,null),i.default.createElement("div",{className:"row app__container"},i.default.createElement("div",{className:"col-md-5"},i.default.createElement(u.default,null)),i.default.createElement("div",{className:"col-md-2 app__or"},i.default.createElement(l.FormattedMessage,{id:"or-separator"})),i.default.createElement("div",{className:"col-md-5"},i.default.createElement(d.default,null)),i.default.createElement("div",{className:"col-md-12"},i.default.createElement(s.default,null),i.default.createElement(f.SelectedParticipant,null),i.default.createElement(f.default,null))))}));t.default=p},203:function(e,t,a){},211:function(e,t){},217:function(e,t){},218:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=a(21),l=a(219);(0,l.addLocaleData)();var o=function(e){return function(){return n.default.createElement(i.IntlProvider,(0,l.getLanguageConfig)(),n.default.createElement(e,null))}};t.default=o},219:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.getLanguageConfig=t.addLocaleData=void 0;var n=r(a(491)),i=a(21),l=r(a(220)),o=r(a(221)),c=r(a(222)),u=r(a(223)),d={en:c.default,es:u.default};t.addLocaleData=function(){(0,i.addLocaleData)([].concat((0,n.default)(l.default),(0,n.default)(o.default)))};t.getLanguageConfig=function(){var e=navigator.language.split(/[-_]/)[0];return{locale:e,messages:d[e]}}},222:function(e){e.exports=JSON.parse('{"header-title":"Choose your scrum daily leader!","or-separator":"OR","participants-empty":"Looks like your participant list is empty!","load":"Load","load-list-placeholder":"Write person names separated by commas","upload":"Upload","roulette":"Roulette"}')},223:function(e){e.exports=JSON.parse('{"header-title":"Escoge tu l\xedder de scrum diario!","or-separator":"O","participants-empty":"Parece que tu lista de participantes est\xe1 vac\xeda!","load":"Cargar","load-list-placeholder":"Escribe los nombres de las personas separados por comas","upload":"Subir","roulette":"Ruleta"}')},224:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(225);var n=r(a(226)),i=r(a(0)),l=a(21),o=function(){return i.default.createElement("header",{className:"header"},i.default.createElement("img",{src:n.default,className:"header__logo",alt:"logo"}),i.default.createElement("h1",{className:"header__title"},i.default.createElement(l.FormattedMessage,{id:"header-title"})))};t.default=o},225:function(e,t,a){},226:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},227:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(228)).default;t.default=n},228:function(e,t,a){"use strict";var r=a(56),n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(175)),l=r(a(0)),o=a(31),c=a(229),u=n(a(240)),d=(0,o.connect)(null,{loadParticipants:c.loadParticipants})((function(e){var t=e.loadParticipants,a=(0,l.useState)(""),r=(0,i.default)(a,2),n=r[0],o=r[1];return l.default.createElement(u.default,{inputValue:n,onLoad:t,updateInputValue:function(e){o(e.target.value)}})}));t.default=d},229:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadParticipants=void 0;var r=a(35);t.loadParticipants=function(e){return function(t){var a=[];e&&(e.split(",").map((function(e){return a.push({name:e.trim()})})),t(r.actions.updateParticipantList({participants:a})))}}},239:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={SET_SELECTED_PARTICIPANT:"SET_SELECTED_PARTICIPANT",REMOVE_PARTICIPANT_LIST_SUCCESS:"REMOVE_PARTICIPANT_LIST_SUCCESS",UPDATE_PARTICIPANT_LIST:"UPDATE_PARTICIPANT_LIST",UPDATE_PARTICIPANT_LIST_ERROR:"UPDATE_PARTICIPANT_LIST_ERROR"};t.default=r},240:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(241);var n=r(a(0)),i=a(21),l=r(a(71)),o=r(a(124)),c=(0,i.injectIntl)((function(e){var t=e.inputValue,a=e.intl,r=e.onLoad,c=e.updateInputValue;return n.default.createElement("div",{className:"load-list"},n.default.createElement("input",{className:"form-control load-list__input",type:"input",value:t,placeholder:a.formatMessage({id:"load-list-placeholder"}),onChange:c}),n.default.createElement(l.default,{variant:"contained",color:"primary",onClick:function(){return r(t)}},n.default.createElement("label",{className:"load-list__icon-label"},n.default.createElement(i.FormattedMessage,{id:"load"})),n.default.createElement(o.default,null)))}));t.default=c},241:function(e,t,a){},243:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(244)).default;t.default=n},244:function(e,t,a){"use strict";var r=a(56),n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(175)),l=r(a(0)),o=a(31),c=a(35),u=n(a(245)),d=(0,o.connect)(null,{fileUpload:c.fileUpload})((function(e){var t=e.fileUpload,a=(0,l.useState)(null),r=(0,i.default)(a,2),n=r[0],o=r[1];return l.default.createElement(u.default,{onFileChange:function(e){var t=!!e.target.files&&e.target.files[0];o(t),e.target.value=""},onFileUpload:function(){t(n)}})}));t.default=d},245:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(246);var n=r(a(0)),i=a(21),l=r(a(71)),o=r(a(124)),c=function(e){var t=e.onFileChange,a=e.onFileUpload;return n.default.createElement("div",{className:"upload-file"},n.default.createElement("input",{className:"form-control upload-file__input",type:"file",placeholder:"Load your file",onChange:t}),n.default.createElement(l.default,{variant:"contained",color:"primary",onClick:a},n.default.createElement("label",{className:"upload-file__icon-label"},n.default.createElement(i.FormattedMessage,{id:"upload"})),n.default.createElement(o.default,null)))};t.default=c},246:function(e,t,a){},247:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(248)).default;t.default=n},248:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(31),i=a(35),l=r(a(249)),o=(0,n.connect)(null,{setRandomParticipant:i.setRandomParticipant})(l.default);t.default=o},249:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(250);var n=r(a(0)),i=a(21),l=r(a(71)),o=r(a(251)),c=function(e){var t=e.setRandomParticipant;return n.default.createElement("div",{className:"roulette-button"},n.default.createElement(l.default,{variant:"contained",color:"primary",onClick:t},n.default.createElement(i.FormattedMessage,{id:"roulette"}),n.default.createElement(o.default,null)))};t.default=c},250:function(e,t,a){},252:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SelectedParticipant",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var n=r(a(253)),i=r(a(318)),l=n.default;t.default=l},253:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(254);var n=r(a(0)),i=a(31),l=r(a(255)),o=r(a(135)),c=a(21),u=a(35),d=r(a(139)),s=(0,i.connect)((function(e){return{participants:e.participantsState.participants,selectedParticipant:e.participantsState.selectedParticipant}}),{removeParticipant:u.removeParticipant})((function(e){var t=e.participants,a=e.selectedParticipant,r=e.removeParticipant;return n.default.createElement("div",{className:"participants"},n.default.createElement("div",{className:"row"},t.length?function(){var e=a?a.name:null;return t.map((function(t,a){var i=t.name,c=(0,l.default)(e,i);return n.default.createElement("div",{key:"participant-".concat(a),className:"col-md-3"},n.default.createElement(d.default,{active:c,description:(0,o.default)(t,"description","An awesome member!"),index:a,name:i,removeParticipant:r}))}))}():n.default.createElement("div",{className:"participants__no-content"},n.default.createElement(c.FormattedMessage,{id:"participants-empty"}))))}));t.default=s},254:function(e,t,a){},313:function(e,t,a){},315:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(316)).default;t.default=n},316:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=a(490),l=r(a(492)),o=r(a(498)),c=r(a(496)),u=r(a(495)),d=r(a(493)),s=r(a(497)),f=r(a(141)),p=a(489),v=r(a(317)),m=(0,i.makeStyles)((function(){return{card:{maxWidth:345},cardTitle:{textAlign:"left"},cardRoot:{textAlign:"left",marginLeft:"74px",padding:0},cardActionRoot:{padding:"0 8px 8px 8px"},deleteIcon:{marginLeft:"auto"},avatar:{backgroundColor:p.red[500]}}})),P=function(e){var t=e.active,a=e.description,r=e.handleDeleteClick,i=e.title,p=m(),P=t?p.avatar:"",g=i?i.substring(0,1).toUpperCase():null;return n.default.createElement(l.default,{className:p.card},n.default.createElement(o.default,{avatar:n.default.createElement(d.default,{"aria-label":"avartar-letter",className:P},g),classes:{title:p.cardTitle},title:i}),n.default.createElement(c.default,{classes:{root:p.cardRoot}},n.default.createElement(f.default,{color:"textSecondary",component:"p"},a)),n.default.createElement(u.default,{classes:{root:p.cardActionRoot},disableSpacing:!0},n.default.createElement(s.default,{className:p.deleteIcon,onClick:r,"aria-label":"delete"},n.default.createElement(v.default,null))))};t.default=P},318:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(319);var n=r(a(0)),i=a(31),l=a(35),o=r(a(139)),c=(0,i.connect)((function(e){return{selectedParticipant:e.participantsState.selectedParticipant}}),{removeParticipant:l.removeParticipant})((function(e){var t=e.selectedParticipant,a=e.removeParticipant;return t?n.default.createElement("div",{className:"col-md-12 selected-participant"},n.default.createElement(o.default,{active:!0,description:t.description,index:t.index,name:t.name,selected:!0,removeParticipant:a})):null}));t.default=c},319:function(e,t,a){},320:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.rootReducer=void 0;var n=a(72),i=r(a(321)),l=(0,n.combineReducers)({participantsState:i.default});t.rootReducer=l},321:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=r(a(80)),l=a(174),o=a(35);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=(0,l.handleActions)((n={},(0,i.default)(n,o.actions.setSelectedParticipant,(function(e,t){return u({},e,{selectedParticipant:t.payload.selectedParticipant})})),(0,i.default)(n,(0,l.combineActions)(o.actions.removeParticipantListSuccess,o.actions.updateParticipantList),(function(e,t){return u({},e,{participants:t.payload.participants,selectedParticipant:null})})),(0,i.default)(n,o.actions.updateParticipantListError,(function(e,t){return u({},e,{error:t.payload.error,selectedParticipant:null})})),n),{fetching:!1,participants:[],selectedParticipant:null,error:null});t.default=d},322:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=a(95),l=r(a(361)),o=r(a(477)),c=(0,i.createDevTools)(n.default.createElement(o.default,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q",defaultIsVisible:!1},n.default.createElement(l.default,{theme:"tomorrow"})));t.default=c},35:function(e,t,a){"use strict";var r=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.removeParticipant=t.setRandomParticipant=t.fileUpload=t.actions=void 0;var n=r(a(80)),i=a(174),l=r(a(232)),o=r(a(239));function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var u=(0,i.createActions)(o.default.SET_SELECTED_PARTICIPANT,o.default.REMOVE_PARTICIPANT_LIST_SUCCESS,o.default.UPDATE_PARTICIPANT_LIST,o.default.UPDATE_PARTICIPANT_LIST_ERROR);t.actions=u;t.setRandomParticipant=function(){return function(e,t){var a=t().participantsState.participants;if(a.length){var r=(0,l.default)(0,a.length-1),i=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a[r],{index:r});e(u.setSelectedParticipant({selectedParticipant:i}))}}};t.removeParticipant=function(e){return function(t,a){var r=a().participantsState.participants.slice();0===e?r.shift():r.splice(e,1),t(u.removeParticipantListSuccess({participants:r}))}};t.fileUpload=function(e){return function(t){if(e){var a=new FileReader;a.onload=function(e){try{var a=JSON.parse(e.target.result);t(u.updateParticipantList({participants:a}))}catch(r){t(u.updateParticipantListError({error:r}))}},a.readAsText(e)}}}},487:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.saveState=t.loadState=void 0;t.loadState=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}};t.saveState=function(e){try{localStorage.setItem("state",JSON.stringify(e))}catch(t){}}},488:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=function(e){if("serviceWorker"in navigator){if(new URL("/scrum-daily-leader",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/scrum-daily-leader","/service-worker.js");r?(!function(e,t){fetch(e).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):n(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):n(t,e)}))}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))};var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}}},[[181,1,2]]]);
//# sourceMappingURL=main.6d33edc1.chunk.js.map