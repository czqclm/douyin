import{as as _,C as m,f as h,_ as f}from"./common-Cj2DXq7d.js";import"./vendor-EcFAmbRN.js";const l=c=>(Vue.pushScopeId("data-v-a9f70d75"),c=c(),Vue.popScopeId(),c),g={class:"Share2Friend"},k=l(()=>Vue.createElementVNode("span",{class:"f16"},"已加入的群聊",-1)),v={class:"content"},C={class:"list"},N=["onClick"],E=["src"],F={class:"desc"},y={class:"name"},x=l(()=>Vue.createElementVNode("span",{class:"num"},"(3)",-1)),B=Vue.defineComponent({name:"JoinedGroupChat",__name:"JoinedGroupChat",setup(c){const r=VueRouter.useRouter(),e=Vue.reactive({friends:{all:{},recent:[],eachOther:[]},selectFriends:[]});Vue.onMounted(()=>{i()});function d(){e.selectFriends.length&&r.back()}function u(t){let s=e.selectFriends.findIndex(o=>o.name===t.name);s!==-1?(t.select=!1,e.selectFriends.splice(s,1)):(t.select=!0,e.selectFriends.push(t))}async function i(){let t=await _();t.success&&(e.friends=t.data,e.friends.all=e.friends.all.sort((s,o)=>s.pinyin<o.pinyin?-1:s.pinyin>o.pinyin?1:0))}return(t,s)=>{const o=Vue.resolveComponent("BaseHeader"),V=Vue.resolveComponent("NoMore");return Vue.openBlock(),Vue.createElementBlock("div",g,[Vue.createVNode(o,{backMode:"light",backImg:"back",style:{"z-index":"7"}},{center:Vue.withCtx(()=>[k]),right:Vue.withCtx(()=>[Vue.createElementVNode("div",null,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["f16",e.selectFriends.length?"save-yes":"save-no"]),onClick:d}," 完成"+Vue.toDisplayString(e.selectFriends.length?`(${e.selectFriends.length})`:""),3)])]),_:1}),Vue.createElementVNode("div",v,[Vue.createElementVNode("div",C,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.friends.all,(n,p)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"local-row",key:p,onClick:a=>u(n)},[Vue.createVNode(m,{mode:"red",modelValue:n.select,"onUpdate:modelValue":a=>n.select=a},null,8,["modelValue","onUpdate:modelValue"]),Vue.createElementVNode("img",{src:Vue.unref(h)(n.avatar),alt:""},null,8,E),Vue.createElementVNode("div",F,[Vue.createElementVNode("span",y,Vue.toDisplayString(n.name.length>20?n.name.substr(0,20)+"...":n.name),1),x])],8,N))),128))]),Vue.createVNode(V)])])}}}),w=f(B,[["__scopeId","data-v-a9f70d75"]]);export{w as default};
