"use strict";(self["webpackChunkaltren_character"]=self["webpackChunkaltren_character"]||[]).push([[784],{3024:function(e,t,l){l.r(t),l.d(t,{default:function(){return A}});var a=l(3396);function n(e,t,l,n,i,u){const r=(0,a.up)("AltStats");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r)])}var i=l(3369);function u(e,t,l,n,u,r){const s=(0,a.up)("AltScale");return(0,a.wg)(),(0,a.j4)(i.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{value:e.strengthModel,"onUpdate:value":t[0]||(t[0]=t=>e.strengthModel=t),title:"Сила"},null,8,["value"]),(0,a.Wm)(s,{value:e.agilityModel,"onUpdate:value":t[1]||(t[1]=t=>e.agilityModel=t),title:"Ловкость"},null,8,["value"]),(0,a.Wm)(s,{value:e.intelligenceModel,"onUpdate:value":t[2]||(t[2]=t=>e.intelligenceModel=t),title:"Интеллект"},null,8,["value"]),(0,a.Wm)(s,{value:e.charismaModel,"onUpdate:value":t[3]||(t[3]=t=>e.charismaModel=t),title:"Харизма"},null,8,["value"]),(0,a.Wm)(s,{value:e.enduranceModel,"onUpdate:value":t[4]||(t[4]=t=>e.enduranceModel=t),title:"Выносливость"},null,8,["value"])])),_:1})}var r=l(7139),s=l(7423),c=l(6824),d=l(8521),o=l(3289),m=l(5958);const v={class:"mb-2"};function h(e,t,l,n,i,u){return(0,a.wg)(),(0,a.j4)(c.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{class:"d-flex flex-column align-center"},{default:(0,a.w5)((()=>[(0,a._)("h4",v,[(0,a.Wm)(s.T,{variant:"text",icon:"mdi-minus",onClick:e.decrement},null,8,["onClick"]),(0,a._)("span",null,(0,r.zw)(e.title),1),(0,a.Wm)(s.T,{variant:"text",icon:"mdi-plus",onClick:e.increment},null,8,["onClick"])]),(0,a.Wm)(m.K,{modelValue:e.valueModel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.valueModel=t),length:6},{item:(0,a.w5)((t=>[(0,a.Wm)(o.t,{color:t.isFilled?"green":"grey-lighten-1",onClick:t.onClick,size:"44"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.getIcon(t.value)),1)])),_:2},1032,["color","onClick"])])),_:1},8,["modelValue"])])),_:1})])),_:1})}var g=(0,a.aZ)({name:"AltStatsScale",props:{value:{type:Number,required:!0},title:String},emits:["update:value"],computed:{valueModel:{get(){return this.value},set(e){this.$emit("update:value",e)}}},methods:{decrement(){this.valueModel>0&&this.valueModel--},increment(){this.valueModel<6&&this.valueModel++},getIcon(e){switch(e){case 1:return"mdi-dice-d4";case 2:return"mdi-dice-d6";case 3:return"mdi-dice-d8";case 4:return"mdi-dice-d10";case 5:return"mdi-dice-d12";case 6:return"mdi-dice-d20"}return"mdi-dice-d4"}}}),p=l(89);const M=(0,p.Z)(g,[["render",h]]);var S=M,f=l(65);const{mapGetters:w,mapMutations:k}=(0,f._p)("character/stats");var W=(0,a.aZ)({name:"AltStats",components:{AltScale:S},computed:{...w(["strength","agility","intelligence","charisma","endurance"]),strengthModel:{get(){return this.strength},set(e){this.setStat({statName:"strength",value:e})}},agilityModel:{get(){return this.agility},set(e){this.setStat({statName:"agility",value:e})}},intelligenceModel:{get(){return this.intelligence},set(e){this.setStat({statName:"intelligence",value:e})}},charismaModel:{get(){return this.charisma},set(e){this.setStat({statName:"charisma",value:e})}},enduranceModel:{get(){return this.endurance},set(e){this.setStat({statName:"endurance",value:e})}}},methods:{...k(["setStat"])}});const _=(0,p.Z)(W,[["render",u]]);var C=_,y=(0,a.aZ)({name:"StatsView",components:{AltStats:C}});const U=(0,p.Z)(y,[["render",n]]);var A=U}}]);
//# sourceMappingURL=stats.a00744f5.js.map