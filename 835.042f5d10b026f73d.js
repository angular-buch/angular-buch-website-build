"use strict";(self.webpackChunkangular_website=self.webpackChunkangular_website||[]).push([[835],{9835:(U,e,l)=>{l.r(e),l.d(e,{BlogComponent:()=>i});var s=l(6895),d=l(9433),g=l(114),c=l(3099),p=l(262),m=l(515),E=l(9300),u=l(4004),v=l(945),O=l(2549),L=l(9431),A=l(5969),M=l(8043),o=l(8274),h=l(4105),D=l(5452);function f(n,_){if(1&n&&(o.TgZ(0,"div",6)(1,"h2"),o._UZ(2,"i",7),o._uU(3," Blogartikel werden geladen... "),o.qZA(),o._UZ(4,"app-http-error",8),o.qZA()),2&n){const t=o.oxw();o.xp6(4),o.Q6J("error",t.error)}}const r=function(n){return["/blog",n]};function x(n,_){if(1&n&&(o.TgZ(0,"div",23)(1,"a",15),o._UZ(2,"img",24),o.qZA()()),2&n){const t=o.oxw().$implicit;o.xp6(1),o.Q6J("routerLink",o.VKq(3,r,t.slug)),o.uIk("aria-labelledby",t.slug),o.xp6(1),o.Q6J("lazyload",t.meta.thumbnail)}}function T(n,_){if(1&n&&(o.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14)(5,"a",15),o._UZ(6,"img",16),o.ALo(7,"gravatar"),o.TgZ(8,"span",17),o._uU(9),o.qZA()()(),o.TgZ(10,"div",18)(11,"a",15)(12,"h2"),o._uU(13),o.qZA()(),o.TgZ(14,"p",19),o._uU(15),o.ALo(16,"date"),o.qZA(),o._UZ(17,"p",20),o.ALo(18,"sanitizeHtml"),o.TgZ(19,"a",21),o._uU(20,"Weiterlesen \u2026"),o.qZA()(),o.YNc(21,x,3,5,"div",22),o.qZA()()()()),2&n){const t=_.$implicit;o.xp6(5),o.Q6J("routerLink",o.VKq(17,r,t.slug)),o.uIk("aria-labelledby",t.slug),o.xp6(1),o.Q6J("lazyload",o.lcZ(7,11,t.meta.mail)),o.xp6(3),o.Oqu(t.meta.author),o.xp6(2),o.Q6J("routerLink",o.VKq(19,r,t.slug)),o.xp6(1),o.uIk("id",t.slug),o.xp6(1),o.Oqu(t.meta.title),o.xp6(2),o.Oqu(o.lcZ(16,13,t.meta.published)),o.xp6(2),o.Q6J("innerHTML",o.lcZ(18,15,t.html),o.oJD),o.xp6(2),o.Q6J("routerLink",o.VKq(21,r,t.slug)),o.xp6(2),o.Q6J("ngIf",t.meta.thumbnail)}}function P(n,_){if(1&n&&(o.TgZ(0,"div",6),o.YNc(1,T,22,23,"div",9),o.qZA()),2&n){const t=_.ngIf;o.xp6(1),o.Q6J("ngForOf",t)}}class i{constructor(_,t){this.as=_,this.ds=t,this.blogList$=this.as.getBlogList().pipe((0,c.B)(),(0,p.K)(a=>(this.error=a,console.log(a),m.E))),this.articlesLdJson$=this.blogList$.pipe((0,E.h)(a=>Array.isArray(a)),(0,u.U)(a=>a.map(Z=>this.ds.mapBlogEntryToArticleLdJson(Z))))}}i.\u0275fac=function(_){return new(_||i)(o.Y36(h.s),o.Y36(D.D))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-blog"]],standalone:!0,features:[o.jDz],decls:9,vars:7,consts:[["headline","Blog","headlineLink","/blog"],[1,"index","index--list","blog","mt-n5"],[1,"index__stripe","index__stripe--list"],["loading",""],["class","container",4,"ngIf","ngIfElse"],[3,"json"],[1,"container"],[1,"fa","fa-circle-o-notch","fa-spin","fa-lg","fa-fw"],[3,"error"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","blog-list-entry"],[1,"index__item","index__item--list"],[1,"row","align-items-top"],[1,"col-12","col-sm-3","col-md-2","text-center"],[3,"routerLink"],["alt","",1,"blog__portrait","img-fluid","rounded-circle",3,"lazyload"],[1,"blog__author"],[1,"col-12","col-sm-6","col-md-7","col-lg-8"],[1,"blog__date"],[3,"innerHTML"],["ripple-radius","",1,"btn","btn-sm","btn-primary","mb-3","mb-sm-0",3,"routerLink"],["class","col-12 col-sm-3 col-md-3 col-lg-2",4,"ngIf"],[1,"col-12","col-sm-3","col-md-3","col-lg-2"],["alt","",1,"img-fluid","rounded",3,"lazyload"]],template:function(_,t){if(1&_&&(o._UZ(0,"app-hero-header",0),o.TgZ(1,"section",1)(2,"div",2),o.YNc(3,f,5,1,"ng-template",null,3,o.W1O),o.YNc(5,P,2,1,"div",4),o.ALo(6,"async"),o.qZA()(),o._UZ(7,"ngx-json-ld",5),o.ALo(8,"async")),2&_){const a=o.MAs(4);o.xp6(5),o.Q6J("ngIf",o.lcZ(6,3,t.blogList$))("ngIfElse",a),o.xp6(2),o.Q6J("json",o.lcZ(8,5,t.articlesLdJson$))}},dependencies:[v.e,s.O5,s.ax,d.rH,M.A,A.M,g.A,g.T,O.I,s.Ov,s.uU,L.p],styles:["h2[_ngcontent-%COMP%]{font-size:1.5rem}"]})}}]);