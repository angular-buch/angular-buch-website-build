import{a as O}from"./chunk-DD62WZ4X.js";import{a as F}from"./chunk-AOCN3BKY.js";import{a as w}from"./chunk-MH2LFY6R.js";import{m as P}from"./chunk-LJZIBRJ6.js";import{Aa as b,Ga as l,Nb as E,Pa as p,Ta as C,Ua as x,V as f,Wa as M,X as _,Xa as v,Ya as t,Za as n,_a as a,gb as e,hb as s,l as u,mb as S,pb as k,qb as y,r as c,y as g}from"./chunk-JQKHWHRI.js";var z=(r,m)=>m.name;function D(r,m){if(r&1&&(t(0,"tr")(1,"td",23)(2,"a",24),e(3),n()(),t(4,"td"),e(5),n()()),r&2){let i=m.$implicit;l(2),p("href",i.url,b),l(1),s(i.name),l(2),s(i.description)}}function B(r,m){r&1&&(t(0,"div",21)(1,"table",22)(2,"thead")(3,"tr")(4,"th"),e(5,"Repository"),n(),t(6,"th"),e(7,"Beschreibung"),n()()(),t(8,"tbody"),M(9,D,6,3,"tr",null,z),n()()()),r&2&&v(9,m)}var K=(()=>{class r{as=f(F);githubRepos$=this.as.getGithubRepos().pipe(c(i=>i.filter(o=>this.is4aRepo(o))),c(i=>i.sort((o,d)=>o.name.localeCompare(d.name))),g(i=>(this.error=i,console.log(i),u)));error;is4aRepo(i){return!i.description.includes("[only dist]")&&i.name!==".github"&&(i.url.includes("book-monkey5")||i.name==="api5"||i.name==="book-monkey5-styles")}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=_({type:r,selectors:[["app-material4a"]],standalone:!0,features:[S],decls:63,vars:4,consts:[["imageUrl","assets/img/header/classroom.png"],[1,"schule","headline__page"],[1,"hero__teaser"],[1,"index","mt-1","mt-md-n5",2,"background","none"],[1,"index__stripe","index__stripe--list"],[1,"container"],[1,"row","align-items-end"],[1,"col-12","col-md-6"],[1,"index__item","index__item--list","mb-5","p-4"],[1,"mt-4","pt-2"],[1,"headline"],[1,"mt-4",2,"text-align","center"],["href","https://book-monkey5.angular-buch.com","role","button","target","_blank",1,"btn","btn-primary","cta__button"],["src","/assets/img/github-white.svg","alt","",1,"cta__button__icon"],[1,"row"],["href","https://book-monkey5.angular-buch.com/diffs/","target","_blank","role","button",1,"btn","btn-primary"],["routerLink","/blog/errata-4a","role","button",1,"btn","btn-primary"],[1,"col-12"],[1,"index__item","index__item--list"],["class","row repo-container text-center"],[3,"error"],[1,"row","repo-container","text-center"],[1,"table","table-bordered","table-hover","text-left"],[1,"font-weight-bold"],[3,"href"]],template:function(o,d){if(o&1&&(t(0,"app-hero-gallery-header",0)(1,"h1",1),e(2,"Begleitmaterial"),a(3,"br"),e(4,"zum Angular-Buch"),n(),t(5,"p",2),e(6," Hier finden Sie den Quellcode und weitere Materialien f\xFCr die aktuelle"),a(7,"br"),t(8,"strong"),e(9,"4. Auflage"),n(),e(10," aus dem Jahr 2023. "),n()(),t(11,"section",3)(12,"div",4)(13,"div",5)(14,"div",6)(15,"div",7)(16,"div",8)(17,"h2"),e(18,"Vierte Auflage: Los geht's!"),n(),t(19,"p",9),e(20," Mit dem Angular-Buch lernen Sie Schritt f\xFCr Schritt anhand eines anspruchsvollen Beispielprojekts, wie Sie strukturierte und modularisierte Single-Page-Anwendungen entwickeln. "),a(21,"br")(22,"br"),e(23," Der Programmcode zu jeder einzelnen Entwicklungsphase ist auf GitHub verf\xFCgbar. So k\xF6nnen Sie einsteigen, wo Sie wollen, und nach Wunsch Entwicklungsschritte \xFCberspringen. "),n()()(),t(24,"div",7)(25,"div",8)(26,"h3",10),e(27,"Der BookMonkey"),n(),t(28,"p",9),e(29,' Der "BookMonkey" ist das Demo-Projekt zum Buch. Anhand des Beispielprojekts f\xFChren wir Sie schrittweise an die Entwicklung mit Angular heran: '),n(),t(30,"p",11)(31,"a",12),a(32,"img",13),e(33," Demo-Projekt"),a(34,"br"),t(35,"small"),e(36,"BookMonkey 5"),n()()()()()(),t(37,"div",14)(38,"div",7)(39,"div",8)(40,"h3",10),e(41,"Differenzansicht"),n(),t(42,"p",9),e(43," F\xFCr die einzelnen Schritte aus dem Beispielprojekt bieten wir eine Differenzansicht an. So k\xF6nnen Sie die \xC4nderungen am Code zwischen den einzelnen Kapiteln genau nachvollziehen: "),n(),t(44,"a",15),e(45,"BookMonkey 5 Diffs"),n()()(),t(46,"div",7)(47,"div",8)(48,"h3",10),e(49,"Errata"),n(),t(50,"p",9),e(51," In der 4. Auflage des Buchs haben wir viele Fehler beseitigt \u2013 trotzdem ist ein gedrucktes Buch nie ohne Fehler. Im Errata-Verzeichnis haben wir alle fehlerhaften Stellen aufgelistet: "),n(),t(52,"a",16),e(53,"Errata-Verzeichnis"),n()()()(),t(54,"div",14)(55,"div",17)(56,"div",18)(57,"h3",10),e(58,"Quellcode auf GitHub"),n(),e(59," Den Quellcode zu den einzelnen Entwicklungsschritten haben wir in separaten Repositorys zur Verf\xFCgung gestellt: "),C(60,B,11,0,"div",19),k(61,"async"),a(62,"app-http-error",20),n()()()()()()),o&2){let h;l(60),x(60,(h=y(61,2,d.githubRepos$))?60:-1,h),l(2),p("error",d.error)}},dependencies:[E,w,O,P],styles:["h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{font-size:2.5rem}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.25rem}h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%]{font-size:1.1rem}h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-size:1rem}.cta[_ngcontent-%COMP%]{padding:1em 0 5em;margin-top:20px;margin-bottom:20px}.cta--stripe[_ngcontent-%COMP%]{background:linear-gradient(2deg,#F8F8F8 0%,#F8F8F8 72.9%,#FFF 73%,#FFF 100%)}.cta__button[_ngcontent-%COMP%]{color:#fff!important;border-radius:2px;padding:.75em 1.5em;font-size:1.2em;text-transform:uppercase;font-weight:700}.cta__button__icon[_ngcontent-%COMP%]{float:left;width:1.2em;height:1.2em;margin:-.05em .3em 0 0}.cta__hint[_ngcontent-%COMP%]{font-size:11px;padding-top:.5em;color:#9e9e9e;font-weight:500}.cta__hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:-.3em .3em 0 0}.repo-container[_ngcontent-%COMP%]{margin-top:2em}"],changeDetection:0})}return r})();export{K as Material4aComponent};
