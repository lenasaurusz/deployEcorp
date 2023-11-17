"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[742],{2742:(X,u,s)=>{s.r(u),s.d(u,{EspecializacionModule:()=>B});var a=s(6814),p=s(180),d=s(9372),g=s(7394),e=s(4946),m=s(9355),f=s(3801),h=s(3561),v=s(9185),z=s(1269);function C(i,c){if(1&i&&(e.TgZ(0,"li",3),e._uU(1),e.qZA()),2&i){const o=c.$implicit;e.xp6(1),e.hij(" ",o.descripcion," ")}}let x=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["especializacion-informacion"]],inputs:{perfil:"perfil",objetivos:"objetivos"},decls:11,vars:2,consts:[[1,"grid","gap-5"],[1,"grid","gap-[10px]"],[1,"font-bold"],[1,"bodyText"],[1,"leading-7","list-disc","pl-5"],["class","bodyText",4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Perfil del alumno"),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"div",1)(7,"p",2),e._uU(8,"Objetivo de la especializaci\xf3n"),e.qZA(),e.TgZ(9,"ul",4),e.YNc(10,C,2,1,"li",5),e.qZA()()()),2&n&&(e.xp6(5),e.Oqu(t.perfil),e.xp6(5),e.Q6J("ngForOf",t.objetivos))},dependencies:[a.sg]})}return i})(),Z=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["especializacion-imagen"]],inputs:{imagen:"imagen",nombre:"nombre"},decls:1,vars:2,consts:[[1,"rounded-lg","object-cover","h-72","w-full",3,"src","alt"]],template:function(n,t){1&n&&e._UZ(0,"img",0),2&n&&e.Q6J("src",t.imagen,e.LSH)("alt",t.nombre)}})}return i})();var E=s(9013),T=s(9227);let O=(()=>{class i{constructor(o){this.cartService=o}toggleToCart(){const o=this.cartService.especializacionToProduct(this.especializacion);this.isinCart()?this.cartService.removeFromCart(o.id,o.tipo):this.cartService.addToCart(o)}buyNow(){const o=this.cartService.especializacionToProduct(this.especializacion);this.cartService.buyNow(o)}isinCart(){const o=this.cartService.especializacionToProduct(this.especializacion);return this.cartService.isProductInCart(o.id,o.tipo)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(E.N))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["especializacion-precio"]],inputs:{especializacion:"especializacion",empresa:"empresa"},decls:19,vars:12,consts:[[1,"bg-[#272727]","rounded-lg","p-5","flex","flex-col","gap-5","justify-center"],[1,"text-center","font-bold"],[1,"flex","flex-wrap","items-center","justify-center","gap-5"],[1,"flex","gap-[5px]"],[3,"ngClass"],[1,"font-bold"],[1,"flex","flex-wrap","gap-5","items-center","justify-center"],["typeButton","primary",1,"lg:flex-1",3,"click"],["typeButton","secondary",1,"lg:flex-1",3,"isinCart","click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"h4")(6,"s"),e._uU(7),e.ALo(8,"currency"),e.qZA()(),e.TgZ(9,"h4",4),e._uU(10),e.qZA()(),e.TgZ(11,"h3",5),e._uU(12),e.ALo(13,"currency"),e.qZA()(),e.TgZ(14,"div",6)(15,"shared-botones",7),e.NdJ("click",function(){return t.buyNow()}),e._uU(16," Comprar ahora "),e.qZA(),e.TgZ(17,"shared-botones",8),e.NdJ("click",function(){return t.toggleToCart()}),e._uU(18," A\xf1adir al carrito "),e.qZA()()()),2&n&&(e.xp6(2),e.Oqu(t.especializacion.nombre),e.xp6(5),e.Oqu(e.xi3(8,6,t.especializacion.solesantes,"S/.")),e.xp6(2),e.Q6J("ngClass","txt-"+t.empresa),e.xp6(1),e.hij(" -",((t.especializacion.solesantes-t.especializacion.soles)/t.especializacion.solesantes*100).toFixed(2),"% "),e.xp6(2),e.hij(" ",e.xi3(13,9,t.especializacion.soles,"S/.")," "),e.xp6(5),e.Q6J("isinCart",t.isinCart()))},dependencies:[a.mk,T.x,a.H9]})}return i})();function b(i,c){if(1&i&&(e.O4$(),e.kcU(),e.TgZ(0,"div")(1,"ul",5)(2,"li",6),e._uU(3),e.qZA()(),e.TgZ(4,"div",7)(5,"p"),e._uU(6,"Docente:"),e.qZA(),e.TgZ(7,"div",8),e._UZ(8,"img",9),e.TgZ(9,"p",10),e._uU(10),e.qZA()()()()),2&i){const o=e.oxw();e.xp6(3),e.hij(" ",o.curso.descripcion," "),e.xp6(4),e.Q6J("ngClass","hover-"+o.empresa),e.xp6(1),e.Q6J("src",o.curso.imagen,e.LSH)("alt",o.curso.docente),e.xp6(2),e.Oqu(o.curso.docente)}}const _=function(i){return["curso",i]};let y=(()=>{class i{constructor(){this.cursoIsOpen=!1}changeCurso(){this.cursoIsOpen=!this.cursoIsOpen}static#e=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["especializacion-curso"]],inputs:{curso:"curso",empresa:"empresa",cursoIsOpen:"cursoIsOpen"},decls:8,vars:9,consts:[[1,"p-5","border","border-l-4","border-transparent",3,"ngClass"],[1,"cursor-pointer","py-[5px]","gap-[10px]","flex","justify-between",3,"ngClass","click"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"icon",3,"ngClass"],["d","M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"],[4,"ngIf"],[1,"list-[circle]","px-5","mt-5","grid","gap-4"],[1,"text-[14px]"],[1,"flex","justify-between","items-center","mt-5"],[1,"cursor-pointer","flex","items-center","gap-[10px]",3,"ngClass"],[1,"h-8","w-8","rounded-full","object-cover",3,"src","alt"],[1,"underline"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return t.changeCurso()}),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"div"),e.O4$(),e.TgZ(5,"svg",2),e._UZ(6,"path",3),e.qZA()()(),e.YNc(7,b,11,5,"div",4),e.qZA()),2&n&&(e.ekj("active",t.cursoIsOpen),e.Q6J("ngClass",t.empresa),e.xp6(1),e.Q6J("ngClass",e.VKq(7,_,"hover-"+t.empresa)),e.xp6(2),e.Oqu(t.curso.nombre),e.xp6(2),e.Q6J("ngClass",t.cursoIsOpen?"rotate-180":""),e.xp6(2),e.Q6J("ngIf",t.cursoIsOpen))},dependencies:[a.mk,a.O5],styles:[".Ecoambiental[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{color:var(--eco)}.Ghamec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{color:var(--ghamec)}.Acm[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{color:var(--acm)}.active.Ecoambiental[_ngcontent-%COMP%]{border-left-color:var(--eco)}.active.Ghamec[_ngcontent-%COMP%]{border-left-color:var(--ghamec)}.active.Acm[_ngcontent-%COMP%]{border-left-color:var(--acm)}.active.Ecoambiental[_ngcontent-%COMP%]   .curso[_ngcontent-%COMP%]{color:var(--eco);fill:var(--eco)}.active.Ghamec[_ngcontent-%COMP%]   .curso[_ngcontent-%COMP%]{color:var(--ghamec);fill:var(--ghamec)}.active.Acm[_ngcontent-%COMP%]   .curso[_ngcontent-%COMP%]{color:var(--acm);fill:var(--acm)}.icon[_ngcontent-%COMP%]{transition:transform ease-in-out .25s}"]})}return i})();function P(i,c){if(1&i&&e._UZ(0,"especializacion-curso",4),2&i){const o=c.$implicit,n=c.index,t=e.oxw();e.Q6J("curso",o)("empresa",t.empresa)("cursoIsOpen",!n)}}let A=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["especializacion-plan-de-estudios"]],inputs:{cursos:"cursos",empresa:"empresa"},decls:5,vars:1,consts:[[1,""],[1,"font-bold","mb-[10px]"],[1,"temario","lienzo3","flex","flex-col"],["class","curso",3,"curso","empresa","cursoIsOpen",4,"ngFor","ngForOf"],[1,"curso",3,"curso","empresa","cursoIsOpen"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2,"Cursos"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,P,1,3,"especializacion-curso",3),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("ngForOf",t.cursos))},dependencies:[a.sg,y],styles:[".temario[_ngcontent-%COMP%]{box-shadow:4px 4px 4px #00000040}.curso[_ngcontent-%COMP%]{border:solid 1px #131313}.curso[_ngcontent-%COMP%]:not(:first-of-type){border-top:0}"]})}return i})();var I=s(8287);function J(i,c){if(1&i&&(e.TgZ(0,"div",7)(1,"h3"),e._uU(2,"Opiniones sobre la especializaci\xf3n"),e.qZA(),e._UZ(3,"opinion-list",8),e.qZA()),2&i){const o=e.oxw(2);e.xp6(3),e.Q6J("opiniones",o.opiniones)}}function U(i,c){if(1&i&&(e.TgZ(0,"div",7)(1,"h3"),e._uU(2,"Te podr\xeda gustar"),e.qZA(),e._UZ(3,"especializacion-list",9),e.qZA()),2&i){const o=e.oxw(2);e.xp6(3),e.Q6J("especializaciones",o.especializaciones)}}function S(i,c){if(1&i&&(e.ynx(0),e.TgZ(1,"div",1),e._UZ(2,"especializacion-imagen",2)(3,"especializacion-precio",3)(4,"especializacion-plan-de-estudios",4),e.TgZ(5,"div"),e._UZ(6,"especializacion-informacion",5),e.qZA()(),e.YNc(7,J,4,1,"div",6),e.YNc(8,U,4,1,"div",6),e.BQk()),2&i){const o=e.oxw();e.xp6(2),e.Q6J("imagen",o.especializacion.imagen)("nombre",o.especializacion.nombre),e.xp6(1),e.Q6J("especializacion",o.especializacion)("empresa",o.empresa),e.xp6(1),e.Q6J("cursos",o.especializacion.cursos)("empresa",o.empresa),e.xp6(2),e.Q6J("perfil",o.especializacion.perfil)("objetivos",o.especializacion.objetivos),e.xp6(1),e.Q6J("ngIf",o.opiniones.length>0),e.xp6(1),e.Q6J("ngIf",o.especializaciones.length>0)}}function F(i,c){1&i&&e._UZ(0,"shared-loader")}let M=(()=>{class i{constructor(o,n,t,r,l){this.activatedRoute=o,this.ruta=n,this.serviceEspecializacion=t,this.router=r,this.opinionService=l,this.laoding=!0,this.params=new g.w0}ngOnInit(){this.empresa=this.ruta.getEmpresa(),this.getId()}ngOnDestroy(){this.params.unsubscribe()}getId(){this.params=this.activatedRoute.params.subscribe(({id:o})=>{this.laoding=!0,this.getEspecializacion(o),this.getOpiniones(o),this.getEspecializaciones(o)})}getEspecializacion(o){this.serviceEspecializacion.getEspecializacion(this.empresa,o).subscribe(n=>{if(!n)return this.router.navigate(["/",this.empresa,"especializacion"]);this.especializacion=n,setTimeout(()=>this.laoding=!1,1e3)})}getOpiniones(o){this.opinionService.getOpiniones(this.empresa,{tipoContenido:1,idContenido:o}).subscribe(t=>{t&&(this.opiniones=t)})}getEspecializaciones(o){this.serviceEspecializacion.getEspecializaciones(this.empresa,{page:1,sizePage:6}).subscribe(t=>{t&&(this.especializaciones=t.paquetes.filter(r=>r.id!=this.especializacion.id).slice(0,5))})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(p.gz),e.Y36(m.e),e.Y36(f.M),e.Y36(p.F0),e.Y36(h.T))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-detalle-page-especializacion"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-7","relative"],[3,"imagen","nombre"],[3,"especializacion","empresa"],[3,"cursos","empresa"],[1,"",3,"perfil","objetivos"],["class","mt-7 flex flex-col gap-5",4,"ngIf"],[1,"mt-7","flex","flex-col","gap-5"],[3,"opiniones"],[3,"especializaciones"]],template:function(n,t){1&n&&(e.YNc(0,S,9,10,"ng-container",0),e.YNc(1,F,1,0,"shared-loader",0)),2&n&&(e.Q6J("ngIf",!t.laoding),e.xp6(1),e.Q6J("ngIf",t.laoding))},dependencies:[a.O5,v.R,z.X,x,Z,O,A,I._]})}return i})();var Q=s(670),j=s(1289),q=s(2174),N=s(4831);const Y=[{path:"",component:(()=>{class i{get input(){return this.filtrosEspecializacionService.input||""}constructor(o,n){this.rutaEmpresaService=o,this.filtrosEspecializacionService=n}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}searchEspecializacion(o){this.filtrosEspecializacionService.input=o||void 0,this.filtrosEspecializacionService.page=void 0,this.filtrosEspecializacionService.updateFiltros(),this.filtrosEspecializacionService.navigateWithFiltros()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(m.e),e.Y36(Q.g))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-layout-page-especializacion"]],decls:6,vars:1,consts:[[1,"flex","items-center","justify-end","gap-5","mb-5"],[1,"flex-1",3,"busqueda","onSearch"]],template:function(n,t){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"shared-buscador",1),e.NdJ("onSearch",function(l){return t.searchEspecializacion(l)}),e.qZA(),e._UZ(3,"shared-carrito")(4,"shared-auth-button"),e.qZA(),e._UZ(5,"router-outlet"),e.qZA()),2&n&&(e.xp6(2),e.Q6J("busqueda",t.input))},dependencies:[p.lC,j.a,q.n,N.o]})}return i})(),children:[{path:"",component:d.t,data:{parametro1:"valorPredeterminado1",parametro2:"valorPredeterminado2"}},{path:":id",component:M}]}];let w=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(Y),p.Bz]})}return i})();var D=s(6208),L=s(3808);let B=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[a.ez,w,D.m,L.$]})}return i})()}}]);