(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{51:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(8),r=c.n(a),s=(c(51),c(27)),i=c.n(s),o=c(35),u=c(28),j=c(90),d=c(91),l=c(92),h=c(93),v=c(85),b=c(89),O=c(6),f=function(e){return Object(O.jsx)(v.a,{className:"card",children:Object(O.jsxs)(b.a,{className:"card__content",children:[Object(O.jsx)(j.a,{variant:"h5",color:"textPrimary",children:e.title}),Object(O.jsx)(j.a,{variant:"h4",color:"primary",children:e.cases}),Object(O.jsx)(j.a,{variant:"caption",color:"textSecondary",children:e.total+" in total"})]})})},p=(c(57),c(58),function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:t.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.country}),Object(O.jsx)("td",{children:e.cases})]},t)}))})}),x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("worldwide"),s=Object(u.a)(r,2),x=s[0],m=s[1],w=Object(n.useState)({}),y=Object(u.a)(w,2),_=y[0],N=y[1],k=Object(n.useState)([]),C=Object(u.a)(k,2),g=C[0],S=C[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return N(e)}))}),[]);var E=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target.value,m(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),fetch(n).then((function(e){return e.json()})).then((function(e){N(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));a(t),S(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app__header",children:[Object(O.jsx)(j.a,{variant:"h3",children:"Covid 19 tracker"}),Object(O.jsx)(d.a,{className:"app__dropdown",children:Object(O.jsxs)(l.a,{value:x,onChange:E,variant:"outlined",children:[Object(O.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e,t){return Object(O.jsx)(h.a,{value:e.value,children:e.name},t+1)}))]})})]}),Object(O.jsxs)("div",{className:"app__stats",children:[Object(O.jsx)(f,{title:"Live Cases",cases:_.todayCases,total:_.cases}),Object(O.jsx)(f,{title:"Recovered",cases:_.todayRecovered,total:_.recovered}),Object(O.jsx)(f,{title:"Deaths",cases:_.todayDeaths,total:_.deaths})]}),Object(O.jsx)("div",{className:"app__table",children:Object(O.jsx)(v.a,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a,{align:"center",variant:"h4",gutterBottom:!0,children:"Live Cases in Countries"}),Object(O.jsx)(p,{countries:g})]})})})]})};r.a.render(Object(O.jsx)(x,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.23144a45.chunk.js.map