"use strict";(self.webpackChunkangular_website=self.webpackChunkangular_website||[]).push([[903],{5903:(F,m,a)=>{a.r(m),a.d(m,{BlogDetailsComponent:()=>W});var r=a(1180),t=a(9291),h=a(4036),v=a(4664),x=a(8645);const f={now:()=>(f.delegate||Date).now(),delegate:void 0};class Z extends x.x{constructor(o=1/0,n=1/0,i=f){super(),this._bufferSize=o,this._windowTime=n,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,n)}next(o){const{isStopped:n,_buffer:i,_infiniteTimeWindow:l,_timestampProvider:s,_windowTime:d}=this;n||(i.push(o),!l&&i.push(s.now()+d)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(o),{_infiniteTimeWindow:i,_buffer:l}=this,s=l.slice();for(let d=0;d<s.length&&!o.closed;d+=i?1:2)o.next(s[d]);return this._checkFinalizedStatuses(o),n}_trimBuffer(){const{_bufferSize:o,_timestampProvider:n,_buffer:i,_infiniteTimeWindow:l}=this,s=(l?1:2)*o;if(o<1/0&&s<i.length&&i.splice(0,i.length-s),!l){const d=n.now();let g=0;for(let c=1;c<i.length&&i[c]<=d;c+=2)g=c;g&&i.splice(0,g+1)}}}var b=a(3020),_=a(6306),T=a(6232),I=a(2253),A=a(9952),w=a(5059),B=a(7449),C=a(7236),p=a(6814),D=a(7734),J=a(8456),L=a(1853),j=a(7984),H=a(5156),u=a(6040);function M(e,o){if(1&e&&(t.TgZ(0,"div",6)(1,"h2"),t._UZ(2,"i",7),t._uU(3," Blogartikel wird geladen \u2026 "),t.qZA(),t._UZ(4,"app-http-error",8),t.qZA()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("error",n.error)}}function Q(e,o){1&e&&(t.TgZ(0,"div",33),t._UZ(1,"div"),t.qZA())}function E(e,o){if(1&e&&(t.TgZ(0,"div",13)(1,"div",30),t._UZ(2,"img",31),t.YNc(3,Q,2,0,"div",32),t.qZA()()),2&e){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("lazyload",n.meta.thumbnail),t.xp6(1),t.Q6J("ngIf",n.meta["darken-thumbnail"])}}function k(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"br"),t.TgZ(2,"a",34),t._uU(3),t.qZA(),t._uU(4," \xa0 "),t.BQk()),2&e){const n=o.ngIf;t.xp6(2),t.MGl("href","https://twitter.com/",n,"",t.LSH),t.xp6(1),t.hij(" @",n,"")}}function z(e,o){if(1&e&&(t._UZ(0,"p",35),t.ALo(1,"sanitizeHtml")),2&e){const n=t.oxw().ngIf;t.Q6J("innerHTML",t.lcZ(1,1,n.html),t.oJD)}}function S(e,o){if(1&e&&(t.TgZ(0,"p",36),t._uU(1),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(1),t.Oqu(n.error)}}function N(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"br"),t.TgZ(2,"a",34),t._uU(3),t.qZA(),t._uU(4," \xa0 "),t.BQk()),2&e){const n=o.ngIf;t.xp6(2),t.MGl("href","https://twitter.com/",n,"",t.LSH),t.xp6(1),t.hij(" @",n,"")}}function Y(e,o){if(1&e&&(t.TgZ(0,"div",37)(1,"div",13)(2,"div",14)(3,"div",15)(4,"div",38),t._UZ(5,"img",17),t.ALo(6,"gravatar"),t.TgZ(7,"span",18),t._uU(8),t.YNc(9,N,5,2,"ng-container",19),t.qZA()(),t.TgZ(10,"div",20)(11,"h2"),t._uU(12,"\xdcber den Autor"),t.qZA(),t.TgZ(13,"p",39),t._uU(14),t.qZA()()()()()()),2&e){const n=t.oxw().ngIf,i=t.oxw();t.xp6(5),t.Q6J("lazyload",t.lcZ(6,4,n.meta.mail)),t.xp6(3),t.hij("",n.meta.author," "),t.xp6(1),t.Q6J("ngIf",i.getHackyTwitterHandle(n)),t.xp6(5),t.hij(" ",n.meta.bio," ")}}function P(e,o){if(1&e&&(t.TgZ(0,"div",6),t._UZ(1,"a",9),t.TgZ(2,"div",10),t.YNc(3,E,4,2,"div",11),t.qZA(),t.TgZ(4,"div",12)(5,"div",13)(6,"div",14)(7,"div",15)(8,"div",16),t._UZ(9,"img",17),t.ALo(10,"gravatar"),t.TgZ(11,"span",18),t._uU(12),t.YNc(13,k,5,2,"ng-container",19),t.qZA()(),t.TgZ(14,"div",20)(15,"h1",21),t._uU(16),t.qZA(),t.TgZ(17,"p",22),t._uU(18),t.ALo(19,"date"),t.qZA(),t.YNc(20,z,2,3,"p",23),t.YNc(21,S,2,1,"p",24),t.TgZ(22,"a",25),t._UZ(23,"i",26),t._uU(24," Zur\xfcck"),t.qZA(),t._UZ(25,"hr"),t._uU(26," Suggestions? Feedback? Bugs? Please "),t.TgZ(27,"a",27),t._UZ(28,"i",28),t._uU(29,"fork/edit this page on Github"),t.qZA(),t._uU(30,". "),t.qZA()()()()(),t.YNc(31,Y,15,6,"div",29),t.qZA()),2&e){const n=o.ngIf,i=t.oxw();t.xp6(3),t.Q6J("ngIf",n.meta.thumbnail),t.xp6(6),t.Q6J("lazyload",t.lcZ(10,10,n.meta.mail)),t.xp6(3),t.hij("",n.meta.author," "),t.xp6(1),t.Q6J("ngIf",i.getHackyTwitterHandle(n)),t.xp6(3),t.Oqu(n.meta.title),t.xp6(2),t.Oqu(t.lcZ(19,12,n.meta.published)),t.xp6(2),t.Q6J("ngIf",!n.error),t.xp6(1),t.Q6J("ngIf",n.error),t.xp6(6),t.Q6J("href",n.html_url,t.LSH),t.xp6(4),t.Q6J("ngIf",n.meta.bio)}}let W=(()=>{var e;class o{constructor(){(0,r.Z)(this,"as",(0,t.f3M)(A.s)),(0,r.Z)(this,"ds",(0,t.f3M)(w.D)),(0,r.Z)(this,"route",(0,t.f3M)(h.gz)),(0,r.Z)(this,"seo",(0,t.f3M)(I.v)),(0,r.Z)(this,"scrollToService",(0,t.f3M)(B.i)),(0,r.Z)(this,"blogEntry$",this.route.paramMap.pipe((0,v.w)(i=>this.as.getBlogEntry(i.get("slug"))),function y(e,o,n){let i,l=!1;return e&&"object"==typeof e?({bufferSize:i=1/0,windowTime:o=1/0,refCount:l=!1,scheduler:n}=e):i=e??1/0,(0,b.B)({connector:()=>new Z(i,o,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:l})}(1),(0,_.K)(i=>(this.error=i,console.error(i),T.E)),(0,u.sL)())),(0,r.Z)(this,"error",void 0),(0,r.Z)(this,"articleLdJson",void 0),this.blogEntry$.pipe((0,u.sL)()).subscribe(i=>{if(function U(e){return void 0!==e.slug}(i)){const l=this.ds.mapBlogEntryToSeo(i);this.seo.setTags(l),this.articleLdJson=this.ds.mapBlogEntryToArticleLdJson(i),this.scrollToService.scrollToAnchor()}})}getHackyTwitterHandle(i){switch(i.meta.author){case"Ferdinand Malcher":return"fmalcher01";case"Johannes Hoppe":return"JohannesHoppe";case"Angular Buch Team":return"angular_buch";case"Danny Koppenhagen":return"d_koppenhagen";case"Danilo Hoffmann":return"dhhyi";default:return"angular_schule"}}}return e=o,(0,r.Z)(o,"\u0275fac",function(i){return new(i||e)}),(0,r.Z)(o,"\u0275cmp",t.Xpm({type:e,selectors:[["app-blog-details"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[["headline","Blog","headlineLink","/blog"],[1,"index","index--list","blog","mt-n5"],[1,"index__stripe","index__stripe--list"],["loading",""],["class","container",4,"ngIf","ngIfElse"],[3,"json"],[1,"container"],[1,"fa","fa-circle-o-notch","fa-spin","fa-lg","fa-fw"],[3,"error"],["name","post","id","post"],[1,"row","details-thumbnail"],["class","col-12",4,"ngIf"],[1,"row"],[1,"col-12"],[1,"index__item","index__item--list"],[1,"row","align-items-top"],[1,"col-12","col-sm-3","col-md-2","text-center","details-page-autor"],["alt","",1,"blog__portrait","img-fluid","rounded-circle",3,"lazyload"],[1,"blog__author"],[4,"ngIf"],[1,"col-12","col-sm-9","col-md-10","col-lg-10"],[1,"blog__headline"],[1,"blog__date"],["class","content markdown-body",3,"innerHTML",4,"ngIf"],["class","content markdown-body",4,"ngIf"],["routerLink","/blog","ripple-radius","",1,"btn","btn-sm","btn-primary","mt-4"],[1,"fa","fa-backward","mr-2"],["target","_blank",1,"content",3,"href"],[1,"fa","fa-github","mr-1",2,"font-size","1.6rem","position","relative","bottom","-3px"],["class","row","style","margin-top:-20px;",4,"ngIf"],[1,"details-thumbnail-inner"],["alt","",1,"img-fluid","rounded",3,"lazyload"],["class","darken-overlay",4,"ngIf"],[1,"darken-overlay"],["target","_blank",1,"twitter",3,"href"],[1,"content","markdown-body",3,"innerHTML"],[1,"content","markdown-body"],[1,"row",2,"margin-top","-20px"],[1,"col-12","col-sm-3","col-md-2","text-center"],[1,"content"]],template:function(i,l){if(1&i&&(t._UZ(0,"app-hero-header",0),t.TgZ(1,"section",1)(2,"div",2),t.YNc(3,M,5,1,"ng-template",null,3,t.W1O),t.YNc(5,P,32,14,"div",4),t.ALo(6,"async"),t.qZA()(),t._UZ(7,"app-json-ld",5)),2&i){const s=t.MAs(4);t.xp6(5),t.Q6J("ngIf",t.lcZ(6,3,l.blogEntry$))("ngIfElse",s),t.xp6(2),t.Q6J("json",l.articleLdJson)}},dependencies:[C.e,p.O5,p.Ov,D.M,J.A,h.rH,H.e,L.I,p.uU,j.p],styles:[".content img{max-width:100%}.details-page-autor{margin-top:-110px}.details-thumbnail{margin-bottom:-18px}.details-thumbnail .details-thumbnail-inner{border-bottom:23px solid #dfdede;max-height:300px;overflow:hidden;background-color:#fff;border-radius:4px;display:flex;justify-content:center}.details-thumbnail .details-thumbnail-inner .darken-overlay{display:block;position:absolute;height:300px;width:100%;padding-left:15px;padding-right:15px;padding-bottom:23px}.details-thumbnail .details-thumbnail-inner .darken-overlay div{display:block;position:relative;width:100%;height:100%;background-color:#0003;border-radius:4px 4px 0 0/4px 4px 0px 0px}.details-thumbnail img{width:100%;align-self:center}.video-container{position:relative;padding-bottom:56.25%;padding-top:0;height:0;overflow:hidden;margin-top:2rem;margin-bottom:2rem}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}\n"],encapsulation:2,changeDetection:0})),o})()}}]);