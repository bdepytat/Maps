(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{280:function(t,n,l){var content=l(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(82).default)("dba04c88",content,!0,{sourceMap:!1})},281:function(t,n,l){"use strict";l(280)},282:function(t,n,l){var e=l(81)((function(i){return i[1]}));e.push([t.i,"#map,body,html{height:100%;width:100vw}",""]),e.locals={},t.exports=e},283:function(t,n,l){"use strict";l.r(n);var e=[{text:"місто Карлівка, вул. Гурамішвілі 1, водозабір",latlng:[49.443653,35.103844]},{text:"місто Кобеляки, вул Покрівська 69 А, колонка",latlng:[49.141508,34.191188]},{text:"місто Кобеляки, вул Покрівська 96, колонка",latlng:[49.144222,34.190514]},{text:"місто Кобеляки, вул. Космонавтів, колонка",latlng:[49.143592,34.209364]},{text:"місто Кобеляки, парк перемоги, бювет",latlng:[49.149287,34.207131]},{text:"місто Кобеляки, парк Перемоги, колонка",latlng:[49.140773,34.211968]}],o={name:"NuxtTutorial",data:function(){return{zoom:13,center:[49.143592,34.209364],url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:""}},computed:{points:function(){return e}}},r=l(64),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticStyle:{height:"100vh"},attrs:{id:"map-wrap"}},[n("l-map",{attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),t._l(t.points,(function(l,e){return n("l-marker",{key:e,attrs:{"lat-lng":l.latlng}},[n("l-popup",[t._v(t._s(l.text))])],1)}))],2)],1)}),[],!1,null,null,null),c={name:"IndexPage",components:{NuxtTutorial:component.exports}},x=(l(281),Object(r.a)(c,(function(){return(0,this._self._c)("NuxtTutorial")}),[],!1,null,null,null));n.default=x.exports}}]);