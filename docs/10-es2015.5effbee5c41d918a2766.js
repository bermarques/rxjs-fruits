(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{LCGD:function(e,n,a){"use strict";a.r(n),a.d(n,"MergeModule",function(){return N});var t=a("iInd");class r{constructor(){this.fruits=["apple","apple","old-apple","apple","old-apple","banana","old-banana","old-banana","banana","banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code='const apples = from([\n    "apple",\n    "apple",\n    "old-apple",\n    "apple",\n    "old-apple"]);\n\nconst bananas = from([\n    "banana",\n    "old-banana",\n    "old-banana",\n    "banana",\n    "banana"]);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=14,this.positionColumnNumber=1}}var c=a("8Y7J"),i=a("VIrA"),o=a("TSSN"),s=a("SVse"),b=a("dJsq"),p=a("uzYf");function u(e,n){if(1&e&&(c.Ob(0,"div"),c.Ob(1,"p"),c.qc(2,"Jetzt m\xfcssen wir zwei Lieferungen Zusammenfassen."),c.Nb(),c.Ob(3,"p"),c.qc(4,"Unser Fr\xfcchte Lieferant musste uns die Fr\xfcchte separat liefern. Die "),c.Ob(5,"code",4),c.qc(6,"merge"),c.Nb(),c.qc(7,"-Funktion kann unterschiedliche Observables zu einem Observable vereinen. Anschlie\xdfend k\xf6nnen wir dann mit der Pipe-Funktion, nur frische Fr\xfcchte auf das Flie\xdfband legen. "),c.Ob(8,"a",5),c.qc(9,"(Mehr Infos zu merge)"),c.Nb(),c.Nb(),c.Nb()),2&e){c.ac();const e=c.hc(9);c.Bb(5),c.fc("appTooltip",e)}}function l(e,n){if(1&e&&(c.Ob(0,"div"),c.Ob(1,"p"),c.qc(2,"Now we have to combine two deliveries."),c.Nb(),c.Ob(3,"p"),c.qc(4,"Our fruit supplier had to deliver the fruit to us separately. The "),c.Ob(5,"code",4),c.qc(6,"merge"),c.Nb(),c.qc(7," function can combine different observables into one observable. Then we can use the pipe function to put only fresh fruit on the conveyor belt. "),c.Ob(8,"a",5),c.qc(9,"(Learn more about merge)"),c.Nb(),c.Nb(),c.Nb()),2&e){c.ac();const e=c.hc(9);c.Bb(5),c.fc("appTooltip",e)}}function d(e,n){if(1&e&&(c.Ob(0,"div"),c.Ob(1,"p"),c.qc(2,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u5408\u5e76\u4e24\u4e2a\u4f9b\u5e94\u5546\u3002"),c.Nb(),c.Ob(3,"p"),c.qc(4,"\u6c34\u679c\u4f9b\u5e94\u5546\u5fc5\u987b\u5355\u72ec\u9001\u8d27\u7ed9\u6211\u4eec\u3002 "),c.Ob(5,"code",4),c.qc(6,"merge"),c.Nb(),c.qc(7," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684 observable \u5408\u5e76\u4e3a\u4e00\u4e2a observable \u3002\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 pipe \u51fd\u6570\u53ea\u628a\u65b0\u9c9c\u7684\u6c34\u679c\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002 "),c.Ob(8,"a",5),c.qc(9,"\uff08\u4e86\u89e3\u5173\u4e8e merge \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),c.Nb(),c.Nb(),c.Nb()),2&e){c.ac();const e=c.hc(9);c.Bb(5),c.fc("appTooltip",e)}}function f(e,n){if(1&e&&(c.Ob(0,"div"),c.Ob(1,"p"),c.qc(2,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0434\u0432\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438."),c.Nb(),c.Ob(3,"p"),c.qc(4,"\u041d\u0430\u0448 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0444\u0440\u0443\u043a\u0442\u043e\u0432 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u043c \u0444\u0440\u0443\u043a\u0442\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u0424\u0443\u043d\u043a\u0446\u0438\u044f "),c.Ob(5,"code",4),c.qc(6,"merge"),c.Nb(),c.qc(7," \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0435 \u0432 \u043e\u0434\u043d\u0443 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u0443\u044e. \u0417\u0430\u0442\u0435\u043c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \xab\u0442\u0440\u0443\u0431\u0430\xbb, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u0435\u0436\u0438\u0435 \u0444\u0440\u0443\u043a\u0442\u044b. "),c.Ob(8,"a",5),c.qc(9,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e merge)"),c.Nb(),c.Nb(),c.Nb()),2&e){c.ac();const e=c.hc(9);c.Bb(5),c.fc("appTooltip",e)}}function g(e,n){if(1&e&&(c.Ob(0,"div"),c.Ob(1,"p"),c.qc(2,"Ahora tenemos que combinar dos entregas."),c.Nb(),c.Ob(3,"p"),c.qc(4,"Nuestro proveedor de fruta tuvo que entregarnos la fruta por separado. La funci\xf3n "),c.Ob(5,"code",4),c.qc(6,"merge"),c.Nb(),c.qc(7," puede combinar diferentes observables en un observables. Entonces podemos usar la funci\xf3n pipe para poner \xfanicamente fruta fresca en la cinta transportadora. "),c.Ob(8,"a",5),c.qc(9,"(Aprende m\xe1s sobre merge)"),c.Nb(),c.Nb(),c.Nb()),2&e){c.ac();const e=c.hc(9);c.Bb(5),c.fc("appTooltip",e)}}const h=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="merge",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new r),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(c.Lb(i.a),c.Lb(o.d))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-merge"]],decls:14,vars:10,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/index/function/merge","target","_blank"]],template:function(e,n){1&e&&(c.Ob(0,"h3"),c.qc(1),c.bc(2,"translate"),c.Nb(),c.pc(3,u,10,1,"div",0),c.pc(4,l,10,1,"div",0),c.pc(5,d,10,1,"div",0),c.pc(6,f,10,1,"div",0),c.pc(7,g,10,1,"div",0),c.Ob(8,"div",1,2),c.Ob(10,"pre"),c.qc(11,"        "),c.Mb(12,"code",3),c.qc(13,"\n    "),c.Nb(),c.Nb()),2&e&&(c.Bb(1),c.tc("",c.cc(2,8,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Bb(2),c.fc("ngIf","de"===n.currentLanguage),c.Bb(1),c.fc("ngIf","en"===n.currentLanguage),c.Bb(1),c.fc("ngIf","zh_CN"===n.currentLanguage),c.Bb(1),c.fc("ngIf","ru"===n.currentLanguage),c.Bb(1),c.fc("ngIf","es"===n.currentLanguage),c.Bb(5),c.fc("highlight",n.mergeCode))},directives:[s.j,b.b,p.a],pipes:[o.c],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(n){return new(n||e)},imports:[[t.d.forChild(h)],t.d]}),e})();var v=a("PCNd");let N=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(n){return new(n||e)},imports:[[v.a,m]]}),e})()}}]);