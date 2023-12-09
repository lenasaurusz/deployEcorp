"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[441],{7556:(L,c,s)=>{s.r(c),s.d(c,{TerminosModule:()=>Z});var l=s(6814),r=s(2895),t=s(4946),d=s(4831),u=s(2174);const h=function(){return["./general"]},g=function(){return["./calidad"]};let f=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["sidebar-terminos"]],decls:8,vars:4,consts:[[1,"lienzo3","p-[20px]","pt-[10px]","w-[370px]"],[1,"w-full"],["routerLinkActive","active",1,"item-sidebar","w-full",3,"routerLink"],["routerLinkActive","active",1,"item-sidebar",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"ol",1)(2,"div",2)(3,"li"),t._uU(4,"T\xe9rminos y condiciones generales"),t.qZA()(),t.TgZ(5,"div",3)(6,"li"),t._uU(7,"T\xe9rminos y condiciones de capacitaciones gratuitas"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,h)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,g)))},dependencies:[r.rH,r.Od],styles:["li[_ngcontent-%COMP%]{list-style-type:decimal;margin-left:15px}.item-sidebar[_ngcontent-%COMP%]{padding:10px;cursor:pointer}.active.item-sidebar[_ngcontent-%COMP%]{color:var(--primary-color);border-bottom:2px solid var(--primary-color)}.selector[_ngcontent-%COMP%]:hover{box-shadow:inset 0 0 0 .4px var(--primary-color)}"]})}return n})();const v=function(n){return{hidden:n}};let C=(()=>{class n{constructor(i){this.router=i,this.selectedOption="Terminos",this.showOptions=!1}toggleOptions(){this.showOptions=!this.showOptions}selectOption(i,e){this.selectedOption=i,this.showOptions=!1,this.router.navigate([e])}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(r.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["terminos-terminos-responsive"]],decls:13,vars:6,consts:[[1,"relative",3,"click"],[1,"selector","relative","border","rounded-full","block","lienzo2"],[1,"relative","cursor-pointer","m-2"],["id","selected-option",1,"py-1"],[1,"absolute","inset-y-0","right-0","flex","items-center","pr-2","pointer-events-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"],["id","options",1,"item-sidebar","mt-2","absolute","lienzo2","rounded-lg","w-full",3,"ngClass"],[1,"py-1","cursor-pointer","m-1",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.toggleOptions()}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"path",6),t.qZA()()(),t.kcU(),t.TgZ(8,"div",7)(9,"div",8),t._uU(10," T\xe9rminos y condiciones generales "),t.qZA(),t.TgZ(11,"div",8),t._uU(12," T\xe9rminos y condiciones de capacitaciones gratuitas "),t.qZA()()()()),2&e&&(t.xp6(4),t.Oqu(o.selectedOption),t.xp6(4),t.Q6J("ngClass",t.VKq(4,v,!o.showOptions)),t.xp6(1),t.Q6J("routerLink","./general"),t.xp6(2),t.Q6J("routerLink","./calidad"))},dependencies:[l.mk,r.rH],styles:["li[_ngcontent-%COMP%]{list-style-type:decimal;margin-left:15px}.item-sidebar[_ngcontent-%COMP%]{padding:10px;cursor:pointer}.active.item-sidebar[_ngcontent-%COMP%]{color:var(--primary-color);border-bottom:2px solid var(--primary-color)}"]})}return n})(),T=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["layout-page-terminos"]],decls:7,vars:0,consts:[[1,"flex","items-center","justify-end","gap-5","mb-5"],[1,"flex","flex-col","justify-center","items-center","lg:justify-start","lg:items-start","lg:flex-row","gap-[20px]"],[1,"hidden","md:block"],[1,"hidden","max-md:block","w-full","m-2"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"shared-carrito")(2,"shared-auth-button"),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"sidebar-terminos",2)(5,"terminos-terminos-responsive",3)(6,"router-outlet"),t.qZA())},dependencies:[r.lC,d.o,u.n,f,C]})}return n})();var m=s(9355),y=s(5065),O=s(7398),E=s(6306),M=s(2096),x=s(9862);let p=(()=>{class n{constructor(i){this.http=i,this.URL=y.T.baseUrl}getTerminos(i,e){return this.http.get(`${this.URL}/politica/${i}/${e}`).pipe((0,O.U)(a=>a[0]),(0,E.K)(a=>(console.error("Error al obtener docente",a),(0,M.of)(void 0))))}static#t=this.\u0275fac=function(e){return new(e||n)(t.LFG(x.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const b=[{path:"",component:T,children:[{path:"",redirectTo:"general",pathMatch:"full"},{path:"general",component:(()=>{class n{constructor(i,e){this.rutaEmpresa=i,this.terminosService=e}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.getNameEmpresa(),this.terminosService.getTerminos(this.empresa,"Terminos general").subscribe(e=>{e&&(this.terminos=e)})}getNameEmpresa(){"EcoAmbiental"===this.empresa?this.nameEmpresa="ECOAMBIENTAL GROUP":"Ghamec"===this.empresa?this.nameEmpresa="GHAMEC INGENIEROS":"ACM"===this.empresa&&(this.nameEmpresa="ACM INGENIEROS")}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(m.e),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["general-terminos"]],decls:1,vars:1,consts:[[1,"lienzo3","w-full","p-[20px]","border-l-[4px]","border-primary",3,"innerHTML"]],template:function(e,o){1&e&&t._UZ(0,"div",0),2&e&&t.Q6J("innerHTML",o.terminos.politica_descripcion,t.oJD)},styles:["p[_ngcontent-%COMP%]{line-height:217.891%}"]})}return n})()},{path:"calidad",component:(()=>{class n{constructor(i,e){this.rutaEmpresa=i,this.terminosService=e}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.getNameEmpresa(),this.terminosService.getTerminos(this.empresa,"Terminos capacitacion").subscribe(e=>{e&&(this.terminos=e)})}getNameEmpresa(){"EcoAmbiental"===this.empresa?this.nameEmpresa="ECOAMBIENTAL GROUP":"Ghamec"===this.empresa?this.nameEmpresa="GHAMEC INGENIEROS":"ACM"===this.empresa&&(this.nameEmpresa="ACM INGENIEROS")}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(m.e),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["calidad-terminos"]],decls:1,vars:1,consts:[[1,"border-primary","lienzo3","w-full","p-[20px]","border-l-[4px]",3,"innerHTML"]],template:function(e,o){1&e&&t._UZ(0,"div",0),2&e&&t.Q6J("innerHTML",o.terminos.politica_descripcion,t.oJD)},styles:["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{line-height:217.891%;font-size:14px}li[_ngcontent-%COMP%]{list-style-type:disc}ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:20px}ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}li[_ngcontent-%COMP%]{margin-left:0}li[_ngcontent-%COMP%]:not(ul   li)[_ngcontent-%COMP%]{margin-left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}"]})}return n})()}]}];let A=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(b),r.Bz]})}return n})();var P=s(6208);let Z=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[l.ez,A,P.m]})}return n})()}}]);