(this["webpackJsonpbrew-calculator"]=this["webpackJsonpbrew-calculator"]||[]).push([[0],{11:function(e,a,t){e.exports={calculatorBody:"Calculator_calculatorBody__2yrFQ",calculatorScreen:"Calculator_calculatorScreen__1BdXP",calculatorInput:"Calculator_calculatorInput__UMc3U",calculatorMeasurementType:"Calculator_calculatorMeasurementType__3F66U",calculatorName:"Calculator_calculatorName__2I4P3",measurementWrapper:"Calculator_measurementWrapper__1ltP3",measurement:"Calculator_measurement__3qnGr",measurementBackground:"Calculator_measurementBackground__2qL8Y",measurementBackgroundActive:"Calculator_measurementBackgroundActive__1KlV-",calculatorMeasurementSelect:"Calculator_calculatorMeasurementSelect__3mLfy",calculatorMeasurement:"Calculator_calculatorMeasurement__2HqLK",calculatorMeasurementActive:"Calculator_calculatorMeasurementActive__3yDCH"}},12:function(e,a,t){e.exports={app:"App_app__101rE",mainWrapper:"App_mainWrapper__24gO4",headerWrapper:"App_headerWrapper__2o7dW",logo:"App_logo__7IXQI",nav:"App_nav__1KvSs",pageLink:"App_pageLink__WxdFa",footerWrapper:"App_footerWrapper__vwbnD",footerCopy:"App_footerCopy__1157v"}},15:function(e,a,t){e.exports={hero:"Home_hero__cxkVv",title:"Home_title__2jL4m",brewTypeSelectWrapper:"Home_brewTypeSelectWrapper__688DJ",brewTypeSelect:"Home_brewTypeSelect__3i5Je",brewTypeOption:"Home_brewTypeOption__-D0mX",downArrow:"Home_downArrow__175EX",calculatorBackground:"Home_calculatorBackground__3MyX6",divider:"Home_divider__1NOMF"}},16:function(e,a,t){e.exports={wrapper:"About_wrapper__2blA8",title:"About_title__2uHJk",image:"About_image__1QlLb",paragraph:"About_paragraph__3onEv"}},37:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var r=t(2),c=t.n(r),o=t(23),n=t.n(o),l=(t(37),t.p+"static/media/logo.2fedae7e.png"),s=t.p+"static/media/brewculatorImage.56746322.png",i=t(16),p=t.n(i),u=t(1);function m(e){return Object(u.jsxs)("div",{className:p.a.wrapper,children:[Object(u.jsx)("h1",{className:p.a.title,children:"About us"}),Object(u.jsx)("img",{src:s,alt:"Brewculator logo with background",className:p.a.image}),Object(u.jsx)("p",{className:p.a.paragraph,children:"Brewculator is a passion project of Alexander Traykov and Petar Dyakov. It was born when Alex noticed that while brewing, he had to double-check the specific ratios, then find a calculator, then find a timer and after all that's set up he actually focus on the craft of making a cup."}),Object(u.jsx)("p",{className:p.a.paragraph,children:"All of these complications started bothering him and did impact the quality of my coffee at times. At that moment the idea was born - Petar and Alex should make a calculator that has a bunch of pre-made ratios for the most popular brewing methods, fine control over the measuring units and probably some general tips of the brewing method itself."}),Object(u.jsx)("p",{className:p.a.paragraph,children:"So here it is - some months later, lots of cups of coffee, design thinking and engineering we present you the Web variant of Brewculator."})]})}var d=t(5),b=t(3),j=t(28),h=t(26),_=t(11),f=t.n(_),O={from:{opacity:0,y:-50},to:{opacity:1,y:0}},g=function(e){var a=e.state,t=e.dispatch,r=e.name,c=Object(h.useSpring)((function(){return O})),o=Object(d.a)(c,2),n=o[0],l=o[1];return Object(u.jsxs)("div",{className:f.a.calculatorBody,children:[Object(u.jsx)("h3",{className:f.a.calculatorName,children:r}),Object(u.jsxs)("div",{className:f.a.calculatorScreen,children:[Object(u.jsx)(h.animated.div,{style:n,children:Object(u.jsx)("input",{className:[f.a.calculatorInput],placeholder:"0.00",maxLength:4,onChange:function(e){return a=e.target.value,c=r,void((""===a||/^-?\d*[.,]?\d*$/.test(a))&&t({type:"changeAmount",calculatorType:c,payload:a}));var a,c},value:a.amount})}),Object(u.jsx)(h.animated.div,{style:n,children:Object(u.jsx)("p",{className:f.a.calculatorMeasurementType,children:a.type})})]}),Object(u.jsx)("div",{className:f.a.measurementWrapper,children:Object(u.jsx)("div",{className:f.a.calculatorMeasurementSelect,children:a.availableTypes.map((function(c){return Object(u.jsxs)("div",{className:f.a.measurement,children:[Object(u.jsx)("div",{className:Object(j.classNames)(f.a.measurementBackground,a.type===c?f.a.measurementBackgroundActive:"")}),Object(u.jsx)("p",{className:Object(j.classNames)(f.a.calculatorMeasurement,"".concat(a.type===c&&f.a.calculatorMeasurementActive)),"data-measurement":c,onClick:function(e){return function(e,a){var r=e.target.getAttribute("data-measurement");t({type:"changeMeasurement",calculatorType:a,payload:r}),l.start(O)}(e,r)},title:e.name,children:c})]},c)}))})})]})},v={g:1,tsp:.24,tbsp:14.3,oz:.035274,bns:.1325},y={g:1,ml:1,L:.01,"fl.oz":.033814,C:64},w=[{name:"Aeropress",conversionRatio:6},{name:"French Press",conversionRatio:12},{name:"V60",conversionRatio:16.67},{name:"Chemex",conversionRatio:17},{name:"Moka Pot",conversionRatio:10},{name:"Cold Brew",conversionRatio:4.44},{name:"Siphon",conversionRatio:16.67},{name:"Espresso",conversionRatio:2}];function x(e,a,t){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(0===e.length)return"";var c=r?y[a]:v[a],o=r?y[t]:v[t],n=parseFloat(e)/parseFloat(c),l=parseFloat(n)*parseFloat(o);return parseFloat(l.toPrecision(3)).toString()}function N(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return 0===e.length?"":t?parseFloat(parseFloat(e)/parseFloat(a)).toPrecision(3).toString():parseFloat(parseFloat(e)*parseFloat(a)).toPrecision(3).toString()}var A=t.p+"static/media/down-arrow.95c0863b.svg",C=t(15),k=t.n(C),T={g:"g",tsp:"tsp",tbsp:"tbsp",oz:"oz",bns:"bns"},B={g:"g",ml:"ml",L:"L","fl.oz":"fl.oz",C:"C"},S={water:{type:B.g,amount:"",availableTypes:Object.values(B)},coffee:{type:T.g,amount:"",availableTypes:Object.values(T)},brewType:w[2]},M=function(e,a){switch(a.type){case"changeMeasurement":return"water"===a.calculatorType?Object(b.a)(Object(b.a)({},e),{},{water:Object(b.a)(Object(b.a)({},e.water),{},{amount:x(e.water.amount,e.water.type,a.payload),type:B[a.payload]})}):Object(b.a)(Object(b.a)({},e),{},{coffee:Object(b.a)(Object(b.a)({},e.coffee),{},{amount:x(e.coffee.amount,e.coffee.type,a.payload,!1),type:T[a.payload]})});case"changeAmount":return"water"===a.calculatorType?Object(b.a)(Object(b.a)({},e),{},{water:Object(b.a)(Object(b.a)({},e.water),{},{amount:a.payload}),coffee:Object(b.a)(Object(b.a)({},e.coffee),{},{amount:N(a.payload,e.brewType.conversionRatio)})}):Object(b.a)(Object(b.a)({},e),{},{water:Object(b.a)(Object(b.a)({},e.water),{},{amount:N(a.payload,e.brewType.conversionRatio,!0)}),coffee:Object(b.a)(Object(b.a)({},e.coffee),{},{amount:a.payload})});case"changeBrewType":return Object(b.a)(Object(b.a)({},e),{},{coffee:Object(b.a)(Object(b.a)({},e.coffee),{},{amount:N(e.water.amount,a.payload.conversionRatio)}),brewType:a.payload});default:throw new Error("Error setting state on measurement type.")}};function W(){var e=Object(r.useReducer)(M,S),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:k.a.hero,children:[Object(u.jsx)("h1",{className:k.a.title,title:"Brewculator",children:"Brewculator"}),Object(u.jsxs)("div",{className:k.a.brewTypeSelectWrapper,children:[Object(u.jsx)("select",{className:k.a.brewTypeSelect,onChange:function(e){return function(e,a){a({type:"changeBrewType",payload:w.find((function(a){return a.name===e.target.value}))})}(e,c)},defaultValue:t.brewType.name,children:w.map((function(e,a){return Object(u.jsx)("option",{className:k.a.brewTypeOption,value:e.name,children:e.name},e.name+a)}))}),Object(u.jsx)("img",{src:A,className:k.a.downArrow,alt:"Down Chevron"})]})]}),Object(u.jsxs)("div",{className:k.a.calculatorBackground,children:[Object(u.jsx)(g,{state:t.coffee,dispatch:c,name:"coffee beans"}),Object(u.jsx)("div",{className:k.a.divider}),Object(u.jsx)(g,{state:t.water,dispatch:c,name:"water"})]})]})}var F="home",L="about",P=Object(r.createContext)({page:F});function R(e){var a=e.children,t=Object(r.useState)(F),c=Object(d.a)(t,2),o=c[0],n=c[1],l=Object(r.useMemo)((function(){return{page:o,setPage:n}}),[o,n]);return Object(u.jsx)(P.Provider,{value:l,children:a})}var H=t(12),I=t.n(H),E=function(){var e=Object(r.useContext)(P),a=e.page,t=e.setPage;return Object(u.jsx)("div",{className:I.a.app,children:Object(u.jsxs)("div",{className:I.a.mainWrapper,children:[Object(u.jsxs)("div",{className:I.a.headerWrapper,children:[Object(u.jsx)("img",{src:l,alt:"Brewculator Logo",className:I.a.logo,onClick:function(){return t(F)}}),Object(u.jsx)("nav",{className:I.a.nav,children:Object(u.jsx)("p",{className:I.a.pageLink,onClick:function(){return t(L)},children:"about the project"})})]}),a===F&&Object(u.jsx)(W,{}),a===L&&Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:I.a.footerWrapper,children:[Object(u.jsx)("p",{className:I.a.footerCopy,children:"brewculator web"}),Object(u.jsx)("p",{className:I.a.footerCopy,children:"made by petar and alexander"})]})]})})};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(R,{children:Object(u.jsx)(E,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.542eb46e.chunk.js.map