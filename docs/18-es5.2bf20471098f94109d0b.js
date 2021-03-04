!function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KdnK:function(i,t,r){"use strict";r.r(t),r.d(t,"SkipModule",(function(){return y}));var c=r("iInd"),p=function e(){n(this,e),this.fruits=["apple","apple","banana","apple"],this.expectedFruits=["banana","apple"],this.code='const fruits = from([\n    "apple",\n    "apple",\n    "banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=7,this.positionColumnNumber=2},a=r("8Y7J"),o=r("VIrA"),s=r("TSSN"),b=r("SVse"),u=r("dJsq"),f=r("uzYf");function d(e,n){if(1&e&&(a.Mb(0,"div"),a.Mb(1,"p"),a.pc(2,"Auf die ersten zwei Fr\xfcchte k\xf6nnen wir verzichten."),a.Lb(),a.Mb(3,"p"),a.pc(4,"Der "),a.Mb(5,"code",4),a.pc(6,"skip"),a.Lb(),a.pc(7,"-Operator erm\xf6glicht uns das \xdcberspringen unn\xf6tiger Fr\xfcchte. "),a.Mb(8,"a",5),a.pc(9,"(Mehr Infos zu skip)"),a.Lb(),a.Lb(),a.Lb()),2&e){a.Yb();var i=a.fc(9);a.zb(5),a.dc("appTooltip",i)}}function l(e,n){if(1&e&&(a.Mb(0,"div"),a.Mb(1,"p"),a.pc(2,"We can do without the first two fruits. The "),a.Mb(3,"code",4),a.pc(4,"skip"),a.Lb(),a.pc(5," operator enables us to skip unnecessary fruit. "),a.Mb(6,"a",5),a.pc(7,"(Learn more about skip)"),a.Lb(),a.Lb(),a.Lb()),2&e){a.Yb();var i=a.fc(9);a.zb(3),a.dc("appTooltip",i)}}function h(e,n){if(1&e&&(a.Mb(0,"div"),a.Mb(1,"p"),a.pc(2,"\u6211\u4eec\u4e0d\u9700\u8981\u524d\u4e24\u4e2a\u6c34\u679c\u3002 "),a.Mb(3,"code",4),a.pc(4,"skip"),a.Lb(),a.pc(5," \u64cd\u4f5c\u7b26\u80fd\u591f\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u6c34\u679c\u3002 "),a.Mb(6,"a",5),a.pc(7,"\uff08\u4e86\u89e3\u5173\u4e8e skip \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),a.Lb(),a.Lb(),a.Lb()),2&e){a.Yb();var i=a.fc(9);a.zb(3),a.dc("appTooltip",i)}}function g(e,n){if(1&e&&(a.Mb(0,"div"),a.Mb(1,"p"),a.pc(2,"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u043e\u0439\u0442\u0438\u0441\u044c \u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u044b\u0445 \u0434\u0432\u0443\u0445 \u043f\u043b\u043e\u0434\u043e\u0432. \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "),a.Mb(3,"code",4),a.pc(4,"skip"),a.Lb(),a.pc(5," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043c \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b. "),a.Mb(6,"a",5),a.pc(7,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e skip)"),a.Lb(),a.Lb(),a.Lb()),2&e){a.Yb();var i=a.fc(9);a.zb(3),a.dc("appTooltip",i)}}function L(e,n){if(1&e&&(a.Mb(0,"div"),a.Mb(1,"p"),a.pc(2,"Podemos hacerlo sin las primeras dos frutas. El operador "),a.Mb(3,"code",4),a.pc(4,"skip"),a.Lb(),a.pc(5," nos permite omitir fruta innecesaria. "),a.Mb(6,"a",5),a.pc(7,"(Aprende m\xe1s sobre skip)"),a.Lb(),a.Lb(),a.Lb()),2&e){a.Yb();var i=a.fc(9);a.zb(3),a.dc("appTooltip",i)}}var v,M,k,m=[{path:"",component:(v=function(){function i(e,t){n(this,i),this.exerciseService=e,this.translateService=t,this.exerciseTitle="skip",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}var t,r,c;return t=i,(r=[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new p),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}])&&e(t.prototype,r),c&&e(t,c),i}(),v.\u0275fac=function(e){return new(e||v)(a.Jb(o.a),a.Jb(s.d))},v.\u0275cmp=a.Db({type:v,selectors:[["app-skip"]],decls:14,vars:10,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/skip","target","_blank"]],template:function(e,n){1&e&&(a.Mb(0,"h3"),a.pc(1),a.Zb(2,"translate"),a.Lb(),a.oc(3,d,10,1,"div",0),a.oc(4,l,8,1,"div",0),a.oc(5,h,8,1,"div",0),a.oc(6,g,8,1,"div",0),a.oc(7,L,8,1,"div",0),a.Mb(8,"div",1,2),a.Mb(10,"pre"),a.pc(11,"        "),a.Kb(12,"code",3),a.pc(13,"\n    "),a.Lb(),a.Lb()),2&e&&(a.zb(1),a.sc("",a.ac(2,8,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),a.zb(2),a.dc("ngIf","de"===n.currentLanguage),a.zb(1),a.dc("ngIf","en"===n.currentLanguage),a.zb(1),a.dc("ngIf","zh_CN"===n.currentLanguage),a.zb(1),a.dc("ngIf","ru"===n.currentLanguage),a.zb(1),a.dc("ngIf","es"===n.currentLanguage),a.zb(5),a.dc("highlight",n.skipCode))},directives:[b.j,u.b,f.a],pipes:[s.c],styles:[""]}),v)}],w=((M=function e(){n(this,e)}).\u0275mod=a.Hb({type:M}),M.\u0275inj=a.Gb({factory:function(e){return new(e||M)},imports:[[c.d.forChild(m)],c.d]}),M),z=r("PCNd"),y=((k=function e(){n(this,e)}).\u0275mod=a.Hb({type:k}),k.\u0275inj=a.Gb({factory:function(e){return new(e||k)},imports:[[z.a,w]]}),k)}}])}();