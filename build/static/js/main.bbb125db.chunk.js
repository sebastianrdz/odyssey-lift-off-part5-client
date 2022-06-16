(this["webpackJsonpcatstronauts-client-complete"]=this["webpackJsonpcatstronauts-client-complete"]||[]).push([[0],{408:function(e,t,n){"use strict";n.r(t);var i,c,r=n(0),o=n(179),a=n.n(o),d=n(9),l=n(180),s=(n(195),n(27)),h=n(17),j=n(2),b=n(106),x=n(107),g=n(108),u=n(109),p=(n(110),n(111)),m=n(112),O=n(113),f=n(114),v=[480,768,992,1200].map((function(e){return"@media (min-width: ".concat(e,"px)")})),k=1600,w=1100,S=800,y=Object(l.a)({primary:s.colors.indigo.base,secondary:s.colors.teal.base,accent:s.colors.pink.base,background:s.colors.silver.light,grey:s.colors.silver.dark,text:s.colors.black.base,textSecondary:s.colors.grey.dark},s.colors),z=function(){var e;return Object(j.jsx)(h.Global,{styles:(e={},Object(d.a)(e,["html","body"],{height:"100%"}),Object(d.a)(e,"body",{margin:0,padding:0,fontFamily:"'Source Sans Pro', sans-serif",backgroundColor:y.background,color:y.text}),Object(d.a)(e,"#root",{display:"flex",flexDirection:"column",minHeight:"100%",backgroundImage:'url("/space_kitty_pattern.png")'}),Object(d.a)(e,"*",{boxSizing:"border-box"}),Object(d.a)(e,["h1","h2","h3","h4","h5","h6"],{margin:0,fontWeight:600}),Object(d.a)(e,"h1",{fontSize:40,lineHeight:1}),Object(d.a)(e,"h2",{fontSize:36}),Object(d.a)(e,"h3",{fontSize:30}),Object(d.a)(e,"h5",{fontSize:16,textTransform:"uppercase",letterSpacing:4}),e)})},R=n(21),q=n(31),C=n(420),I=n(422),D=n(10),V=n(4),A=function(e){if(e<60)return"".concat(e,"s");var t=Math.floor(e/60),n=Math.floor(t/60)||0,i=t%60,c="";return n>0&&(c+="".concat(n,"h ")),c+="".concat(i,"m")},F=n(423),H=Object(C.a)(i||(i=Object(q.a)(["\n  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n"]))),B=function(e){var t=e.track,n=t.title,i=t.thumbnail,c=t.author,r=t.length,o=t.modulesCount,a=t.id,d=Object(F.a)(H,{variables:{incrementTrackViewsId:a},onCompleted:function(e){console.log(e)}}),l=Object(D.a)(d,1)[0];return Object(j.jsx)(K,{to:"/track/".concat(a),onClick:l,children:Object(j.jsxs)(T,{children:[Object(j.jsx)(J,{children:Object(j.jsx)(W,{src:i,alt:n})}),Object(j.jsxs)(L,{children:[Object(j.jsx)(P,{children:n||""}),Object(j.jsxs)(N,{children:[Object(j.jsx)(Z,{src:c.photo}),Object(j.jsxs)(G,{children:[Object(j.jsx)(U,{children:c.name}),Object(j.jsxs)(X,{children:[o," modules - ",A(r)]})]})]})]})]})})},K=Object(V.a)(R.a)((c={borderRadius:6,color:y.text,backgroundSize:"cover",backgroundColor:"white",boxShadow:"0px 1px 5px 0px rgba(0,0,0,0.15)",backgroundPosition:"center",display:"flex",flexDirection:"column",justifyContent:"space-between"},Object(d.a)(c,v[0],{width:"90%"}),Object(d.a)(c,v[1],{width:"47%"}),Object(d.a)(c,v[2],{width:"31%"}),Object(d.a)(c,"height",380),Object(d.a)(c,"margin",10),Object(d.a)(c,"overflow","hidden"),Object(d.a)(c,"position","relative"),Object(d.a)(c,":hover",{backgroundColor:y.pink.lightest}),Object(d.a)(c,"cursor","pointer"),Object(d.a)(c,"textDecoration","none"),c)),T=V.a.div({display:"flex",flexDirection:"column",justifyContent:"space-around",height:"100%"}),P=V.a.h3({textAlign:"center",fontSize:"1.4em",lineHeight:"1em",fontWeight:700,color:y.text,flex:1}),J=V.a.div({height:220,position:"relative","::after":{content:'""',position:"absolute",top:0,bottom:0,left:0,right:0,background:"rgba(250,0,150,0.20)"}}),W=V.a.img({objectFit:"cover",width:"100%",height:"100%",filter:"grayscale(60%)"}),L=V.a.div({padding:18,flex:1,display:"flex",color:y.textSecondary,flexDirection:"column",justifyContent:"space-around"}),N=V.a.div({display:"flex",flexDirection:"Row"}),Z=V.a.img({height:30,width:30,marginRight:8,borderRadius:"50%",objectFit:"cover"}),G=V.a.div({display:"flex",flexDirection:"column",justifyContent:"space-between"}),U=V.a.div({lineHeight:"1em",fontSize:"1.1em"}),X=V.a.div({fontSize:"0.8em"}),Y=function(e){e.children;return Object(j.jsxs)(Q,{children:["2021 \xa9"," ",Object(j.jsx)(E,{children:Object(j.jsx)(O.ApolloIcon,{width:"100px",height:"40px"})})]})},Q=V.a.div({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",color:y.pink.base,marginTop:30,height:200,padding:20,backgroundColor:"white",borderTop:"solid 1px ".concat(y.pink.light)}),E=V.a.div({height:40,marginLeft:5,svg:{height:40}}),M=function(e){var t=e.children;return Object(j.jsx)($,{children:Object(j.jsxs)(_,{children:[Object(j.jsx)(te,{children:Object(j.jsx)(ee,{to:"/",children:Object(j.jsxs)(ne,{children:[Object(j.jsx)(ie,{children:Object(j.jsx)(ce,{src:"data:image/png;base64,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"})}),Object(j.jsxs)(re,{children:[Object(j.jsx)("h3",{children:"Catstronaut"}),Object(j.jsx)("div",{children:"Kitty space academy"})]})]})})}),t]})})},$=V.a.div({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderBottom:"solid 1px ".concat(y.pink.light),boxShadow:"0px 1px 5px 0px rgba(0,0,0,0.15)",padding:"5px 30px",minHeight:80,backgroundColor:"white"}),_=V.a.div({width:"".concat(w,"px")}),ee=Object(V.a)(R.a)({textDecoration:"none"}),te=V.a.div({display:"flex",flex:1}),ne=V.a.div({display:"flex",flexDirection:"row",color:y.accent,alignItems:"center",":hover":{color:y.pink.dark}}),ie=V.a.div({display:"flex",alignSelf:"center"}),ce=V.a.img({height:60,width:60,marginRight:8}),re=V.a.div({display:"flex",flexDirection:"column",h3:{lineHeight:"1em",marginBottom:0},div:{fontSize:"0.9em",lineHeight:"0.8em",paddingLeft:2}}),oe=function(e){var t=e.fullWidth,n=e.children,i=e.grid;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(M,{}),Object(j.jsx)(ae,{fullWidth:t,grid:i,children:n}),Object(j.jsx)(Y,{})]})},ae=V.a.div((function(e){return{display:"flex",justifyContent:e.grid?"center":"top",flexDirection:e.grid?"row":"column",flexWrap:"wrap",alignSelf:"center",flexGrow:1,maxWidth:e.fullWidth?null:"".concat(w,"px"),width:"100%",padding:e.fullWidth?0:16,paddingBottom:40}}));function de(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var le,se,he,je=function(e){var t=e.children;return Object(j.jsx)(be,{children:t})},be=V.a.div({marginTop:10,display:"flex",flexDirection:"column",maxWidth:S,width:"100%",alignSelf:"center",backgroundColor:y.background}),xe=n(185),ge=n.n(xe),ue=function(e){var t=e.module,n=e.track;return Object(j.jsxs)(pe,{children:[Object(j.jsx)(me,{children:Object(j.jsx)("h4",{children:Object(j.jsx)(R.a,{to:"../..",children:n.title})})}),Object(j.jsx)(Oe,{children:n.modules.map((function(e){return Object(j.jsx)(fe,{children:Object(j.jsx)("div",{children:Object(j.jsx)(ve,{to:"../".concat(e.id),children:Object(j.jsxs)(ke,{isActive:e.id===t.id,children:[e.id===t.id?Object(j.jsx)(m.IconDoubleArrowRight,{width:"14px"}):Object(j.jsx)(p.IconArrowRight,{width:"14px",weight:"thin"}),Object(j.jsx)("div",{children:e.title}),Object(j.jsx)("div",{children:A(e.length)})]})})})},"module_".concat(e.id))}))})]})},pe=V.a.div({width:"33%",position:"relative",marginLeft:20,backgroundColor:y.black.light,borderRadius:4,border:"solid 1px ".concat(y.black.lighter),overflow:"auto"}),me=V.a.div({display:"flex",position:"sticky",fontSize:"1.6em",fontWeight:"400",height:70,alignItems:"center",justifyContent:"center",textAlign:"center",backgroundColor:"colors.pink.base",borderBottom:"solid 1px ".concat(y.pink.base),a:{textDecoration:"none",color:y.silver.base},":hover":{backgroundColor:y.black.base}}),Oe=V.a.ul({listStyle:"none",margin:0,padding:0,overflowY:"scroll",height:"calc(100% - ".concat(70,"px)")}),fe=V.a.li((function(e){return{borderBottom:"solid 1px ".concat(y.grey.darker),":last-child":{borderBottom:"none"}}})),ve=Object(V.a)(R.a)({textDecoration:"none",display:"flex",alignItems:"center"}),ke=V.a.div((function(e){return{backgroundColor:e.isActive?y.black.base:y.black.light,color:e.isActive?y.silver.lighter:y.silver.darker,minHeight:80,padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"1.1em",flex:1,":hover":{backgroundColor:e.isActive?y.black.dark:y.black.base,color:"white"}}})),we=n(186),Se=n.n(we),ye=function(e){var t=e.content;return Object(j.jsx)(ze,{children:t})},ze=Object(V.a)(Se.a)({color:y.grey.darker,h1:{fontSize:"1.7em"},h2:{fontSize:"1.4em"},h3:{fontSize:"1.2em"},a:{color:y.pink.base},pre:{padding:20,borderRadius:4,border:"solid 1px ".concat(y.silver.dark),backgroundColor:y.silver.base,code:{fontSize:"0.9em"}}}),Re=function(e){var t=e.track,n=e.module,i=n.videoUrl,c=n.title,o=n.content,a=function(){var e=Object(r.useState)(de()),t=Object(D.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){function e(){i(de())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(qe,{children:Object(j.jsxs)(Ce,{totalWidth:a,children:[Object(j.jsx)(Ie,{children:Object(j.jsx)(ge.a,{url:i,width:"100%",height:"100%"})}),Object(j.jsx)(ue,{track:t,module:n})]})}),Object(j.jsxs)(je,{children:[Object(j.jsx)(De,{children:c}),Object(j.jsx)(ye,{content:o})]})]})},qe=V.a.div({display:"flex",justifyContent:"center",backgroundColor:y.black.base,padding:20,borderBottom:"solid 1px ".concat(y.pink.base)}),Ce=V.a.div((function(e){var t=e.totalWidth;return{display:"flex",flexDirection:"row",alignSelf:"center",width:"100%",maxWidth:k,height:2/3*(t-60)/(16/9),maxHeight:k*(2/3)/(16/9)}})),Ie=V.a.div({width:"66%"}),De=V.a.h1({marginTop:10,marginBottom:30,paddingBottom:10,color:y.black.lighter,borderBottom:"solid 1px ".concat(y.pink.base)}),Ve=n(71),Ae=function(e){var t=e.loading,n=e.error,i=e.data,c=e.children;return n?Object(j.jsxs)("p",{children:["ERROR: ",n.message]}):t?Object(j.jsx)(Fe,{children:Object(j.jsx)(Ve.LoadingSpinner,{"data-testid":"spinner",size:"large",theme:"grayscale"})}):i?i?c:void 0:Object(j.jsx)("p",{children:"Nothing to show..."})},Fe=V.a.div({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}),He=Object(C.a)(le||(le=Object(q.a)(["\n  query getTracks {\n    tracksForHome {\n      id\n      title\n      thumbnail\n      length\n      modulesCount\n      author {\n        name\n        photo\n      }\n    }\n  }\n"]))),Be=function(){var e,t=Object(I.a)(He),n=t.loading,i=t.error,c=t.data;return Object(j.jsx)(oe,{grid:!0,children:Object(j.jsx)(Ae,{error:i,loading:n,data:c,children:null===c||void 0===c||null===(e=c.tracksForHome)||void 0===e?void 0:e.map((function(e,t){return Object(j.jsx)(B,{track:e},e.id)}))})})},Ke=function(e){var t=e.track,n=t.title,i=t.description,c=t.thumbnail,r=t.author,o=t.length,a=t.modulesCount,d=t.modules,l=t.numberOfViews;return Object(j.jsxs)(je,{children:[Object(j.jsx)(Te,{src:c,alt:""}),Object(j.jsxs)(Je,{children:[Object(j.jsx)(We,{children:Object(j.jsx)("h1",{children:n})}),Object(j.jsxs)(We,{children:[Object(j.jsxs)(Le,{children:[Object(j.jsx)("h4",{children:"Track details"}),Object(j.jsxs)(Ge,{children:[Object(j.jsx)(x.IconView,{width:"16px"}),Object(j.jsxs)("div",{id:"viewCount",children:[l," view(s)"]})]}),Object(j.jsxs)(Ge,{children:[Object(j.jsx)(u.IconBook,{width:"14px",height:"14px"}),Object(j.jsxs)("div",{children:[a," modules"]})]}),Object(j.jsxs)(Ge,{children:[Object(j.jsx)(g.IconTime,{width:"14px"}),Object(j.jsx)("div",{children:A(o)})]})]}),Object(j.jsxs)(Le,{children:[Object(j.jsx)("h4",{children:"Author"}),Object(j.jsx)(Ne,{src:r.photo}),Object(j.jsx)(Ze,{children:r.name})]}),Object(j.jsx)("div",{children:Object(j.jsx)(Pe,{to:"./module/".concat(d[0].id),children:Object(j.jsx)(f.Button,{icon:Object(j.jsx)(b.IconRun,{width:"20px"}),color:y.pink.base,size:"large",children:"Start Track"})})})]}),Object(j.jsx)(Ue,{children:Object(j.jsxs)(Le,{children:[Object(j.jsx)("h4",{children:"Modules"}),Object(j.jsx)("ul",{children:d.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsx)(Xe,{children:A(e.length)})]},e.title)}))})]})})]}),Object(j.jsx)(ye,{content:i})]})},Te=V.a.img({objectFit:"cover",maxHeight:400,borderRadius:4,marginBottom:30}),Pe=Object(V.a)(R.a)({textDecoration:"none",color:"white"}),Je=V.a.div({display:"flex",flexDirection:"column",alignItems:"center",padding:20,borderRadius:4,marginBottom:30,border:"solid 1px ".concat(y.silver.dark),backgroundColor:y.silver.lighter,h1:{width:"100%",textAlign:"center",marginBottom:5},h4:{fontSize:"1.2em",marginBottom:5,color:y.text}}),We=V.a.div({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",paddingBottom:20,marginBottom:20,borderBottom:"solid 1px ".concat(y.silver.dark)}),Le=V.a.div({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",color:y.textSecondary,alignSelf:"center"}),Ne=V.a.img({height:30,width:30,marginBottom:8,borderRadius:"50%",objectFit:"cover"}),Ze=V.a.div({lineHeight:"1em",fontSize:"1em"}),Ge=V.a.div({display:"flex",flex:"row",alignItems:"center",maxHeight:20,width:"100%",div:{marginLeft:8},svg:{maxHeight:16},"#viewCount":{color:y.pink.base}}),Ue=V.a.div({width:"100%",ul:{listStyle:"none",padding:0,margin:0,marginTop:5,li:{fontSize:"1em",display:"flex",justifyContent:"space-between",paddingBottom:2}}}),Xe=V.a.div({marginLeft:30,color:y.grey.light}),Ye=Object(C.a)(se||(se=Object(q.a)(["\n  query getTrack($trackId: ID!) {\n    track(id: $trackId) {\n      id\n      title\n      author {\n        id\n        name\n        photo\n      }\n      thumbnail\n      length\n      modulesCount\n      numberOfViews\n      modules {\n        id\n        title\n        length\n      }\n      description\n    }\n  }\n"]))),Qe=function(e){var t=e.trackId,n=Object(I.a)(Ye,{variables:{trackId:t}}),i=n.loading,c=n.error,r=n.data;return Object(j.jsx)(oe,{children:Object(j.jsx)(Ae,{error:c,loading:i,data:r,children:Object(j.jsx)(Ke,{track:null===r||void 0===r?void 0:r.track})})})},Ee=Object(C.a)(he||(he=Object(q.a)(["\n  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {\n    module(id: $moduleId) {\n      id\n      title\n      content\n      videoUrl\n    }\n    track(id: $trackId) {\n      id\n      title\n      modules {\n        id\n        title\n        length\n      }\n    }\n  }\n"]))),Me=function(e){var t=e.moduleId,n=e.trackId,i=Object(I.a)(Ee,{variables:{moduleId:t,trackId:n}}),c=i.loading,r=i.error,o=i.data;return Object(j.jsx)(oe,{fullWidth:!0,children:Object(j.jsx)(Ae,{error:r,loading:c,data:o,children:Object(j.jsx)(Re,{track:null===o||void 0===o?void 0:o.track,module:null===o||void 0===o?void 0:o.module})})})};function $e(){return Object(j.jsxs)(R.b,{primary:!1,component:r.Fragment,children:[Object(j.jsx)(Be,{path:"/"}),Object(j.jsx)(Qe,{path:"/track/:trackId"}),Object(j.jsx)(Me,{path:"/track/:trackId/module/:moduleId"})]})}var _e=n(419),et=n(421),tt=n(418),nt=new _e.a({uri:"https://server-catstronauts1234.herokuapp.com/",cache:new et.a});a.a.render(Object(j.jsxs)(tt.a,{client:nt,children:[Object(j.jsx)(z,{}),Object(j.jsx)($e,{})]}),document.getElementById("root"))}},[[408,1,2]]]);
//# sourceMappingURL=main.bbb125db.chunk.js.map