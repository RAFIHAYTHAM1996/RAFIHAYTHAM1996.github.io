(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},RHEb:function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),c=n("vuIU"),i=n("md7G"),o=n("foSv"),r=n("JX7q"),s=n("Ji7U"),l=n("rePB"),m=n("q1tI"),u=n.n(m),p=(n("YFqc"),n("nOHt")),d=n("wOhW"),v=(n("K7qp"),n("zfzq")),j=n("7Urf"),f=(n("Y2g/"),n("pua3")),b=n("0d1J"),h=n.n(b),N=n("ob4f"),y=n("lZCG"),g=u.a.createElement,w=function(e){function t(e){var n;Object(a.a)(this,t),n=Object(i.a)(this,Object(o.a)(t).call(this,e)),Object(l.a)(Object(r.a)(n),"checkDevice",(function(){var e=!v.default.isServer()&&window.innerWidth<767?"mobile":"desktop";n.state.device!==e&&n.setState({device:e})})),Object(l.a)(Object(r.a)(n),"nextProject",(function(){var e=n.state.selectedProject;e=e===j.projects.length-1?0:e+1,n.setState({selectedProject:e})})),Object(l.a)(Object(r.a)(n),"getContent",(function(e){var t=j.projects[e]||{},a=function(n){return g("div",{className:"col-md-6 offset-lg-1 col-lg-5"},g("div",{className:"row",style:{justifyContent:"center"}},g("div",{className:"col-11 col-md-12 p-0 project-nav"},g(y.b,{animation:y.a.SLIDE_RIGHT,delay:.3,play:n},g("p",{className:"project-index"},e+1+"/"+j.projects.length))),g("div",{className:"col-11 col-md-12 p-0"},g(y.b,{animation:y.a.SLIDE_UP,delay:.3,play:n},g("h2",{className:"project-name"},t.name)),t.services.map((function(e){return g("p",{className:"project-service"},g(y.b,{animation:y.a.SLIDE_RIGHT,delay:.3,play:n},e))})))))},c=function(){return g("div",{className:"col-md-6 project-thumbnail-container--".concat(e%2===0?"right":"left")},g("img",{src:"".concat(n.ASSET_PATH).concat(t.thumbnail),alt:"".concat(t.name," Thumbnail"),className:"project-thumbnail".concat(n.imageAnimations[e]?" animate":"")}))};return g(N.a,null,(function(t){var i=t.inView,o=t.ref;t.entry;return!n.imageAnimations[e]&&i&&(n.imageAnimations[e]=!0),g("div",{className:"row project-container",ref:o},e%2===0?g(m.Fragment,null,a(i),c()):g(m.Fragment,null,c(),a(i)))}))})),Object(l.a)(Object(r.a)(n),"getMobileContent",(function(e){var t=j.projects[e]||{};return g(N.a,null,(function(a){var c=a.inView,i=a.ref;a.entry;return!n.imageAnimations[e]&&c&&(n.imageAnimations[e]=!0),g("div",{className:"row project-container",ref:i},function(n){return g("div",{className:"p-0"},g("div",{className:"row",style:{justifyContent:"center"}},g("div",{className:"col-11 p-0 project-nav"},g(y.b,{animation:y.a.SLIDE_RIGHT,delay:.2,play:n},g("p",{className:"project-index"},e+1+"/"+j.projects.length))),g("div",{className:"col-11 p-0"},g(y.b,{animation:y.a.SLIDE_UP,delay:.3,play:n},g("h2",{className:"project-name"},t.name)),t.services.map((function(e){return g("p",{className:"project-service"},g(y.b,{animation:y.a.SLIDE_RIGHT,delay:.2,play:n},e))})))))}(c),g("div",{className:"project-thumbnail-container--mobile"},g("img",{src:"".concat(n.ASSET_PATH).concat(t.thumbnail),alt:"".concat(t.name," Thumbnail"),className:"project-thumbnail".concat(n.imageAnimations[e]?" animate":"")})))}))}));var c=0;if(n.props.router.query.project){var s=j.projects.map((function(e,t){return{index:t,url:h()(e.name)}})).find((function(e){return e.url===n.props.router.query.project}));s&&(c=s.index)}return n.state={selectedProject:c,device:"desktop"},n.imageAnimations={},n.navLinks=["home","contact us"],n.ASSET_PATH=v.default.ASSET_PATH+"images/projects/",n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkDevice),this.checkDevice()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkDevice)}},{key:"render",value:function(){var e=this,t=this.state,n=(t.selectedProject,t.device);return g(d.a,{id:"Projects",brandColor:"primary",navLinks:this.navLinks,ref:function(t){return e.Page=t}},g("div",{className:"brand-outline-position"},g(f.a,{ref:function(t){return e.BrandOutlineRef=t}})),g("div",{className:"row mb-5"},g("div",{className:"col-sm-4 col-md-5 offset-lg-1 col-lg-3"},g("h1",null,g("span",{className:"outline"},"projects")))),"mobile"===n?g("div",{className:"container p-0 m-0",key:"content-mobile"},j.projects.map((function(t,n){return e.getMobileContent(n)}))):g("div",{className:"container m-0",key:"content-desktop"},j.projects.map((function(t,n){return e.getContent(n)}))))}}]),t}(m.Component);t.default=Object(p.withRouter)(w)}},[["D85t",0,2,5,1,3,4,6,7]]]);
