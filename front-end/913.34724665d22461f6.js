"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[913],{5913:(J,d,o)=>{o.r(d),o.d(d,{PoliticasModule:()=>U});var u=o(6208),r=o(6814),a=o(2895),t=o(4946),g=o(4831),h=o(2174);const f=function(){return["./organizacion"]},v=function(){return["./calidad"]},P=function(){return["./privacidad"]};let C=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-politicas"]],decls:11,vars:6,consts:[[1,"lienzo3","p-[20px]","pt-[10px]","w-[370px]"],[1,"w-full"],["routerLinkActive","active",1,"item-sidebar","w-full",3,"routerLink"],["routerLinkActive","active",1,"item-sidebar",3,"routerLink"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"ol",1)(2,"div",2)(3,"li"),t._uU(4,"Pol\xedtica de organizaci\xf3n"),t.qZA()(),t.TgZ(5,"div",3)(6,"li"),t._uU(7,"Pol\xedtica de calidad"),t.qZA()(),t.TgZ(8,"div",3)(9,"li"),t._uU(10,"Pol\xedtica de privacidad"),t.qZA()()()()),2&i&&(t.xp6(2),t.Q6J("routerLink",t.DdM(3,f)),t.xp6(3),t.Q6J("routerLink",t.DdM(4,v)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,P)))},dependencies:[a.rH,a.Od],styles:["li[_ngcontent-%COMP%]{list-style-type:decimal;margin-left:15px}.item-sidebar[_ngcontent-%COMP%]{padding:10px;cursor:pointer}.active.item-sidebar[_ngcontent-%COMP%]{color:var(--primary-color);border-bottom:2px solid var(--primary-color)}"]})}return e})();const O=function(e){return{hidden:e}};let M=(()=>{class e{constructor(n){this.router=n,this.selectedOption="Politicas",this.showOptions=!1}toggleOptions(){this.showOptions=!this.showOptions}selectOption(n,i){this.selectedOption=n,this.showOptions=!1,this.router.navigate([i])}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-po-responsive"]],decls:15,vars:7,consts:[[1,"relative",3,"click"],[1,"selector","relative","border","rounded-full","block","lienzo2"],[1,"relative","cursor-pointer","m-2"],["id","selected-option",1,"py-1"],[1,"absolute","inset-y-0","right-0","flex","items-center","pr-2","pointer-events-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"],["id","options",1,"item-sidebar","mt-2","absolute","lienzo2","rounded-lg","w-full",3,"ngClass"],[1,"py-1","cursor-pointer","m-1",3,"routerLink"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return s.toggleOptions()}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"path",6),t.qZA()()(),t.kcU(),t.TgZ(8,"div",7)(9,"div",8),t._uU(10," Pol\xedtica de organizaci\xf3n "),t.qZA(),t.TgZ(11,"div",8),t._uU(12," Pol\xedtica de calidad "),t.qZA(),t.TgZ(13,"div",8),t._uU(14," Pol\xedtica de privacidad "),t.qZA()()()()),2&i&&(t.xp6(4),t.Oqu(s.selectedOption),t.xp6(4),t.Q6J("ngClass",t.VKq(5,O,!s.showOptions)),t.xp6(1),t.Q6J("routerLink","./organizacion"),t.xp6(2),t.Q6J("routerLink","./calidad"),t.xp6(2),t.Q6J("routerLink","./privacidad"))},dependencies:[r.mk,a.rH]})}return e})(),E=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout-pages-politicas"]],decls:8,vars:0,consts:[[1,"p-3"],[1,"flex","items-center","justify-end","gap-5","mb-5"],[1,"flex","gap-[20px]","flex-col","lg:flex-row","max-sm:items-center","max-md:items-center"],[1,"hidden","md:block"],[1,"hidden","max-md:block","w-full","m-2"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"shared-carrito")(3,"shared-auth-button"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-sidebar-politicas",3)(6,"app-po-responsive",4)(7,"router-outlet"),t.qZA()())},dependencies:[a.lC,g.o,h.n,C,M]})}return e})();var l=o(9355),x=o(5065),y=o(7398),_=o(6306),T=o(2096),A=o(9862);let p=(()=>{class e{constructor(n){this.http=n,this.URL=x.T.baseUrl}getPoliticas(n,i){return this.http.get(`${this.URL}/politica/${n}/${i}`).pipe((0,y.U)(c=>c[0]),(0,_.K)(c=>(console.error("Error al obtener planes",c),(0,T.of)(void 0))))}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(A.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function b(e,m){if(1&e&&t._UZ(0,"div",1),2&e){const n=t.oxw();t.Q6J("innerHTML",n.politica.politica_descripcion,t.oJD)}}function Z(e,m){if(1&e&&t._UZ(0,"div",1),2&e){const n=t.oxw();t.Q6J("innerHTML",n.politica.politica_descripcion,t.oJD)}}function I(e,m){if(1&e&&t._UZ(0,"div",1),2&e){const n=t.oxw();t.Q6J("innerHTML",n.politica.politica_descripcion,t.oJD)}}const w=[{path:"",component:E,children:[{path:"",redirectTo:"organizacion",pathMatch:"full"},{path:"organizacion",component:(()=>{class e{constructor(n,i){this.rutaEmpresa=n,this.politicasService=i}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.getNameEmpresa(),this.politicasService.getPoliticas(this.empresa,"Organizacion").subscribe(n=>{n&&(this.politica=n)})}getNameEmpresa(){"EcoAmbiental"===this.empresa?this.nameEmpresa="ECOAMBIENTAL GROUP":"Ghamec"===this.empresa?this.nameEmpresa="GHAMEC INGENIEROS":"ACM"===this.empresa&&(this.nameEmpresa="ACM INGENIEROS")}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.e),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-po-organisacion"]],decls:1,vars:1,consts:[["class","border-primary lienzo3 w-full p-[20px] border-l-[4px]",3,"innerHTML",4,"ngIf"],[1,"border-primary","lienzo3","w-full","p-[20px]","border-l-[4px]",3,"innerHTML"]],template:function(i,s){1&i&&t.YNc(0,b,1,1,"div",0),2&i&&t.Q6J("ngIf",s.politica)},dependencies:[r.O5],styles:["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{line-height:217.891%;font-size:14px}li[_ngcontent-%COMP%]{list-style-type:disc}ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:20px}ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}li[_ngcontent-%COMP%]{margin-left:0}li[_ngcontent-%COMP%]:not(ul   li)[_ngcontent-%COMP%]{margin-left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}"]})}return e})()},{path:"calidad",component:(()=>{class e{constructor(n,i){this.rutaEmpresa=n,this.politicasServices=i}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.getNameEmpresa(),this.politicasServices.getPoliticas(this.empresa,"Calidad").subscribe(n=>{n&&(this.politica=n)})}getNameEmpresa(){"EcoAmbiental"===this.empresa?this.nameEmpresa="ECOAMBIENTAL GROUP":"Ghamec"===this.empresa?this.nameEmpresa="GHAMEC INGENIEROS":"ACM"===this.empresa&&(this.nameEmpresa="ACM INGENIEROS")}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.e),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-po-calidad"]],decls:1,vars:1,consts:[["class","border-primary lienzo3 w-full p-[20px] border-l-[4px]",3,"innerHTML",4,"ngIf"],[1,"border-primary","lienzo3","w-full","p-[20px]","border-l-[4px]",3,"innerHTML"]],template:function(i,s){1&i&&t.YNc(0,Z,1,1,"div",0),2&i&&t.Q6J("ngIf",s.politica)},dependencies:[r.O5],styles:["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{line-height:217.891%;font-size:14px}li[_ngcontent-%COMP%]{list-style-type:disc}ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:20px}ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}li[_ngcontent-%COMP%]{margin-left:0}li[_ngcontent-%COMP%]:not(ul   li)[_ngcontent-%COMP%]{margin-left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}"]})}return e})()},{path:"privacidad",component:(()=>{class e{constructor(n,i){this.rutaEmpresa=n,this.politicasService=i}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.getNameEmpresa(),this.politicasService.getPoliticas(this.empresa,"Privacidad").subscribe(n=>{n&&(this.politica=n)})}getNameEmpresa(){"EcoAmbiental"===this.empresa?this.nameEmpresa="ECOAMBIENTAL GROUP":"Ghamec"===this.empresa?this.nameEmpresa="GHAMEC INGENIEROS":"ACM"===this.empresa&&(this.nameEmpresa="ACM INGENIEROS")}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.e),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-po-privacidad"]],decls:1,vars:1,consts:[["class","border-primary lienzo3 w-full p-[20px] border-l-[4px]",3,"innerHTML",4,"ngIf"],[1,"border-primary","lienzo3","w-full","p-[20px]","border-l-[4px]",3,"innerHTML"]],template:function(i,s){1&i&&t.YNc(0,I,1,1,"div",0),2&i&&t.Q6J("ngIf",s.politica)},dependencies:[r.O5],styles:["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{line-height:217.891%;font-size:14px}li[_ngcontent-%COMP%]{list-style-type:disc}ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:20px}ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}li[_ngcontent-%COMP%]{margin-left:0}li[_ngcontent-%COMP%]:not(ul   li)[_ngcontent-%COMP%]{margin-left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}"]})}return e})()}]}];let z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(w),a.Bz]})}return e})(),U=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[r.ez,z,u.m]})}return e})()}}]);