"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[340],{4340:(le,d,s)=>{s.r(d),s.d(d,{AuthModule:()=>ie});var m=s(6814),u=s(180),r=s(95),e=s(4946),p=s(9355),g=s(4567),c=s(9227);const Z=function(){return["../register"]};let v=(()=>{class o{constructor(a,t,n,l){this.rutaEmpresaService=a,this.authService=t,this.fb=n,this.router=l,this.loginForm=this.fb.group({name:["",[r.kI.required,r.kI.minLength(8)]],password:["",[r.kI.required,r.kI.minLength(8)]]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}logIn(){if(this.loginForm.invalid)return;const{name:a,password:t}=this.loginForm.value;this.authService.authenticate({user:a,pass:t,institution:this.empresa}).subscribe(n=>{this.authService.changeLoged(!0),this.router.navigate(["/../."])},n=>{console.error(n)}),this.loginForm.reset()}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e),e.Y36(g.e),e.Y36(r.qu),e.Y36(u.F0))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["auth-login-form"]],decls:20,vars:8,consts:[[1,"flex","items-center","justify-center","h-full"],[1,"login","flex","flex-col","items-center","gap-12","p-12","lienzo3","rounded-lg","md:w-[400px]",3,"ngClass"],[1,"font-bold",3,"ngClass"],[1,"flex","flex-col","gap-5",3,"formGroup"],[1,"flex","flex-col","gap-1"],["for","nombre"],["formControlName","name","type","text","name","nombre","id","nombre",3,"ngClass"],["formControlName","password","type","password","name","nombre",3,"ngClass"],["typeButton","primary",3,"click"],[1,"text-center"],[1,"cursor-pointer",3,"routerLink","ngClass"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Inicia Sesi\xf3n"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Nombres:"),e.qZA(),e._UZ(8,"input",6),e.qZA(),e.TgZ(9,"div",4)(10,"label",5),e._uU(11,"Contrase\xf1a:"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.TgZ(13,"shared-botones",8),e.NdJ("click",function(){return n.logIn()}),e._uU(14,"Iniciar Sesi\xf3n"),e.qZA(),e.TgZ(15,"div",9)(16,"p"),e._uU(17,"\xbfNo tienes cuenta?"),e.qZA(),e.TgZ(18,"p",10),e._uU(19," Crear Cuenta "),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngClass","txt-"+n.empresa),e.xp6(2),e.Q6J("formGroup",n.loginForm),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(6),e.Q6J("routerLink",e.DdM(7,Z))("ngClass","txt-"+n.empresa))},dependencies:[m.mk,u.rH,c.x,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.F],styles:[".login.EcoAmbiental[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--eco),0 0 20px 0 var(--eco)}.login.Ghamec[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--ghamec),0 0 20px 0 var(--ghamec)}.login.ACM[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--acm),0 0 20px 0 var(--acm)}"]})}return o})();var f=s(5619),h=s(5065),T=s(9862);let _=(()=>{class o{constructor(a,t){this.rutaEmpresaService=a,this.http=t,this.datosSubject=new f.X(null),this.datos=this.datosSubject.asObservable(),this.URL=h.T.baseUrl,this._datosActuales={correo:"",clave:"",primer_nombre:"",segundo_nombre:"",apellido_paterno:"",apellido_materno:"",tipo_carnet:"",carnet_identidad:"",nombre_usuario:"",fecha_nacimiento:"",telefono:"",pais:"",genero:"",grado_estudio:"",grado_ocupacion:"",carrera:"",publicidad:!1,rol_id:0}}get datosActuales(){return{...this._datosActuales}}setDatos(a){this._datosActuales={...this._datosActuales,...a},this.datosSubject.next(this.datosActuales)}sendDataToApi(a,t){this.http.post(`${this.URL}/usuario/crearUsuario/${t}`,a).subscribe(l=>{console.log("Data sent to API:",l)},l=>{console.error("Error sending data to API:",l)})}static#e=this.\u0275fac=function(t){return new(t||o)(e.LFG(p.e),e.LFG(T.eN))};static#o=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function A(o,i){1&o&&(e.TgZ(0,"div",18),e.O4$(),e.TgZ(1,"svg",19),e._UZ(2,"path",20),e.qZA(),e.kcU(),e.TgZ(3,"p",21),e._uU(4,"Las contrase\xf1as no coinciden"),e.qZA()())}const C=function(){return["../../terminos"]},q=function(){return["../../politicas"]},x=function(){return["../login"]};let U=(()=>{class o{constructor(a,t,n,l){this.rutaEmpresaService=a,this.fb=t,this.registerService=n,this.router=l,this.registerForm=this.fb.group({nombre_usuario:["",[r.kI.required,r.kI.minLength(8)]],clave:["",[r.kI.required,r.kI.minLength(8)]],claveRep:["",[r.kI.required,r.kI.minLength(8)]],publicidad:[!1]},{validators:this.passwordsIgualesValidator()})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}submitRegistro(){if(this.registerForm.valid){console.log("Registrado"),console.log(this.registerForm.value);const a={...this.registerForm.value};delete a.claveRep,this.registerService.setDatos(a),this.router.navigate(["/.././auth/datos"])}}passwordsIgualesValidator(){return a=>{const t=a.get("clave")?.value,n=a.get("claveRep")?.value;return t===n?null:{passwordsNoCoinciden:!0}}}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e),e.Y36(r.qu),e.Y36(_),e.Y36(u.F0))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["auth-register-form"]],decls:35,vars:16,consts:[[1,"flex","items-center","justify-center","h-full"],[1,"login","flex","flex-col","items-center","gap-12","p-12","lienzo3","rounded","md:w-[400px]",3,"ngClass"],[1,"font-bold",3,"ngClass"],[1,"flex","flex-col","gap-5",3,"formGroup"],[1,"flex","flex-col","gap-1"],["for","nombre"],["formControlName","nombre_usuario","type","text","name","nombre_usuario","id","nombre_usuario",3,"ngClass"],["for","contrase\xf1a"],["type","password","name","clave","formControlName","clave",3,"ngClass"],["for","contrase\xf1a2"],["type","password","name","claveRep","formControlName","claveRep",3,"ngClass"],["class","flex gap-1 align-middle justify-center items-center mt-2",4,"ngIf"],[1,"flex","gap-2"],["type","checkbox","name","termsAndPolitics","formControlName","publicidad"],["for","termsAndPolitics"],[1,"cursor-pointer",3,"routerLink","ngClass"],["typeButton","primary",3,"click"],[1,"text-center"],[1,"flex","gap-1","align-middle","justify-center","items-center","mt-2"],["xmlns","http://www.w3.org/2000/svg","width","18","height","18","viewBox","0 0 80 80","fill","none"],["d","M40 7.5C22.0797 7.5 7.5 22.0797 7.5 40C7.5 57.9203 22.0797 72.5 40 72.5C57.9203 72.5 72.5 57.9203 72.5 40C72.5 22.0797 57.9203 7.5 40 7.5ZM43.125 57.4859H36.875V51.2359H43.125V57.4859ZM42.5 47.5H37.5L36.5625 22.5H43.4375L42.5 47.5Z","fill","#FB4F2A"],[1,"text-xs"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Registrarse"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Usuario:"),e.qZA(),e._UZ(8,"input",6),e.qZA(),e.TgZ(9,"div",4)(10,"label",7),e._uU(11,"Contrase\xf1a:"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.TgZ(13,"div",4)(14,"label",9),e._uU(15,"Confirmar Contrase\xf1a:"),e.qZA(),e._UZ(16,"input",10),e.YNc(17,A,5,0,"div",11),e.qZA(),e.TgZ(18,"div",12),e._UZ(19,"input",13),e.TgZ(20,"label",14),e._uU(21,"He le\xeddo y acepto los "),e.TgZ(22,"span",15),e._uU(23,"t\xe9rminos"),e.qZA(),e._uU(24," y condiciones y las "),e.TgZ(25,"span",15),e._uU(26,"pol\xedticas"),e.qZA(),e._uU(27," de la empresa"),e.qZA()(),e.TgZ(28,"shared-botones",16),e.NdJ("click",function(){return n.submitRegistro()}),e._uU(29,"Crear Cuenta"),e.qZA(),e.TgZ(30,"div",17)(31,"p"),e._uU(32,"\xbfYa tienes cuenta?"),e.qZA(),e.TgZ(33,"p",15),e._uU(34," Iniciar Sesi\xf3n "),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngClass","txt-"+n.empresa),e.xp6(2),e.Q6J("formGroup",n.registerForm),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.registerForm.hasError("passwordsNoCoinciden")),e.xp6(5),e.Q6J("routerLink",e.DdM(13,C))("ngClass","txt-"+n.empresa),e.xp6(3),e.Q6J("routerLink",e.DdM(14,q))("ngClass","txt-"+n.empresa),e.xp6(8),e.Q6J("routerLink",e.DdM(15,x))("ngClass","txt-"+n.empresa))},dependencies:[m.mk,m.O5,u.rH,c.x,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.sg,r.u,r.F],styles:[".login.EcoAmbiental[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--eco),0 0 20px 0 var(--eco)}.login.Ghamec[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--ghamec),0 0 20px 0 var(--ghamec)}.login.ACM[_ngcontent-%COMP%]{box-shadow:0 0 4px 0 var(--acm),0 0 20px 0 var(--acm)}"]})}return o})(),b=(()=>{class o{constructor(a){this.rutaEmpresaService=a}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["auth-logo"]],decls:4,vars:2,consts:[[1,"relative","flex","justify-center","items-center","h-full"],["alt","",3,"src"],[1,"absolute","w-full","left-0","top-0","-z-50"],["alt","",1,"object-cover","w-full","h-screen","grayscale",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("src","assets/"+n.empresa+".png",e.LSH),e.xp6(2),e.Q6J("src","assets/auth.jpg",e.LSH))}})}return o})();function I(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function J(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,I,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("primer_nombre"))?null:t.hasError("required"))}}function y(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function Q(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,y,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("segundo_nombre"))?null:t.hasError("required"))}}function N(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function k(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,N,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("apellido_paterno"))?null:t.hasError("required"))}}function D(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function P(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,D,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("apellido_materno"))?null:t.hasError("required"))}}function S(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function E(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,S,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("tipoDocumento"))?null:t.hasError("required"))}}function Y(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function w(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,Y,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("carnet_identidad"))?null:t.hasError("required"))}}function L(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function O(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,L,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("correo"))?null:t.hasError("required"))}}function M(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function B(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,M,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("fecha_nacimiento"))?null:t.hasError("required"))}}function j(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function R(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,j,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("telefono"))?null:t.hasError("required"))}}function G(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function $(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,G,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("pais"))?null:t.hasError("required"))}}function H(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function z(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,H,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("genero"))?null:t.hasError("required"))}}function V(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function X(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,V,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("grado_estudio"))?null:t.hasError("required"))}}function K(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function W(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,K,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("carrera"))?null:t.hasError("required"))}}function ee(o,i){1&o&&(e.TgZ(0,"div",66),e.O4$(),e.TgZ(1,"svg",67),e._UZ(2,"path",68),e.qZA(),e.kcU(),e.TgZ(3,"p",69),e._uU(4,"Campo vacio"),e.qZA()())}function oe(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,ee,5,0,"div",65),e.qZA()),2&o){const a=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=a.datosForm.get("grado_ocupacion"))?null:t.hasError("required"))}}const te=function(){return["../../"]},ne=[{path:"",component:(()=>{class o{constructor(a){this.rutaEmpresaService=a}ngOnInit(){this.rutaEmpresaService.changeLayoutPadding("")}ngOnDestroy(){this.rutaEmpresaService.changeLayoutPadding("p-5 max-[425px]:p-[10px]")}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["auth-layout"]],decls:4,vars:0,consts:[[1,"grid","lg:grid-cols-3","h-full"],[1,"hidden","lg:block"],[1,"h-full","col-span-2","p-3","lg:m-0"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"auth-logo",1),e.TgZ(2,"div",2),e._UZ(3,"router-outlet"),e.qZA()())},dependencies:[u.lC,b]})}return o})(),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:v},{path:"register",component:U},{path:"datos",component:(()=>{class o{constructor(a,t,n,l,se){this.rutaEmpresaService=a,this.fb=t,this.registerService=n,this.authService=l,this.router=se,this.formSubmitted=!1,this.datosForm=this.fb.group({primer_nombre:["",[r.kI.required,r.kI.minLength(3)]],segundo_nombre:["",[r.kI.required,r.kI.minLength(3)]],apellido_paterno:["",[r.kI.required,r.kI.minLength(3)]],apellido_materno:["",[r.kI.required,r.kI.minLength(3)]],tipo_carnet:["",r.kI.required],carnet_identidad:["",r.kI.required],correo:["",[r.kI.required,r.kI.email]],fecha_nacimiento:["",r.kI.required],telefono:["",r.kI.required],pais:["",r.kI.required],genero:["",r.kI.required],grado_estudio:["",r.kI.required],carrera:["",r.kI.required],grado_ocupacion:["",r.kI.required],rol_id:[1]})}ngOnInit(){this.empresa=this.rutaEmpresaService.getEmpresa()}onSubmit(){if(this.formSubmitted=!0,this.datosForm.invalid)return void console.log(this.datosForm.errors);this.registerService.setDatos(this.datosForm.value),this.registerService.sendDataToApi(this.registerService.datosActuales,this.empresa);const{nombre_usuario:a,clave:t}=this.registerService.datosActuales;this.authService.authenticate({user:a,pass:t,institution:this.empresa}).subscribe(n=>{this.authService.changeLoged(!0),this.router.navigate(["/../."])},n=>{console.error(n)})}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e),e.Y36(r.qu),e.Y36(_),e.Y36(g.e),e.Y36(u.F0))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["auth-datos-personales-form"]],decls:167,vars:32,consts:[[1,"h-full","flex","items-center"],[1,"login","flex","flex-col","gap-12","p-12","w-full","lienzo3","rounded-lg",3,"formGroup"],[1,"font-bold",3,"ngClass"],[1,"grid","md:grid-cols-2","gap-5"],[1,"flex","flex-col","gap-1"],["for","nombre"],["formControlName","primer_nombre","type","text","name","nombre","id","primer_nombre",3,"ngClass"],[4,"ngIf"],["formControlName","segundo_nombre","type","text","name","nombre","id","segundo_nombre",3,"ngClass"],["formControlName","apellido_paterno","type","text","name","nombre","id","apellido_paterno",3,"ngClass"],["formControlName","apellido_materno","type","text","name","nombre","id","apellido_materno",3,"ngClass"],["formControlName","tipo_carnet","name","documento","id","tipoDocumento",1,"select-registro","h-[34px]","rounded-lg",3,"ngClass"],["value","DNI"],["value","Pasaporte"],["value","Carnet de extranjer\xeda"],["value","C\xe9dula de identidad"],["value","CURP"],["formControlName","carnet_identidad","type","text","name","nombre","id","carnet_identidad",3,"ngClass"],["formControlName","correo","type","text","name","nombre","id","correo",3,"ngClass"],["formControlName","fecha_nacimiento","type","text","name","nombre","id","fecha_nacimiento","placeholder","yyyy-mm-dd",3,"ngClass"],["formControlName","telefono","type","text","name","telefono","id","telefono",3,"ngClass"],["formControlName","pais","name","grado","id","pais",1,"select-registro","h-[34px]","rounded-lg",3,"ngClass"],["value","Argentina"],["value","Bolivia"],["value","Brasil"],["value","Chile"],["value","Colombia"],["value","Ecuador"],["value","Guyana"],["value","Per\xfa"],["value","Surinam"],["value","Uruguay"],["value","Venezuela"],["value","Bahamas"],["value","Barbados"],["value","Canad\xe1"],["value","Costa Rica"],["value","Cuba"],["value","Dominica"],["value","Granda"],["value","Jamaica"],["value","Estados Unidos"],["value","Mexico"],["value","Panam\xe1"],["value","Rep\xfablica Dominicana"],["value","Trinidad y Tobago"],["formControlName","genero","name","genero","id","genero",1,"select-registro","h-[34px]","rounded-lg",3,"ngClass"],["value","Masculino"],["value","Femenino"],["value","Binario"],["value","Prefiero no decirlo"],["formControlName","grado_estudio","name","grado","id","grado_estudio",1,"select-registro","h-[34px]","rounded-lg",3,"ngClass"],["value","Estudiante"],["value","Bachiller"],["value","Licenciatura"],["value","Ingeniero"],["value","Magister"],["value","Doctorado"],["formControlName","carrera","type","text","name","carrera","id","carrera",3,"ngClass"],["formControlName","grado_ocupacion","name","grado_ocupacion","id","grado_ocupacion",1,"select-registro","h-[34px]","rounded-lg",3,"ngClass"],["value","Administrador"],["value","Tutor"],["value","Docente"],[1,"md:col-span-2","flex","justify-center"],["typeButton","primary","type","submit",3,"routerLink","click"],["class","flex gap-1 align-middle justify-center items-center mt-2",4,"ngIf"],[1,"flex","gap-1","align-middle","justify-center","items-center","mt-2"],["xmlns","http://www.w3.org/2000/svg","width","18","height","18","viewBox","0 0 80 80","fill","none"],["d","M40 7.5C22.0797 7.5 7.5 22.0797 7.5 40C7.5 57.9203 22.0797 72.5 40 72.5C57.9203 72.5 72.5 57.9203 72.5 40C72.5 22.0797 57.9203 7.5 40 7.5ZM43.125 57.4859H36.875V51.2359H43.125V57.4859ZM42.5 47.5H37.5L36.5625 22.5H43.4375L42.5 47.5Z","fill","#FB4F2A"],[1,"text-xs"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"h4",2),e._uU(4,"Completa tu perfil"),e.qZA(),e.TgZ(5,"p"),e._uU(6," \xa1Gracias por unirte a nuestra comunidad! Ay\xfadanos a conocerte mejor. "),e.qZA()(),e.TgZ(7,"div",3)(8,"div",4)(9,"label",5),e._uU(10,"Primer nombre:"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,J,2,1,"div",7),e.qZA(),e.TgZ(13,"div",4)(14,"label",5),e._uU(15,"Segundo nombre:"),e.qZA(),e._UZ(16,"input",8),e.YNc(17,Q,2,1,"div",7),e.qZA(),e.TgZ(18,"div",4)(19,"label",5),e._uU(20,"Apellido paterno:"),e.qZA(),e._UZ(21,"input",9),e.YNc(22,k,2,1,"div",7),e.qZA(),e.TgZ(23,"div",4)(24,"label",5),e._uU(25,"Apellido materno:"),e.qZA(),e._UZ(26,"input",10),e.YNc(27,P,2,1,"div",7),e.qZA(),e.TgZ(28,"div",4)(29,"label",5),e._uU(30,"Tipo de documento:"),e.qZA(),e.TgZ(31,"select",11)(32,"option",12),e._uU(33,"DNI"),e.qZA(),e.TgZ(34,"option",13),e._uU(35,"Pasaporte"),e.qZA(),e.TgZ(36,"option",14),e._uU(37,"Carnet de extranjer\xeda"),e.qZA(),e.TgZ(38,"option",15),e._uU(39,"C\xe9dula de identidad"),e.qZA(),e.TgZ(40,"option",16),e._uU(41,"CURP"),e.qZA()(),e.YNc(42,E,2,1,"div",7),e.qZA(),e.TgZ(43,"div",4)(44,"label",5),e._uU(45,"N\xfamero de documento:"),e.qZA(),e._UZ(46,"input",17),e.YNc(47,w,2,1,"div",7),e.qZA(),e.TgZ(48,"div",4)(49,"label",5),e._uU(50,"Correo"),e.qZA(),e._UZ(51,"input",18),e.YNc(52,O,2,1,"div",7),e.qZA(),e.TgZ(53,"div",4)(54,"label",5),e._uU(55,"Fecha de nacimiento:"),e.qZA(),e._UZ(56,"input",19),e.YNc(57,B,2,1,"div",7),e.qZA(),e.TgZ(58,"div",4)(59,"label",5),e._uU(60,"Telefono:"),e.qZA(),e._UZ(61,"input",20),e.YNc(62,R,2,1,"div",7),e.qZA(),e.TgZ(63,"div",4)(64,"label",5),e._uU(65,"Pais de residencia:"),e.qZA(),e.TgZ(66,"select",21)(67,"option",22),e._uU(68,"Argentina"),e.qZA(),e.TgZ(69,"option",23),e._uU(70,"Bolivia"),e.qZA(),e.TgZ(71,"option",24),e._uU(72,"Brasil"),e.qZA(),e.TgZ(73,"option",25),e._uU(74,"Chile"),e.qZA(),e.TgZ(75,"option",26),e._uU(76,"Colombia"),e.qZA(),e.TgZ(77,"option",27),e._uU(78,"Ecuador"),e.qZA(),e.TgZ(79,"option",28),e._uU(80,"Guyana"),e.qZA(),e.TgZ(81,"option",29),e._uU(82,"Per\xfa"),e.qZA(),e.TgZ(83,"option",30),e._uU(84,"Surinam"),e.qZA(),e.TgZ(85,"option",31),e._uU(86,"Uruguay"),e.qZA(),e.TgZ(87,"option",32),e._uU(88,"Venezuela"),e.qZA(),e.TgZ(89,"option",33),e._uU(90,"Bahamas"),e.qZA(),e.TgZ(91,"option",34),e._uU(92,"Barbados"),e.qZA(),e.TgZ(93,"option",35),e._uU(94,"Canad\xe1"),e.qZA(),e.TgZ(95,"option",36),e._uU(96,"Costa Rica"),e.qZA(),e.TgZ(97,"option",37),e._uU(98,"Cuba"),e.qZA(),e.TgZ(99,"option",38),e._uU(100,"Dominica"),e.qZA(),e.TgZ(101,"option",39),e._uU(102,"Granda"),e.qZA(),e.TgZ(103,"option",40),e._uU(104,"Jamaica"),e.qZA(),e.TgZ(105,"option",41),e._uU(106,"Estados Unidos"),e.qZA(),e.TgZ(107,"option",42),e._uU(108,"Mexico"),e.qZA(),e.TgZ(109,"option",43),e._uU(110,"Panam\xe1"),e.qZA(),e.TgZ(111,"option",44),e._uU(112,"Rep\xfablica Dominicana"),e.qZA(),e.TgZ(113,"option",45),e._uU(114,"Trinidad y Tobago"),e.qZA()(),e.YNc(115,$,2,1,"div",7),e.qZA(),e.TgZ(116,"div",4)(117,"label",5),e._uU(118,"G\xe9nero:"),e.qZA(),e.TgZ(119,"select",46)(120,"option",47),e._uU(121,"Masculino"),e.qZA(),e.TgZ(122,"option",48),e._uU(123,"Femenino"),e.qZA(),e.TgZ(124,"option",49),e._uU(125,"Binario"),e.qZA(),e.TgZ(126,"option",50),e._uU(127,"Prefiero no decirlo"),e.qZA()(),e.YNc(128,z,2,1,"div",7),e.qZA(),e.TgZ(129,"div",4)(130,"label",5),e._uU(131,"Grado de estudio:"),e.qZA(),e.TgZ(132,"select",51)(133,"option",52),e._uU(134,"Estudiante"),e.qZA(),e.TgZ(135,"option",53),e._uU(136,"Bachiller"),e.qZA(),e.TgZ(137,"option",54),e._uU(138,"Licenciatura"),e.qZA(),e.TgZ(139,"option",55),e._uU(140,"Ingeniero"),e.qZA(),e.TgZ(141,"option",56),e._uU(142,"Magister"),e.qZA(),e.TgZ(143,"option",57),e._uU(144,"Doctorado"),e.qZA()(),e.YNc(145,X,2,1,"div",7),e.qZA(),e.TgZ(146,"div",4)(147,"label",5),e._uU(148,"Carrera:"),e.qZA(),e._UZ(149,"input",58),e.YNc(150,W,2,1,"div",7),e.qZA(),e.TgZ(151,"div",4)(152,"label",5),e._uU(153,"Ocupaci\xf3n:"),e.qZA(),e.TgZ(154,"select",59)(155,"option",60),e._uU(156,"Administrador"),e.qZA(),e.TgZ(157,"option",61),e._uU(158,"Tutor"),e.qZA(),e.TgZ(159,"option",62),e._uU(160,"Docente"),e.qZA(),e.TgZ(161,"option",52),e._uU(162,"Estudiante"),e.qZA()(),e.YNc(163,oe,2,1,"div",7),e.qZA(),e.TgZ(164,"div",63)(165,"shared-botones",64),e.NdJ("click",function(){return n.onSubmit()}),e._uU(166," Guardar "),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.datosForm),e.xp6(2),e.Q6J("ngClass","txt-"+n.empresa),e.xp6(8),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(11),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(49),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(9),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(13),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(1),e.Q6J("ngIf",n.formSubmitted),e.xp6(4),e.Q6J("ngClass",n.empresa),e.xp6(9),e.Q6J("ngIf",n.formSubmitted),e.xp6(2),e.Q6J("routerLink",e.DdM(31,te)))},dependencies:[m.mk,m.O5,u.rH,c.x,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u],styles:[".select-registro[_ngcontent-%COMP%]{background-color:var(--lienzo);transition:all ease-in .3s}"]})}return o})()}]}];let ae=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#o=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(ne),u.Bz]})}return o})();var re=s(6208);let ie=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#o=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({imports:[m.ez,ae,re.m,r.UX,r.u5]})}return o})()}}]);