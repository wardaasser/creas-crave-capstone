(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,o){},22:function(e,t,o){},43:function(e,t,o){"use strict";o.r(t);var a=o(1),i=o.n(a),r=o(16),n=o.n(r),s=(o(21),o(2)),c=(o(22),o.p+"static/media/headShoulder.90e776a8.png"),l=o(0),d=function(e){var t=e.searchInput,o=e.setSearchInput;return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light bglmccsblue",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/creas-crave-capstone/",children:"CREAS CRAVE"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse navbar-left",id:"navbarSupportedContent",children:Object(l.jsxs)("div",{className:"row",style:{marginTop:10,marginRight:20},children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("form",{className:"d-flex",children:Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"get creative","aria-label":"Search",value:t,onChange:function(e){o(e.target.value)},id:"searchInput"})})}),Object(l.jsx)("div",{className:"col-1",children:Object(l.jsx)("a",{href:"https://creas-crave-frontend.herokuapp.com/",children:Object(l.jsx)("img",{className:"img-responsive",style:{height:34,marginTop:3,paddingRight:410},src:c,alt:"Head and Shoulders",id:"headShoulder"})})})]})})]})})})})},u=o(6),v=o.n(u),b=function(e,t){return e===t?"":t},j=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),o=t[0],i=t[1],r=Object(a.useState)(""),n=Object(s.a)(r,2),c=n[0],d=n[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),f=j[0],p=j[1];return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",id:"bodyLinks",style:{background:o?"#360836":"#545454"},children:[Object(l.jsx)("span",{className:"col bodyLinks bodyLinkSubscribe",id:"toSubscribe",onClick:function(){var e=b(o,"subscribe");i(e)},style:{textDecoration:"subscribe"===o?"underline":"none"},children:"SUBSCRIBE"}),Object(l.jsx)("span",{className:"col bodyLinks bodyLinkConnect",id:"toConnect",onClick:function(){var e=b(o,"connect");i(e)},style:{textDecoration:"connect"===o?"underline":"none"},children:"CONNECT"}),Object(l.jsx)("span",{className:"col bodyLinks bodyLinkMyStory",id:"toMyStory",onClick:function(){var e=b(o,"myStory");i(e)},style:{textDecoration:"myStory"===o?"underline":"none",zIndex:3},children:"MY STORY"}),Object(l.jsx)("span",{className:"col bodyLinks bodyLinkPricing",id:"toPricing",onClick:function(){var e=b(o,"pricing");i(e)},style:{textDecoration:"pricing"===o?"underline":"none"},children:"PRICING"}),Object(l.jsx)("span",{className:"col bodyLinks bodyLinkUnsubscribe",id:"toUnsubscribe",onClick:function(){var e=b(o,"unsubscribe");i(e)},style:{textDecoration:"unsubscribe"===o?"underline":"none"},children:"UNSUBSCRIBE"}),Object(l.jsxs)("div",{className:"row",id:"underBodyLinks",children:["subscribe"===o?Object(l.jsx)("div",{className:"col",id:"bodyLinkSubscribe",children:Object(l.jsx)("div",{className:"row",style:{marginTop:""===o?0:37},children:Object(l.jsx)("span",{className:"row",id:"toSubscribe",children:Object(l.jsxs)("div",{className:"input-group",id:"input-groupForm",children:[Object(l.jsx)("input",{type:"text",className:"form-control",id:"emailInput",placeholder:"enter email to subscribe","aria-label":"your email","aria-describedby":"submit",value:c,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-dark",id:"toInputInSubscribe",onClick:function(){var e=c;d(""),v.a.post("https://creas-crave-backend.herokuapp.com/subscribers",{emailAddress:e,subscribed:!0}).then((function(){alert("Subscribed!")}))},style:{backgroundColor:"#360836",borderColor:"#5ce1e6"},children:"submit"})]})})})}):null,"connect"===o?Object(l.jsx)("div",{className:"col",id:"bodyLinkConnect",style:{marginTop:""===o?0:15,marginBottom:-20},children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("span",{className:"row",id:"toConnect",children:Object(l.jsx)("a",{href:"https://www.latoniamertica.dev",style:{textDecoration:"none"},target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("p",{id:"gatewayText",children:["digital"," ",Object(l.jsxs)("span",{id:"portfolioText",children:[Object(l.jsx)("span",{id:"curlyBraces",children:"{"}),"\xa0portfolio\xa0",Object(l.jsx)("span",{id:"curlyBraces",children:"}"})]})," ","gateway"]})})})})}):null,"myStory"===o?Object(l.jsx)("div",{className:"col",id:"bodyLinkMyStory",children:Object(l.jsx)("div",{className:"row",style:{marginTop:""===o?0:27,marginBottom:-17},children:Object(l.jsx)("span",{className:"row",id:"toMyStory",children:Object(l.jsxs)("p",{className:"centerStoryText",children:["words and writing inspire me to communicate exceptionally",Object(l.jsx)("br",{}),Object(l.jsx)("span",{id:"dashSign",children:"- "}),"without lack of appreciation for effort required",Object(l.jsx)("span",{id:"dashSign",children:" -"})," ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{id:"mostChallengingCommitment",children:"code/web dev is my most challenging commitment to exceptional communication"})]})})})}):null,"pricing"===o?Object(l.jsx)("div",{className:"col",id:"bodyLinkPricing",children:Object(l.jsx)("div",{className:"row",style:{marginTop:""===o?0:25,marginBottom:-35,zIndex:2},children:Object(l.jsx)("div",{children:Object(l.jsx)("span",{className:"row",id:"toPricing",children:Object(l.jsxs)("p",{className:"pricingText justify-content-center",children:[Object(l.jsx)("sup",{id:"dollarSign",children:"$"}),Object(l.jsx)("span",{id:"fortyFour",children:"44"}),Object(l.jsx)("span",{id:"perVideo",children:"per video"})]})})})})}):null,"unsubscribe"===o?Object(l.jsx)("div",{className:"col",id:"bodyLinkUnsubscribe",children:Object(l.jsx)("div",{className:"row",style:{marginTop:""===o?0:37},children:Object(l.jsx)("span",{className:"row",id:"toUnsubscribe",children:Object(l.jsxs)("div",{className:"input-group",id:"input-groupForm",children:[Object(l.jsx)("input",{type:"text",className:"form-control",id:"emailInput",placeholder:"unsubscribe your email","aria-label":"your email","aria-describedby":"submit",value:f,onChange:function(e){return p(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-dark",id:"toInputInUnsubscribe",onClick:function(){var e=f;p(""),v.a.post("https://creas-crave-backend.herokuapp.com/subscribers",{emailAddress:e,subscribed:!1}).then((function(){alert("Unsubscribed!")}))},style:{backgroundColor:"#360836",borderColor:"#5ce1e6"},children:"submit"})]})})})}):null]})]})})},f=o(4),p=o.n(f),m=o(7),g=o.p+"static/media/lmDevLogo.2699b641.png",h=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),o=t[0],i=t[1],r=Object(a.useState)(),n=Object(s.a)(r,2),c=n[0],d=n[1];return Object(a.useEffect)((function(){Object(m.a)(p.a.mark((function e(){var t,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://creas-crave-backend.herokuapp.com/weatherSanJose",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent,i(Math.round(o.sanJoseTemp));case 7:case"end":return e.stop()}}),e)})))(),Object(m.a)(p.a.mark((function e(){var t,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://creas-crave-backend.herokuapp.com/weatherAlbany",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent,d(Math.round(o.albanyTemp));case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(l.jsxs)("div",{className:"container-fluid",id:"lineHte",children:[Object(l.jsxs)("div",{className:"row",style:{marginTop:-45,backgroundColor:"#c8c4bd"},children:[Object(l.jsx)("div",{className:"col-4"}),Object(l.jsxs)("div",{className:"col-4",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-3",children:o?Object(l.jsxs)("p",{style:{marginTop:60,fontFamily:"Madrone Std",fontSize:27,color:"#360836"},children:[o,"\xb0",Object(l.jsx)("br",{}),Object(l.jsx)("span",{style:{fontFamily:"Glacial Indifference",fontSize:7,lineHeight:5},children:"costa rica"})]}):null}),Object(l.jsx)("div",{className:"col-6",children:Object(l.jsx)("h1",{className:"capstone",style:{paddingTop:25,textAlign:"center"},children:"CAPSTONE"})}),Object(l.jsx)("div",{className:"col-3",children:c?Object(l.jsxs)("p",{style:{marginTop:60,fontFamily:"Madrone Std",fontSize:27,color:"#360836"},children:[c,"\xb0",Object(l.jsx)("br",{}),Object(l.jsx)("span",{style:{fontFamily:"Glacial Indifference",fontSize:7,lineHeight:5},children:"new york"})]}):null})]}),Object(l.jsx)("h2",{id:"capstone",style:{marginTop:-10},children:"Creas Crave eCommerce Portfolio"}),Object(l.jsx)("center",{children:Object(l.jsxs)("p",{id:"capstoneBlurb",style:{lineHeight:1.25,textAlign:"justify",color:"#545454",paddingBottom:25},children:["Create a portfolio-style eCommerce website titled 'CREAS CRAVE'. Fully wired. Fully operational. Offering original, high-quality b-roll videos in the left column. Unedited. In the right column, offering original high-quality b-roll videos - modestly edited to illustrate possibilities. All video quality reflects the original content as captured. All video captured at immersion visit in Costa Rica. Left column temperature based on San Jose, capital of Costa Rica, Central America api data from openWeatherApi. Right column temperature based on Albany, capital of New York, United States api data.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," Each video ideal to serve as complementary footage if/when used in others' video projects.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Essentially, my goal is to showcase my creative and design skills from content to website produced."]})}),Object(l.jsx)("br",{})]})]}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("img",{className:"mx-auto d-block img-responsive",id:"lmdev-logo",src:g,style:{width:"40%"},alt:"La'Tonia Mertica dot dev logo"})})})}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",id:"footer-details",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("h2",{children:Object(l.jsxs)("span",{className:"notbold",children:[Object(l.jsx)("p",{children:"La'Tonia Mertica"}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["(",Object(l.jsx)("span",{className:"pronunciation",children:"luh tone yuh merr treece"}),")"]})}),Object(l.jsx)("p",{id:"lmTitle",children:"Founder & Executive Officer"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"PUBLICLY ANONYMOUS, LLC"}),Object(l.jsx)("p",{children:"\xa92019-2021 La'Tonia Mertica 'Communications & Creatives Specialist'"}),Object(l.jsx)("p",{children:"All Rights Reserved"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"2200 South Salina Street #684"}),Object(l.jsx)("p",{children:"Syracuse, New York 13205"}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"mailto: designs@latoniamertica.com",target:"_blank",rel:"noreferrer",id:"emailLink",className:"emailHover",children:"designs@latoniamertica.com"})}),Object(l.jsx)("br",{})]})})})})})]})},O=o.p+"static/media/PalmTree.50f7f0e9.mp4",w=o.p+"static/media/plusSignFavIcon.1e89132c.png";function x(){var e="Main Top Video",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:O,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"mainTopVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"3%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/VmnNl",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none",role:"button"},"data-cy":"buy-main-vid",children:"BUY NOW"})]})}var y=o.p+"static/media/PalmTreeFull.bed4d015.mp4";function S(){var e="Palm Tree Full",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:y,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"palmTreeFullVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/hrxFaI",style:{position:"absolute",bottom:44,left:60,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var F=o.p+"static/media/PalmTreeFullStyled.a2c26c0b.mp4";function N(){var e="Palm Tree Full Styled",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:F,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"palmTreeFullStyledVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:50,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/cDijE",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var I=o.p+"static/media/CrocWalk.fe2b0f14.mp4";function k(){var e="Croc Walk",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:I,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"crocWalkVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/DQfpJ",style:{position:"absolute",bottom:44,left:60,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var C=o.p+"static/media/CrocWalkStyled.bfd8de4b.mp4";function T(){var e="Croc Walk Styled",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:C,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"crocWalkStyledVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:50,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/ftskH",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var L=o.p+"static/media/RockyWater.c6efbf66.mp4";function z(){var e="Rocky Water",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:L,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"rockyWaterVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/fiCHfL",style:{position:"absolute",bottom:44,left:60,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var P=o.p+"static/media/RockyWaterStyled.69271c51.mp4";function M(){var e="Rocky Water Styled",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:P,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"rockyWaterStyledVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:50,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/tUVpr",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var E=o.p+"static/media/Leaf.509fad0c.mp4";function B(){var e="Leaf",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:E,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"leafVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/AfVsy",style:{position:"absolute",bottom:44,left:60,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var U=o.p+"static/media/LeafStyled.ccb93c49.mp4";function W(){var e="Leaf Styled",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:U,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"leafStyledVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:50,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/VsCwT",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var D=o.p+"static/media/WaterWalk.30a873f3.mp4";function V(){var e="Water Walk",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:D,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"waterWalkVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/rBovh",style:{position:"absolute",bottom:44,left:60,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var A=o.p+"static/media/WaterWalkStyled.1c77f41b.mp4";function R(){var e="Water Walk Styled",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:A,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"waterWalkStyledVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:50,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/dPNuE",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var Y=o.p+"static/media/FloralFloor.b34d55a6.mp4";function H(){var e="Floral Floor",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:Y,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"floralFloorVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:60,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/oUVrcH",style:{position:"absolute",bottom:44,left:60,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var J=o.p+"static/media/FloralFloorStyled.7bca8da3.mp4";function q(){var e="Floral Floor Styled",t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites=""),window.localStorage.favoriteFavorites.split(",").includes(e)&&r(!0)}),[]),Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("video",{autostart:"true",autoPlay:!1,muted:"muted",src:J,className:"vidContainer",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},loop:!0,id:"floralFloorStyledVideo",type:"video/mp4"}),Object(l.jsx)("a",{className:"favIcon",href:"/favorites",style:{position:"absolute",bottom:81,left:50,zIndex:6,role:"button"},children:Object(l.jsx)("img",{className:"plusSignFavIcon img-responsive ".concat(i?"favorited":""),style:{width:"5%"},src:w,alt:"Plus Sign Icon",id:"plusSignFavIcon",title:"Fav This!",onClick:function(t){t.preventDefault(),r(!i),window.localStorage.favoriteFavorites||(window.localStorage.favoriteFavorites="");var o=window.localStorage.favoriteFavorites.split(",");o.includes(e)?(alert("No Longer Favorited!"),o=o.filter((function(t){return t!==e}))):(o.push(e),alert("Faved!")),window.localStorage.favoriteFavorites=o.join(",")}})}),Object(l.jsx)("a",{className:"btn btn-secondary zoom",href:"https://gumroad.com/l/ZNlxf",style:{position:"absolute",bottom:44,left:50,zIndex:5,backgroundColor:"#5ce1e6",border:"none"},children:"BUY"})]})}var G=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),o=t[0],i=t[1],r=[{original:Object(l.jsx)(V,{}),styled:Object(l.jsx)(R,{}),tags:["water","walk","feet","beach","ocean","stroll","sand"]},{original:Object(l.jsx)(k,{}),styled:Object(l.jsx)(T,{}),tags:["croc","walk","reptile","water","semiaquatic","slither","sand"]},{original:Object(l.jsx)(S,{}),styled:Object(l.jsx)(N,{}),tags:["palm","tree","sky","wind","shadow","leaves","evergreen"]},{original:Object(l.jsx)(B,{}),styled:Object(l.jsx)(W,{}),tags:["leaf","stem","wind","breeze","plant","leaves","yard"]},{original:Object(l.jsx)(z,{}),styled:Object(l.jsx)(M,{}),tags:["rocky","water","rock","beach","ocean","bird","sand"]},{original:Object(l.jsx)(H,{}),styled:Object(l.jsx)(q,{}),tags:["floral","floor","pond","water","bird","reflection","leaves"]}],n=r.filter((function(e){return e.tags.includes(o)})),c=n.length?n:r;return Object(l.jsxs)("div",{className:"App container-fluid",children:[Object(l.jsx)(d,{searchInput:o,setSearchInput:i}),Object(l.jsx)(x,{}),Object(l.jsx)(j,{}),c.map((function(e,t){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col noPadding",children:e.original}),Object(l.jsx)("div",{className:"col noPadding",children:e.styled})]},t)})),Object(l.jsx)(h,{})]})},_=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,44)).then((function(t){var o=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;o(e),a(e),i(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root")),_()}},[[43,1,2]]]);
//# sourceMappingURL=main.904203c3.chunk.js.map