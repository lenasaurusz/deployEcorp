"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[416],{416:(Ye,f,s)=>{s.r(f),s.d(f,{AuthModule:()=>Je});var p=s(6814),l=s(2895),n=s(6223),Z=s(8180),e=s(4946),c=s(9355),v=s(4567),d=s(333),g=s(9227);function h(t,o){1&t&&(e.TgZ(0,"div")(1,"p",14),e._uU(2,"*Este campo es requerido"),e.qZA()())}function T(t,o){1&t&&(e.TgZ(0,"div")(1,"p",14),e._uU(2,"*Este campo es requerido"),e.qZA()())}function F(t,o){1&t&&(e.TgZ(0,"p",15),e._uU(1," *Usuario o contrase\xf1a incorrecta "),e.qZA())}const x=function(t){return{"opacity-40 pointer-events-none":t}},q=function(){return["../register"]};let A=(()=>{class t{constructor(i,a,r,u,m){this.rutaEmpresaService=i,this.authService=a,this.fb=r,this.router=u,this.validatorsService=m,this.passwordIsVisible=!1,this.loginError=!1,this.loading=!1,this.loginForm=this.fb.group({nombre_usuario:["",[n.kI.required]],clave:["",[n.kI.required]]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}logIn(){if(this.loginForm.invalid)return void this.loginForm.markAllAsTouched();this.loading=!0,this.loginError=!1;const{nombre_usuario:i,clave:a}=this.loginForm.value;this.authService.login(this.empresa,{nombre_usuario:i,clave:a}).pipe((0,Z.q)(1)).subscribe({next:r=>{r&&(this.router.navigate(["/",this.empresa]),this.loginForm.reset(),this.loading=!1)},error:()=>{this.loginError=!0,this.loading=!1}})}isValidField(i){return this.validatorsService.isValidField(this.loginForm,i)}changePasswordVisibility(){this.passwordIsVisible=!this.passwordIsVisible}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(c.e),e.Y36(v.e),e.Y36(n.qu),e.Y36(l.F0),e.Y36(d.S))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-login-form"]],decls:27,vars:10,consts:[[1,"flex","items-center","justify-center","h-full"],[1,"login","flex","flex-col","items-center","gap-12","p-12","lienzo3","rounded-lg","md:w-[400px]",3,"formGroup","ngSubmit"],[1,"font-bold","txt-primary"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col","gap-1"],["for","nombre"],["formControlName","nombre_usuario","type","text"],[4,"ngIf"],["formControlName","clave","type","password",3,"type"],["type","checkbox",3,"change"],["class","text-red-400 text-[14px]",4,"ngIf"],["typeButton","primary",3,"ngClass"],[1,"text-center"],[1,"txt-primary","cursor-pointer",3,"routerLink"],[1,"text-red-400","text-[12px]"],[1,"text-red-400","text-[14px]"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return r.logIn()}),e.TgZ(2,"h4",2),e._uU(3,"Inicia Sesi\xf3n"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Usuario o email:"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,h,3,0,"div",7),e.qZA(),e.TgZ(10,"div",4)(11,"label"),e._uU(12,"Contrase\xf1a:"),e.qZA(),e._UZ(13,"input",8),e.YNc(14,T,3,0,"div",7),e.qZA(),e.TgZ(15,"div")(16,"label")(17,"input",9),e.NdJ("change",function(){return r.changePasswordVisibility()}),e.qZA(),e._uU(18," Mostrar contrase\xf1a "),e.qZA()(),e.YNc(19,F,2,0,"p",10),e.TgZ(20,"shared-botones",11),e._uU(21,"Iniciar Sesi\xf3n"),e.qZA(),e.TgZ(22,"div",12)(23,"p"),e._uU(24,"\xbfNo tienes una cuenta?"),e.qZA(),e.TgZ(25,"p",13),e._uU(26," Crear Cuenta "),e.qZA()()()()()),2&a&&(e.xp6(1),e.Q6J("formGroup",r.loginForm),e.xp6(8),e.Q6J("ngIf",r.isValidField("nombre_usuario")),e.xp6(4),e.Q6J("type",r.passwordIsVisible?"text":"password"),e.xp6(1),e.Q6J("ngIf",r.isValidField("clave")),e.xp6(5),e.Q6J("ngIf",r.loginError),e.xp6(1),e.Q6J("ngClass",e.VKq(7,x,r.loading)),e.xp6(5),e.Q6J("routerLink",e.DdM(9,q)))},dependencies:[p.mk,p.O5,l.rH,g.x,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:[".login[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--primary-color),0 0 20px 0 var(--primary-color)}"]})}return t})();var b=s(5065),C=s(9862);let _=(()=>{class t{get nombre_usuario(){return this._nombre_usuario}set nombre_usuario(i){this._nombre_usuario=i}get clave(){return this._clave}set clave(i){this._clave=i}get publicidad(){return this._publicidad}set publicidad(i){this._publicidad=i}constructor(i){this.http=i,this._nombre_usuario="",this._clave="",this._publicidad=!1,this.URL=b.T.baseUrl}register(i,a){return this.http.post(`${this.URL}/usuario/${i}`,a)}static#e=this.\u0275fac=function(a){return new(a||t)(e.LFG(C.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function U(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido. "),e.qZA())}function I(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," El nombre debe tener al menos 5 caracteres. "),e.qZA())}function N(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," El nombre no puede tener m\xe1s de 20 caracteres. "),e.qZA())}function J(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," El nombre ya esta registrado "),e.qZA())}function y(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,U,2,0,"p",18),e.YNc(2,I,2,0,"p",18),e.YNc(3,N,2,0,"p",18),e.YNc(4,J,2,0,"p",18),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i),e.xp6(1),e.Q6J("ngIf","minlength"===i),e.xp6(1),e.Q6J("ngIf","maxlength"===i),e.xp6(1),e.Q6J("ngIf","nickNameNoUnico"===i)}}function Y(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido "),e.qZA())}function E(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Minimo 5 caracteres "),e.qZA())}function Q(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un n\xfamero "),e.qZA())}function S(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Debe tener una letra "),e.qZA())}function D(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un caracter especial "),e.qZA())}function P(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"p",18),e.YNc(2,E,2,0,"p",18),e.YNc(3,Q,2,0,"p",18),e.YNc(4,S,2,0,"p",18),e.YNc(5,D,2,0,"p",18),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i),e.xp6(1),e.Q6J("ngIf","minLength"===i),e.xp6(1),e.Q6J("ngIf","missingNumber"===i),e.xp6(1),e.Q6J("ngIf","missingLetter"===i),e.xp6(1),e.Q6J("ngIf","missingSpecialChar"===i)}}function R(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido "),e.qZA())}function V(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Minimo 5 caracteres "),e.qZA())}function L(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un n\xfamero "),e.qZA())}function k(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Debe tener una letra "),e.qZA())}function M(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un caracter especial "),e.qZA())}function O(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Las contrase\xf1as no coinciden "),e.qZA())}function j(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,R,2,0,"p",18),e.YNc(2,V,2,0,"p",18),e.YNc(3,L,2,0,"p",18),e.YNc(4,k,2,0,"p",18),e.YNc(5,M,2,0,"p",18),e.YNc(6,O,2,0,"p",18),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i),e.xp6(1),e.Q6J("ngIf","minLength"===i),e.xp6(1),e.Q6J("ngIf","missingNumber"===i),e.xp6(1),e.Q6J("ngIf","missingLetter"===i),e.xp6(1),e.Q6J("ngIf","missingSpecialChar"===i),e.xp6(1),e.Q6J("ngIf","notEqual"===i)}}function w(t,o){1&t&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido "),e.qZA())}function B(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,w,2,0,"p",18),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i)}}const G=function(){return["../../terminos"]},z=function(){return["../../politicas"]},$=function(){return["../login"]};let H=(()=>{class t{constructor(i,a,r,u,m){this.rutaEmpresaService=i,this.fb=a,this.registerService=r,this.router=u,this.validatorsService=m,this.registerForm=this.fb.group({nombre_usuario:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(20)],[this.validatorsService.nickNameValidator()]],clave:["",[n.kI.required,this.validatorsService.passwordValidator()]],claveRep:["",[n.kI.required,this.validatorsService.passwordValidator()]],publicidad:[!1,[n.kI.requiredTrue]]},{validators:[this.validatorsService.isFieldOneEqualFieldTwo("clave","claveRep")]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}isValidField(i){return this.validatorsService.isValidField(this.registerForm,i)}submitRegistro(){if(this.registerForm.invalid)return void this.registerForm.markAllAsTouched();const{nombre_usuario:i,clave:a,publicidad:r}=this.registerForm.value;this.registerService.nombre_usuario=i,this.registerService.clave=a,this.registerService.publicidad=r,this.router.navigate(["/",this.empresa,"auth","datos"])}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(c.e),e.Y36(n.qu),e.Y36(_),e.Y36(l.F0),e.Y36(d.S))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-register-form"]],decls:39,vars:11,consts:[[1,"flex","items-center","justify-center","h-full"],[1,"login","flex","flex-col","items-center","gap-12","p-12","lienzo3","rounded","md:w-[400px]",3,"formGroup","ngSubmit"],[1,"font-bold","txt=primary"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col","gap-1"],["for","nombre_usuario"],["formControlName","nombre_usuario","type","text","id","nombre_usuario"],[4,"ngIf"],["for","clave"],["type","password","id","clave","formControlName","clave"],["for","claveRep"],["type","password","id","claveRep","formControlName","claveRep"],["for","publicidad",1,"flex","gap-5"],["type","checkbox","name","publicidad","formControlName","publicidad"],["target","_blank",1,"txt-primary","cursor-pointer",3,"routerLink"],["type","submit","typeButton","primary"],[1,"text-center"],[1,"txt-primary","cursor-pointer",3,"routerLink"],["class","text-red-400 text-[12px]",4,"ngIf"],[1,"text-red-400","text-[12px]"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return r.submitRegistro()}),e.TgZ(2,"h4",2),e._uU(3,"Registrarse"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Usuario:"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,y,5,4,"div",7),e.qZA(),e.TgZ(10,"div",4)(11,"label",8),e._uU(12,"Contrase\xf1a:"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,P,6,5,"div",7),e.qZA(),e.TgZ(15,"div",4)(16,"label",10),e._uU(17,"Confirmar Contrase\xf1a:"),e.qZA(),e._UZ(18,"input",11),e.YNc(19,j,7,6,"div",7),e.qZA(),e.TgZ(20,"div")(21,"label",12),e._UZ(22,"input",13),e.TgZ(23,"span"),e._uU(24," He le\xeddo y acepto los "),e.TgZ(25,"a",14),e._uU(26," t\xe9rminos "),e.qZA(),e._uU(27," y condiciones y las "),e.TgZ(28,"a",14),e._uU(29," pol\xedticas "),e.qZA(),e._uU(30," de la empresa "),e.qZA()(),e.YNc(31,B,2,1,"div",7),e.qZA(),e.TgZ(32,"shared-botones",15),e._uU(33,"Crear Cuenta"),e.qZA(),e.TgZ(34,"div",16)(35,"p"),e._uU(36,"\xbfYa tienes cuenta?"),e.qZA(),e.TgZ(37,"p",17),e._uU(38," Iniciar Sesi\xf3n "),e.qZA()()()()()),2&a&&(e.xp6(1),e.Q6J("formGroup",r.registerForm),e.xp6(8),e.Q6J("ngIf",r.isValidField("nombre_usuario")),e.xp6(5),e.Q6J("ngIf",r.isValidField("clave")),e.xp6(5),e.Q6J("ngIf",r.isValidField("claveRep")),e.xp6(6),e.Q6J("routerLink",e.DdM(8,G)),e.xp6(3),e.Q6J("routerLink",e.DdM(9,z)),e.xp6(3),e.Q6J("ngIf",r.isValidField("publicidad")),e.xp6(6),e.Q6J("routerLink",e.DdM(10,$)))},dependencies:[p.O5,l.rH,g.x,n._Y,n.Fj,n.Wl,n.JJ,n.JL,n.sg,n.u],styles:[".login[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--primary-color),0 0 20px 0 var(--primary-color)}"]})}return t})(),X=(()=>{class t{constructor(i){this.rutaEmpresaService=i}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(c.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-logo"]],decls:4,vars:2,consts:[[1,"relative","flex","justify-center","items-center","h-full"],["alt","",3,"src"],[1,"absolute","w-full","left-0","top-0","-z-50"],["alt","",1,"object-cover","w-full","h-screen","grayscale",3,"src"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("src","assets/"+r.empresa+".png",e.LSH),e.xp6(2),e.Q6J("src","assets/auth.jpg",e.LSH))}})}return t})(),K=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-layout"]],decls:4,vars:0,consts:[[1,"grid","lg:grid-cols-3","h-full"],[1,"hidden","lg:block"],[1,"h-full","col-span-2","p-3","lg:m-0"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"auth-logo",1),e.TgZ(2,"div",2),e._UZ(3,"router-outlet"),e.qZA()())},dependencies:[l.lC,X]})}return t})();var W=s(7394);function ee(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function te(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function ie(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function oe(t,o){if(1&t&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.value," ")}}function re(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function ne(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," *Este campo es requerido "),e.qZA())}function ae(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," *Este documento ya esta registrado "),e.qZA())}function se(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,ne,2,0,"p",39),e.YNc(2,ae,2,0,"p",39),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i),e.xp6(1),e.Q6J("ngIf","documentNoUnico"===i)}}function le(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," *Este campo es requerido "),e.qZA())}function ue(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," *Debe ser ejemplo@dominio.com "),e.qZA())}function pe(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," *Este correo ya esta registrado "),e.qZA())}function ce(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,le,2,0,"p",39),e.YNc(2,ue,2,0,"p",39),e.YNc(3,pe,2,0,"p",39),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i),e.xp6(1),e.Q6J("ngIf","pattern"===i),e.xp6(1),e.Q6J("ngIf","mailNoUnico"===i)}}function me(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function de(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," *Este campo es requerido "),e.qZA())}function ge(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," El n\xfamero debe tener al menos 8 caracteres. "),e.qZA())}function _e(t,o){1&t&&(e.TgZ(0,"p",37),e._uU(1," El n\xfamero no puede tener m\xe1s de 30 caracteres. "),e.qZA())}function fe(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,de,2,0,"p",39),e.YNc(2,ge,2,0,"p",39),e.YNc(3,_e,2,0,"p",39),e.qZA()),2&t){const i=o.ngIf;e.xp6(1),e.Q6J("ngIf","required"===i),e.xp6(1),e.Q6J("ngIf","minlength"===i),e.xp6(1),e.Q6J("ngIf","maxlength"===i)}}function ve(t,o){if(1&t&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.value," ")}}function Ze(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function he(t,o){if(1&t&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.value," ")}}function Te(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function Fe(t,o){if(1&t&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.value," ")}}function xe(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function qe(t,o){if(1&t&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.value," ")}}function Ae(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function be(t,o){if(1&t&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&t){const i=o.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.value," ")}}function Ce(t,o){1&t&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}const Ue=[{path:"",component:K,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:A},{path:"register",component:H},{path:"datos",component:(()=>{class t{constructor(i,a,r,u,m,ye){this.rutaEmpresaService=i,this.fb=a,this.registerService=r,this.authService=u,this.router=m,this.validatorsService=ye,this._tipo=new W.w0,this.documentos=[{value:"DNI"},{value:"Pasaporte"},{value:"Carnet de extranjeria"},{value:"Otro"}],this.paises=[{value:"Argentina"},{value:"Bolivia"},{value:"Brasil"},{value:"Chile"},{value:"Colombia"},{value:"Ecuador"},{value:"Guyana"},{value:"Per\xfa"},{value:"Surinam"},{value:"Uruguay"},{value:"Venezuela"},{value:"Bahamas"},{value:"Barbados"},{value:"Canad\xe1"},{value:"Costa Rica"},{value:"Cuba"},{value:"Dominica"},{value:"Granda"},{value:"Jamaica"},{value:"Estados Unidos"},{value:"M\xe9xico"},{value:"Panam\xe1"},{value:"Rep\xfablica Dominicana"},{value:"Trinidad y Tobago"}],this.gradosAcademicos=[{value:"Estudiante"},{value:"Bachiller"},{value:"Licenciatura"},{value:"Ingeniero"},{value:"Magister"},{value:"Doctorado"}],this.generos=[{value:"Masculino"},{value:"Femenino"},{value:"Binario"},{value:"Otro"},{value:"Prefiero no decirlo"}],this.ocupaciones=[{value:"Estudiante"},{value:"Profesor"}],this.carreras=[{value:"Arquitectura"},{value:"Ingenier\xeda Ambiental"},{value:"Ingenier\xeda Civil"},{value:"Ingenier\xeda Industrial"},{value:"Ingenier\xeda Mec\xe1nica"},{value:"Ingenier\xeda de Minas"},{value:"Ingenier\xeda Empresarial"},{value:"Ingenier\xeda Mecatr\xf3nica"},{value:"Ingenier\xeda de Sistemas e Inform\xe1tica"},{value:"Administraci\xf3n"},{value:"Administraci\xf3n y Finanzas"},{value:"Administraci\xf3n y Marketing"},{value:"Administraci\xf3n y Negocios Internacionales"},{value:"Administraci\xf3n y Recursos Humanos"},{value:"Contabilidad"},{value:"Econom\xeda"},{value:"Medicina Humana"},{value:"Enfermer\xeda"},{value:"Odontolog\xeda"},{value:"Tecnolog\xeda M\xe9dica"},{value:"Psicolog\xeda"},{value:"Ciencias y Tecnolog\xedas de la Comunicaci\xf3n"},{value:"Derecho"}],this.datosForm=this.fb.group({primer_nombre:["",[n.kI.required]],segundo_nombre:[""],apellido_paterno:["",[n.kI.required]],apellido_materno:["",[n.kI.required]],tipo_carnet:["",[n.kI.required]],carnet_identidad:["",n.kI.required,this.validatorsService.documentValidator("tipo_carnet","carnet_identidad")],correo:["",[n.kI.required,n.kI.pattern(this.validatorsService.emailPattern)],[this.validatorsService.mailValidator()]],fecha_nacimiento:["",[n.kI.required]],telefono:["",[n.kI.required,n.kI.minLength(8),n.kI.maxLength(30)]],pais:["",n.kI.required],genero:["",n.kI.required],grado_estudio:["",n.kI.required],carrera:["",n.kI.required],grado_ocupacion:["",n.kI.required]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa();const i=this.datosForm.get("tipo_carnet");null!==i&&(this._tipo=i.valueChanges.subscribe(()=>{this.datosForm.get("carnet_identidad")?.updateValueAndValidity()}))}ngOnDestroy(){this._tipo.unsubscribe()}isValidField(i){return this.validatorsService.isValidField(this.datosForm,i)}onSubmit(){if(this.datosForm.invalid)return void this.datosForm.markAllAsTouched();const i={clave:this.registerService.clave,nombre_usuario:this.registerService.nombre_usuario,publicidad:this.registerService.publicidad,...this.datosForm.value};this.registerService.register(this.empresa,i).subscribe(()=>{this.router.navigate(["/",this.empresa,"auth","login"]),alert("CUENTA CREADA EXITOSAMENTE")})}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(c.e),e.Y36(n.qu),e.Y36(_),e.Y36(v.e),e.Y36(l.F0),e.Y36(d.S))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-datos-personales-form"]],decls:86,vars:20,consts:[[1,"h-full","flex","items-center"],[1,"login","flex","flex-col","gap-12","p-12","w-full","lienzo3","rounded-lg",3,"formGroup","ngSubmit"],[1,"txt-primary","font-bold"],[1,"grid","md:grid-cols-2","gap-5"],[1,"flex","flex-col","gap-1"],["for","primer_nombre"],["formControlName","primer_nombre","id","primer_nombre","type","text"],[4,"ngIf"],["for","segundo_nombre"],["formControlName","segundo_nombre","id","segundo_nombre","type","text"],["for","apellido_paterno"],["formControlName","apellido_paterno","id","apellido_paterno","type","text"],["for","apellido_materno"],["formControlName","apellido_materno","id","apellido_materno","type","text"],["for","tipo_carnet"],["formControlName","tipo_carnet","id","tipo_carnet"],[3,"value",4,"ngFor","ngForOf"],["for","carnet_identidad"],["formControlName","carnet_identidad","type","text","id","carnet_identidad"],["for","correo"],["formControlName","correo","type","text","id","correo"],["for","fecha_nacimiento"],["formControlName","fecha_nacimiento","type","date","id","fecha_nacimiento"],["for","telefono"],["formControlName","telefono","id","telefono","type","text"],["for","pais"],["formControlName","pais","id","pais"],["for","genero"],["formControlName","genero","id","genero"],["for","grado_estudio"],["formControlName","grado_estudio","id","grado_estudio"],["for","carrera"],["formControlName","carrera","id","carrera"],["for","grado_ocupacion"],["formControlName","grado_ocupacion","id","grado_ocupacion"],[1,"md:col-span-2","flex","justify-center"],["typeButton","primary","type","submit"],[1,"text-red-400","text-[12px]"],[3,"value"],["class","text-red-400 text-[12px]",4,"ngIf"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(2,"div")(3,"h4",2),e._uU(4,"Completa tu perfil"),e.qZA(),e.TgZ(5,"p"),e._uU(6," \xa1Gracias por unirte a nuestra comunidad! Ay\xfadanos a conocerte mejor. "),e.qZA()(),e.TgZ(7,"div",3)(8,"div",4)(9,"label",5),e._uU(10,"Primer nombre:"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,ee,3,0,"div",7),e.qZA(),e.TgZ(13,"div",4)(14,"label",8),e._uU(15,"Segundo nombre:"),e.qZA(),e._UZ(16,"input",9),e.qZA(),e.TgZ(17,"div",4)(18,"label",10),e._uU(19,"Apellido paterno:"),e.qZA(),e._UZ(20,"input",11),e.YNc(21,te,3,0,"div",7),e.qZA(),e.TgZ(22,"div",4)(23,"label",12),e._uU(24,"Apellido materno:"),e.qZA(),e._UZ(25,"input",13),e.YNc(26,ie,3,0,"div",7),e.qZA(),e.TgZ(27,"div",4)(28,"label",14),e._uU(29,"Tipo de documento:"),e.qZA(),e.TgZ(30,"select",15),e.YNc(31,oe,2,2,"option",16),e.qZA(),e.YNc(32,re,3,0,"div",7),e.qZA(),e.TgZ(33,"div",4)(34,"label",17),e._uU(35,"N\xfamero de documento:"),e.qZA(),e._UZ(36,"input",18),e.YNc(37,se,3,2,"div",7),e.qZA(),e.TgZ(38,"div",4)(39,"label",19),e._uU(40,"Correo"),e.qZA(),e._UZ(41,"input",20),e.YNc(42,ce,4,3,"div",7),e.qZA(),e.TgZ(43,"div",4)(44,"label",21),e._uU(45,"Fecha de nacimiento:"),e.qZA(),e._UZ(46,"input",22),e.YNc(47,me,3,0,"div",7),e.qZA(),e.TgZ(48,"div",4)(49,"label",23),e._uU(50,"Telefono:"),e.qZA(),e._UZ(51,"input",24),e.YNc(52,fe,4,3,"div",7),e.qZA(),e.TgZ(53,"div",4)(54,"label",25),e._uU(55,"Pais de residencia:"),e.qZA(),e.TgZ(56,"select",26),e.YNc(57,ve,2,2,"option",16),e.qZA(),e.YNc(58,Ze,3,0,"div",7),e.qZA(),e.TgZ(59,"div",4)(60,"label",27),e._uU(61,"G\xe9nero:"),e.qZA(),e.TgZ(62,"select",28),e.YNc(63,he,2,2,"option",16),e.qZA(),e.YNc(64,Te,3,0,"div",7),e.qZA(),e.TgZ(65,"div",4)(66,"label",29),e._uU(67,"Grado de estudio:"),e.qZA(),e.TgZ(68,"select",30),e.YNc(69,Fe,2,2,"option",16),e.qZA(),e.YNc(70,xe,3,0,"div",7),e.qZA(),e.TgZ(71,"div",4)(72,"label",31),e._uU(73,"Carrera:"),e.qZA(),e.TgZ(74,"select",32),e.YNc(75,qe,2,2,"option",16),e.qZA(),e.YNc(76,Ae,3,0,"div",7),e.qZA(),e.TgZ(77,"div",4)(78,"label",33),e._uU(79,"Ocupaci\xf3n:"),e.qZA(),e.TgZ(80,"select",34),e.YNc(81,be,2,2,"option",16),e.qZA(),e.YNc(82,Ce,3,0,"div",7),e.qZA(),e.TgZ(83,"div",35)(84,"shared-botones",36),e._uU(85," Guardar "),e.qZA()()()()()),2&a&&(e.xp6(1),e.Q6J("formGroup",r.datosForm),e.xp6(11),e.Q6J("ngIf",r.isValidField("primer_nombre")),e.xp6(9),e.Q6J("ngIf",r.isValidField("apellido_paterno")),e.xp6(5),e.Q6J("ngIf",r.isValidField("apellido_materno")),e.xp6(5),e.Q6J("ngForOf",r.documentos),e.xp6(1),e.Q6J("ngIf",r.isValidField("tipo_carnet")),e.xp6(5),e.Q6J("ngIf",r.isValidField("carnet_identidad")),e.xp6(5),e.Q6J("ngIf",r.isValidField("correo")),e.xp6(5),e.Q6J("ngIf",r.isValidField("fecha_nacimiento")),e.xp6(5),e.Q6J("ngIf",r.isValidField("telefono")),e.xp6(5),e.Q6J("ngForOf",r.paises),e.xp6(1),e.Q6J("ngIf",r.isValidField("pais")),e.xp6(5),e.Q6J("ngForOf",r.generos),e.xp6(1),e.Q6J("ngIf",r.isValidField("genero")),e.xp6(5),e.Q6J("ngForOf",r.gradosAcademicos),e.xp6(1),e.Q6J("ngIf",r.isValidField("grado_estudio")),e.xp6(5),e.Q6J("ngForOf",r.carreras),e.xp6(1),e.Q6J("ngIf",r.isValidField("carrera")),e.xp6(5),e.Q6J("ngForOf",r.ocupaciones),e.xp6(1),e.Q6J("ngIf",r.isValidField("grado_ocupacion")))},dependencies:[p.sg,p.O5,g.x,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".select-registro[_ngcontent-%COMP%]{background-color:var(--lienzo);transition:all ease-in .3s}"]})}return t})(),canActivate:[()=>{const t=(0,e.f3M)(_),o=(0,e.f3M)(l.F0),a=(0,e.f3M)(c.e).getEmpresa();return!!(t.nombre_usuario&&t.clave&&t.publicidad)||(o.navigate(["./",a,"auth","register"]),!1)}]}]}];let Ie=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(Ue),l.Bz]})}return t})();var Ne=s(6208);let Je=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[p.ez,Ie,Ne.m,n.UX]})}return t})()}}]);