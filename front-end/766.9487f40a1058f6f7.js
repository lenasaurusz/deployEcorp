"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[766],{3766:(I,F,l)=>{l.r(F),l.d(F,{CapacitacionesModule:()=>le});var n=l(6814),T=l(6208),h=l(2253),e=l(4946),v=l(9355),y=l(7394),Z=l(5619);let m=(()=>{class t{get filtrosCapacitacion(){return this._filtrosCapacitacion}get nombre(){return this._nombre}set nombre(i){this._nombre=i}get orden(){return this._orden}set orden(i){this._orden=i}constructor(i,a,c){this.activatedRoute=i,this.rutaEmpresaService=a,this.router=c,this.queryParams=new y.w0,this._filtrosCapacitacion=new Z.X(void 0),this.loadFiltros()}updateFiltros(){const i={...void 0!==this.nombre&&{nombre:this.nombre},...void 0!==this.orden&&{orden:this.orden}};Object.keys(i).length>0?this._filtrosCapacitacion.next(i):this._filtrosCapacitacion.next(void 0)}loadFiltros(){this.queryParams=this.activatedRoute.queryParamMap.subscribe(i=>{this.nombre=i.get("nombre")||void 0;const a=i.get("orden");this.orden=null!=a?parseInt(a):void 0}),this.updateFiltros()}navigateWithFiltros(){this.empresa=this.rutaEmpresaService.getEmpresa();const i={...void 0!==this.nombre&&{nombre:this.nombre},...void 0!==this.orden&&{orden:this.orden}};i?this.router.navigate(["./",this.empresa,"capacitaciones"],{queryParams:i}):this.router.navigate(["./",this.empresa,"capacitaciones"])}ngOnDestroy(){this.nombre=void 0,this.orden=void 0,this.updateFiltros(),this.queryParams.unsubscribe()}static#e=this.\u0275fac=function(a){return new(a||t)(e.LFG(h.gz),e.LFG(v.e),e.LFG(h.F0))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var C=l(4831),u=l(9597),p=l(2174);let o=(()=>{class t{get name(){return this.filtrosCapacitacionService.nombre||""}constructor(i,a){this.rutaEmpresaService=i,this.filtrosCapacitacionService=a}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}searchCapacitacion(i){this.filtrosCapacitacionService.nombre=i||void 0,this.filtrosCapacitacionService.updateFiltros(),this.filtrosCapacitacionService.navigateWithFiltros()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e),e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-layout"]],decls:6,vars:1,consts:[[1,"p-3"],[1,"flex","items-center","justify-end","gap-5","mb-5"],[1,"flex-1",3,"busqueda","emitTerm"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"shared-buscador",2),e.NdJ("emitTerm",function(w){return c.searchCapacitacion(w)}),e.qZA(),e._UZ(3,"shared-carrito")(4,"shared-auth-button"),e.qZA(),e._UZ(5,"router-outlet"),e.qZA()),2&a&&(e.xp6(2),e.Q6J("busqueda",c.name))},dependencies:[h.lC,C.o,u.a,p.n]})}return t})();var r=l(9862),s=l(5065),x=l(6306),_=l(2096);let A=(()=>{class t{constructor(i){this.http=i,this.URL=s.T.baseUrl}getCapacitaciones(i,a){const c=`${this.URL}/servicio/${i}`;let g=new r.LE;return g=g.set("orden",a?.orden?a.orden:1),a?.nombre&&(g=g.set("nombre",a.nombre)),this.http.get(c,{params:g}).pipe((0,x.K)(w=>(console.error("Error al obtener capacitaciones",w),(0,_.of)([]))))}getCapacitacion(i,a){return this.http.get(`${this.URL}/servicio/detalle/${i}/${a}`).pipe((0,x.K)(g=>(console.error("Error al obtener capacitacion",g),(0,_.of)(void 0))))}postFormCapacitacion(i){return this.http.post(`${this.URL}/formulario-capacitacion`,i)}static#e=this.\u0275fac=function(a){return new(a||t)(e.LFG(r.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var b=l(9185),S=l(9649),E=l(9227);const q=function(t,d){return["/",t,"capacitaciones",d]};let O=(()=>{class t{constructor(i){this.rutaEmpresaService=i}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["card-capacitacion"]],inputs:{capacitacion:"capacitacion"},decls:7,vars:7,consts:[[1,"capacitacion","flex","flex-col","h-full","overflow-hidden","cursor-pointer","rounded-2xl","group",3,"routerLink"],[1,"rounded-t-2xl","object-cover","mb-[-20px]","h-[300px]",3,"src","alt"],[1,"name","p-3","rounded-2xl","flex","flex-col","flex-1","justify-between","gap-[10px]","lienzo3","group-hover:bg-[var(--lienzo-2)]"],[1,"font-bold"],["typeButton","primary",1,"w-full"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"p",3),e._uU(4),e.qZA(),e.TgZ(5,"shared-botones",4),e._uU(6,"Ver m\xe1s"),e.qZA()()()),2&a&&(e.Q6J("routerLink",e.WLB(4,q,c.empresa,c.capacitacion.capacitacion_id)),e.xp6(1),e.Q6J("src",c.capacitacion.capacitacion_imagen,e.LSH)("alt",c.capacitacion.capacitacion_nombre),e.xp6(3),e.hij(" ",c.capacitacion.capacitacion_nombre," "))},dependencies:[h.rH,E.x],styles:[".capacitacion[_ngcontent-%COMP%]{box-shadow:4px 4px 4px #00000040}.capacitacion[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{transition:background-color ease-in .3s}.capacitacion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{transition:all ease-in .3s}.capacitacion[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:var(--primary-color)}"]})}return t})();function J(t,d){1&t&&e._UZ(0,"card-capacitacion",2),2&t&&e.Q6J("capacitacion",d.$implicit)}let U=(()=>{class t{constructor(){this.capacitaciones=[]}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-list"]],inputs:{empresa:"empresa",capacitaciones:"capacitaciones"},decls:2,vars:1,consts:[[1,"grid-capacitacion","grid","gap-5"],["class","w-full max-w-[350px]",3,"capacitacion",4,"ngFor","ngForOf"],[1,"w-full","max-w-[350px]",3,"capacitacion"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0),e.YNc(1,J,1,1,"card-capacitacion",1),e.qZA()),2&a&&(e.xp6(1),e.Q6J("ngForOf",c.capacitaciones))},dependencies:[n.sg,O],styles:[".grid-capacitacion[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:20px;justify-content:center;justify-items:center}"]})}return t})();var Y=l(387);let P=(()=>{class t{get orden(){return this.filtrosCapacitacionService.orden}constructor(i,a){this.rutaEmpresaService=i,this.filtrosCapacitacionService=a,this.ordenOpciones=[{value:1,name:"Nombre: A - Z"},{value:2,name:"Nombre: Z - A"},{value:3,name:"Fecha: M\xe1s nuevo"},{value:4,name:"Fecha: M\xe1s Antiguo"}]}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}catchFiltro(i,a){"orden"===a&&(this.filtrosCapacitacionService.orden=i||void 0),this.filtrosCapacitacionService.updateFiltros(),this.filtrosCapacitacionService.navigateWithFiltros()}resetFiltros(){this.filtrosCapacitacionService.nombre=void 0,this.filtrosCapacitacionService.orden=void 0,this.filtrosCapacitacionService.updateFiltros(),this.filtrosCapacitacionService.navigateWithFiltros()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e),e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-filtrar"]],decls:4,vars:2,consts:[[1,"flex","items-center","mb-5","gap-5"],["placeHolder","Ordenar",3,"opciones","selected","emitSelect"],[1,"txt-primary","cursor-pointer",3,"click"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0)(1,"shared-filtros",1),e.NdJ("emitSelect",function(w){return c.catchFiltro(w,"orden")}),e.qZA(),e.TgZ(2,"div",2),e.NdJ("click",function(){return c.resetFiltros()}),e._uU(3," Reiniciar "),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("opciones",c.ordenOpciones)("selected",c.orden))},dependencies:[Y.b]})}return t})();function N(t,d){if(1&t&&(e.TgZ(0,"shared-sin-resultados",3),e._uU(1," capacitaciones "),e.qZA()),2&t){const i=e.oxw(2);e.Q6J("busqueda",i.nombre)}}function D(t,d){if(1&t&&(e.ynx(0),e._UZ(1,"capacitacion-list",1),e.YNc(2,N,2,1,"shared-sin-resultados",2),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("capacitaciones",i.capacitaciones)("empresa",i.empresa),e.xp6(1),e.Q6J("ngIf",0===i.capacitaciones.length)}}function L(t,d){1&t&&e._UZ(0,"shared-loader")}let Q=(()=>{class t{get nombre(){return this.filtrosCapacitacionService.nombre||""}constructor(i,a,c){this.rutaEmpresaService=i,this.capacitacionService=a,this.filtrosCapacitacionService=c,this.filtros=new y.w0,this.loading=!0,this.capacitaciones=[]}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa(),this.getFiltros()}ngOnDestroy(){this.filtros.unsubscribe(),this.filtrosCapacitacionService.ngOnDestroy()}getFiltros(){this.filtros=this.filtrosCapacitacionService.filtrosCapacitacion.subscribe(i=>{this.loading=!0,this.getCapacitaciones(i)})}getCapacitaciones(i){this.capacitacionService.getCapacitaciones(this.empresa,i).subscribe(a=>{a&&(this.capacitaciones=a),setTimeout(()=>this.loading=!1,1e3)})}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e),e.Y36(A),e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-list-page"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"capacitaciones","empresa"],[3,"busqueda",4,"ngIf"],[3,"busqueda"]],template:function(a,c){1&a&&(e._UZ(0,"capacitacion-filtrar"),e.YNc(1,D,3,3,"ng-container",0),e.YNc(2,L,1,0,"shared-loader",0)),2&a&&(e.xp6(1),e.Q6J("ngIf",!c.loading),e.xp6(1),e.Q6J("ngIf",c.loading))},dependencies:[n.O5,b.R,S.Y,U,P]})}return t})();function M(t,d){if(1&t&&(e.TgZ(0,"li",6)(1,"p",3),e._uU(2),e.qZA()()),2&t){const i=d.$implicit;e.xp6(2),e.hij(" ",i.curso_externo_nombre," ")}}let k=(()=>{class t{constructor(i){this.rutaEmpresaService=i}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-descripcion"]],inputs:{capacitacion:"capacitacion"},decls:11,vars:5,consts:[[1,"flex","flex-col","gap-3"],[1,"font-bold","txt-primary"],[1,"w-full","h-72","object-cover",3,"src","alt"],[1,"bodyText"],[1,"pl-7"],["class","list-disc",4,"ngFor","ngForOf"],[1,"list-disc"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e._UZ(3,"img",2),e.TgZ(4,"p",3),e._uU(5),e.qZA(),e.TgZ(6,"div")(7,"h5"),e._uU(8,"Cursos:"),e.qZA(),e.TgZ(9,"ul",4),e.YNc(10,M,3,1,"li",5),e.qZA()()()),2&a&&(e.xp6(2),e.hij(" ",c.capacitacion.capacitacion_nombre," "),e.xp6(1),e.Q6J("src",c.capacitacion.capacitacion_imagen,e.LSH)("alt",c.capacitacion.capacitacion_nombre),e.xp6(2),e.hij(" ",c.capacitacion.capacitacion_descripcion," "),e.xp6(5),e.Q6J("ngForOf",c.capacitacion.cursos_externos))},dependencies:[n.sg]})}return t})();var f=l(6223),j=l(333);const z=["*"];let B=(()=>{class t{constructor(i){this.rutaEmpresaService=i}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["shared-confirmacion"]],ngContentSelectors:z,decls:6,vars:0,consts:[[1,"absolute","w-full","h-full","left-0","top-0","flex","items-center","justify-center","bg-[#000000cc]","backdrop-blur-sm"],[1,"lienzo2","min-w-[300px]","flex","flex-col","items-center","justify-center","p-5","rounded-lg","gap-5"],[1,"check","rounded-full","w-[80px]","flex","items-center","justify-center","h-[80px]","border"],["xmlns","http://www.w3.org/2000/svg","width","52","height","40","viewBox","0 0 52 40",1,"fill-primary"],["d","M43.3208 1.27528C44.1895 0.448265 45.3455 -0.00894241 46.5448 0.000132554C47.7442 0.00920752 48.8931 0.483856 49.7492 1.32392C50.6053 2.16399 51.1015 3.30376 51.1332 4.50274C51.1649 5.70172 50.7296 6.86613 49.9191 7.75026L25.3142 38.5218C24.8911 38.9775 24.3805 39.3432 23.8128 39.5971C23.2452 39.8509 22.6321 39.9877 22.0104 39.9992C21.3887 40.0107 20.771 39.8967 20.1944 39.6641C19.6177 39.4314 19.0939 39.0849 18.6542 38.6452L2.33726 22.3282C1.88286 21.9048 1.5184 21.3942 1.26562 20.8269C1.01284 20.2595 0.876911 19.6471 0.865954 19.0261C0.854997 18.4051 0.969234 17.7883 1.20185 17.2124C1.43446 16.6365 1.78068 16.1133 2.21986 15.6742C2.65904 15.235 3.18218 14.8888 3.75808 14.6561C4.33397 14.4235 4.95081 14.3093 5.57181 14.3203C6.19281 14.3312 6.80524 14.4671 7.37257 14.7199C7.9399 14.9727 8.45049 15.3372 8.87391 15.7916L21.7869 28.6984L43.2036 1.41095C43.2422 1.36347 43.2772 1.31818 43.3208 1.27528Z"]],template:function(a,c){1&a&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4),e.qZA()(),e.Hsn(5),e.qZA()())},styles:[".check[_ngcontent-%COMP%]{border-color:var(--color-primary)}"]})}return t})();function V(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function H(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function R(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function $(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function X(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function K(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function G(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Debe ser un correo"),e.qZA()())}function W(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function ee(t,d){1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2,"Este campo es requerido"),e.qZA()())}function te(t,d){1&t&&(e.TgZ(0,"shared-confirmacion")(1,"p"),e._uU(2,'"\xa1Gracias! Hemos recibido tu solicitud."'),e.qZA()())}let ie=(()=>{class t{constructor(i,a,c,g){this.rutaEmpresaService=i,this.fb=a,this.capacitacionService=c,this.validatorsService=g,this.id=0,this.enviado=!1,this.myForm=this.fb.group({formcap_nombre:["",f.kI.required],formcap_apellido_paterno:["",f.kI.required],formcap_apellido_materno:["",f.kI.required],formcap_organizacion:["",f.kI.required],formcap_ruc:["",f.kI.required],formcap_correo:["",[f.kI.required,f.kI.pattern(this.validatorsService.emailPattern)]],formcap_celular:["",f.kI.required],formcap_pais:["",f.kI.required],formcap_consulta:["",f.kI.required],capacitacion_id:[0,f.kI.required]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa(),this.myForm.get("capacitacion_id")?.setValue(+this.id)}isValidField(i){return this.validatorsService.isValidField(this.myForm,i)}enviarForm(){this.myForm.invalid?this.myForm.markAllAsTouched():this.capacitacionService.postFormCapacitacion(this.myForm.value).subscribe({next:()=>{this.enviado=!0,setTimeout(()=>this.enviado=!1,2e3),this.myForm.reset(),this.myForm.get("capacitacion_id")?.setValue(+this.id)},error:a=>console.error(a.error.message)})}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(v.e),e.Y36(f.qu),e.Y36(A),e.Y36(j.S))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-form"]],inputs:{id:"id"},decls:54,vars:11,consts:[[1,"p-5","lienzo2",3,"formGroup","ngSubmit"],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-3"],[1,"xl:col-span-2"],[1,"flex","flex-col"],["for","nombre"],["formControlName","formcap_nombre","type","text"],[4,"ngIf"],["for","apellido"],["formControlName","formcap_apellido_paterno","type","text"],["formControlName","formcap_apellido_materno","type","text"],["for","organizacion"],["formControlName","formcap_organizacion","type","text"],["for","ruc"],["formControlName","formcap_ruc","type","text"],["formControlName","formcap_celular","type","text"],["formControlName","formcap_correo","type","text"],["formControlName","formcap_pais","type","text"],[1,"flex","flex-col","xl:col-span-2"],["for","consulta"],["formControlName","formcap_consulta","rows","6"],["typeButton","primary"],[1,"text-red-400","text-[12px]"]],template:function(a,c){1&a&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.enviarForm()}),e.TgZ(1,"div",1)(2,"h4",2),e._uU(3,"Solicitar informaci\xf3n"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Nombre:"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,V,3,0,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Apellido Paterno:"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,H,3,0,"div",6),e.qZA(),e.TgZ(14,"div",3)(15,"label",7),e._uU(16,"Apellido Materno:"),e.qZA(),e._UZ(17,"input",9),e.YNc(18,R,3,0,"div",6),e.qZA(),e.TgZ(19,"div",3)(20,"label",10),e._uU(21,"Organizaci\xf3n:"),e.qZA(),e._UZ(22,"input",11),e.YNc(23,$,3,0,"div",6),e.qZA(),e.TgZ(24,"div",3)(25,"label",12),e._uU(26,"RUC:"),e.qZA(),e._UZ(27,"input",13),e.YNc(28,X,3,0,"div",6),e.qZA(),e.TgZ(29,"div",3)(30,"label",4),e._uU(31,"N\xfamero de celular:"),e.qZA(),e._UZ(32,"input",14),e.YNc(33,K,3,0,"div",6),e.qZA(),e.TgZ(34,"div",3)(35,"label",7),e._uU(36,"Correo electr\xf3nico:"),e.qZA(),e._UZ(37,"input",15),e.YNc(38,G,3,0,"div",6),e.qZA(),e.TgZ(39,"div",3)(40,"label",7),e._uU(41,"Pa\xeds:"),e.qZA(),e._UZ(42,"input",16),e.YNc(43,W,3,0,"div",6),e.qZA(),e.TgZ(44,"div",17)(45,"label",18),e._uU(46,"Escribe tu consulta:"),e.qZA(),e.TgZ(47,"textarea",19),e._uU(48," "),e.qZA(),e.YNc(49,ee,3,0,"div",6),e.qZA(),e.TgZ(50,"div",2)(51,"shared-botones",20),e._uU(52,"Enviar"),e.qZA()()()(),e.YNc(53,te,3,0,"shared-confirmacion",6)),2&a&&(e.Q6J("formGroup",c.myForm),e.xp6(8),e.Q6J("ngIf",c.isValidField("formcap_nombre")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_apellido_paterno")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_apellido_materno")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_organizacion")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_ruc")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_celular")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_correo")),e.xp6(5),e.Q6J("ngIf",c.isValidField("formcap_pais")),e.xp6(6),e.Q6J("ngIf",c.isValidField("formcap_consulta")),e.xp6(4),e.Q6J("ngIf",c.enviado))},dependencies:[n.O5,f._Y,f.Fj,f.JJ,f.JL,f.sg,f.u,E.x,B]})}return t})();function ae(t,d){if(1&t&&(e.TgZ(0,"div",3),e._UZ(1,"capacitacion-descripcion",4)(2,"capacitacion-form",5),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("capacitacion",i.capacitacion),e.xp6(1),e.Q6J("id",i.id)}}function ne(t,d){if(1&t&&(e.TgZ(0,"div",6)(1,"h3"),e._uU(2,"Ver m\xe1s capacitaciones"),e.qZA(),e._UZ(3,"capacitacion-list",7),e.qZA()),2&t){const i=e.oxw(2);e.xp6(3),e.Q6J("capacitaciones",i.capacitaciones)}}function oe(t,d){if(1&t&&(e.ynx(0),e.YNc(1,ae,3,2,"div",1),e.YNc(2,ne,4,1,"div",2),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.capacitacion),e.xp6(1),e.Q6J("ngIf",i.capacitaciones.length>0)}}function ce(t,d){1&t&&e._UZ(0,"shared-loader")}const re=[{path:"",component:o,children:[{path:"",component:Q},{path:":id",component:(()=>{class t{constructor(i,a,c,g){this.activatedRouter=i,this.router=a,this.rutaEmpresaService=c,this.capacitacionService=g,this.params=new y.w0,this.id=0,this.loading=!0,this.capacitaciones=[]}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa(),this.getId()}ngOnDestroy(){this.params.unsubscribe()}getId(){this.params=this.activatedRouter.params.subscribe(({id:i})=>{this.id=i,this.loading=!0,this.getCapacitacion(i),this.getCapacitaciones(i)})}getCapacitacion(i){this.capacitacionService.getCapacitacion(this.empresa,i).subscribe(a=>{if(!a)return this.router.navigate(["/",this.empresa,"capacitaciones"]);this.capacitacion=a,setTimeout(()=>this.loading=!1,1e3)})}getCapacitaciones(i){return this.capacitacionService.getCapacitaciones(this.empresa).subscribe(a=>{const c=a.filter(g=>g.capacitacion_id!=i);this.capacitaciones=c.slice(0,5)})}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(h.gz),e.Y36(h.F0),e.Y36(v.e),e.Y36(A))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["capacitacion-detalle-page"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","grid grid-cols-1 lg:grid-cols-5 gap-5",4,"ngIf"],["class","mt-7 flex flex-col gap-5",4,"ngIf"],[1,"grid","grid-cols-1","lg:grid-cols-5","gap-5"],[1,"lg:col-span-3",3,"capacitacion"],[1,"lg:col-span-2",3,"id"],[1,"mt-7","flex","flex-col","gap-5"],[3,"capacitaciones"]],template:function(a,c){1&a&&(e.YNc(0,oe,3,2,"ng-container",0),e.YNc(1,ce,1,0,"shared-loader",0)),2&a&&(e.Q6J("ngIf",!c.loading),e.xp6(1),e.Q6J("ngIf",c.loading))},dependencies:[n.O5,b.R,k,ie,U]})}return t})()}]}];let se=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(re),h.Bz]})}return t})(),le=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[n.ez,f.UX,se,T.m]})}return t})()},9597:(I,F,l)=>{l.d(F,{a:()=>m});var n=l(4946),T=l(8645),h=l(4352),e=l(9360),v=l(8251),Z=l(9355);let m=(()=>{class C{constructor(p){this.rutaEmpresa=p,this.emitTerm=new n.vpe,this.busqueda="",this.debouncer=new T.x}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.debouncer.pipe(function y(C,u=h.z){return(0,e.e)((p,o)=>{let r=null,s=null,x=null;const _=()=>{if(r){r.unsubscribe(),r=null;const b=s;s=null,o.next(b)}};function A(){const b=x+C,S=u.now();if(S<b)return r=this.schedule(void 0,b-S),void o.add(r);_()}p.subscribe((0,v.x)(o,b=>{s=b,x=u.now(),r||(r=u.schedule(A,C),o.add(r))},()=>{_(),o.complete()},void 0,()=>{s=r=null}))})}(500)).subscribe(p=>this.emitTerm.emit(p))}ngOnDestroy(){this.debouncer.unsubscribe()}onKeyPress(p){(p.length>=3||!p)&&this.debouncer.next(p)}static#e=this.\u0275fac=function(o){return new(o||C)(n.Y36(Z.e))};static#t=this.\u0275cmp=n.Xpm({type:C,selectors:[["shared-buscador"]],inputs:{busqueda:"busqueda"},outputs:{emitTerm:"emitTerm"},decls:7,vars:1,consts:[[1,"relative","flex","items-center"],["type","text","placeholder","Buscar",1,"search","w-full","focus:outline-none",3,"value","keyup"],["txtInput",""],[1,"absolute","left-3"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 20 20","fill","none",1,"fill-primary"],["d","M14.6781 12.929C15.8884 11.2773 16.4305 9.22939 16.1959 7.19508C15.9613 5.16077 14.9673 3.29006 13.4128 1.95721C11.8583 0.624365 9.85794 -0.0723278 7.81187 0.00651878C5.76581 0.0853654 3.82496 0.933936 2.37762 2.38246C0.930277 3.83099 0.0831823 5.77265 0.00580795 7.81898C-0.0715664 9.86531 0.626485 11.8654 1.96031 13.4191C3.29413 14.9728 5.16536 15.9656 7.19963 16.1987C9.23389 16.4319 11.2812 15.8883 12.9319 14.6766H12.9306C12.9681 14.7266 13.0081 14.7741 13.0531 14.8204L17.8654 19.6332C18.0998 19.8678 18.4178 19.9996 18.7493 19.9997C19.0809 19.9999 19.399 19.8682 19.6335 19.6338C19.8681 19.3994 19.9999 19.0815 20 18.7498C20.0001 18.4182 19.8685 18.1002 19.6341 17.8656L14.8218 13.0528C14.7771 13.0075 14.7291 12.967 14.6781 12.929ZM15.0006 8.12371C15.0006 9.0266 14.8227 9.92066 14.4773 10.7548C14.1318 11.589 13.6254 12.3469 12.987 12.9854C12.3486 13.6238 11.5907 14.1303 10.7567 14.4758C9.92258 14.8213 9.02862 14.9992 8.12582 14.9992C7.22301 14.9992 6.32905 14.8213 5.49497 14.4758C4.66089 14.1303 3.90302 13.6238 3.26464 12.9854C2.62626 12.3469 2.11987 11.589 1.77438 10.7548C1.4289 9.92066 1.25108 9.0266 1.25108 8.12371C1.25108 6.30022 1.97538 4.55142 3.26464 3.26203C4.55391 1.97263 6.30252 1.24825 8.12582 1.24825C9.94911 1.24825 11.6977 1.97263 12.987 3.26203C14.2763 4.55142 15.0006 6.30022 15.0006 8.12371Z"]],template:function(o,r){if(1&o){const s=n.EpF();n.TgZ(0,"div")(1,"div",0)(2,"input",1,2),n.NdJ("keyup",function(){n.CHM(s);const _=n.MAs(3);return n.KtG(r.onKeyPress(_.value))}),n.qZA(),n.TgZ(4,"div",3),n.O4$(),n.TgZ(5,"svg",4),n._UZ(6,"path",5),n.qZA()()()()}2&o&&(n.xp6(2),n.Q6J("value",r.busqueda))},styles:[".search[_ngcontent-%COMP%]{padding:10px 10px 10px 40px;border-radius:99px;background-color:var(--lienzo-2);box-shadow:0 0 #fff}"]})}return C})()},387:(I,F,l)=>{l.d(F,{b:()=>Z});var n=l(4946),T=l(9355),h=l(6814);function e(m,C){if(1&m){const u=n.EpF();n.TgZ(0,"div",8),n.NdJ("click",function(){const r=n.CHM(u).$implicit,s=n.oxw(2);return n.KtG(s.onSelect(r))}),n._uU(1),n.qZA()}if(2&m){const u=C.$implicit;n.xp6(1),n.hij(" ",u.name," ")}}function v(m,C){if(1&m){const u=n.EpF();n.O4$(),n.kcU(),n.TgZ(0,"div",7)(1,"div",8),n.NdJ("click",function(){n.CHM(u);const o=n.oxw();return n.KtG(o.onSelect({value:"",name:o.placeHolder}))}),n._uU(2),n.qZA(),n.YNc(3,e,2,1,"div",9),n.qZA()}if(2&m){const u=n.oxw();n.xp6(2),n.hij(" ",u.placeHolder," "),n.xp6(1),n.Q6J("ngForOf",u.opciones)}}const y=function(m){return{active:m}};let Z=(()=>{class m{constructor(u,p){this.eRef=u,this.rutaEmpresaService=p,this.emitSelect=new n.vpe,this.placeHolder="Elije una opci\xf3n",this.opciones=[],this.openDropDown=!1}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}ngOnChanges(){this.change()}clickOut(u){this.eRef.nativeElement.contains(u.target)||(this.openDropDown=!1)}onSelect(u){this.selectedValue!=u.name&&(this.selectedValue=u.name,this.emitSelect.emit(u.value)),this.openDropDown=!1}change(){const u=this.opciones.find(p=>p.value===this.selected);this.selectedValue=u?.name}static#e=this.\u0275fac=function(p){return new(p||m)(n.Y36(n.SBq),n.Y36(T.e))};static#t=this.\u0275cmp=n.Xpm({type:m,selectors:[["shared-filtros"]],hostBindings:function(p,o){1&p&&n.NdJ("click",function(s){return o.clickOut(s)},!1,n.evT)},inputs:{placeHolder:"placeHolder",opciones:"opciones",selected:"selected"},outputs:{emitSelect:"emitSelect"},features:[n.TTD],decls:8,vars:5,consts:[[1,"relative"],["filtro",""],[1,"selector","p-[10px]","gap-[10px]","flex","justify-between","items-center","lienzo2","rounded-full","max-w-[250px]","cursor-pointer",3,"ngClass","click"],[1,"overflow-hidden","whitespace-nowrap","text-ellipsis"],["xmlns","http://www.w3.org/2000/svg","width","13","height","9","viewBox","0 0 13 9",1,"fill-primary","txt-primary"],["d","M5.30437 8.13536L0.262152 2.27303C-0.332905 1.58328 0.15071 0.5 1.05381 0.5H11.1382C11.3404 0.499824 11.5382 0.55891 11.7082 0.670182C11.8781 0.781454 12.0129 0.940196 12.0965 1.1274C12.18 1.3146 12.2087 1.52232 12.1792 1.7257C12.1496 1.92907 12.0631 2.11947 11.9299 2.2741L6.88768 8.13429C6.789 8.24915 6.6673 8.34121 6.53076 8.40429C6.39422 8.46737 6.24599 8.5 6.09602 8.5C5.94606 8.5 5.79783 8.46737 5.66129 8.40429C5.52474 8.34121 5.40305 8.24915 5.30437 8.13429V8.13536Z"],["class","absolute p-[10px] lienzo2 rounded-lg z-[1] flex flex-col w-[200px]",4,"ngIf"],[1,"absolute","p-[10px]","lienzo2","rounded-lg","z-[1]","flex","flex-col","w-[200px]"],[1,"leading-4","hover:bg-sky-500","p-2","cursor-pointer","rounded-lg",3,"click"],["class","leading-4 hover:bg-sky-500 p-2 cursor-pointer rounded-lg",3,"click",4,"ngFor","ngForOf"]],template:function(p,o){1&p&&(n.TgZ(0,"div",0,1)(2,"div",2),n.NdJ("click",function(){return o.openDropDown=!o.openDropDown}),n.TgZ(3,"div",3),n._uU(4),n.qZA(),n.O4$(),n.TgZ(5,"svg",4),n._UZ(6,"path",5),n.qZA()(),n.YNc(7,v,4,2,"div",6),n.qZA()),2&p&&(n.xp6(2),n.Q6J("ngClass",n.VKq(3,y,o.openDropDown)),n.xp6(2),n.hij(" ",o.selectedValue||o.placeHolder," "),n.xp6(3),n.Q6J("ngIf",o.openDropDown))},dependencies:[h.mk,h.sg,h.O5],styles:[".active[_ngcontent-%COMP%], .selector[_ngcontent-%COMP%]:hover{box-shadow:inset 0 0 0 .4px var(--primary-color)}"]})}return m})()},4352:(I,F,l)=>{l.d(F,{P:()=>u,z:()=>C});var n=l(7394);class T extends n.w0{constructor(o,r){super()}schedule(o,r=0){return this}}const h={setInterval(p,o,...r){const{delegate:s}=h;return s?.setInterval?s.setInterval(p,o,...r):setInterval(p,o,...r)},clearInterval(p){const{delegate:o}=h;return(o?.clearInterval||clearInterval)(p)},delegate:void 0};var e=l(9039);const y={now:()=>(y.delegate||Date).now(),delegate:void 0};class Z{constructor(o,r=Z.now){this.schedulerActionCtor=o,this.now=r}schedule(o,r=0,s){return new this.schedulerActionCtor(this,o).schedule(s,r)}}Z.now=y.now;const C=new class m extends Z{constructor(o,r=Z.now){super(o,r),this.actions=[],this._active=!1}flush(o){const{actions:r}=this;if(this._active)return void r.push(o);let s;this._active=!0;do{if(s=o.execute(o.state,o.delay))break}while(o=r.shift());if(this._active=!1,s){for(;o=r.shift();)o.unsubscribe();throw s}}}(class v extends T{constructor(o,r){super(o,r),this.scheduler=o,this.work=r,this.pending=!1}schedule(o,r=0){var s;if(this.closed)return this;this.state=o;const x=this.id,_=this.scheduler;return null!=x&&(this.id=this.recycleAsyncId(_,x,r)),this.pending=!0,this.delay=r,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(_,this.id,r),this}requestAsyncId(o,r,s=0){return h.setInterval(o.flush.bind(o,this),s)}recycleAsyncId(o,r,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return r;null!=r&&h.clearInterval(r)}execute(o,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(o,r);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,r){let x,s=!1;try{this.work(o)}catch(_){s=!0,x=_||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),x}unsubscribe(){if(!this.closed){const{id:o,scheduler:r}=this,{actions:s}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,e.P)(s,this),null!=o&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,super.unsubscribe()}}}),u=C}}]);