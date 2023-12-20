"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[940],{940:(M,l,i)=>{i.r(l),i.d(l,{CuponesModule:()=>J});var u=i(6814),h=i(2895),d=i(7394),e=i(4946),r=i(9355),C=i(9862),g=i(9397),x=i(6306),Z=i(2096),y=i(5065);let v=(()=>{class n{get cupones(){return[...this._cupones]}resetCupones(){this._cupones=[]}constructor(t,o){this.http=t,this.rutaEmpresaService=o,this._cupones=[],this.URL=y.T.baseUrl}getCupones(t){const o=this.rutaEmpresaService.getEmpresa();return this.http.get(`${this.URL}/cupon/${t}/${o}`).pipe((0,g.b)(c=>this._cupones=c),(0,x.K)(c=>(console.error("Error al obtener planes",c),(0,Z.of)([]))))}addCupon(t,o){const s=this.rutaEmpresaService.getEmpresa(),c=(new C.LE).set("codigoCupon",t).set("idEstudiante",o).set("institucion",s);return this.http.post(`${this.URL}/cupon`,{},{params:c})}static#e=this.\u0275fac=function(o){return new(o||n)(e.LFG(C.eN),e.LFG(r.e))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var f=i(4567),b=i(4831),m=i(9227),T=i(2174);function _(n,p){1&n&&(e.TgZ(0,"div",8)(1,"div",9),e._uU(2," USADO "),e.qZA(),e._UZ(3,"div",10),e.qZA())}function U(n,p){1&n&&(e.TgZ(0,"div",8)(1,"div",9),e._uU(2," VENCIDO "),e.qZA(),e._UZ(3,"div",10),e.qZA())}function A(n,p){if(1&n&&(e.TgZ(0,"div",1)(1,"div",2)(2,"h4"),e._uU(3,"Cup\xf3n"),e.qZA(),e.TgZ(4,"div",3),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"p"),e._uU(8,"Disponible hasta:"),e.qZA(),e.TgZ(9,"p",5),e._uU(10),e.ALo(11,"date"),e.qZA()()(),e.TgZ(12,"div",6)(13,"h4"),e._uU(14,"Descuento de"),e.qZA(),e.TgZ(15,"h1",5),e._uU(16),e.qZA()(),e.YNc(17,_,4,0,"div",7),e.YNc(18,U,4,0,"div",7),e.qZA()),2&n){const t=e.oxw();e.Q6J("ngClass",t.empresa),e.xp6(5),e.hij(" ",t.cupon.cupon_descripcion," "),e.xp6(5),e.hij(" ",e.Dn7(11,6,t.cupon.miscupones_fecha_limite,"dd/MM/yyyy","UTC")," "),e.xp6(6),e.hij("",100*+t.cupon.cupon_monto_porcentaje,"%"),e.xp6(1),e.Q6J("ngIf","Usado"===t.cupon.cupon_estado),e.xp6(1),e.Q6J("ngIf","Vencido"===t.cupon.cupon_estado)}}let w=(()=>{class n{constructor(t){this.rutaEmpresa=t}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(r.e))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["cupones-card"]],inputs:{cupon:"cupon"},decls:1,vars:1,consts:[["class","flex relative h-full items-center",3,"ngClass",4,"ngIf"],[1,"flex","relative","h-full","items-center",3,"ngClass"],[1,"bg-white","h-full","w-[50%]","flex","flex-col","justify-center","gap-[10px]","p-[20px]","text-black","text-center"],[1,"px-[10px]","py-[5px]","bg-[#5261E7]","font-bold","self-center","text-white","inline-block","text-[24px]"],[1,"flex","flex-wrap","justify-around","mt-[5px]","gap-1"],[1,"font-bold"],[1,"bg-primary","h-full","w-[50%]","flex","flex-col","justify-center","p-[20px]","text-center"],["class","absolute top-0 left-0 right-0 bottom-0 grid place-content-center",4,"ngIf"],[1,"absolute","top-0","left-0","right-0","bottom-0","grid","place-content-center"],[1,"z-10","py-[5px]","px-[10px]","bg-red-600","p-1","inline","-rotate-[20deg]","text-[24px]","font-bold"],[1,"w-full","h-full","absolute","backdrop-blur-[3px]"]],template:function(o,s){1&o&&e.YNc(0,A,19,10,"div",0),2&o&&e.Q6J("ngIf",s.cupon)},dependencies:[u.mk,u.O5,u.uU]})}return n})();var E=i(3477);function F(n,p){if(1&n&&(e.TgZ(0,"div")(1,"p",10),e._uU(2),e.ALo(3,"json"),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,1,t.message))}}let S=(()=>{class n{constructor(t,o,s,c){this.rutaEmpresa=t,this.cuponesService=o,this.authService=s,this.notificationService=c,this._user=new d.w0,this.error=!1,this.message="",this.showClaveCupon=new e.vpe,this.showCuponValido=new e.vpe,this.mensajeVacio=""}ngOnInit(){this.empresa=this.rutaEmpresa.getEmpresa(),this.getUser()}ngOnDestroy(){this._user.unsubscribe()}getUser(){this._user=this.authService.user.subscribe(t=>{t&&(this.user=t)})}closeClaveCupon(){this.showClaveCupon.emit(!1)}addCupon(t){t&&this.cuponesService.addCupon(t,+this.user.idRol).subscribe({next:()=>{this.error=!1,this.cuponesService.getCupones(+this.user.idRol).subscribe(()=>{this.closeClaveCupon(),this.notificationService.show("Cupon a\xf1adido exitosamente","success")})},error:o=>{this.error=!0,this.message=o.error.message}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(r.e),e.Y36(v),e.Y36(f.e),e.Y36(E.g))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["cupones-clave-cupon"]],outputs:{showClaveCupon:"showClaveCupon",showCuponValido:"showCuponValido"},decls:14,vars:2,consts:[[1,"contain-cupon","grid","place-items-center","shadow-lg"],[1,"cupon","w-[40%]","lienzo2","min-w-[270px]","p-5","rounded-lg","flex","flex-col","gap-[10px]"],[1,"font-bold"],[1,"text-[16px]"],["type","text"],["cupon",""],[4,"ngIf"],[1,"flex","justify-end","gap-[10px]"],["typeButton","primary",3,"click"],["typeButton","secondary",3,"click"],[1,"text-red-400","text-[12px]"]],template:function(o,s){if(1&o){const c=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3,"Introduce la clave del cup\xf3n"),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA(),e._UZ(6,"input",4,5),e.YNc(8,F,4,3,"div",6),e.TgZ(9,"div",7)(10,"shared-botones",8),e.NdJ("click",function(){e.CHM(c);const N=e.MAs(7);return e.KtG(s.addCupon(N.value))}),e._uU(11," Confirmar "),e.qZA(),e.TgZ(12,"shared-botones",9),e.NdJ("click",function(){return s.closeClaveCupon()}),e._uU(13," Cancelar "),e.qZA()()()()}2&o&&(e.xp6(5),e.hij(" Al introducir la clave registraras el cup\xf3n en su cuenta de ",s.empresa," y se a\xf1adir\xe1 a sus cupones. "),e.xp6(3),e.Q6J("ngIf",s.error))},dependencies:[u.O5,m.x,u.Ts],styles:[".contain-cupon[_ngcontent-%COMP%]{background-color:#000c;position:fixed;inset:0;height:100%;transition:all ease-in .3s;z-index:20}.cupon[_ngcontent-%COMP%]{transform:scale(1);transition:all ease-in .3s}"]})}return n})();function j(n,p){1&n&&e._UZ(0,"cupones-card",9),2&n&&e.Q6J("cupon",p.$implicit)}function I(n,p){if(1&n){const t=e.EpF();e.TgZ(0,"cupones-clave-cupon",10),e.NdJ("showClaveCupon",function(s){e.CHM(t);const c=e.oxw();return e.KtG(c.closeClaveCupon(s))}),e.qZA()}}const L=[{path:"",component:(()=>{class n{get cupones(){return this.cuponesService.cupones}constructor(t,o,s){this.rutaEmpresa=t,this.cuponesService=o,this.authService=s,this._user=new d.w0,this.showClaveCupon=!1,this.showCuponValido=!1}ngOnInit(){this.getUser()}ngOnDestroy(){this._user.unsubscribe(),this.cuponesService.resetCupones()}toggleClaveCupon(){this.showClaveCupon=!this.showClaveCupon}closeClaveCupon(t){this.showClaveCupon=t}getUser(){this._user=this.authService.user.subscribe(t=>{t&&this.getCupones(+t.idRol)})}getCupones(t){this.cuponesService.getCupones(t).subscribe()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(r.e),e.Y36(v),e.Y36(f.e))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-cupones-layout"]],decls:15,vars:2,consts:[[1,"flex","justify-center"],[1,"container"],[1,"p-3"],[1,"flex","items-center","justify-end","gap-5","mb-5"],[1,"flex","justify-between","mb-5","items-center"],["typeButton","primary",3,"click"],[1,"grid","grid-cols-1","lg:grid-cols-2","xl:grid-cols-3","gap-3"],["class","h-full",3,"cupon",4,"ngFor","ngForOf"],[3,"showClaveCupon",4,"ngIf"],[1,"h-full",3,"cupon"],[3,"showClaveCupon"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"shared-carrito")(5,"shared-auth-button"),e.qZA(),e.TgZ(6,"div")(7,"div",4)(8,"h3"),e._uU(9,"Mis Cupones"),e.qZA(),e.TgZ(10,"shared-botones",5),e.NdJ("click",function(){return s.toggleClaveCupon()}),e._uU(11," Agregar Cup\xf3n "),e.qZA()()(),e.TgZ(12,"div",6),e.YNc(13,j,1,1,"cupones-card",7),e.qZA(),e.YNc(14,I,1,0,"cupones-clave-cupon",8),e.qZA()()()),2&o&&(e.xp6(13),e.Q6J("ngForOf",s.cupones),e.xp6(1),e.Q6J("ngIf",s.showClaveCupon))},dependencies:[u.sg,u.O5,b.o,m.x,T.n,w,S]})}return n})()}];let O=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(L),h.Bz]})}return n})();var Y=i(6208);let J=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.ez,O,Y.m]})}return n})()}}]);