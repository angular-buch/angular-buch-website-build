(self.webpackChunkangular_website=self.webpackChunkangular_website||[]).push([[851],{945:(y,E,i)=>{"use strict";i.d(E,{e:()=>f});var m=i(6895),l=i(9433),u=i(8274);function g(d,v){if(1&d&&(u.TgZ(0,"a",11),u._uU(1),u.qZA()),2&d){const s=u.oxw();u.Q6J("routerLink",s.headlineLink),u.xp6(1),u.Oqu(s.headline)}}function p(d,v){if(1&d&&(u.ynx(0),u._uU(1),u.BQk()),2&d){const s=u.oxw();u.xp6(1),u.Oqu(s.headline)}}class f{}f.\u0275fac=function(v){return new(v||f)},f.\u0275cmp=u.Xpm({type:f,selectors:[["app-hero-header"]],inputs:{headline:"headline",headlineLink:"headlineLink"},standalone:!0,features:[u.jDz],decls:11,vars:2,consts:[[1,"hero","hero--smaller"],[1,"hero__lines"],[1,"container"],[1,"row","justify-content-between"],[1,"col-md-6","col-xs-12"],[1,"headline__page","headline__page--blank","headline__page--space-bottom"],["style","color: white",3,"routerLink",4,"ngIf"],[4,"ngIf"],[1,"col-5","d-none","d-md-block","text-center"],["src","assets/img/angular.png","alt","",1,"hero__angular--smaller"],["name","content","id","content"],[2,"color","white",3,"routerLink"]],template:function(v,s){1&v&&(u.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),u.YNc(6,g,2,2,"a",6),u.YNc(7,p,2,1,"ng-container",7),u.qZA()(),u.TgZ(8,"div",8),u._UZ(9,"img",9),u.qZA()()()()(),u._UZ(10,"a",10)),2&v&&(u.xp6(6),u.Q6J("ngIf",s.headlineLink),u.xp6(1),u.Q6J("ngIf",!s.headlineLink))},dependencies:[m.O5,l.rH],encapsulation:2})},2549:(y,E,i)=>{"use strict";i.d(E,{I:()=>g});var m=i(6895),l=i(8274);function u(p,f){if(1&p&&(l.TgZ(0,"div",1)(1,"h1"),l._uU(2),l.qZA(),l.TgZ(3,"p",2),l._uU(4," Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut und "),l.TgZ(5,"a",3),l._uU(6,"laden Sie diese Seite neu"),l.qZA(),l._uU(7,". "),l.qZA(),l.TgZ(8,"p"),l._uU(9),l.qZA()()),2&p){const d=l.oxw();l.xp6(2),l.hij("Fehler ",d.error.status,""),l.xp6(7),l.Oqu(d.message)}}class g{constructor(){this.error={}}get message(){return this.error.error&&this.error.error.message?"Server Message: "+this.error.error.message:this.error.message}}g.\u0275fac=function(f){return new(f||g)},g.\u0275cmp=l.Xpm({type:g,selectors:[["app-http-error"]],inputs:{error:"error"},standalone:!0,features:[l.jDz],decls:1,vars:1,consts:[["class","alert alert-danger mt-4","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger","mt-4"],[1,"mt-4"],["href","javascript:window.location.reload();"]],template:function(f,d){1&f&&l.YNc(0,u,10,2,"div",0),2&f&&l.Q6J("ngIf",d.error)},dependencies:[m.O5],styles:["a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{text-decoration:underline}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{text-decoration:none}"]})},4105:(y,E,i)=>{"use strict";i.d(E,{s:()=>u});var m=i(8274),l=i(529);class u{constructor(p){this.http=p}getGithubRepos(){return this.http.get("/assets/data/repos.json")}getBlogList(){return this.http.get("/assets/data/bloglist.json")}getBlogEntry(p){return this.http.get(`/assets/data/posts/${p}.json`)}}u.\u0275fac=function(p){return new(p||u)(m.LFG(l.eN))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})},5969:(y,E,i)=>{"use strict";i.d(E,{M:()=>g});var m=i(3955),u=i(8274);class g{transform(f,d){return m.url(f,{size:"200",rating:"pg",d:"mm"})}}g.\u0275fac=function(f){return new(f||g)},g.\u0275pipe=u.Yjl({name:"gravatar",type:g,pure:!0,standalone:!0})},8043:(y,E,i)=>{"use strict";i.d(E,{A:()=>u});var m=i(8274),l=i(1481);class u{constructor(p){this._sanitizer=p}transform(p){return this._sanitizer.bypassSecurityTrustHtml(p)}}u.\u0275fac=function(p){return new(p||u)(m.Y36(l.H7,16))},u.\u0275pipe=m.Yjl({name:"sanitizeHtml",type:u,pure:!0,standalone:!0})},1014:function(y,E,i){var m;!function(l){"use strict";function u(e,c){var r=(65535&e)+(65535&c);return(e>>16)+(c>>16)+(r>>16)<<16|65535&r}function p(e,c,r,h,C,O){return u(function g(e,c){return e<<c|e>>>32-c}(u(u(c,e),u(h,O)),C),r)}function f(e,c,r,h,C,O,P){return p(c&r|~c&h,e,c,C,O,P)}function d(e,c,r,h,C,O,P){return p(c&h|r&~h,e,c,C,O,P)}function v(e,c,r,h,C,O,P){return p(c^r^h,e,c,C,O,P)}function s(e,c,r,h,C,O,P){return p(r^(c|~h),e,c,C,O,P)}function _(e,c){e[c>>5]|=128<<c%32,e[14+(c+64>>>9<<4)]=c;var r,h,C,O,P,t=1732584193,n=-271733879,a=-1732584194,o=271733878;for(r=0;r<e.length;r+=16)h=t,C=n,O=a,P=o,t=f(t,n,a,o,e[r],7,-680876936),o=f(o,t,n,a,e[r+1],12,-389564586),a=f(a,o,t,n,e[r+2],17,606105819),n=f(n,a,o,t,e[r+3],22,-1044525330),t=f(t,n,a,o,e[r+4],7,-176418897),o=f(o,t,n,a,e[r+5],12,1200080426),a=f(a,o,t,n,e[r+6],17,-1473231341),n=f(n,a,o,t,e[r+7],22,-45705983),t=f(t,n,a,o,e[r+8],7,1770035416),o=f(o,t,n,a,e[r+9],12,-1958414417),a=f(a,o,t,n,e[r+10],17,-42063),n=f(n,a,o,t,e[r+11],22,-1990404162),t=f(t,n,a,o,e[r+12],7,1804603682),o=f(o,t,n,a,e[r+13],12,-40341101),a=f(a,o,t,n,e[r+14],17,-1502002290),t=d(t,n=f(n,a,o,t,e[r+15],22,1236535329),a,o,e[r+1],5,-165796510),o=d(o,t,n,a,e[r+6],9,-1069501632),a=d(a,o,t,n,e[r+11],14,643717713),n=d(n,a,o,t,e[r],20,-373897302),t=d(t,n,a,o,e[r+5],5,-701558691),o=d(o,t,n,a,e[r+10],9,38016083),a=d(a,o,t,n,e[r+15],14,-660478335),n=d(n,a,o,t,e[r+4],20,-405537848),t=d(t,n,a,o,e[r+9],5,568446438),o=d(o,t,n,a,e[r+14],9,-1019803690),a=d(a,o,t,n,e[r+3],14,-187363961),n=d(n,a,o,t,e[r+8],20,1163531501),t=d(t,n,a,o,e[r+13],5,-1444681467),o=d(o,t,n,a,e[r+2],9,-51403784),a=d(a,o,t,n,e[r+7],14,1735328473),t=v(t,n=d(n,a,o,t,e[r+12],20,-1926607734),a,o,e[r+5],4,-378558),o=v(o,t,n,a,e[r+8],11,-2022574463),a=v(a,o,t,n,e[r+11],16,1839030562),n=v(n,a,o,t,e[r+14],23,-35309556),t=v(t,n,a,o,e[r+1],4,-1530992060),o=v(o,t,n,a,e[r+4],11,1272893353),a=v(a,o,t,n,e[r+7],16,-155497632),n=v(n,a,o,t,e[r+10],23,-1094730640),t=v(t,n,a,o,e[r+13],4,681279174),o=v(o,t,n,a,e[r],11,-358537222),a=v(a,o,t,n,e[r+3],16,-722521979),n=v(n,a,o,t,e[r+6],23,76029189),t=v(t,n,a,o,e[r+9],4,-640364487),o=v(o,t,n,a,e[r+12],11,-421815835),a=v(a,o,t,n,e[r+15],16,530742520),t=s(t,n=v(n,a,o,t,e[r+2],23,-995338651),a,o,e[r],6,-198630844),o=s(o,t,n,a,e[r+7],10,1126891415),a=s(a,o,t,n,e[r+14],15,-1416354905),n=s(n,a,o,t,e[r+5],21,-57434055),t=s(t,n,a,o,e[r+12],6,1700485571),o=s(o,t,n,a,e[r+3],10,-1894986606),a=s(a,o,t,n,e[r+10],15,-1051523),n=s(n,a,o,t,e[r+1],21,-2054922799),t=s(t,n,a,o,e[r+8],6,1873313359),o=s(o,t,n,a,e[r+15],10,-30611744),a=s(a,o,t,n,e[r+6],15,-1560198380),n=s(n,a,o,t,e[r+13],21,1309151649),t=s(t,n,a,o,e[r+4],6,-145523070),o=s(o,t,n,a,e[r+11],10,-1120210379),a=s(a,o,t,n,e[r+2],15,718787259),n=s(n,a,o,t,e[r+9],21,-343485551),t=u(t,h),n=u(n,C),a=u(a,O),o=u(o,P);return[t,n,a,o]}function D(e){var c,r="",h=32*e.length;for(c=0;c<h;c+=8)r+=String.fromCharCode(e[c>>5]>>>c%32&255);return r}function M(e){var c,r=[];for(r[(e.length>>2)-1]=void 0,c=0;c<r.length;c+=1)r[c]=0;var h=8*e.length;for(c=0;c<h;c+=8)r[c>>5]|=(255&e.charCodeAt(c/8))<<c%32;return r}function I(e){var h,C,c="0123456789abcdef",r="";for(C=0;C<e.length;C+=1)h=e.charCodeAt(C),r+=c.charAt(h>>>4&15)+c.charAt(15&h);return r}function w(e){return unescape(encodeURIComponent(e))}function L(e){return function A(e){return D(_(M(e),8*e.length))}(w(e))}function T(e,c){return function U(e,c){var r,P,h=M(e),C=[],O=[];for(C[15]=O[15]=void 0,h.length>16&&(h=_(h,8*e.length)),r=0;r<16;r+=1)C[r]=909522486^h[r],O[r]=1549556828^h[r];return P=_(C.concat(M(c)),512+8*c.length),D(_(O.concat(P),640))}(w(e),w(c))}function B(e,c,r){return c?r?T(c,e):function H(e,c){return I(T(e,c))}(c,e):r?L(e):function R(e){return I(L(e))}(e)}void 0!==(m=function(){return B}.call(E,i,E,y))&&(y.exports=m)}()},3955:(y,E,i)=>{y.exports=i(9406)},9406:(y,E,i)=>{var m=i(1014),l=i(7137),u=/^[0-9a-f]{32}$/;function p(s,_){if(s)return"boolean"==typeof s.protocol?s.protocol:"http"!==s.protocol&&("https"===s.protocol||void 0)}function f(s){return(s="string"==typeof s?s.trim().toLowerCase():"unspecified").match(u)?s:m(s)}function d(s){var _=l.stringify(function g(s){var _={},D={protocol:1,format:1};for(var M in s)D[M]||(_[M]=s[M]);return _}(s));return _&&"?"+_||""}y.exports={url:function(s,_,D){var M="//www.gravatar.com/avatar/";_&&_.cdn?(M=_.cdn+"/avatar/",delete _.cdn):(_&&_.protocol&&(D=p(_)),typeof D<"u"&&(M=D?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var A=d(_);return M+f(s)+A},profile_url:function(s,_,D){var M=null!=_&&null!=_.format?String(_.format):"json";if(_&&_.cdn)A=_.cdn+"/",delete _.cdn;else{_&&_.protocol&&(D=p(_));var A=D?"https://secure.gravatar.com/":"http://www.gravatar.com/"}var U=d(_);return A+f(s)+"."+M+U}}},516:y=>{"use strict";function E(i,m){return Object.prototype.hasOwnProperty.call(i,m)}y.exports=function(i,m,l,u){l=l||"=";var g={};if("string"!=typeof i||0===i.length)return g;var p=/\+/g;i=i.split(m=m||"&");var f=1e3;u&&"number"==typeof u.maxKeys&&(f=u.maxKeys);var d=i.length;f>0&&d>f&&(d=f);for(var v=0;v<d;++v){var D,M,A,U,s=i[v].replace(p,"%20"),_=s.indexOf(l);_>=0?(D=s.substr(0,_),M=s.substr(_+1)):(D=s,M=""),A=decodeURIComponent(D),U=decodeURIComponent(M),E(g,A)?Array.isArray(g[A])?g[A].push(U):g[A]=[g[A],U]:g[A]=U}return g}},5776:y=>{"use strict";var E=function(i){switch(typeof i){case"string":return i;case"boolean":return i?"true":"false";case"number":return isFinite(i)?i:"";default:return""}};y.exports=function(i,m,l,u){return m=m||"&",l=l||"=",null===i&&(i=void 0),"object"==typeof i?Object.keys(i).map(function(g){var p=encodeURIComponent(E(g))+l;return Array.isArray(i[g])?i[g].map(function(f){return p+encodeURIComponent(E(f))}).join(m):p+encodeURIComponent(E(i[g]))}).join(m):u?encodeURIComponent(E(u))+l+encodeURIComponent(E(i)):""}},7137:(y,E,i)=>{"use strict";E.decode=E.parse=i(516),E.encode=E.stringify=i(5776)}}]);