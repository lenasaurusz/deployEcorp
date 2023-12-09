"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[416],{416:(Ne,f,s)=>{s.r(f),s.d(f,{AuthModule:()=>Ie});var p=s(6814),l=s(2895),n=s(6223),Z=s(8180),e=s(4946),c=s(9355),v=s(4567),d=s(333),g=s(9227);function h(i,t){1&i&&(e.TgZ(0,"div")(1,"p",14),e._uU(2,"*Este campo es requerido"),e.qZA()())}function T(i,t){1&i&&(e.TgZ(0,"div")(1,"p",14),e._uU(2,"*Este campo es requerido"),e.qZA()())}function F(i,t){1&i&&(e.TgZ(0,"p",15),e._uU(1," *Usuario o contrase\xf1a incorrecta "),e.qZA())}const q=function(i){return{"opacity-40 pointer-events-none":i}},x=function(){return["../register"]};let A=(()=>{class i{constructor(o,a,r,u,m){this.rutaEmpresaService=o,this.authService=a,this.fb=r,this.router=u,this.validatorsService=m,this.passwordIsVisible=!1,this.loginError=!1,this.loading=!1,this.loginForm=this.fb.group({nombre_usuario:["",[n.kI.required]],clave:["",[n.kI.required]]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}logIn(){if(this.loading=!0,this.loginError=!1,this.loginForm.invalid)return void this.loginForm.markAllAsTouched();const{nombre_usuario:o,clave:a}=this.loginForm.value;this.authService.login(this.empresa,{nombre_usuario:o,clave:a}).pipe((0,Z.q)(1)).subscribe({next:r=>{r&&(this.router.navigate(["/",this.empresa]),this.loginForm.reset(),this.loading=!1)},error:()=>{this.loginError=!0,this.loading=!1}})}isValidField(o){return this.validatorsService.isValidField(this.loginForm,o)}changePasswordVisibility(){this.passwordIsVisible=!this.passwordIsVisible}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(c.e),e.Y36(v.e),e.Y36(n.qu),e.Y36(l.F0),e.Y36(d.S))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["auth-login-form"]],decls:27,vars:10,consts:[[1,"flex","items-center","justify-center","h-full"],[1,"login","flex","flex-col","items-center","gap-12","p-12","lienzo3","rounded-lg","md:w-[400px]",3,"formGroup","ngSubmit"],[1,"font-bold","txt-primary"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col","gap-1"],["for","nombre"],["formControlName","nombre_usuario","type","text"],[4,"ngIf"],["formControlName","clave","type","password",3,"type"],["type","checkbox",3,"change"],["class","text-red-400 text-[14px]",4,"ngIf"],["typeButton","primary",3,"ngClass"],[1,"text-center"],[1,"txt-primary","cursor-pointer",3,"routerLink"],[1,"text-red-400","text-[12px]"],[1,"text-red-400","text-[14px]"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return r.logIn()}),e.TgZ(2,"h4",2),e._uU(3,"Inicia Sesi\xf3n"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Nombres:"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,h,3,0,"div",7),e.qZA(),e.TgZ(10,"div",4)(11,"label"),e._uU(12,"Contrase\xf1a:"),e.qZA(),e._UZ(13,"input",8),e.YNc(14,T,3,0,"div",7),e.qZA(),e.TgZ(15,"div")(16,"label")(17,"input",9),e.NdJ("change",function(){return r.changePasswordVisibility()}),e.qZA(),e._uU(18," Mostrar contrase\xf1a "),e.qZA()(),e.YNc(19,F,2,0,"p",10),e.TgZ(20,"shared-botones",11),e._uU(21,"Iniciar Sesi\xf3n"),e.qZA(),e.TgZ(22,"div",12)(23,"p"),e._uU(24,"\xbfNo tienes cuenta?"),e.qZA(),e.TgZ(25,"p",13),e._uU(26," Crear Cuenta "),e.qZA()()()()()),2&a&&(e.xp6(1),e.Q6J("formGroup",r.loginForm),e.xp6(8),e.Q6J("ngIf",r.isValidField("nombre_usuario")),e.xp6(4),e.Q6J("type",r.passwordIsVisible?"text":"password"),e.xp6(1),e.Q6J("ngIf",r.isValidField("clave")),e.xp6(5),e.Q6J("ngIf",r.loginError),e.xp6(1),e.Q6J("ngClass",e.VKq(7,q,r.loading)),e.xp6(5),e.Q6J("routerLink",e.DdM(9,x)))},dependencies:[p.mk,p.O5,l.rH,g.x,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:[".login[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--primary-color),0 0 20px 0 var(--primary-color)}"]})}return i})();var b=s(5065),C=s(9862);let _=(()=>{class i{get nombre_usuario(){return this._nombre_usuario}set nombre_usuario(o){this._nombre_usuario=o}get clave(){return this._clave}set clave(o){this._clave=o}get publicidad(){return this._publicidad}set publicidad(o){this._publicidad=o}constructor(o){this.http=o,this._nombre_usuario="",this._clave="",this._publicidad=!1,this.URL=b.T.baseUrl}register(o,a){return this.http.post(`${this.URL}/usuario/${o}`,a)}static#e=this.\u0275fac=function(a){return new(a||i)(e.LFG(C.eN))};static#i=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function I(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido. "),e.qZA())}function U(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," El nombre debe tener al menos 5 caracteres. "),e.qZA())}function N(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," El nombre no puede tener m\xe1s de 20 caracteres. "),e.qZA())}function J(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," El nombre ya esta registrado "),e.qZA())}function y(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,I,2,0,"p",18),e.YNc(2,U,2,0,"p",18),e.YNc(3,N,2,0,"p",18),e.YNc(4,J,2,0,"p",18),e.qZA()),2&i){const o=t.ngIf;e.xp6(1),e.Q6J("ngIf","required"===o),e.xp6(1),e.Q6J("ngIf","minlength"===o),e.xp6(1),e.Q6J("ngIf","maxlength"===o),e.xp6(1),e.Q6J("ngIf","nickNameNoUnico"===o)}}function Y(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido "),e.qZA())}function E(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Minimo 5 caracteres "),e.qZA())}function Q(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un n\xfamero "),e.qZA())}function S(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Debe tener una letra "),e.qZA())}function D(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un caracter especial "),e.qZA())}function P(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"p",18),e.YNc(2,E,2,0,"p",18),e.YNc(3,Q,2,0,"p",18),e.YNc(4,S,2,0,"p",18),e.YNc(5,D,2,0,"p",18),e.qZA()),2&i){const o=t.ngIf;e.xp6(1),e.Q6J("ngIf","required"===o),e.xp6(1),e.Q6J("ngIf","minLength"===o),e.xp6(1),e.Q6J("ngIf","missingNumber"===o),e.xp6(1),e.Q6J("ngIf","missingLetter"===o),e.xp6(1),e.Q6J("ngIf","missingSpecialChar"===o)}}function R(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido "),e.qZA())}function k(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Minimo 5 caracteres "),e.qZA())}function L(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un n\xfamero "),e.qZA())}function V(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Debe tener una letra "),e.qZA())}function M(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Debe tener un caracter especial "),e.qZA())}function O(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Las contrase\xf1as no coinciden "),e.qZA())}function j(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,R,2,0,"p",18),e.YNc(2,k,2,0,"p",18),e.YNc(3,L,2,0,"p",18),e.YNc(4,V,2,0,"p",18),e.YNc(5,M,2,0,"p",18),e.YNc(6,O,2,0,"p",18),e.qZA()),2&i){const o=t.ngIf;e.xp6(1),e.Q6J("ngIf","required"===o),e.xp6(1),e.Q6J("ngIf","minLength"===o),e.xp6(1),e.Q6J("ngIf","missingNumber"===o),e.xp6(1),e.Q6J("ngIf","missingLetter"===o),e.xp6(1),e.Q6J("ngIf","missingSpecialChar"===o),e.xp6(1),e.Q6J("ngIf","notEqual"===o)}}function w(i,t){1&i&&(e.TgZ(0,"p",19),e._uU(1," Este campo es requerido "),e.qZA())}function B(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,w,2,0,"p",18),e.qZA()),2&i){const o=t.ngIf;e.xp6(1),e.Q6J("ngIf","required"===o)}}const G=function(){return["../../terminos"]},z=function(){return["../../politicas"]},$=function(){return["../login"]};let H=(()=>{class i{constructor(o,a,r,u,m){this.rutaEmpresaService=o,this.fb=a,this.registerService=r,this.router=u,this.validatorsService=m,this.registerForm=this.fb.group({nombre_usuario:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(20)],[this.validatorsService.nickNameValidator(this.empresa)]],clave:["",[n.kI.required,n.kI.minLength(5),this.validatorsService.passwordValidator()]],claveRep:["",[n.kI.required,this.validatorsService.passwordValidator()]],publicidad:[!1,[n.kI.requiredTrue]]},{validators:[this.validatorsService.isFieldOneEqualFieldTwo("clave","claveRep")]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}isValidField(o){return this.validatorsService.isValidField(this.registerForm,o)}submitRegistro(){if(this.registerForm.invalid)return void this.registerForm.markAllAsTouched();const{nombre_usuario:o,clave:a,publicidad:r}=this.registerForm.value;this.registerService.nombre_usuario=o,this.registerService.clave=a,this.registerService.publicidad=r,this.router.navigate(["/",this.empresa,"auth","datos"])}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(c.e),e.Y36(n.qu),e.Y36(_),e.Y36(l.F0),e.Y36(d.S))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["auth-register-form"]],decls:39,vars:11,consts:[[1,"flex","items-center","justify-center","h-full"],[1,"login","flex","flex-col","items-center","gap-12","p-12","lienzo3","rounded","md:w-[400px]",3,"formGroup"],[1,"font-bold","txt=primary"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col","gap-1"],["for","nombre_usuario"],["formControlName","nombre_usuario","type","text","id","nombre_usuario"],[4,"ngIf"],["for","clave"],["type","password","id","clave","formControlName","clave"],["for","claveRep"],["type","password","id","claveRep","formControlName","claveRep"],["for","publicidad",1,"flex","gap-5"],["type","checkbox","name","publicidad","formControlName","publicidad"],["target","_blank",1,"txt-primary","cursor-pointer",3,"routerLink"],["typeButton","primary",3,"click"],[1,"text-center"],[1,"txt-primary","cursor-pointer",3,"routerLink"],["class","text-red-400 text-[12px]",4,"ngIf"],[1,"text-red-400","text-[12px]"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Registrarse"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Usuario:"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,y,5,4,"div",7),e.qZA(),e.TgZ(10,"div",4)(11,"label",8),e._uU(12,"Contrase\xf1a:"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,P,6,5,"div",7),e.qZA(),e.TgZ(15,"div",4)(16,"label",10),e._uU(17,"Confirmar Contrase\xf1a:"),e.qZA(),e._UZ(18,"input",11),e.YNc(19,j,7,6,"div",7),e.qZA(),e.TgZ(20,"div")(21,"label",12),e._UZ(22,"input",13),e.TgZ(23,"span"),e._uU(24," He le\xeddo y acepto los "),e.TgZ(25,"a",14),e._uU(26," t\xe9rminos "),e.qZA(),e._uU(27," y condiciones y las "),e.TgZ(28,"a",14),e._uU(29," pol\xedticas "),e.qZA(),e._uU(30," de la empresa "),e.qZA()(),e.YNc(31,B,2,1,"div",7),e.qZA(),e.TgZ(32,"shared-botones",15),e.NdJ("click",function(){return r.submitRegistro()}),e._uU(33,"Crear Cuenta"),e.qZA(),e.TgZ(34,"div",16)(35,"p"),e._uU(36,"\xbfYa tienes cuenta?"),e.qZA(),e.TgZ(37,"p",17),e._uU(38," Iniciar Sesi\xf3n "),e.qZA()()()()()),2&a&&(e.xp6(1),e.Q6J("formGroup",r.registerForm),e.xp6(8),e.Q6J("ngIf",r.isValidField("nombre_usuario")),e.xp6(5),e.Q6J("ngIf",r.isValidField("clave")),e.xp6(5),e.Q6J("ngIf",r.isValidField("claveRep")),e.xp6(6),e.Q6J("routerLink",e.DdM(8,G)),e.xp6(3),e.Q6J("routerLink",e.DdM(9,z)),e.xp6(3),e.Q6J("ngIf",r.isValidField("publicidad")),e.xp6(6),e.Q6J("routerLink",e.DdM(10,$)))},dependencies:[p.O5,l.rH,g.x,n._Y,n.Fj,n.Wl,n.JJ,n.JL,n.sg,n.u],styles:[".login[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--primary-color),0 0 20px 0 var(--primary-color)}"]})}return i})(),X=(()=>{class i{constructor(o){this.rutaEmpresaService=o}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(c.e))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["auth-logo"]],decls:4,vars:2,consts:[[1,"relative","flex","justify-center","items-center","h-full"],["alt","",3,"src"],[1,"absolute","w-full","left-0","top-0","-z-50"],["alt","",1,"object-cover","w-full","h-screen","grayscale",3,"src"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("src","assets/"+r.empresa+".png",e.LSH),e.xp6(2),e.Q6J("src","assets/auth.jpg",e.LSH))}})}return i})();function W(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function ee(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function ie(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function oe(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function te(i,t){if(1&i&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function re(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function ne(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function ae(i,t){1&i&&(e.TgZ(0,"p",37),e._uU(1," *Este campo es requerido "),e.qZA())}function se(i,t){1&i&&(e.TgZ(0,"p",37),e._uU(1," *Debe ser ejemplo@dominio.com "),e.qZA())}function le(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,ae,2,0,"p",39),e.YNc(2,se,2,0,"p",39),e.qZA()),2&i){const o=t.ngIf;e.xp6(1),e.Q6J("ngIf","required"===o),e.xp6(1),e.Q6J("ngIf","pattern"===o)}}function ue(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function pe(i,t){1&i&&(e.TgZ(0,"p",37),e._uU(1," *Este campo es requerido "),e.qZA())}function ce(i,t){1&i&&(e.TgZ(0,"p",37),e._uU(1," El n\xfamero debe tener al menos 8 caracteres. "),e.qZA())}function me(i,t){1&i&&(e.TgZ(0,"p",37),e._uU(1," El n\xfamero no puede tener m\xe1s de 30 caracteres. "),e.qZA())}function de(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,pe,2,0,"p",39),e.YNc(2,ce,2,0,"p",39),e.YNc(3,me,2,0,"p",39),e.qZA()),2&i){const o=t.ngIf;e.xp6(1),e.Q6J("ngIf","required"===o),e.xp6(1),e.Q6J("ngIf","minlength"===o),e.xp6(1),e.Q6J("ngIf","maxlength"===o)}}function ge(i,t){if(1&i&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function _e(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function fe(i,t){if(1&i&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function ve(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function Ze(i,t){if(1&i&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function he(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function Te(i,t){if(1&i&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function Fe(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}function qe(i,t){if(1&i&&(e.TgZ(0,"option",38),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function xe(i,t){1&i&&(e.TgZ(0,"div")(1,"p",37),e._uU(2,"*Este campo es requerido"),e.qZA()())}const Ae=[{path:"",component:(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["auth-layout"]],decls:4,vars:0,consts:[[1,"grid","lg:grid-cols-3","h-full"],[1,"hidden","lg:block"],[1,"h-full","col-span-2","p-3","lg:m-0"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"auth-logo",1),e.TgZ(2,"div",2),e._UZ(3,"router-outlet"),e.qZA()())},dependencies:[l.lC,X]})}return i})(),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:A},{path:"register",component:H},{path:"datos",component:(()=>{class i{constructor(o,a,r,u,m,Ue){this.rutaEmpresaService=o,this.fb=a,this.registerService=r,this.authService=u,this.router=m,this.validatorsService=Ue,this.documentos=[{value:"DNI"},{value:"Pasaporte"},{value:"Carnet de extranjer\xeda"},{value:"C\xe9dula de identidad"},{value:"CURP"},{value:"Otro"}],this.paises=[{value:"Argentina"},{value:"Bolivia"},{value:"Brasil"},{value:"Chile"},{value:"Colombia"},{value:"Ecuador"},{value:"Guyana"},{value:"Per\xfa"},{value:"Surinam"},{value:"Uruguay"},{value:"Venezuela"},{value:"Bahamas"},{value:"Barbados"},{value:"Canad\xe1"},{value:"Costa Rica"},{value:"Cuba"},{value:"Dominica"},{value:"Granada"},{value:"Jamaica"},{value:"Estados Unidos"},{value:"M\xe9xico"},{value:"Panam\xe1"},{value:"Rep\xfablica Dominicana"},{value:"Trinidad y Tobago"}],this.gradosAcademicos=[{value:"Estudiante"},{value:"Bachiller"},{value:"Licenciatura"},{value:"Ingeniero"},{value:"Magister"},{value:"Doctorado"}],this.generos=[{value:"Masculino"},{value:"Femenino"},{value:"Binario"},{value:"Otro"},{value:"Prefiero no decirlo"}],this.ocupaciones=[{value:"Estudiante"},{value:"Profesor"}],this.carreras=[{value:"Arquitectura"},{value:"Ingenier\xeda Ambiental"},{value:"Ingenier\xeda Civil"},{value:"Ingenier\xeda Industrial"},{value:"Ingenier\xeda Mec\xe1nica"},{value:"Ingenier\xeda de Minas"},{value:"Ingenier\xeda Empresarial"},{value:"Ingenier\xeda Mecatr\xf3nica"},{value:"Ingenier\xeda de Sistemas e Inform\xe1tica"},{value:"Administraci\xf3n"},{value:"Administraci\xf3n y Finanzas"},{value:"Administraci\xf3n y Marketing"},{value:"Administraci\xf3n y Negocios Internacionales"},{value:"Administraci\xf3n y Recursos Humanos"},{value:"Contabilidad"},{value:"Econom\xeda"},{value:"Medicina Humana"},{value:"Enfermer\xeda"},{value:"Odontolog\xeda"},{value:"Tecnolog\xeda M\xe9dica"},{value:"Psicolog\xeda"},{value:"Ciencias y Tecnolog\xedas de la Comunicaci\xf3n"},{value:"Derecho"}],this.datosForm=this.fb.group({primer_nombre:["",[n.kI.required]],segundo_nombre:["",[n.kI.required]],apellido_paterno:["",[n.kI.required]],apellido_materno:["",[n.kI.required]],tipo_carnet:["",n.kI.required],carnet_identidad:["",n.kI.required],correo:["",[n.kI.required,n.kI.pattern(this.validatorsService.emailPattern)]],fecha_nacimiento:["",[n.kI.required]],telefono:["",[n.kI.required,n.kI.minLength(8),n.kI.maxLength(30)]],pais:["",n.kI.required],genero:["",n.kI.required],grado_estudio:["",n.kI.required],carrera:["",n.kI.required],grado_ocupacion:["",n.kI.required]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}isValidField(o){return this.validatorsService.isValidField(this.datosForm,o)}onSubmit(){if(this.datosForm.invalid)return void this.datosForm.markAllAsTouched();const o={clave:this.registerService.clave,nombre_usuario:this.registerService.nombre_usuario,publicidad:this.registerService.publicidad,...this.datosForm.value};this.registerService.register(this.empresa,o).subscribe(a=>{this.router.navigate(["/",this.empresa,"auth","login"]),alert("CUENTA CREADA EXITOSAMENTE")})}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(c.e),e.Y36(n.qu),e.Y36(_),e.Y36(v.e),e.Y36(l.F0),e.Y36(d.S))};static#i=this.\u0275cmp=e.Xpm({type:i,selectors:[["auth-datos-personales-form"]],decls:87,vars:21,consts:[[1,"h-full","flex","items-center"],[1,"login","flex","flex-col","gap-12","p-12","w-full","lienzo3","rounded-lg",3,"formGroup","ngSubmit"],[1,"txt-primary","font-bold"],[1,"grid","md:grid-cols-2","gap-5"],[1,"flex","flex-col","gap-1"],["for","primer_nombre"],["formControlName","primer_nombre","id","primer_nombre","type","text"],[4,"ngIf"],["for","segundo_nombre"],["formControlName","segundo_nombre","id","segundo_nombre","type","text"],["for","apellido_paterno"],["formControlName","apellido_paterno","id","apellido_paterno","type","text"],["for","apellido_materno"],["formControlName","apellido_materno","id","apellido_materno","type","text"],["for","tipo_carnet"],["formControlName","tipo_carnet","id","tipo_carnet"],[3,"value",4,"ngFor","ngForOf"],["for","carnet_identidad"],["formControlName","carnet_identidad","type","text","id","carnet_identidad"],["for","correo"],["formControlName","correo","type","text","id","correo"],["for","fecha_nacimiento"],["formControlName","fecha_nacimiento","type","date","id","fecha_nacimiento"],["for","telefono"],["formControlName","telefono","id","telefono","type","text"],["for","pais"],["formControlName","pais","id","pais"],["for","genero"],["formControlName","genero","id","genero"],["for","grado_estudio"],["formControlName","grado_estudio","id","grado_estudio"],["for","carrera"],["formControlName","carrera","id","carrera"],["for","grado_ocupacion"],["formControlName","grado_ocupacion","id","grado_ocupacion"],[1,"md:col-span-2","flex","justify-center"],["typeButton","primary","type","submit"],[1,"text-red-400","text-[12px]"],[3,"value"],["class","text-red-400 text-[12px]",4,"ngIf"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(2,"div")(3,"h4",2),e._uU(4,"Completa tu perfil"),e.qZA(),e.TgZ(5,"p"),e._uU(6," \xa1Gracias por unirte a nuestra comunidad! Ay\xfadanos a conocerte mejor. "),e.qZA()(),e.TgZ(7,"div",3)(8,"div",4)(9,"label",5),e._uU(10,"Primer nombre:"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,W,3,0,"div",7),e.qZA(),e.TgZ(13,"div",4)(14,"label",8),e._uU(15,"Segundo nombre:"),e.qZA(),e._UZ(16,"input",9),e.YNc(17,ee,3,0,"div",7),e.qZA(),e.TgZ(18,"div",4)(19,"label",10),e._uU(20,"Apellido paterno:"),e.qZA(),e._UZ(21,"input",11),e.YNc(22,ie,3,0,"div",7),e.qZA(),e.TgZ(23,"div",4)(24,"label",12),e._uU(25,"Apellido materno:"),e.qZA(),e._UZ(26,"input",13),e.YNc(27,oe,3,0,"div",7),e.qZA(),e.TgZ(28,"div",4)(29,"label",14),e._uU(30,"Tipo de documento:"),e.qZA(),e.TgZ(31,"select",15),e.YNc(32,te,2,2,"option",16),e.qZA(),e.YNc(33,re,3,0,"div",7),e.qZA(),e.TgZ(34,"div",4)(35,"label",17),e._uU(36,"N\xfamero de documento:"),e.qZA(),e._UZ(37,"input",18),e.YNc(38,ne,3,0,"div",7),e.qZA(),e.TgZ(39,"div",4)(40,"label",19),e._uU(41,"Correo"),e.qZA(),e._UZ(42,"input",20),e.YNc(43,le,3,2,"div",7),e.qZA(),e.TgZ(44,"div",4)(45,"label",21),e._uU(46,"Fecha de nacimiento:"),e.qZA(),e._UZ(47,"input",22),e.YNc(48,ue,3,0,"div",7),e.qZA(),e.TgZ(49,"div",4)(50,"label",23),e._uU(51,"Telefono:"),e.qZA(),e._UZ(52,"input",24),e.YNc(53,de,4,3,"div",7),e.qZA(),e.TgZ(54,"div",4)(55,"label",25),e._uU(56,"Pais de residencia:"),e.qZA(),e.TgZ(57,"select",26),e.YNc(58,ge,2,2,"option",16),e.qZA(),e.YNc(59,_e,3,0,"div",7),e.qZA(),e.TgZ(60,"div",4)(61,"label",27),e._uU(62,"G\xe9nero:"),e.qZA(),e.TgZ(63,"select",28),e.YNc(64,fe,2,2,"option",16),e.qZA(),e.YNc(65,ve,3,0,"div",7),e.qZA(),e.TgZ(66,"div",4)(67,"label",29),e._uU(68,"Grado de estudio:"),e.qZA(),e.TgZ(69,"select",30),e.YNc(70,Ze,2,2,"option",16),e.qZA(),e.YNc(71,he,3,0,"div",7),e.qZA(),e.TgZ(72,"div",4)(73,"label",31),e._uU(74,"Carrera:"),e.qZA(),e.TgZ(75,"select",32),e.YNc(76,Te,2,2,"option",16),e.qZA(),e.YNc(77,Fe,3,0,"div",7),e.qZA(),e.TgZ(78,"div",4)(79,"label",33),e._uU(80,"Ocupaci\xf3n:"),e.qZA(),e.TgZ(81,"select",34),e.YNc(82,qe,2,2,"option",16),e.qZA(),e.YNc(83,xe,3,0,"div",7),e.qZA(),e.TgZ(84,"div",35)(85,"shared-botones",36),e._uU(86," Guardar "),e.qZA()()()()()),2&a&&(e.xp6(1),e.Q6J("formGroup",r.datosForm),e.xp6(11),e.Q6J("ngIf",r.isValidField("primer_nombre")),e.xp6(5),e.Q6J("ngIf",r.isValidField("segundo_nombre")),e.xp6(5),e.Q6J("ngIf",r.isValidField("apellido_paterno")),e.xp6(5),e.Q6J("ngIf",r.isValidField("apellido_materno")),e.xp6(5),e.Q6J("ngForOf",r.documentos),e.xp6(1),e.Q6J("ngIf",r.isValidField("tipo_carnet")),e.xp6(5),e.Q6J("ngIf",r.isValidField("carnet_identidad")),e.xp6(5),e.Q6J("ngIf",r.isValidField("correo")),e.xp6(5),e.Q6J("ngIf",r.isValidField("fecha_nacimiento")),e.xp6(5),e.Q6J("ngIf",r.isValidField("telefono")),e.xp6(5),e.Q6J("ngForOf",r.paises),e.xp6(1),e.Q6J("ngIf",r.isValidField("pais")),e.xp6(5),e.Q6J("ngForOf",r.generos),e.xp6(1),e.Q6J("ngIf",r.isValidField("genero")),e.xp6(5),e.Q6J("ngForOf",r.gradosAcademicos),e.xp6(1),e.Q6J("ngIf",r.isValidField("grado_estudio")),e.xp6(5),e.Q6J("ngForOf",r.carreras),e.xp6(1),e.Q6J("ngIf",r.isValidField("carrera")),e.xp6(5),e.Q6J("ngForOf",r.ocupaciones),e.xp6(1),e.Q6J("ngIf",r.isValidField("grado_ocupacion")))},dependencies:[p.sg,p.O5,g.x,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".select-registro[_ngcontent-%COMP%]{background-color:var(--lienzo);transition:all ease-in .3s}"]})}return i})(),canActivate:[()=>{const i=(0,e.f3M)(_),t=(0,e.f3M)(l.F0),a=(0,e.f3M)(c.e).getEmpresa();return!!(i.nombre_usuario&&i.clave&&i.publicidad)||(t.navigate(["./",a,"auth","register"]),!1)}]}]}];let be=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#i=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(Ae),l.Bz]})}return i})();var Ce=s(6208);let Ie=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#i=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[p.ez,be,Ce.m,n.UX]})}return i})()}}]);