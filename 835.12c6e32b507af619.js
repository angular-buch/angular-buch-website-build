"use strict";(self.webpackChunkangular_website=self.webpackChunkangular_website||[]).push([[835],{9835:(B,a,l)=>{l.r(a),l.d(a,{BlogComponent:()=>Z});var r=l(6895),c=l(9433),g=l(114),d=l(3099),p=l(262),m=l(515),E=l(9300),u=l(4004),v=l(945),L=l(2549),O=l(5969),A=l(8043),o=l(8274),h=l(4105),M=l(5452);function f(n,_){if(1&n&&(o.TgZ(0,"div",6)(1,"h4"),o._UZ(2,"i",7),o._uU(3," Blogartikel werden geladen... "),o.qZA(),o._UZ(4,"app-http-error",8),o.qZA()),2&n){const t=o.oxw();o.xp6(4),o.Q6J("error",t.error)}}const s=function(n){return["/blog",n]};function x(n,_){if(1&n&&(o.TgZ(0,"div",23)(1,"a",15),o._UZ(2,"img",24),o.qZA()()),2&n){const t=o.oxw().$implicit;o.xp6(1),o.Q6J("routerLink",o.VKq(2,s,t.slug)),o.xp6(1),o.Q6J("src",t.meta.thumbnail,o.LSH)}}function D(n,_){if(1&n&&(o.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14)(5,"a",15),o._UZ(6,"img",16),o.ALo(7,"gravatar"),o.TgZ(8,"span",17),o._uU(9),o.qZA()()(),o.TgZ(10,"div",18)(11,"a",15)(12,"h4"),o._uU(13),o.qZA()(),o.TgZ(14,"p",19),o._uU(15),o.ALo(16,"date"),o.qZA(),o._UZ(17,"p",20),o.ALo(18,"sanitizeHtml"),o.TgZ(19,"a",21),o._uU(20,"Weiterlesen..."),o.qZA()(),o.YNc(21,x,3,4,"div",22),o.qZA()()()()),2&n){const t=_.$implicit;o.xp6(5),o.Q6J("routerLink",o.VKq(15,s,t.slug)),o.xp6(1),o.Q6J("src",o.lcZ(7,9,t.meta.mail),o.LSH),o.xp6(3),o.Oqu(t.meta.author),o.xp6(2),o.Q6J("routerLink",o.VKq(17,s,t.slug)),o.xp6(2),o.Oqu(t.meta.title),o.xp6(2),o.Oqu(o.lcZ(16,11,t.meta.published)),o.xp6(2),o.Q6J("innerHTML",o.lcZ(18,13,t.html),o.oJD),o.xp6(2),o.Q6J("routerLink",o.VKq(19,s,t.slug)),o.xp6(2),o.Q6J("ngIf",t.meta.thumbnail)}}function T(n,_){if(1&n&&(o.TgZ(0,"div",6),o.YNc(1,D,22,21,"div",9),o.qZA()),2&n){const t=_.ngIf;o.xp6(1),o.Q6J("ngForOf",t)}}let Z=(()=>{class n{constructor(t,e){this.as=t,this.ds=e,this.blogList$=this.as.getBlogList().pipe((0,d.B)(),(0,p.K)(i=>(this.error=i,console.log(i),m.E))),this.articlesLdJson$=this.blogList$.pipe((0,E.h)(i=>Array.isArray(i)),(0,u.U)(i=>i.map(P=>this.ds.mapBlogEntryToArticleLdJson(P))))}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(h.s),o.Y36(M.D))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-blog"]],standalone:!0,features:[o.jDz],decls:9,vars:7,consts:[["headline","Blog","headlineLink","/blog"],[1,"index","index--list","blog"],[1,"index__stripe","index__stripe--list"],["loading",""],["class","container",4,"ngIf","ngIfElse"],[3,"json"],[1,"container"],[1,"fa","fa-circle-o-notch","fa-spin","fa-lg","fa-fw"],[3,"error"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","blog-list-entry"],[1,"index__item","index__item--list"],[1,"row","align-items-top"],[1,"col-12","col-sm-3","col-md-2","text-center"],[3,"routerLink"],["alt","",1,"blog__portrait","img-fluid","rounded-circle",3,"src"],[1,"blog__author"],[1,"col-12","col-sm-6","col-md-7","col-lg-8"],[1,"blog__date"],[3,"innerHTML"],["ripple-radius","",1,"btn","btn-sm","btn-primary",3,"routerLink"],["class","col-12 col-sm-3 col-md-3 col-lg-2",4,"ngIf"],[1,"col-12","col-sm-3","col-md-3","col-lg-2"],["alt","",1,"img-fluid","rounded",3,"src"]],template:function(t,e){if(1&t&&(o._UZ(0,"app-hero-header",0),o.TgZ(1,"section",1)(2,"div",2),o.YNc(3,f,5,1,"ng-template",null,3,o.W1O),o.YNc(5,T,2,1,"div",4),o.ALo(6,"async"),o.qZA()(),o._UZ(7,"ngx-json-ld",5),o.ALo(8,"async")),2&t){const i=o.MAs(4);o.xp6(5),o.Q6J("ngIf",o.lcZ(6,3,e.blogList$))("ngIfElse",i),o.xp6(2),o.Q6J("json",o.lcZ(8,5,e.articlesLdJson$))}},dependencies:[v.e,r.O5,r.ax,c.yS,A.A,O.M,g.A,g.T,L.I,r.Ov,r.uU]}),n})()}}]);