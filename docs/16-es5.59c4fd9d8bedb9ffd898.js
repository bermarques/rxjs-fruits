function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"lJ+N":function(e,n,t){"use strict";t.r(n),t.d(n,"SkipLastModule",(function(){return C}));var i=t("iInd"),a=function e(){_classCallCheck(this,e),this.fruits=["apple","apple","banana","apple","banana"],this.expectedFruits=["apple","apple","banana"],this.code='const fruits = from([\n        "apple",\n        "apple",\n        "banana",\n        "apple",\n        "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2},c=t("8Y7J"),o=t("VIrA"),s=t("TSSN"),r=t("SVse"),b=t("dJsq"),p=t("uzYf");function u(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.oc(2,"Auf die letzten zwei Fr\xfcchte k\xf6nnen wir verzichten."),c.Mb(),c.Nb(3,"p"),c.oc(4,"Der "),c.Nb(5,"code",4),c.oc(6,"skipLast"),c.Mb(),c.oc(7,"-Operator erm\xf6glicht uns das Ignorieren von den letzten Fr\xfcchten. "),c.Nb(8,"a",5),c.oc(9,"(Mehr Infos zu skipLast)"),c.Mb(),c.Mb(),c.Mb()),2&e){c.Zb();var t=c.gc(8);c.zb(5),c.ec("appTooltip",t)}}function l(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.oc(2,"We can do without the last two fruits."),c.Mb(),c.Nb(3,"p"),c.oc(4,"The "),c.Nb(5,"code",4),c.oc(6,"skipLast"),c.Mb(),c.oc(7," operator enables us to ignore the last fruits. "),c.Nb(8,"a",5),c.oc(9,"(Learn more about skipLast)"),c.Mb(),c.Mb(),c.Mb()),2&e){c.Zb();var t=c.gc(8);c.zb(5),c.ec("appTooltip",t)}}function f(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.oc(2,"\u6211\u4eec\u4e0d\u9700\u8981\u6700\u540e\u4e24\u4e2a\u6c34\u679c\u3002"),c.Mb(),c.Nb(3,"p"),c.Nb(4,"code",4),c.oc(5,"skipLast"),c.Mb(),c.oc(6," \u8fd0\u7b97\u7b26\u80fd\u591f\u8df3\u8fc7\u6700\u540e\u7684\u6c34\u679c\u3002 "),c.Nb(7,"a",5),c.oc(8,"\uff08\u4e86\u89e3\u5173\u4e8e skipLast \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),c.Mb(),c.Mb(),c.Mb()),2&e){c.Zb();var t=c.gc(8);c.zb(4),c.ec("appTooltip",t)}}function h(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.oc(2,"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u043e\u0439\u0442\u0438\u0441\u044c \u0431\u0435\u0437 \u0434\u0432\u0443\u0445 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0444\u0440\u0443\u043a\u0442\u043e\u0432."),c.Mb(),c.Nb(3,"p"),c.oc(4,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "),c.Nb(5,"code",4),c.oc(6,"skipLast"),c.Mb(),c.oc(7," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043c \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0444\u0440\u0443\u043a\u0442\u044b. "),c.Nb(8,"a",5),c.oc(9,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e skipLast)"),c.Mb(),c.Mb(),c.Mb()),2&e){c.Zb();var t=c.gc(8);c.zb(5),c.ec("appTooltip",t)}}var d,g,v,L=[{path:"",component:(d=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="skipLast",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),d.\u0275fac=function(e){return new(e||d)(c.Kb(o.a),c.Kb(s.d))},d.\u0275cmp=c.Eb({type:d,selectors:[["app-skip-last"]],decls:13,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/skipLast","target","_blank"]],template:function(e,n){1&e&&(c.Nb(0,"h3"),c.oc(1),c.ac(2,"translate"),c.Mb(),c.nc(3,u,10,1,"div",0),c.nc(4,l,10,1,"div",0),c.nc(5,f,9,1,"div",0),c.nc(6,h,10,1,"div",0),c.Nb(7,"div",1,2),c.Nb(9,"pre"),c.oc(10,"        "),c.Lb(11,"code",3),c.oc(12,"\n    "),c.Mb(),c.Mb()),2&e&&(c.zb(1),c.rc("",c.bc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.zb(2),c.ec("ngIf","de"===n.currentLanguage),c.zb(1),c.ec("ngIf","en"===n.currentLanguage),c.zb(1),c.ec("ngIf","zh_CN"===n.currentLanguage),c.zb(1),c.ec("ngIf","ru"===n.currentLanguage),c.zb(5),c.ec("highlight",n.skipLastCode))},directives:[r.j,b.b,p.a],pipes:[s.c],styles:[""]}),d)}],N=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:g}),g.\u0275inj=c.Hb({factory:function(e){return new(e||g)},imports:[[i.d.forChild(L)],i.d]}),g),k=t("PCNd"),C=((v=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:v}),v.\u0275inj=c.Hb({factory:function(e){return new(e||v)},imports:[[k.a,N]]}),v)}}]);