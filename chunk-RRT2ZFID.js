import{g as c}from"./chunk-UV2LA6EF.js";import{Ea as r,U as s,gb as a,ia as i,tb as p}from"./chunk-VK4APRCY.js";var h=(()=>{class e{sanitizer=i(c);set json(t){this.jsonLD=this.getSafeHTML(t)}jsonLD;getSafeHTML(t){let o=`<script type="application/ld+json">${t?JSON.stringify(t,null,2).replace(/<\/script>/g,"<\\/script>"):""}<\/script>`;return this.sanitizer.bypassSecurityTrustHtml(o)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["app-json-ld"]],hostVars:1,hostBindings:function(n,o){n&2&&a("innerHTML",o.jsonLD,r)},inputs:{json:"json"},standalone:!0,features:[p],decls:0,vars:0,template:function(n,o){},encapsulation:2,changeDetection:0})}return e})();export{h as a};
