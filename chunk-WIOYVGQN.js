import{a as y,b as $,c as G}from"./chunk-3WICK2ZV.js";import{b as J,c as j}from"./chunk-L76OMOGL.js";import{a as F}from"./chunk-SRNFD5AB.js";import{a as M}from"./chunk-KHP6P3GA.js";import{a as A}from"./chunk-Q23CDI3A.js";import{a as P}from"./chunk-AYBCXGX2.js";import{a as R}from"./chunk-DD62WZ4X.js";import{a as U}from"./chunk-AOCN3BKY.js";import{j as L,m as I}from"./chunk-LJZIBRJ6.js";import{Aa as v,Ga as i,J as S,L as k,Nb as H,Ob as z,Pa as s,Ta as m,Ua as p,V as g,X as B,Ya as o,Za as a,_a as r,cb as c,fb as b,gb as l,hb as x,ib as u,l as E,mb as D,pb as h,qb as _,y as w,za as T}from"./chunk-JQKHWHRI.js";function K(e){return e.slug!==void 0}function V(e,n){e&1&&(o(0,"div",29),r(1,"div"),a())}function Y(e,n){if(e&1&&(o(0,"div",10)(1,"div",26),r(2,"img",27),m(3,V,2,0,"div",28),a()()),e&2){let t=c();i(2),s("lazyload",t.meta.thumbnail),i(1),p(3,t.meta["darken-thumbnail"]?3:-1)}}function Z(e,n){e&1&&(r(0,"br"),o(1,"a",30),l(2),a(),l(3," \xA0 ")),e&2&&(i(1),b("href","https://twitter.com/",n,"",v),i(1),u(" @",n,""))}function q(e,n){if(e&1&&(r(0,"p",31),h(1,"sanitizeHtml")),e&2){let t=c();s("innerHTML",_(1,1,t.html),T)}}function N(e,n){if(e&1&&(o(0,"p",32),l(1),a()),e&2){let t=c();i(1),x(t.error)}}function O(e,n){e&1&&(r(0,"br"),o(1,"a",30),l(2),a(),l(3," \xA0 ")),e&2&&(i(1),b("href","https://twitter.com/",n,"",v),i(1),u(" @",n,""))}function Q(e,n){if(e&1&&(o(0,"div",33)(1,"div",10)(2,"div",11)(3,"div",12)(4,"div",34),r(5,"img",14),h(6,"gravatar"),o(7,"span",15),l(8),m(9,O,4,2),a()(),o(10,"div",16)(11,"h2"),l(12,"\xDCber den Autor"),a(),o(13,"p",35),l(14),a()()()()()()),e&2){let t=c(),d=c(),f;i(5),s("lazyload",_(6,4,t.meta.mail)),i(3),u("",t.meta.author," "),i(1),p(9,(f=d.getHackyTwitterHandle(t))?9:-1,f),i(5),u(" ",t.meta.bio," ")}}function W(e,n){if(e&1&&(o(0,"div",5),r(1,"a",6),o(2,"div",7),m(3,Y,4,2,"div",8),a(),o(4,"div",9)(5,"div",10)(6,"div",11)(7,"div",12)(8,"div",13),r(9,"img",14),h(10,"gravatar"),o(11,"span",15),l(12),m(13,Z,4,2),a()(),o(14,"div",16)(15,"h1",17),l(16),a(),o(17,"p",18),l(18),h(19,"date"),a(),m(20,q,2,3,"p",19)(21,N,2,1,"p",20),o(22,"a",21),r(23,"i",22),l(24," Zur\xFCck"),a(),r(25,"hr"),l(26," Suggestions? Feedback? Bugs? Please "),o(27,"a",23),r(28,"i",24),l(29,"fork/edit this page on Github"),a(),l(30,". "),a()()()()(),m(31,Q,15,6,"div",25),a()),e&2){let t=c(),d;i(3),p(3,n.meta.thumbnail?3:-1),i(6),s("lazyload",_(10,10,n.meta.mail)),i(3),u("",n.meta.author," "),i(1),p(13,(d=t.getHackyTwitterHandle(n))?13:-1,d),i(3),x(n.meta.title),i(2),x(_(19,12,n.meta.published)),i(2),p(20,n.error?-1:20),i(1),p(21,n.error?21:-1),i(6),s("href",n.html_url,v),i(4),p(31,n.meta.bio?31:-1)}}function X(e,n){if(e&1&&(o(0,"div",5)(1,"h2"),r(2,"i",36),l(3," Blogartikel wird geladen \u2026 "),a(),r(4,"app-http-error",37),a()),e&2){let t=c();i(4),s("error",t.error)}}var ye=(()=>{class e{as=g(U);ds=g(A);route=g(L);seo=g(j);scrollToService=g(J);blogEntry$=this.route.paramMap.pipe(k(t=>this.as.getBlogEntry(t.get("slug"))),S(1),w(t=>(this.error=t,console.error(t),E)),y());error;articleLdJson;constructor(){this.blogEntry$.pipe(y()).subscribe(t=>{if(K(t)){let d=this.ds.mapBlogEntryToSeo(t);this.seo.setTags(d),this.articleLdJson=this.ds.mapBlogEntryToArticleLdJson(t),this.scrollToService.scrollToAnchor()}})}getHackyTwitterHandle(t){switch(t.meta.author){case"Ferdinand Malcher":return"fmalcher01";case"Johannes Hoppe":return"JohannesHoppe";case"Angular Buch Team":return"angular_buch";case"Danny Koppenhagen":return"d_koppenhagen";case"Danilo Hoffmann":return"dhhyi";default:return"angular_schule"}}static \u0275fac=function(d){return new(d||e)};static \u0275cmp=B({type:e,selectors:[["app-blog-details"]],standalone:!0,features:[D],decls:7,vars:4,consts:[["headline","Blog","headlineLink","/blog"],[1,"index","index--list","blog","mt-n5"],[1,"index__stripe","index__stripe--list"],["class","container"],[3,"json"],[1,"container"],["name","post","id","post"],[1,"row","details-thumbnail"],["class","col-12"],[1,"row"],[1,"col-12"],[1,"index__item","index__item--list"],[1,"row","align-items-top"],[1,"col-12","col-sm-3","col-md-2","text-center","details-page-autor"],["alt","",1,"blog__portrait","img-fluid","rounded-circle",3,"lazyload"],[1,"blog__author"],[1,"col-12","col-sm-9","col-md-10","col-lg-10"],[1,"blog__headline"],[1,"blog__date"],["class","content markdown-body",3,"innerHTML"],["class","content markdown-body"],["routerLink","/blog","ripple-radius","",1,"btn","btn-sm","btn-primary","mt-4"],[1,"fa","fa-backward","mr-2"],["target","_blank",1,"content",3,"href"],[1,"fa","fa-github","mr-1",2,"font-size","1.6rem","position","relative","bottom","-3px"],["class","row","style","margin-top:-20px;"],[1,"details-thumbnail-inner"],["alt","",1,"img-fluid","rounded",3,"lazyload"],["class","darken-overlay"],[1,"darken-overlay"],["target","_blank",1,"twitter",3,"href"],[1,"content","markdown-body",3,"innerHTML"],[1,"content","markdown-body"],[1,"row",2,"margin-top","-20px"],[1,"col-12","col-sm-3","col-md-2","text-center"],[1,"content"],[1,"fa","fa-circle-o-notch","fa-spin","fa-lg","fa-fw"],[3,"error"]],template:function(d,f){if(d&1&&(r(0,"app-hero-header",0),o(1,"section",1)(2,"div",2),m(3,W,32,14,"div",3),h(4,"async"),m(5,X,5,1),a()(),r(6,"app-json-ld",4)),d&2){let C;i(3),p(3,(C=_(4,2,f.blogEntry$))?3:5,C),i(3),s("json",f.articleLdJson)}},dependencies:[P,H,$,G,I,F,R,z,M],styles:[`.content img{max-width:100%}.details-page-autor{margin-top:-110px}.details-thumbnail{margin-bottom:-18px}.details-thumbnail .details-thumbnail-inner{border-bottom:23px solid #dfdede;max-height:300px;overflow:hidden;background-color:#fff;border-radius:4px;display:flex;justify-content:center}.details-thumbnail .details-thumbnail-inner .darken-overlay{display:block;position:absolute;height:300px;width:100%;padding-left:15px;padding-right:15px;padding-bottom:23px}.details-thumbnail .details-thumbnail-inner .darken-overlay div{display:block;position:relative;width:100%;height:100%;background-color:#0003;border-radius:4px 4px 0 0/4px 4px 0px 0px}.details-thumbnail img{width:100%;align-self:center}.video-container{position:relative;padding-bottom:56.25%;padding-top:0;height:0;overflow:hidden;margin-top:2rem;margin-bottom:2rem}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}
`],encapsulation:2,changeDetection:0})}return e})();export{ye as BlogDetailsComponent};
