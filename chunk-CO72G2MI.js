import{a as y}from"./chunk-AOCN3BKY.js";import{a as P}from"./chunk-MH2LFY6R.js";import{m as F}from"./chunk-LJZIBRJ6.js";import{Aa as _,Ga as m,Nb as E,Pa as b,Ta as x,Ua as k,V as h,Wa as C,X as f,Xa as S,Ya as t,Za as n,_a as a,gb as e,hb as c,l as u,mb as M,pb as w,qb as v,r as d,y as g}from"./chunk-JQKHWHRI.js";var z=(r,l)=>l.name;function O(r,l){if(r&1&&(t(0,"tr")(1,"td",23)(2,"a",24),e(3),n()(),t(4,"td"),e(5),n()()),r&2){let i=l.$implicit;m(2),b("href",i.url,_),m(1),c(i.name),m(2),c(i.description)}}function D(r,l){r&1&&(t(0,"div",21)(1,"table",22)(2,"thead")(3,"tr")(4,"th"),e(5,"Repository"),n(),t(6,"th"),e(7,"Beschreibung"),n()()(),t(8,"tbody"),C(9,O,6,3,"tr",null,z),n()()()),r&2&&S(9,l)}var $=(()=>{class r{knownRepos=/book-monkey4|api4|iteration/;filterDescription=/\[only dist\]/;as=h(y);githubRepos$=this.as.getGithubRepos().pipe(d(i=>i.filter(o=>this.knownRepos.test(o.name))),d(i=>i.filter(o=>!this.filterDescription.test(o.description))),d(i=>i.sort((o,s)=>o.name.localeCompare(s.name))),g(i=>(this.error=i,console.log(i),u)));error;static \u0275fac=function(o){return new(o||r)};static \u0275cmp=f({type:r,selectors:[["app-material3a"]],standalone:!0,features:[M],decls:64,vars:3,consts:[["imageUrl","assets/img/header/classroom.png"],[1,"schule","headline__page"],[1,"hero__teaser"],[1,"index","mt-1","mt-md-n5",2,"background","none"],[1,"index__stripe","index__stripe--list"],[1,"container"],[1,"row","align-items-end"],[1,"col-12","col-md-6"],[1,"index__item","index__item--list","mb-5","p-4"],[1,"mt-4","pt-2"],[1,"headline"],[1,"mt-4",2,"text-align","center"],["href","https://book-monkey4.angular-buch.com","role","button","target","_blank",1,"btn","btn-primary","cta__button"],["src","/assets/img/github-white.svg","alt","",1,"cta__button__icon"],[1,"row"],["href","https://book-monkey4.angular-buch.com/diffs/","target","_blank","role","button",1,"btn","btn-primary"],["routerLink","/blog/errata-3a","role","button",1,"btn","btn-primary","mt-2","mr-2"],["routerLink","/blog/2022-06-bm4-update","role","button",1,"btn","btn-success","mt-2"],[1,"col-12"],[1,"index__item","index__item--list"],["class","row repo-container text-center"],[1,"row","repo-container","text-center"],[1,"table","table-bordered","table-hover","text-left"],[1,"font-weight-bold"],[3,"href"]],template:function(o,s){if(o&1&&(t(0,"app-hero-gallery-header",0)(1,"h1",1),e(2,"Begleitmaterial"),a(3,"br"),e(4,"zum Angular-Buch"),n(),t(5,"p",2),e(6," Hier finden Sie den Quellcode und weitere Materialien f\xFCr die"),a(7,"br"),t(8,"strong"),e(9,"3. Auflage"),n(),e(10," aus dem Jahr 2020. "),n()(),t(11,"section",3)(12,"div",4)(13,"div",5)(14,"div",6)(15,"div",7)(16,"div",8)(17,"h2"),e(18,"Dritte Auflage: Los geht's!"),n(),t(19,"p",9),e(20," Mit dem Angular-Buch lernen Sie Schritt f\xFCr Schritt anhand eines anspruchsvollen Beispielprojekts, wie Sie strukturierte und modularisierte Single-Page-Anwendungen entwickeln. "),a(21,"br")(22,"br"),e(23," Der Programmcode zu jeder einzelnen Entwicklungsphase ist auf GitHub verf\xFCgbar. So k\xF6nnen Sie einsteigen, wo Sie wollen, und nach Wunsch Entwicklungsschritte \xFCberspringen. "),n()()(),t(24,"div",7)(25,"div",8)(26,"h3",10),e(27,"Der BookMonkey"),n(),t(28,"p",9),e(29,' Der "BookMonkey" ist das Demo-Projekt zum Buch. Anhand des Beispielprojekts f\xFChren wir Sie schrittweise an die Entwicklung mit Angular heran: '),n(),t(30,"p",11)(31,"a",12),a(32,"img",13),e(33," Demo-Projekt"),a(34,"br"),t(35,"small"),e(36,"BookMonkey 4"),n()()()()()(),t(37,"div",14)(38,"div",7)(39,"div",8)(40,"h3",10),e(41,"Differenzansicht"),n(),t(42,"p",9),e(43," F\xFCr die einzelnen Iterationsschritte aus dem Beispielprojekt bieten wir eine Differenzansicht an. So k\xF6nnen Sie die \xC4nderungen am Code zwischen den einzelnen Kapiteln genau nachvollziehen: "),n(),t(44,"a",15),e(45,"BookMonkey 4 Diffs"),n()()(),t(46,"div",7)(47,"div",8)(48,"h3",10),e(49,"Errata und Aktualisierungen"),n(),t(50,"p",9),e(51," In der 3. Auflage des Buchs haben wir viele Fehler beseitigt \u2013 trotzdem ist ein gedrucktes Buch nie ohne Fehler. Im Errata-Verzeichnis haben wir alle fehlerhaften Stellen aufgelistet. Au\xDFerdem haben wir beschrieben, welche \xC4nderungen am Beispielprojekt notwendig sind. "),n(),t(52,"a",16),e(53,"Errata"),n(),t(54,"a",17),e(55,"Aktualisierungen book-monkey"),n()()()(),t(56,"div",14)(57,"div",18)(58,"div",19)(59,"h3",10),e(60,"Quellcode auf GitHub"),n(),e(61," Den Quellcode zu den einzelnen Entwicklungsschritten haben wir in separaten Repositorys zur Verf\xFCgung gestellt: "),x(62,D,11,0,"div",20),w(63,"async"),n()()()()()()),o&2){let p;m(62),k(62,(p=v(63,1,s.githubRepos$))?62:-1,p)}},dependencies:[E,P,F],styles:["h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{font-size:2.5rem}h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:1.75rem}h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:1.25rem}h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%]{font-size:1.1rem}h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{font-size:1rem}.cta[_ngcontent-%COMP%]{padding:1em 0 5em;margin-top:20px;margin-bottom:20px}.cta--stripe[_ngcontent-%COMP%]{background:linear-gradient(2deg,#F8F8F8 0%,#F8F8F8 72.9%,#FFF 73%,#FFF 100%)}.cta__button[_ngcontent-%COMP%]{color:#fff!important;border-radius:2px;padding:.75em 1.5em;font-size:1.2em;text-transform:uppercase;font-weight:700}.cta__button__icon[_ngcontent-%COMP%]{float:left;width:1.2em;height:1.2em;margin:-.05em .3em 0 0}.cta__hint[_ngcontent-%COMP%]{font-size:11px;padding-top:.5em;color:#9e9e9e;font-weight:500}.cta__hint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:-.3em .3em 0 0}.repo-container[_ngcontent-%COMP%]{margin-top:2em}"],changeDetection:0})}return r})();export{$ as Material3aComponent};
