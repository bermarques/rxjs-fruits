function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{eyxc:function(e,n,t){"use strict";t.r(n),t.d(n,"DistinctuntilchangedModule",(function(){return v}));var i=t("tyNb"),a=function e(){_classCallCheck(this,e),this.fruits=["banana","apple","apple","banana","banana"],this.expectedFruits=["banana","apple","banana"],this.code='const fruits = from([\n    "banana",\n    "apple",\n    "apple",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe({\n    next: fruit => toConveyorBelt(fruit)\n});\n',this.minPositionLineNumber=8,this.positionColumnNumber=2},r=t("fXoL"),c=t("VIrA"),s=t("sYmb"),o=t("ofXK"),l=t("OtPg"),b=t("uzYf");function u(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.mc(2,"Eins nach dem anderen! Einige Fr\xfcchte kommen doppelt hintereinander. Wir brauchen allerdings die Fr\xfcchte abwechselnd."),r.Mb(),r.Nb(3,"p"),r.mc(4,"In unserem Fall hilft uns der "),r.Nb(5,"code",4),r.mc(6,"distinctUntilChanged"),r.Mb(),r.mc(7,"-Operator. Er verhindert, dass in unserem Datenstrom doppelte Fr\xfcchte direkt hintereinander geliefert werden. "),r.Nb(8,"a",5),r.mc(9,"(Mehr Infos zu distinctUntilChanged)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();var t=r.ec(6);r.Ab(5),r.cc("appTooltip",t)}}function p(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.mc(2,"One after the other! Some fruits come twice in a row. However, we need the fruits alternately."),r.Mb(),r.Nb(3,"p"),r.mc(4,"In our case, the "),r.Nb(5,"code",4),r.mc(6,"distinctUntilChanged"),r.Mb(),r.mc(7," operator helps us. It prevents duplicate fruits from being delivered one after the other in our data stream. "),r.Nb(8,"a",5),r.mc(9,"(Learn more about distinctUntilChanged)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();var t=r.ec(6);r.Ab(5),r.cc("appTooltip",t)}}var h,d,f,g=[{path:"",component:(h=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="distinctUntilChanged",this.distinctUntilChangedCode="\n  of(1, 1, 2, 1, 3, 4).pipe(\n    distinctUntilChanged()\n  ).subscribe({\n    next: data => console.log(data)\n  });\n\n  // Logs:\n  // 1\n  // 2\n  // 1\n  // 3\n  // 4\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),h.\u0275fac=function(e){return new(e||h)(r.Kb(c.a),r.Kb(s.d))},h.\u0275cmp=r.Eb({type:h,selectors:[["app-distinctuntilchanged"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/distinctUntilChanged","target","_blank"]],template:function(e,n){1&e&&(r.Nb(0,"h3"),r.mc(1),r.ac(2,"translate"),r.Mb(),r.lc(3,u,10,1,"div",0),r.lc(4,p,10,1,"div",0),r.Nb(5,"div",1,2),r.Nb(7,"pre"),r.mc(8,"        "),r.Lb(9,"code",3),r.mc(10,"\n    "),r.Mb(),r.Mb()),2&e&&(r.Ab(1),r.pc("",r.bc(2,5,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),r.Ab(2),r.cc("ngIf","de"===n.currentLanguage),r.Ab(1),r.cc("ngIf","en"===n.currentLanguage),r.Ab(5),r.cc("highlight",n.distinctUntilChangedCode))},directives:[o.j,l.b,b.a],pipes:[s.c],styles:[""]}),h)}],m=((d=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:d}),d.\u0275inj=r.Hb({factory:function(e){return new(e||d)},imports:[[i.b.forChild(g)],i.b]}),d),C=t("PCNd"),v=((f=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:f}),f.\u0275inj=r.Hb({factory:function(e){return new(e||f)},imports:[[C.a,m]]}),f)}}]);