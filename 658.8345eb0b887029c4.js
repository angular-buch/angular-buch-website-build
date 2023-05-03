"use strict";(self.webpackChunkangular_website=self.webpackChunkangular_website||[]).push([[658],{2549:(p,g,n)=>{n.d(g,{I:()=>s});var u=n(4755),t=n(2504);function c(o,a){if(1&o&&(t.TgZ(0,"div",1)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"p",2),t._uU(4," Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut und "),t.TgZ(5,"a",3),t._uU(6,"laden Sie diese Seite neu"),t.qZA(),t._uU(7,". "),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()()),2&o){const _=t.oxw();t.xp6(2),t.hij("Fehler ",_.error.status,""),t.xp6(7),t.Oqu(_.message)}}let s=(()=>{class o{constructor(){this.error={}}get message(){return this.error.error&&this.error.error.message?"Server Message: "+this.error.error.message:this.error.message}}return o.\u0275fac=function(_){return new(_||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-http-error"]],inputs:{error:"error"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","alert alert-danger mt-4","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger","mt-4"],[1,"mt-4"],["href","javascript:window.location.reload();"]],template:function(_,e){1&_&&t.YNc(0,c,10,2,"div",0),2&_&&t.Q6J("ngIf",e.error)},dependencies:[u.O5],styles:["a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{text-decoration:underline}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{text-decoration:none}"]}),o})()},4105:(p,g,n)=>{n.d(g,{s:()=>c});var u=n(2504),t=n(3144);let c=(()=>{class s{constructor(a){this.http=a}getGithubRepos(){return this.http.get("/assets/data/repos.json")}getBlogList(){return this.http.get("/assets/data/bloglist.json")}getBlogEntry(a){return this.http.get(`/assets/data/posts/${a}.json`)}}return s.\u0275fac=function(a){return new(a||s)(u.LFG(t.eN))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4658:(p,g,n)=>{n.r(g),n.d(g,{Material4aComponent:()=>C});var u=n(4755),t=n(7690),c=n(4004),s=n(262),o=n(515),a=n(8936),_=n(2549),e=n(2504),m=n(4105);function f(i,d){if(1&i&&(e.TgZ(0,"tr")(1,"td",24)(2,"a",25),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA()()),2&i){const r=d.$implicit;e.xp6(2),e.Q6J("href",r.url,e.LSH),e.xp6(1),e.Oqu(r.name),e.xp6(2),e.Oqu(r.description)}}function M(i,d){if(1&i&&(e.TgZ(0,"div",21)(1,"table",22)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Repository"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Beschreibung"),e.qZA()()(),e.TgZ(8,"tbody"),e.YNc(9,f,6,3,"tr",23),e.qZA()()()),2&i){const r=d.ngIf;e.xp6(9),e.Q6J("ngForOf",r)}}let C=(()=>{class i{constructor(r){this.as=r,this.githubRepos$=this.as.getGithubRepos().pipe((0,c.U)(l=>l.filter(h=>this.is4aRepo(h))),(0,c.U)(l=>l.sort((h,O)=>h.name.localeCompare(O.name))),(0,s.K)(l=>(this.error=l,console.log(l),o.E)))}is4aRepo(r){return!r.description.includes("[only dist]")&&".github"!==r.name&&(r.url.includes("book-monkey5")||"api5"===r.name||"book-monkey5-styles"===r.name)}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(m.s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-material4a"]],standalone:!0,features:[e.jDz],decls:63,vars:4,consts:[["imageUrl","assets/img/header/classroom.png"],[1,"schule","headline__page"],[1,"hero__teaser"],[1,"index","mt-1","mt-md-n5",2,"background","none"],[1,"index__stripe","index__stripe--list"],[1,"container"],[1,"row","align-items-end"],[1,"col-12","col-md-6"],[1,"index__item","index__item--list","mb-5","p-4"],[1,"mt-4","pt-2"],[1,"headline"],[1,"mt-4",2,"text-align","center"],["href","https://book-monkey5.angular-buch.com","role","button","target","_blank",1,"btn","btn-primary","cta__button"],["src","/assets/img/github-white.svg","alt","",1,"cta__button__icon"],[1,"row"],["href","https://book-monkey5.angular-buch.com/diffs/","target","_blank","role","button",1,"btn","btn-primary"],["routerLink","/blog/errata-4a","role","button",1,"btn","btn-primary"],[1,"col-12"],[1,"index__item","index__item--list"],["class","row repo-container text-center",4,"ngIf"],[3,"error"],[1,"row","repo-container","text-center"],[1,"table","table-bordered","table-hover","text-left"],[4,"ngFor","ngForOf"],[1,"font-weight-bold"],[3,"href"]],template:function(r,l){1&r&&(e.TgZ(0,"app-hero-gallery-header",0)(1,"h1",1),e._uU(2,"Begleitmaterial"),e._UZ(3,"br"),e._uU(4,"zum Angular-Buch"),e.qZA(),e.TgZ(5,"p",2),e._uU(6," Hier finden Sie den Quellcode und weitere Materialien f\xfcr die aktuelle"),e._UZ(7,"br"),e.TgZ(8,"strong"),e._uU(9,"4. Auflage"),e.qZA(),e._uU(10," aus dem Jahr 2023. "),e.qZA()(),e.TgZ(11,"section",3)(12,"div",4)(13,"div",5)(14,"div",6)(15,"div",7)(16,"div",8)(17,"h2"),e._uU(18,"Vierte Auflage: Los geht's!"),e.qZA(),e.TgZ(19,"p",9),e._uU(20," Mit dem Angular-Buch lernen Sie Schritt f\xfcr Schritt anhand eines anspruchsvollen Beispielprojekts, wie Sie strukturierte und modularisierte Single-Page-Anwendungen entwickeln. "),e._UZ(21,"br")(22,"br"),e._uU(23," Der Programmcode zu jeder einzelnen Entwicklungsphase ist auf GitHub verf\xfcgbar. So k\xf6nnen Sie einsteigen, wo Sie wollen, und nach Wunsch Entwicklungsschritte \xfcberspringen. "),e.qZA()()(),e.TgZ(24,"div",7)(25,"div",8)(26,"h3",10),e._uU(27,"Der BookMonkey"),e.qZA(),e.TgZ(28,"p",9),e._uU(29,' Der "BookMonkey" ist das Demo-Projekt zum Buch. Anhand des Beispielprojekts f\xfchren wir Sie schrittweise an die Entwicklung mit Angular heran: '),e.qZA(),e.TgZ(30,"p",11)(31,"a",12),e._UZ(32,"img",13),e._uU(33," Demo-Projekt"),e._UZ(34,"br"),e.TgZ(35,"small"),e._uU(36,"BookMonkey 5"),e.qZA()()()()()(),e.TgZ(37,"div",14)(38,"div",7)(39,"div",8)(40,"h3",10),e._uU(41,"Differenzansicht"),e.qZA(),e.TgZ(42,"p",9),e._uU(43," F\xfcr die einzelnen Schritte aus dem Beispielprojekt bieten wir eine Differenzansicht an. So k\xf6nnen Sie die \xc4nderungen am Code zwischen den einzelnen Kapiteln genau nachvollziehen: "),e.qZA(),e.TgZ(44,"a",15),e._uU(45,"BookMonkey 5 Diffs"),e.qZA()()(),e.TgZ(46,"div",7)(47,"div",8)(48,"h3",10),e._uU(49,"Errata"),e.qZA(),e.TgZ(50,"p",9),e._uU(51," In der 4. Auflage des Buchs haben wir viele Fehler beseitigt \u2013 trotzdem ist ein gedrucktes Buch nie ohne Fehler. Im Errata-Verzeichnis haben wir alle fehlerhaften Stellen aufgelistet: "),e.qZA(),e.TgZ(52,"a",16),e._uU(53,"Errata-Verzeichnis"),e.qZA()()()(),e.TgZ(54,"div",14)(55,"div",17)(56,"div",18)(57,"h3",10),e._uU(58,"Quellcode auf GitHub"),e.qZA(),e._uU(59," Den Quellcode zu den einzelnen Entwicklungsschritten haben wir in separaten Repositorys zur Verf\xfcgung gestellt: "),e.YNc(60,M,10,1,"div",19),e.ALo(61,"async"),e._UZ(62,"app-http-error",20),e.qZA()()()()()()),2&r&&(e.xp6(60),e.Q6J("ngIf",e.lcZ(61,2,l.githubRepos$)),e.xp6(2),e.Q6J("error",l.error))},dependencies:[u.Ov,u.O5,u.ax,a.K,_.I,t.rH],styles:["h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{font-size:2.5rem}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.25rem}h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%]{font-size:1.1rem}h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-size:1rem}.cta[_ngcontent-%COMP%]{padding:1em 0 5em;margin-top:20px;margin-bottom:20px}.cta--stripe[_ngcontent-%COMP%]{background:linear-gradient(2deg,#F8F8F8 0%,#F8F8F8 72.9%,#FFF 73%,#FFF 100%)}.cta__button[_ngcontent-%COMP%]{color:#fff!important;border-radius:2px;padding:.75em 1.5em;font-size:1.2em;text-transform:uppercase;font-weight:700}.cta__button__icon[_ngcontent-%COMP%]{float:left;width:1.2em;height:1.2em;margin:-.05em .3em 0 0}.cta__hint[_ngcontent-%COMP%]{font-size:11px;padding-top:.5em;color:#9e9e9e;font-weight:500}.cta__hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:-.3em .3em 0 0}.repo-container[_ngcontent-%COMP%]{margin-top:2em}"]}),i})()}}]);