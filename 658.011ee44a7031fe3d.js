"use strict";(self.webpackChunkangular_website=self.webpackChunkangular_website||[]).push([[658],{2549:(h,_,n)=>{n.d(_,{I:()=>l});var s=n(6895),t=n(8274);function i(a,u){if(1&a&&(t.TgZ(0,"div",1)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"p",2),t._uU(4," Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut und "),t.TgZ(5,"a",3),t._uU(6,"laden Sie diese Seite neu"),t.qZA(),t._uU(7,". "),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()()),2&a){const e=t.oxw();t.xp6(2),t.hij("Fehler ",e.error.status,""),t.xp6(7),t.Oqu(e.message)}}class l{constructor(){this.error={}}get message(){return this.error.error&&this.error.error.message?"Server Message: "+this.error.error.message:this.error.message}static#e=this.\u0275fac=function(e){return new(e||l)};static#t=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-http-error"]],inputs:{error:"error"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","alert alert-danger mt-4","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger","mt-4"],[1,"mt-4"],["href","javascript:window.location.reload();"]],template:function(e,p){1&e&&t.YNc(0,i,10,2,"div",0),2&e&&t.Q6J("ngIf",p.error)},dependencies:[s.O5],styles:["a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{text-decoration:underline}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{text-decoration:none}"]})}},4105:(h,_,n)=>{n.d(_,{s:()=>i});var s=n(8274),t=n(529);class i{constructor(a){this.http=a}getGithubRepos(){return this.http.get("/assets/data/repos.json")}getBlogList(){return this.http.get("/assets/data/bloglist.json")}getBlogEntry(a){return this.http.get(`/assets/data/posts/${a}.json`)}static#e=this.\u0275fac=function(u){return new(u||i)(s.LFG(t.eN))};static#t=this.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}},4658:(h,_,n)=>{n.r(_),n.d(_,{Material4aComponent:()=>d});var s=n(6895),t=n(4004),i=n(262),l=n(515),a=n(8936),u=n(2549),e=n(8274),p=n(4105);function m(g,o){if(1&g&&(e.TgZ(0,"tr")(1,"td",23)(2,"a",24),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA()()),2&g){const r=o.$implicit;e.xp6(2),e.Q6J("href",r.url,e.LSH),e.xp6(1),e.Oqu(r.name),e.xp6(2),e.Oqu(r.description)}}function f(g,o){if(1&g&&(e.TgZ(0,"div",20)(1,"table",21)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Repository"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Beschreibung"),e.qZA()()(),e.TgZ(8,"tbody"),e.YNc(9,m,6,3,"tr",22),e.qZA()()()),2&g){const r=o.ngIf;e.xp6(9),e.Q6J("ngForOf",r)}}class d{constructor(o){this.as=o,this.githubRepos$=this.as.getGithubRepos().pipe((0,t.U)(r=>r.filter(c=>this.is4aRepo(c))),(0,t.U)(r=>r.sort((c,Z)=>c.name.localeCompare(Z.name))),(0,i.K)(r=>(this.error=r,console.log(r),l.E)))}is4aRepo(o){return!o.description.includes("[only dist]")&&".github"!==o.name&&(o.url.includes("book-monkey5")||"api5"===o.name||"book-monkey5-styles"===o.name)}static#e=this.\u0275fac=function(r){return new(r||d)(e.Y36(p.s))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-material4a"]],standalone:!0,features:[e.jDz],decls:56,vars:4,consts:[["imageUrl","assets/img/header/classroom.png"],[1,"schule","headline__page"],[1,"hero__teaser"],[1,"index",2,"margin-top","-4em","background","none"],[1,"index__stripe","index__stripe--list"],[1,"container"],[1,"row","align-items-end"],[1,"col-12","col-md-6"],[1,"index__item","index__item--list","mb-5","p-4"],[1,"mt-4","pt-2"],[1,"headline"],[1,"mt-4",2,"text-align","center"],["href","https://book-monkey5.angular-buch.com","role","button","target","_blank",1,"btn","btn-primary","cta__button"],["src","/assets/img/github-white.svg","alt","",1,"cta__button__icon"],[1,"row"],["href","https://book-monkey5.angular-buch.com/diffs/","target","_blank","role","button",1,"btn","btn-primary"],[1,"col-12"],[1,"index__item","index__item--list"],["class","row repo-container text-center",4,"ngIf"],[3,"error"],[1,"row","repo-container","text-center"],[1,"table","table-bordered","table-hover","text-left"],[4,"ngFor","ngForOf"],[1,"font-weight-bold"],[3,"href"]],template:function(r,c){1&r&&(e.TgZ(0,"app-hero-gallery-header",0)(1,"h1",1),e._uU(2,"Begleitmaterial zur"),e._UZ(3,"br"),e._uU(4,"4. Auflage"),e.qZA(),e.TgZ(5,"p",2),e._uU(6," Hier finden Sie Quellcode und weitere Materialien zum Buch"),e._UZ(7,"br"),e._uU(8,"der "),e.TgZ(9,"strong"),e._uU(10,"4. Auflage"),e.qZA(),e._uU(11,". "),e.qZA()(),e.TgZ(12,"section",3)(13,"div",4)(14,"div",5)(15,"div",6)(16,"div",7)(17,"div",8)(18,"h3"),e._uU(19,"Los geht's!"),e.qZA(),e.TgZ(20,"p",9),e._uU(21," Mit dem Angular-Buch lernen Sie Schritt f\xfcr Schritt anhand eines anspruchsvollen Beispielprojekts, wie Sie strukturierte und modularisierte Single-Page-Anwendungen entwickeln. "),e._UZ(22,"br")(23,"br"),e._uU(24," Der Programmcode zu jeder einzelnen Entwicklungsphase ist auf GitHub verf\xfcgbar. So k\xf6nnen Sie einsteigen, wo Sie wollen, und nach Wunsch Entwicklungsschritte \xfcberspringen. "),e.qZA()()(),e.TgZ(25,"div",7)(26,"div",8)(27,"h4",10),e._uU(28,"Der BookMonkey"),e.qZA(),e.TgZ(29,"p",9),e._uU(30,' Der "BookMonkey" ist das Demo-Projekt zum Buch. Anhand des Beispielprojekts f\xfchren wir Sie schrittweise an die Entwicklung mit Angular heran: '),e.qZA(),e.TgZ(31,"p",11)(32,"a",12),e._UZ(33,"img",13),e._uU(34," Demo-Projekt"),e._UZ(35,"br"),e.TgZ(36,"small"),e._uU(37,"BookMonkey 5"),e.qZA()()()()()(),e.TgZ(38,"div",14)(39,"div",7)(40,"div",8)(41,"h4",10),e._uU(42,"Differenzansicht"),e.qZA(),e.TgZ(43,"p",9),e._uU(44," F\xfcr die einzelnen Schritte aus dem Beispielprojekt bieten wir eine Differenzansicht an. So k\xf6nnen Sie die \xc4nderungen am Code zwischen den einzelnen Kapiteln genau nachvollziehen: "),e.qZA(),e.TgZ(45,"a",15),e._uU(46,"BookMonkey 5 Diffs"),e.qZA()()()(),e.TgZ(47,"div",14)(48,"div",16)(49,"div",17)(50,"h4",10),e._uU(51,"Quellcode auf GitHub"),e.qZA(),e._uU(52," Den Quellcode zu den einzelnen Entwicklungsschritten haben wir in separaten Repositorys zur Verf\xfcgung gestellt: "),e.YNc(53,f,10,1,"div",18),e.ALo(54,"async"),e._UZ(55,"app-http-error",19),e.qZA()()()()()()),2&r&&(e.xp6(53),e.Q6J("ngIf",e.lcZ(54,2,c.githubRepos$)),e.xp6(2),e.Q6J("error",c.error))},dependencies:[s.Ov,s.O5,s.ax,a.K,u.I],styles:[".cta[_ngcontent-%COMP%]{padding:1em 0 5em;margin-top:20px;margin-bottom:20px}.cta--stripe[_ngcontent-%COMP%]{background:linear-gradient(2deg,#F8F8F8 0%,#F8F8F8 72.9%,#FFF 73%,#FFF 100%)}.cta__button[_ngcontent-%COMP%]{color:#fff!important;border-radius:2px;padding:.75em 1.5em;font-size:1.2em;text-transform:uppercase;font-weight:700}.cta__button__icon[_ngcontent-%COMP%]{float:left;width:1.2em;height:1.2em;margin:-.05em .3em 0 0}.cta__hint[_ngcontent-%COMP%]{font-size:11px;padding-top:.5em;color:#9e9e9e;font-weight:500}.cta__hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:-.3em .3em 0 0}.repo-container[_ngcontent-%COMP%]{margin-top:2em}"]})}}}]);