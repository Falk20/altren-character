(function(){"use strict";var e={6533:function(e,t,n){var a=n(9242),i=n(3396),o=n(7718),l=n(9271);function r(e,t,n,a,r,s){const u=(0,i.up)("AltNavbar"),c=(0,i.up)("AltSideMenu"),d=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o.q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u),(0,i.Wm)(c),(0,i.Wm)(l.O,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d)])),_:1})])),_:1})}var s=n(7139),u=n(8796),c=n(9156),d=n(1556);function m(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(u.L,{color:"primary",density:"compact"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(c.g,{onClick:e.toggleSideMenu},null,8,["onClick"])])),append:(0,i.w5)((()=>[])),default:(0,i.w5)((()=>[(0,i.Wm)(d.o,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.$route.meta.title),1)])),_:1})])),_:1})}var h=n(65),p=(0,i.aZ)({name:"AltNavbar",methods:{...(0,h.OI)(["toggleSideMenu"])}}),f=n(89);const g=(0,f.Z)(p,[["render",m]]);var v=g,M=n(8649),w=n(820),y=n(7033);function _(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(y.V,{modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),temporary:""},{default:(0,i.w5)((()=>[(0,i.Wm)(M.i,{density:"compact",nav:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.pageList,((t,n)=>((0,i.wg)(),(0,i.j4)(w.l,{key:n,to:{name:t.name},title:e.getPageTitle(t)},null,8,["to","title"])))),128))])),_:1})])),_:1},8,["modelValue"])}var P=(0,i.aZ)({name:"AltSideMenu",computed:{...(0,h.Se)(["sideMenu"]),drawer:{get(){return this.sideMenu},set(e){this.changeSideMenu(e)}},pageList(){return this.$router.getRoutes()}},methods:{...(0,h.OI)(["changeSideMenu"]),getPageTitle(e){return e?.meta?.title??""}}});const b=(0,f.Z)(P,[["render",_]]);var k=b,C=(0,i.aZ)({name:"App",components:{AltNavbar:v,AltSideMenu:k},data(){return{}}});const W=(0,f.Z)(C,[["render",r]]);var x=W,T=n(678),H=n(3369);function j(e,t,n,a,o,l){const r=(0,i.up)("AltConditions"),s=(0,i.up)("AltThreshold"),u=(0,i.up)("AltFatigue"),c=(0,i.up)("AltHits"),d=(0,i.up)("AltMana");return(0,i.wg)(),(0,i.j4)(H.K,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r),(0,i.Wm)(s),(0,i.Wm)(u),(0,i.Wm)(c),(0,i.Wm)(d)])),_:1})}var A=n(7423),S=n(6824),V=n(8521),Z=n(3289);const I={class:"ml-3"},O=(0,i._)("span",null,"Эффекты",-1),D={class:"mx-3 d-flex flex-wrap"},U={key:1,class:"text-caption"};function z(e,t,n,a,o,l){const r=(0,i.up)("EditForm");return(0,i.wg)(),(0,i.j4)(S.o,{class:"pa-0 ma-0 mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i._)("h3",I,[O,(0,i.Wm)(A.T,{variant:"text",icon:"mdi-pencil",onClick:t[0]||(t[0]=t=>e.editDialog=!0)})]),(0,i._)("div",D,[e.haveAnyCondition?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[e.haveHPCondition?((0,i.wg)(),(0,i.j4)(Z.t,{key:0,class:"mr-2",color:e.HPIcon.color},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.HPIcon.icon),1)])),_:1},8,["color"])):(0,i.kq)("",!0),e.haveMPCondition?((0,i.wg)(),(0,i.j4)(Z.t,{key:1,class:"mr-2",color:e.MPIcon.color},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.MPIcon.icon),1)])),_:1},8,["color"])):(0,i.kq)("",!0),e.haveThresholdCondition?((0,i.wg)(),(0,i.j4)(Z.t,{key:2,class:"mr-2",color:e.thresholdIcon.color},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.thresholdIcon.icon),1)])),_:1},8,["color"])):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("p",U,"Нет активных эффектов"))]),(0,i.Wm)(r,{editDialog:e.editDialog,"onUpdate:editDialog":t[1]||(t[1]=t=>e.editDialog=t)},null,8,["editDialog"])])),_:1})])),_:1})}var N=n(3701),F=n(6572),E=n(1888),G=n(612),K=n(9234),q=n(6481),R=n(5250);const L=(0,i.Uk)(" Эффекты "),$=(0,i._)("pre",{class:"text-caption text-center"},"HP",-1),B={class:"text-caption text-center"},J=(0,i._)("pre",{class:"text-caption text-center"},"Порог",-1);function Y(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(G.B,{modelValue:e.dialogModel,"onUpdate:modelValue":t[4]||(t[4]=t=>e.dialogModel=t),fullscreen:"",scrollable:""},{default:(0,i.w5)((()=>[(0,i.Wm)(N._,null,{default:(0,i.w5)((()=>[(0,i.Wm)(R.iv,{color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(A.T,{icon:"mdi-close",onClick:t[0]||(t[0]=t=>e.dialogModel=!1)}),(0,i.Wm)(F.E,null,{default:(0,i.w5)((()=>[L])),_:1}),(0,i.Wm)(K.C)])),_:1}),(0,i.Wm)(E.Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(H.K,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i.Wm)(S.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"mt-5"},{default:(0,i.w5)((()=>[(0,i.Wm)(q.R,{modelValue:e.modelHP,"onUpdate:modelValue":t[1]||(t[1]=t=>e.modelHP=t),min:-5,max:5,step:1,"show-ticks":"always","thumb-label":"always","hide-details":!0},null,8,["modelValue"]),$])),_:1})])),_:1}),(0,i.Wm)(S.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"mt-5"},{default:(0,i.w5)((()=>[(0,i.Wm)(q.R,{modelValue:e.modelMP,"onUpdate:modelValue":t[2]||(t[2]=t=>e.modelMP=t),min:-10,max:10,step:1,"show-ticks":"always","thumb-label":"always","hide-details":!0},null,8,["modelValue"]),(0,i._)("pre",B,(0,s.zw)(e.mpTitle),1)])),_:1})])),_:1}),(0,i.Wm)(S.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"mt-5"},{default:(0,i.w5)((()=>[(0,i.Wm)(q.R,{modelValue:e.modelThreshold,"onUpdate:modelValue":t[3]||(t[3]=t=>e.modelThreshold=t),min:-10,max:10,step:1,"show-ticks":"always","thumb-label":"always","hide-details":!0},null,8,["modelValue"]),J])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}const{mapGetters:Q,mapMutations:X}=(0,h._p)("character/status");var ee=(0,i.aZ)({name:"AltConditionEditForm",props:{editDialog:Boolean},emits:["update:editDialog"],computed:{mpTitle(){return this.isMage?"MP":"EP"},dialogModel:{get(){return this.editDialog},set(e){this.$emit("update:editDialog",e)}},...Q(["conditionHP","conditionMP","conditionThreshold","isMage"]),modelHP:{get(){return this.conditionHP},set(e){this.setConditionHP(e)}},modelMP:{get(){return this.conditionMP},set(e){this.setConditionMP(e)}},modelThreshold:{get(){return this.conditionThreshold},set(e){this.setConditionThreshold(e)}}},methods:{...X(["setConditionHP","setConditionMP","setConditionThreshold"])}});const te=(0,f.Z)(ee,[["render",Y]]);var ne=te;const{mapGetters:ae}=(0,h._p)("character/status");var ie=(0,i.aZ)({name:"AltFatigue",components:{EditForm:ne},data(){return{editDialog:!1}},computed:{...ae(["conditionHP","conditionMP","conditionThreshold","isMage"]),haveHPCondition(){return 0!==this.conditionHP},haveMPCondition(){return 0!==this.conditionMP},haveThresholdCondition(){return 0!==this.conditionThreshold},HPIcon(){return this.haveHPCondition?this.conditionHP>0?{icon:"mdi-heart",color:"red"}:{icon:"mdi-heart-broken",color:"black"}:null},MPIcon(){return this.haveMPCondition?this.isMage?this.conditionMP>0?{icon:"mdi-star-plus",color:"primary"}:{icon:"mdi-star-minus",color:"brown"}:this.conditionMP>0?{icon:"mdi-flash-alert",color:"yellow-darken-1"}:{icon:"mdi-flash-off",color:"purple"}:null},thresholdIcon(){return this.haveThresholdCondition?this.conditionThreshold>0?{icon:"mdi-shield-plus",color:"green"}:{icon:"mdi-shield-off",color:"orange"}:null},haveAnyCondition(){return this.haveHPCondition||this.haveMPCondition||this.haveThresholdCondition}},methods:{}});const oe=(0,f.Z)(ie,[["render",z]]);var le=oe,re=n(5958);const se={class:"ml-3"},ue={class:"d-flex justify-space-between"};function ce(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(S.o,{class:"pa-0 ma-0 mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i._)("h3",se,"HP "+(0,s.zw)(e.HP)+"/"+(0,s.zw)(e.maxHits),1),(0,i._)("div",ue,[(0,i.Wm)(A.T,{variant:"text",icon:"mdi-minus",onClick:e.decrement},null,8,["onClick"]),(0,i.Wm)(re.K,{class:"flex-wrap justify-center",modelValue:e.HP,"onUpdate:modelValue":t[0]||(t[0]=t=>e.HP=t),"empty-icon":"mdi-heart-outline","full-icon":"mdi-heart",length:e.maxHits,color:"error"},null,8,["modelValue","length"]),(0,i.Wm)(A.T,{variant:"text",icon:"mdi-plus",onClick:e.increment},null,8,["onClick"])])])),_:1})])),_:1})}const{mapGetters:de,mapMutations:me}=(0,h._p)("character/status");var he=(0,i.aZ)({name:"AltHits",computed:{...de(["hits","maxHits"]),HP:{get(){return this.hits},set(e){this.setHits(e)}}},methods:{...me(["setHits"]),decrement(){this.hits>0&&this.setHits(this.hits-1)},increment(){this.hits<this.maxHits&&this.setHits(this.hits+1)}}});const pe=(0,f.Z)(he,[["render",ce]]);var fe=pe;const ge={class:"ml-3"},ve={class:"d-flex justify-space-between"};function Me(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(S.o,{class:"pa-0 ma-0 mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i._)("h3",ge,(0,s.zw)(e.title)+" "+(0,s.zw)(e.MP)+"/"+(0,s.zw)(e.maxMana),1),(0,i._)("div",ve,[(0,i.Wm)(A.T,{variant:"text",icon:"mdi-minus",onClick:e.decrement},null,8,["onClick"]),(0,i.Wm)(re.K,{class:"flex-wrap justify-center",modelValue:e.MP,"onUpdate:modelValue":t[0]||(t[0]=t=>e.MP=t),"empty-icon":e.emptyIcon,"full-icon":e.fullIcon,length:e.maxMana,color:e.color},null,8,["modelValue","empty-icon","full-icon","length","color"]),(0,i.Wm)(A.T,{variant:"text",icon:"mdi-plus",onClick:e.increment},null,8,["onClick"])])])),_:1})])),_:1})}const{mapGetters:we,mapMutations:ye}=(0,h._p)("character/status");var _e=(0,i.aZ)({name:"AltMana",computed:{...we(["mana","maxMana","isMage"]),title(){return this.isMage?"MP":"EP"},emptyIcon(){return this.isMage?"mdi-star-outline":"mdi-flash-outline"},fullIcon(){return this.isMage?"mdi-star":"mdi-flash"},color(){return this.isMage?"primary":"yellow-darken-1"},MP:{get(){return this.mana},set(e){this.setMana(e)}}},methods:{...ye(["setMana"]),decrement(){this.mana>0&&this.setMana(this.mana-1)},increment(){this.mana<this.maxMana&&this.setMana(this.mana+1)}}});const Pe=(0,f.Z)(_e,[["render",Me]]);var be=Pe;const ke={class:"ml-3"},Ce=(0,i.Uk)(" mdi-shield ");function We(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(S.o,{class:"pa-0 ma-0 mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i._)("h3",ke,[(0,i.Uk)(" Порог "+(0,s.zw)(e.calcThreshold)+" ",1),(0,i.Wm)(Z.t,{color:e.color},{default:(0,i.w5)((()=>[Ce])),_:1},8,["color"]),0===e.calcThreshold?((0,i.wg)(),(0,i.iD)("span",{key:0,class:(0,s.C_)(`text-${e.color}`)},"ТОБИ ПИЗДА",2)):(0,i.kq)("",!0)])])),_:1})])),_:1})}const{mapGetters:xe}=(0,h._p)("character/status");var Te=(0,i.aZ)({name:"AltThreshold",computed:{...xe(["threshold","fatigue"]),calcThreshold(){return this.threshold-this.fatigue},color(){return 0===this.fatigue?"teal":0===this.calcThreshold?"red":"orange"}}});const He=(0,f.Z)(Te,[["render",We]]);var je=He;const Ae=(0,i._)("pre",{class:"text-caption text-center"},"Усталость",-1);function Se(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(S.o,{class:"pa-0 ma-0 mb-3 mt-7"},{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"pa-0"},{default:(0,i.w5)((()=>[(0,i.Wm)(q.R,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),min:0,max:e.threshold,step:1,"show-ticks":"always","thumb-label":"always","hide-details":!0},{prepend:(0,i.w5)((()=>[(0,i.Wm)(A.T,{size:"small",variant:"text",icon:"mdi-minus",onClick:e.decrement},null,8,["onClick"])])),append:(0,i.w5)((()=>[(0,i.Wm)(A.T,{size:"small",variant:"text",icon:"mdi-plus",onClick:e.increment},null,8,["onClick"])])),_:1},8,["modelValue","max"]),Ae])),_:1})])),_:1})}const{mapGetters:Ve,mapMutations:Ze}=(0,h._p)("character/status");var Ie=(0,i.aZ)({name:"AltFatigue",computed:{...Ve(["fatigue","threshold"]),value:{get(){return this.fatigue},set(e){this.setFatigue(e)}}},methods:{...Ze(["setFatigue"]),decrement(){this.fatigue>0&&this.setFatigue(this.fatigue-1)},increment(){this.fatigue<this.threshold&&this.setFatigue(this.fatigue+1)}}});const Oe=(0,f.Z)(Ie,[["render",Se]]);var De=Oe,Ue=(0,i.aZ)({name:"StatusView",components:{AltConditions:le,AltHits:fe,AltMana:be,AltThreshold:je,AltFatigue:De}});const ze=(0,f.Z)(Ue,[["render",j]]);var Ne=ze;function Fe(e,t,n,a,o,l){const r=(0,i.up)("AltStats");return(0,i.wg)(),(0,i.j4)(r)}function Ee(e,t,n,a,o,l){const r=(0,i.up)("AltScale");return(0,i.wg)(),(0,i.j4)(H.K,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,{value:e.strengthModel,"onUpdate:value":t[0]||(t[0]=t=>e.strengthModel=t),title:"Сила"},null,8,["value"]),(0,i.Wm)(r,{value:e.agilityModel,"onUpdate:value":t[1]||(t[1]=t=>e.agilityModel=t),title:"Ловкость"},null,8,["value"]),(0,i.Wm)(r,{value:e.intelligenceModel,"onUpdate:value":t[2]||(t[2]=t=>e.intelligenceModel=t),title:"Интеллект"},null,8,["value"]),(0,i.Wm)(r,{value:e.charismaModel,"onUpdate:value":t[3]||(t[3]=t=>e.charismaModel=t),title:"Харизма"},null,8,["value"]),(0,i.Wm)(r,{value:e.enduranceModel,"onUpdate:value":t[4]||(t[4]=t=>e.enduranceModel=t),title:"Выносливость"},null,8,["value"])])),_:1})}const Ge={class:"mb-2"};function Ke(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(S.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(V.D,{class:"d-flex flex-column align-center"},{default:(0,i.w5)((()=>[(0,i._)("h4",Ge,[(0,i.Wm)(A.T,{variant:"text",icon:"mdi-minus",onClick:e.decrement},null,8,["onClick"]),(0,i._)("span",null,(0,s.zw)(e.title),1),(0,i.Wm)(A.T,{variant:"text",icon:"mdi-plus",onClick:e.increment},null,8,["onClick"])]),(0,i.Wm)(re.K,{modelValue:e.valueModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.valueModel=t),length:6},{item:(0,i.w5)((t=>[(0,i.Wm)(Z.t,{color:t.isFilled?"green":"grey-lighten-1",onClick:t.onClick,size:"44"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.getIcon(t.value)),1)])),_:2},1032,["color","onClick"])])),_:1},8,["modelValue"])])),_:1})])),_:1})}var qe=(0,i.aZ)({name:"AltStatsScale",props:{value:{type:Number,required:!0},title:String},emits:["update:value"],computed:{valueModel:{get(){return this.value},set(e){this.$emit("update:value",e)}}},methods:{decrement(){this.valueModel>0&&this.valueModel--},increment(){this.valueModel<6&&this.valueModel++},getIcon(e){switch(e){case 1:return"mdi-dice-d4";case 2:return"mdi-dice-d6";case 3:return"mdi-dice-d8";case 4:return"mdi-dice-d10";case 5:return"mdi-dice-d12";case 6:return"mdi-dice-d20"}return"mdi-dice-d4"}}});const Re=(0,f.Z)(qe,[["render",Ke]]);var Le=Re;const{mapGetters:$e,mapMutations:Be}=(0,h._p)("character/stats");var Je=(0,i.aZ)({name:"AltStats",components:{AltScale:Le},computed:{...$e(["strength","agility","intelligence","charisma","endurance"]),strengthModel:{get(){return this.strength},set(e){this.setStat({statName:"strength",value:e})}},agilityModel:{get(){return this.agility},set(e){this.setStat({statName:"agility",value:e})}},intelligenceModel:{get(){return this.intelligence},set(e){this.setStat({statName:"intelligence",value:e})}},charismaModel:{get(){return this.charisma},set(e){this.setStat({statName:"charisma",value:e})}},enduranceModel:{get(){return this.endurance},set(e){this.setStat({statName:"endurance",value:e})}}},methods:{...Be(["setStat"])}});const Ye=(0,f.Z)(Je,[["render",Ee]]);var Qe=Ye,Xe=(0,i.aZ)({name:"StatsView",components:{AltStats:Qe}});const et=(0,f.Z)(Xe,[["render",Fe]]);var tt=et;function nt(e,t,n,a,o,l){const r=(0,i.up)("AtlIsMageToggler");return(0,i.wg)(),(0,i.j4)(H.K,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r)])),_:1})}var at=n(7887);function it(e,t,n,a,o,l){return(0,i.wg)(),(0,i.j4)(S.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(at.x,{modelValue:e.isMageModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isMageModel=t),label:"Магическое существо",color:"primary","hide-details":""},null,8,["modelValue"])])),_:1})}const{mapGetters:ot,mapMutations:lt}=(0,h._p)("character/personalInfo");var rt=(0,i.aZ)({name:"AltIsMageToggler",computed:{...ot(["isMage"]),isMageModel:{get(){return this.isMage},set(e){this.setIsMage(e)}}},methods:{...lt(["setIsMage"])}});const st=(0,f.Z)(rt,[["render",it]]);var ut=st,ct=(0,i.aZ)({name:"PersonalView",components:{AtlIsMageToggler:ut}});const dt=(0,f.Z)(ct,[["render",nt]]);var mt=dt;const ht=[{path:"/",name:"status",component:Ne,meta:{title:"Статус"}},{path:"/inventory",name:"inventory",component:n.e(234).then(n.bind(n,3756)),meta:{title:"Инвентарь"}},{path:"/stats",name:"stats",component:tt,meta:{title:"Характеристики"}},{path:"/skills",name:"skills",component:n.e(243).then(n.bind(n,7313)),meta:{title:"Навыки"}},{path:"/personal",name:"personal",component:mt,meta:{title:"Личность"}},{path:"/abilities",name:"abilities",component:n.e(151).then(n.bind(n,6784)),meta:{title:"Способности"}}],pt=(0,T.p7)({history:(0,T.r5)("/altren-character/"),routes:ht});var ft=pt,gt={namespaced:!0,state:()=>({}),mutations:{},actions:{},getters:{}};function vt(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function Mt(e,t,n){const a=localStorage.getItem(e);if(a)try{return JSON.parse(a)}catch{console.error(n)}return t}const wt=4,yt=5,_t=4,Pt="character-status",bt="character-stats",kt="character-personal-info",Ct={hits:4,mana:5,fatigue:0,conditions:{HP:0,MP:0,threshold:0}};function Wt(){return Mt(Pt,Ct,"В хранилище невалидные данные о статусе персонажа")}var xt={namespaced:!0,state:()=>Wt(),getters:{isMage(e,t,n,a){return a["character/personalInfo/isMage"]},hits(e){return e.hits},maxHits(e){return wt+e.conditions.HP},mana(e){return e.mana},maxMana(e,t,n,a){const i=t.isMage?2*a["character/stats/intelligence"]:a["character/stats/endurance"];return yt+e.conditions.MP+i},threshold(e,t,n,a){const i=a["character/stats/endurance"];return _t+e.conditions.threshold+i},fatigue(e){return e.fatigue},conditionHP(e){return e.conditions.HP},conditionMP(e){return e.conditions.MP},conditionThreshold(e){return e.conditions.threshold}},mutations:{setHits(e,t){e.hits=t,vt(Pt,e)},setMana(e,t){e.mana=t,vt(Pt,e)},setFatigue(e,t){e.fatigue=t,vt(Pt,e)},setConditionHP(e,t){e.conditions.HP=t,vt(Pt,e)},setConditionMP(e,t){e.conditions.MP=t,vt(Pt,e)},setConditionThreshold(e,t){e.conditions.threshold=t,vt(Pt,e)}},actions:{}};const Tt={strength:0,agility:0,intelligence:0,charisma:0,endurance:0};function Ht(){return Mt(bt,Tt,"В хранилище невалидные данные о характеристиках персонажа")}var jt={namespaced:!0,state:()=>Ht(),getters:{strength(e){return e.strength},agility(e){return e.agility},intelligence(e){return e.intelligence},charisma(e){return e.charisma},endurance(e){return e.endurance}},mutations:{setStat(e,{statName:t,value:n}){e[t]=n,vt(bt,e)}}};const At={isMage:!1,name:"",race:"",telents:[],mutations:[]};function St(){return Mt(kt,At,"В хранилище невалидные данные о личности персонажа")}var Vt={namespaced:!0,state:()=>St(),getters:{isMage(e){return e.isMage}},mutations:{setIsMage(e,t){e.isMage=t,vt(kt,e)}},actions:{}},Zt={namespaced:!0,state:()=>({}),mutations:{},actions:{},getters:{},modules:{inventory:gt,status:xt,stats:jt,personalInfo:Vt}},It=(0,h.MT)({state(){return{sideMenu:!1}},getters:{sideMenu(e){return e.sideMenu}},mutations:{changeSideMenu(e,t){e.sideMenu=t},toggleSideMenu(e){e.sideMenu=!e.sideMenu}},actions:{},modules:{character:Zt}}),Ot=(n(9773),n(9811)),Dt=(0,Ot.Rd)();async function Ut(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ut(),(0,a.ri)(x).use(ft).use(It).use(Dt).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],o=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,i){if(1&i&&(a=this(a)),8&i)return a;if("object"===typeof a&&a){if(4&i&&a.__esModule)return a;if(16&i&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var r=2&i&&a;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){l[e]=function(){return a[e]}}));return l["default"]=function(){return a},n.d(o,l),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{151:"abilities",234:"inventory",243:"skills",461:"webfontloader"}[e]+"."+{151:"c4d9a7e4",234:"a3a33d03",243:"5c5de4fb",461:"bcfbae93"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="altren-character:";n.l=function(a,i,o,l){if(e[a])e[a].push(i);else{var r,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=a),e[a]=[i];var m=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var i=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/altren-character/"}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=o);var l=n.p+n.u(t),r=new Error,s=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",r.name="ChunkLoadError",r.type=o,r.request=l,i[1](r)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,l=a[0],r=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var c=s(n)}for(t&&t(a);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkaltren_character"]=self["webpackChunkaltren_character"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6533)}));a=n.O(a)})();
//# sourceMappingURL=app.3881096f.js.map