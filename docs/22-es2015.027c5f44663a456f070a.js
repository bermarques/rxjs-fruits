(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{S4iM:function(n,e,t){"use strict";t.r(e),t.d(e,"TakeModule",(function(){return v}));var a=t("PCNd"),i=t("iInd");class c{constructor(){this.fruits=["banana","banana","banana","banana"],this.expectedFruits=["banana","banana"],this.code='const fruits = from([\n    "banana",\n    "banana",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));',this.minPositionLineNumber=7,this.positionColumnNumber=2}}var s=t("8Y7J"),r=t("VIrA"),o=t("TSSN"),b=t("SVse"),u=t("dJsq"),p=t("uzYf");function g(n,e){if(1&n&&(s.Pb(0,"div"),s.Pb(1,"p"),s.qc(2,"Das ist zu viel des Guten!"),s.Ob(),s.Pb(3,"p"),s.qc(4,"Verwende den "),s.Pb(5,"code",4),s.qc(6,"take"),s.Ob(),s.qc(7," Operator, um nur so viel Bananen auf das Flie\xdfband zu legen, wie es im Rezept vorgegeben ist. "),s.Pb(8,"a",5),s.qc(9,"(Mehr Infos zu take)"),s.Ob(),s.Ob(),s.Ob()),2&n){s.bc();const n=s.ic(7);s.Bb(5),s.gc("appTooltip",n)}}function h(n,e){if(1&n&&(s.Pb(0,"div"),s.Pb(1,"p"),s.qc(2,"That is too much of a good thing!"),s.Ob(),s.Pb(3,"p"),s.qc(4,"Use the "),s.Pb(5,"code",4),s.qc(6,"take"),s.Ob(),s.qc(7," operator to put only as much bananas on the conveyor belt as is specified in the recipe. "),s.Pb(8,"a",5),s.qc(9,"(Learn more about take)"),s.Ob(),s.Ob(),s.Ob()),2&n){s.bc();const n=s.ic(7);s.Bb(5),s.gc("appTooltip",n)}}function d(n,e){if(1&n&&(s.Pb(0,"div"),s.Pb(1,"p"),s.qc(2,"\u8fd8\u4e0d\u9519\uff01"),s.Ob(),s.Pb(3,"p"),s.qc(4,"\u4f7f\u7528 "),s.Pb(5,"code",4),s.qc(6,"take"),s.Ob(),s.qc(7," \u64cd\u4f5c\u7b26\u5c06\u98df\u8c31\u4e2d\u6307\u5b9a\u7684\u9999\u8549\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002 "),s.Pb(8,"a",5),s.qc(9,"\uff08\u4e86\u89e3\u5173\u4e8e take \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),s.Ob(),s.Ob(),s.Ob()),2&n){s.bc();const n=s.ic(7);s.Bb(5),s.gc("appTooltip",n)}}const l=[{path:"",component:(()=>{class n{constructor(n,e){this.exerciseService=n,this.translateService=e,this.task="take",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(s.Mb(r.a),s.Mb(o.d))},n.\u0275cmp=s.Gb({type:n,selectors:[["app-take"]],decls:12,vars:8,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/take","target","_blank"]],template:function(n,e){1&n&&(s.Pb(0,"h3"),s.qc(1),s.cc(2,"translate"),s.Ob(),s.pc(3,g,10,1,"div",0),s.pc(4,h,10,1,"div",0),s.pc(5,d,10,1,"div",0),s.Pb(6,"div",1,2),s.Pb(8,"pre"),s.qc(9,"        "),s.Nb(10,"code",3),s.qc(11,"\n    "),s.Ob(),s.Ob()),2&n&&(s.Bb(1),s.tc("",s.dc(2,6,"EXERCISES.EXERCISETITLE"),": ",e.task,""),s.Bb(2),s.gc("ngIf","de"===e.currentLanguage),s.Bb(1),s.gc("ngIf","en"===e.currentLanguage),s.Bb(1),s.gc("ngIf","zh_CN"===e.currentLanguage),s.Bb(5),s.gc("highlight",e.takeCode))},directives:[b.j,u.b,p.a],pipes:[o.c],styles:[""]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(e){return new(e||n)},imports:[[i.d.forChild(l)],i.d]}),n})(),v=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(e){return new(e||n)},imports:[[a.a,f]]}),n})()}}]);