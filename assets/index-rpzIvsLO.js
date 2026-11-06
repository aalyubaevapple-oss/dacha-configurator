var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function l(){let e=new URLSearchParams(location.search).get(`m`)||`demo`,t=/^[a-z0-9-]{1,40}$/.test(e)?e:`demo`,n=`config/${t}/`,[r,i]=await Promise.all([u(n+`manufacturer.json`),u(n+`pricing.json`)]);return{id:t,manufacturer:r,pricing:i}}async function u(e){let t=await fetch(e,{cache:`no-cache`});if(!t.ok)throw Error(`Не удалось загрузить ${e}: ${t.status}`);return t.json()}function d(e){let t={...e},n=new Set;return{get:()=>t,set(e,r={}){let i=t,a={...t,...e};Object.keys(e).every(e=>i[e]===a[e])||(t=a,n.forEach(e=>e(t,i,r)))},subscribe(e){return n.add(e),()=>n.delete(e)}}}var f=[`length`,`width`,`roofType`,`wallMaterial`,`wallFinish`,`roofMaterial`,`roofFinish`,`plinth`,`windowFrame`,`doorType`,`plan`,`foundation`,`package`,`construction`,`terrace`,`site`,`soil`,`snowRegion`],p=100;function m(e){let t=[],n=[],r=new Set,i=!1,a=null,o=e=>Object.fromEntries(f.map(t=>[t,e[t]])),s=()=>r.forEach(e=>e());e.subscribe((e,r,c)=>{!i&&f.some(t=>e[t]!==r[t])&&(c?.merge&&c.merge===a||(t.push(o(r)),t.length>p&&t.shift()),a=c?.merge??null,n.length=0,s())});let c=(t,n)=>{t.length&&(i=!0,n.push(o(e.get())),e.set({...t.pop(),planSel:null,planAdd:null}),i=!1,a=null,s())};return{undo:()=>c(t,n),redo:()=>c(n,t),canUndo:()=>t.length>0,canRedo:()=>n.length>0,subscribe:e=>r.add(e)}}var h={house:{boundary:3,street:5,lane:3},outbuilding:{boundary:1,street:5},houseToilet:12,houseBath:8,wellToilet:8},g=[{id:`banya`,name:`Баня`,w:4,d:3,kind:`building`,san:`bath`,icon:`banya`},{id:`shed`,name:`Хозблок`,w:3,d:2,kind:`building`,icon:`shed`},{id:`greenhouse`,name:`Теплица`,w:3,d:6,kind:`building`,icon:`greenhouse`},{id:`gazebo`,name:`Беседка`,w:3,d:3,kind:`building`,icon:`gazebo`},{id:`carport`,name:`Навес для машины`,short:`Навес`,w:3.5,d:6,kind:`building`,icon:`carport`},{id:`parking`,name:`Парковка`,w:3,d:5.5,kind:`ground`,icon:`parking`},{id:`firepit`,name:`Мангальная зона`,short:`Мангал`,w:3,d:3,kind:`ground`,icon:`firepit`},{id:`toilet`,name:`Уличный туалет`,short:`Туалет`,w:1.2,d:1.4,kind:`building`,san:`toilet`,icon:`toilet`},{id:`shower`,name:`Летний душ`,short:`Душ`,w:1.2,d:1.2,kind:`building`,san:`bath`,icon:`shower`},{id:`well`,name:`Колодец`,w:1.4,d:1.4,kind:`ground`,san:`well`,icon:`well`},{id:`compost`,name:`Компост`,w:1.5,d:1,kind:`building`,san:`compost`,icon:`compost`},{id:`bed`,name:`Грядка`,w:1.2,d:4,kind:`ground`,icon:`bed`},{id:`flowers`,name:`Клумба`,w:2,d:2,kind:`ground`,icon:`flowers`},{id:`apple`,name:`Плодовое дерево`,short:`Яблоня`,w:.5,d:.5,kind:`tree`,boundary:2,crown:3.6,icon:`apple`},{id:`spruce`,name:`Высокое дерево`,short:`Ель`,w:.6,d:.6,kind:`tree`,boundary:4,crown:4.2,icon:`spruce`},{id:`shrub`,name:`Кустарник`,short:`Кусты`,w:1.2,d:1.2,kind:`tree`,boundary:1,crown:1.4,icon:`shrub`}],_=Object.fromEntries(g.map(e=>[e.id,e])),v=[{id:`mesh`,name:`Сетка`},{id:`picket`,name:`Штакетник`},{id:`profnastil`,name:`Профлист`},{id:`none`,name:`Без забора`}],y=[{id:`street`,name:`Улица`,note:`дом не ближе 5 м к красной линии`},{id:`lane`,name:`Проезд`,note:`дом не ближе 3 м к красной линии`}],b={w:{min:10,max:50,step:.5},d:{min:15,max:80,step:.5}},x=[{name:`6 соток`,w:20,d:30},{name:`8 соток`,w:20,d:40},{name:`10 соток`,w:25,d:40},{name:`12 соток`,w:30,d:40},{name:`15 соток`,w:30,d:50}],S=4.5,C=[{id:`garden`,name:`Огород`,note:`теплица, грядки, сад`,items:[`greenhouse`,`bed`,`bed`,`bed`,`bed`,`compost`,`shed`,`apple`,`apple`,`apple`,`shrub`,`shrub`,`well`]},{id:`rest`,name:`Отдых`,note:`беседка, мангал, газон`,items:[`gazebo`,`firepit`,`parking`,`flowers`,`flowers`,`apple`,`apple`,`spruce`,`shrub`,`shrub`]},{id:`banya`,name:`Баня и сад`,note:`баня, душ, сад`,items:[`banya`,`shower`,`gazebo`,`parking`,`apple`,`apple`,`apple`,`apple`,`shrub`,`shrub`,`flowers`]},{id:`full`,name:`Всё сразу`,note:`для большого участка`,items:[`banya`,`greenhouse`,`carport`,`gazebo`,`shed`,`toilet`,`well`,`bed`,`bed`,`bed`,`apple`,`apple`,`apple`,`spruce`,`shrub`,`flowers`,`firepit`]}],w=0,T=()=>`i${Date.now().toString(36)}${(w++).toString(36)}`,E=e=>e*Math.PI/180,D=e=>Math.round(e*10)/10;function O(e,t,n){let r=E(n),i=Math.round(Math.cos(r)*1e6)/1e6,a=Math.round(Math.sin(r)*1e6)/1e6;return[e*i+t*a,-e*a+t*i]}function k(e){let t=e.terrace;return{x0:Math.min(-e.L/2,t?t.x0:0),x1:Math.max(e.L/2,t?t.x1:0),z0:-e.W/2,z1:Math.max(e.W/2,t?t.z1:0)}}function A(e,t,n,r){let i=[[e.x0,e.z0],[e.x1,e.z0],[e.x1,e.z1],[e.x0,e.z1]].map(([e,t])=>O(e,t,r)),a=i.map(e=>e[0]+t),o=i.map(e=>e[1]+n);return{x0:Math.min(...a),x1:Math.max(...a),z0:Math.min(...o),z1:Math.max(...o)}}function j(e,t,n,r){let i=_[e];return A({x0:-i.w/2,x1:i.w/2,z0:-i.d/2,z1:i.d/2},t,n,r)}var M=.25;function N(e,t,n,r,i){let a=e.x1-e.x0,o=e.z1-e.z0,s=0,c=0;return a>r-2*M?s=-(e.x0+e.x1)/2:e.x0<-r/2+M?s=-r/2+M-e.x0:e.x1>r/2-M&&(s=r/2-M-e.x1),o>i-2*M?c=-(e.z0+e.z1)/2:e.z0<-i/2+M?c=-i/2+M-e.z0:e.z1>i/2-M&&(c=i/2-M-e.z1),{x:t+s,z:n+c,rect:{x0:e.x0+s,x1:e.x1+s,z0:e.z0+c,z1:e.z1+c}}}function ee(e,t){let n=e.w,r=e.d,i=k(t),a=e.house,o=N(A(i,a.x,a.z,a.rot),a.x,a.z,n,r),s={id:`house`,type:`house`,name:`Дом`,x:o.x,z:o.z,rot:a.rot,rect:o.rect,local:i},c=e.items.filter(e=>_[e.type]).map(e=>{let t=N(j(e.type,e.x,e.z,e.rot),e.x,e.z,n,r);return{...e,x:t.x,z:t.z,rect:t.rect,t:_[e.type]}});return{W:n,D:r,front:e.front,fence:e.fence,gate:e.gate,street:e.street,house:s,items:c,door:te(t,s)}}function te(e,t){let n=e.plan.openings.find(e=>e.kind===`door`&&!e.hidden);if(!n)return null;let r=e.terrace,i=.8,a;switch(n.wall){case`front`:a=[n.center,(r?.type===`front`?r.z1:e.W/2)+i];break;case`back`:a=[n.center,-e.W/2-i];break;case`right`:a=[(r?.type===`side`?r.x1:e.L/2)+i,n.center];break;default:a=[-e.L/2-i,n.center]}let[o,s]=O(a[0],a[1],t.rot);return{x:o+t.x,z:s+t.z}}function P(e){let t=e.W/2-S/2-.5,n=Math.max(-t,Math.min(t,(e.gate-.5)*e.W));return{x0:n-S/2,x1:n+S/2,wicket:n+S/2-.5,drive:n-.5}}var ne=(e,t,n=0)=>e.x0<t.x1+n&&t.x0<e.x1+n&&e.z0<t.z1+n&&t.z0<e.z1+n;function re(e,t){let n=Math.max(0,t.x0-e.x1,e.x0-t.x1),r=Math.max(0,t.z0-e.z1,e.z0-t.z1),i=(e,t,n,r)=>{if(t<n)return[t,n];if(r<e)return[e,r];let i=(Math.max(e,n)+Math.min(t,r))/2;return[i,i]},[a,o]=i(e.x0,e.x1,t.x0,t.x1),[s,c]=i(e.z0,e.z1,t.z0,t.z1);return{dist:Math.hypot(n,r),a:[a,s],b:[o,c]}}var ie=e=>e.t?.kind===`tree`?{x0:e.x,x1:e.x,z0:e.z,z1:e.z}:e.rect,ae=e=>e.type===`house`?`Дом`:e.t.name,F=e=>`${D(e).toLocaleString(`ru-RU`)} м`;function oe(e,t){if(e.type===`house`)return{side:h.house.boundary,street:t===`lane`?h.house.lane:h.house.street};let n=e.t||_[e.type];return n.kind===`tree`?{side:n.boundary,street:0}:n.kind===`building`?{side:h.outbuilding.boundary,street:h.outbuilding.street}:{side:0,street:0}}function se(e,t){let n=e=>e.type===`house`?`house`:e.t.san,r=[n(e),n(t)].sort().join(`-`);return{"house-toilet":h.houseToilet,"bath-house":h.houseBath,"toilet-well":h.wellToilet,"compost-well":h.wellToilet}[r]||0}function I(e){let t=[e.house,...e.items],n=[],r=0;for(let i of t){let t=oe(i,e.front),a=ie(i),o=[[`left`,a.x0+e.W/2,t.side,`до соседей слева`,[[-e.W/2,(a.z0+a.z1)/2],[a.x0,(a.z0+a.z1)/2]]],[`right`,e.W/2-a.x1,t.side,`до соседей справа`,[[e.W/2,(a.z0+a.z1)/2],[a.x1,(a.z0+a.z1)/2]]],[`back`,a.z0+e.D/2,t.side,`до соседей сзади`,[[(a.x0+a.x1)/2,-e.D/2],[(a.x0+a.x1)/2,a.z0]]],[`street`,e.D/2-a.z1,t.street,e.front===`lane`?`до проезда`:`до улицы`,[[(a.x0+a.x1)/2,e.D/2],[(a.x0+a.x1)/2,a.z1]]]];for(let[e,t,a,s,c]of o)a&&(r++,t<a-.05&&n.push({ids:[i.id],kind:`boundary`,side:e,have:t,need:a,line:c,text:`${ae(i)}: ${s} ${F(t)}, нужно не меньше ${F(a)}`}))}for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let a=t[e],o=t[i],s=a.t?.kind===`tree`,c=o.t?.kind===`tree`,l=s?{x0:a.x-.3,x1:a.x+.3,z0:a.z-.3,z1:a.z+.3}:a.rect,u=c?{x0:o.x-.3,x1:o.x+.3,z0:o.z-.3,z1:o.z+.3}:o.rect;if(r++,ne(l,u,-.02)){n.push({ids:[a.id,o.id],kind:`overlap`,text:`${ae(a)} и ${ae(o).toLowerCase()} заходят друг на друга`});continue}let d=se(a,o);if(!d)continue;r++;let f=re(ie(a),ie(o));f.dist<d-.05&&n.push({ids:[a.id,o.id],kind:`pair`,have:f.dist,need:d,line:[f.a,f.b],text:`${ae(a)} — ${ae(o).toLowerCase()}: ${F(f.dist)}, нужно не меньше ${F(d)}`})}return{issues:n,checks:r}}var ce={house:[0,.55],banya:[-.75,-.8],shed:[.75,-.85],toilet:[.9,-.95],shower:[-.35,-.7],greenhouse:[.3,-.35],bed:[.25,-.05],gazebo:[-.55,.05],carport:[.7,.55],parking:[.75,.85],firepit:[-.55,-.3],well:[-.25,.15],compost:[.85,-.6],flowers:[.3,.75],apple:[-.2,-.45],spruce:[-.85,.85],shrub:[-.9,.35]};function le(e,t,n,r){let i=e.rect;if(i.x0<-n.W/2+M||i.x1>n.W/2-M||i.z0<-n.D/2+M||i.z1>n.D/2-M)return!1;let a=e.t?.kind===`tree`,o=a?{x0:e.x-.3,x1:e.x+.3,z0:e.z-.3,z1:e.z+.3}:i;for(let n of t){let t=n.t?.kind===`tree`;if(ne(o,t?{x0:n.x-.3,x1:n.x+.3,z0:n.z-.3,z1:n.z+.3}:n.rect,(a&&t?Math.max(e.t.crown,n.t.crown)*.55:a||t?Math.max(a?e.t.crown:0,t?n.t.crown:0)*.45+.3:e.type===`bed`&&n.type===`bed`?.6:1)-.01))return!1;if(r){let t=se(e,n);if(t&&re(ie(e),ie(n)).dist<t)return!1}}if(r){let t=oe(e,n.front),r=ie(e);if(r.x0+n.W/2<t.side||n.W/2-r.x1<t.side||r.z0+n.D/2<t.side||n.D/2-r.z1<t.street||n.gateBox&&e.t?.kind!==`tree`&&e.type!==`parking`&&e.type!==`carport`&&ne(i,n.gateBox,0))return!1}return!0}function ue(e,t,n,r,i={}){let a=e===`house`,o=a?null:_[e],[s,c]=ce[e]||[0,0],l=s*n.W/2,u=c*n.D/2;if(a){let e=k(r);u=n.D/2-oe({type:`house`},n.front).street-1.5-e.z1}let d=a?[i.rot??0]:o.w===o.d?[0]:[0,90],f=t.filter(t=>t.type===e),p=.5,m=null;for(let s of i.relax?[!0,!1]:[!0]){for(let i=-n.W/2;i<=n.W/2;i+=p)for(let c=-n.D/2;c<=n.D/2;c+=p)for(let p of d){let d=a?A(k(r),i,c,p):j(e,i,c,p);if(!le({id:`new`,type:e,x:i,z:c,rot:p,rect:d,t:o},t,n,s))continue;let h=Math.hypot(i-l,(c-u)*1.1);if(f.length){let t=Math.min(...f.map(e=>Math.hypot(e.x-i,e.z-c)));e===`bed`?h=t+Math.abs(p-f[0].rot)*.02:h+=10/(1+t)}(!m||h<m.score)&&(m={x:i,z:c,rot:p,rect:d,score:h,strict:s})}if(m)break}return m}function de(e,t,n,{keep:r=[],moveHouse:i=!0,relax:a=!1}={}){let o={W:e.w,D:e.d,front:e.front},s=P({...o,gate:e.gate});o.gateBox={x0:s.x0,x1:s.x1,z0:o.D/2-6,z1:o.D/2};let c=[],l=e.house;if(i){let n=ue(`house`,[],o,t,{rot:e.house?.rot??0,relax:!0});l=n?{x:D(n.x),z:D(n.z),rot:n.rot}:{x:0,z:0,rot:0}}let u=A(k(t),l.x,l.z,l.rot);c.push({id:`house`,type:`house`,x:l.x,z:l.z,rot:l.rot,rect:u});for(let e of r)c.push({...e,rect:j(e.type,e.x,e.z,e.rot),t:_[e.type]});let d=[...n].sort((e,t)=>_[t].w*_[t].d-_[e].w*_[e].d),f=[...r],p=[];for(let e of d){if(f.length>=40)break;let n=ue(e,c,o,t,{relax:a});if(!n){p.push(e);continue}let r={id:T(),type:e,x:D(n.x),z:D(n.z),rot:n.rot};f.push(r),c.push({...r,rect:n.rect,t:_[e]})}return{site:{...e,house:l,items:f},failed:p}}function fe(e,t){let n=oe(e,t.front),r=ie(e);return Math.max(0,n.side-(r.x0+t.W/2))+Math.max(0,n.side-(t.W/2-r.x1))+Math.max(0,n.side-(r.z0+t.D/2))+Math.max(0,n.street-(t.D/2-r.z1))}function pe(e,t,n){let r=fe(e,n),i=ie(e);for(let n of t){let t=se(e,n);t&&(r+=Math.max(0,t-re(i,ie(n)).dist))}return r}function me(e,t,n,r,i){let a=e.type===`house`,o=a?null:_[e.type],s=a||o.w===o.d?[e.rot]:[e.rot,(e.rot+90)%360],c=a?k(r):null,l=.5,u=Math.round(e.x/l)*l,d=Math.round(e.z/l)*l,f=Math.ceil(Math.max(n.W,n.D)/l),p=null;for(let r=0;r<=f;r++){for(let f=-r;f<=r;f++)for(let m=-r;m<=r;m++){if(Math.max(Math.abs(f),Math.abs(m))!==r)continue;let h=u+f*l,g=d+m*l;if(!(Math.abs(h)>n.W/2||Math.abs(g)>n.D/2))for(let r of s){let s=a?A(c,h,g,r):j(e.type,h,g,r),l={...e,x:h,z:g,rot:r,rect:s,t:o};if(!le(l,t,n,i))continue;let u=Math.hypot(h-e.x,g-e.z)+(r===e.rot?0:1.5)+(i?0:pe(l,t,n)*20);(!p||u<p.score)&&(p={x:h,z:g,rot:r,rect:s,score:u})}}if(i&&p&&r*l>=p.score-.01)break}return p}function he(e,t,n){let r=e=>{let t={W:e.w,D:e.d,front:e.front},n=P({...t,gate:e.gate});return t.gateBox={x0:n.x0,x1:n.x1,z0:t.D/2-6,z1:t.D/2},t},i=r(t),a=r(e),o=k(n),s=[{id:`house`,type:`house`,...t.house,rect:A(o,t.house.x,t.house.z,t.house.rot)},...t.items.filter(e=>_[e.type]).map(e=>({...e,t:_[e.type],rect:j(e.type,e.x,e.z,e.rot)}))],c=e=>e.t?.kind===`tree`?{x0:e.x-.3,x1:e.x+.3,z0:e.z-.3,z1:e.z+.3}:e.rect,l=e=>{let t=e.rect;return t.x0>=-i.W/2+M-.01&&t.x1<=i.W/2-M+.01&&t.z0>=-i.D/2+M-.01&&t.z1<=i.D/2-M+.01},u=(e,t)=>e.type!==`house`&&e.t?.kind!==`tree`&&e.type!==`parking`&&e.type!==`carport`&&ne(e.rect,t.gateBox,0),d=new Map,f=[],p=[],m=s[0],h=l(m)&&fe(m,i)<=fe(m,a)+.01;if(!h){let e=me(m,[],i,n,!0)||me(m,[],i,n,!1);e?(m={...m,x:e.x,z:e.z,rot:e.rot,rect:e.rect},d.set(`house`,{x:D(e.x),z:D(e.z),rot:e.rot}),f.push(`house`)):p.push(`house`)}let g=[m],v=[];for(let e of s.slice(1))(l(e)&&!g.some(t=>ne(c(e),c(t),-.02))&&fe(e,i)<=fe(e,a)+.01&&(!u(e,i)||u(e,a))&&(h||le(e,[m],i,!1)&&pe(e,[m],i)<=fe(e,i)+.01)?g:v).push(e);if(!f.length&&!p.length&&!v.length)return{site:t,moved:[],failed:[]};v.sort((e,t)=>(t.rect.x1-t.rect.x0)*(t.rect.z1-t.rect.z0)-(e.rect.x1-e.rect.x0)*(e.rect.z1-e.rect.z0));let y=[...g];for(let e of v){let t=me(e,y,i,n,!0)||me(e,y,i,n,!1);t?(d.set(e.id,{x:D(t.x),z:D(t.z),rot:t.rot}),y.push({...e,x:t.x,z:t.z,rot:t.rot,rect:t.rect}),f.push(e.id)):(p.push(e.id),y.push(e))}let b=t.items.map(e=>d.has(e.id)?{...e,...d.get(e.id)}:e);return{site:{...t,house:d.get(`house`)||t.house,items:b},moved:f,failed:p}}function ge(e){return de({w:20,d:30,front:`street`,fence:`mesh`,gate:.68,street:`S`,house:{x:0,z:0,rot:0},items:[]},e,[`greenhouse`,`bed`,`bed`,`bed`,`apple`,`apple`,`apple`,`shrub`,`shrub`,`parking`,`flowers`]).site}var _e=e=>e.w*e.d/100,ve=e=>{let t=Math.round(_e(e)*10)/10,n=Math.floor(t),r=t===n?n%10==1&&n%100!=11?`сотка`:[2,3,4].includes(n%10)&&![12,13,14].includes(n%100)?`сотки`:`соток`:`сотки`;return`${t.toLocaleString(`ru-RU`)} ${r}`},ye=[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`],be=[0,90,180,270],L=(e,t)=>typeof e==`number`&&isFinite(e)?Math.min(t.max,Math.max(t.min,Math.round((e-t.min)/t.step)*t.step+t.min)):void 0,xe=(e,t)=>typeof e==`number`&&isFinite(e)?Math.max(-t,Math.min(t,D(e))):0;function Se(e){return[e.w,e.d,+(e.front===`lane`),e.fence,Math.round(e.gate*100)/100,ye.indexOf(e.street),[e.house.x,e.house.z,e.house.rot],e.items.map(e=>[e.type,e.x,e.z,e.rot])]}function Ce(e){return Array.isArray(e)?{w:e[0],d:e[1],front:e[2]?`lane`:`street`,fence:e[3],gate:e[4],street:ye[e[5]],house:Array.isArray(e[6])?{x:e[6][0],z:e[6][1],rot:e[6][2]}:null,items:Array.isArray(e[7])?e[7].map((e,t)=>Array.isArray(e)?{id:`s${t}`,type:e[0],x:e[1],z:e[2],rot:e[3]}:null):[]}:e}function R(e){if(!e||typeof e!=`object`)return;let t=L(e.w,b.w),n=L(e.d,b.d);if(t===void 0||n===void 0)return;let r=e.house&&typeof e.house==`object`?e.house:{},i=(Array.isArray(e.items)?e.items:[]).slice(0,40).filter(e=>e&&_[e.type]).map((e,r)=>({id:typeof e.id==`string`&&e.id.length<40?e.id:`s${r}`,type:e.type,x:xe(e.x,t/2),z:xe(e.z,n/2),rot:be.includes(e.rot)?e.rot:0}));return{w:t,d:n,front:e.front===`lane`?`lane`:`street`,fence:v.some(t=>t.id===e.fence)?e.fence:`mesh`,gate:typeof e.gate==`number`&&isFinite(e.gate)?Math.min(1,Math.max(0,e.gate)):.5,street:ye.includes(e.street)?e.street:`S`,house:{x:xe(r.x,t/2),z:xe(r.z,n/2),rot:be.includes(r.rot)?r.rot:0},items:i}}function we(e){if(!e.door)return null;let t=[P(e).wicket,e.D/2],n=[e.door.x,e.door.z],r=e.house.rect,i=(e,t)=>{let n=.45,i=Math.min(e[0],t[0])-n,a=Math.max(e[0],t[0])+n,o=Math.min(e[1],t[1])-n,s=Math.max(e[1],t[1])+n;return i<r.x1&&r.x0<a&&o<r.z1&&r.z0<s},a=e=>e.slice(1).every((t,n)=>!i(e[n],t)),o=e.D/2-1.2,s=[[t,[t[0],n[1]],n],[t,[t[0],o],[n[0],o],n],[t,[t[0],o],[r.x1+1.2,o],[r.x1+1.2,n[1]],n],[t,[t[0],o],[r.x0-1.2,o],[r.x0-1.2,n[1]],n]],c=e=>e.slice(1).reduce((t,n,r)=>t+Math.hypot(n[0]-e[r][0],n[1]-e[r][1]),0);return(s.filter(a).sort((e,t)=>c(e)-c(t))[0]||s[0]).filter((e,t,n)=>t===0||Math.hypot(e[0]-n[t-1][0],e[1]-n[t-1][1])>.05)}var z=.1,B=.8,Te=.15,Ee=.1,De=.15,Oe=[`front`,`right`,`back`,`left`],ke={front:`фасад`,back:`задняя стена`,left:`левая стена`,right:`правая стена`},Ae={w:.9,h:2.05};function je(e,t){let n=e;for(let e of t)n=n?.[e];return n}function Me(e,t,n){if(!t)return n(e);let[r,...i]=t;return{...e,[r]:Me(e[r],i.join(``),n)}}function Ne(e,t,n){return Me(e,t,e=>({split:n,r:.5,door:.5,a:{room:e.room},b:{room:`room`}}))}function Pe(e,t){if(!t)return e;let n=je(e,t).room;return Me(e,t.slice(0,-1),()=>({room:n}))}function Fe(e,t){let n=je(e,t),r=e=>e.room?e.room:r(e.a);return Me(e,t,()=>({room:r(n.a)}))}var Ie=(e,t,n)=>Me(e,t,e=>({...e,room:n})),Le=(e,t,n)=>Me(e,t,e=>({...e,...n}));function Re(e){if(e.room)return{w:1,h:1};let t=Re(e.a),n=Re(e.b);return e.split===`v`?{w:t.w+n.w+z,h:Math.max(t.h,n.h)}:{w:Math.max(t.w,n.w),h:t.h+n.h+z}}var ze=(e,t,n)=>t>n?(t+n)/2:Math.min(n,Math.max(t,e));function Be(e,t,n,r,i){let a=[e];for(let[e,r]of n)a.push(e-t,r+t);let o=null;for(let s of a)s=Math.min(i-t,Math.max(r+t,s)),s-t<r-1e-6||s+t>i+1e-6||n.some(([e,n])=>s+t>e+1e-6&&s-t<n-1e-6)||(o===null||Math.abs(s-e)<Math.abs(o-e))&&(o=s);return o}function Ve(e,t,n){return e===`front`||e===`back`?t:n}function He(e,{L:t,W:n,t:r},i){let a={x0:-t/2+r,x1:t/2-r,z0:-n/2+r,z1:n/2-r},o=[],s=[],c=(e,t,n)=>{if(e.room){let r=t.x1-t.x0,i=t.z1-t.z0;o.push({path:n,type:e.room,...t,area:r*i});return}let r=e.split===`v`,i=r?t.x0:t.z0,a=r?t.x1:t.z1,l=Re(e.a),u=Re(e.b),d=ze(i+e.r*(a-i-z),i+(r?l.w:l.h),a-z-(r?u.w:u.h)),f=r?{...t,x1:d}:{...t,z1:d},p=r?{...t,x0:d+z}:{...t,z0:d+z};s.push({path:n,orient:e.split,at:d+z/2,from:r?t.z0:t.x0,to:r?t.z1:t.x1,lo:i,hi:a,rMin:r?l.w:l.h,rMax:r?u.w:u.h,doorRatio:e.door}),c(e.a,f,n+`a`),c(e.b,p,n+`b`)};c(e.tree,a,``);let l=.001;for(let e of s){if(e.door=null,e.doorRatio==null)continue;let t=e.to-e.from;if(t<1.1)continue;let n=[];for(let t of s)t!==e&&t.orient!==e.orient&&(Math.abs(t.to-(e.at-.1/2))<l||Math.abs(t.from-(e.at+.1/2))<l)&&t.at>e.from&&t.at<e.to&&n.push([t.at-z/2-.08,t.at+z/2+.08]);let r=Be(e.from+e.doorRatio*t,B/2,n,e.from+.1,e.to-.1);r!==null&&(e.door={center:r,w:B})}let u={front:[],back:[],left:[],right:[]};for(let e of s)e.orient===`v`?(Math.abs(e.from-a.z0)<l&&u.back.push(e.at),Math.abs(e.to-a.z1)<l&&u.front.push(e.at)):(Math.abs(e.from-a.x0)<l&&u.left.push(e.at),Math.abs(e.to-a.x1)<l&&u.right.push(e.at));let d={};for(let e of Oe)d[e]=u[e].map(e=>[e-De,e+De]);let f=[...e.openings].sort((e,t)=>e.kind===t.kind?0:e.kind===`door`?-1:1),p=[];for(let e of f){let r=e.kind===`door`?{...Ae,sill:0}:i.windowTypes.find(t=>t.id===e.type)||i.windowTypes[0],a=Ve(e.wall,t,n),o=r.w/2+Ee,s=-a/2+Te,c=a/2-Te,l=Be(-a/2+e.pos*a,o,d[e.wall],s,c),u={...e,w:r.w,h:r.h,sill:r.sill??0,center:l,hidden:l===null};l!==null&&d[e.wall].push([l-o,l+o]),p.push(u)}return{inner:a,rooms:o,partitions:s,openings:p,junctions:u}}function Ue(e){let t={},n=0;for(let r of e.openings)r.hidden||(r.kind===`door`?n++:t[r.type]=(t[r.type]||0)+1);let r=e.partitions.reduce((e,t)=>e+(t.to-t.from),0),i=e.partitions.filter(e=>e.door).length,a={};for(let t of e.rooms)a[t.type]=(a[t.type]||0)+1;let o=e.rooms.reduce((e,t)=>e+t.area,0);return{windows:t,doors:n,partitionsLength:r,interiorDoors:i,rooms:a,livingArea:o}}var We=0,Ge=e=>`${e}${Date.now().toString(36)}${(We++).toString(36)}`,Ke={wallHeight:2.4,wallThickness:.14,plinthHeight:.42,pitchDeg:32,shedDeg:12,mansardLowDeg:62,mansardHighDeg:22,mansardKnee:1.55,eaveOverhang:.42,gableOverhang:.32,roofThickness:.05,atticWindow:{w:.9,h:.9,sill:1.05}},qe=e=>e*Math.PI/180;function Je(e,t,n){let r=t/2;if(e===`shed`)return[[-r,n],[r,n+t*Math.tan(qe(Ke.shedDeg))]];if(e===`mansard`){let e=Ke.mansardKnee/Math.tan(qe(Ke.mansardLowDeg)),t=n+Ke.mansardKnee,i=t+(r-e)*Math.tan(qe(Ke.mansardHighDeg));return[[-r,n],[-r+e,t],[0,i],[r-e,t],[r,n]]}return[[-r,n],[0,n+r*Math.tan(qe(Ke.pitchDeg))],[r,n]]}function Ye(e,t){if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[r,i]=e[n-1],[a,o]=e[n];if(t<=a)return i+(t-r)/(a-r)*(o-i)}return e[e.length-1][1]}function Xe(e,t){return e>=(t.roofTypes?.find(e=>e.id===`mansard`)?.minWidth??5)}function Ze(e,t){let n=e.length,r=e.width,i=Ke.wallHeight,a=Ke.wallThickness,o=r/2,s=e.roofType===`mansard`&&!Xe(r,t)?`gable`:e.roofType||`gable`,c=Je(s,r,i),l=Math.max(...c.map(e=>e[1])),u=He(e.plan,{L:n,W:r,t:a},t),d=e.terrace?.type||`none`,f=e.terrace?.depth||0,p=d===`none`?null:d===`front`?{type:`front`,x0:-n/2,x1:n/2,z0:o,z1:o+f,depth:f,area:n*f,covered:!1}:{type:`side`,x0:n/2,x1:n/2+f,z0:-o,z1:o,depth:f,area:r*f,covered:!0},m=p?.type===`side`?f:0,h=-n/2-Ke.gableOverhang,g=n/2+m+Ke.gableOverhang,_=null;if(s===`mansard`){let e=Ke.mansardKnee/Math.tan(qe(Ke.mansardLowDeg));_={width:r-2*e,area:(r-2*e)*(n-2*a)}}let v=p?[p.type===`front`?`front`:`right`]:[];return{L:n,W:r,H:i,hw:o,t:a,roofType:s,profile:c,plan:u,terrace:p,attic:_,coveredWalls:v,roofX0:h,roofX1:g,roofLen:g-h,base:Ke.plinthHeight,eave:Ke.eaveOverhang,gable:Ke.gableOverhang,roofT:Ke.roofThickness,totalHeight:Ke.plinthHeight+l+.15,extent:{x0:h,x1:g,z0:-o-Ke.eaveOverhang-.1,z1:Math.max(o+Ke.eaveOverhang,p?.type===`front`?p.z1:0)+.7}}}function Qe(e){let t=0,n=e.profile;for(let e=1;e<n.length;e++)t+=Math.hypot(n[e][0]-n[e-1][0],n[e][1]-n[e-1][1]);let r=Math.atan2(Math.abs(n[1][1]-n[0][1]),Math.abs(n[1][0]-n[0][0])),i=n[n.length-1],a=n[n.length-2],o=Math.atan2(Math.abs(i[1]-a[1]),Math.abs(i[0]-a[0]));return t+=e.eave/Math.cos(r)+e.eave/Math.cos(o),t*e.roofLen}function $e(e){let t=e.L*e.W,n=e.plan.openings.filter(e=>!e.hidden).reduce((e,t)=>e+t.w*t.h,0),r=Ye(e.profile,e.hw),i=Ye(e.profile,-e.hw),a=0;for(let t=1;t<e.profile.length;t++){let[n,r]=e.profile[t-1],[i,o]=e.profile[t];a+=(i-n)*((r+o)/2-e.H)}return{floorArea:t,wallArea:e.L*(r+i)+2*e.W*e.H+2*a-n,perimeter:2*(e.L+e.W),roofArea:Qe(e),terraceArea:e.terrace?.area||0,terraceType:e.terrace?.type||`none`,roofType:e.roofType,atticArea:e.attic?.area||0,...Ue(e.plan)}}var et=[``,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`],tt=[0,.5,1,1.5,2,2.5,3,3.5,4].slice(1).map((e,t)=>({id:t+1,roman:et[t+1],sg:e})),nt=[{id:`sand`,name:`Песок`,note:`средней крупности, не водонасыщенный`,phi:30,c:0,gamma:17,f:35,R:200,heave:!1},{id:`sandyloam`,name:`Супесь`,note:`песок с примесью глины`,phi:22,c:5,gamma:18,f:15,R:150,heave:!0},{id:`loam`,name:`Суглинок`,note:`чаще всего в средней полосе`,phi:18,c:15,gamma:18.5,f:15,R:150,heave:!0},{id:`clay`,name:`Глина`,note:`плотная, пластичная`,phi:13,c:25,gamma:19,f:15,R:150,heave:!0},{id:`peat`,name:`Торф, болото`,note:`слабый слой ~2,5 м`,weakTop:2.5,weakGamma:11,phi:18,c:15,gamma:18.5,f:15,R:0,heave:!0}],rt=[[13,7.8,2.8],[15,8.4,3.3],[16,9.4,3.8],[18,10.1,4.5],[20,12.1,5.5],[22,15,7],[24,18,9.2],[26,23.1,12.3],[28,29.5,16.5],[30,38,22.5],[32,48.4,31],[34,64.9,44.4]],it=[{id:`89`,d:.089,D:.25,cost:1},{id:`108`,d:.108,D:.3,cost:1.3},{id:`133`,d:.133,D:.35,cost:1.75},{id:`159`,d:.159,D:.45,cost:2.4}],at=.45,ot=1.4,st=.8,ct={side:.4,pad:.6},lt=.5,ut={Rb:13e3,Rs:1600,Rc:13e3,Rc90:1800,E:1e7},dt=.9,ft={floor:{summer:.4,standard:.45,winter:.55},ceiling:{summer:.25,standard:.3,winter:.35},atticFloor:.5,wallFrame:{summer:.4,standard:.45,winter:.5},wallBeam:.85,clad:.25,partition:.35,roofCover:{metaltile:.05,profnastil:.05,seam:.06,shingle:.15},roofFrame:.15,roofWarm:{summer:.15,standard:.2,winter:.25},deck:.4},pt={floor:1.5,attic:1.5,ceiling:.7,terrace:2},mt={dead:1.2,beam:1.1,live:1.3,snow:1.4},ht=[[50,100],[50,150],[50,200],[50,250]],gt=ht.filter(([,e])=>e>=150),_t=[[100,200],[100,250]],vt=[[150,150],[150,200],[200,200],[200,250]],yt=[[100,150],[100,200],[150,150],[150,200],[200,200]],bt=[3,2.5,2.25,2,1.75,1.5,1.25,1],xt=e=>e*Math.PI/180,St=(e=0,t=0,n=0,r=0,i=0)=>({dn:e,dd:t,l:n,a:r,s:i}),Ct=(e,t,n=1)=>(e.dn+=t.dn*n,e.dd+=t.dd*n,e.l+=t.l*n,e.a+=t.a*n,e.s+=t.s*n,e),wt=(...e)=>e.reduce((e,t)=>Ct(e,t),St()),Tt=(e,t)=>Ct(St(),e,t);function Et(e){let t=[e.l*mt.live,e.a*mt.live,e.s*mt.snow].sort((e,t)=>t-e);return e.dd+t[0]+.9*t[1]+.7*t[2]}var Dt=e=>e.dn+e.l+e.a+e.s,Ot=e=>e<=30?1:e>=60?0:(60-e)/30;function kt(e){let t=[[1,120],[3,150],[6,200],[24,250]];if(e<=1)return 120;for(let n=1;n<t.length;n++){let[r,i]=t[n-1],[a,o]=t[n];if(e<=a)return i+(e-r)/(a-r)*(o-i)}return 250}function At(e,t,n,r,i,{cos:a=1,mv:o=1}={}){let s=r/1e3,c=i/1e3,l=s*c*c/6,u=s*c**3/12,d=t*e*e/8,f=t*e/2*a,p=e/a,m=5*n*a*a*p**4/(384*ut.E*u),h=p/kt(p),g=d/l/(ut.Rb*o),_=1.5*f/(s*c)/(ut.Rs*o),v=m/h;return{util:Math.max(g,_,v),bend:g,shear:_,defl:v,M:d,f:m,lim:h}}function jt(e,t,n,{list:r=ht,spacings:i=[.6,.4],cos:a=1,mv:o=1}={}){let s=r.flatMap(([e,t])=>i.map(n=>({b:e,h:t,sp:n,vol:e*t/n}))).sort((e,t)=>e.vol-t.vol||t.sp-e.sp);for(let r of s){let i=At(e,t*r.sp,n*r.sp,r.b,r.h,{cos:a,mv:o});if(i.util<=1)return{b:r.b,h:r.h,spacing:r.sp,span:e,...i}}return null}function Mt(e,t,n){let r=e/1e3,i=t/1e3,a=n/(.289*Math.min(r,i));return(a<=70?1-.8*(a/100)**2:3e3/a**2)*ut.Rc*r*i}function Nt(e){if(e<=rt[0][0])return[rt[0][1],rt[0][2]];for(let t=1;t<rt.length;t++){let[n,r,i]=rt[t-1],[a,o,s]=rt[t];if(e<=a){let t=(e-n)/(a-n);return[r+t*(o-r),i+t*(s-i)]}}let t=rt[rt.length-1];return[t[1],t[2]]}function Pt(e,t){let n=t.weakTop?4:2.5,r=n-at,i=Math.PI*e.D**2/4,a=Math.PI*e.d,[o,s]=Nt(t.phi),c=t.weakTop?(t.weakGamma*t.weakTop+t.gamma*(r-t.weakTop))/r:t.gamma,l=Math.max(0,r-(t.weakTop||0)-e.D),u=(o*t.c+s*c*r)*i,d=a*t.f*l,f=st*(u+d);return{Fd:f,Nadm:f/ot,len:n,depth:r,tip:st*u,side:st*d}}function Ft(e){let t=ct.pad**2,n=ct.side**2*(Ke.plinthHeight+lt)*22+t*.15*24;return e.R*t-n}function It(e){let t=e.profile,n=[];for(let e=1;e<t.length;e++){let r=Math.abs(t[e][0]-t[e-1][0]),i=Math.atan2(Math.abs(t[e][1]-t[e-1][1]),r)*180/Math.PI;n.push({dz:r,deg:i})}let r=n[0].deg,i=n[n.length-1].deg;return n.push({dz:e.eave,deg:r},{dz:e.eave,deg:i}),n}function Lt(e){let t=0;for(let n=1;n<e.profile.length;n++){let[r,i]=e.profile[n-1],[a,o]=e.profile[n];t+=(a-r)*((i+o)/2-e.H)}return t}var Rt=(e,t,n)=>Array.from({length:n+1},(r,i)=>e+(t-e)*i/n),zt=(e,t,n)=>e.map((r,i)=>[i?(e[i-1]+r)/2:t,i<e.length-1?(r+e[i+1])/2:n]),Bt=(e,t)=>Math.max(0,Math.min(e[1],t[1])-Math.max(e[0],t[0])),Vt=e=>e.slice(1).reduce((t,n,r)=>Math.max(t,n-e[r]),0);function Ht(e,t,n,{areas:r=[],lines:i=[],points:a=[]}){let o=zt(e,n.x0,n.x1),s=zt(t,n.z0,n.z1),c=[];t.forEach((t,n)=>e.forEach((e,r)=>c.push({x:e,z:t,i:r,j:n,tx:o[r],tz:s[n],v:St()})));let l=(t,n)=>c[n*e.length+t];for(let e of r)for(let t of c)Ct(t.v,e.v,Bt(t.tx,[e.x0,e.x1])*Bt(t.tz,[e.z0,e.z1]));let u=(e,t)=>e.findIndex(([e,n])=>t>=e-1e-6&&t<=n+1e-6);for(let n of i)if(n.dir===`x`){let t=u(s,n.at);t>=0&&e.forEach((e,r)=>Ct(l(r,t).v,n.v,Bt(o[r],[n.a,n.b])))}else{let e=u(o,n.at);e>=0&&t.forEach((t,r)=>Ct(l(e,r).v,n.v,Bt(s[r],[n.a,n.b])))}for(let e of a){let t=c[0];for(let n of c)Math.hypot(n.x-e.x,n.z-e.z)<Math.hypot(t.x-e.x,t.z-e.z)&&(t=n);Ct(t.v,e.v)}for(let e of c)e.Nd=Et(e.v),e.Nn=Dt(e.v);return c}function Ut(e,t,n,{skipPerimeter:r=!1}){let i=[];if(n.forEach((a,o)=>{if(r&&(o===0||o===n.length-1))return;let s=e.filter(e=>e.j===o);i.push({span:Vt(t),len:t[t.length-1]-t[0],q:s.map(e=>[e.Nd/(e.tx[1]-e.tx[0]),e.Nn/(e.tx[1]-e.tx[0])])})}),!r)for(let r of[0,t.length-1]){let t=e.filter(e=>e.i===r);i.push({span:Vt(n),len:n[n.length-1]-n[0],q:t.map(e=>[e.Nd/(e.tz[1]-e.tz[0]),e.Nn/(e.tz[1]-e.tz[0])])})}let a=0,o=0;for(let e of i){if(e.span<=0)continue;let t=Math.max(...e.q.map(e=>e[0])),n=Math.max(...e.q.map(e=>e[1])),r=a;for(;r<vt.length&&At(e.span,t,n,...vt[r],{mv:dt}).util>1;)r++;if(r>=vt.length)return null;a=r,o=Math.max(o,e.span)}let[s,c]=vt[a],l=i.reduce((e,t)=>e+t.len,0),u=0;for(let e of i){if(e.span<=0)continue;let t=Math.max(...e.q.map(e=>e[0])),n=Math.max(...e.q.map(e=>e[1]));u=Math.max(u,At(e.span,t,n,s,c,{mv:dt}).util)}return{b:s,h:c,length:l,volume:l*s*c/1e6,span:o,util:u}}function Wt({reg:e,loads:t,offset:n={},forceMid:r=!1,foundation:i,soil:a,floorQ:o}){let s=null,c=n.x0||0,l=n.z0||0;for(let n of bt){let u=Math.max(1,Math.ceil((e.x1-e.x0-c)/n-1e-6)),d=Math.max(1,Math.ceil((e.z1-e.z0-l)/n-1e-6));r&&d%2&&d++;let f=Rt(e.x0+c,e.x1,u),p=Rt(e.z0+l,e.z1,d),m=Ht(f,p,e,t),h=jt(Vt(p)+l,o.qd,o.qn,{mv:dt,list:gt});if(!h)continue;let g=i===`strip`,_=Ut(m,f,p,{skipPerimeter:g});if(!_&&!(g&&p.length<=2))continue;let v=_?.volume||0,y=Math.max(...m.map(e=>e.Nd)),b=Math.max(...m.map(e=>e.Nn)),x=[];if(i===`piles`)for(let e of it){let t=Pt(e,a);y<=t.Nadm&&x.push({kind:`piles`,pile:e,cap:t.Nadm,capInfo:t,maxN:y,count:m.length,cost:m.length*e.cost+v*8})}else if(i===`blocks`){let e=Ft(a);e>0&&b<=e&&x.push({kind:`blocks`,cap:e,maxN:b,count:m.length,cost:m.length*.6+v*8})}else{let e=Gt(m,f,p,a);e&&x.push({kind:`strip`,...e,cost:e.columns*.6+e.length*e.width*6+v*8})}for(let e of x)(!s||e.cost<s.cost-1e-9)&&(s={...e,spacing:n,xs:f,zs:p,nodes:m,joist:h,girder:_,util:e.maxN/e.cap})}if(s)for(let e of s.nodes)e.util=(s.kind===`piles`?e.Nd:e.Nn)/s.cap;return s}function Gt(e,t,n,r){let i=(Ke.plinthHeight+lt)*24;if(r.R<=i+10)return null;let a=(t,n)=>e.filter(t).reduce((e,t)=>e+t.Nn,0)/n,o=t[t.length-1]-t[0],s=n[n.length-1]-n[0],c=Math.max(a(e=>e.j===0,o),a(e=>e.j===n.length-1,o),a(e=>e.i===0,s),a(e=>e.i===t.length-1,s)),l=Math.max(.3,Math.ceil(c/(r.R-i)*20)/20);if(l>.6)return null;let u=e.filter(e=>e.i>0&&e.i<t.length-1&&e.j>0&&e.j<n.length-1),d=Ft(r),f=u.length?Math.max(...u.map(e=>e.Nn)):0;if(u.length&&f>d)return null;let p=c/l+i;return{width:l,line:c,pressure:p,length:2*(o+s),columns:u.length,cap:1,maxN:Math.max(p/r.R,u.length?f/d:0),count:u.length}}function Kt(e,t,n){let r=nt.find(t=>t.id===e.soil)||nt[2],i=tt.find(t=>t.id===e.snowRegion)||tt[2],a=i.sg,o=ft.floor[e.package]==null?`standard`:e.package,s=e.construction===`beam`,{L:c,W:l,hw:u,H:d}=t,f=t.roofType===`mansard`,p=t.terrace,m=p?.type===`side`,h=p?.depth||0,g=[],_=[],v=(ft.roofCover[e.roofMaterial]??.06)+ft.roofFrame+(f?ft.roofWarm[o]:0),y=It(t),b=f?y[1]:y[0],x=t.roofType!==`shed`&&b.deg>=20&&b.deg<=30?1.25:1,S=y.reduce((e,t)=>e+t.dz*v/Math.cos(xt(t.deg)),0),C=y.reduce((e,t)=>e+t.dz*Ot(t.deg)*a,0),w=c+(m?h:0),T=Tt(St(S,S*mt.dead,0,0,C),t.roofLen/w),E=Math.cos(xt(b.deg)),D=t.roofType===`shed`?l:f?u-Ke.mansardKnee/Math.tan(xt(Ke.mansardLowDeg)):u,O={qd:v/E*mt.dead+a*Ot(b.deg)*x*mt.snow,qn:v/E+a*Ot(b.deg)*x},k=jt(D,O.qd,O.qn,{cos:E}),A=!1;k||(k=jt(D/2,O.qd,O.qn,{cos:E}),A=!0),k||=jt(D/2,O.qd,O.qn,{cos:E,list:_t}),_.push({id:`rafter`,name:f?`Стропила (верхние скаты)`:`Стропила`,member:k,warn:A,note:A?t.roofType===`shed`?`нужен прогон посередине на стойках`:`нужен коньковый прогон на стойках`:``}),A&&g.push(t.roofType===`shed`?`Стропила односкатной крыши пролётом ${Yt(D)} м без опоры не проходят — нужен прогон посередине на стойках или несущая перегородка`:`Стропилам нужен коньковый прогон на стойках`);let j=f?ft.atticFloor:ft.ceiling[o],M=f?pt.attic:pt.ceiling,N=f?t.attic.width:l,ee={qd:j*mt.dead+M*mt.live,qn:j+M},te=jt(l,ee.qd,ee.qn),P=!1;te||(te=jt(l/2,ee.qd,ee.qn),P=!0),_.push({id:`ceiling`,name:f?`Балки пола мансарды`:`Балки потолка`,member:te,warn:P,note:P?`с опорой посередине`:``}),P&&g.push(`${f?`Балкам пола мансарды`:`Балкам потолка`} пролётом ${Yt(l)} м нужна опора посередине: несущая перегородка или балка на стойках вдоль дома`);let ne=St(j*l,j*l*mt.dead,0,M*N),re=s?ft.wallBeam:ft.wallFrame[o],ie=s?mt.beam:mt.dead,ae=Jt(t,u),F=Jt(t,-u),oe=Lt(t),se=(n.partitionsLength||0)*d*ft.partition/(c*l),I=ft.floor[o]+se,ce=St(I,I*mt.dead,pt.floor),le={qd:I*mt.dead+pt.floor*mt.live,qn:I+pt.floor},ue=A||P,de=e=>e?.25:.5,fe=(e,t=re,n=ie)=>St(t*e,t*e*n),pe=e=>wt(fe(e),Tt(T,de(A)),Tt(ne,de(P))),me=[{dir:`x`,at:-u,a:-c/2,b:c/2,v:pe(F)},{dir:`x`,at:u,a:-c/2,b:c/2,v:pe(ae)},{dir:`z`,at:-c/2,a:-u,b:u,v:fe(d+oe/l)},{dir:`z`,at:c/2,a:-u,b:u,v:fe(d+(m?0:oe/l))}];ue&&me.push({dir:`x`,at:0,a:-c/2,b:c/2,v:wt(A?Tt(T,.5):St(),P?Tt(ne,.5):St())});let he=[],ge=null;if(p&&(ge={areas:[{x0:p.x0,x1:p.x1,z0:p.z0,z1:p.z1,v:St(ft.deck,ft.deck*mt.dead,pt.terrace,0,p.covered?0:a)}],lines:[],points:[]},m)){let e=Tt(T,de(A)*h),t=A?[-u,0,u]:[-u,u];for(let n of t){let t=n===0?Tt(T,.5*h):e;he.push({x:c/2,z:n,v:Tt(t,.5)}),ge.points.push({x:p.x1,z:n,v:Tt(t,.5)})}let n=St(ft.clad*oe/l+.1,(ft.clad*oe/l+.1)*mt.dead);ge.lines.push({dir:`z`,at:p.x1,a:-u,b:u,v:n});let r=Tt(T,de(A)),i=h,a=jt(i,Et(r),Dt(r),{list:yt,spacings:[1],mv:dt});a||=(i=h/2,jt(i,Et(r),Dt(r),{list:yt,spacings:[1],mv:dt})),_.push({id:`tbeam`,name:`Балки террасы под крышей`,member:a&&{...a,spacing:null},warn:i<h,note:i<h?`нужна промежуточная стойка посередине`:`пролёт ${Yt(h)} м до стоек`});let o=Et(Tt(r,i))+.5,s=Mt(100,100,d);_.push({id:`tpost`,name:`Стойки террасы`,member:{b:100,h:100,util:o/s,N:o,cap:s},kind:`column`})}let _e={areas:[{x0:-c/2,x1:c/2,z0:-u,z1:u,v:ce}],lines:me,points:he},ve=e.foundation||`piles`,ye=Wt({reg:{x0:-c/2,x1:c/2,z0:-u,z1:u},loads:_e,forceMid:ue,foundation:ve,soil:r,floorQ:le}),be=null;if(p){let e=ve===`strip`?`blocks`:ve,t={qd:ft.deck*mt.dead+pt.terrace*mt.live,qn:ft.deck+pt.terrace};be=Wt({reg:{x0:p.x0,x1:p.x1,z0:p.z0,z1:p.z1},loads:ge,foundation:e,soil:r,floorQ:t,offset:m?{x0:.3}:{z0:.3}})}ye&&(_.push({id:`joist`,name:`Лаги пола`,member:ye.joist}),ye.girder&&_.push({id:`girder`,name:ve===`strip`?`Балки по внутренним опорам`:`Обвязка (брус по опорам)`,member:{...ye.girder,spacing:null}})),be&&_.push({id:`tjoist`,name:`Лаги террасы`,member:be.joist});let L=Et(wt(Tt(T,de(A)),Tt(ne,de(P)),fe(Math.max(ae,F)/2)));if(s){let e=L/.15/ut.Rc90;_.push({id:`crown`,name:`Нижний венец (смятие поперёк волокон)`,member:{b:150,h:150,util:e,N:L},kind:`crown`})}else{let e=o===`winter`?150:100,t=L*.6,n=qt(50,e,d);_.push({id:`stud`,name:`Стойки каркаса`,member:{b:50,h:e,spacing:.6,util:t/n,N:t,cap:n},kind:`column`})}ye||g.unshift(r.weakTop?`${ve===`piles`?`Сваи`:`Этот фундамент`}: на торфе мелкий фундамент не подходит — только сваи до плотного грунта`:`Подходящую раскладку опор подобрать не удалось — нужен другой тип фундамента`),r.weakTop&&ve===`piles`&&g.push(`Торф: сваи длиной от 4 м до плотного грунта, точную длину определяют пробным завинчиванием`),ve!==`piles`&&r.heave&&!r.weakTop&&g.push(`${r.name} пучинист: под ${ve===`strip`?`ленту`:`блоки`} нужна песчано-щебёночная подушка, дренаж и утеплённая отмостка, иначе зимой дом может приподнять`),ve===`piles`&&!r.weakTop&&g.push(`Лопасть сваи на глубине около ${Yt(ye?.capInfo?.depth??2.05)} м — ниже промерзания для средней полосы; для северных районов проверьте глубину промерзания`),a>=3&&g.push(`Снеговой район с большой нагрузкой: крепление стропил и обрешётки — с запасом, очищайте крышу от наледи`);let xe=[ye,be].filter(Boolean).flatMap(e=>e.nodes),Se=xe.reduce((e,t)=>e+t.v.dn,0),Ce=xe.reduce((e,t)=>e+t.Nd,0),R=Math.max(0,..._.map(e=>e.member?.util??0)),we=!ye||p&&!be||_.some(e=>!e.member),z=[{name:`Кровля, на 1 м² ската`,n:v,gf:mt.dead},{name:`Снег на 1 м² плана (μ = ${Yt(Ot(b.deg),2)}${x>1?`, ×1,25 на одном скате`:``})`,n:a*Ot(b.deg)*x,gf:mt.snow},{name:f?`Пол мансарды`:`Потолочное перекрытие`,n:j,gf:mt.dead},{name:f?`Полезная на мансарду`:`Полезная на чердак`,n:M,gf:mt.live},{name:`Стены, на 1 м² стены`,n:re,gf:ie},{name:`Пол 1 этажа`,n:ft.floor[o],gf:mt.dead},{name:`Перегородки (равномерно)`,n:se,gf:mt.dead},{name:`Полезная на пол`,n:pt.floor,gf:mt.live}];p&&z.push({name:`Терраса: настил`,n:ft.deck,gf:mt.dead},{name:`Терраса: полезная`,n:pt.terrace,gf:mt.live});for(let e of z)e.d=e.n*e.gf;return{status:we?`bad`:`ok`,soil:r,region:i,foundation:ve,house:ye,terrace:be,members:_,warnings:g,loads:z,mass:{dead:Se/9.81,design:Ce/9.81},util:Math.max(ye?.util??0,be?.util??0,R)}}function qt(e,t,n){let r=e/1e3,i=t/1e3,a=n/(.289*i);return(a<=70?1-.8*(a/100)**2:3e3/a**2)*ut.Rc*r*i}function Jt(e,t){let n=e.profile;if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]+1e-9){let[r,i]=n[e-1],[a,o]=n[e];return i+(t-r)/(a-r)*(o-i)}return n[n.length-1][1]}function Yt(e,t=1){return e.toLocaleString(`ru-RU`,{maximumFractionDigits:t})}var Xt=e=>e/9.81,Zt=e=>Yt(Xt(e),1),Qt=e=>`${e.b}×${e.h}`;function $t(e){let t=e.house;if(!t)return`не подобраны`;let n=e.terrace?` + ${e.terrace.count} под террасой`:``;return t.kind===`piles`?`${t.count}${n} винтовых свай Ø${t.pile.id} мм, лопасть ${t.pile.D*1e3} мм, длина ${Yt(t.capInfo.len)} м`:t.kind===`blocks`?`${t.count}${n} столбов из блоков 400×400 мм на подушке`:`лента ${t.width*1e3} мм по периметру${t.columns?` и ${t.columns} столбов внутри`:``}${e.terrace?`, ${e.terrace.count} столбов под террасой`:``}`}function en(e){let t=e.house;return t?t.kind===`strip`?`давление под лентой ${Yt(t.pressure,0)} кПа при допустимом ${e.soil.R}`:`нагрузка ${t.kind===`piles`?`на сваю`:`на столб`} до ${Zt(t.maxN)} т при допустимой ${Zt(t.cap)} т`:``}function tn(e){let t=[[`Опоры (предв. расчёт)`,$t(e)]],n=Object.fromEntries(e.members.filter(e=>e.member).map(e=>[e.id,e.member])),r=[];return n.girder&&r.push(`обвязка ${Qt(n.girder)}`),n.joist&&r.push(`лаги ${Qt(n.joist)} шаг ${n.joist.spacing*1e3}`),n.ceiling&&r.push(`балки перекрытия ${Qt(n.ceiling)} шаг ${n.ceiling.spacing*1e3}`),n.rafter&&r.push(`стропила ${Qt(n.rafter)} шаг ${n.rafter.spacing*1e3}`),r.length&&t.push([`Сечения (предв. расчёт)`,r.join(`, `)+` мм`]),t}var nn=e=>{let t=new TextEncoder().encode(e),n=``;return t.forEach(e=>n+=String.fromCharCode(e)),btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)},rn=e=>{let t=atob(e.replace(/-/g,`+`).replace(/_/g,`/`));return new TextDecoder().decode(Uint8Array.from(t,e=>e.charCodeAt(0)))},an={length:`l`,width:`w`,roofType:`rt`,wallMaterial:`wm`,wallFinish:`wf`,roofMaterial:`rm`,roofFinish:`rf`,plinth:`pl`,windowFrame:`fr`,doorType:`dt`,foundation:`fd`,package:`pk`,construction:`cn`,soil:`so`,snowRegion:`sn`},on={front:`f`,back:`b`,left:`l`,right:`r`},sn={f:`front`,b:`back`,l:`left`,r:`right`},cn=e=>Math.round(e*1e3)/1e3,ln=e=>e.room?e.room:[e.split,cn(e.r),e.door==null?-1:cn(e.door),ln(e.a),ln(e.b)],un=e=>typeof e==`string`?{room:e}:Array.isArray(e)?{split:e[0],r:e[1],door:e[2]<0?null:e[2],a:un(e[3]),b:un(e[4])}:null;function dn(e){let t={v:2};for(let[n,r]of Object.entries(an))t[r]=e[n];return t.t=[e.terrace?.type,e.terrace?.depth],t.p=[ln(e.plan.tree),e.plan.openings.map(e=>[e.kind===`door`?`d`:`w`,e.type||``,on[e.wall],cn(e.pos)])],e.site&&(t.s=Se(e.site)),nn(JSON.stringify(t))}function fn(e){if(e?.v!==2)return e;let t={};for(let[n,r]of Object.entries(an))t[n]=e[r];return Array.isArray(e.t)&&(t.terrace={type:e.t[0],depth:e.t[1]}),Array.isArray(e.p)&&(t.plan={tree:un(e.p[0]),openings:(e.p[1]||[]).map((e,t)=>({id:`o${t}`,kind:e[0]===`d`?`door`:`window`,type:e[1]||void 0,wall:sn[e[2]],pos:e[3]}))}),e.s&&(t.site=Ce(e.s)),t}function pn(e){let t=new URL(location.href);return t.hash=``,t.searchParams.delete(`embed`),t.searchParams.set(`c`,dn(e)),t.toString()}var mn=e=>new Set((e||[]).map(e=>e.id)),hn=(e,t)=>{if(typeof e!=`number`||!isFinite(e))return;let n=Math.round((e-t.min)/t.step)*t.step+t.min;return Math.min(t.max,Math.max(t.min,+n.toFixed(3)))};function gn(e,t,n=0){if(!e||typeof e!=`object`||n>8)return null;if(`room`in e)return t.has(e.room)?{room:e.room}:null;if(e.split!==`v`&&e.split!==`h`)return null;let r=gn(e.a,t,n+1),i=gn(e.b,t,n+1);if(!r||!i)return null;let a=typeof e.r==`number`?Math.min(1,Math.max(0,e.r)):.5,o=e.door===null?null:typeof e.door==`number`?Math.min(1,Math.max(0,e.door)):.5;return{split:e.split,r:a,door:o,a:r,b:i}}function _n(e,t){if(!e||typeof e!=`object`)return;let n=gn(e.tree,mn(t.roomTypes));if(!n||!Array.isArray(e.openings))return;let r=mn(t.windowTypes),i=e.openings.slice(0,20).filter(e=>e&&typeof e.id==`string`&&e.id.length<40&&[`front`,`back`,`left`,`right`].includes(e.wall)&&typeof e.pos==`number`&&e.pos>=0&&e.pos<=1&&(e.kind===`door`||e.kind===`window`&&r.has(e.type))).map(e=>e.kind===`door`?{id:e.id,kind:`door`,wall:e.wall,pos:e.pos}:{id:e.id,kind:`window`,type:e.type,wall:e.wall,pos:e.pos});if(i.some(e=>e.kind===`door`))return{tree:n,openings:i}}function vn(e,t){let n={};if(!e||typeof e!=`object`)return n;let r=hn(e.length,t.limits.length),i=hn(e.width,t.limits.width);r!==void 0&&(n.length=r),i!==void 0&&(n.width=i);let a=(t,r)=>{mn(r).has(e[t])&&(n[t]=e[t])};a(`roofType`,t.roofTypes),a(`plinth`,t.plinths),a(`windowFrame`,t.windowFrames),a(`doorType`,t.doorTypes),a(`foundation`,t.foundations),a(`package`,t.packages),a(`construction`,t.constructions),a(`soil`,nt),a(`snowRegion`,tt);let o=t.wallMaterials.find(t=>t.id===e.wallMaterial);o&&(n.wallMaterial=o.id,n.wallFinish=(o.finishes.find(t=>t.id===e.wallFinish)||o.finishes[0]).id);let s=t.roofMaterials.find(t=>t.id===e.roofMaterial);s&&(n.roofMaterial=s.id,n.roofFinish=(s.finishes.find(t=>t.id===e.roofFinish)||s.finishes[0]).id),e.terrace&&mn(t.terraces).has(e.terrace.type)&&(n.terrace={type:e.terrace.type,depth:hn(e.terrace.depth,t.terraceDepth)??t.terraceDepth.min});let c=_n(e.plan,t);c&&(n.plan=c);let l=R(e.site);return l&&(n.site=l),n}function yn(e){let t=new URLSearchParams(location.search).get(`c`);if(!t||t.length>8e3)return{};try{return vn(fn(JSON.parse(rn(t))),e)}catch{return{}}}function bn(e){let t=new URL(location.href);t.searchParams.set(`c`,dn(e)),history.replaceState(null,``,t.pathname+t.search+t.hash)}var xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cn=1e3,wn=1001,Tn=1002,En=1003,Dn=1004,On=1005,kn=1006,An=1007,jn=1008,Mn=1009,Nn=1010,Pn=1011,Fn=1012,In=1013,Ln=1014,Rn=1015,zn=1016,Bn=1017,Vn=1018,Hn=1020,Un=35902,Wn=35899,Gn=1021,Kn=1022,qn=1023,Jn=1026,Yn=1027,Xn=1028,Zn=1029,Qn=1030,$n=1031,er=1033,tr=33776,nr=33777,rr=33778,ir=33779,ar=35840,or=35841,sr=35842,cr=35843,lr=36196,ur=37492,dr=37496,fr=37488,pr=37489,mr=37490,hr=37491,gr=37808,_r=37809,vr=37810,yr=37811,br=37812,xr=37813,Sr=37814,Cr=37815,wr=37816,Tr=37817,Er=37818,Dr=37819,Or=37820,kr=37821,Ar=36492,jr=36494,Mr=36495,Nr=36283,Pr=36284,Fr=36285,Ir=36286,Lr=2300,Rr=2301,zr=2302,Br=2303,Vr=2400,Hr=2401,Ur=2402,Wr=3200,Gr=`srgb`,Kr=`srgb-linear`,qr=`linear`,Jr=`srgb`,Yr=7680,Xr=35044,Zr=2e3;function Qr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $r(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ei(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ti(){let e=ei(`canvas`);return e.style.display=`block`,e}var ni={};function ri(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ii(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=ii(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=ii(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ai(...e){let t=e.join(` `);t in ni||(ni[t]=!0,V(...e))}function oi(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var si={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},li=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ui=1234567,di=Math.PI/180,fi=180/Math.PI;function pi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(li[e&255]+li[e>>8&255]+li[e>>16&255]+li[e>>24&255]+`-`+li[t&255]+li[t>>8&255]+`-`+li[t>>16&15|64]+li[t>>24&255]+`-`+li[n&63|128]+li[n>>8&255]+`-`+li[n>>16&255]+li[n>>24&255]+li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]).toLowerCase()}function U(e,t,n){return Math.max(t,Math.min(n,e))}function mi(e,t){return(e%t+t)%t}function hi(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function gi(e,t,n){return e===t?0:(n-e)/(t-e)}function _i(e,t,n){return(1-n)*e+n*t}function vi(e,t,n,r){return _i(e,t,1-Math.exp(-n*r))}function yi(e,t=1){return t-Math.abs(mi(e,t*2)-t)}function bi(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function xi(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Si(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ci(e,t){return e+Math.random()*(t-e)}function wi(e){return e*(.5-Math.random())}function Ti(e){e!==void 0&&(ui=e);let t=ui+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ei(e){return e*di}function Di(e){return e*fi}function Oi(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function ki(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ai(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ji(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Mi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ni(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Pi={DEG2RAD:di,RAD2DEG:fi,generateUUID:pi,clamp:U,euclideanModulo:mi,mapLinear:hi,inverseLerp:gi,lerp:_i,damp:vi,pingpong:yi,smoothstep:bi,smootherstep:xi,randInt:Si,randFloat:Ci,randFloatSpread:wi,seededRandom:Ti,degToRad:Ei,radToDeg:Di,isPowerOfTwo:Oi,ceilPowerOfTwo:ki,floorPowerOfTwo:Ai,setQuaternionFromProperEuler:ji,normalize:Ni,denormalize:Mi},W=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(U(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Li.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Li.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ii.copy(this).projectOnVector(e),this.sub(Ii)}reflect(e){return this.sub(Ii.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ii=new G,Li=new Fi,K=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ai(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ri.makeScale(e,t)),this}rotate(e){return ai(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ri.makeRotation(-e)),this}translate(e,t){return ai(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ri.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ri=new K,zi=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bi=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vi(){let e={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ui(e.r),e.g=Ui(e.g),e.b=Ui(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Wi(e.r),e.g=Wi(e.g),e.b=Wi(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?qr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ai(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ai(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Kr]:{primaries:t,whitePoint:r,transfer:qr,toXYZ:zi,fromXYZ:Bi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gr},outputColorSpaceConfig:{drawingBufferColorSpace:Gr}},[Gr]:{primaries:t,whitePoint:r,transfer:Jr,toXYZ:zi,fromXYZ:Bi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gr}}}),e}var Hi=Vi();function Ui(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Wi(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Gi,Ki=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=ei(`canvas`)),Gi.width=e.width,Gi.height=e.height;let t=Gi.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ei(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ui(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ui(t[e]/255)*255):t[e]=Ui(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},qi=0,Ji=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qi++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Yi(r[t].image)):e.push(Yi(r[t]))}else e=Yi(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Yi(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ki.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var Xi=0,Zi=new G,Qi=class e extends ci{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=wn,i=wn,a=kn,o=jn,s=qn,c=Mn,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xi++}),this.uuid=pi(),this.name=``,this.source=new Ji(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zi).x}get height(){return this.source.getSize(Zi).y}get depth(){return this.source.getSize(Zi).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x-=Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Tn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y-=Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Tn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qi.DEFAULT_IMAGE=null,Qi.DEFAULT_MAPPING=300,Qi.DEFAULT_ANISOTROPY=1;var $i=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this.w=U(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this.w=U(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ea=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $i(0,0,e,t),this.scissorTest=!1,this.viewport=new $i(0,0,e,t),this.textures=[];let r=new Qi({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ji(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},ta=class extends ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends Qi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ra=class extends Qi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ia=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/aa.setFromMatrixColumn(e,0).length(),i=1/aa.setFromMatrixColumn(e,1).length(),a=1/aa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sa,e,ca)}lookAt(e,t,n){let r=this.elements;return da.subVectors(e,t),da.lengthSq()===0&&(da.z=1),da.normalize(),la.crossVectors(n,da),la.lengthSq()===0&&(Math.abs(n.z)===1?da.x+=1e-4:da.z+=1e-4,da.normalize(),la.crossVectors(n,da)),la.normalize(),ua.crossVectors(da,la),r[0]=la.x,r[4]=ua.x,r[8]=da.x,r[1]=la.y,r[5]=ua.y,r[9]=da.y,r[2]=la.z,r[6]=ua.z,r[10]=da.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*P,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*P,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*P,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=aa.set(r[0],r[1],r[2]).length(),o=aa.set(r[4],r[5],r[6]).length(),s=aa.set(r[8],r[9],r[10]).length();i<0&&(a=-a),oa.copy(this);let c=1/a,l=1/o,u=1/s;return oa.elements[0]*=c,oa.elements[1]*=c,oa.elements[2]*=c,oa.elements[4]*=l,oa.elements[5]*=l,oa.elements[6]*=l,oa.elements[8]*=u,oa.elements[9]*=u,oa.elements[10]*=u,t.setFromRotationMatrix(oa),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Zr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Zr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},aa=new G,oa=new ia,sa=new G(0,0,0),ca=new G(1,1,1),la=new G,ua=new G,da=new G,fa=new ia,pa=new Fi,ma=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(U(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-U(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(U(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-U(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(U(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-U(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ma.DEFAULT_ORDER=`XYZ`;var ha=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ga=0,_a=new G,va=new Fi,ya=new ia,ba=new G,xa=new G,Sa=new G,Ca=new Fi,wa=new G(1,0,0),Ta=new G(0,1,0),Ea=new G(0,0,1),Da={type:`added`},Oa={type:`removed`},ka={type:`childadded`,child:null},Aa={type:`childremoved`,child:null},ja=class e extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ga++}),this.uuid=pi(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new ma,r=new Fi,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ia},normalMatrix:{value:new K}}),this.matrix=new ia,this.matrixWorld=new ia,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis(wa,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wa,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(xa,ba,this.up):ya.lookAt(ba,xa,this.up),this.quaternion.setFromRotationMatrix(ya),r&&(ya.extractRotation(r.matrixWorld),va.setFromRotationMatrix(ya),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Da),ka.child=e,this.dispatchEvent(ka),ka.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oa),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Da),ka.child=e,this.dispatchEvent(ka),ka.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,Sa),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,Ca,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ja.DEFAULT_UP=new G(0,1,0),ja.DEFAULT_MATRIX_AUTO_UPDATE=!0,ja.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ma=class extends ja{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Na={type:`move`},Pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Na)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ma;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},La={h:0,s:0,l:0};function Ra(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hi.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Hi.workingColorSpace){return this.r=e,this.g=t,this.b=n,Hi.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Hi.workingColorSpace){if(e=mi(e,1),t=U(t,0,1),n=U(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ra(i,r,e+1/3),this.g=Ra(i,r,e),this.b=Ra(i,r,e-1/3)}return Hi.colorSpaceToWorking(this,r),this}setStyle(e,t=Gr){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gr){let n=Fa[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gr){return Hi.workingToColorSpace(za.copy(this),e),Math.round(U(za.r*255,0,255))*65536+Math.round(U(za.g*255,0,255))*256+Math.round(U(za.b*255,0,255))}getHexString(e=Gr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Hi.workingColorSpace){Hi.workingToColorSpace(za.copy(this),t);let n=za.r,r=za.g,i=za.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Hi.workingColorSpace){return Hi.workingToColorSpace(za.copy(this),t),e.r=za.r,e.g=za.g,e.b=za.b,e}getStyle(e=Gr){Hi.workingToColorSpace(za.copy(this),e);let t=za.r,n=za.g,r=za.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+t,Ia.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ia),e.getHSL(La);let n=_i(Ia.h,La.h,t),r=_i(Ia.s,La.s,t),i=_i(Ia.l,La.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},za=new q;q.NAMES=Fa;var Ba=class extends ja{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Va=new G,Ha=new G,Ua=new G,Wa=new G,Ga=new G,Ka=new G,qa=new G,Ja=new G,Ya=new G,Xa=new G,Za=new $i,Qa=new $i,$a=new $i,eo=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Va.subVectors(e,t),r.cross(Va);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Va.subVectors(r,t),Ha.subVectors(n,t),Ua.subVectors(e,t);let a=Va.dot(Va),o=Va.dot(Ha),s=Va.dot(Ua),c=Ha.dot(Ha),l=Ha.dot(Ua),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wa)!==null&&Wa.x>=0&&Wa.y>=0&&Wa.x+Wa.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Wa)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Wa.x),s.addScaledVector(a,Wa.y),s.addScaledVector(o,Wa.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Za.setScalar(0),Qa.setScalar(0),$a.setScalar(0),Za.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),$a.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Za,i.x),a.addScaledVector(Qa,i.y),a.addScaledVector($a,i.z),a}static isFrontFacing(e,t,n,r){return Va.subVectors(n,t),Ha.subVectors(e,t),Va.cross(Ha).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Va.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),Va.cross(Ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ga.subVectors(r,n),Ka.subVectors(i,n),Ja.subVectors(e,n);let s=Ga.dot(Ja),c=Ka.dot(Ja);if(s<=0&&c<=0)return t.copy(n);Ya.subVectors(e,r);let l=Ga.dot(Ya),u=Ka.dot(Ya);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ga,a);Xa.subVectors(e,i);let f=Ga.dot(Xa),p=Ka.dot(Xa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ka,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qa.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qa,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ga,a).addScaledVector(Ka,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},to=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ro.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ro.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ro.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ro):ro.fromBufferAttribute(r,t),ro.applyMatrix4(e.matrixWorld),this.expandByPoint(ro);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ro),ro.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),po.subVectors(this.max,fo),ao.subVectors(e.a,fo),oo.subVectors(e.b,fo),so.subVectors(e.c,fo),co.subVectors(oo,ao),lo.subVectors(so,oo),uo.subVectors(ao,so);let t=[0,-co.z,co.y,0,-lo.z,lo.y,0,-uo.z,uo.y,co.z,0,-co.x,lo.z,0,-lo.x,uo.z,0,-uo.x,-co.y,co.x,0,-lo.y,lo.x,0,-uo.y,uo.x,0];return!go(t,ao,oo,so,po)||(t=[1,0,0,0,1,0,0,0,1],!go(t,ao,oo,so,po))?!1:(mo.crossVectors(co,lo),t=[mo.x,mo.y,mo.z],go(t,ao,oo,so,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ro).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ro).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(no[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),no[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),no[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),no[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),no[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),no[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),no[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),no[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(no)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},no=[new G,new G,new G,new G,new G,new G,new G,new G],ro=new G,io=new to,ao=new G,oo=new G,so=new G,co=new G,lo=new G,uo=new G,fo=new G,po=new G,mo=new G,ho=new G;function go(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ho.fromArray(e,a);let o=i.x*Math.abs(ho.x)+i.y*Math.abs(ho.y)+i.z*Math.abs(ho.z),s=t.dot(ho),c=n.dot(ho),l=r.dot(ho);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var _o=new G,vo=new W,yo=0,bo=class extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yo++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Xr,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXYZ(t,_o.x,_o.y,_o.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix4(e),this.setXYZ(t,_o.x,_o.y,_o.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyNormalMatrix(e),this.setXYZ(t,_o.x,_o.y,_o.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.transformDirection(e),this.setXYZ(t,_o.x,_o.y,_o.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ni(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ni(t,this.array),n=Ni(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ni(t,this.array),n=Ni(n,this.array),r=Ni(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ni(t,this.array),n=Ni(n,this.array),r=Ni(r,this.array),i=Ni(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},xo=class extends bo{constructor(e,t,n){super(new Uint16Array(e),t,n)}},So=class extends bo{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Co=class extends bo{constructor(e,t,n){super(new Float32Array(e),t,n)}},wo=new to,To=new G,Eo=new G,Do=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?wo.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);let t=To.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(To,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Eo)),this.expandByPoint(To.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Oo=0,ko=new ia,Ao=new ja,jo=new G,Mo=new to,No=new to,Po=new G,Fo=class e extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oo++}),this.uuid=pi(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Qr(e)?So:xo)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new K().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ko.makeRotationFromQuaternion(e),this.applyMatrix4(ko),this}rotateX(e){return ko.makeRotationX(e),this.applyMatrix4(ko),this}rotateY(e){return ko.makeRotationY(e),this.applyMatrix4(ko),this}rotateZ(e){return ko.makeRotationZ(e),this.applyMatrix4(ko),this}translate(e,t,n){return ko.makeTranslation(e,t,n),this.applyMatrix4(ko),this}scale(e,t,n){return ko.makeScale(e,t,n),this.applyMatrix4(ko),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Co(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mo.setFromBufferAttribute(n),this.morphTargetsRelative?(Po.addVectors(this.boundingBox.min,Mo.min),this.boundingBox.expandByPoint(Po),Po.addVectors(this.boundingBox.max,Mo.max),this.boundingBox.expandByPoint(Po)):(this.boundingBox.expandByPoint(Mo.min),this.boundingBox.expandByPoint(Mo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(Mo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];No.setFromBufferAttribute(n),this.morphTargetsRelative?(Po.addVectors(Mo.min,No.min),Mo.expandByPoint(Po),Po.addVectors(Mo.max,No.max),Mo.expandByPoint(Po)):(Mo.expandByPoint(No.min),Mo.expandByPoint(No.max))}Mo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Po.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Po));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Po.fromBufferAttribute(a,t),o&&(jo.fromBufferAttribute(e,t),Po.add(jo)),r=Math.max(r,n.distanceToSquared(Po))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new bo(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let c=new G,l=new G,u=new G,d=new W,f=new W,p=new W,m=new G,h=new G;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new G,y=new G,b=new G,x=new G;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new bo(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Po.fromBufferAttribute(e,t),Po.normalize(),e.setXYZ(t,Po.x,Po.y,Po.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new bo(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Io=new G,Lo=new G,Ro=new K,zo=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Io.subVectors(n,t).cross(Lo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Io),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ro.getNormalMatrix(e),r=this.coplanarPoint(Io).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bo=0,Vo=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bo++}),this.uuid=pi(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new zo().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new W().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ho=new G,Uo=new G,Wo=new G,Go=new G,Ko=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ho)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ho.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ho.copy(this.origin).addScaledVector(this.direction,t),Ho.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uo.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Go.copy(this.origin).sub(Uo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Wo),o=Go.dot(this.direction),s=-Go.dot(Wo),c=Go.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uo).addScaledVector(Wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ho.subVectors(e.center,this.origin);let n=Ho.dot(this.direction),r=Ho.dot(Ho)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ho)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,P=1/w,ne=T-ee*D,re=E-te*D,ie=O-ee*A,ae=k-te*A,F=j-ee*N,oe=M-te*N,se=F*ae-oe*ie,I=ne*oe-re*F,ce=ie*re-ae*ne;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=P*(se*D+I*A+ce*N);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qo=class extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jo=new ia,Yo=new Ko,Xo=new Do,Zo=new G,Qo=new G,$o=new G,es=new G,ts=new G,ns=new G,rs=new G,is=new G,J=class extends ja{constructor(e=new Fo,t=new qo){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ns.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ts.fromBufferAttribute(s,e),a?ns.addScaledVector(ts,r):ns.addScaledVector(ts.sub(t),r))}t.add(ns)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Yo.copy(e.ray).recast(e.near),Xo.containsPoint(Yo.origin)===!1&&(Yo.intersectSphere(Xo,Zo)===null||Yo.origin.distanceToSquared(Zo)>(e.far-e.near)**2)||(Jo.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(Jo),(n.boundingBox===null||Yo.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Yo)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=os(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=os(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=os(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=os(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function as(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;is.copy(s),is.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(is);return l<n.near||l>n.far?null:{distance:l,point:is.clone(),object:e}}function os(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Qo),e.getVertexPosition(c,$o),e.getVertexPosition(l,es);let u=as(e,t,n,r,Qo,$o,es,rs);if(u){let e=new G;eo.getBarycoord(rs,Qo,$o,es,e),i&&(u.uv=eo.getInterpolatedAttribute(i,s,c,l,e,new W)),a&&(u.uv1=eo.getInterpolatedAttribute(a,s,c,l,e,new W)),o&&(u.normal=eo.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};eo.getNormal(Qo,$o,es,t.normal),u.face=t,u.barycoord=e}return u}var ss=class extends Qi{constructor(e=null,t=1,n=1,r,i,a,o,s,c=En,l=En,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cs=class extends bo{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ls=new ia,us=new ia,ds=[],fs=new to,ps=new ia,ms=new J,hs=new Do,gs=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ps)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new to),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),fs.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(fs)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Do),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),hs.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ls),us.multiplyMatrices(n,ls),ms.matrixWorld=us,ms.raycast(e,ds);for(let e=0,n=ds.length;e<n;e++){let n=ds[e];n.instanceId=i,n.object=this,t.push(n)}ds.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ss(new Float32Array(r*this.count),r,this.count,Xn,Rn));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Do,vs=new W(.5,.5),ys=new G,bs=class{constructor(e=new zo,t=new zo,n=new zo,r=new zo,i=new zo,a=new zo){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476+vs.distanceTo(e.center),_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xs=class extends Qi{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ss=class extends Qi{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cs=class extends Qi{constructor(e,t,n=Ln,r,i,a,o=En,s=En,c,l=Jn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ws=class extends Cs{constructor(e,t=Ln,n=301,r,i,a=En,o=En,s,c=Jn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ts=class extends Qi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Es=class e extends Fo{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Co(c,3)),this.setAttribute(`normal`,new Co(l,3)),this.setAttribute(`uv`,new Co(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ds=class e extends Fo{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new G,l=new W;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Co(a,3)),this.setAttribute(`normal`,new Co(o,3)),this.setAttribute(`uv`,new Co(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Os=class e extends Fo{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Co(u,3)),this.setAttribute(`normal`,new Co(d,3)),this.setAttribute(`uv`,new Co(f,2));function _(){let a=new G,_=new G,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new W,m=new G,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class e extends Os{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class e extends Fo{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Co(i,3)),this.setAttribute(`normal`,new Co(i.slice(),3)),this.setAttribute(`uv`,new Co(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new G,r=new G,i=new G;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new G;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new G;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new G,t=new G,n=new G,r=new G,o=new W,s=new W,c=new W;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},js=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){V(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new W:new G);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,r=[],i=[],a=[],o=new G,s=new ia;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new G)}i[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(U(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(U(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ms=class extends js{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new W){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ns=class extends Ms{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ps(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Fs=new G,Is=new G,Ls=new Ps,Rs=new Ps,zs=new Ps,Bs=class extends js{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Is.subVectors(r[0],r[1]).add(r[0]),c=Is);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Fs.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Fs),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ls.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Rs.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),zs.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ls.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Rs.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),zs.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ls.calc(s),Rs.calc(s),zs.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vs(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Hs(e,t){let n=1-e;return n*n*t}function Us(e,t){return 2*(1-e)*e*t}function Ws(e,t){return e*e*t}function Gs(e,t,n,r){return Hs(e,t)+Us(e,n)+Ws(e,r)}function Ks(e,t){let n=1-e;return n*n*n*t}function qs(e,t){let n=1-e;return 3*n*n*e*t}function Js(e,t){return 3*(1-e)*e*e*t}function Ys(e,t){return e*e*e*t}function Xs(e,t,n,r,i){return Ks(e,t)+qs(e,n)+Js(e,r)+Ys(e,i)}var Zs=class extends js{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Xs(e,r.x,i.x,a.x,o.x),Xs(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qs=class extends js{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Xs(e,r.x,i.x,a.x,o.x),Xs(e,r.y,i.y,a.y,o.y),Xs(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$s=class extends js{constructor(e=new W,t=new W){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends js{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends js{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Gs(e,r.x,i.x,a.x),Gs(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends js{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Gs(e,r.x,i.x,a.x),Gs(e,r.y,i.y,a.y),Gs(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends js{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new W){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Vs(o,s.x,c.x,l.x,u.x),Vs(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this}},ic=Object.freeze({__proto__:null,ArcCurve:Ns,CatmullRomCurve3:Bs,CubicBezierCurve:Zs,CubicBezierCurve3:Qs,EllipseCurve:Ms,LineCurve:$s,LineCurve3:ec,QuadraticBezierCurve:tc,QuadraticBezierCurve3:nc,SplineCurve:rc}),ac=class extends js{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ic[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ic[n.type]().fromJSON(n))}return this}},oc=class extends ac{constructor(e){super(),this.type=`Path`,this.currentPoint=new W,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $s(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new tc(this.currentPoint.clone(),new W(e,t),new W(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Zs(this.currentPoint.clone(),new W(e,t),new W(n,r),new W(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new rc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ms(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sc=class extends oc{constructor(e){super(e),this.uuid=pi(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new oc().fromJSON(n))}return this}};function cc(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=lc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=gc(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return dc(a,o,n,s,c,l,0),o}function lc(e,t,n,r,i){let a;if(i===Bc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Lc(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Lc(i/r|0,e[i],e[i+1],a);return a&&kc(a,a.next)&&(Rc(a),a=a.next),a}function uc(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(kc(n,n.next)||Oc(n.prev,n,n.next)===0)){if(Rc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function dc(e,t,n,r,i,a,o){if(!e)return;!o&&a&&xc(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?pc(e,r,i,a):fc(e))t.push(c.i,e.i,l.i),Rc(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=mc(uc(e),t),dc(e,t,n,r,i,a,2)):o===2&&hc(e,t,n,r,i,a):dc(uc(e),t,n,r,i,a,1);break}}}function fc(e){let t=e.prev,n=e,r=e.next;if(Oc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ec(i,s,a,c,o,l,m.x,m.y)&&Oc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Oc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Cc(p,m,t,n,r),v=Cc(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ec(s,u,c,d,l,f,y.x,y.y)&&Oc(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ec(s,u,c,d,l,f,b.x,b.y)&&Oc(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ec(s,u,c,d,l,f,y.x,y.y)&&Oc(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ec(s,u,c,d,l,f,b.x,b.y)&&Oc(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function mc(e,t){let n=e;do{let r=n.prev,i=n.next.next;!kc(r,i)&&Ac(r,n,n.next,i)&&Pc(r,i)&&Pc(i,r)&&(t.push(r.i,n.i,i.i),Rc(n),Rc(n.next),n=e=i),n=n.next}while(n!==e);return uc(n)}function hc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Dc(o,e)){let s=Ic(o,e);o=uc(o,o.next),s=uc(s,s.next),dc(o,t,n,r,i,a,0),dc(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function gc(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=lc(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(wc(o))}i.sort(_c);for(let e=0;e<i.length;e++)n=vc(i[e],n);return n}function _c(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function vc(e,t){let n=yc(e,t);if(!n)return t;let r=Ic(n,e);return uc(r,r.next),uc(n,n.next)}function yc(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(kc(e,n))return n;do{if(kc(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Tc(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Pc(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&bc(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function bc(e,t){return Oc(e.prev,e,t.prev)<0&&Oc(t.next,e,e.next)<0}function xc(e,t,n,r){let i=e;do i.z===0&&(i.z=Cc(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Sc(i)}function Sc(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Cc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function wc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Tc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ec(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Tc(e,t,n,r,i,a,o,s)}function Dc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Nc(e,t)&&(Pc(e,t)&&Pc(t,e)&&Fc(e,t)&&(Oc(e.prev,e,t.prev)||Oc(e,t.prev,t))||kc(e,t)&&Oc(e.prev,e,e.next)>0&&Oc(t.prev,t,t.next)>0)}function Oc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function kc(e,t){return e.x===t.x&&e.y===t.y}function Ac(e,t,n,r){let i=Mc(Oc(e,t,n)),a=Mc(Oc(e,t,r)),o=Mc(Oc(n,r,e)),s=Mc(Oc(n,r,t));return!!(i!==a&&o!==s||i===0&&jc(e,n,t)||a===0&&jc(e,r,t)||o===0&&jc(n,e,r)||s===0&&jc(n,t,r))}function jc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Mc(e){return e>0?1:e<0?-1:0}function Nc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ac(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Pc(e,t){return Oc(e.prev,e,e.next)<0?Oc(e,t,e.next)>=0&&Oc(e,e.prev,t)>=0:Oc(e,t,e.prev)<0||Oc(e,e.next,t)<0}function Fc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ic(e,t){let n=zc(e.i,e.x,e.y),r=zc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Lc(e,t,n,r){let i=zc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Rc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function zc(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Vc=class{static triangulate(e,t,n=2){return cc(e,t,n)}},Hc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Uc(e),Wc(n,e);let a=e.length;t.forEach(Uc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Wc(n,t[e]);let o=Vc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Uc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Wc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Gc=class e extends Fo{constructor(e=new sc([new W(.5,.5),new W(-.5,.5),new W(-.5,-.5),new W(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Co(r,3)),this.setAttribute(`uv`,new Co(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Kc:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new G,b=new G,x=new G}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Hc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Hc.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||H(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new W(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new W(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let te;if(p===0)te=Hc.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);F(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);F(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=Hc.triangulateShape(e,t)}let P=te.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),F(x.x,x.y,x.z)):F(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),F(x.x,x.y,x.z)):F(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);F(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?F(i.x,i.y+g[s-1].y,g[s-1].x+n):F(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=te[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=te[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=te[e];oe(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=te[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function F(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function se(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ic[i.type]().fromJSON(i)),new e(r,t.options)}},Kc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new W(a,o),new W(s,c),new W(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new W(o,1-c),new W(l,1-d),new W(f,1-m),new W(h,1-_)]:[new W(s,1-c),new W(u,1-d),new W(p,1-m),new W(g,1-_)]}};function qc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Jc=class e extends As{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Yc=class e extends Fo{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Co(p,3)),this.setAttribute(`normal`,new Co(m,3)),this.setAttribute(`uv`,new Co(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Xc=class e extends Fo{constructor(e=new sc([new W(0,.5),new W(-.5,-.5),new W(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Co(r,3)),this.setAttribute(`normal`,new Co(i,3)),this.setAttribute(`uv`,new Co(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Hc.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Hc.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Hc.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Zc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Zc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Qc=class e extends Fo{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Co(p,3)),this.setAttribute(`normal`,new Co(m,3)),this.setAttribute(`uv`,new Co(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},$c=class e extends Fo{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new G,f=new G,p=new G;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Co(c,3)),this.setAttribute(`normal`,new Co(l,3)),this.setAttribute(`uv`,new Co(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function el(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(nl(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(nl(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function tl(e){let t={};for(let n=0;n<e.length;n++){let r=el(e[n]);for(let e in r)t[e]=r[e]}return t}function nl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rl(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function il(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Hi.workingColorSpace}var al={clone:el,merge:tl},ol=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cl=class extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ol,this.fragmentShader=sl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=el(e.uniforms),this.uniformsGroups=rl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new $i().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new ia().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ll=class extends cl{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ul=class extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends Vo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fl=class extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Wr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ml(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function hl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var gl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},_l=class extends gl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vr,endingEnd:Vr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hr:i=e,o=2*t-n;break;case Ur:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Hr:a=e,s=2*n-t;break;case Ur:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},vl=class extends gl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},yl=class extends gl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bl=class extends gl{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Cl(n,t,g,y,r);i[p]=xl(x,o,_,b,m)}return i}};function xl(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Sl(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Cl(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=xl(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Sl(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var wl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),hl(e.settings)&&(n.settings={inTangents:ml(e.settings.inTangents,Array),outTangents:ml(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break;case Br:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return Br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;hl(this.settings)&&(Tl(this.settings.inTangents,e),Tl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&$r(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===zr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,hl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Tl(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}wl.prototype.ValueTypeName=``,wl.prototype.TimeBufferType=Float32Array,wl.prototype.ValueBufferType=Float32Array,wl.prototype.DefaultInterpolation=Rr;var El=class extends wl{constructor(e,t,n){super(e,t,n)}};El.prototype.ValueTypeName=`bool`,El.prototype.ValueBufferType=Array,El.prototype.DefaultInterpolation=Lr,El.prototype.InterpolantFactoryMethodLinear=void 0,El.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends wl{constructor(e,t,n,r){super(e,t,n,r)}};Dl.prototype.ValueTypeName=`color`;var Ol=class extends wl{constructor(e,t,n,r){super(e,t,n,r)}};Ol.prototype.ValueTypeName=`number`;var kl=class extends gl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Fi.slerpFlat(i,0,a,c-o,a,c,s);return i}},Al=class extends wl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}};Al.prototype.ValueTypeName=`quaternion`,Al.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends wl{constructor(e,t,n){super(e,t,n)}};jl.prototype.ValueTypeName=`string`,jl.prototype.ValueBufferType=Array,jl.prototype.DefaultInterpolation=Lr,jl.prototype.InterpolantFactoryMethodLinear=void 0,jl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends wl{constructor(e,t,n,r){super(e,t,n,r)}};Ml.prototype.ValueTypeName=`vector`;var Nl=class extends ja{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pl=class extends Nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ja.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fl=new ia,Il=new G,Ll=new G,Rl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ia,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new $i(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zl=new G,Bl=new Fi,Vl=new G,Hl=class extends ja{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ia,this.projectionMatrix=new ia,this.projectionMatrixInverse=new ia,this.coordinateSystem=Zr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Bl,Vl),Vl.x===1&&Vl.y===1&&Vl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Bl,Vl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zl,Bl,Vl),Vl.x===1&&Vl.y===1&&Vl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Bl,Vl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ul=new G,Wl=new W,Gl=new W,Kl=class extends Hl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fi*2*Math.atan(Math.tan(di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ul.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ul.x,Ul.y).multiplyScalar(-e/Ul.z),Ul.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ul.x,Ul.y).multiplyScalar(-e/Ul.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,Gl),t.subVectors(Gl,Wl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(di*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ql=class extends Rl{constructor(){super(new Kl(90,1,.5,500)),this.isPointLightShadow=!0}},Jl=class extends Nl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yl=class extends Hl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xl=class extends Rl{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zl=class extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ja.DEFAULT_UP),this.updateMatrix(),this.target=new ja,this.shadow=new Xl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ql=class extends Nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},$l=-90,eu=1,tu=class extends ja{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kl($l,eu,e,t);r.layers=this.layers,this.add(r);let i=new Kl($l,eu,e,t);i.layers=this.layers,this.add(i);let a=new Kl($l,eu,e,t);a.layers=this.layers,this.add(a);let o=new Kl($l,eu,e,t);o.layers=this.layers,this.add(o);let s=new Kl($l,eu,e,t);s.layers=this.layers,this.add(s);let c=new Kl($l,eu,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},nu=class extends Kl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ru=`\\[\\]\\.:\\/`,iu=RegExp(`[\\[\\]\\.:\\/]`,`g`),au=`[^\\[\\]\\.:\\/]`,ou=`[^`+ru.replace(`\\.`,``)+`]`,su=`((?:WC+[\\/:])*)`.replace(`WC`,au),cu=`(WCOD+)?`.replace(`WCOD`,ou),lu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,au),uu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,au),du=RegExp(`^`+su+cu+lu+uu+`$`),fu=[`material`,`materials`,`bones`,`map`],pu=class{constructor(e,t,n){let r=n||mu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(iu,``)}static parseTrackName(e){let t=du.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);fu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mu.Composite=pu,mu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},mu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},mu.prototype.GetterByBindingType=[mu.prototype._getValue_direct,mu.prototype._getValue_array,mu.prototype._getValue_arrayElement,mu.prototype._getValue_toArray],mu.prototype.SetterByBindingTypeAndVersioning=[[mu.prototype._setValue_direct,mu.prototype._setValue_direct_setNeedsUpdate,mu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mu.prototype._setValue_array,mu.prototype._setValue_array_setNeedsUpdate,mu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mu.prototype._setValue_arrayElement,mu.prototype._setValue_arrayElement_setNeedsUpdate,mu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mu.prototype._setValue_fromArray,mu.prototype._setValue_fromArray_setNeedsUpdate,mu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hu=new ia,gu=class{constructor(e,t,n=0,r=1/0){this.ray=new Ko(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):H(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return hu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(e,t=!0,n=[]){return vu(e,this,n,t),n.sort(_u),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)vu(e[r],this,n,t);return n.sort(_u),n}};function _u(e,t){return e.distance-t.distance}function vu(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)vu(r[e],t,n,!0)}}var yu=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=U(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(U(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var bu=class extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function xu(e,t,n,r){let i=Su(r);switch(n){case Gn:return e*t;case Xn:return e*t/i.components*i.byteLength;case Zn:return e*t/i.components*i.byteLength;case Qn:return e*t*2/i.components*i.byteLength;case $n:return e*t*2/i.components*i.byteLength;case Kn:return e*t*3/i.components*i.byteLength;case qn:return e*t*4/i.components*i.byteLength;case er:return e*t*4/i.components*i.byteLength;case tr:case nr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rr:case ir:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case or:case cr:return Math.max(e,16)*Math.max(t,8)/4;case ar:case sr:return Math.max(e,8)*Math.max(t,8)/2;case lr:case ur:case fr:case pr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case dr:case mr:case hr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _r:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case vr:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case yr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case br:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wr:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Er:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Or:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ar:case jr:case Mr:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Nr:case Pr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fr:case Ir:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Su(e){switch(e){case Mn:case Nn:return{byteLength:1,components:1};case Fn:case Pn:case zn:return{byteLength:2,components:1};case Bn:case Vn:return{byteLength:2,components:4};case Ln:case In:case Rn:return{byteLength:4,components:1};case Un:case Wn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Cu(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function wu(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},Tu={basic:{uniforms:tl([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:tl([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:tl([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:tl([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:tl([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new q(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:tl([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:tl([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:tl([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:tl([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:tl([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:tl([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:tl([X.common,X.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:tl([X.lights,X.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Tu.physical={uniforms:tl([Tu.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Eu={r:0,b:0,g:0},Du=new ia,Ou=new K;Ou.set(-1,0,0,0,1,0,0,0,1);function ku(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new Es(1,1,1),new cl({name:`BackgroundCubeMaterial`,uniforms:el(Tu.backgroundCube.uniforms),vertexShader:Tu.backgroundCube.vertexShader,fragmentShader:Tu.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Du.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ou),l.material.toneMapped=Hi.getTransfer(i.colorSpace)!==Jr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Yc(2,2),new cl({name:`BackgroundMaterial`,uniforms:el(Tu.background.uniforms),vertexShader:Tu.background.vertexShader,fragmentShader:Tu.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Hi.getTransfer(i.colorSpace)!==Jr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Eu,il(e)),n.buffers.color.setClear(Eu.r,Eu.g,Eu.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Au(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ju(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Mu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Nu(e){let t=this,n=null,r=0,i=!1,a=!1,o=new zo,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Pu=4,Fu=6,Iu=20,Lu=256,Ru=new Yl,zu=new q,Bu=null,Vu=0,Hu=0,Uu=!1,Wu=new G,Gu=new G,Ku=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Wu}=i;Bu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Vu,Hu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,Yu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:zn,format:qn,colorSpace:Kr,depthBuffer:!1},r=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qu(r)),this._blurMaterial=Zu(r,e,t),this._ggxMaterial=Xu(r,e,t)}return r}_compileMaterial(e){let t=new J(new Fo,e);this._renderer.compile(t,Ru)}_sceneToCubeUV(e,t,n,r,i){let a=new Kl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(zu),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Es,new qo({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(zu),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Yu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Yu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ru)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Pu?n-d+Pu:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Yu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ru),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Yu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ru)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Yu(t,3*l*(r>this._lodMax-Pu?r-this._lodMax+Pu:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ru)}};function qu(e){let t=[],n=[],r=e,i=e-Pu+1+Fu;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Gu.set(1,r,n):e===1?Gu.set(-n,1,-r):e===2?Gu.set(-n,r,1):e===3?Gu.set(-1,r,-n):e===4?Gu.set(-n,-1,r):Gu.set(n,r,-1),Gu.toArray(l,(e*6+t)*3)}}let u=new Fo;u.setAttribute(`position`,new bo(c,3)),u.setAttribute(`outputDirection`,new bo(l,3)),n.push(new J(u,null)),r>Pu&&r--}return{lodMeshes:n,sizeLods:t}}function Ju(e,t,n){let r=new ta(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Yu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Xu(e,t,n){return new cl({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Lu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zu(e,t,n){return new cl({name:`SphericalGaussianBlur`,defines:{SAMPLES:Iu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qu(){return new cl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $u(){return new cl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ed(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var td=class extends ta{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),i=new cl({name:`CubemapFromEquirect`,uniforms:el(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=kn),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function nd(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new td(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ku(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ku(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function rd(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ai(`WebGLRenderer: `+e+` extension not supported.`),t}}}function id(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?So:xo)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ad(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function od(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function sd(e,t,n){let r=new WeakMap,i=new $i;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new na(h,p,m,u);g.type=Rn,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function cd(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ld={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ud(e,t,n,r,i,a){let o=new ta(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Fo;l.setAttribute(`position`,new Co([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Co([0,2,0,0,2,0],2));let u=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new J(l,u),f=new Yl(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new ta(t,n,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new ta(t,n,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Hi.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ld[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var dd=new Qi,fd=new Cs(1,1),pd=new na,md=new ra,hd=new xs,gd=[],_d=[],vd=new Float32Array(16),yd=new Float32Array(9),bd=new Float32Array(4);function xd(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gd[i];if(a===void 0&&(a=new Float32Array(i),gd[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Sd(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cd(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wd(e,t){let n=_d[t];n===void 0&&(n=new Int32Array(t),_d[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Td(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ed(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sd(n,t))return;e.uniform2fv(this.addr,t),Cd(n,t)}}function Dd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sd(n,t))return;e.uniform3fv(this.addr,t),Cd(n,t)}}function Od(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sd(n,t))return;e.uniform4fv(this.addr,t),Cd(n,t)}}function kd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sd(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Cd(n,t)}else{if(Sd(n,r))return;bd.set(r),e.uniformMatrix2fv(this.addr,!1,bd),Cd(n,r)}}function Ad(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sd(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Cd(n,t)}else{if(Sd(n,r))return;yd.set(r),e.uniformMatrix3fv(this.addr,!1,yd),Cd(n,r)}}function jd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sd(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Cd(n,t)}else{if(Sd(n,r))return;vd.set(r),e.uniformMatrix4fv(this.addr,!1,vd),Cd(n,r)}}function Md(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Nd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sd(n,t))return;e.uniform2iv(this.addr,t),Cd(n,t)}}function Pd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sd(n,t))return;e.uniform3iv(this.addr,t),Cd(n,t)}}function Fd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sd(n,t))return;e.uniform4iv(this.addr,t),Cd(n,t)}}function Id(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ld(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sd(n,t))return;e.uniform2uiv(this.addr,t),Cd(n,t)}}function Rd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sd(n,t))return;e.uniform3uiv(this.addr,t),Cd(n,t)}}function zd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sd(n,t))return;e.uniform4uiv(this.addr,t),Cd(n,t)}}function Bd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fd.compareFunction=n.isReversedDepthBuffer()?518:515,a=fd):a=dd,n.setTexture2D(t||a,i)}function Vd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||md,i)}function Hd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||hd,i)}function Ud(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pd,i)}function Wd(e){switch(e){case 5126:return Td;case 35664:return Ed;case 35665:return Dd;case 35666:return Od;case 35674:return kd;case 35675:return Ad;case 35676:return jd;case 5124:case 35670:return Md;case 35667:case 35671:return Nd;case 35668:case 35672:return Pd;case 35669:case 35673:return Fd;case 5125:return Id;case 36294:return Ld;case 36295:return Rd;case 36296:return zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Ud}}function Gd(e,t){e.uniform1fv(this.addr,t)}function Kd(e,t){let n=xd(t,this.size,2);e.uniform2fv(this.addr,n)}function qd(e,t){let n=xd(t,this.size,3);e.uniform3fv(this.addr,n)}function Jd(e,t){let n=xd(t,this.size,4);e.uniform4fv(this.addr,n)}function Yd(e,t){let n=xd(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xd(e,t){let n=xd(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zd(e,t){let n=xd(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qd(e,t){e.uniform1iv(this.addr,t)}function $d(e,t){e.uniform2iv(this.addr,t)}function ef(e,t){e.uniform3iv(this.addr,t)}function tf(e,t){e.uniform4iv(this.addr,t)}function nf(e,t){e.uniform1uiv(this.addr,t)}function rf(e,t){e.uniform2uiv(this.addr,t)}function af(e,t){e.uniform3uiv(this.addr,t)}function of(e,t){e.uniform4uiv(this.addr,t)}function sf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fd:dd;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function cf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||md,a[e])}function lf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||hd,a[e])}function uf(e,t,n){let r=this.cache,i=t.length,a=wd(n,i);Sd(r,a)||(e.uniform1iv(this.addr,a),Cd(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pd,a[e])}function df(e){switch(e){case 5126:return Gd;case 35664:return Kd;case 35665:return qd;case 35666:return Jd;case 35674:return Yd;case 35675:return Xd;case 35676:return Zd;case 5124:case 35670:return Qd;case 35667:case 35671:return $d;case 35668:case 35672:return ef;case 35669:case 35673:return tf;case 5125:return nf;case 36294:return rf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return uf}}var ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wd(t.type)}},pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=df(t.type)}},mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hf=/(\w+)(\])?(\[|\.)?/g;function gf(e,t){e.seq.push(t),e.map[t.id]=t}function _f(e,t,n){let r=e.name,i=r.length;for(hf.lastIndex=0;;){let a=hf.exec(r),o=hf.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gf(n,l===void 0?new ff(s,e,t):new pf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new mf(s),gf(n,e)),n=e}}}var vf=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_f(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yf(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bf=37297,xf=0;function Sf(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Cf=new K;function wf(e){Hi._getMatrix(Cf,Hi.workingColorSpace,e);let t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(Hi.getTransfer(e)){case qr:return[t,`LinearTransferOETF`];case Jr:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Tf(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Sf(e.getShaderSource(t),r)}return i}function Ef(e,t){let n=wf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Df={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Of(e,t){let n=Df[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var kf=new G;function Af(){return Hi.getLuminanceCoefficients(kf),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${kf.x.toFixed(4)}, ${kf.y.toFixed(4)}, ${kf.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jf(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pf).join(`
`)}function Mf(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Nf(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pf(e){return e!==``}function Ff(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function If(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(e){return e.replace(Lf,Bf)}var zf=new Map;function Bf(e,t){let n=Y[t];if(n===void 0){let e=zf.get(t);if(e!==void 0)n=Y[e],V(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Rf(n)}var Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(e){return e.replace(Vf,Uf)}function Uf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Wf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Gf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Kf(e){return Gf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var qf={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Jf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:qf[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Yf={302:`ENVMAP_MODE_REFRACTION`};function Xf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Yf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Zf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Qf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Zf[e.combine]||`ENVMAP_BLENDING_NONE`}function $f(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ep(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Kf(n),l=Jf(n),u=Xf(n),d=Qf(n),f=$f(n),p=jf(n),m=Mf(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pf).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pf).join(`
`),_.length>0&&(_+=`
`)):(g=[Wf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pf).join(`
`),_=[Wf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Of(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Ef(`linearToOutputTexel`,n.outputColorSpace),Af(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pf).join(`
`)),o=Rf(o),o=Ff(o,n),o=If(o,n),s=Rf(s),s=Ff(s,n),s=If(s,n),o=Hf(o),s=Hf(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=yf(i,i.VERTEX_SHADER,y),S=yf(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Tf(i,x,`vertex`),n=Tf(i,S,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new vf(i,h),T=Nf(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,bf)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xf++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var tp=0,np=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rp(e),t.set(e,n)),n}},rp=class{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}};function ip(e){return e===1030||e===37490||e===36285}function ap(e,t,n,r,i,a){let o=new ha,s=new np,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Tu[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,L=pe&&!!i.iridescenceThicknessMap,xe=me&&!!i.sheenColorMap,Se=me&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,R=!!i.specularColorMap,we=!!i.specularIntensityMap,z=he&&!!i.transmissionMap,B=he&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Hi.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&ip(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:L,sheen:me,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:R,specularIntensityMap:we,transmission:he,transmissionMap:z,thicknessMap:B,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:L&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:R&&m(i.specularColorMap.channel),specularIntensityMapUv:we&&m(i.specularIntensityMap.channel),transmissionMapUv:z&&m(i.transmissionMap.channel),thicknessMapUv:B&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Hi.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Hi.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Tu[t];n=al.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ep(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function op(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function sp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lp(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||sp),r.length>1&&r.sort(t||cp),i.length>1&&i.sort(t||cp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function up(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lp,e.set(t,[i])):n>=r.length?(i=new lp,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function dp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new q};break;case`SpotLight`:n={position:new G,direction:new G,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function fp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pp=0;function mp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hp(e){let t=new dp,n=fp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new ia,o=new ia;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(mp);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function gp(e){let t=new hp(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function _p(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gp(e),t.set(n,[a])):r>=i.length?(a=new gp(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bp=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],xp=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Sp=new ia,Cp=new G,wp=new G;function Tp(e,t,n){let r=new bs,i=new W,a=new W,o=new $i,s=new fl,c=new pl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new cl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:vp,fragmentShader:yp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Fo;m.setAttribute(`position`,new bo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new J(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){V(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ta(i.x,i.y,{format:Qn,type:zn,minFilter:kn,magFilter:kn,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Cs(i.x,i.y,Rn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Jn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=En,d.map.depthTexture.magFilter=En}else l.isPointLight?(d.map=new td(i.x),d.map.depthTexture=new ws(i.x,Ln)):(d.map=new ta(i.x,i.y),d.map.depthTexture=new Cs(i.x,i.y,Ln)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Jn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=kn,d.map.depthTexture.magFilter=kn):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=En,d.map.depthTexture.magFilter=En);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Cp.setFromMatrixPosition(l.matrixWorld),e.position.copy(Cp),wp.copy(e.position),wp.add(bp[t]),e.up.copy(xp[t]),e.lookAt(wp),e.updateMatrixWorld(),n.makeTranslation(-Cp.x,-Cp.y,-Cp.z),Sp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Sp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new ta(i.x,i.y,{format:Qn,type:zn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ep(e,t){function n(){let t=!1,n=new $i,r=null,i=new $i(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=si[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new $i().fromArray(re),F=new $i().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ce(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function L(t){t===void 0&&(t=e.TEXTURE0+M-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+M-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function z(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ne(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:L,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:R,texImage2D:Oe,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:De,texSubImage2D:we,texSubImage3D:z,compressedTexSubImage2D:B,compressedTexSubImage3D:Te,scissor:Me,viewport:Ne,reset:Ie}}function Dp(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new W,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):ei(`canvas`)}function g(e,t,n){let r=1,i=Ce(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?qr:Hi.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&xe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ce(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ce(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?le(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[Cn]:e.REPEAT,[wn]:e.CLAMP_TO_EDGE,[Tn]:e.MIRRORED_REPEAT},ie={[En]:e.NEAREST,[Dn]:e.NEAREST_MIPMAP_NEAREST,[On]:e.NEAREST_MIPMAP_LINEAR,[kn]:e.LINEAR,[An]:e.LINEAR_MIPMAP_NEAREST,[jn]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function I(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=se(n.start,r.width,4),c=se(t.start,r.width,4);n.start<=i+1&&a===c&&se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Hi.getPrimaries(Hi.workingColorSpace),r=o.colorSpace===``?null:Hi.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Se(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Yn,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&I(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=xu(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=xu(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ce(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ce(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Hi.getPrimaries(Hi.workingColorSpace),r=o.colorSpace===``?null:Hi.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Se(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);F(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ce(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,be(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,be(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,be(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function fe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=be(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function pe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)fe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?fe(i.__webglFramebuffer[0],t,0):fe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),de(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),de(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,i){let a=r.get(t);n!==void 0&&ue(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&pe(t)}function he(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&L(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=be(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),de(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ue(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),ue(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ue(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&pe(t)}function ge(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let _e=[],ve=[];function ye(t){if(t.samples>0){if(L(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(_e.length=0,ve.length=0,_e.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(_e.push(l),ve.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ve)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function be(e){return Math.min(i.maxSamples,e.samples)}function L(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function xe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Se(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Hi.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ce(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=P,this.setTextureCube=ne,this.rebindTextures=me,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Op(e,t){function n(n,r=``){let i,a=Hi.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ap=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cl({vertexShader:kp,fragmentShader:Ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Yc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends ci{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new jp,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new W,C=null,w=null,T=new Kl;T.viewport=new $i;let E=new Kl;E.viewport=new $i;let D=[T,E],O=new nu,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Pa,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Pa,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Pa,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Yn:Jn,a=_.stencil?Hn:Ln);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ta(d.textureWidth,d.textureHeight,{format:qn,type:Mn,depthTexture:new Cs(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ta(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new G,te=new G;function P(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?P(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=fi*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Kl,o.layers.enable(n),o.viewport=new $i,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ts,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Cu;F.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},Np=new ia,Pp=new K;Pp.set(-1,0,0,0,1,0,0,0,1);function Fp(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,il(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Np.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pp),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ip(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return H(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Lp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rp=null;function zp(){return Rp===null&&(Rp=new ss(Lp,16,16,Qn,zn),Rp.name=`DFG_LUT`,Rp.minFilter=kn,Rp.magFilter=kn,Rp.wrapS=wn,Rp.wrapT=wn,Rp.generateMipmaps=!1,Rp.needsUpdate=!0),Rp}var Bp=class{constructor(e={}){let{canvas:t=ti(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([er,$n,Zn]),g=new Set([Mn,Ln,Fn,Hn,Bn,Vn]),_=new Uint32Array(4),v=new Int32Array(4),y=new G,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Gr;let j=0,M=0,N=null,ee=-1,te=null,P=new $i,ne=new $i,re=null,ie=new q(0),ae=0,F=t.width,oe=t.height,se=1,I=null,ce=null,le=new $i(0,0,F,oe),ue=new $i(0,0,F,oe),de=!1,fe=new bs,pe=!1,me=!1,he=new ia,ge=new G,_e=new $i,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function be(){return N===null?se:1}let L=n;function xe(e,n){return t.getContext(e,n)}let Se,Ce,R,we,z,B,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),L===null){let t=`webgl2`;if(L=xe(t,e),L===null)throw xe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}He()}catch(e){throw t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),H(`WebGLRenderer: `+e.message),e}function He(){Se=new rd(L),Se.init(),ze=new Op(L,Se),Ce=new Mu(L,Se,e,ze),R=new Ep(L,Se),Ce.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),O=L.createFramebuffer(),k=L.createFramebuffer(),A=L.createFramebuffer(),we=new od(L),z=new op,B=new Dp(L,Se,R,z,Ce,ze,we),Te=new nd(T),Ee=new wu(L),Be=new Au(L,Ee),De=new id(L,Ee,we,Be),Oe=new cd(L,De,Ee,Be,we),Ie=new sd(L,Ce,B),Ne=new Nu(z),ke=new ap(T,Te,Se,Ce,Be,Ne),Ae=new Fp(T,z),je=new up,Me=new _p(Se),Fe=new ku(T,Te,R,Oe,p,s),Pe=new Tp(T,Oe,Ce),Ve=new Ip(L,we,Ce,R),Le=new ju(L,Se,we),Re=new ad(L,Se,we),we.programs=ke.programs,T.capabilities=Ce,T.extensions=Se,T.properties=z,T.renderLists=je,T.shadowMap=Pe,T.state=R,T.info=we}m!==1009&&(w=new ud(m,t.width,t.height,o,r,i));let Ue=new Mp(T,L);this.xr=Ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Se.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Se.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(e){e!==void 0&&(se=e,this.setSize(F,oe,!1))},this.getSize=function(e){return e.set(F,oe)},this.setSize=function(e,n,r=!0){Ue.isPresenting?V(`WebGLRenderer: Can't change size while VR device is presenting.`):(F=e,oe=n,t.width=Math.floor(e*se),t.height=Math.floor(n*se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(F*se,oe*se).floor()},this.setDrawingBufferSize=function(e,n,r){F=e,oe=n,se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(le)},this.setViewport=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),R.viewport(P.copy(le).multiplyScalar(se).round())},this.getScissor=function(e){return e.copy(ue)},this.setScissor=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),R.scissor(ne.copy(ue).multiplyScalar(se).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(e){R.setScissorTest(de=e)},this.setOpaqueSort=function(e){I=e},this.setTransparentSort=function(e){ce=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferiv(L.COLOR,0,v))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),Fe.dispose(),je.dispose(),Me.dispose(),z.dispose(),Te.dispose(),Oe.dispose(),Be.dispose(),Ve.dispose(),ke.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,$e),Ue.removeEventListener(`sessionend`,et),tt.stop()};function We(e){e.preventDefault(),ri(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){ri(`WebGLRenderer: Context Restored.`),E=!1;let e=we.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;He(),we.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Ke(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),z.remove(e)}function Ye(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ve);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=dt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*be()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*be()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Se.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ee.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),pe===!0&&Ne.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,r),e.side=0,e.needsUpdate=!0,st(e,t,r),e.side=2):st(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Me.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),me=this.localClippingEnabled,pe=Ne.init(this.clippingPlanes,me),pe===!0&&Ne.setGlobalState(this.clippingPlanes,t),D!==null&&Pe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Xe(o,n,t,e),r.add(o)}else Xe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Se.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function Qe(e){Ze&&Ze(e)}function $e(){tt.stop()}function et(){tt.start()}let tt=new Cu;tt.setAnimationLoop(Qe),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){Ze=e,Ue.setAnimationLoop(e),e===null?tt.stop():tt.start()},Ue.addEventListener(`sessionstart`,$e),Ue.addEventListener(`sessionend`,et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ue.enabled===!0&&Ue.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Me.get(e,C.length),x.init(t),x.state.textureUnits=B.getTextureUnits(),C.push(x),he.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),fe.setFromProjectionMatrix(he,Zr,t.reversedDepth),me=this.localClippingEnabled,pe=Ne.init(this.clippingPlanes,me),b=je.get(e,S.length),b.init(),S.push(b),Ue.enabled===!0&&Ue.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&nt(e,t,-1/0,T.sortObjects)}nt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(I,ce),ye=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,ye&&Fe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ne.beginShadows();let i=x.state.shadowsArray;if(Pe.render(i,e,t),pe===!0&&Ne.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];it(n,r,e,a)}ye&&Fe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];rt(b,e,n,n.viewport)}}else r.length>0&&it(n,r,e,t),ye&&Fe.render(e),rt(b,e,t)}N!==null&&M===0&&(B.updateMultisampleRenderTarget(N),B.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Be.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],B.setTextureUnits(x.state.textureUnits),pe===!0&&Ne.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(fe)){r&&_e.setFromMatrixPosition(e.matrixWorld).applyMatrix4(he);let i=Oe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,_e.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(fe))){let i=Oe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),_e.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),_e.copy(e.boundingSphere.center)),_e.applyMatrix4(e.matrixWorld).applyMatrix4(he)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,_e.z,s,t)}}else a.visible&&b.push(e,i,a,n,_e.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),pe===!0&&Ne.setGlobalState(T.clippingPlanes,n),r&&R.viewport(P.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Se.has(`EXT_color_buffer_half_float`)||Se.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new ta(1,1,{generateMipmaps:!0,type:e?zn:Mn,minFilter:jn,samples:Math.max(4,Ce.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Hi.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),ye&&Fe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),pe===!0&&Ne.setGlobalState(T.clippingPlanes,r),at(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),Se.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ot(o,t,n,s,l,c)}}function ot(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function st(e,t,n){t.isScene!==!0&&(t=ve);let r=z.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Te.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return lt(e,s),d}else s.uniforms=ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ne.uniform),lt(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vf.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function dt(e,t,n,r,i){t.isScene!==!0&&(t=ve),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Hi.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Te.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=x.state.lights;if(pe===!0&&(me===!0||e!==te)){let t=e===te&&r.id===ee;Ne.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ne.numPlanes||v.numIntersection!==Ne.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=st(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(R.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=ut(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(L,`projectionMatrix`,e.projectionMatrix),O.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(L,ge.setFromMatrixPosition(e.matrixWorld)),Ce.logarithmicDepthBuffer&&O.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(L,`sunShadowMap`,y.state.sunShadowMap,B),y.state.directionalShadowMap.length>0&&O.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&O.setValue(L,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&O.setValue(L,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){O.setOptional(L,i,`bindMatrix`),O.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(L,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(O.setOptional(L,i,`batchingTexture`),O.setValue(L,`batchingTexture`,i._matricesTexture,B),O.setOptional(L,i,`batchingIdTexture`),O.setValue(L,`batchingIdTexture`,i._indirectTexture,B),O.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(L,`batchingColorTexture`,i._colorsTexture,B));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ie.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=zp()),w){if(O.setValue(L,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ft(k,E),a&&r.fog===!0&&Ae.refreshFogUniforms(k,a),Ae.refreshMaterialUniforms(k,r,se,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}vf.upload(L,ct(v),k,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vf.upload(L,ct(v),k,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(L,`center`,i.center),O.setValue(L,`modelViewMatrix`,i.modelViewMatrix),O.setValue(L,`normalMatrix`,i.normalMatrix),O.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ve.update(n,S),Ve.bind(n,S)}}return S}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,R.viewport(P),R.scissor(ne),R.setScissorTest(re),ee=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(le).multiplyScalar(se).floor(),ne.copy(ue).multiplyScalar(se).floor(),re=de;if(n!==0&&(r=O),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(P),R.scissor(ne),R.setScissorTest(re),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function mt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ce.textureFormatReadable(e.format),t.__typeReadable=Ce.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=mt(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),a)}finally{let e=N===null?null:z.get(N).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,ze.convert(l),ze.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=N===null?null:z.get(N).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await oi(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ze.convert(t.format),_=ze.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,k),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,R.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Hi._getDrawingBufferColorSpace(e),t.unpackColorSpace=Hi._getUnpackColorSpace()}},Vp=class extends Ba{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Es;e.deleteAttribute(`uv`);let t=new ul({side:1}),n=new ul,r=new Jl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new J(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new gs(e,n,6),o=new ja;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new J(e,Hp(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new J(e,Hp(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new J(e,Hp(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new J(e,Hp(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new J(e,Hp(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new J(e,Hp(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hp(e){return new dl({color:0,emissive:16777215,emissiveIntensity:e})}var Up={type:`change`},Wp={type:`start`},Gp={type:`end`},Kp=new Ko,qp=new zo,Jp=Math.cos(70*Pi.DEG2RAD),Yp=new G,Xp=2*Math.PI,Zp={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qp=1e-6,$p=class extends bu{constructor(e,t=null){super(e,t),this.state=Zp.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:xn.ROTATE,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},this.touches={ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Fi,this._lastTargetPosition=new G,this._quat=new Fi().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yu,this._sphericalDelta=new yu,this._scale=1,this._panOffset=new G,this._rotateStart=new W,this._rotateEnd=new W,this._rotateDelta=new W,this._panStart=new W,this._panEnd=new W,this._panDelta=new W,this._dollyStart=new W,this._dollyEnd=new W,this._dollyDelta=new W,this._dollyDirection=new G,this._mouse=new W,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tm.bind(this),this._onPointerDown=em.bind(this),this._onPointerUp=nm.bind(this),this._onContextMenu=lm.bind(this),this._onMouseWheel=am.bind(this),this._onKeyDown=om.bind(this),this._onTouchStart=sm.bind(this),this._onTouchMove=cm.bind(this),this._onMouseDown=rm.bind(this),this._onMouseMove=im.bind(this),this._interceptControlDown=um.bind(this),this._interceptControlUp=dm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Zp.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Up),this.update(),this.state=Zp.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Yp.copy(t).sub(this.target),Yp.applyQuaternion(this._quat),this._spherical.setFromVector3(Yp),this.autoRotate&&this.state===Zp.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Xp:n>Math.PI&&(n-=Xp),r<-Math.PI?r+=Xp:r>Math.PI&&(r-=Xp),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Yp.setFromSpherical(this._spherical),Yp.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yp),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Yp.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new G(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new G(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Yp.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Kp.origin.copy(this.object.position),Kp.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kp.direction))<Jp?this.object.lookAt(this.target):(qp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kp.intersectPlane(qp,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Qp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qp||this._lastTargetPosition.distanceToSquared(this.target)>Qp?(this.dispatchEvent(Up),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Xp/60/60*this.autoRotateSpeed:Xp/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yp.setFromMatrixColumn(t,0),Yp.multiplyScalar(-e),this._panOffset.add(Yp)}_panUp(e,t){this.screenSpacePanning===!0?Yp.setFromMatrixColumn(t,1):(Yp.setFromMatrixColumn(t,0),Yp.crossVectors(this.object.up,Yp)),Yp.multiplyScalar(e),this._panOffset.add(Yp)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Yp.copy(r).sub(this.target);let i=Yp.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xp*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xp*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xp*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xp*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new W,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function em(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function tm(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function nm(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Gp),this.state=Zp.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function rm(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Zp.DOLLY;break;case xn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Zp.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Zp.ROTATE}break;case xn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Zp.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Zp.PAN}break;default:this.state=Zp.NONE}this.state!==Zp.NONE&&this.dispatchEvent(Wp)}function im(e){switch(this.state){case Zp.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Zp.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Zp.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function am(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Zp.NONE&&(e.preventDefault(),this.dispatchEvent(Wp),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Gp))}function om(e){this.enabled!==!1&&this._handleKeyDown(e)}function sm(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Sn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Zp.TOUCH_ROTATE;break;case Sn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Zp.TOUCH_PAN;break;default:this.state=Zp.NONE}break;case 2:switch(this.touches.TWO){case Sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Zp.TOUCH_DOLLY_PAN;break;case Sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Zp.TOUCH_DOLLY_ROTATE;break;default:this.state=Zp.NONE}break;default:this.state=Zp.NONE}this.state!==Zp.NONE&&this.dispatchEvent(Wp)}function cm(e){switch(this._trackPointer(e),this.state){case Zp.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Zp.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Zp.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Zp.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Zp.NONE}}function lm(e){this.enabled!==!1&&e.preventDefault()}function um(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function dm(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var fm=Pi.degToRad(38),pm=Pi.degToRad(17),mm=class{constructor(e,t){this.camera=e,this.controls=new $p(e,t),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,enablePan:!1,rotateSpeed:.75,zoomSpeed:.8,minPolarAngle:Pi.degToRad(12),maxPolarAngle:Pi.degToRad(86)}),this.fit=10,this.tween=null,this.onUserStart=null,this.controls.addEventListener(`start`,()=>{this.tween=null,this.onUserStart?.()})}fitDistance(e){let t=Pi.degToRad(this.camera.fov),n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e/Math.sin(Math.min(t,n)/2)*1.02}frame(e,t,{immediate:n=!1,near:r=.42,far:i=1.9}={}){this.radius=t,this.center=e.clone(),this.limits=[r,i];let a=this.fitDistance(t),o=this.controls;if(o.minDistance=a*r,o.maxDistance=a*i,n||!this.initialized){this.initialized=!0,this.fit=a,this._apply(this._startPose());return}let s=a/this.fit;if(this.fit=a,this.tween){let t=this.tween.to,n=t.position.clone().sub(t.target).multiplyScalar(s);t.target=e.clone(),t.position=e.clone().add(n);return}let c=this.camera.position.clone().sub(o.target).multiplyScalar(s);this._animate({target:e.clone(),position:e.clone().add(c)},350)}refit(){if(!this.center)return;let e=this.fitDistance(this.radius),t=this.controls,n=this.camera.position.clone().sub(t.target).multiplyScalar(e/this.fit);this.fit=e;let[r,i]=this.limits||[.42,1.9];t.minDistance=e*r,t.maxDistance=e*i,this.camera.position.copy(t.target).add(n),t.update()}_startPose(){let e=this.fit*.92,t=new G(Math.sin(fm)*Math.cos(pm),Math.sin(pm),Math.cos(fm)*Math.cos(pm));return{target:this.center.clone(),position:this.center.clone().add(t.multiplyScalar(e))}}reset(){this._animate(this._startPose(),700)}setElevation(e,t=1){if(!this.center)return;let n=this.controls,r=this.camera.position.clone().sub(n.target),i=Math.atan2(r.x,r.z),a=Pi.degToRad(e),o=r.length()*t,s=new G(Math.sin(i)*Math.cos(a),Math.sin(a),Math.cos(i)*Math.cos(a));this._animate({target:this.center.clone(),position:this.center.clone().add(s.multiplyScalar(o))},600)}zoom(e){let t=this.controls,n=this.camera.position.clone().sub(t.target),r=Pi.clamp(n.length()*e,t.minDistance,t.maxDistance);n.setLength(r),this._animate({target:t.target.clone(),position:t.target.clone().add(n)},300)}_apply({target:e,position:t}){this.controls.target.copy(e),this.camera.position.copy(t),this.controls.update()}_animate(e,t){this.tween={fromT:this.controls.target.clone(),fromP:this.camera.position.clone(),to:e,start:performance.now(),ms:t}}update(){let e=!1;if(this.tween){let t=this.tween,n=Math.min(1,(performance.now()-t.start)/t.ms),r=1-(1-n)**3;this.controls.target.lerpVectors(t.fromT,t.to.target,r);let i=t.fromP.clone().sub(t.fromT),a=t.to.position.clone().sub(t.to.target),o=Pi.lerp(i.length(),a.length(),r),s=i.normalize().lerp(a.normalize(),r).normalize();this.camera.position.copy(this.controls.target).add(s.multiplyScalar(o)),n>=1&&(this.tween=null),e=!0}return this.controls.update()||e}},hm={bedroom:[{kind:`bed`,w:1.6,d:2,alt:{w:.9,d:2},center:!0},{kind:`wardrobe`,w:1,d:.6,tall:!0}],room:[{kind:`sofa`,w:2,d:.9,alt:{w:1.6,d:.85},center:!0},{kind:`table`,w:.8,d:.8,free:!0}],kitchen:[{kind:`counter`,w:2.4,d:.6,alt:{w:1.5,d:.6}},{kind:`table`,w:.9,d:.7,free:!0}],living:[{kind:`counter`,w:2,d:.6,alt:{w:1.4,d:.6}},{kind:`sofa`,w:1.8,d:.9,alt:{w:1.4,d:.85}},{kind:`table`,w:.9,d:.7,free:!0}],bath:[{kind:`shower`,w:.9,d:.9,tall:!0},{kind:`toilet`,w:.4,d:.65},{kind:`sink`,w:.5,d:.45}],hall:[{kind:`hanger`,w:.8,d:.35,tall:!0}],storage:[{kind:`shelf`,w:1.2,d:.45,tall:!0,alt:{w:.8,d:.4}}]},gm=(e,t)=>e.x0<t.x1-1e-6&&e.x1>t.x0+1e-6&&e.z0<t.z1-1e-6&&e.z1>t.z0+1e-6;function _m(e){let{plan:t,L:n,W:r,t:i}=e,a=[],o=t.inner,s=[],c=[];for(let e of t.openings){if(e.hidden)continue;let t=e.center-e.w/2-.08,n=e.center+e.w/2+.08,r=e.kind===`door`?e.w+.15:.7,i;i=e.wall===`front`?{x0:t,x1:n,z0:o.z1-r,z1:o.z1}:e.wall===`back`?{x0:t,x1:n,z0:o.z0,z1:o.z0+r}:e.wall===`right`?{x0:o.x1-r,x1:o.x1,z0:t,z1:n}:{x0:o.x0,x1:o.x0+r,z0:t,z1:n},(e.kind===`door`?s:c).push(i)}for(let e of t.partitions){if(!e.door)continue;let t=e.door.center-e.door.w/2-.08,n=e.door.center+e.door.w/2+.08,r=e.door.w+.1;s.push(e.orient===`v`?{x0:e.at-r,x1:e.at+r,z0:t,z1:n}:{x0:t,x1:n,z0:e.at-r,z1:e.at+r})}for(let e of t.rooms){let t=hm[e.type];if(!t)continue;let n=[],r=e.x1-e.x0,i=e.z1-e.z0,o=[{name:`back`,len:r},{name:`front`,len:r},{name:`left`,len:i},{name:`right`,len:i}].sort((e,t)=>t.len-e.len),l=(t,n,r,i)=>{switch(t){case`back`:return{x0:e.x0+n,x1:e.x0+n+r,z0:e.z0,z1:e.z0+i};case`front`:return{x0:e.x0+n,x1:e.x0+n+r,z0:e.z1-i,z1:e.z1};case`left`:return{x0:e.x0,x1:e.x0+i,z0:e.z0+n,z1:e.z0+n+r};case`right`:return{x0:e.x1-i,x1:e.x1,z0:e.z0+n,z1:e.z0+n+r}}},u=(t,r)=>t.x0>=e.x0-1e-6&&t.x1<=e.x1+1e-6&&t.z0>=e.z0-1e-6&&t.z1<=e.z1+1e-6&&!n.some(e=>gm(e,t))&&!s.some(e=>gm(e,t))&&!(r.tall&&c.some(e=>gm(e,t)));for(let s of t){let t=null;for(let a of[s,s.alt].filter(Boolean)){if(s.free){let r={x0:(e.x0+e.x1-a.w)/2,x1:(e.x0+e.x1+a.w)/2,z0:(e.z0+e.z1-a.d)/2,z1:(e.z0+e.z1+a.d)/2},i={x0:r.x0-.35,x1:r.x1+.35,z0:r.z0-.35,z1:r.z1+.35};u(r,s)&&!n.some(e=>gm(e,i))&&(t={r,side:null});break}for(let e of o){if(a.w>e.len||a.d>(e.name===`back`||e.name===`front`?i:r)-.6)continue;let n=e.len-a.w;for(let r=0;r<=n+1e-6;r+=.05){let i=l(e.name,r,a.w,a.d);if(!u(i,s))continue;let o=s.center?Math.abs(r-n/2):Math.min(r,n-r);(!t||o<t.score-1e-6)&&(t={r:i,side:e.name,score:o})}if(t)break}if(t)break}t&&(n.push(t.r),a.push({kind:s.kind,side:t.side,room:e.path,...t.r}))}}return a}var vm=1.6,ym=.22,bm=1.5,xm=68,Sm=class{constructor(e,t){this.camera=e,this.dom=t,this.active=!1,this.keys=new Set,this.yaw=0,this.pitch=-.05,this.path=[],this.onRoom=null,this.onMove=null,this._room=void 0,this._down=this._down.bind(this),this._moveP=this._moveP.bind(this),this._up=this._up.bind(this),this._key=this._key.bind(this),this._keyUp=this._keyUp.bind(this),this._ray=new gu}enter(e){this.active||(this.saved={pos:this.camera.position.clone(),quat:this.camera.quaternion.clone(),fov:this.camera.fov,near:this.camera.near},this.active=!0,this.dom.addEventListener(`pointerdown`,this._down),window.addEventListener(`pointermove`,this._moveP),window.addEventListener(`pointerup`,this._up),window.addEventListener(`keydown`,this._key),window.addEventListener(`keyup`,this._keyUp)),this.setLayout(e,!0),this.camera.fov=xm,this.camera.near=.05,this.camera.updateProjectionMatrix(),this._applyCamera()}exit(){if(!this.active)return;this.active=!1,this.dom.removeEventListener(`pointerdown`,this._down),window.removeEventListener(`pointermove`,this._moveP),window.removeEventListener(`pointerup`,this._up),window.removeEventListener(`keydown`,this._key),window.removeEventListener(`keyup`,this._keyUp),this.keys.clear(),this.path=[];let e=this.saved;this.camera.position.copy(e.pos),this.camera.quaternion.copy(e.quat),this.camera.fov=e.fov,this.camera.near=e.near,this.camera.updateProjectionMatrix(),this._room=void 0}setLayout(e,t=!1){this.k=e;let{plan:n}=e,r=n.inner;this.floorY=e.base;let i=[];for(let e of n.partitions){let t=e.orient===`v`,n=(n,r)=>{r-n<.01||i.push(t?{x0:e.at-z/2,x1:e.at+z/2,z0:n,z1:r}:{x0:n,x1:r,z0:e.at-z/2,z1:e.at+z/2})};e.door?(n(e.from,e.door.center-e.door.w/2),n(e.door.center+e.door.w/2,e.to)):n(e.from,e.to)}for(let t of _m(e))i.push({x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1});this.rects=i,this.bounds={x0:r.x0+ym,x1:r.x1-ym,z0:r.z0+ym,z1:r.z1-ym},this.doors=[];for(let e of n.partitions){if(!e.door)continue;let t=e.door.center,n=e.orient===`v`,r=this._roomAt(n?e.at-.2:t,n?t:e.at-.2),i=this._roomAt(n?e.at+.2:t,n?t:e.at+.2);r>=0&&i>=0&&this.doors.push({A:r,B:i,x:n?e.at:t,z:n?t:e.at,v:n})}(t||!this._free(this.camera.position.x,this.camera.position.z))&&this._spawn(),this.path=[]}_roomAt(e,t){return this.k.plan.rooms.findIndex(n=>e>=n.x0-.001&&e<=n.x1+.001&&t>=n.z0-.001&&t<=n.z1+.001)}_spawn(){let{plan:e}=this.k,t=e.inner,n=e.openings.find(e=>e.kind===`door`&&!e.hidden),r=0,i=0,a=0;if(n){let e=.75;n.wall===`front`?[r,i,a]=[n.center,t.z1-e,0]:n.wall===`back`?[r,i,a]=[n.center,t.z0+e,Math.PI]:n.wall===`left`?[r,i,a]=[t.x0+e,n.center,-Math.PI/2]:[r,i,a]=[t.x1-e,n.center,Math.PI/2]}if(!this._free(r,i))outer:for(let e=.2;e<4;e+=.2)for(let t=0;t<16;t++){let n=r+Math.cos(t/16*Math.PI*2)*e,a=i+Math.sin(t/16*Math.PI*2)*e;if(this._free(n,a)){r=n,i=a;break outer}}this.camera.position.set(r,this.floorY+vm,i),this.yaw=a,this.pitch=-.08}_free(e,t){let n=this.bounds;if(e<n.x0||e>n.x1||t<n.z0||t>n.z1)return!1;for(let n of this.rects){let r=Math.max(n.x0,Math.min(e,n.x1)),i=Math.max(n.z0,Math.min(t,n.z1));if((e-r)**2+(t-i)**2<ym*ym)return!1}return!0}_step(e,t){let n=this.camera.position,r=!1;return this._free(n.x+e,n.z+t)?(n.x+=e,n.z+=t,!0):(e&&this._free(n.x+e,n.z)&&(n.x+=e,r=!0),t&&this._free(n.x,n.z+t)&&(n.z+=t,r=!0),r)}_down(e){(e.button===void 0||e.button===0)&&(this.drag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,id:e.pointerId,t:performance.now()})}_moveP(e){let t=this.drag;if(!t||e.pointerId!==t.id)return;let n=e.pointerType===`touch`?.006:.004;this.yaw+=(e.clientX-t.x)*n,this.pitch=Pi.clamp(this.pitch+(e.clientY-t.y)*n,-1.2,1.2),t.x=e.clientX,t.y=e.clientY,this.dirty=!0}_up(e){let t=this.drag;t&&e.pointerId===t.id&&(this.drag=null,Math.hypot(e.clientX-t.sx,e.clientY-t.sy)<8&&performance.now()-t.t<500&&this._goTo(e.clientX,e.clientY))}_key(e){if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;let t=e.code;[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(t)&&(this.keys.add(t),this.path=[],e.preventDefault())}_keyUp(e){this.keys.delete(e.code)}_goTo(e,t){let n=this.dom.getBoundingClientRect(),r=new W((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this._ray.setFromCamera(r,this.camera);let i=new zo(new G(0,1,0),-this.floorY),a=this._ray.ray.intersectPlane(i,new G);if(!a)return;let o=this.bounds,s=Pi.clamp(a.x,o.x0,o.x1),c=Pi.clamp(a.z,o.z0,o.z1),l=this.camera.position,u=this._roomAt(l.x,l.z),d=this._roomAt(s,c),f=[];if(u>=0&&d>=0&&u!==d){let e=new Map([[u,null]]),t=[u];for(;t.length;){let n=t.shift();if(n===d)break;for(let r of this.doors){let i=r.A===n?r.B:r.B===n?r.A:-1;i>=0&&!e.has(i)&&(e.set(i,{n,d:r}),t.push(i))}}if(!e.has(d))return;let n=[];for(let t=d;e.get(t);t=e.get(t).n)n.unshift(e.get(t));for(let{n:e,d:t}of n){let n=t.A===e?-1:1,r=.45;f.push(t.v?{x:t.x+n*r,z:t.z}:{x:t.x,z:t.z+n*r}),f.push(t.v?{x:t.x-n*r,z:t.z}:{x:t.x,z:t.z-n*r})}}f.push({x:s,z:c}),this.path=f,this.stuck=0,this.onMove?.()}update(e){if(!this.active)return!1;let t=this.dirty;this.dirty=!1;let n=this.camera.position;e=Math.min(e,.12);let r=this.keys,i=(r.has(`KeyW`)||r.has(`ArrowUp`)?1:0)-(r.has(`KeyS`)||r.has(`ArrowDown`)?1:0),a=+!!r.has(`ArrowLeft`)-!!r.has(`ArrowRight`),o=+!!r.has(`KeyD`)-!!r.has(`KeyA`);if(a&&(this.yaw+=a*e*1.8,t=!0),i||o){let n=bm*e,r=Math.sin(this.yaw),a=Math.cos(this.yaw),s=(-r*i+a*o)*n,c=(-a*i-r*o)*n;this._step(s,c)&&(t=!0),this.onMove?.()}else if(this.path.length){let r=this.path[0],i=r.x-n.x,a=r.z-n.z,o=Math.hypot(i,a);if(o<.08)this.path.shift();else{let t=Math.min(o,bm*e),r=n.clone();this._step(i/o*t,a/o*t);let s=Math.atan2(-i,-a)-this.yaw;s=Math.atan2(Math.sin(s),Math.cos(s)),this.yaw+=s*Math.min(1,e*4),r.distanceToSquared(n)<1e-8?++this.stuck>10&&(this.path=[]):this.stuck=0}t=!0}return t&&this._applyCamera(),t}_applyCamera(){let e=this.camera;e.position.y=this.floorY+vm,e.rotation.order=`YXZ`,e.rotation.set(this.pitch,this.yaw,0),e.updateMatrixWorld();let t=this._roomAt(e.position.x,e.position.z),n=t>=0?this.k.plan.rooms[t]:null,r=n?n.path:null;r!==this._room&&(this._room=r,this.onRoom?.(n))}};function Cm(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wm(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Tm(e,{color:t=!0,repeat:n=!0}={}){let r=new Ss(e);return t&&(r.colorSpace=Gr),n&&(r.wrapS=r.wrapT=Cn),r.generateMipmaps=!0,r.minFilter=jn,r}function Em(e,t,n,r){let i=e.createLinearGradient(0,t,0,t+n);for(let[e,t]of r)i.addColorStop(e,t);return i}var Dm=e=>`rgb(${e},${e},${e})`,Om={rounded:{shade:[[0,`rgba(255,255,255,0.22)`],[.18,`rgba(255,255,255,0.06)`],[.65,`rgba(0,0,0,0)`],[1,`rgba(0,0,0,0.26)`]],bump:[[0,Dm(90)],[.12,Dm(205)],[.45,Dm(245)],[.85,Dm(205)],[.96,Dm(70)],[1,Dm(20)]],groove:.55},log:{shade:[[0,`rgba(0,0,0,0.38)`],[.1,`rgba(255,255,255,0.04)`],[.35,`rgba(255,255,255,0.24)`],[.62,`rgba(0,0,0,0)`],[.9,`rgba(0,0,0,0.32)`],[1,`rgba(0,0,0,0.6)`]],bump:[[0,Dm(20)],[.14,Dm(170)],[.4,Dm(252)],[.7,Dm(215)],[.92,Dm(110)],[1,Dm(15)]],groove:.65},flat:{shade:[[0,`rgba(255,255,255,0.3)`],[.07,`rgba(255,255,255,0)`],[.88,`rgba(0,0,0,0)`],[.94,`rgba(0,0,0,0.25)`],[1,`rgba(0,0,0,0.45)`]],bump:[[0,Dm(150)],[.07,Dm(240)],[.9,Dm(240)],[.96,Dm(120)],[1,Dm(60)]],groove:.4},lap:{shade:[[0,`rgba(255,255,255,0.16)`],[.8,`rgba(0,0,0,0.05)`],[.92,`rgba(0,0,0,0.16)`],[1,`rgba(0,0,0,0.5)`]],bump:[[0,Dm(110)],[.9,Dm(250)],[.95,Dm(120)],[1,Dm(40)]],groove:.3}};function km({size:e=1024,count:t,profile:n=`rounded`,seed:r=7,grain:i=!0,knots:a=.4,joints:o=.3,vertical:s=!1,battens:c=!1}){let l=Cm(r),u=e/t,d=Om[n],[f,p]=wm(e,e),[m,h]=wm(e,e);if(s)for(let t of[p,h])t.translate(e,0),t.rotate(Math.PI/2);let g=e/1024;for(let n=0;n<t;n++){let t=n*u,r=i?220+Math.floor(l()*32):236+Math.floor(l()*8);if(p.fillStyle=`rgb(${r},${r-2},${r-6})`,p.fillRect(0,t,e,u),p.fillStyle=Em(p,t,u,d.shade),p.fillRect(0,t,e,u),i){for(let n=0;n<Math.max(6,Math.round(u/4));n++){let n=t+3*g+l()*(u-6*g),r=(.6+l()*2.2)*g,i=1+Math.floor(l()*4),a=l()*Math.PI*2;p.strokeStyle=`rgba(70,45,20,${.04+l()*.08})`,p.lineWidth=(.8+l()*1.6)*g,p.beginPath();for(let t=0;t<=e;t+=16*g){let o=n+Math.sin(t/e*Math.PI*2*i+a)*r;t===0?p.moveTo(t,o):p.lineTo(t,o)}p.stroke()}if(l()<a){let n=l()*e,r=t+u*(.35+l()*.3),i=Math.min(u*.25,14*g);for(let t of[-e,0,e]){let e=p.createRadialGradient(n+t,r,1,n+t,r,i);e.addColorStop(0,`rgba(60,35,15,0.45)`),e.addColorStop(1,`rgba(60,35,15,0)`),p.fillStyle=e,p.beginPath(),p.ellipse(n+t,r,i*1.6,i*.7,0,0,Math.PI*2),p.fill()}}l()<o&&(p.fillStyle=`rgba(40,25,10,0.35)`,p.fillRect(40*g+l()*(e-80*g),t+2,2*g,u-4))}else for(let n=0;n<40;n++)p.fillStyle=`rgba(0,0,0,${l()*.02})`,p.fillRect(l()*e,t+l()*u,60*g+l()*200*g,1+l()*3*g);p.fillStyle=`rgba(30,18,8,${d.groove})`,p.fillRect(0,t+u-3*g,e,3*g),h.fillStyle=Em(h,t,u,d.bump),h.fillRect(0,t,e,u)}if(c){let n=u*.28;for(let r=0;r<=t;r++){let t=r*u-n/2;p.fillStyle=`rgba(0,0,0,0.28)`,p.fillRect(0,t-3*g,e,n+6*g),p.fillStyle=`rgb(240,238,234)`,p.fillRect(0,t,e,n),p.fillStyle=Em(p,t,n,[[0,`rgba(255,255,255,0.3)`],[.5,`rgba(0,0,0,0)`],[1,`rgba(0,0,0,0.2)`]]),p.fillRect(0,t,e,n),h.fillStyle=Dm(255),h.fillRect(0,t,e,n),h.fillStyle=Dm(30),h.fillRect(0,t-3*g,e,3*g),h.fillRect(0,t+n,e,3*g)}}return{map:Tm(f),bump:Tm(m,{color:!1})}}function Am(e,t,n){let[r,i]=wm(e,t),[a,o]=wm(e,t),s=i.createImageData(e,t),c=o.createImageData(e,t);for(let r=0;r<t;r++)for(let i=0;i<e;i++){let[a,o]=n(i/e,r/t),l=(r*e+i)*4;s.data[l]=s.data[l+1]=s.data[l+2]=Math.max(0,Math.min(255,a)),s.data[l+3]=255,c.data[l]=c.data[l+1]=c.data[l+2]=Math.round(Math.max(0,Math.min(1,o))*255),c.data[l+3]=255}return i.putImageData(s,0,0),o.putImageData(c,0,0),{map:Tm(r),bump:Tm(a,{color:!1}),canvas:r}}function jm(e=512,t=320){return Am(e,t,(e,t)=>{let n=.5+.5*Math.cos(e*Math.PI*2*6),r=t*2%1,i=150+75*n+25*r,a=.55*n+.45*r;return r>.94?(i*=.55,a=.05):r<.04&&(i*=1.15),[i,a]})}function Mm(e=512,t=32){return Am(e,t,e=>{let t=e*5%1;return t<.1?[238,1]:t<.2?[250,1-(t-.1)/.1]:t>.9?[150,(t-.9)/.1]:[205+8*Math.sin(t*Math.PI),0]})}function Nm(e=512,t=32){return Am(e,t,e=>{let t=e*2%1;return t<.012?[255,1]:t<.028?[150,.1]:[212+6*Math.sin(t*Math.PI*3),.25]})}function Pm(e=512){let t=Cm(11),[n,r]=wm(e,e),[i,a]=wm(e,e),o=e/7,s=e/3;for(let n=0;n<7;n++){let i=n*o,c=n%2*s*.5;for(let e=-1;e<4;e++){let n=c+e*s;r.fillStyle=Dm(150+Math.floor(t()*80)),r.fillRect(n,i,s,o),a.fillStyle=Dm(200),a.fillRect(n,i,s,o),r.fillStyle=`rgba(0,0,0,0.6)`,r.fillRect(n,i+o*.35,3,o*.65),a.fillStyle=Dm(40),a.fillRect(n,i+o*.35,3,o*.65)}r.fillStyle=Em(r,i,o*.3,[[0,`rgba(0,0,0,0.5)`],[1,`rgba(0,0,0,0)`]]),r.fillRect(0,i,e,o*.3),a.fillStyle=Em(a,i,o*.3,[[0,Dm(20)],[1,`rgba(200,200,200,0)`]]),a.fillRect(0,i,e,o*.3)}for(let n=0;n<9e3;n++){let n=t()<.5?0:255;r.fillStyle=`rgba(${n},${n},${n},${.08+t()*.12})`,r.fillRect(t()*e,t()*e,1.5,1.5)}return{map:Tm(n),bump:Tm(i,{color:!1})}}function Fm(e=512){let t=Cm(5),[n,r]=wm(e,e),[i,a]=wm(e,e);r.fillStyle=`#5c5a56`,r.fillRect(0,0,e,e),a.fillStyle=Dm(30),a.fillRect(0,0,e,e);let o=0;for(let n of[.16,.22,.14,.2,.28]){let i=n*e,s=-t()*.2*e;for(;s<e;){let n=(.2+t()*.28)*e,c=120+Math.floor(t()*70),l=Math.floor(t()*18);for(let u of[0,-e,e])r.fillStyle=`rgb(${c+l},${c+l/2},${c-4})`,r.fillRect(s+3+u,o+3,n-6,i-6),a.fillStyle=Dm(200+Math.floor(t()*50)),a.fillRect(s+3+u,o+3,n-6,i-6);for(let e=0;e<60;e++)r.fillStyle=`rgba(0,0,0,${t()*.12})`,r.fillRect(s+t()*n,o+t()*i,2+t()*6,2+t()*6);s+=n}o+=i}return{map:Tm(n),bump:Tm(i,{color:!1})}}function Im(e=512){let t=Cm(9),[n,r]=wm(e,e),[i,a]=wm(e,e);r.fillStyle=`#cfc8bd`,r.fillRect(0,0,e,e),a.fillStyle=Dm(40),a.fillRect(0,0,e,e);let o=e/13,s=e/4;for(let e=0;e<13;e++){let n=e%2*s*.5;for(let i=-1;i<5;i++){let c=n+i*s,l=Math.floor(t()*40);r.fillStyle=`rgb(${150+l},${70+l/2},${50+l/3})`,r.fillRect(c+3,e*o+3,s-6,o-6),a.fillStyle=Dm(230),a.fillRect(c+3,e*o+3,s-6,o-6)}}return{map:Tm(n),bump:Tm(i,{color:!1})}}function Lm(e=256){let t=Cm(3);return Am(e,e,()=>{let e=t();return[225+e*30,e]})}function Rm(e=256){let[t,n]=wm(e,e);n.fillStyle=`#bdbab3`,n.fillRect(0,0,e,e);let r=e/3,i=Cm(4);for(let e=0;e<3;e++)for(let t=0;t<3;t++){let a=225+Math.floor(i()*14);n.fillStyle=`rgb(${a},${a-2},${a-6})`,n.fillRect(e*r+2,t*r+2,r-4,r-4)}return{map:Tm(t)}}function zm(e=`planks`,t=256,n=512){let r=Cm(21),[i,a]=wm(t,n);if(e===`panel`){a.fillStyle=Dm(235),a.fillRect(0,0,t,n);for(let[e,r]of[[.08,.46],[.54,.92]]){let i=t*.16,o=t*.84;a.fillStyle=`rgba(0,0,0,0.28)`,a.fillRect(i,n*e,o-i,5),a.fillRect(i,n*e,5,n*(r-e)),a.fillStyle=`rgba(255,255,255,0.35)`,a.fillRect(i,n*r-5,o-i,5),a.fillRect(o-5,n*e,5,n*(r-e))}return Tm(i,{repeat:!1})}let o=t/5;for(let e=0;e<5;e++){a.fillStyle=Dm(215+Math.floor(r()*35)),a.fillRect(e*o,0,o,n);for(let t=0;t<10;t++){let t=e*o+3+r()*(o-6);a.strokeStyle=`rgba(40,25,10,${.05+r()*.08})`,a.lineWidth=1+r(),a.beginPath(),a.moveTo(t,0),a.bezierCurveTo(t+r()*4-2,n*.3,t+r()*4-2,n*.7,t,n),a.stroke()}a.fillStyle=`rgba(20,12,5,0.55)`,a.fillRect(e*o,0,2,n)}for(let e of[.2,.78]){let r=n*e;a.fillStyle=Em(a,r-14,28,[[0,`rgba(0,0,0,0.35)`],[.15,`rgba(255,255,255,0.12)`],[.85,`rgba(0,0,0,0.05)`],[1,`rgba(0,0,0,0.4)`]]),a.fillRect(0,r-14,t,28)}return Tm(i,{repeat:!1})}function Bm(e=128,t=256){let[n,r]=wm(e,t);r.fillStyle=Em(r,0,t,[[0,`#b9c9d6`],[.35,`#7d93a5`],[.6,`#3b4b58`],[1,`#4a4f4a`]]),r.fillRect(0,0,e,t),r.save(),r.transform(1,0,-.6,1,0,0);for(let[e,n,i]of[[60,26,.16],[110,9,.12],[150,40,.07]])r.fillStyle=`rgba(255,255,255,${i})`,r.fillRect(e,0,n,t);return r.restore(),Tm(n,{repeat:!1})}function Vm(e=256){let[t,n]=wm(e,e),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return r.addColorStop(0,`#fff`),r.addColorStop(.45,`#fff`),r.addColorStop(1,`#000`),n.fillStyle=r,n.fillRect(0,0,e,e),Tm(t,{color:!1,repeat:!1})}function Hm(e=256){let[t,n]=wm(e,e);n.shadowColor=`rgba(0,0,0,0.9)`,n.shadowBlur=e*.09,n.shadowOffsetX=e*2,n.fillStyle=`#000`;let r=e*.2;return n.fillRect(r-e*2,r,e-2*r,e-2*r),Tm(t,{repeat:!1})}var Um=class{constructor(e,t){this.container=e,this.quality=t;let n=this.renderer=new Bp({antialias:t.antialias,alpha:!0,powerPreference:`high-performance`});n.setPixelRatio(t.pixelRatio),n.outputColorSpace=Gr,n.toneMapping=7,n.toneMappingExposure=.95,n.shadowMap.enabled=!0,n.shadowMap.type=1,n.setClearColor(0,0),e.appendChild(n.domElement),this.scene=new Ba,this.camera=new Kl(32,1,.1,500),this.cameraCtl=new mm(this.camera,n.domElement),this.walk=new Sm(this.camera,n.domElement);let r=new Ku(n);this.scene.environment=r.fromScene(new Vp,.04).texture,this.scene.environmentIntensity=.35,r.dispose(),this._lights(),this._ground(),this.dirty=!0,this._resize(),new ResizeObserver(()=>this._resize()).observe(e),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}_lights(){let e=this.hemi=new Pl(`#e6eef8`,`#9c8f78`,.55);this.scene.add(e),this.indoor=new Ql(`#fff4e4`,0),this.scene.add(this.indoor);let t=this.sun=new Zl(`#fff1dc`,2.4);t.castShadow=!0,t.shadow.mapSize.setScalar(this.quality.shadowMapSize),t.shadow.bias=-4e-4,t.shadow.normalBias=.025,t.shadow.radius=this.quality.softShadows?4:2,this.scene.add(t,t.target);let n=this.fill=new Zl(`#dbe6ff`,.3);n.position.set(8,4,2),this.scene.add(n)}_ground(){let e=new J(new Ds(16,64),new ul({color:`#cfd2c2`,roughness:1,transparent:!0,alphaMap:Vm(),depthWrite:!1}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,e.visible=!1,this.groundDisc=e,this.scene.add(e),this.contact=new J(new Yc(1,1),new qo({map:Hm(),transparent:!0,opacity:.55,depthWrite:!1})),this.contact.rotation.x=-Math.PI/2,this.contact.position.y=.003,this.contact.renderOrder=1,this.scene.add(this.contact)}fitTo(e,{immediate:t=!1,site:n=null}={}){let{totalHeight:r,extent:i}=e,a=(i.x0+i.x1)/2,o=(i.z0+i.z1)/2,s=(i.x1-i.x0)/2,c=(i.z1-i.z0)/2,l=Math.sqrt(s*s+c*c+(r/2)**2),u=new G(a,r*.42,o);this.contact.scale.set((i.x1-i.x0)/.6,(i.z1-i.z0-.6)/.6,1),this.contact.position.set(a,.003,o-.3),this.houseFit={center:u.clone(),radius:l},n&&(u=n.center.clone(),l=n.radius,a=u.x,o=u.z),this.siteMode=!!n,this._fit={center:u,radius:l,cx:a,cz:o},this._placeSun(),this.compass&&(this.compass.position.set(a,.006,o),this.compass.scale.setScalar(l*1.35));let d=this.sun.shadow.camera,f=l*1.25;d.left=d.bottom=-f,d.right=d.top=f,d.near=l*.5,d.far=l*6,d.updateProjectionMatrix(),this.walk.active?(this.walk.setLayout(e),this.cameraCtl.center=u.clone(),this.cameraCtl.radius=l):this.cameraCtl.frame(u,l,{immediate:t,near:n?.12:.42,far:n?1.5:1.9}),this.invalidate()}moveView(e){let t=this.cameraCtl;this.camera.position.applyMatrix4(e),t.controls.target.applyMatrix4(e),t.center&&t.center.applyMatrix4(e),t.tween&&(t.tween.fromT.applyMatrix4(e),t.tween.fromP.applyMatrix4(e),t.tween.to.target.applyMatrix4(e),t.tween.to.position.applyMatrix4(e)),this.camera.lookAt(t.controls.target),this._fit&&(this._fit.center.applyMatrix4(e),this._fit.cx=this._fit.center.x,this._fit.cz=this._fit.center.z,this._placeSun(),this.compass&&this.compass.position.set(this._fit.cx,.006,this._fit.cz)),this.invalidate()}_placeSun(){if(!this._fit)return;let{center:e,radius:t,cx:n,cz:r}=this._fit,i=this.sun,a=(this.sunDir||new G(-.5,1,.8)).clone().normalize();a.y<.07&&(a.y=.07,a.normalize()),i.position.copy(a.multiplyScalar(t*3)).add(e.clone().setY(0)),i.target.position.set(n,0,r),i.target.updateMatrixWorld()}setSun(e){this.sunState=e;let t=e&&e.elevation<-4;if(!e)this.sunDir=null,this.sun.color.set(`#fff1dc`),this.sun.intensity=2.4,this.hemi.intensity=this.walk.active?.8:.55,this.hemi.color.set(`#e6eef8`);else{let t=e.elevation;this.sunDir=new G(e.vec.x,e.vec.y,e.vec.z);let n=Pi.clamp(t/25,0,1);this.sun.color.set(`#ffa55c`).lerp(new q(`#fff1dc`),n),this.sun.intensity=t<=0?0:Pi.lerp(.9,2.4,n);let r=Pi.clamp((t+6)/12,0,1);this.hemi.intensity=Pi.lerp(.14,this.walk.active?.8:.55,r),this.hemi.color.set(`#6d7fa8`).lerp(new q(`#e6eef8`),r)}let n=e?Pi.clamp((e.elevation+6)/12,0,1):1;this.scene.environmentIntensity=Pi.lerp(.06,.35,n),this.fill.intensity=Pi.lerp(.02,.3,n),this.renderer.toneMappingExposure=Pi.lerp(.62,.95,n),this.indoorNight=1-n,this.walk.active&&(this.indoor.intensity=Pi.lerp(1.05,1.7,this.indoorNight)),this.indoor.color.set(`#fff4e4`).lerp(new q(`#ffc98a`),this.indoorNight),this.night=!!t,this.onNight?.(this.night,e?Pi.clamp((e.elevation+6)/12,0,1):1),this._placeSun(),this.invalidate()}showCompass(e,t=180){if(e&&!this.compass){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.translate(256,256),t.strokeStyle=`rgba(40,45,40,.45)`,t.lineWidth=3,t.beginPath(),t.arc(0,0,236,0,Math.PI*2),t.stroke();for(let e=0;e<72;e++){let n=e/72*Math.PI*2,r=e%18==0?22:e%9==0?14:7;t.beginPath(),t.moveTo(Math.sin(n)*236,-Math.cos(n)*236),t.lineTo(Math.sin(n)*(236-r),-Math.cos(n)*(236-r)),t.stroke()}t.font=`700 40px -apple-system, Segoe UI, Roboto, Arial, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,[[`С`,0],[`В`,90],[`Ю`,180],[`З`,270]].forEach(([e,n])=>{let r=n*Math.PI/180;t.fillStyle=e===`С`?`#b8432f`:`rgba(40,45,40,.75)`,t.fillText(e,Math.sin(r)*196,-Math.cos(r)*196)});let n=new Ss(e);n.colorSpace=Gr,n.anisotropy=4;let r=new J(new Yc(2,2),new qo({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=2,this.compass=new Ma,this.compass.add(r),this.scene.add(this.compass),this._fit&&(this.compass.position.set(this._fit.cx,.006,this._fit.cz),this.compass.scale.setScalar(this._fit.radius*1.35))}this.compass&&(this.compass.visible=e,this.compass.rotation.y=(t+180)*Math.PI/180),this.invalidate()}snapshot(e=1200,t=760,n=.88){let r=this.sunState,i=this.compass?.visible;r&&this.setSun(null),i&&(this.compass.visible=!1);let a=this.siteRoot?.visible;this.siteRoot&&(this.siteRoot.visible=!1),this.groundDisc.visible=!0;let o=this.sun.shadow.camera,s=[o.left,o.right,o.top,o.bottom,o.near,o.far],c=this._fit;if(this.houseFit){let{center:e,radius:t}=this.houseFit;this._fit={center:e,radius:t,cx:e.x,cz:e.z};let n=t*1.25;Object.assign(o,{left:-n,bottom:-n,right:n,top:n,near:t*.5,far:t*6}),o.updateProjectionMatrix(),this._placeSun()}let l=this.renderer,u=l.getSize(new W),d=l.getPixelRatio(),f=this.camera.clone();this.walk.active&&(f.fov=this.walk.saved.fov,f.near=this.walk.saved.near),f.aspect=e/t,f.updateProjectionMatrix();let p=this.cameraCtl,m=this.houseFit||{center:p.center,radius:p.radius},h=p.fitDistance.call({camera:f},m.radius),g=p._startPose.call({fit:1,center:m.center}),_=g.position.clone().sub(g.target).normalize();f.position.copy(g.target).add(_.multiplyScalar(h*.9)),f.lookAt(g.target),l.setPixelRatio(1),l.setSize(e,t,!1),l.setClearColor(16052716,1),l.render(this.scene,f);let v=l.domElement.toDataURL(`image/jpeg`,n);return l.setClearColor(0,0),l.setPixelRatio(d),l.setSize(u.x,u.y,!1),this.siteRoot&&(this.siteRoot.visible=a),this.groundDisc.visible=!1,[o.left,o.right,o.top,o.bottom,o.near,o.far]=s,o.updateProjectionMatrix(),this._fit=c,this._placeSun(),r&&this.setSun(r),i&&(this.compass.visible=!0),this.invalidate(),v}setWalk(e,t){e?(this.cameraCtl.controls.enabled=!1,this.cameraCtl.tween=null,this.walk.enter(t),this.indoor.intensity=Pi.lerp(1.05,1.7,this.indoorNight||0),this.sunDir||(this.hemi.intensity=.8)):this.walk.active&&(this.walk.exit(),this.cameraCtl.controls.enabled=!0,this.indoor.intensity=0,this.sunDir||(this.hemi.intensity=.55)),this.invalidate()}add(e){this.scene.add(e),this.invalidate()}invalidate(){this.dirty=!0}_resize(){let e=this.container.clientWidth,t=this.container.clientHeight;e&&t&&(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.cameraCtl.refit(),this.invalidate())}_loop(e=0){requestAnimationFrame(this._loop);let t=this.lastT?(e-this.lastT)/1e3:0;this.lastT=e,this.paused&&this.firstFrame||((this.walk.active?this.walk.update(t):this.cameraCtl.update())||this.dirty)&&(this.dirty=!1,this.renderer.render(this.scene,this.camera),this.onRender?.(),this.firstFrame||(this.firstFrame=!0,this.onFirstFrame?.()))}};function Wm(){let e=new URLSearchParams(location.search).get(`q`),t=matchMedia(`(pointer: coarse)`).matches||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),n=navigator.hardwareConcurrency||4,r=navigator.deviceMemory||4,i=t?n<=4||r<=3?`low`:`medium`:`high`;[`low`,`medium`,`high`].includes(e)&&(i=e);let a=window.devicePixelRatio||1;return{level:i,mobile:t,...{low:{pixelRatio:Math.min(a,1.5),shadowMapSize:1024,antialias:!0,softShadows:!1},medium:{pixelRatio:Math.min(a,1.75),shadowMapSize:1536,antialias:!0,softShadows:!0},high:{pixelRatio:Math.min(a,2),shadowMapSize:2048,antialias:!0,softShadows:!0}}[i]}}var Gm={imitation:{tile:[1.8,1.8],make:e=>km({size:e,count:12,profile:`rounded`})},blockhouse:{tile:[1.8,1.8],make:e=>km({size:e,count:9,profile:`log`,seed:13,knots:.6})},lining:{tile:[1.8,1.8],make:e=>km({size:e,count:20,profile:`flat`,seed:17,knots:.25,joints:.15})},siding:{tile:[1.8,1.8],make:e=>km({size:e,count:9,profile:`lap`,grain:!1})},vertical:{tile:[1.6,1.6],make:e=>km({size:e,count:8,profile:`flat`,seed:23,vertical:!0,battens:!0,joints:0})}},Km={metaltile:{tile:[1.11,.7],make:()=>jm(),metalness:.35,roughness:.42,bump:2},profnastil:{tile:[1,1],make:()=>Mm(),metalness:.4,roughness:.4,bump:2},seam:{tile:[1,1],make:()=>Nm(),metalness:.5,roughness:.3,bump:1.5},shingle:{tile:[1,1],make:()=>Pm(),metalness:0,roughness:.92,bump:1.5}},qm={stone:{tile:[1,1],make:()=>Fm()},brick:{tile:[1,1],make:()=>Im()},smooth:{tile:[1,1],make:()=>Lm(),color:`#77797a`}};function Jm(e,t,n){let r=new Map;return i=>{let a=e[i]||Object.values(e)[0],o=i in e?i:Object.keys(e)[0];if(!r.has(o)){let e=a.make(t);for(let t of[e.map,e.bump])t&&(t.repeat.set(1/a.tile[0],1/a.tile[1]),t.anisotropy=n);r.set(o,e)}return{def:a,tex:r.get(o)}}}function Ym({anisotropy:e=4,quality:t=`high`}={}){let n=t===`low`?512:1024,r=Jm(Gm,n,e),i=Jm(Km,n,e),a=Jm(qm,n,e),o={planks:zm(`planks`),panel:zm(`panel`)};Object.values(o).forEach(t=>t.anisotropy=e);let s=Gm.imitation.make(512),c=Gm.lining.make(512),l=km({size:512,count:8,profile:`flat`,seed:31,knots:.2}),u=Rm(),d=km({size:512,count:10,profile:`flat`,seed:41,knots:.3});d.map.repeat.set(1/1.4,1/1.4);let f=Lm(128);for(let e of[s.map,c.map,l.map])e.repeat.set(1/1.8,1/1.8);l.map.repeat.set(1/1.2,1/1.2),u.map.repeat.set(1/.9,1/.9);let p=e=>new ul(e),m={wall:p({roughness:.82,bumpScale:1.2}),trim:p({roughness:.72}),roof:p({bumpScale:2}),roofEdge:p({metalness:.35,roughness:.45}),soffit:p({map:s.map,color:`#c79a66`,roughness:.85}),rafter:p({color:`#b98a58`,roughness:.8}),plinth:p({roughness:.95,bumpScale:2}),frame:p({color:`#f6f5f2`,roughness:.45}),glass:p({color:`#1b2329`,emissive:`#ffffff`,emissiveMap:Bm(),emissiveIntensity:.55,metalness:.6,roughness:.08}),door:p({roughness:.68}),metal:p({color:`#262626`,metalness:.85,roughness:.32}),sill:p({color:`#8e9296`,metalness:.5,roughness:.4}),step:p({map:s.map,color:`#8a6342`,roughness:.85}),ventDark:p({color:`#2a2622`,roughness:1}),interior:p({map:c.map,color:`#ecdcbf`,roughness:.8,side:2}),partition:p({map:c.map,color:`#efe2c8`,roughness:.8}),floorWood:p({map:l.map,color:`#c9a477`,roughness:.75}),floorTile:p({map:u.map,roughness:.4}),deck:p({map:d.map,color:`#b98a5a`,roughness:.8}),pile:p({color:`#4b4f53`,metalness:.6,roughness:.45}),concrete:p({map:f.map,color:`#9a9a96`,roughness:.95}),beam:p({map:s.map,color:`#a87c50`,roughness:.85}),underside:p({color:`#2a2724`,roughness:1}),furnWood:p({color:`#b58a5c`,roughness:.7}),furnWhite:p({color:`#f1efea`,roughness:.5}),furnFabric:p({color:`#7f8a93`,roughness:.95}),furnGlass:p({color:`#cfe3ee`,transparent:!0,opacity:.35,roughness:.1,depthWrite:!1})},h=(e,t,n)=>{(e.map===null!=(t==null)||e.bumpMap===null!=(n==null))&&(e.needsUpdate=!0),e.map=t??null,e.bumpMap=n??null};return{...m,apply(e,t){let n=Xm(t.wallMaterials,e.wallMaterial),s=Xm(n.finishes,e.wallFinish),c=r(n.texture);h(m.wall,c.tex.map,c.tex.bump),m.wall.color.set(s.color),m.trim.color.set(s.trim);let l=Xm(t.roofMaterials,e.roofMaterial),u=Xm(l.finishes,e.roofFinish),d=i(l.texture);h(m.roof,d.tex.map,d.tex.bump),m.roof.color.set(u.color),m.roof.metalness=d.def.metalness,m.roof.roughness=d.def.roughness,m.roof.bumpScale=d.def.bump,m.roofEdge.color.set(u.color),m.roofEdge.metalness=Math.min(d.def.metalness,.35),m.roofEdge.roughness=Math.max(d.def.roughness,.45);let f=Xm(t.plinths,e.plinth),p=a(f.texture);h(m.plinth,p.tex.map,p.tex.bump),m.plinth.color.set(p.def.color||`#ffffff`);let g=Xm(t.windowFrames,e.windowFrame);m.frame.color.set(g.color);let _=Xm(t.doorTypes,e.doorType);h(m.door,o[_.texture]||o.planks,null),m.door.color.set(_.color||s.door),m.door.metalness=_.texture===`panel`?.3:0,m.door.roughness=_.texture===`panel`?.45:.68},preview(e,t,n,o=96){let s={wall:r,roof:i,plinth:a}[e],{def:c,tex:l}=s(t),u=document.createElement(`canvas`);u.width=u.height=o;let d=u.getContext(`2d`),f=l.map.image,p=Math.min(1,.9/c.tile[0]);return d.drawImage(f,0,0,f.width*p,f.height*p,0,0,o,o),n&&(d.globalCompositeOperation=`multiply`,d.fillStyle=n,d.fillRect(0,0,o,o)),u.toDataURL(`image/jpeg`,.85)}}}function Xm(e,t){return e.find(e=>e.id===t)||e[0]}function Z(e,t,n,r,{uv:i=!1,shadow:a=!0}={}){let o=new Es(e,t,n);i&&Zm(o,e,t,n);let s=new J(o,r);return s.castShadow=a,s.receiveShadow=!0,s}function Q(e,t,n,r){return e.position.set(t,n,r),e}function Zm(e,t,n,r){let i=e.attributes.uv,a=[[r,n],[r,n],[t,r],[t,r],[t,n],[t,n]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;i.setXY(n,i.getX(n)*a[e][0],i.getY(n)*a[e][1])}i.needsUpdate=!0}function Qm(e,t,n,r){let i=new oc;return i.moveTo(e,t),i.lineTo(e,r),i.lineTo(n,r),i.lineTo(n,t),i.closePath(),i}function $m(e){let t=new sc;return e.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t}function eh(e){e.traverse(e=>{e.geometry&&e.geometry.dispose()})}var th=.095,nh=.024;function rh(e,t,n,r,i,a,o){let s=a+nh/2,c=i-n+th;e.add(Q(Z(th,c,nh,o.trim),t-r/2-th/2,n+c/2,s)),e.add(Q(Z(th,c,nh,o.trim),t+r/2+th/2,n+c/2,s));let l=r+2*th+.07,u=th*1.35;e.add(Q(Z(l,u,nh*1.4,o.trim),t,i+u/2,a+nh*.7)),e.add(Q(Z(l+.06,.028,.07,o.trim),t,i+u+.014,a+.035))}function ih(e,{cx:t,sill:n,w:r,h:i},a,o){let s=n+i,c=.06,l=.075,u=a*.62;e.add(Q(Z(c,i,l,o.frame),t-r/2+c/2,n+i/2,u)),e.add(Q(Z(c,i,l,o.frame),t+r/2-c/2,n+i/2,u)),e.add(Q(Z(r,c,l,o.frame),t,s-c/2,u)),e.add(Q(Z(r,c,l,o.frame),t,n+c/2,u)),e.add(Q(Z(.05,i-2*c,l*.8,o.frame),t,n+i/2,u)),e.add(Q(Z(r-2*c,.045,l*.8,o.frame),t,n+i*.7,u));let d=new J(new Yc(r-2*c,i-2*c),o.glass);d.receiveShadow=!0,e.add(Q(d,t,n+i/2,u-.005)),rh(e,t,n,r,s,a,o);let f=Z(r+2*th+.05,.045,.085,o.trim);e.add(Q(f,t,n-.0225,a+.04));let p=Z(r,.012,.06,o.sill);p.rotation.x=.25,e.add(Q(p,t,n+.006,a+.02)),e.add(Q(Z(r+2*th,.11,nh,o.trim),t,n-.045-.055,a+nh/2))}function ah(e,{x:t,w:n,h:r},i,a){let o=.06;e.add(Q(Z(o,r,i,a.trim),t-n/2+o/2,r/2,i/2)),e.add(Q(Z(o,r,i,a.trim),t+n/2-o/2,r/2,i/2)),e.add(Q(Z(n,o,i,a.trim),t,r-o/2,i/2));let s=n-2*o,c=r-o,l=Z(s,c,.045,a.door);e.add(Q(l,t,c/2,i*.4));let u=i*.4+.0225,d=t+s/2-.12;e.add(Q(Z(.045,.16,.012,a.metal),d,1,u+.006)),e.add(Q(Z(.04,.022,.05,a.metal),d,1.04,u+.03)),e.add(Q(Z(.13,.022,.022,a.metal),d-.045,1.04,u+.055)),rh(e,t,0,n,r,i,a)}function oh(e,{cy:t,w:n=.5,h:r=.32},i,a){let o=i+.012;e.add(Q(Z(n,r,.01,a.ventDark,{shadow:!1}),0,t,i+.005));let s=.05;e.add(Q(Z(n+2*s,s,.024,a.trim),0,t+r/2+s/2,o)),e.add(Q(Z(n+2*s,s,.024,a.trim),0,t-r/2-s/2,o)),e.add(Q(Z(s,r,.024,a.trim),-n/2-s/2,t,o)),e.add(Q(Z(s,r,.024,a.trim),n/2+s/2,t,o));for(let i=0;i<4;i++){let s=Z(n,.03,.035,a.trim);s.rotation.x=-.6,e.add(Q(s,0,t-r/2+r/4*(i+.5),o))}}function sh(e,t,n,r,i){let a=r+.025,o=n-.01;e.add(Q(Z(1.25,o,.34,i.step,{uv:!0}),t,-n+o/2,a+.17)),e.add(Q(Z(1.4,n/2,.34,i.step,{uv:!0}),t,-n+n/4,a+.34+.17))}function ch(e,t,n){let r=new J(new Gc(e,{depth:t,bevelEnabled:!1,curveSegments:1}),[n.wall,n.trim]);r.castShadow=r.receiveShadow=!0;let i=new J(new Xc(e),n.interior);i.position.z=-.003,i.receiveShadow=!0;let a=new Ma;return a.add(r,i),a}function lh(e,t){let{L:n,hw:r,t:i}=t;switch(e){case`front`:return{pos:[0,0,r-i],rot:0,toLocal:e=>e};case`back`:return{pos:[0,0,-r+i],rot:Math.PI,toLocal:e=>-e};case`right`:return{pos:[n/2-i,0,0],rot:Math.PI/2,toLocal:e=>-e};case`left`:return{pos:[-n/2+i,0,0],rot:-Math.PI/2,toLocal:e=>e}}}function uh(e,t,n,r){if(r)return[[n,e.H],[-n,e.H]];let i=[],a=[-n,n,...e.profile.map(e=>e[0]).filter(e=>Math.abs(e)<n-1e-6)];for(let n of a)i.push([t(n),Ye(e.profile,n)]);return i.sort((e,t)=>t[0]-e[0])}function dh(e,t,{cutaway:n=!1}={}){let{L:r,H:i,t:a,hw:o}=e,s=new Ma,c=.15,l=.03,u=e.roofType===`mansard`&&!n;for(let d of[`front`,`back`,`right`,`left`]){let f=lh(d,e),p=new Ma;p.position.set(...f.pos),p.rotation.y=f.rot;let m=d===`left`||d===`right`,h=m?o-a:r/2,g=e.plan.openings.filter(e=>e.wall===d&&!e.hidden).map(e=>({...e,lx:f.toLocal(e.center)})).sort((e,t)=>e.lx-t.lx),_=g.filter(e=>e.kind===`door`),v=g.filter(e=>e.kind===`window`),y=[[-h,0]];for(let e of _){let t=e.lx-e.w/2,n=e.lx+e.w/2;y.push([t,0],[t,e.h],[n,e.h],[n,0])}y.push([h,0]);let b=i;m?y.push(...uh(e,f.toLocal,h,n)):(b=n?i:Ye(e.profile,d===`front`?o:-o),y.push([h,b],[-h,b]));let x=$m(y);for(let e of v)x.holes.push(Qm(e.lx-e.w/2,e.sill,e.lx+e.w/2,e.sill+e.h));let S=Ke.atticWindow;m&&u&&x.holes.push(Qm(-S.w/2,i+S.sill,S.w/2,i+S.sill+S.h)),p.add(ch(x,a,t));for(let e of v)ih(p,{cx:e.lx,sill:e.sill,w:e.w,h:e.h},a,t);m&&u&&ih(p,{cx:0,sill:i+S.sill,w:S.w,h:S.h},a,t);let C=e.coveredWalls.includes(d);for(let n of _)ah(p,{x:n.lx,w:n.w,h:n.h},a,t),C||sh(p,n.lx,e.base,a,t);let w=-h,T=[];for(let e of _)T.push([w,e.lx-e.w/2-.1]),w=e.lx+e.w/2+.1;T.push([w,h]);for(let[e,n]of T)n-e>.02&&p.add(Q(Z(n-e,c,l,t.trim),(e+n)/2,c/2,a+l/2));if(m){p.add(Q(Z(2*o,.12,.03,t.trim),0,i,a+.015));let r=Math.max(...e.profile.map(e=>e[1]))-i;!n&&!u&&e.roofType!==`shed`&&r>1.05&&oh(p,{cy:i+r*.42},a,t)}else p.add(Q(Z(r,.14,.02,t.trim),0,b-.07,a+.01));s.add(p)}let d=.15,f=.025;for(let a of[1,-1])for(let c of[1,-1]){let l=n?i:Ye(e.profile,c*o);s.add(Q(Z(d,l,d,t.trim),a*(r/2-d/2+f),l/2,c*(o-d/2+f)))}return s}function fh(e,t){let{roofT:n,eave:r,roofX0:i,roofX1:a,roofLen:o,L:s}=e,c=new Ma,l=(i+a)/2,u=e.profile,d=u.length-1,f=.17,p=.12,m=[];for(let e=0;e<d;e++){let[t,n]=u[e],[i,a]=u[e+1],o=Math.hypot(i-t,a-n),s={z:(i-t)/o,y:(a-n)/o},c={z:-s.y,y:s.z},l=Math.abs(s.z),f=e===0?r/l:0,p=e===d-1?r/l:0;m.push({start:{z:t-s.z*f,y:n-s.y*f},len:o+f+p,u:s,nrm:c,before:f,after:p,p0:u[e],p1:u[e+1]})}let h=(e,t,n,r,i=l)=>(e.position.set(i,t.start.y+t.u.y*n+t.nrm.y*r,t.start.z+t.u.z*n+t.nrm.z*r),e.rotation.x=Math.atan2(-t.u.y,t.u.z),e);for(let e of m){let r=new Es(o,n,e.len);Zm(r,o,n,e.len);let s=new J(r,[t.roofEdge,t.roofEdge,t.roof,t.soffit,t.roofEdge,t.roofEdge]);s.castShadow=s.receiveShadow=!0,c.add(h(s,e,e.len/2,n/2));for(let r of[i-.015,a+.015])c.add(h(Z(.03,f,e.len+.02,t.roofEdge),e,e.len/2,n-f/2,r))}let g=[{s:m[0],at:0,out:-1,wall:m[0].p0},{s:m[d-1],at:m[d-1].len,out:1,wall:m[d-1].p1}];for(let e of g){let i=e.s,a=i.start.y+i.u.y*e.at+i.nrm.y*n,u=i.start.z+i.u.z*e.at+i.nrm.z*n,d=Z(o+.06,p,.025,t.roofEdge);d.position.set(l,a-p/2+.01,u+Math.sign(i.u.z*e.out)*.0125),c.add(d);let f=r/Math.abs(i.u.z)-.06,m=new gs(new Es(.05,.11,f),t.rafter,Math.max(2,Math.floor(s/.6)+1));m.castShadow=!0;let h=(e.out<0?i.before:i.len-i.after)+e.out*(f/2),g=i.start.y+i.u.y*h-i.nrm.y*.055,_=i.start.z+i.u.z*h-i.nrm.z*.055,v=new Fi().setFromEuler(new ma(Math.atan2(-i.u.y,i.u.z),0,0)),y=new ia,b=new G(1,1,1),x=s-.3;for(let e=0;e<m.count;e++)y.compose(new G(-s/2+.15+x*e/(m.count-1),g,_),v,b),m.setMatrixAt(e,y);c.add(m)}for(let e=1;e<d;e++){let r=m[e-1],i=m[e],[a,s]=u[e],d=r.u.y>0&&i.u.y<0,f=r.nrm.z+i.nrm.z,p=r.nrm.y+i.nrm.y,h=Math.hypot(f,p),g=(r.nrm.z*i.nrm.z+r.nrm.y*i.nrm.y+1)/2,_=n/Math.sqrt(Math.max(.2,g)),v=a+f/h*_,y=s+p/h*_;for(let[e,n]of[[r,-1],[i,1]]){let r=Z(o+.04,.014,.22,t.roofEdge);r.position.set(l,y+e.u.y*n*.1+e.nrm.y*.012,v+e.u.z*n*.1+e.nrm.z*.012),r.rotation.x=Math.atan2(-e.u.y,e.u.z),c.add(r)}if(d){let e=new J(new Os(.045,.045,o+.06,12,1),t.roofEdge);e.rotation.z=Math.PI/2,e.castShadow=!0,e.position.set(l,y+.02,v),c.add(e)}}return c}var ph=2.05;function mh(e,t,n){let r=e.x1-e.x0,i=e.z1-e.z0,a=new Yc(r,i),o=a.attributes.uv;for(let e=0;e<o.count;e++)o.setXY(e,o.getX(e)*r,o.getY(e)*i);let s=new J(a,t);return s.rotation.x=-Math.PI/2,s.position.set((e.x0+e.x1)/2,n,(e.z0+e.z1)/2),s.receiveShadow=!0,s}function hh(e,t){let n=new Ma,r=e.side===`left`||e.side===`right`?e.z1-e.z0:e.x1-e.x0,i=e.side===`left`||e.side===`right`?e.x1-e.x0:e.z1-e.z0,a=e.side?r:e.x1-e.x0,o=e.side?i:e.z1-e.z0,s=(e,t,r,i,a,o,s)=>n.add(Q(Z(e,t,r,i),a,o,s));switch(e.kind){case`bed`:s(a,.3,o,t.furnWood,0,.15,o/2),s(a-.06,.18,o-.08,t.furnWhite,0,.39,o/2+.02),s(a,.9,.06,t.furnWood,0,.45,.03),s(a*.8,.1,.4,t.furnFabric,0,.53,.3);break;case`sofa`:s(a,.42,o,t.furnFabric,0,.21,o/2),s(a,.42,.2,t.furnFabric,0,.63,.1),s(.16,.22,o,t.furnFabric,-a/2+.08,.53,o/2),s(.16,.22,o,t.furnFabric,a/2-.08,.53,o/2);break;case`table`:s(a,.04,o,t.furnWood,0,.74,o/2);for(let e of[-1,1])for(let n of[.06,o-.06])s(.05,.72,.05,t.furnWood,e*(a/2-.06),.36,n);break;case`counter`:s(a,.86,o,t.furnWhite,0,.43,o/2),s(a,.04,o+.02,t.furnWood,0,.88,o/2),s(a,.7,.32,t.furnWhite,0,1.75,.16);break;case`wardrobe`:s(a,2,o,t.furnWood,0,1,o/2);break;case`shower`:s(a,.08,o,t.furnWhite,0,.04,o/2),s(a,1.9,.01,t.furnGlass,0,1.03,o),s(.01,1.9,o,t.furnGlass,a/2,1.03,o/2);break;case`toilet`:s(.36,.4,.5,t.furnWhite,0,.2,.35),s(.38,.35,.16,t.furnWhite,0,.6,.08);break;case`sink`:s(a,.8,o,t.furnWhite,0,.4,o/2);break;case`hanger`:s(a,1.7,.03,t.furnWood,0,.95,.02),s(a,.45,o,t.furnWood,0,.225,o/2);break;case`shelf`:for(let e=0;e<5;e++)s(a,.03,o,t.furnWood,0,.1+e*.45,o/2);for(let e of[-1,1])s(.03,1.95,o,t.furnWood,e*(a/2-.015),.975,o/2)}let c=(e.x0+e.x1)/2,l=(e.z0+e.z1)/2,u={back:0,front:Math.PI,left:Math.PI/2,right:-Math.PI/2}[e.side]??0;n.rotation.y=u;let d=new G(0,0,o/2).applyAxisAngle(new G(0,1,0),u);return n.position.set(c-d.x,0,l-d.z),n}function gh(e,t,n,{furniture:r=!0,ceiling:i=!1}={}){let a=new Ma,{H:o,plan:s}=e;a.add(mh(s.inner,t.floorWood,.004));for(let e of s.rooms)n.find(t=>t.id===e.type)?.floor===`tile`&&a.add(mh(e,t.floorTile,.006));for(let e of s.partitions){let n=e.orient===`v`,r=(r,i,o,s)=>{let c=i-r;if(c<=.01)return;let l=n?Z(z,s-o,c,t.partition):Z(c,s-o,z,t.partition),u=(r+i)/2;a.add(n?Q(l,e.at,(o+s)/2,u):Q(l,u,(o+s)/2,e.at))};if(e.door){let t=e.door.center-e.door.w/2,n=e.door.center+e.door.w/2;r(e.from,t,0,o),r(n,e.to,0,o),r(t,n,ph,o)}else r(e.from,e.to,0,o)}if(r)for(let n of _m(e))a.add(hh(n,t));if(i){let e=mh(s.inner,t.partition,o-.002);e.rotation.x=Math.PI/2,e.castShadow=!1,a.add(e)}return a}var _h=.95;function vh(e,t,n,r,i,a,o,s=[]){let c=[],l=n;for(let[e,t]of s.sort((e,t)=>e[0]-t[0]))c.push([l,e]),l=t;c.push([l,r]);let u=(e,n,r,o)=>a===`x`?Q(Z(o[0],n,o[1],t.trim),e,r,i):Q(Z(o[1],n,o[0],t.trim),i,r,e);for(let[n,r]of c){let s=r-n;if(s<.15)continue;let c=(n+r)/2;e.add(u(c,.045,o+_h,[s,.12])),e.add(u(c,.04,o+.14,[s,.06]));let l=Math.max(1,Math.ceil(s/1.5));for(let t=0;t<=l;t++)e.add(u(n+s*t/l,_h,o+_h/2,[.09,.09]));let d=Math.floor(s/.13);if(d<2)continue;let f=new gs(new Es(.035,.75,.035),t.trim,d);f.castShadow=!0;let p=new ia;for(let e=0;e<d;e++){let t=n+(e+.5)*s/d;p.makeTranslation(a===`x`?t:i,o+.16+.75/2,a===`x`?i:t),f.setMatrixAt(e,p)}e.add(f)}}function yh(e,t,n,r,i,a){e.add(Q(Z(1.3,a*2/3,.32,t.step,{uv:!0}),n,a/3,r+i*.16)),e.add(Q(Z(1.45,a/3,.32,t.step,{uv:!0}),n,a/6,r+i*.48))}function bh(e,t,{cutaway:n=!1,supports:r=null}={}){let i=e.terrace;if(!i)return null;let a=new Ma,o=e.base,s=i.x1-i.x0,c=i.z1-i.z0,l=(i.x0+i.x1)/2,u=(i.z0+i.z1)/2;a.add(Q(Z(s,.045,c,t.deck,{uv:!0}),l,o-.03,u)),a.add(Q(Z(s+.04,.16,c+.04,t.trim),l,o-.13,u));let d=(e,t,n)=>Math.min(n-.1,Math.max(t+.1,e)),f;if(r?.nodes?.length)f=r.nodes.map(e=>[d(e.x,i.x0,i.x1),d(e.z,i.z0,i.z1)]);else{f=[];let e=Math.max(1,Math.ceil(s/1.6)),t=Math.max(1,Math.ceil(c/1.6));for(let n=0;n<=e;n++)for(let r=0;r<=t;r++)f.push([i.x0+.1+(s-.2)*n/e,i.z0+.1+(c-.2)*r/t])}let p=r?.pile?r.pile.d/2:.05;for(let[e,n]of f){let i=r?.kind===`blocks`?Z(.3,o-.2,.3,t.concrete):new J(new Os(p,p,o-.2,10),t.pile);i.castShadow=!0,a.add(Q(i,e,(o-.2)/2,n))}let m=o;if(i.type===`front`){let n=e.plan.openings.find(e=>e.wall===`front`&&e.kind===`door`&&!e.hidden),r=Math.min(i.x1-.8,Math.max(i.x0+.8,n?n.center:l));vh(a,t,i.x0,i.x1,i.z1-.045,`x`,m,[[r-.65,r+.65]]),vh(a,t,i.z0+.05,i.z1-.05,i.x0+.045,`z`,m),vh(a,t,i.z0+.05,i.z1-.05,i.x1-.045,`z`,m),yh(a,t,r,i.z1,1,o)}else if(vh(a,t,i.x0+.05,i.x1-.06,i.z1-.06,`x`,m,[[l-.65,l+.65]]),vh(a,t,i.x0+.05,i.x1-.06,i.z0+.06,`x`,m),vh(a,t,i.z0+.06,i.z1-.06,i.x1-.06,`z`,m),yh(a,t,l,i.z1,1,o),!n){let n=e.H,r=i.x1-.06,o=[i.z0+.06,i.z1-.06];e.W>4.5&&o.push(0);for(let e of o)a.add(Q(Z(.12,n,.12,t.trim),r,m+n/2,e));for(let e of[i.z0+.06,i.z1-.06])a.add(Q(Z(s,.18,.12,t.trim),l,m+n-.09,e));a.add(Q(Z(.12,.18,e.W,t.trim),r,m+n-.09,0));let c=e.hw,u=uh(e,e=>-e,c,!1),d=new sc;d.moveTo(-c,n-.18),d.lineTo(c,n-.18);for(let[e,t]of u)d.lineTo(e,t);d.closePath();let f=.06,p=new J(new Gc(d,{depth:f,bevelEnabled:!1}),[t.wall,t.trim]);p.castShadow=p.receiveShadow=!0;let h=new Ma;h.position.set(i.x1-f,m,0),h.rotation.y=Math.PI/2,h.add(p);let g=Math.max(...e.profile.map(e=>e[1]))-n;e.roofType!==`shed`&&g>1.05&&oh(h,{cy:n+g*.42},f,t),a.add(h)}return a}function xh(e,t,n,r){let i=new Ma,{L:a,W:o,base:s}=e;if(n.plinth!==`none`||n.foundation===`strip`)return i.add(Q(Z(a+.05,s,o+.05,t.plinth,{uv:!0}),0,s/2,0)),i;let c=.2,l=.15;i.add(Q(Z(a,c,l,t.beam),0,s-c/2,o/2-l/2)),i.add(Q(Z(a,c,l,t.beam),0,s-c/2,-o/2+l/2)),i.add(Q(Z(l,c,o-2*l,t.beam),a/2-l/2,s-c/2,0)),i.add(Q(Z(l,c,o-2*l,t.beam),-a/2+l/2,s-c/2,0)),i.add(Q(Z(a-2*l,.02,o-2*l,t.underside,{shadow:!1}),0,s-.03,0));let u=s-c,d=(e,t)=>Math.min(t-.12,Math.max(-t+.12,e)),f=r?.nodes?.length?r.nodes.map(e=>[d(e.x,a/2),d(e.z,o/2)]):Sh(a,o),p=r?.pile?r.pile.d/2:.054;for(let[e,r]of f)if(n.foundation===`blocks`)i.add(Q(Z(.4,u,.4,t.concrete),e,u/2,r));else{let n=new J(new Os(p,p,u,12),t.pile);n.castShadow=!0,i.add(Q(n,e,u/2,r)),i.add(Q(Z(.22,.012,.22,t.pile),e,u-.006,r))}return i}function Sh(e,t){let n=Math.max(1,Math.ceil(e/2)),r=Math.max(1,Math.ceil(t/2)),i=[];for(let a=0;a<=n;a++)for(let o=0;o<=r;o++)i.push([-e/2+.12+(e-.24)*a/n,-t/2+.12+(t-.24)*o/r]);return i}var Ch=class{constructor(e,t){this.M=e,this.catalog=t,this.group=new Ma,this.group.name=`house`}build(e,t,{cutaway:n=!1,furniture:r=!0,walk:i=!1,supports:a=null}={}){this.clear();let o=e,s=this.M;this.group.add(xh(o,s,t,a?.house));let c=bh(o,s,{cutaway:n,supports:a?.terrace});c&&this.group.add(c);let l=new Ma;return l.position.y=o.base,l.add(dh(o,s,{cutaway:n})),l.add(gh(o,s,this.catalog.roomTypes,{furniture:(n||i)&&r,ceiling:i})),n||l.add(fh(o,s)),this.group.add(l),this.group}clear(){for(let e of[...this.group.children])eh(e),this.group.remove(e)}},wh=new Intl.NumberFormat(`ru-RU`,{maximumFractionDigits:0}),Th=e=>`${wh.format(e)} ₽`,Eh=e=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м²`,Dh=e=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м`,Oh=(e,t)=>e?.find(e=>e.id===t)?.name??t;function kh(e,t,n,r){let i=[],a=t.roundTo||1,o=e=>Math.round(e/a)*a,s=(e,t,n,r)=>t&&r>0&&i.push({id:e,label:t,detail:n,amount:r}),c=t.base,l=typeof c.ratePerM2==`object`?c.ratePerM2[e.package]??Object.values(c.ratePerM2)[0]:c.ratePerM2,u=r.packages?.find(t=>t.id===e.package);s(`base`,`${c.label}${u?` (`+u.name.toLowerCase()+`)`:``}`,`${Eh(n.floorArea)} × ${Th(l)}/м²`,o(n.floorArea*l));let d=t.constructions?.ratePerM2Wall?.[e.construction]??0;s(`construction`,t.constructions?.label,`${Eh(n.wallArea)} × ${Th(d)}/м²`,o(n.wallArea*d));let f=t.foundations?.ratePerM2?.[e.foundation]??0,p=n.floorArea+n.terraceArea;s(`foundation`,`${t.foundations?.label}: ${Oh(r.foundations,e.foundation).toLowerCase()}`,`${Eh(p)} × ${Th(f)}/м²`,o(p*f));let m=t.wallMaterials.ratePerM2[e.wallMaterial]??0;s(`walls`,`${t.wallMaterials.label}: ${Oh(r.wallMaterials,e.wallMaterial).toLowerCase()}`,`${Eh(n.wallArea)} × ${Th(m)}/м²`,o(n.wallArea*m));let h=(t.roofMaterials.ratePerM2[e.roofMaterial]??0)+(t.roofTypes?.ratePerM2Extra?.[n.roofType]??0);if(s(`roof`,`${t.roofMaterials.label}: ${Oh(r.roofMaterials,e.roofMaterial).toLowerCase()}`,`${Eh(n.roofArea)} × ${Th(h)}/м²`,o(n.roofArea*h)),n.atticArea>0){let e=t.roofTypes?.atticRatePerM2??0;s(`attic`,t.roofTypes?.atticLabel,`${Eh(n.atticArea)} × ${Th(e)}/м²`,o(n.atticArea*e))}if(n.terraceArea>0){let e=t.terrace?.ratePerM2?.[n.terraceType]??0;s(`terrace`,`${t.terrace?.label}: ${Oh(r.terraces,n.terraceType).toLowerCase()}`,`${Eh(n.terraceArea)} × ${Th(e)}/м²`,o(n.terraceArea*e))}let g=t.plinths.ratePerM[e.plinth]??0;s(`plinth`,`${t.plinths.label}: ${Oh(r.plinths,e.plinth).toLowerCase()}`,`${Dh(n.perimeter)} × ${Th(g)}/м`,o(n.perimeter*g));let _=t.windows.frameSurcharge?.[e.windowFrame]??0;for(let[e,i]of Object.entries(n.windows)){let n=(t.windows.price[e]??0)+_,a=r.windowTypes.find(t=>t.id===e);s(`win-${e}`,`${t.windows.label}: ${a?a.name.toLowerCase()+` `+a.size:e}`,`${i} × ${Th(n)}`,i*n)}let v=t.doors.price[e.doorType]??0;s(`doors`,`${t.doors.label}: ${Oh(r.doorTypes,e.doorType).toLowerCase()}`,`${n.doors} × ${Th(v)}`,n.doors*v);let y=t.partitions.ratePerM;s(`partitions`,t.partitions.label,`${Dh(n.partitionsLength)} × ${Th(y)}/м`,o(n.partitionsLength*y));let b=t.interiorDoors.price;s(`idoors`,t.interiorDoors.label,`${n.interiorDoors} × ${Th(b)}`,n.interiorDoors*b);for(let[e,i]of Object.entries(n.rooms)){let n=t.rooms.price[e];n&&s(`room-${e}`,`${t.rooms.label}: ${Oh(r.roomTypes,e).toLowerCase()}`,`${i} × ${Th(n)}`,i*n)}for(let e of t.fixed??[])s(e.id,e.label,``,e.amount);return{total:i.reduce((e,t)=>e+t.amount,0),items:i}}var Ah=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function jh(e,{kind:t,list:n,store:r,matKey:i,finishKey:a,materials:o}){e.innerHTML=`
    <div class="mat-grid" role="radiogroup"></div>
    <div class="finish-head"><span class="finish-label">Оттенок</span><span class="picked"></span></div>
    <div class="swatches finish-row" role="radiogroup"></div>`;let s=e.querySelector(`.mat-grid`),c=e.querySelector(`.finish-row`),l=e.querySelector(`.picked`),u=n.map(e=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`mat-card`,n.setAttribute(`role`,`radio`),n.innerHTML=`<span class="mat-img" style="background-image:url(${o.preview(t,e.texture,e.finishes[0].color,120)})"></span>
      <span class="mat-text"><span class="mat-name">${Ah(e.name)}</span><span class="mat-note">${Ah(e.note||``)}</span></span>`,n.addEventListener(`click`,()=>{let t=r.get();if(t[i]===e.id)return;let n=e.finishes.find(e=>e.id===t[a]);r.set({[i]:e.id,[a]:(n||e.finishes[0]).id})}),s.appendChild(n),[e,n]}),d=null,f=e=>{c.innerHTML=``;for(let n of e.finishes){let i=document.createElement(`button`);i.type=`button`,i.className=`swatch textured-img`,i.setAttribute(`role`,`radio`),i.dataset.id=n.id,i.title=n.name,i.setAttribute(`aria-label`,n.name),i.style.backgroundImage=`url(${o.preview(t,e.texture,n.color,72)})`,i.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>`,i.addEventListener(`click`,()=>r.set({[a]:n.id})),c.appendChild(i)}};return e=>{let t=n.find(t=>t.id===e[i])||n[0];for(let[e,n]of u){let r=e===t;n.classList.toggle(`on`,r),n.setAttribute(`aria-checked`,r)}d!==t&&(d=t,f(t));let r=t.finishes.find(t=>t.id===e[a])||t.finishes[0];for(let e of c.children){let t=e.dataset.id===r.id;e.classList.toggle(`on`,t),e.setAttribute(`aria-checked`,t)}l.textContent=r.name}}function Mh(e,{list:t,store:n,key:r,image:i,dot:a}){e.classList.add(`chips`);let o=t.map(t=>{let o=document.createElement(`button`);return o.type=`button`,o.className=`chip`,o.setAttribute(`role`,`radio`),o.innerHTML=`${i?`<span class="chip-img" style="background-image:url(${i(t)})"></span>`:a?`<span class="chip-dot" style="background:${a(t)}"></span>`:``}<span>${Ah(t.name)}</span>`,o.addEventListener(`click`,()=>n.set({[r]:t.id})),e.appendChild(o),[t,o]});return e=>{for(let[t,n]of o){let i=e[r]===t.id;n.classList.toggle(`on`,i),n.setAttribute(`aria-checked`,i)}}}var Nh=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Ph=(e,t=1)=>e.toLocaleString(`ru-RU`,{maximumFractionDigits:t}),Fh=e=>`${Math.round(e*100)}%`,Ih=e=>e>1?`bad`:e>.85?`mid`:`ok`,Lh=[`СП 20.13330.2016 «Нагрузки и воздействия»: собственный вес, снег, полезные нагрузки, сочетания`,`СП 64.13330 «Деревянные конструкции»: сосна 2-го сорта, изгиб 13 МПа, E = 10 000 МПа`,`СП 24.13330 «Свайные фундаменты»: несущая способность винтовой сваи, γk = 1,4`,`СП 22.13330 «Основания зданий»: давление под столбами и лентой`],Rh=[`Грунт задан типом, без инженерно-геологических изысканий; характеристики — средние табличные`,`Ветер не учитывался: для одноэтажного дома он почти не влияет на сваи; крепление кровли — по инструкции производителя покрытия`,`Глубина промерзания не проверялась по вашему району`,`Балки рассчитаны как однопролётные, с запасом`];function zh(e){let t=e.member;if(!t)return`<li class="bad"><span>${Nh(e.name)}</span><b>не подобрать</b></li>`;let n=e.kind===`column`&&e.id===`stud`?`${Qt(t)} шаг ${t.spacing*1e3}`:e.kind?Qt(t):`${Qt(t)}${t.spacing?` шаг ${t.spacing*1e3}`:``}`;return`<li><span>${Nh(e.name)}${e.note?`<small${e.warn?` class="warn"`:``}>${Nh(e.note)}</small>`:``}</span><b>${n}</b><em class="${Ih(t.util)}">${Fh(t.util)}</em></li>`}function Bh(e,t,n=340){if(!e.house)return``;let r=t.terrace,i=Math.min(-t.L/2,r?.x0??0)-.5,a=Math.max(t.L/2,r?.x1??0)+.5,o=-t.hw-.5,s=Math.max(t.hw,r?.z1??0)+.5,c=n/(a-i),l=(s-o)*c,u=e=>((e-i)*c).toFixed(1),d=e=>((e-o)*c).toFixed(1),f=(e,t,n,r,i)=>`<rect class="${i}" x="${u(e)}" y="${d(n)}" width="${((t-e)*c).toFixed(1)}" height="${((r-n)*c).toFixed(1)}"/>`,p=[];r&&p.push(f(r.x0,r.x1,r.z0,r.z1,`sv-terrace`)),p.push(f(-t.L/2,t.L/2,-t.hw,t.hw,`sv-house`));for(let t of[e.house,e.terrace].filter(Boolean)){let{xs:n,zs:r}=t;t.kind===`strip`&&t===e.house&&p.push(f(n[0],n[n.length-1],r[0],r[r.length-1],`sv-strip`));for(let e of r)p.push(`<line class="sv-beam" x1="${u(n[0])}" y1="${d(e)}" x2="${u(n[n.length-1])}" y2="${d(e)}"/>`);for(let e of[n[0],n[n.length-1]])p.push(`<line class="sv-beam" x1="${u(e)}" y1="${d(r[0])}" x2="${u(e)}" y2="${d(r[r.length-1])}"/>`);for(let e of t.nodes){if(t.kind===`strip`&&!(e.i>0&&e.i<n.length-1&&e.j>0&&e.j<r.length-1))continue;let i=t.kind===`piles`?5:6;p.push(t.kind===`piles`?`<circle class="sv-n ${Ih(e.util)}" cx="${u(e.x)}" cy="${d(e.z)}" r="${i}"><title>${Ph(Xt(e.Nd))} т</title></circle>`:`<rect class="sv-n ${Ih(e.util)}" x="${(u(e.x)-i).toFixed(1)}" y="${(d(e.z)-i).toFixed(1)}" width="${i*2}" height="${i*2}"><title>${Ph(Xt(e.Nn))} т</title></rect>`)}}let m=e.house.xs;if(m.length>1){let e=m[1]-m[0];p.push(`<text class="sv-dim" x="${u((m[0]+m[1])/2)}" y="${(Number(d(t.hw))+14).toFixed(1)}">${Ph(e,2)} м</text>`)}return p.push(`<text class="sv-dim" x="${u(0)}" y="${(l-3).toFixed(1)}">фасад</text>`),`<svg class="sv" viewBox="0 0 ${n} ${l.toFixed(0)}" width="${n}" height="${l.toFixed(0)}" role="img" aria-label="Схема опор">${p.join(``)}</svg>`}function Vh(e,{store:t}){e.innerHTML=`
    <div class="label">Грунт на участке</div>
    <div class="st-soils" role="radiogroup" aria-label="Грунт"></div>
    <p class="note small st-soil-note"></p>
    <label class="label" for="stSnow">Снеговой район</label>
    <select id="stSnow" class="st-select">${tt.map(e=>`<option value="${e.id}">${e.roman} — ${Ph(e.sg)} кПа (≈ ${Math.round(e.sg*102)} кг/м²)${e.id===3?`, Москва и область`:``}</option>`).join(``)}</select>
    <p class="note small">Район смотрите на карте снеговых районов в СП 20.13330.2016.</p>
    <div class="st-out"></div>`;let n=Mh(e.querySelector(`.st-soils`),{list:nt,store:t,key:`soil`}),r=e.querySelector(`#stSnow`);r.addEventListener(`change`,()=>t.set({snowRegion:+r.value}));let i=e.querySelector(`.st-out`),a=!1;i.addEventListener(`click`,e=>{let t=e.target.closest(`summary`);t&&(a=!t.parentElement.open)});let o=``;return(t,s,c)=>{n(t),r.value=String(s.region.id),e.querySelector(`.st-soil-note`).textContent=s.soil.note?`${s.soil.name}: ${s.soil.note}. Не знаете — оставьте суглинок`:``;let l=JSON.stringify([s.status,s.util,$t(s),s.members.map(e=>e.member&&[e.member.b,e.member.h,e.member.spacing,e.member.util]),s.warnings,c.L,c.W,c.roofType,c.terrace?.type,c.terrace?.depth,s.house?.nodes?.length]);if(l===o)return;o=l;let u=s.house,d=u?`<div class="st-head ${s.status}"><span class="st-dot"></span><div><b>${Nh($t(s))}</b><span>${Nh(en(s))}</span></div></div>
         <div class="st-meter" title="Загрузка самого нагруженного элемента"><i class="${Ih(s.util)}" style="width:${Math.min(100,s.util*100).toFixed(0)}%"></i></div>
         <p class="note small">Использовано ${Fh(s.util)} несущей способности самого нагруженного элемента. Вес дома ≈ ${Ph(s.mass.dead)} т, со снегом и людьми (расчётная) ≈ ${Ph(s.mass.design)} т</p>`:`<div class="st-head bad"><span class="st-dot"></span><div><b>Опоры не подобраны</b><span>Выберите другой фундамент или грунт</span></div></div>`,f=`
      <details class="st-details"${a?` open`:``}>
        <summary>Подробный расчёт</summary>
        <h3>Нагрузки, кПа (кН/м²)</h3>
        <table class="st-table"><tr><th></th><th>норм.</th><th>γf</th><th>расч.</th></tr>
          ${s.loads.map(e=>`<tr><td>${Nh(e.name)}</td><td>${Ph(e.n,2)}</td><td>${Ph(e.gf,2)}</td><td>${Ph(e.d,2)}</td></tr>`).join(``)}
        </table>
        ${u?.kind===`piles`?`<h3>Свая Ø${u.pile.id}, лопасть ${u.pile.D*1e3} мм</h3>
          <p class="note small">Глубина лопасти ${Ph(u.capInfo.depth,2)} м. Несущая способность Fd = ${Ph(u.capInfo.Fd)} кН (лопасть ${Ph(u.capInfo.tip)} + ствол ${Ph(u.capInfo.side)}), допустимая Fd/γk = ${Ph(u.cap)} кН ≈ ${Ph(Xt(u.cap))} т. Наибольшая расчётная нагрузка — ${Ph(u.maxN)} кН.</p>`:``}
        ${u?.kind===`blocks`?`<p class="note small">Столб 400×400 на подушке 600×600, допустимое давление на грунт ${s.soil.R} кПа: на столб до ${Ph(u.cap)} кН (нормативная), наибольшая — ${Ph(u.maxN)} кН.</p>`:``}
        ${u?.kind===`strip`?`<p class="note small">Лента шириной ${u.width*1e3} мм, погонная нагрузка до ${Ph(u.line)} кН/м, давление ${Ph(u.pressure,0)} кПа при допустимом ${s.soil.R} кПа.</p>`:``}
        <h3>Элементы</h3>
        <table class="st-table">${s.members.filter(e=>e.member).map(e=>{let t=e.member,n=e.kind===`column`?`N = ${Ph(t.N)} кН, несущая способность ${Ph(t.cap)} кН`:e.kind===`crown`?`N = ${Ph(t.N)} кН/м`:`пролёт ${Ph(t.span,2)} м; изгиб ${Fh(t.bend)}, срез ${Fh(t.shear)}, прогиб ${Fh(t.defl)} (${Ph(t.f*1e3,0)} из ${Ph(t.lim*1e3,0)} мм)`;return`<tr><td>${Nh(e.name)}<small>${n}</small></td><td>${Qt(t)}</td><td class="${Ih(t.util)}">${Fh(t.util)}</td></tr>`}).join(``)}</table>
        <h3>Нормы</h3><ul class="st-list">${Lh.map(e=>`<li>${Nh(e)}</li>`).join(``)}</ul>
        <h3>Допущения</h3><ul class="st-list">${Rh.map(e=>`<li>${Nh(e)}</li>`).join(``)}</ul>
      </details>`;i.innerHTML=`
      ${d}
      ${u?`<div class="st-scheme">${Bh(s,c)}</div>`:``}
      <ul class="st-members">${s.members.map(zh).join(``)}</ul>
      ${s.warnings.length?`<ul class="st-warn">${s.warnings.map(e=>`<li>${Nh(e)}</li>`).join(``)}</ul>`:``}
      ${f}
      <p class="note small">Это предварительная оценка по нормам, а не проект. Перед стройкой уточните грунт: геология или пробное завинчивание сваи.</p>`}}var Hh=new Intl.NumberFormat(`ru-RU`,{maximumFractionDigits:0}),Uh=e=>`${Hh.format(Math.round(e))} ₽`,Wh=e=>`${e.toLocaleString(`ru-RU`,{minimumFractionDigits:1,maximumFractionDigits:1})} м`,Gh=e=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м²`,Kh=[{key:`length`,label:`Длина`},{key:`width`,label:`Ширина`}];function qh(e,t,n){let r=Kh.map(({key:r,label:i})=>{let a=n[r],o=document.createElement(`div`);o.className=`dim`,o.innerHTML=`
      <div class="dim-head">
        <label for="dim-${r}">${i}</label>
        <output class="dim-value" for="dim-${r}"></output>
      </div>
      <div class="dim-ctrl">
        <button type="button" class="step" data-d="-1" aria-label="${i}: меньше">
          <svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg>
        </button>
        <input id="dim-${r}" type="range" min="${a.min}" max="${a.max}" step="${a.step}" />
        <button type="button" class="step" data-d="1" aria-label="${i}: больше">
          <svg viewBox="0 0 24 24"><path d="M12 6v12M6 12h12"/></svg>
        </button>
      </div>
      <div class="dim-scale"><span>${Wh(a.min)}</span><span>${Wh(a.max)}</span></div>`,e.appendChild(o);let s=o.querySelector(`input`),c=o.querySelector(`output`),l=e=>Math.min(a.max,Math.max(a.min,Math.round(e/a.step)*a.step)),u=0;return s.addEventListener(`input`,()=>t.set({[r]:l(+s.value)},{merge:`dim-${r}-${u}`})),s.addEventListener(`change`,()=>u++),o.querySelectorAll(`.step`).forEach(e=>e.addEventListener(`click`,()=>t.set({[r]:l(t.get()[r]+ +e.dataset.d*a.step)}))),e=>{let t=e[r];+s.value!==t&&(s.value=t),c.textContent=Wh(t),s.style.setProperty(`--p`,`${(t-a.min)/(a.max-a.min)*100}%`),s.setAttribute(`aria-valuetext`,`${i} ${Wh(t)}`),o.querySelector(`[data-d="-1"]`).disabled=t<=a.min,o.querySelector(`[data-d="1"]`).disabled=t>=a.max}});return e=>r.forEach(t=>t(e))}var Jh=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Yh(e,{list:t,store:n,key:r,get:i,set:a,disabled:o,columns:s=1}){e.classList.add(`opts`),s>1&&e.classList.add(`cols`);let c=i||(e=>e[r]),l=a||(e=>n.set({[r]:e})),u=t.map(t=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`opt`,n.setAttribute(`role`,`radio`),n.innerHTML=`<span class="opt-dot" aria-hidden="true"></span><span class="opt-text"><span class="opt-name">${Jh(t.name)}</span>${t.note?`<span class="opt-note">${Jh(t.note)}</span>`:``}<span class="opt-warn"></span></span>`,n.addEventListener(`click`,()=>!n.disabled&&l(t.id)),e.appendChild(n),[t,n]});return e=>{for(let[t,n]of u){let r=c(e)===t.id,i=o?.(t,e)||``;n.disabled=!!i,n.querySelector(`.opt-warn`).textContent=i,n.classList.toggle(`on`,r),n.setAttribute(`aria-checked`,r)}}}function Xh(e,t){let n=e.terrace,r=Math.min(-e.L/2,n?n.x0:0),i=Math.max(e.L/2,n?n.x1:0),a=-e.W/2,o=Math.max(e.W/2,n?n.z1:0),s=56/Math.max(i-r,o-a),c=e=>4+(e-r)*s+(56-(i-r)*s)/2,l=e=>4+(e-a)*s+(56-(o-a)*s)/2,u=Object.fromEntries(t.roomTypes.map(e=>[e.id,e.color])),d=[];n&&d.push(`<rect x="${c(n.x0)}" y="${l(n.z0)}" width="${(n.x1-n.x0)*s}" height="${(n.z1-n.z0)*s}" fill="#e3cfae"/>`);for(let t of e.plan.rooms)d.push(`<rect x="${c(t.x0)}" y="${l(t.z0)}" width="${(t.x1-t.x0)*s}" height="${(t.z1-t.z0)*s}" fill="${u[t.type]}"/>`);d.push(`<rect x="${c(-e.L/2)}" y="${l(-e.W/2)}" width="${e.L*s}" height="${e.W*s}" fill="none" stroke="#33363a" stroke-width="2"/>`);for(let t of e.plan.partitions)d.push(t.orient===`v`?`<path d="M${c(t.at)} ${l(t.from)}V${l(t.to)}" stroke="#6b6f74" stroke-width="1.2"/>`:`<path d="M${c(t.from)} ${l(t.at)}H${c(t.to)}" stroke="#6b6f74" stroke-width="1.2"/>`);return`<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">${d.join(``)}</svg>`}function Zh(e,{presets:t,store:n,catalog:r,pricing:i,defaults:a,onPick:o}){e.classList.add(`presets`);let s=(t||[]).map(t=>{let s={...a,...vn(t.patch,r)},c=Ze(s,r),l=kh(s,i,$e(c),r).total,u=document.createElement(`button`);return u.type=`button`,u.className=`preset`,u.innerHTML=`${Xh(c,r)}<span class="preset-text"><span class="preset-name">${Jh(t.name)}</span>
      <span class="preset-note">${Jh(t.note)}</span><span class="preset-price">от ${Uh(Math.floor(l/1e4)*1e4)}</span></span>`,u.addEventListener(`click`,()=>{n.set({...vn(t.patch,r),planSel:null,planAdd:null}),o?.(t)}),e.appendChild(u),u});return()=>s}function Qh(e,{catalog:t,store:n}){e.innerHTML=`<div class="terrace-types"></div><div class="dim terrace-depth"></div>`;let r=Yh(e.querySelector(`.terrace-types`),{list:t.terraces,store:n,get:e=>e.terrace?.type||`none`,set:e=>n.set({terrace:{...n.get().terrace,type:e}})}),i=t.terraceDepth,a=e.querySelector(`.terrace-depth`);a.innerHTML=`<div class="dim-head"><label for="dim-terrace">Глубина террасы</label><output class="dim-value"></output></div>
    <div class="dim-ctrl"><input id="dim-terrace" type="range" min="${i.min}" max="${i.max}" step="${i.step}"/></div>`;let o=a.querySelector(`input`),s=a.querySelector(`output`),c=0;return o.addEventListener(`input`,()=>n.set({terrace:{...n.get().terrace,depth:+o.value}},{merge:`terrace-${c}`})),o.addEventListener(`change`,()=>c++),e=>{r(e);let t=e.terrace||{type:`none`,depth:i.min};a.hidden=t.type===`none`,+o.value!==t.depth&&(o.value=t.depth),s.textContent=Wh(t.depth),o.style.setProperty(`--p`,`${(t.depth-i.min)/(i.max-i.min)*100}%`)}}var $h=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function eg({valueEl:e,listEl:t,toggleEl:n}){let r=0,i=0;return n.addEventListener(`click`,()=>{let e=t.hidden;t.hidden=!e,n.setAttribute(`aria-expanded`,e),n.classList.toggle(`open`,e)}),({total:n,items:a})=>{cancelAnimationFrame(i);let o=r,s=performance.now(),c=t=>{let a=Math.min(1,(t-s)/260);r=o+(n-o)*(1-(1-a)**3),e.textContent=Uh(a<1?Math.round(r/100)*100:n),a<1?i=requestAnimationFrame(c):r=n};o===0?(r=n,e.textContent=Uh(n)):i=requestAnimationFrame(c),t.innerHTML=a.map(e=>`<li><span class="bd-label">${$h(e.label)}${e.detail?`<small>${$h(e.detail)}</small>`:``}</span>
        <span class="bd-sum">${Uh(e.amount)}</span></li>`).join(``)}}var tg=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),ng=e=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м²`,rg=(e,t)=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} × ${t.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м`,ig=e=>(Math.round(e*100)*10).toLocaleString(`ru-RU`),ag=24,og=22;function sg(e,t,n,r,i){switch(e){case`front`:return[t,i/2-n];case`back`:return[t,-i/2+n];case`right`:return[r/2-n,t];case`left`:return[-r/2+n,t]}}var cg=class{constructor(e,t,n){this.root=e,this.store=t,this.catalog=n,e.innerHTML=`<svg class="plan-svg" xmlns="http://www.w3.org/2000/svg"></svg>
      <div class="plan-hint" id="planHint"></div>`,this.svg=e.querySelector(`svg`),this.hint=e.querySelector(`.plan-hint`),this.layout=null,this.dragSeq=0,new ResizeObserver(()=>this.layout&&this.render(this.store.get(),this.layout)).observe(e),this._bind()}_fit(e,t,n,r){let i=t<600;this.narrow=i,this.chains=this._chains(e);let a=e=>e?ag+(e-1)*og+8:0,o=(r?.top??(i?84:92))+a(this.chains.top.length),s=(r?.bottom??(i?64:60))+a(this.chains.bottom.length)+22,c=(r?.side??(i?14:30))+a(this.chains.left.length),l=(r?.side??(i?14:30))+a(this.chains.right.length),u=e.terrace,d=Math.min(-e.L/2,u?u.x0:0),f=Math.max(e.L/2,u?u.x1:0),p=-e.W/2,m=Math.max(e.W/2,u?u.z1:0),h=Math.min((t-c-l)/(f-d),(n-o-s)/(m-p));this.s=h,this.ox=c+(t-c-l)/2-h*(d+f)/2,this.oy=o+(n-o-s)/2-h*(p+m)/2}_chains(e){let{L:t,W:n,t:r,plan:i}=e,a=e.terrace,o=.05,s=i.partitions,c=(e,t)=>s.filter(n=>n.orient===e&&t(n)).map(e=>e.at),l=e=>[...new Set(e.map(e=>Math.round(e*1e3)/1e3))].sort((e,t)=>e-t),u=a?.type===`side`?a.x1:null,d=a?.type===`front`?a.z1:null,f=c(`v`,e=>e.from<=-n/2+r+o),p=c(`v`,e=>e.to>=n/2-r-o),m=c(`h`,e=>e.from<=-t/2+r+o),h=c(`h`,e=>e.to>=t/2-r-o),g=(e,t,n,r)=>l([e,...n,t,...r==null?[]:[r]]),_=[g(-t/2,t/2,f,u),[-t/2,t/2]],v=[g(-n/2,n/2,h),[-n/2,n/2]],y=[g(-n/2,n/2,m,d)],b=[g(-t/2,t/2,p,u)],x=e=>e.length>1&&e[0].length===2&&e[0][0]===e[1][0]&&e[0][1]===e[1][1]?[e[0]]:e;return{top:x(_),right:x(v),left:y,bottom:b}}_chain(e,t,n,r){let{X:i,Y:a}=this,o=e===`top`||e===`bottom`,s=e===`top`||e===`left`?-1:1,c=o?a(n):i(n),l=c+s*(ag+r*og),u=e=>o?i(e):a(e),d=this.narrow?10.5:12,f=[],p=[],m=u(t[0]),h=u(t[t.length-1]);p.push(o?`M${m-6} ${l}H${h+6}`:`M${l} ${m-6}V${h+6}`);for(let e of t){let t=u(e),n=c+s*6,r=l+s*5;p.push(o?`M${t} ${n}V${r}`:`M${n} ${t}H${r}`),p.push(o?`M${t-4} ${l+4}L${t+4} ${l-4}`:`M${l-4} ${t+4}L${l+4} ${t-4}`)}f.push(`<path d="${p.join(``)}"/>`);for(let n=1;n<t.length;n++){let r=u(t[n])-u(t[n-1]),i=ig(t[n]-t[n-1]);if(r<i.length*d*.62+4)continue;let a=(u(t[n])+u(t[n-1]))/2,s=l-5;f.push(o?`<text style="font-size:${d}px" x="${a}" y="${e===`top`?s:l-5}">${i}</text>`:`<text style="font-size:${d}px" transform="translate(${l-5} ${a}) rotate(-90)">${i}</text>`)}return f.join(``)}X=e=>this.ox+e*this.s;Y=e=>this.oy+e*this.s;_world(e){let t=this.svg.getBoundingClientRect();return{x:(e.clientX-t.left-this.ox)/this.s,z:(e.clientY-t.top-this.oy)/this.s}}_poly(e,t){return`<path d="${e.map(([e,t],n)=>`${n?`L`:`M`}${this.X(e).toFixed(1)} ${this.Y(t).toFixed(1)}`).join(``)+`Z`}" ${t}/>`}render(e,t){this.layout=t;let n=this.root.clientWidth,r=this.root.clientHeight;n&&(this._fit(t,n,r),this.svg.setAttribute(`viewBox`,`0 0 ${n} ${r}`),this.svg.setAttribute(`width`,n),this.svg.setAttribute(`height`,r),this.svg.innerHTML=this._draw(e,t),this.hint.textContent=e.planAdd?`Нажмите на наружную стену, чтобы поставить ${e.planAdd===`door`?`дверь`:`окно`}`:`Тяните перегородки, окна и двери. Нажмите на комнату, чтобы изменить`,this.hint.classList.toggle(`accent`,!!e.planAdd))}_draw(e,t){let n=t,{L:r,W:i,t:a,plan:o}=n,{X:s,Y:c}=this,l=e.planSel,u=Object.fromEntries(this.catalog.roomTypes.map(e=>[e.id,e])),d=[`<defs><pattern id="deckPat" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#e9d6b8"/><path d="M0 7.5H8" stroke="#cdb38e" stroke-width="1"/></pattern></defs>`],f=n.terrace;f&&(d.push(`<rect class="terrace" x="${s(f.x0)}" y="${c(f.z0)}" width="${(f.x1-f.x0)*this.s}" height="${(f.z1-f.z0)*this.s}" fill="url(#deckPat)"/>`),d.push(`<text class="room-name small" x="${s((f.x0+f.x1)/2)}" y="${c((f.z0+f.z1)/2)-2}">Терраса</text>
        <text class="room-area small" x="${s((f.x0+f.x1)/2)}" y="${c((f.z0+f.z1)/2)+12}">${ng(f.area)}</text>`));let p=[];for(let e of o.rooms){let t=l?.kind===`room`&&l.path===e.path,n=u[e.type]||this.catalog.roomTypes[0];d.push(`<rect data-t="room" data-path="${e.path}" class="room${t?` on`:``}" x="${s(e.x0)}" y="${c(e.z0)}" width="${(e.x1-e.x0)*this.s}" height="${(e.z1-e.z0)*this.s}" fill="${n.color}"/>`);let r=s((e.x0+e.x1)/2),i=c((e.z0+e.z1)/2),a=Math.min(e.x1-e.x0,e.z1-e.z0)*this.s<90,o=Math.min(e.x1-e.x0,e.z1-e.z0)*this.s>120;p.push(`<text class="room-name${a?` small`:``}" x="${r}" y="${i-2}">${tg(n.name)}</text>
        <text class="room-area${a?` small`:``}" x="${r}" y="${i+(a?12:16)}">${ng(e.area)}</text>`),o&&p.push(`<text class="room-dims" x="${r}" y="${i+31}">${rg(e.x1-e.x0,e.z1-e.z0)}</text>`)}if(e.showFurniture!==!1)for(let e of _m(n))d.push(this._furniture(e));d.push(...p);let m=[[[-r/2,-i/2],[r/2,-i/2],[r/2,i/2],[-r/2,i/2]],[[-r/2+a,-i/2+a],[r/2-a,-i/2+a],[r/2-a,i/2-a],[-r/2+a,i/2-a]]].map(e=>e.map(([e,t],n)=>`${n?`L`:`M`}${s(e)} ${c(t)}`).join(``)+`Z`).join(``);d.push(`<path data-t="wall" class="walls${e.planAdd?` addable`:``}" fill-rule="evenodd" d="${m}"/>`);for(let e of o.partitions){let t=l?.kind===`part`&&l.path===e.path,n=e.orient===`v`,r=(t,r)=>n?`x="${s(e.at-z/2)}" y="${c(t)}" width="${z*this.s}" height="${(r-t)*this.s}"`:`x="${s(t)}" y="${c(e.at-z/2)}" width="${(r-t)*this.s}" height="${z*this.s}"`;if(d.push(`<rect class="part${t?` on`:``}" ${r(e.from,e.to)}/>`),e.door){let t=e.door.center-e.door.w/2,i=e.door.center+e.door.w/2;d.push(`<rect class="gap" ${r(t,i)}/>`);let a=(t,r)=>n?[e.at+z/2+r,t]:[t,e.at+z/2+r],[o,l]=a(t,0),[u,f]=a(t,e.door.w),[p,m]=a(i,0),h=e.door.w*this.s,g=+!n;d.push(`<path class="swing" d="M${s(o)} ${c(l)}L${s(u)} ${c(f)}A${h} ${h} 0 0 ${g} ${s(p)} ${c(m)}"/>`)}let i=n?`x="${s(e.at)-10}" y="${c(e.from)}" width="20" height="${(e.to-e.from)*this.s}"`:`x="${s(e.from)}" y="${c(e.at)-10}" width="${(e.to-e.from)*this.s}" height="20"`;if(d.push(`<rect data-t="part" data-path="${e.path}" class="hit ${n?`col`:`row`}" ${i}/>`),e.door){let t=e.door.center-e.door.w/2,r=e.door.w*this.s,i=n?`x="${s(e.at)-12}" y="${c(t)}" width="24" height="${r}"`:`x="${s(t)}" y="${c(e.at)-12}" width="${r}" height="24"`;d.push(`<rect data-t="pdoor" data-path="${e.path}" class="hit ${n?`row`:`col`}" ${i}/>`)}let a=e.from,o=e.to;e.door&&(e.door.center-e.door.w/2-e.from>=e.to-(e.door.center+e.door.w/2)?o=e.door.center-e.door.w/2:a=e.door.center+e.door.w/2);let u=(a+o)/2,f=n?e.at:u,p=n?u:e.at;d.push(`<g class="handle${t?` on`:``}" data-t="part" data-path="${e.path}" transform="translate(${s(f)} ${c(p)})">
        <circle r="13"/><path d="${n?`M-6 0h12M-6 0l3-3M-6 0l3 3M6 0l-3-3M6 0l-3 3`:`M0 -6v12M0 -6l-3 3M0 -6l3 3M0 6l-3-3M0 6l3-3`}"/></g>`)}for(let e of o.openings){if(e.hidden)continue;let t=l?.kind===`open`&&l.id===e.id,n=e.center-e.w/2,o=e.center+e.w/2,u=(t,n)=>sg(e.wall,t,n,r,i);if(d.push(this._poly([u(n,-.01),u(o,-.01),u(o,a+.01),u(n,a+.01)],`class="gap"`)),e.kind===`window`)d.push(this._poly([u(n,a*.3),u(o,a*.3),u(o,a*.7),u(n,a*.7)],`class="win"`));else{let[t,r]=u(n,a),[i,l]=u(n,a+e.w),[f,p]=u(o,a),m=e.w*this.s,h={front:1,back:0,right:0,left:1}[e.wall];d.push(`<path class="swing door" d="M${s(t)} ${c(r)}L${s(i)} ${c(l)}A${m} ${m} 0 0 ${h} ${s(f)} ${c(p)}"/>`)}d.push(this._poly([u(n-.08,-.25),u(o+.08,-.25),u(o+.08,a+.18),u(n-.08,a+.18)],`data-t="open" data-id="${e.id}" class="hit open${t?` sel`:``}"`))}let h=this.chains||this._chains(n),g=Math.max(r/2,f?.type===`side`?f.x1:-1/0),_=Math.max(i/2,f?.type===`front`?f.z1:-1/0),v=[];h.top.forEach((e,t)=>v.push(this._chain(`top`,e,-i/2,t))),h.bottom.forEach((e,t)=>v.push(this._chain(`bottom`,e,_,t))),h.left.forEach((e,t)=>v.push(this._chain(`left`,e,-r/2,t))),h.right.forEach((e,t)=>v.push(this._chain(`right`,e,g,t)));let y=c(_)+(h.bottom.length?ag+(h.bottom.length-1)*og+22:26);return d.push(`<g class="dim">${v.join(``)}</g>
    <text class="facade" x="${s(0)}" y="${y}">ФАСАД</text>`),d.join(``)}_furniture(e){let{X:t,Y:n}=this,r=t(e.x0),i=n(e.z0),a=(e.x1-e.x0)*this.s,o=(e.z1-e.z0)*this.s,s=[`<rect class="furn" x="${r}" y="${i}" width="${a}" height="${o}" rx="2"/>`],c=r+a/2,l=i+o/2,u={back:`top`,front:`bottom`,left:`left`,right:`right`}[e.side]||`top`,d=e=>{let t=Math.max(3,e*this.s);return u===`top`?`<rect class="furn-d" x="${r}" y="${i}" width="${a}" height="${t}"/>`:u===`bottom`?`<rect class="furn-d" x="${r}" y="${i+o-t}" width="${a}" height="${t}"/>`:u===`left`?`<rect class="furn-d" x="${r}" y="${i}" width="${t}" height="${o}"/>`:`<rect class="furn-d" x="${r+a-t}" y="${i}" width="${t}" height="${o}"/>`};return e.kind===`bed`?s.push(d(.35)):e.kind===`sofa`?s.push(d(.2)):e.kind===`table`?s.push(`<circle class="furn-d" cx="${c}" cy="${l}" r="${Math.min(a,o)*.18}"/>`):e.kind===`shower`?s.push(`<path class="furn-l" d="M${r} ${i}L${r+a} ${i+o}M${r+a} ${i}L${r} ${i+o}"/>`):e.kind===`toilet`||e.kind===`sink`?s.push(`<ellipse class="furn-d" cx="${c}" cy="${l}" rx="${a*.3}" ry="${o*.3}"/>`):e.kind===`counter`?s.push(`<circle class="furn-l" cx="${r+a*.3}" cy="${l}" r="${Math.min(a,o)*.22}"/><circle class="furn-l" cx="${r+a*.7}" cy="${l}" r="${Math.min(a,o)*.22}"/>`):s.push(`<path class="furn-l" d="M${r} ${i}L${r+a} ${i+o}"/>`),s.join(``)}_bind(){let e=this.svg;e.addEventListener(`pointerdown`,t=>{if(!this.layout)return;this.hint.classList.add(`gone`);let n=t.target.closest(`[data-t]`),r=this._world(t),i=this.store.get();i.planAdd?this._addAt(r,i.planAdd):(this.drag={t:n?.dataset.t,path:n?.dataset.path,id:n?.dataset.id,x:t.clientX,y:t.clientY,moved:!1,token:`drag-${++this.dragSeq}`},e.setPointerCapture(t.pointerId),t.preventDefault())}),e.addEventListener(`pointermove`,e=>{let t=this.drag;if(!t||!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<5)return;t.moved=!0;let n=this._world(e);this.meta={merge:t.token},t.t===`part`?this._movePartition(t.path,n):t.t===`pdoor`?this._movePartitionDoor(t.path,n):t.t===`open`&&this._moveOpening(t.id,n),this.meta=void 0});let t=t=>{let n=this.drag;if(!n)return;this.drag=null,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);let r=null;n.t===`room`?r=n.moved?this.store.get().planSel:{kind:`room`,path:n.path}:n.t===`part`||n.t===`pdoor`?r={kind:`part`,path:n.path}:n.t===`open`&&(r={kind:`open`,id:n.id}),this.store.set({planSel:r})};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t)}_setPlan(e){let t=this.store.get().plan;this.store.set({plan:{...t,...e}},this.meta)}_movePartition(e,t){let n=this.layout.plan.partitions.find(t=>t.path===e);if(!n)return;let r=n.orient===`v`?t.x:t.z,i=(Math.min(n.hi-z-n.rMax,Math.max(n.lo+n.rMin,r-z/2))-n.lo)/(n.hi-n.lo-z);this._setPlan({tree:Le(this.store.get().plan.tree,e,{r:i})})}_movePartitionDoor(e,t){let n=this.layout.plan.partitions.find(t=>t.path===e);if(!n)return;let r=n.orient===`v`?t.z:t.x,i=Math.min(1,Math.max(0,(r-n.from)/(n.to-n.from)));this._setPlan({tree:Le(this.store.get().plan.tree,e,{door:i})})}_nearestWall(e){let{L:t,W:n}=this.layout,r=Math.max(-t/2,Math.min(t/2,e.x)),i=Math.max(-n/2,Math.min(n/2,e.z)),a=[[`front`,Math.abs(e.z-n/2),r,t],[`back`,Math.abs(e.z+n/2),r,t],[`right`,Math.abs(e.x-t/2),i,n],[`left`,Math.abs(e.x+t/2),i,n]].sort((e,t)=>e[1]-t[1])[0];return{wall:a[0],dist:a[1],pos:(a[2]+a[3]/2)/a[3]}}_moveOpening(e,t){let n=this._nearestWall(t),r=this.store.get().plan;this._setPlan({openings:r.openings.map(t=>t.id===e?{...t,wall:n.wall,pos:n.pos}:t)})}_addAt(e,t){let n=this._nearestWall(e);if(n.dist>.7)return;let r=this.store.get().plan,i=t===`door`?{id:Ge(`d`),kind:`door`,wall:n.wall,pos:n.pos}:{id:Ge(`w`),kind:`window`,type:`standard`,wall:n.wall,pos:n.pos};this.store.set({plan:{...r,openings:[...r.openings,i]},planAdd:null,planSel:{kind:`open`,id:i.id}})}};function lg(e,t,n,r,i){let a=Object.create(cg.prototype);a.catalog=e,a.X=e=>a.ox+e*a.s,a.Y=e=>a.oy+e*a.s,a._fit(n,r,i,{top:40,bottom:40,side:40});let o={...t,planSel:null,planAdd:null};return`<svg class="plan-svg print" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${i}" width="${r}" height="${i}">${a._draw(o,n)}</svg>`}var ug=null,dg=0;function fg(e,t=3200){ug||(ug=document.createElement(`div`),ug.className=`toast`,ug.setAttribute(`role`,`status`),document.body.appendChild(ug)),ug.textContent=e,ug.classList.add(`show`),clearTimeout(dg),dg=setTimeout(()=>ug.classList.remove(`show`),t)}async function pg(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.cssText=`position:fixed;opacity:0`,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{n=!1}return t.remove(),n}}var mg=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),hg=e=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м²`,gg=e=>`${e.toLocaleString(`ru-RU`,{minimumFractionDigits:1,maximumFractionDigits:1})} м`,_g=8,vg=2,yg=12;function bg(e,t,n,r){let i=Object.fromEntries(n.roomTypes.map(e=>[e.id,e])),a=null,o=(n.layouts||[]).map(e=>({...e,plan:vn({plan:e.plan},n).plan})).filter(e=>e.plan),s=(e,t)=>JSON.stringify(e)===JSON.stringify(t),c=(e,t)=>({length:Math.max(t.length,e.min?.length||0),width:Math.max(t.width,e.min?.width||0)}),l=(e,n={})=>t.set({plan:{...t.get().plan,...e},...n});return e.addEventListener(`click`,e=>{let n=e.target.closest(`[data-act]`);if(!n||n.disabled)return;let i=t.get(),a=i.plan.tree,s=i.planSel,u=n.dataset.act,d=n.dataset.v;if(u===`add`)t.set({planAdd:i.planAdd===d?null:d,planSel:null});else if(u===`cancel-add`)t.set({planAdd:null});else if(u===`select-room`)t.set({planSel:{kind:`room`,path:d}});else if(u===`room-type`)l({tree:Ie(a,s.path,d)});else if(u===`split`)l({tree:Ne(a,s.path,d)},{planSel:{kind:`room`,path:s.path+`a`}});else if(u===`merge`)l({tree:Pe(a,s.path)},{planSel:{kind:`room`,path:s.path.slice(0,-1)}});else if(u===`part-door`)l({tree:Le(a,s.path,{door:je(a,s.path).door==null?.5:null})});else if(u===`part-remove`)l({tree:Fe(a,s.path)},{planSel:null});else if(u===`win-type`)l({openings:i.plan.openings.map(e=>e.id===s.id?{...e,type:d}:e)});else if(u===`open-remove`)l({openings:i.plan.openings.filter(e=>e.id!==s.id)},{planSel:null});else if(u===`deselect`)t.set({planSel:null});else if(u===`reset`)t.set({plan:JSON.parse(JSON.stringify(r.plan)),planSel:null,planAdd:null});else if(u===`layout`){let e=o.find(e=>e.id===d);if(!e)return;let n=c(e,i),r=n.length!==i.length||n.width!==i.width;t.set({plan:JSON.parse(JSON.stringify(e.plan)),...n,planSel:null,planAdd:null}),fg(r?`Планировка «${e.name}» рассчитана на дом от ${e.min.length}×${e.min.width} м — размер увеличен`:`Планировка «${e.name}». Перегородки, окна и двери можно двигать`)}else u===`furniture`&&t.set({showFurniture:!i.showFurniture})}),(t,r)=>{let l=JSON.stringify([t.plan,t.planSel,t.planAdd,t.length,t.width,t.showFurniture,t.terrace]);if(l===a)return;a=l;let{plan:u}=r,d=t.planSel,f=u.openings.filter(e=>!e.hidden),p=f.filter(e=>e.kind===`door`).length,m=f.length-p,h=u.openings.filter(e=>e.hidden).length,g=[];if(o.length&&g.push(`<section class="group first">
        <h2>Готовые планировки</h2>
        <div class="presets layouts">${o.map(e=>{let r=c(e,t),i=Ze({...t,...r,plan:e.plan,terrace:{type:`none`,depth:0}},n),a=s(t.plan,e.plan),o=r.length!==t.length||r.width!==t.width;return`<button type="button" class="preset layout${a?` on`:``}" data-act="layout" data-v="${mg(e.id)}" aria-pressed="${a}">
            ${Xh(i,n)}<span class="preset-text"><span class="preset-name">${mg(e.name)}</span>
            <span class="preset-note">${mg(e.note)}</span>
            ${o?`<span class="preset-min">дом от ${e.min.length}×${e.min.width} м</span>`:``}</span></button>`}).join(``)}</div>
      </section>`),g.push(`<section class="group${o.length?``:` first`}">
      <h2>Добавить</h2>
      <div class="btn-row">
        <button type="button" class="btn${t.planAdd===`window`?` active`:``}" data-act="add" data-v="window" ${m>=yg?`disabled`:``}>
          <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M12 4v16M4 12h16"/></svg>Окно</button>
        <button type="button" class="btn${t.planAdd===`door`?` active`:``}" data-act="add" data-v="door" ${p>=vg?`disabled`:``}>
          <svg viewBox="0 0 24 24"><path d="M6 20V4h12v16M4 20h16"/><circle cx="15" cy="12" r="1"/></svg>Дверь</button>
      </div>
      ${t.planAdd?`<p class="note accent">Нажмите на наружную стену на плане. <button type="button" class="link" data-act="cancel-add">Отмена</button></p>`:``}
      ${h?`<p class="note warn">Не поместилось проёмов: ${h}. Увеличьте дом или передвиньте окна.</p>`:``}
    </section>`),d?.kind===`room`){let e=u.rooms.find(e=>e.path===d.path);if(e){let t=e.x1-e.x0,r=e.z1-e.z0,a=t>=2.1&&u.rooms.length<_g,o=r>=2.1&&u.rooms.length<_g;g.push(`<section class="group sel-box">
          <div class="sel-head"><h2>${mg(i[e.type]?.name)} · ${hg(e.area)}</h2>
            <button type="button" class="x" data-act="deselect" aria-label="Снять выбор">×</button></div>
          <p class="note">${gg(t)} × ${gg(r)}</p>
          <div class="label">Назначение</div>
          <div class="chips">${n.roomTypes.map(t=>`<button type="button" class="chip${t.id===e.type?` on`:``}" data-act="room-type" data-v="${t.id}"><span class="chip-dot" style="background:${t.color}"></span>${mg(t.name)}</button>`).join(``)}</div>
          <div class="label">Перегородки</div>
          <div class="btn-row">
            <button type="button" class="btn" data-act="split" data-v="v" ${a?``:`disabled`}><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M12 5v14"/></svg>Разделить поперёк</button>
            <button type="button" class="btn" data-act="split" data-v="h" ${o?``:`disabled`}><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 12h18"/></svg>Разделить вдоль</button>
          </div>
          ${d.path?`<button type="button" class="btn wide ghost" data-act="merge">Объединить с соседней комнатой</button>`:``}
          ${!a&&!o?`<p class="note">Комната слишком мала, чтобы делить её дальше.</p>`:``}
        </section>`)}}else if(d?.kind===`open`){let e=u.openings.find(e=>e.id===d.id);if(e){let t=e.kind===`door`,r=t&&p<=1;g.push(`<section class="group sel-box">
          <div class="sel-head"><h2>${t?`Входная дверь`:`Окно`} · ${ke[e.wall]}</h2>
            <button type="button" class="x" data-act="deselect" aria-label="Снять выбор">×</button></div>
          ${t?`<p class="note">Тип двери выбирается на шаге «Дом и материалы». Перетащите дверь по стене на плане.</p>`:`<div class="label">Размер</div><div class="chips">${n.windowTypes.map(t=>`<button type="button" class="chip${t.id===e.type?` on`:``}" data-act="win-type" data-v="${t.id}">${mg(t.name)} <small>${mg(t.size)}</small></button>`).join(``)}</div>
               <p class="note">Перетащите окно по стене или на другую стену.</p>`}
          <button type="button" class="btn wide ghost danger" data-act="open-remove" ${r?`disabled`:``}>Удалить</button>
          ${r?`<p class="note">В доме должна остаться хотя бы одна входная дверь.</p>`:``}
        </section>`)}}else if(d?.kind===`part`){let e=u.partitions.find(e=>e.path===d.path);if(e){let n=je(t.plan.tree,d.path);g.push(`<section class="group sel-box">
          <div class="sel-head"><h2>Перегородка · ${gg(e.to-e.from)}</h2>
            <button type="button" class="x" data-act="deselect" aria-label="Снять выбор">×</button></div>
          <p class="note">Тяните за кружок со стрелками, чтобы сдвинуть. Дверь в перегородке тоже двигается.</p>
          <div class="btn-row">
            <button type="button" class="btn" data-act="part-door">${n?.door==null?`Добавить дверь`:`Убрать дверь`}</button>
            <button type="button" class="btn ghost danger" data-act="part-remove">Убрать перегородку</button>
          </div>
        </section>`)}}else g.push(`<section class="group"><p class="note big">Нажмите на комнату, окно или перегородку на плане, чтобы изменить их.</p></section>`);g.push(`<section class="group">
      <h2>Комнаты</h2>
      <ul class="rooms">${u.rooms.map(e=>`<li><button type="button" data-act="select-room" data-v="${e.path}" class="${d?.kind===`room`&&d.path===e.path?`on`:``}">
        <span class="chip-dot" style="background:${i[e.type]?.color}"></span><span>${mg(i[e.type]?.name)}</span><b>${hg(e.area)}</b></button></li>`).join(``)}</ul>
      <div class="summary">
        <div><b>${hg(u.rooms.reduce((e,t)=>e+t.area,0))}</b><span>площадь комнат</span></div>
        <div><b>${m}</b><span>окон</span></div>
        <div><b>${p+u.partitions.filter(e=>e.door).length}</b><span>дверей</span></div>
      </div>
      <button type="button" class="toggle${t.showFurniture?` on`:``}" data-act="furniture" role="switch" aria-checked="${!!t.showFurniture}">
        <span class="toggle-track"><span class="toggle-thumb"></span></span>Показывать мебель для масштаба</button>
      <button type="button" class="btn wide ghost" data-act="reset">Вернуть исходную планировку</button>
    </section>`);let _=e.querySelector(`.layouts`),v=_?_.scrollLeft:0;e.innerHTML=g.join(``);let y=e.querySelector(`.layouts`);y&&(y.scrollLeft=v)}}var xg=null;function Sg(e){e&&/^\d{5,12}$/.test(String(e))&&(xg=+e,(function(e,t,n,r,i,a,o){e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},e[i].l=1*new Date,a=t.createElement(n),o=t.getElementsByTagName(n)[0],a.async=1,a.src=r,o.parentNode.insertBefore(a,o)})(window,document,`script`,`https://mc.yandex.ru/metrika/tag.js`,`ym`),window.ym(xg,`init`,{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!1}))}function Cg(e,t){xg&&window.ym&&window.ym(xg,`reachGoal`,e,t)}var wg=3,Tg=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Eg=e=>Object.fromEntries(f.filter(t=>t in e).map(t=>[t,e[t]])),Dg=(e,t)=>JSON.stringify(Eg(e))===JSON.stringify(Eg(t));function Og({cfg:e,pricing:t,defaults:n,specRows:r}){let i=`dacha-compare-${e.id}`,a=()=>{try{let t=JSON.parse(localStorage.getItem(i)||`[]`);return Array.isArray(t)?t.slice(0,wg).map(t=>({...t,doc:{...n,...vn(t.doc,e)}})):[]}catch{return[]}},o=e=>{try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch{return!1}},s=a(),c=n=>{let i=Ze(n,e),a=$e(i);return{k:i,metrics:a,price:kh(n,t,a,e).total,rows:Object.fromEntries(r(n,i,e,a))}};return{count:()=>s.length,has:e=>s.some(t=>Dg(t.doc,e)),add(e,t){if(s.length>=wg||s.some(t=>Dg(t.doc,e)))return!1;let n=(s.reduce((e,t)=>Math.max(e,t.n||0),0)||0)+1;return s.push({n,doc:Eg(e),image:t,at:Date.now()}),o(s)||(s[s.length-1].image=null,o(s)),!0},remove(e){s.splice(e,1),o(s)},get:e=>s[e],html(e){let t=s.some(t=>Dg(t.doc,e)),n=s.length>=wg,r=`<button type="button" class="btn wide" data-act="cmp-add" ${t||n?`disabled`:``}>
        <svg viewBox="0 0 24 24"><path d="M4 6h7v12H4zM13 6h7v12h-7z"/></svg>${t?`Этот вариант уже в сравнении`:n?`Можно сравнить до трёх — удалите один`:`Запомнить для сравнения`}</button>`;if(!s.length)return`<h2>Сравнение вариантов</h2>
          <p class="note">Соберите несколько домиков — например, с террасой и без — и сравните цену и площадь рядом.</p>${r}`;let i=s.map(t=>({v:t,...c(t.doc),current:Dg(t.doc,e)})),a=Math.min(...i.map(e=>e.price));return`<h2>Сравнение вариантов</h2>
        <div class="cmp" style="--cols:${i.length}">
          <div class="cmp-row cmp-heads">${i.map((e,t)=>`
            <div class="cmp-head${e.current?` current`:``}">
              ${e.v.image?`<img src="${e.v.image}" alt="" loading="lazy"/>`:`<div class="cmp-noimg"></div>`}
              <div class="cmp-title">Вариант ${e.v.n}${e.current?`<span>сейчас</span>`:``}</div>
              <div class="cmp-size">${String(e.k.L).replace(`.`,`,`)} × ${String(e.k.W).replace(`.`,`,`)} м</div>
              <div class="cmp-actions">
                ${e.current?``:`<button type="button" class="link" data-act="cmp-open" data-i="${t}">Открыть</button>`}
                <button type="button" class="link danger" data-act="cmp-del" data-i="${t}" aria-label="Удалить вариант ${e.v.n}">Удалить</button>
              </div>
            </div>`).join(``)}</div>
          ${[[`Цена`,e=>`<b>${Uh(e.price)}</b>${e.price>a?`<small>+${Uh(e.price-a)}</small>`:s.length>1?`<small class="ok">дешевле всех</small>`:``}`],[`Площадь`,e=>`${Gh(e.metrics.floorArea+(e.metrics.atticArea||0))}${e.k.attic?`<small>с мансардой</small>`:``}`],[`Цена за м²`,e=>Uh(Math.round(e.price/(e.metrics.floorArea+(e.metrics.atticArea||0))/100)*100)],[`Комнаты`,e=>Tg(e.rows.Комнаты)],[`Конструкция`,e=>Tg(e.rows.Конструкция)],[`Крыша`,e=>Tg(e.rows.Крыша)],[`Стены`,e=>Tg(e.rows[`Наружная отделка`])],[`Терраса`,e=>Tg(e.rows.Терраса||`нет`)]].map(([e,t])=>{let n=i.map(t);return`<div class="cmp-label">${e}</div><div class="cmp-row${new Set(n).size>1?` diff`:``}">${n.map(e=>`<div>${e}</div>`).join(``)}</div>`}).join(``)}
        </div>
        ${r}`}}}var kg=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Ag=e=>e.toLocaleString(`ru-RU`,{maximumFractionDigits:1});function jg(e,t,n,r){let i=Xm(n.wallMaterials,e.wallMaterial),a=Xm(i.finishes,e.wallFinish),o=Xm(n.roofMaterials,e.roofMaterial),s=Xm(o.finishes,e.roofFinish),c=(e,t)=>Xm(e,t)?.name??``,l=Object.fromEntries(n.roomTypes.map(e=>[e.id,e.name])),u=Object.entries(r.windows).map(([e,t])=>`${c(n.windowTypes,e).toLowerCase()} ${Xm(n.windowTypes,e).size} — ${t} шт.`).join(`; `),d=[[`Размеры`,`${Ag(t.L)} × ${Ag(t.W)} м, площадь ${Gh(r.floorArea)}`],[`Комнаты`,t.plan.rooms.map(e=>`${l[e.type]} ${Gh(e.area)}`).join(`, `)],[`Конструкция`,`${c(n.constructions,e.construction)}, ${c(n.packages,e.package).toLowerCase()} вариант`],[`Фундамент`,c(n.foundations,e.foundation)],[`Крыша`,`${c(n.roofTypes,t.roofType)}, ${o.name.toLowerCase()} «${s.name}»`],[`Наружная отделка`,`${i.name}, «${a.name}»`],[`Цоколь`,c(n.plinths,e.plinth)],[`Окна`,`${u||`нет`}; рамы: ${c(n.windowFrames,e.windowFrame).toLowerCase()}`],[`Двери`,`входных — ${r.doors} (${c(n.doorTypes,e.doorType).toLowerCase()}), межкомнатных — ${r.interiorDoors}`]];return t.attic&&d.push([`Мансарда`,`жилой этаж под крышей, ${Gh(t.attic.area)}`]),t.terrace&&d.push([`Терраса`,`${c(n.terraces,t.terrace.type).toLowerCase()}, ${Ag(t.terrace.depth)} м, ${Gh(t.terrace.area)}`]),d.push(...tn(Kt(e,t,r))),d}function Mg(e,t,n,r,i,a){let o=[...jg(e,t,n,r),...a?.rows||[]];return[`Здравствуйте! Хочу обсудить домик из конфигуратора${n.brand?` «`+n.brand+`»`:``}.`,...o.map(([e,t])=>`${e}: ${t}`),`Предварительная стоимость: ${Uh(i.total)}`,`Конфигурация: ${pn(e)}`].join(`
`)}function Ng(e,{cfg:t,store:n,onPdf:r,pricing:i,defaults:a,snapshot:o}){let s=t.contacts||{},c=t.lead||{},l=null,u=Og({cfg:t,pricing:i,defaults:a,specRows:jg}),d=()=>{let t=e.querySelector(`.compare`);t&&l&&(t.innerHTML=u.html(l.state))};return e.addEventListener(`click`,async e=>{let i=e.target.closest(`[data-act]`);if(!i||!l)return;let{state:a,layout:c,metrics:f,price:p,site:m}=l,h=Mg(a,c,t,f,p,m),g=i.dataset.act;if(g===`cmp-add`)return u.add(a,o())&&(Cg(`compare_add`),fg(`Вариант запомнен. Поменяйте что-нибудь и запомните ещё один`)),d();if(g===`cmp-del`)return u.remove(+i.dataset.i),d();if(g===`cmp-open`){let e=u.get(+i.dataset.i);e&&(n.set({...e.doc,planSel:null,planAdd:null}),fg(`Открыт вариант ${e.n}`))}else if(g===`pdf`)Cg(`pdf`),r();else if(g===`share`){Cg(`share`);let e=pn(a);navigator.share&&matchMedia(`(pointer: coarse)`).matches?navigator.share({title:t.title,text:`Мой домик в конфигураторе`,url:e}).catch(()=>{}):await pg(e)?fg(`Ссылка скопирована. Её можно отправить или открыть позже`):prompt(`Скопируйте ссылку:`,e)}else if(g.startsWith(`contact-`)){let e=g.slice(8);if(Cg(`contact_`+e),s.demo){await pg(h),fg(`Это демо: у производителя здесь будут его WhatsApp, Telegram и телефон. Текст заявки скопирован`,5e3);return}e===`whatsapp`?window.open(`https://wa.me/${String(s.whatsapp).replace(/\D/g,``)}?text=${encodeURIComponent(h)}`,`_blank`,`noopener`):e===`telegram`?(await pg(h),fg(`Текст заявки скопирован — вставьте его в чат`,5e3),window.open(`https://t.me/${String(s.telegram).replace(/^@/,``)}`,`_blank`,`noopener`)):e===`email`?location.href=`mailto:${s.email}?subject=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D0%B8%D0%B7%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0&body=${encodeURIComponent(h)}`:e===`phone`&&(location.href=`tel:${String(s.phone).replace(/[^\d+]/g,``)}`)}}),e.addEventListener(`submit`,async e=>{if(e.preventDefault(),!l||!c.endpoint)return;let n=e.target,r=n.querySelector(`button[type=submit]`),i=Object.fromEntries(new FormData(n));if(!i.consent)return fg(`Нужно согласие на обработку персональных данных`);r.disabled=!0;try{let{state:e,layout:r,metrics:a,price:o,site:s}=l,u=await fetch(c.endpoint,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({manufacturer:t.id,name:i.name,phone:i.phone,comment:i.comment,text:Mg(e,r,t,a,o,s),total:o.total,link:pn(e)})});if(!u.ok)throw Error(u.status);Cg(`lead_sent`),n.innerHTML=`<p class="note big ok">Заявка отправлена. Производитель свяжется с вами в ближайшее время.</p>`}catch{r.disabled=!1,fg(`Не удалось отправить. Попробуйте ещё раз или позвоните производителю`)}}),(n,r,i,a,o)=>{l={state:n,layout:r,metrics:i,price:a,site:o};let u=jg(n,r,t,i),f=[[`whatsapp`,`WhatsApp`,s.whatsapp,`<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9 9.5c.5 2 2 3.5 4 4l1.2-1.2 2 1-1 1.7c-3.5 0-7-3.5-7-7l1.7-1 1 2z"/>`],[`telegram`,`Telegram`,s.telegram,`<path d="m3 11 17-7-3 16-5-4-3 3v-5l8-7-10 6z"/>`],[`email`,`Почта`,s.email,`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`],[`phone`,`Позвонить`,s.phone,`<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>`]].filter(([,,e])=>s.demo||e);e.innerHTML=`
      <header class="panel-head">
        <h1>Ваш домик</h1>
        <p>${kg(`${Ag(r.L)} × ${Ag(r.W)} м · ${Gh(i.floorArea)} · комнат: ${r.plan.rooms.length}`)}</p>
      </header>
      <section class="group">
        <dl class="spec">${[...u,...o?.rows||[]].map(([e,t])=>`<dt>${kg(e)}</dt><dd>${kg(t)}</dd>`).join(``)}</dl>
        <div class="btn-row">
          <button type="button" class="btn" data-act="pdf"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 14h6M10 17h6"/></svg>Скачать КП (PDF)</button>
          <button type="button" class="btn" data-act="share"><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/></svg>Поделиться</button>
        </div>
      </section>
      <section class="group compare"></section>
      <section class="group contact">
        <h2>Обсудить с производителем</h2>
        ${s.demo?`<p class="note">Демо-версия: кнопки ниже покажут, как это работает у производителя. Сообщение уже содержит ваш домик, цену и ссылку.</p>`:`<p class="note">Сообщение уже содержит ваш домик, цену и ссылку на конфигурацию.${s.hours?` `+kg(s.hours)+`.`:``}</p>`}
        <div class="contact-grid">${f.map(([e,t,,n])=>`<button type="button" class="btn contact-btn ${e}" data-act="contact-${e}"><svg viewBox="0 0 24 24">${n}</svg>${t}</button>`).join(``)}</div>
        ${c.endpoint?`
          <form class="lead-form" novalidate>
            <div class="label">Или оставьте телефон — вам перезвонят</div>
            <input name="name" autocomplete="name" placeholder="Имя" required maxlength="80"/>
            <input name="phone" type="tel" autocomplete="tel" placeholder="Телефон" required maxlength="30"/>
            <textarea name="comment" rows="2" placeholder="Комментарий (необязательно)" maxlength="500"></textarea>
            <label class="consent"><input type="checkbox" name="consent" value="1"/> <span>Согласен на обработку персональных данных в соответствии с <a href="${kg(c.privacyUrl||`#`)}" target="_blank" rel="noopener">политикой конфиденциальности</a></span></label>
            <button type="submit" class="next-btn">Отправить заявку</button>
          </form>`:``}
        ${s.address?`<p class="note">${kg(s.address)}</p>`:``}
      </section>`,d()}}var Pg=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Fg={building:`#d9c7a8`,ground:`#e5dfd2`,tree:`#9fbf86`},Ig={greenhouse:`#dbeee9`,bed:`#b39a7c`,parking:`#d4d1ca`,firepit:`#d4d1ca`,flowers:`#e8b9c3`,well:`#bcd0db`};function Lg(e,t,n=520,r=520){let i=Math.min((n-72)/e.W,(r-72-30)/e.D),a=n/2,o=36+(r-72-30)/2,s=e=>(a+e*i).toFixed(1),c=e=>(o+e*i).toFixed(1),l=(e,t)=>`<rect x="${s(e.x0)}" y="${c(e.z0)}" width="${((e.x1-e.x0)*i).toFixed(1)}" height="${((e.z1-e.z0)*i).toFixed(1)}" ${t}/>`,u=[];u.push(l({x0:-e.W/2,x1:e.W/2,z0:-e.D/2,z1:e.D/2},`fill="#e4ecd6" stroke="#5b6b4c" stroke-width="1.5"`)),u.push(`<rect x="${s(-e.W/2-2)}" y="${c(e.D/2+1.2)}" width="${((e.W+4)*i).toFixed(1)}" height="${(4*i).toFixed(1)}" fill="#dcd8d0"/>`),u.push(`<text x="${a}" y="${c(e.D/2+3.2)}" class="sp-street">${e.front===`lane`?`ПРОЕЗД`:`УЛИЦА`}</text>`);let d=P(e);u.push(`<path d="M${s(d.x0)} ${c(e.D/2)}H${s(d.x1)}" stroke="#e4ecd6" stroke-width="4"/>`);let f=we(e);f&&u.push(`<path d="${f.map((e,t)=>`${t?`L`:`M`}${s(e[0])} ${c(e[1])}`).join(``)}" fill="none" stroke="#c9c2b4" stroke-width="${(1*i).toFixed(1)}" stroke-linejoin="round"/>`);let p=new Set(t.issues.flatMap(e=>e.ids));for(let t of e.items){let e=p.has(t.id)?`stroke="#d63c2f" stroke-width="2"`:`stroke="#7d7466" stroke-width="1"`;if(t.t.kind===`tree`){u.push(`<circle cx="${s(t.x)}" cy="${c(t.z)}" r="${(t.t.crown/2*i).toFixed(1)}" fill="${Fg.tree}" fill-opacity=".75" ${e}/>`),u.push(`<circle cx="${s(t.x)}" cy="${c(t.z)}" r="2" fill="#5d4636"/>`);continue}u.push(l(t.rect,`fill="${Ig[t.type]||Fg[t.t.kind]}" ${e}`));let n=(t.rect.x1-t.rect.x0)*i,r=(t.rect.z1-t.rect.z0)*i;if(Math.max(n,r)>22){let e=r>n*1.4&&n<60;u.push(`<text class="sp-label" x="${s(t.x)}" y="${c(t.z)}" ${e?`transform="rotate(-90 ${s(t.x)} ${c(t.z)})"`:``}>${Pg(t.t.short||t.t.name)}</text>`)}}u.push(l(e.house.rect,`fill="#8c6e52" ${p.has(`house`)?`stroke="#d63c2f" stroke-width="2"`:`stroke="#4e3d2c" stroke-width="1.2"`}`)),u.push(`<text class="sp-label house" x="${s((e.house.rect.x0+e.house.rect.x1)/2)}" y="${c((e.house.rect.z0+e.house.rect.z1)/2)}">ДОМ</text>`);for(let e of t.issues){if(!e.line)continue;let[t,n]=e.line;u.push(`<path d="M${s(t[0])} ${c(t[1])}L${s(n[0])} ${c(n[1])}" stroke="#d63c2f" stroke-width="2" stroke-dasharray="4 3"/>`)}let m=c(-e.D/2)-14,h=s(-e.W/2)-14;return u.push(`<g class="sp-dim"><path d="M${s(-e.W/2)} ${m}H${s(e.W/2)}"/><text x="${a}" y="${m-5}">${e.W.toLocaleString(`ru-RU`)} м</text>
    <path d="M${h} ${c(-e.D/2)}V${c(e.D/2)}"/><text transform="translate(${h-5} ${o}) rotate(-90)">${e.D.toLocaleString(`ru-RU`)} м</text></g>`),u.push(`<text class="sp-area" x="${n-8}" y="${r-8}">${Pg(ve({w:e.W,d:e.D}))}</text>`),`<svg class="site-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="${n}" height="${r}">
    <style>.sp-label{font:600 11px sans-serif;fill:#3b342b;text-anchor:middle;dominant-baseline:middle}.sp-label.house{fill:#fff}
    .sp-street{font:600 10px sans-serif;fill:#8a8478;text-anchor:middle;letter-spacing:.12em;dominant-baseline:middle}
    .sp-dim path{stroke:#6b665e;fill:none}.sp-dim text{font:11px sans-serif;fill:#4b463f;text-anchor:middle}
    .sp-area{font:600 12px sans-serif;fill:#4b463f;text-anchor:end}</style>${u.join(``)}</svg>`}function Rg(e,t){let n={};for(let t of e.items)n[t.t.name]=(n[t.t.name]||0)+1;let r=Object.entries(n).map(([e,t])=>t>1?`${e.toLowerCase()} — ${t}`:e.toLowerCase()).join(`, `);return[[`Участок`,`${e.W.toLocaleString(`ru-RU`)} × ${e.D.toLocaleString(`ru-RU`)} м (${ve({w:e.W,d:e.D})}), ${e.front===`lane`?`со стороны проезда`:`со стороны улицы`}`],[`На участке`,r||`только дом`],[`Нормы расстояний`,t.issues.length?`есть замечания: ${t.issues.length}`:`соблюдены (по СП 53.13330.2019)`]]}var zg=c(o(((e,t)=>{var n=function(){var e=function(e,t){var r=e,a=n[t],p=null,m=0,h=null,g=[],v={},y=function(e,t){m=r*4+17,p=function(e){for(var t=Array(e),n=0;n<e;n+=1){t[n]=Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(m),b(0,0),b(m-7,0),b(0,m-7),C(),S(),T(e,t),r>=7&&w(e),h??=O(r,a,g),E(h,t)},b=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||m<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||m<=t+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?p[e+n][t+r]=!0:p[e+n][t+r]=!1)},x=function(){for(var e=0,t=0,n=0;n<8;n+=1){y(!0,n);var r=i.getLostPoint(v);(n==0||e>r)&&(e=r,t=n)}return t},S=function(){for(var e=8;e<m-8;e+=1)p[e][6]??(p[e][6]=e%2==0);for(var t=8;t<m-8;t+=1)p[6][t]??(p[6][t]=t%2==0)},C=function(){for(var e=i.getPatternPosition(r),t=0;t<e.length;t+=1)for(var n=0;n<e.length;n+=1){var a=e[t],o=e[n];if(p[a][o]==null)for(var s=-2;s<=2;s+=1)for(var c=-2;c<=2;c+=1)s==-2||s==2||c==-2||c==2||s==0&&c==0?p[a+s][o+c]=!0:p[a+s][o+c]=!1}},w=function(e){for(var t=i.getBCHTypeNumber(r),n=0;n<18;n+=1){var a=!e&&(t>>n&1)==1;p[Math.floor(n/3)][n%3+m-8-3]=a}for(var n=0;n<18;n+=1){var a=!e&&(t>>n&1)==1;p[n%3+m-8-3][Math.floor(n/3)]=a}},T=function(e,t){for(var n=a<<3|t,r=i.getBCHTypeInfo(n),o=0;o<15;o+=1){var s=!e&&(r>>o&1)==1;o<6?p[o][8]=s:o<8?p[o+1][8]=s:p[m-15+o][8]=s}for(var o=0;o<15;o+=1){var s=!e&&(r>>o&1)==1;o<8?p[8][m-o-1]=s:o<9?p[8][15-o-1+1]=s:p[8][15-o-1]=s}p[m-8][8]=!e},E=function(e,t){for(var n=-1,r=m-1,a=7,o=0,s=i.getMaskFunction(t),c=m-1;c>0;c-=2)for(c==6&&--c;;){for(var l=0;l<2;l+=1)if(p[r][c-l]==null){var u=!1;o<e.length&&(u=(e[o]>>>a&1)==1),s(r,c-l)&&(u=!u),p[r][c-l]=u,--a,a==-1&&(o+=1,a=7)}if(r+=n,r<0||m<=r){r-=n,n=-n;break}}},D=function(e,t){for(var n=0,r=0,a=0,s=Array(t.length),c=Array(t.length),l=0;l<t.length;l+=1){var u=t[l].dataCount,d=t[l].totalCount-u;r=Math.max(r,u),a=Math.max(a,d),s[l]=Array(u);for(var f=0;f<s[l].length;f+=1)s[l][f]=255&e.getBuffer()[f+n];n+=u;var p=i.getErrorCorrectPolynomial(d),m=o(s[l],p.getLength()-1).mod(p);c[l]=Array(p.getLength()-1);for(var f=0;f<c[l].length;f+=1){var h=f+m.getLength()-c[l].length;c[l][f]=h>=0?m.getAt(h):0}}for(var g=0,f=0;f<t.length;f+=1)g+=t[f].totalCount;for(var _=Array(g),v=0,f=0;f<r;f+=1)for(var l=0;l<t.length;l+=1)f<s[l].length&&(_[v]=s[l][f],v+=1);for(var f=0;f<a;f+=1)for(var l=0;l<t.length;l+=1)f<c[l].length&&(_[v]=c[l][f],v+=1);return _},O=function(e,t,n){for(var r=s.getRSBlocks(e,t),a=c(),o=0;o<n.length;o+=1){var l=n[o];a.put(l.getMode(),4),a.put(l.getLength(),i.getLengthInBits(l.getMode(),e)),l.write(a)}for(var u=0,o=0;o<r.length;o+=1)u+=r[o].dataCount;if(a.getLengthInBits()>u*8)throw`code length overflow. (`+a.getLengthInBits()+`>`+u*8+`)`;for(a.getLengthInBits()+4<=u*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=u*8||(a.put(236,8),a.getLengthInBits()>=u*8));)a.put(17,8);return D(a,r)};v.addData=function(e,t){t||=`Byte`;var n=null;switch(t){case`Numeric`:n=l(e);break;case`Alphanumeric`:n=u(e);break;case`Byte`:n=d(e);break;case`Kanji`:n=f(e);break;default:throw`mode:`+t}g.push(n),h=null},v.isDark=function(e,t){if(e<0||m<=e||t<0||m<=t)throw e+`,`+t;return p[e][t]},v.getModuleCount=function(){return m},v.make=function(){if(r<1){for(var e=1;e<40;e++){for(var t=s.getRSBlocks(e,a),n=c(),o=0;o<g.length;o++){var l=g[o];n.put(l.getMode(),4),n.put(l.getLength(),i.getLengthInBits(l.getMode(),e)),l.write(n)}for(var u=0,o=0;o<t.length;o++)u+=t[o].dataCount;if(n.getLengthInBits()<=u*8)break}r=e}y(!1,x())},v.createTableTag=function(e,t){e||=2,t=t===void 0?e*4:t;var n=``;n+=`<table style="`,n+=` border-width: 0px; border-style: none;`,n+=` border-collapse: collapse;`,n+=` padding: 0px; margin: `+t+`px;`,n+=`">`,n+=`<tbody>`;for(var r=0;r<v.getModuleCount();r+=1){n+=`<tr>`;for(var i=0;i<v.getModuleCount();i+=1)n+=`<td style="`,n+=` border-width: 0px; border-style: none;`,n+=` border-collapse: collapse;`,n+=` padding: 0px; margin: 0px;`,n+=` width: `+e+`px;`,n+=` height: `+e+`px;`,n+=` background-color: `,n+=v.isDark(r,i)?`#000000`:`#ffffff`,n+=`;`,n+=`"/>`;n+=`</tr>`}return n+=`</tbody>`,n+=`</table>`,n},v.createSvgTag=function(e,t,n,r){var i={};typeof arguments[0]==`object`&&(i=arguments[0],e=i.cellSize,t=i.margin,n=i.alt,r=i.title),e||=2,t=t===void 0?e*4:t,n=typeof n==`string`?{text:n}:n||{},n.text=n.text||null,n.id=n.text?n.id||`qrcode-description`:null,r=typeof r==`string`?{text:r}:r||{},r.text=r.text||null,r.id=r.text?r.id||`qrcode-title`:null;var a=v.getModuleCount()*e+t*2,o,s,c,l,u=``,d=`l`+e+`,0 0,`+e+` -`+e+`,0 0,-`+e+`z `;for(u+=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg"`,u+=i.scalable?``:` width="`+a+`px" height="`+a+`px"`,u+=` viewBox="0 0 `+a+` `+a+`" `,u+=` preserveAspectRatio="xMinYMin meet"`,u+=r.text||n.text?` role="img" aria-labelledby="`+k([r.id,n.id].join(` `).trim())+`"`:``,u+=`>`,u+=r.text?`<title id="`+k(r.id)+`">`+k(r.text)+`</title>`:``,u+=n.text?`<description id="`+k(n.id)+`">`+k(n.text)+`</description>`:``,u+=`<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>`,u+=`<path d="`,c=0;c<v.getModuleCount();c+=1)for(l=c*e+t,o=0;o<v.getModuleCount();o+=1)v.isDark(c,o)&&(s=o*e+t,u+=`M`+s+`,`+l+d);return u+=`" stroke="transparent" fill="black"/>`,u+=`</svg>`,u},v.createDataURL=function(e,t){e||=2,t=t===void 0?e*4:t;var n=v.getModuleCount()*e+t*2,r=t,i=n-t;return _(n,n,function(t,n){if(r<=t&&t<i&&r<=n&&n<i){var a=Math.floor((t-r)/e),o=Math.floor((n-r)/e);return+!v.isDark(o,a)}return 1})},v.createImgTag=function(e,t,n){e||=2,t=t===void 0?e*4:t;var r=v.getModuleCount()*e+t*2,i=``;return i+=`<img`,i+=` src="`,i+=v.createDataURL(e,t),i+=`"`,i+=` width="`,i+=r,i+=`"`,i+=` height="`,i+=r,i+=`"`,n&&(i+=` alt="`,i+=k(n),i+=`"`),i+=`/>`,i};var k=function(e){for(var t=``,n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case`<`:t+=`&lt;`;break;case`>`:t+=`&gt;`;break;case`&`:t+=`&amp;`;break;case`"`:t+=`&quot;`;break;default:t+=r}}return t},A=function(e){var t=1;e=e===void 0?t*2:e;var n=v.getModuleCount()*t+e*2,r=e,i=n-e,a,o,s,c,l,u={"██":`█`,"█ ":`▀`," █":`▄`,"  ":` `},d={"██":`▀`,"█ ":`▀`," █":` `,"  ":` `},f=``;for(a=0;a<n;a+=2){for(s=Math.floor((a-r)/t),c=Math.floor((a+1-r)/t),o=0;o<n;o+=1)l=`█`,r<=o&&o<i&&r<=a&&a<i&&v.isDark(s,Math.floor((o-r)/t))&&(l=` `),r<=o&&o<i&&r<=a+1&&a+1<i&&v.isDark(c,Math.floor((o-r)/t))?l+=` `:l+=`█`,f+=e<1&&a+1>=i?d[l]:u[l];f+=`
`}return n%2&&e>0?f.substring(0,f.length-n-1)+Array(n+1).join(`▀`):f.substring(0,f.length-1)};return v.createASCII=function(e,t){if(e||=1,e<2)return A(t);--e,t=t===void 0?e*2:t;var n=v.getModuleCount()*e+t*2,r=t,i=n-t,a,o,s,c,l=Array(e+1).join(`██`),u=Array(e+1).join(`  `),d=``,f=``;for(a=0;a<n;a+=1){for(s=Math.floor((a-r)/e),f=``,o=0;o<n;o+=1)c=1,r<=o&&o<i&&r<=a&&a<i&&v.isDark(s,Math.floor((o-r)/e))&&(c=0),f+=c?l:u;for(s=0;s<e;s+=1)d+=f+`
`}return d.substring(0,d.length-1)},v.renderTo2dContext=function(e,t){t||=2;for(var n=v.getModuleCount(),r=0;r<n;r++)for(var i=0;i<n;i++)e.fillStyle=v.isDark(r,i)?`black`:`white`,e.fillRect(r*t,i*t,t,t)},v};e.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(r&255)}return t}},e.stringToBytes=e.stringToBytesFuncs.default,e.createStringToBytes=function(e,t){var n=function(){for(var n=h(e),r=function(){var e=n.read();if(e==-1)throw`eof`;return e},i=0,a={};;){var o=n.read();if(o==-1)break;var s=r(),c=r(),l=r(),u=String.fromCharCode(o<<8|s);a[u]=c<<8|l,i+=1}if(i!=t)throw i+` != `+t;return a}(),r=63;return function(e){for(var t=[],i=0;i<e.length;i+=1){var a=e.charCodeAt(i);if(a<128)t.push(a);else{var o=n[e.charAt(i)];typeof o==`number`?(o&255)==o?t.push(o):(t.push(o>>>8),t.push(o&255)):t.push(r)}}return t}};var t={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,i=7973,s=21522,c={},l=function(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t};return c.getBCHTypeInfo=function(e){for(var t=e<<10;l(t)-l(n)>=0;)t^=n<<l(t)-l(n);return(e<<10|t)^s},c.getBCHTypeNumber=function(e){for(var t=e<<12;l(t)-l(i)>=0;)t^=i<<l(t)-l(i);return e<<12|t},c.getPatternPosition=function(t){return e[t-1]},c.getMaskFunction=function(e){switch(e){case r.PATTERN000:return function(e,t){return(e+t)%2==0};case r.PATTERN001:return function(e,t){return e%2==0};case r.PATTERN010:return function(e,t){return t%3==0};case r.PATTERN011:return function(e,t){return(e+t)%3==0};case r.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case r.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case r.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case r.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw`bad maskPattern:`+e}},c.getErrorCorrectPolynomial=function(e){for(var t=o([1],0),n=0;n<e;n+=1)t=t.multiply(o([1,a.gexp(n)],0));return t},c.getLengthInBits=function(e,n){if(1<=n&&n<10)switch(e){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw`mode:`+e}else if(n<27)switch(e){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw`mode:`+e}else if(n<41)switch(e){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw`mode:`+e}else throw`type:`+n},c.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var a=0,o=e.isDark(r,i),s=-1;s<=1;s+=1)if(!(r+s<0||t<=r+s))for(var c=-1;c<=1;c+=1)i+c<0||t<=i+c||(s!=0||c!=0)&&o==e.isDark(r+s,i+c)&&(a+=1);a>5&&(n+=3+a-5)}for(var r=0;r<t-1;r+=1)for(var i=0;i<t-1;i+=1){var l=0;e.isDark(r,i)&&(l+=1),e.isDark(r+1,i)&&(l+=1),e.isDark(r,i+1)&&(l+=1),e.isDark(r+1,i+1)&&(l+=1),(l==0||l==4)&&(n+=3)}for(var r=0;r<t;r+=1)for(var i=0;i<t-6;i+=1)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(var i=0;i<t;i+=1)for(var r=0;r<t-6;r+=1)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);for(var u=0,i=0;i<t;i+=1)for(var r=0;r<t;r+=1)e.isDark(r,i)&&(u+=1);var d=Math.abs(100*u/t/t-50)/5;return n+=d*10,n},c}(),a=function(){for(var e=Array(256),t=Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(var n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(var n=0;n<255;n+=1)t[e[n]]=n;var r={};return r.glog=function(e){if(e<1)throw`glog(`+e+`)`;return t[e]},r.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]},r}();function o(e,t){if(e.length===void 0)throw e.length+`/`+t;var n=function(){for(var n=0;n<e.length&&e[n]==0;)n+=1;for(var r=Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),r={};return r.getAt=function(e){return n[e]},r.getLength=function(){return n.length},r.multiply=function(e){for(var t=Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var i=0;i<e.getLength();i+=1)t[n+i]^=a.gexp(a.glog(r.getAt(n))+a.glog(e.getAt(i)));return o(t,0)},r.mod=function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=a.glog(r.getAt(0))-a.glog(e.getAt(0)),n=Array(r.getLength()),i=0;i<r.getLength();i+=1)n[i]=r.getAt(i);for(var i=0;i<e.getLength();i+=1)n[i]^=a.gexp(a.glog(e.getAt(i))+t);return o(n,0).mod(e)},r}var s=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},r={},i=function(t,r){switch(r){case n.L:return e[(t-1)*4+0];case n.M:return e[(t-1)*4+1];case n.Q:return e[(t-1)*4+2];case n.H:return e[(t-1)*4+3];default:return}};return r.getRSBlocks=function(e,n){var r=i(e,n);if(r===void 0)throw`bad rs block @ typeNumber:`+e+`/errorCorrectionLevel:`+n;for(var a=r.length/3,o=[],s=0;s<a;s+=1)for(var c=r[s*3+0],l=r[s*3+1],u=r[s*3+2],d=0;d<c;d+=1)o.push(t(l,u));return o},r}(),c=function(){var e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},n.put=function(e,t){for(var r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1},n},l=function(e){var n=t.MODE_NUMBER,r=e,i={};i.getMode=function(){return n},i.getLength=function(e){return r.length},i.write=function(e){for(var t=r,n=0;n+2<t.length;)e.put(a(t.substring(n,n+3)),10),n+=3;n<t.length&&(t.length-n==1?e.put(a(t.substring(n,n+1)),4):t.length-n==2&&e.put(a(t.substring(n,n+2)),7))};var a=function(e){for(var t=0,n=0;n<e.length;n+=1)t=t*10+o(e.charAt(n));return t},o=function(e){if(`0`<=e&&e<=`9`)return e.charCodeAt(0)-48;throw`illegal char :`+e};return i},u=function(e){var n=t.MODE_ALPHA_NUM,r=e,i={};i.getMode=function(){return n},i.getLength=function(e){return r.length},i.write=function(e){for(var t=r,n=0;n+1<t.length;)e.put(a(t.charAt(n))*45+a(t.charAt(n+1)),11),n+=2;n<t.length&&e.put(a(t.charAt(n)),6)};var a=function(e){if(`0`<=e&&e<=`9`)return e.charCodeAt(0)-48;if(`A`<=e&&e<=`Z`)return e.charCodeAt(0)-65+10;switch(e){case` `:return 36;case`$`:return 37;case`%`:return 38;case`*`:return 39;case`+`:return 40;case`-`:return 41;case`.`:return 42;case`/`:return 43;case`:`:return 44;default:throw`illegal char :`+e}};return i},d=function(n){var r=t.MODE_8BIT_BYTE,i=e.stringToBytes(n),a={};return a.getMode=function(){return r},a.getLength=function(e){return i.length},a.write=function(e){for(var t=0;t<i.length;t+=1)e.put(i[t],8)},a},f=function(n){var r=t.MODE_KANJI,i=e.stringToBytesFuncs.SJIS;if(!i)throw`sjis not supported.`;(function(e,t){var n=i(e);if(n.length!=2||(n[0]<<8|n[1])!=t)throw`sjis not supported.`})(`友`,38726);var a=i(n),o={};return o.getMode=function(){return r},o.getLength=function(e){return~~(a.length/2)},o.write=function(e){for(var t=a,n=0;n+1<t.length;){var r=(255&t[n])<<8|255&t[n+1];if(33088<=r&&r<=40956)r-=33088;else if(57408<=r&&r<=60351)r-=49472;else throw`illegal char at `+(n+1)+`/`+r;r=(r>>>8&255)*192+(r&255),e.put(r,13),n+=2}if(n<t.length)throw`illegal char at `+(n+1)},o},p=function(){var e=[],t={};return t.writeByte=function(t){e.push(t&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,r){n||=0,r||=e.length;for(var i=0;i<r;i+=1)t.writeByte(e[i+n])},t.writeString=function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return e},t.toString=function(){var t=``;t+=`[`;for(var n=0;n<e.length;n+=1)n>0&&(t+=`,`),t+=e[n];return t+=`]`,t},t},m=function(){var e=0,t=0,n=0,r=``,i={},a=function(e){r+=String.fromCharCode(o(e&63))},o=function(e){if(!(e<0)){if(e<26)return 65+e;if(e<52)return 97+(e-26);if(e<62)return 48+(e-52);if(e==62)return 43;if(e==63)return 47}throw`n:`+e};return i.writeByte=function(r){for(e=e<<8|r&255,t+=8,n+=1;t>=6;)a(e>>>t-6),t-=6},i.flush=function(){if(t>0&&(a(e<<6-t),e=0,t=0),n%3!=0)for(var i=3-n%3,o=0;o<i;o+=1)r+=`=`},i.toString=function(){return r},i},h=function(e){var t=e,n=0,r=0,i=0,a={};a.read=function(){for(;i<8;){if(n>=t.length){if(i==0)return-1;throw`unexpected end of file./`+i}var e=t.charAt(n);if(n+=1,e==`=`)return i=0,-1;e.match(/^\s$/)||(r=r<<6|o(e.charCodeAt(0)),i+=6)}var a=r>>>i-8&255;return i-=8,a};var o=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(e==43)return 62;if(e==47)return 63;throw`c:`+e};return a},g=function(e,t){var n=e,r=t,i=Array(e*t),a={};a.setPixel=function(e,t,r){i[t*n+e]=r},a.write=function(e){e.writeString(`GIF87a`),e.writeShort(n),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(`,`),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(r),e.writeByte(0);var t=2,i=s(t);e.writeByte(t);for(var a=0;i.length-a>255;)e.writeByte(255),e.writeBytes(i,a,255),a+=255;e.writeByte(i.length-a),e.writeBytes(i,a,i.length-a),e.writeByte(0),e.writeString(`;`)};var o=function(e){var t=e,n=0,r=0,i={};return i.write=function(e,i){if(e>>>i)throw`length over`;for(;n+i>=8;)t.writeByte(255&(e<<n|r)),i-=8-n,e>>>=8-n,r=0,n=0;r=e<<n|r,n+=i},i.flush=function(){n>0&&t.writeByte(r)},i},s=function(e){for(var t=1<<e,n=(1<<e)+1,r=e+1,a=c(),s=0;s<t;s+=1)a.add(String.fromCharCode(s));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(n));var l=p(),u=o(l);u.write(t,r);var d=0,f=String.fromCharCode(i[d]);for(d+=1;d<i.length;){var m=String.fromCharCode(i[d]);d+=1,a.contains(f+m)?f+=m:(u.write(a.indexOf(f),r),a.size()<4095&&(a.size()==1<<r&&(r+=1),a.add(f+m)),f=m)}return u.write(a.indexOf(f),r),u.write(n,r),u.flush(),l.toByteArray()},c=function(){var e={},t=0,n={};return n.add=function(r){if(n.contains(r))throw`dup key:`+r;e[r]=t,t+=1},n.size=function(){return t},n.indexOf=function(t){return e[t]},n.contains=function(t){return e[t]!==void 0},n};return a},_=function(e,t,n){for(var r=g(e,t),i=0;i<t;i+=1)for(var a=0;a<e;a+=1)r.setPixel(a,i,n(a,i));var o=p();r.write(o);for(var s=m(),c=o.toByteArray(),l=0;l<c.length;l+=1)s.writeByte(c[l]);return s.flush(),`data:image/gif;base64,`+s};return e}();(function(){n.stringToBytesFuncs[`UTF-8`]=function(e){function t(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|r&63):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|r&63):(n++,r=65536+((r&1023)<<10|e.charCodeAt(n)&1023),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return t}return t(e)}})(),(function(n){typeof define==`function`&&define.amd?define([],n):typeof e==`object`&&(t.exports=n())})(function(){return n})}))(),1),Bg=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Vg({cfg:e,state:t,layout:n,metrics:r,price:i,image:a,site:o,structure:s}){let c=document.getElementById(`kp`);c||(c=document.createElement(`div`),c.id=`kp`,document.body.appendChild(c));let l=e.contacts||{},u=new Date().toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`}),d=l.demo?`Демо-версия: здесь будут контакты производителя`:[l.phone,l.email,l.telegram&&`Telegram `+l.telegram,l.address].filter(Boolean).map(Bg).join(` · `);c.innerHTML=`
    <header class="kp-head">
      <div><div class="kp-brand">${Bg(e.brand)}</div><div class="kp-contacts">${d}</div></div>
      <div class="kp-date">${u}</div>
    </header>
    <h1>Коммерческое предложение: ${Bg(e.title.toLowerCase())} ${n.L.toLocaleString(`ru-RU`)} × ${n.W.toLocaleString(`ru-RU`)} м</h1>
    <div class="kp-visual">
      ${a?`<img src="${a}" alt="Домик"/>`:``}
      <div class="kp-plan">${lg(e,t,n,520,360)}</div>
    </div>
    <h2>Комплектация</h2>
    <table class="kp-table">${jg(t,n,e,r).map(([e,t])=>`<tr><th>${Bg(e)}</th><td>${Bg(t)}</td></tr>`).join(``)}</table>
    <section class="kp-keep">
    <h2>Расчёт стоимости</h2>
    <table class="kp-table price">
      ${i.items.map(e=>`<tr><th>${Bg(e.label)}${e.detail?`<small>${Bg(e.detail)}</small>`:``}</th><td>${Uh(e.amount)}</td></tr>`).join(``)}
      <tr class="total"><th>Итого, предварительно</th><td>${Uh(i.total)}</td></tr>
    </table>
    </section>
    ${s?.house?Ug(s,n):``}
    ${o?.r?`<section class="kp-keep kp-site">
      <h2>Дом на участке</h2>
      <div class="kp-site-row">
        <div class="kp-site-plan">${Lg(o.r,o.check,420,440)}</div>
        <table class="kp-table">${Rg(o.r,o.check).map(([e,t])=>`<tr><th>${Bg(e)}</th><td>${Bg(t)}</td></tr>`).join(``)}
          ${o.check.issues.slice(0,6).map(e=>`<tr class="warn"><th>Замечание</th><td>${Bg(e.text)}</td></tr>`).join(``)}</table>
      </div>
      <p class="kp-note">Расстояния — ориентир по СП 53.13330.2019; уточняйте местные правила застройки.</p>
    </section>`:``}
    <div class="kp-foot">
      <div class="kp-qr">${Hg(pn(t))}</div>
      <p class="kp-note">Отсканируйте QR-код, чтобы открыть этот домик в конфигураторе и изменить его.<br/>
        Расчёт предварительный. Итоговая стоимость уточняется у производителя после выезда на участок.</p>
    </div>`;let f=c.querySelector(`img`),p=()=>setTimeout(()=>window.print(),50);f&&!f.complete?f.onload=p:p()}function Hg(e){let t=(0,zg.default)(0,`L`);return t.addData(e),t.make(),t.createSvgTag({cellSize:2,margin:2,scalable:!0})}function Ug(e,t){let n=e=>`${Math.round(e*100)}%`,r=e.members.filter(e=>e.member).map(e=>{let t=e.member;return`<tr><th>${Bg(e.name)}${e.note?`<small>${Bg(e.note)}</small>`:``}</th><td>${Qt(t)}${t.spacing&&e.id!==`girder`?` шаг ${t.spacing*1e3}`:``} мм · загрузка ${n(t.util)}</td></tr>`}).join(``);return`<section class="kp-keep kp-struct">
      <h2>Предварительный расчёт конструкции</h2>
      <div class="kp-site-row">
        <div class="kp-struct-svg">${Bh(e,t,300)}</div>
        <table class="kp-table">
          <tr><th>Условия</th><td>грунт: ${Bg(e.soil.name.toLowerCase())}; снеговой район ${e.region.roman} (${e.region.sg.toLocaleString(`ru-RU`)} кПа)</td></tr>
          <tr><th>Опоры</th><td>${Bg($t(e))}; ${Bg(en(e))}</td></tr>
          ${r}
          ${e.warnings.map(e=>`<tr class="warn"><th>Замечание</th><td>${Bg(e)}</td></tr>`).join(``)}
        </table>
      </div>
      <p class="kp-note">Оценка по ${Lh.map(e=>e.split(` «`)[0]).join(`, `)} без инженерно-геологических изысканий. Не является проектом; перед строительством грунт уточняется (геология или пробное завинчивание сваи).</p>
    </section>`}var Wg=55.75,Gg=e=>e*Math.PI/180,Kg=e=>e*180/Math.PI,qg=[{id:`summer`,name:`Июнь`,decl:23.4},{id:`equinox`,name:`Март и сентябрь`,decl:0},{id:`winter`,name:`Декабрь`,decl:-23.4}],Jg=[{id:`N`,name:`С`,full:`север`,az:0},{id:`NE`,name:`СВ`,full:`северо-восток`,az:45},{id:`E`,name:`В`,full:`восток`,az:90},{id:`SE`,name:`ЮВ`,full:`юго-восток`,az:135},{id:`S`,name:`Ю`,full:`юг`,az:180},{id:`SW`,name:`ЮЗ`,full:`юго-запад`,az:225},{id:`W`,name:`З`,full:`запад`,az:270},{id:`NW`,name:`СЗ`,full:`северо-запад`,az:315}];function Yg(e,t){let n=Gg(15*(e-12.5)),r=Gg(t),i=Gg(Wg),a=Math.asin(Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos(n)),o=Math.atan2(-Math.cos(r)*Math.sin(n),Math.sin(r)*Math.cos(i)-Math.cos(r)*Math.sin(i)*Math.cos(n));return{elevation:Kg(a),azimuth:(Kg(o)+360)%360}}function Xg(e,t){let n=Gg(e.azimuth-t),r=Gg(e.elevation);return{x:-Math.sin(n)*Math.cos(r),y:Math.sin(r),z:Math.cos(n)*Math.cos(r)}}function Zg(e){let t=-Math.tan(Gg(Wg))*Math.tan(Gg(e)),n=Kg(Math.acos(Math.max(-1,Math.min(1,t))))/15;return{rise:12.5-n,set:12.5+n}}var Qg=e=>{let t=Math.round(e*60);return`${Math.floor(t/60)%24}:${String(t%60).padStart(2,`0`)}`},$g=[`на севере`,`на северо-востоке`,`на востоке`,`на юго-востоке`,`на юге`,`на юго-западе`,`на западе`,`на северо-западе`],e_=e=>$g[Math.round(e/45)%8];function t_(e,t){let n=(e-t+540)%360-180;return Math.abs(n)<=45?`фасад с дверью`:n>45&&n<135?`левую стену`:n<-45&&n>-135?`правую стену`:`заднюю стену`}function n_({button:e,panel:t,sm:n,materials:r,app:i,facade:a}){let o={facade:`S`,season:`summer`,hours:15,open:!1,playing:!1},s=()=>a?a.get():o.facade,c=()=>(((Jg.find(e=>e.id===s())||Jg[4]).az-(a?a.rot():0))%360+360)%360,l=r.glass,u={color:l.emissive.clone(),intensity:l.emissiveIntensity};t.innerHTML=`
    <div class="sun-head"><b>Солнце и стороны света</b><button type="button" class="x" data-act="close" aria-label="Закрыть">×</button></div>
    <div class="sun-label">${a?`Улица — со стороны`:`Фасад с дверью смотрит на`}</div>
    <div class="sun-facades">${Jg.map(e=>`<button type="button" data-facade="${e.id}" title="${e.full}">${e.name}</button>`).join(``)}</div>
    <div class="sun-label">Время года</div>
    <div class="sun-seasons">${qg.map(e=>`<button type="button" data-season="${e.id}">${e.name}</button>`).join(``)}</div>
    <div class="sun-time">
      <button type="button" class="sun-play" data-act="play" aria-label="Прокрутить день"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <input type="range" min="3" max="23" step="0.25" aria-label="Время суток"/>
      <output></output>
    </div>
    <p class="sun-note"></p>`;let d=t.querySelector(`input`),f=t.querySelector(`output`),p=t.querySelector(`.sun-note`),m=t.querySelector(`.sun-play`);n.onNight=(e,t)=>{let n=1-t;l.emissive.copy(u.color).lerp({r:1,g:.72,b:.38},n),l.emissiveIntensity=u.intensity+n*1.6,i.style.setProperty(`--night`,n.toFixed(3)),i.classList.toggle(`night`,n>.02)};function h(){let e=qg.find(e=>e.id===o.season),r=c(),i=Yg(o.hours,e.decl);o.open&&(n.setSun({...i,vec:Xg(i,r)}),n.showCompass(!0,r)),d.value=o.hours,f.textContent=Qg(o.hours);let a=Zg(e.decl);p.textContent=i.elevation<=0?`Солнце за горизонтом. Восход в ${Qg(a.rise)}, закат в ${Qg(a.set)}.`:`Солнце ${e_(i.azimuth)}, высота ${Math.round(i.elevation)}°, освещает у дома ${t_(i.azimuth,r)}. Восход в ${Qg(a.rise)}, закат в ${Qg(a.set)}.`,t.querySelectorAll(`[data-facade]`).forEach(e=>e.classList.toggle(`on`,e.dataset.facade===s())),t.querySelectorAll(`[data-season]`).forEach(e=>e.classList.toggle(`on`,e.dataset.season===o.season)),m.classList.toggle(`on`,o.playing)}function g(r){o.open=r,t.hidden=!r,e.classList.toggle(`on`,r),i.classList.toggle(`sun-open`,r),e.setAttribute(`aria-pressed`,r),r||(o.playing=!1,n.setSun(null),n.showCompass(!1)),h()}let _=0;function v(e){if(!o.playing)return;let t=_?(e-_)/1e3:0;_=e,o.hours+=t*1.6,o.hours>23&&(o.hours=3),h(),requestAnimationFrame(v)}return e.addEventListener(`click`,()=>g(!o.open)),t.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(t){if(t.dataset.facade)a?a.set(t.dataset.facade):o.facade=t.dataset.facade;else if(t.dataset.season)o.season=t.dataset.season;else if(t.dataset.act===`close`)return g(!1);else t.dataset.act===`play`&&(o.playing=!o.playing,_=0,o.playing&&requestAnimationFrame(v));h()}}),d.addEventListener(`input`,()=>{o.playing=!1,o.hours=+d.value,h()}),h(),{setOpen:g,state:o,refresh:h}}var r_=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),i_=e=>`${e.toLocaleString(`ru-RU`,{maximumFractionDigits:1})} м²`,a_=e=>e.name.replace(/\s*\d+(,\d+)?×\d+(,\d+)?/g,``).trim(),o_=e=>e.toLocaleString(`ru-RU`,{maximumFractionDigits:1}),s_=e=>{let t=[];for(let n=e.min;n<=e.max+1e-6;n+=e.step)t.push(+n.toFixed(2));return t};function c_(e){return!e.plan.openings.some(e=>e.hidden)&&e.plan.rooms.every(e=>{let t=Math.min(e.x1-e.x0,e.z1-e.z0),n=Math.max(e.x1-e.x0,e.z1-e.z0);return e.type===`bedroom`?t>=2.1&&n>=2.4:e.type===`bath`?t>=1.1:t>=1.2})}function l_(e,{presets:t,catalog:n,pricing:r,defaults:i}){let a=(n.packages||[]).map(e=>e.id),o=[],s=null;for(let c of t||[]){let t={...i,...vn(c.patch,n)},l=Math.max(0,a.indexOf(t.package)),u=a.slice(0,l+1).reverse(),d=t.terrace?.type&&t.terrace.type!==`none`?[t.terrace,{...t.terrace,type:`none`}]:[t.terrace],f=null,p=(e,t,n)=>e>=t-n-1e-6&&e<=t+n+1e-6;for(let i of s_(n.limits.length))if(p(i,t.length,2)){for(let a of s_(n.limits.width))if(!(!p(a,t.width,1.5)||a>i||i/a>2.2))for(let[o,l]of d.entries())for(let[d,p]of u.entries()){let u={...t,length:i,width:a,package:p,terrace:l},m=Ze(u,n);if(!c_(m))continue;let h=$e(m),g=kh(u,r,h,n).total,_=h.floorArea+(h.atticArea||0),v={preset:c,state:u,k:m,price:g,living:_,floor:h.floorArea,downgraded:d>0,noTerrace:o>0};if((!s||g<s.price)&&(s=v),g>e)continue;let y=_-d*8-o*5-(e-g)/1e7;(!f||y>f.score)&&(f={...v,score:y})}}f&&o.push(f)}return o.sort((e,t)=>t.score-e.score),{results:o.slice(0,3),cheapest:s}}function u_(e,{presets:t,store:n,catalog:r,pricing:i,defaults:a,onPick:o}){e.innerHTML=`
    <form class="budget-form">
      <label for="budgetInput">Сколько готовы потратить?</label>
      <div class="budget-row">
        <input id="budgetInput" inputmode="numeric" autocomplete="off" placeholder="например, 900 000" />
        <span class="budget-cur">₽</span>
        <button type="submit" class="btn">Подобрать</button>
      </div>
    </form>
    <div class="budget-out" aria-live="polite"></div>`;let s=e.querySelector(`input`),c=e.querySelector(`.budget-out`),l=[];s.addEventListener(`input`,()=>{let e=s.value.replace(/\D/g,``).slice(0,9);s.value=e?(+e).toLocaleString(`ru-RU`):``}),e.querySelector(`form`).addEventListener(`submit`,e=>{e.preventDefault();let n=+s.value.replace(/\D/g,``);if(!n)return s.focus();n<1e4&&(n*=1e3),s.value=n.toLocaleString(`ru-RU`);let{results:u,cheapest:d}=l_(n,{presets:t,catalog:r,pricing:i,defaults:a});l=u,u.length?c.innerHTML=`<p class="note">Самые просторные варианты до ${Uh(n)}:</p>
        <div class="budget-cards">${u.map((e,t)=>`
          <button type="button" class="preset budget-card" data-pick="${t}">
            ${Xh(e.k,r)}
            <span class="preset-text">
              <span class="preset-name">${r_(a_(e.preset))}, ${o_(e.state.length)}×${o_(e.state.width)} м</span>
              <span class="preset-note">${i_(e.living)}${e.k.attic?` с мансардой`:``} · ${r_(r.packages.find(t=>t.id===e.state.package)?.name.toLowerCase()||``)}${e.noTerrace?` · без террасы`:``}</span>
              <span class="preset-price">${Uh(e.price)}</span>
            </span>
          </button>`).join(``)}</div>`:(c.innerHTML=`<p class="note warn">В ${Uh(n)} пока не уложиться. Самый доступный вариант — ${r_(a_(d.preset).toLowerCase())} ${o_(d.state.length)}×${o_(d.state.width)} м за ${Uh(d.price)}.</p>
        <button type="button" class="btn wide ghost" data-pick="0">Показать его</button>`,l=[d]),o?.(`search`,{budget:n,count:u.length})}),c.addEventListener(`click`,e=>{let t=e.target.closest(`[data-pick]`);if(!t)return;let r=l[+t.dataset.pick];if(!r)return;let i=r.state;n.set({length:i.length,width:i.width,package:i.package,terrace:i.terrace,plan:i.plan,roofType:i.roofType,construction:i.construction,foundation:i.foundation,wallMaterial:i.wallMaterial,wallFinish:i.wallFinish,roofMaterial:i.roofMaterial,roofFinish:i.roofFinish,plinth:i.plinth,windowFrame:i.windowFrame,doorType:i.doorType,planSel:null,planAdd:null}),o?.(`pick`,r)})}function d_(e,t,n,r,i,a,o,s=1){for(let c=0;c<r;c++){e.globalAlpha=s*(.4+n()*.6),e.fillStyle=i[n()*i.length|0];let r=a+n()*(o-a);e.beginPath(),e.arc(n()*t,n()*t,r,0,Math.PI*2),e.fill()}e.globalAlpha=1}function f_(e=512,{base:t=`#7d9a55`,seed:n=5,dry:r=0}={}){let[i,a]=wm(e,e),o=Cm(n);a.fillStyle=t,a.fillRect(0,0,e,e),d_(a,e,o,90,[`#6f8d4a`,`#89a65e`,`#76934f`,r?`#a3a26a`:`#82a058`],e*.04,e*.12,.35),a.lineWidth=1.2;for(let t=0;t<5200;t++){let t=o()*e,n=o()*e,r=3+o()*6,i=-Math.PI/2+(o()-.5)*.9,s=o();a.strokeStyle=s<.5?`rgba(52,78,32,.45)`:s<.85?`rgba(150,180,95,.45)`:`rgba(190,190,120,.35)`,a.beginPath(),a.moveTo(t,n),a.lineTo(t+Math.cos(i)*r,n+Math.sin(i)*r),a.stroke()}return Tm(i)}function p_(e=256,t=9){let[n,r]=wm(e,e),i=Cm(t);return r.fillStyle=`#a7a196`,r.fillRect(0,0,e,e),d_(r,e,i,1400,[`#8d877c`,`#bdb7ab`,`#77716a`,`#c9c3b6`,`#9a9184`],1,3.2,.9),Tm(n)}function m_(e=256,t=3){let[n,r]=wm(e,e),i=Cm(t);r.fillStyle=`#8a857d`,r.fillRect(0,0,e,e);let a=e/4;for(let e=0;e<4;e++)for(let t=0;t<4;t++){let n=178+(i()*22|0);r.fillStyle=`rgb(${n},${n-6},${n-14})`,r.fillRect(e*a+2,t*a+2,a-4,a-4)}return d_(r,e,i,300,[`rgba(0,0,0,.25)`,`rgba(255,255,255,.3)`],.6,1.6,.5),Tm(n)}function h_(e=256,t=11){let[n,r]=wm(e,e),i=Cm(t);return r.fillStyle=`#5a4433`,r.fillRect(0,0,e,e),d_(r,e,i,900,[`#4a372a`,`#6b5240`,`#3e2e23`,`#735a45`],1,4,.8),Tm(n)}function g_(e=128){let[t,n]=wm(e,e);n.clearRect(0,0,e,e),n.strokeStyle=`#d8dcdf`,n.lineWidth=3;let r=e/5;for(let t=-5;t<=10;t++)n.beginPath(),n.moveTo(t*r,0),n.lineTo(t*r+e,e),n.stroke(),n.beginPath(),n.moveTo(t*r,0),n.lineTo(t*r-e,e),n.stroke();return Tm(t)}function __(e=64,t=8){let[n,r]=wm(e,t),i=r.createLinearGradient(0,0,e,0);return[[0,`#c9c9c9`],[.12,`#ffffff`],[.3,`#e6e6e6`],[.42,`#a9a9a9`],[.5,`#bdbdbd`],[.62,`#ffffff`],[.8,`#e2e2e2`],[.92,`#a5a5a5`],[1,`#c9c9c9`]].forEach(([e,t])=>i.addColorStop(e,t)),r.fillStyle=i,r.fillRect(0,0,e,t),Tm(n)}function v_(e=256){let[t,n]=wm(e,4),r=n.createLinearGradient(0,0,e,0);return r.addColorStop(0,`#000`),r.addColorStop(.3,`#fff`),r.addColorStop(.7,`#fff`),r.addColorStop(1,`#000`),n.fillStyle=r,n.fillRect(0,0,e,4),Tm(t,{color:!1,repeat:!1})}function y_(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Fo,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=b_(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=b_(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function b_(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new bo(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function x_(e){e.updateMatrixWorld(!0);let t=new ia().copy(e.matrixWorld).invert(),n=new Map,r=[];e.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i===e||Array.isArray(i.material))return;let a=`${i.material.uuid}|${i.castShadow}|${i.renderOrder}`;n.has(a)||n.set(a,{mat:i.material,cast:i.castShadow,order:i.renderOrder,list:[]});let o=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let e of Object.keys(o.attributes))[`position`,`normal`,`uv`].includes(e)||o.deleteAttribute(e);o.attributes.uv||o.setAttribute(`uv`,new Co(new Float32Array(o.attributes.position.count*2),2)),o.attributes.normal||o.computeVertexNormals(),o.applyMatrix4(new ia().multiplyMatrices(t,i.matrixWorld)),n.get(a).list.push(o),r.push(i)});for(let e of r)e.geometry.dispose(),e.parent.remove(e);for(let t of n.values()){let n=t.list.length===1?t.list[0]:y_(t.list,!1);if(t.list.length>1&&t.list.forEach(e=>e.dispose()),!n)continue;let r=new J(n,t.mat);r.castShadow=t.cast,r.receiveShadow=!0,r.renderOrder=t.order,e.add(r)}for(let t of[...e.children])t.isGroup&&!t.children.length&&e.remove(t);return e}var S_=e=>e*Math.PI/180;function C_(e,t,{w:n,d:r,y:i,pitch:a=30,over:o=.3,mat:s,gableMat:c}){let l=S_(a),u=r/2+o,d=u/Math.cos(l),f=i+r/2*Math.tan(l),p=i-o*Math.tan(l);for(let t of[1,-1]){let r=Z(n+2*o,.06,d+.04,s);r.rotation.x=t*l,r.position.set(0,(f+p)/2+.03,t*u/2),e.add(r)}let m=new sc([new W(-r/2,0),new W(r/2,0),new W(0,r/2*Math.tan(l))]);for(let t of[1,-1]){let r=new J(new Xc(m),c);r.rotation.y=Math.PI/2,r.position.set(t*n/2,i,0),r.castShadow=!0,e.add(r)}return f}function w_(e,{w:t,d:n,y:r,angle:i=10,over:a=.2,mat:o}){let s=S_(i),c=Z(t+2*a,.05,(n+2*a)/Math.cos(s),o);c.rotation.x=-s,c.position.set(0,r+.06,0),e.add(c)}function T_(e,t,{x:n=0,w:r=.8,h:i=1.85,z:a,mat:o=t.darkWood}){e.add(Q(Z(r+.1,i+.06,.04,t.trimWood),n,i/2+.03,a+.005)),e.add(Q(Z(r,i,.05,o),n,i/2,a+.02)),e.add(Q(Z(.04,.12,.05,t.metal,{shadow:!1}),n+r/2-.12,i*.52,a+.06))}function E_(e,t,{x:n,y:r,w:i=.6,h:a=.5,z:o,side:s=`z`}){let c=s===`z`?Z(i+.1,a+.1,.05,t.trimWood):Z(.05,a+.1,i+.1,t.trimWood),l=s===`z`?Z(i,a,.05,t.glass,{shadow:!1}):Z(.05,a,i,t.glass,{shadow:!1});s===`z`?(e.add(Q(c,n,r,o+.01)),e.add(Q(l,n,r,o+.025))):(e.add(Q(c,o+.01,r,n)),e.add(Q(l,o+.025,r,n)))}function D_(e,{w:t,d:n,h:r,wall:i,roof:a,roofType:o=`gable`,pitch:s=30,doorX:c=0,doorW:l=.8,win:u,plinth:d=.15}){let f=new Ma;f.add(Q(Z(t+.06,d,n+.06,e.concrete),0,d/2,0));let p=new Ma;return p.position.y=d,p.add(Q(Z(t,r,n,i,{uv:!0}),0,r/2,0)),o===`gable`?C_(p,e,{w:t,d:n,y:r,pitch:s,mat:a,gableMat:i}):w_(p,{w:t,d:n,y:r,mat:a}),T_(p,e,{x:c,w:l,h:Math.min(1.9,r-.25),z:n/2}),u&&E_(p,e,{x:u.x,y:u.y??r*.62,w:u.w??.6,h:u.h??.5,z:n/2}),f.add(p),f}function O_(e,t){let n=new Ma,r=e.carPaint(t);n.add(Q(Z(1.78,.62,4.3,r),0,.62,0));let i=Z(1.6,.52,2.1,r);n.add(Q(i,0,1.18,-.25)),n.add(Q(Z(1.62,.42,2,e.carGlass,{shadow:!1}),0,1.18,-.25)),n.add(Q(Z(1.5,.08,.1,e.metal,{shadow:!1}),0,.5,2.16));for(let[t,r]of[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]]){let i=new J(new Os(.33,.33,.24,18),e.tyre);i.rotation.z=Math.PI/2,i.position.set(t,.33,r),i.castShadow=!0,n.add(i)}for(let t of[-.6,.6])n.add(Q(Z(.3,.12,.04,e.lamp,{shadow:!1}),t,.78,2.16));return n}function k_(e,t,n,r=1){let i=new Ma;return[[0,0,0,1],[.45,-.15,.2,.72],[-.4,-.1,-.25,.75],[.1,.35,-.35,.65],[-.2,.25,.4,.6]].forEach(([e,a,o,s],c)=>{let l=new J(new Jc(n*s,1),t);l.position.set(e*n,a*n,o*n),l.rotation.set(r+c,r*2+c,0),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}),i}function A_(e,t,n,r=!1){let i=new gs(e,t,n.length),a=new ia;return n.forEach(([e,t,n,r=1],o)=>{a.makeScale(r,r,r).setPosition(e,t,n),i.setMatrixAt(o,a)}),i.castShadow=r,i.receiveShadow=!0,i}function j_(e){let t=7;for(let n of String(e))t=t*31+n.charCodeAt(0)|0;return Math.abs(t)}var M_={banya(e){let t=D_(e,{w:4,d:3,h:2.25,wall:e.log,roof:e.roofRed,doorX:-1.15,doorW:.75,win:{x:.9,y:1.45,w:.5,h:.4},plinth:.3}),n=new J(new Os(.09,.09,1.3,12),e.steel);return n.position.set(1.1,3.25,-.45),n.castShadow=!0,t.add(n),t.add(Q(Z(1.4,.15,.7,e.deck),-1.15,.15,1.85)),t},shed(e){return D_(e,{w:3,d:2,h:2.2,wall:e.boards,roof:e.roofGrey,roofType:`shed`,doorX:.7,doorW:.85,win:{x:-.7,y:1.4}})},toilet(e){let t=D_(e,{w:1.2,d:1.4,h:2.05,wall:e.boards,roof:e.roofGreen,roofType:`shed`,doorX:0,doorW:.7,plinth:.12});return t.add(Q(Z(.16,.16,.06,e.glass,{shadow:!1}),0,1.75,.74)),t},shower(e){let t=D_(e,{w:1.2,d:1.2,h:2.05,wall:e.boards,roof:e.roofGrey,roofType:`shed`,doorX:0,doorW:.7,plinth:.12});return t.add(Q(Z(1,.36,1,e.tank),0,2.55,0)),t},greenhouse(e){let t=new Ma,n=1.5,r=2.1/n,i=new J(new Os(n,n,6,20,1,!0,-Math.PI/2,Math.PI),e.poly);i.rotation.x=-Math.PI/2,i.scale.set(1,1,r),i.renderOrder=3,t.add(i);let a=new Ds(n,20,0,Math.PI);for(let n of[1,-1]){let i=new J(a,e.poly);i.scale.set(1,r,1),i.position.z=n*6/2,i.renderOrder=3,t.add(i)}let o=new $c(n,.03,4,20,Math.PI);for(let n=0;n<=6;n++){let i=new J(o,e.white);i.scale.set(1,r,1),i.position.z=-3+n,i.castShadow=!0,t.add(i)}t.add(Q(Z(.04,.04,6,e.white),0,2.1,0)),t.add(Q(Z(.8,1.75,.03,e.white,{shadow:!1}),0,.88,3.02));for(let n of[-.85,.85]){t.add(Q(Z(.8,.22,5.6,e.boards),n,.11,0)),t.add(Q(Z(.72,.04,5.5,e.soil,{shadow:!1}),n,.23,0));let r=[];for(let e=-2.4;e<2.6;e+=.5)r.push([n,.55,e,.9+e*7%3*.1]);t.add(A_(new Jc(.28,0),e.leaf,r))}return t},gazebo(e){let t=new Ma;t.add(Q(Z(3,.18,3,e.deck,{uv:!0}),0,.09,0));for(let[n,r]of[[-1.35,-1.35],[1.35,-1.35],[1.35,1.35],[-1.35,1.35]])t.add(Q(Z(.12,2.25,.12,e.beam),n,1.3,r));for(let[n,r,i,a]of[[0,-1.35,2.7,.06],[-1.35,0,.06,2.7],[1.35,0,.06,2.7]])t.add(Q(Z(i,.06,a,e.beam),n,.95,r)),t.add(Q(Z(i,.5,a,e.boards,{uv:!0}),n,.5,r));let n=new J(new ks(2.45,1.3,4,1),e.roofShingle);n.rotation.y=Math.PI/4,n.position.y=3.07,n.castShadow=!0,t.add(n),t.add(Q(Z(2.9,.1,2.9,e.beam),0,2.38,0));let r=new J(new Os(.55,.55,.05,20),e.beam);return r.position.y=.95,r.castShadow=!0,t.add(r),t.add(Q(Z(.1,.75,.1,e.beam),0,.55,0)),t},carport(e,t){let n=new Ma;n.add(Q(Z(3.5,.05,6,e.gravel,{uv:!0,shadow:!1}),0,.025,0));for(let t of[-1.6,1.6])for(let r of[-2.8,0,2.8])n.add(Q(Z(.1,2.4,.1,e.steel),t,1.2,r));for(let t of[-1.6,1.6])n.add(Q(Z(.08,.14,6,e.steel),t,2.42,0));w_(n,{w:3.5,d:6,y:2.42,angle:4,over:.25,mat:e.roofGrey});let r=O_(e,j_(t.id));return r.position.z=.2,n.add(r),n},parking(e,t){let n=new Ma;n.add(Q(Z(3,.06,5.5,e.gravel,{uv:!0,shadow:!1}),0,.03,0));let r=O_(e,j_(t.id)+3);return n.add(r),n},firepit(e){let t=new Ma;t.add(Q(Z(3,.05,3,e.paving,{uv:!0,shadow:!1}),0,.025,0)),t.add(Q(Z(.9,.22,.35,e.steel),0,.72,-.6));for(let[n,r]of[[-.4,-.75],[.4,-.75],[-.4,-.45],[.4,-.45]])t.add(Q(Z(.04,.62,.04,e.steel),n,.31,r));for(let[n,r,i,a]of[[0,.9,1.8,.4],[-1.05,.05,.4,1.6]])t.add(Q(Z(i,.06,a,e.beam),n,.45,r)),t.add(Q(Z(Math.min(i,.3),.42,Math.min(a,.3),e.beam),n,.21,r));return t},well(e){let t=new Ma,n=new J(new Os(.55,.58,.8,24),e.concrete);n.position.y=.4,n.castShadow=!0,t.add(n);let r=new J(new Ds(.47,24),e.water);r.rotation.x=-Math.PI/2,r.position.y=.72,t.add(r);for(let n of[-.62,.62])t.add(Q(Z(.08,1.55,.08,e.beam),n,1.15,0));let i=new J(new Os(.12,.12,1.15,12),e.beam);return i.rotation.z=Math.PI/2,i.position.y=1.35,t.add(i),C_(t,e,{w:1.4,d:1.1,y:1.9,pitch:35,over:.1,mat:e.roofGreen,gableMat:e.boards}),t},compost(e){let t=new Ma;for(let[n,r,i,a]of[[0,-.48,1.5,.04],[0,.48,1.5,.04],[-.73,0,.04,1],[.73,0,.04,1],[0,0,.04,1]])t.add(Q(Z(i,.75,a,e.boards,{uv:!0}),n,.38,r));return t.add(Q(Z(1.42,.05,.9,e.soil,{shadow:!1}),0,.55,0)),t},bed(e,t){let n=new Ma;n.add(Q(Z(1.2,.24,4,e.boards,{uv:!0}),0,.12,0)),n.add(Q(Z(1.08,.04,3.88,e.soil,{shadow:!1}),0,.245,0));let r=[],i=j_(t.id)%3;for(let e of[-.28,.28])for(let t=-1.7;t<=1.71;t+=.34)r.push([e,.36,t,.75+(Math.abs(t*13+e*7)|0)%4*.08]);let a=i===0?new Jc(.17,0):i===1?new ks(.12,.42,5):new Qc(.15,7,5);return n.add(A_(a,i===1?e.leafLight:e.leaf,r)),n},flowers(e,t){let n=new Ma,r=new J(new $c(.95,.08,6,28),e.stone);r.rotation.x=-Math.PI/2,r.position.y=.06,n.add(r);let i=new J(new Ds(.92,28),e.soil);i.rotation.x=-Math.PI/2,i.position.y=.08,n.add(i);let a={a:[],b:[],c:[],leaf:[]},o=[`a`,`b`,`c`],s=j_(t.id);for(let e=0;e<46;e++){s=s*1103515245+12345&2147483647;let t=s%1e3/1e3*Math.PI*2,n=Math.sqrt((s>>10)%1e3/1e3)*.82,r=Math.cos(t)*n,i=Math.sin(t)*n;a.leaf.push([r,.14,i,1]),a[o[e%3]].push([r,.3+e%4*.03,i,1])}return n.add(A_(new Jc(.11,0),e.leaf,a.leaf)),o.forEach((t,r)=>n.add(A_(new Jc(.07,0),e.flower[r],a[t]))),n},apple(e,t){let n=new Ma,r=new J(new Os(.1,.14,1.7,8),e.bark);r.position.y=.85,r.castShadow=!0,n.add(r);let i=k_(e,e.leaf,1.25,j_(t.id)%7);i.position.y=2.6,n.add(i);let a=[],o=j_(t.id);for(let e=0;e<16;e++){o=o*1103515245+12345&2147483647;let e=o%628/100,t=2+(o>>9)%100/100*1.2;a.push([Math.cos(e)*1.18,t,Math.sin(e)*1.18,1])}return n.add(A_(new Qc(.07,6,4),e.apple,a)),n},spruce(e){let t=new Ma,n=new J(new Os(.12,.2,1.4,8),e.bark);return n.position.y=.7,t.add(n),[[2.1,2.4,1.9],[1.7,2.2,3.3],[1.25,2,4.6],[.75,1.8,5.8]].forEach(([n,r,i])=>{let a=new J(new ks(n,r,9),e.needle);a.position.y=i,a.castShadow=!0,a.receiveShadow=!0,t.add(a)}),t},shrub(e,t){let n=k_(e,e.leafDark,.55,j_(t.id)%5);n.position.y=.5;let r=new Ma;return r.add(n),r}};function N_(e,t){let n=x_((M_[t.type]||M_.shed)(e,t));return n.userData.pick={kind:`item`,id:t.id},n}var P_=e=>e*Math.PI/180,F_=[`#8c2f2a`,`#2f4f6f`,`#e9e7e2`,`#3f5d4a`,`#7a2e4a`,`#c9a227`];function I_(e){let t=e=>new ul(e),n=(t,n,r=n)=>(t.repeat.set(n,r),t.anisotropy=e,t),r=km({size:512,count:9,profile:`log`,seed:13,knots:.6}),i=km({size:512,count:8,profile:`flat`,seed:23,vertical:!0,battens:!0,joints:0}),a=km({size:512,count:10,profile:`flat`,seed:41,knots:.3});n(r.map,1/1.8),n(i.map,1/1.6),n(a.map,1/1.4);let o=Pm(256);n(o.map,1);let s=new Map;return{log:t({map:r.map,bumpMap:r.bump,bumpScale:1.2,color:`#c08a55`,roughness:.85,side:2}),boards:t({map:i.map,color:`#9c8466`,roughness:.88,side:2}),deck:t({map:a.map,color:`#b48555`,roughness:.82}),beam:t({map:r.map,color:`#a87a4c`,roughness:.82}),trimWood:t({color:`#efe9de`,roughness:.6}),darkWood:t({map:i.map,color:`#6b4a32`,roughness:.75}),roofRed:t({color:`#7b3229`,metalness:.3,roughness:.5}),roofGreen:t({color:`#3e5b46`,metalness:.3,roughness:.5}),roofGrey:t({color:`#7f8589`,metalness:.4,roughness:.45}),roofShingle:t({map:o.map,color:`#8a5340`,roughness:.9,flatShading:!0}),concrete:t({color:`#a6a39c`,roughness:.95}),stone:t({color:`#9b958b`,roughness:.95}),steel:t({color:`#3d4247`,metalness:.7,roughness:.4}),metal:t({color:`#2a2a2a`,metalness:.8,roughness:.3}),tank:t({color:`#1e1f20`,metalness:.3,roughness:.5}),white:t({color:`#f2f1ec`,roughness:.5}),glass:t({color:`#25313a`,metalness:.5,roughness:.1}),carGlass:t({color:`#1a232b`,metalness:.6,roughness:.08}),tyre:t({color:`#1b1b1b`,roughness:.85}),lamp:t({color:`#fff7e0`,emissive:`#fff2cc`,emissiveIntensity:.4}),poly:t({color:`#eef6f4`,transparent:!0,opacity:.32,roughness:.15,metalness:0,side:2,depthWrite:!1}),soil:t({map:n(h_(),1),roughness:1}),gravel:t({map:n(p_(),1/1.5),roughness:1}),paving:t({map:n(m_(),1/1.2),roughness:.9}),water:t({color:`#1f3440`,metalness:.3,roughness:.15}),leaf:t({color:`#5d8a3e`,roughness:.9,flatShading:!0}),leafLight:t({color:`#7fae4c`,roughness:.9,flatShading:!0}),leafDark:t({color:`#3f6b35`,roughness:.9,flatShading:!0}),needle:t({color:`#2f553a`,roughness:.95,flatShading:!0}),bark:t({color:`#5d4636`,roughness:1}),apple:t({color:`#c0392b`,roughness:.5}),flower:[`#e0566b`,`#f2c94c`,`#9b6fd0`].map(e=>t({color:e,roughness:.7})),carPaint(e){let n=F_[e%F_.length];return s.has(n)||s.set(n,t({color:n,metalness:.55,roughness:.3})),s.get(n)},post:t({color:`#4a4f54`,metalness:.5,roughness:.5}),mesh:t({map:n(g_(),1),color:`#e4e8ea`,metalness:.2,roughness:.6,transparent:!0,depthWrite:!1,side:2}),picket:t({map:i.map,color:`#b89c74`,roughness:.85}),profnastil:t({map:n(__(),1),color:`#4f6f58`,metalness:.35,roughness:.5,side:2}),gate:t({color:`#3f4448`,metalness:.5,roughness:.5})}}var L_=class{constructor(e=4){this.M=I_(e),this.root=new Ma,this.root.name=`site`,this.root.matrixAutoUpdate=!1,this.parts={};for(let e of[`ground`,`fence`,`path`,`items`,`overlay`])this.parts[e]=new Ma,this.root.add(this.parts[e]);this.cache=new Map,this.keys={},this.labels=[],this.place=new ia,this.grass=f_(512),this.grass.anisotropy=e,this.outerGrass=f_(256,{base:`#8aa363`,seed:8,dry:1}),this.alpha=Vm(),this.fade=v_(),this.overlayMat={zone:new qo({color:`#d9534f`,transparent:!0,opacity:.16,depthWrite:!1}),zoneEdge:new qo({color:`#c0392b`,transparent:!0,opacity:.8,depthWrite:!1}),bad:new qo({color:`#d63c2f`,depthWrite:!1}),sel:new qo({color:`#ffffff`,depthWrite:!1}),line:new qo({color:`#ffffff`,transparent:!0,opacity:.55,depthWrite:!1})}}_placeMatrix(e){this.place.makeRotationY(P_(e.rot)).setPosition(e.x,0,e.z),this.root.matrix.copy(this.place).invert(),this.root.matrixWorldNeedsUpdate=!0}toPlot(e){return e.clone().applyMatrix4(this.place)}toScene(e,t,n){return new G(e,t,n).applyMatrix4(this.root.matrix)}update(e,{sel:t=null,issues:n=[],dragging:r=null}={}){this._placeMatrix(e.house);let i=e=>JSON.stringify(e),a=i([e.W,e.D]);this.keys.ground!==a&&(this.keys.ground=a,this._ground(e));let o=i([e.W,e.D,e.fence,e.gate]);this.keys.fence!==o&&(this.keys.fence=o,this._fence(e));let s=we(e),c=i(s);this.keys.path!==c&&(this.keys.path=c,this._path(s)),this._items(e),this._overlay(e,t,n,r)}_clear(e){for(let t of[...e.children])eh(t),e.remove(t)}_ground(e){let t=this.parts.ground;this._clear(t);let{W:n,D:r}=e,i=Math.max(n,r)*3+80,a=this.grass;a.repeat.set(n/5,r/5);let o=new J(new Yc(n,r),new ul({map:a,roughness:1,color:`#e8efdc`}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o.userData.ground=!0,t.add(o),this.outerGrass.repeat.set(i/6,i/6);let s=new J(new Yc(i,i),new ul({map:this.outerGrass,alphaMap:this.alpha,transparent:!0,depthWrite:!1,roughness:1,color:`#dfe6cf`}));s.rotation.x=-Math.PI/2,s.position.y=-.02,s.receiveShadow=!0,s.renderOrder=-2,s.userData.ground=!0,t.add(s);let c=5.5,l=i*.7,u=new J(new Yc(l,c),new ul({map:this.M.gravel.map.clone(),alphaMap:this.fade,transparent:!0,depthWrite:!1,roughness:1,color:`#d7d3cb`}));u.material.map.repeat.set(l/1.5,c/1.5),u.material.map.needsUpdate=!0,u.rotation.x=-Math.PI/2,u.position.set(0,-.01,r/2+1.6+c/2),u.receiveShadow=!0,u.renderOrder=-1,u.userData.ground=!0,t.add(u);let d=.05;for(let[e,i,a,o]of[[0,-r/2,n,d],[0,r/2,n,d],[-n/2,0,d,r],[n/2,0,d,r]]){let n=new J(new Yc(a,o),this.overlayMat.line);n.rotation.x=-Math.PI/2,n.position.set(e,.008,i),t.add(n)}}_fence(e){let t=this.parts.fence;if(this._clear(t),e.fence===`none`)return;let{W:n,D:r}=e,i=P(e),a={mesh:1.5,picket:1.4,profnastil:1.8}[e.fence],o=[[-n/2,n/2,-r/2,`x`],[-r/2,r/2,-n/2,`z`],[-r/2,r/2,n/2,`z`],[-n/2,i.x0,r/2,`x`],[i.x1,n/2,r/2,`x`]];for(let[n,r,i,s]of o)r-n>.1&&this._fenceRun(t,n,r,i,s,e.fence,a);let s=this.M,c=e.fence===`mesh`?s.mesh:e.fence===`picket`?s.picket:s.profnastil;for(let e of[i.x0,i.x1-1,i.x1])t.add(Q(Z(.1,a+.15,.1,s.gate),e,(a+.15)/2,r/2));let l=(n,i)=>{let o=i-n-.06,l=(n+i)/2;if(t.add(Q(Z(o,.05,.05,s.gate),l,a-.05,r/2)),t.add(Q(Z(o,.05,.05,s.gate),l,.12,r/2)),e.fence===`picket`)this._pickets(t,n+.05,i-.05,r/2,`x`,a-.1);else{let n=new J(new Yc(o,a-.15),c===s.mesh?this._meshMat(o,a):c);n.position.set(l,(a-.15)/2+.1,r/2),n.castShadow=e.fence===`profnastil`,t.add(n)}};l(i.x0,i.x0+(S-1)/2),l(i.x0+(S-1)/2,i.x1-1),l(i.x1-1,i.x1),x_(t)}_meshMat(e,t){let n=this.M.mesh.clone();return n.map=this.M.mesh.map.clone(),n.map.repeat.set(e/.5,t/.5),n.map.needsUpdate=!0,n}_pickets(e,t,n,r,i,a){let o=Math.max(1,Math.floor((n-t)/.2)),s=new gs(new Es(.09,a-.1,.02),this.M.picket,o),c=new ia;for(let e=0;e<o;e++){let l=t+(e+.5)*(n-t)/o;c.makeTranslation(i===`x`?l:r+.04,(a-.1)/2+.08,i===`x`?r+.04:l),i===`z`&&c.multiply(new ia().makeRotationY(Math.PI/2)),s.setMatrixAt(e,c)}s.castShadow=!0,e.add(s)}_fenceRun(e,t,n,r,i,a,o){let s=this.M,c=n-t,l=(t+n)/2,u=Math.max(1,Math.ceil(c/2.5)),d=(e,t)=>i===`x`?[e,t,r]:[r,t,e];for(let n=0;n<=u;n++)e.add(Q(Z(.06,o+.1,.06,s.post),...d(t+c*n/u,(o+.1)/2)));let f=t=>e.add(Q(i===`x`?Z(c,.04,.04,a===`picket`?s.beam:s.post,{shadow:!1}):Z(.04,.04,c,a===`picket`?s.beam:s.post,{shadow:!1}),...d(l,t)));if(a===`picket`){f(.35),f(o-.3),this._pickets(e,t,n,r,i,o);return}let p=a===`mesh`?this._meshMat(c,o):s.profnastil;a===`profnastil`&&p.map.repeat.set(1,1);let m=new Yc(c,a===`mesh`?o-.1:o);if(a===`profnastil`){let e=m.attributes.uv;for(let t=0;t<e.count;t++)e.setXY(t,e.getX(t)*c/.5,e.getY(t))}let h=new J(m,p);h.position.set(...d(l,a===`mesh`?o/2:o/2+.05)),i===`z`&&(h.rotation.y=Math.PI/2),h.castShadow=a===`profnastil`,h.receiveShadow=!0,e.add(h),a===`mesh`&&f(o)}_path(e){let t=this.parts.path;if(this._clear(t),!e)return;let n=this.M;for(let r=1;r<e.length;r++){let[i,a]=e[r-1],[o,s]=e[r],c=Math.hypot(o-i,s-a)+1,l=Math.abs(o-i)>Math.abs(s-a),u=Z(l?c:1,.03,l?1:c,n.paving,{uv:!0,shadow:!1});u.position.set((i+o)/2,.015+r*.001,(a+s)/2),t.add(u)}x_(t)}_items(e){let t=this.parts.items,n=new Set;for(let r of e.items){let e=`${r.type}|${r.id}`;n.add(e);let i=this.cache.get(e);i||(i=N_(this.M,r),this.cache.set(e,i),t.add(i)),i.position.set(r.x,0,r.z),i.rotation.y=P_(r.rot)}for(let[e,r]of this.cache)n.has(e)||(eh(r),t.remove(r),this.cache.delete(e))}_strip(e,t,n,r,i,a=.04){let o=Math.hypot(n[0]-t[0],n[1]-t[1]);if(o<.01)return;let s=new J(new Yc(o,r),i);s.rotation.x=-Math.PI/2,s.rotation.z=-Math.atan2(n[1]-t[1],n[0]-t[0]),s.position.set((t[0]+n[0])/2,a,(t[1]+n[1])/2),s.renderOrder=4,e.add(s)}_outline(e,t,n,r=.15,i=.09){let a=t.x0-r,o=t.x1+r,s=t.z0-r,c=t.z1+r;this._strip(e,[a,s],[o,s],i,n),this._strip(e,[o,s],[o,c],i,n),this._strip(e,[o,c],[a,c],i,n),this._strip(e,[a,c],[a,s],i,n)}_overlay(e,t,n,r){let i=this.parts.overlay;this._clear(i),this.labels=[];let a=this.overlayMat,o=[e.house,...e.items],s=o.find(e=>e.id===(r||t)),c=e=>e.t?.kind===`tree`?{x0:e.x-e.t.crown/2,x1:e.x+e.t.crown/2,z0:e.z-e.t.crown/2,z1:e.z+e.t.crown/2}:e.rect;if(s){this._outline(i,c(s),a.sel,.2,.1);let t=oe(s,e.front);if(t.side||t.street){let{W:n,D:r}=e,o=new sc;o.moveTo(-n/2,-r/2),o.lineTo(n/2,-r/2),o.lineTo(n/2,r/2),o.lineTo(-n/2,r/2),o.closePath();let s=-n/2+t.side,c=n/2-t.side,l=-r/2+t.side,u=r/2-t.street;if(c>s&&u>l){let e=new oc;e.moveTo(s,l),e.lineTo(s,u),e.lineTo(c,u),e.lineTo(c,l),e.closePath(),o.holes.push(e);let t=new J(new Xc(o),a.zone);t.rotation.x=Math.PI/2,t.position.y=.03,t.renderOrder=3,i.add(t),this._outline(i,{x0:s,x1:c,z0:l,z1:u},a.zoneEdge,0,.05)}}}for(let e of n){if(e.kind===`overlap`){for(let t of e.ids){let e=o.find(e=>e.id===t);e&&this._outline(i,c(e),a.bad,.1,.08)}continue}if(!e.line)continue;let[t,n]=e.line;this._strip(i,t,n,.12,a.bad,.05);let r=e=>(Math.round(e*10)/10).toLocaleString(`ru-RU`);this.labels.push({x:(t[0]+n[0])/2,z:(t[1]+n[1])/2,text:`${r(e.have)} м, нужно ${r(e.need)}`})}}pickables(){return this.parts.items.children}setVisible(e){this.root.visible=e}},R_=class{constructor({sm:e,site:t,house:n,enabled:r,canDrag:i=()=>!0,onPick:a,onDrag:o,onDragEnd:s}){this.sm=e,this.site=t,this.house=n,this.enabled=r,this.canDrag=i,this.onPick=a,this.onDrag=o,this.onDragEnd=s,this.ray=new gu,this.ground=new zo(new G(0,1,0),0),this.seq=0,this.pointers=new Set;let c=e.renderer.domElement;this.dom=c,e.container.addEventListener(`pointerdown`,e=>this._down(e),!0),window.addEventListener(`pointermove`,e=>this._move(e)),window.addEventListener(`pointerup`,e=>this._up(e)),window.addEventListener(`pointercancel`,e=>this._up(e,!0)),c.addEventListener(`pointermove`,e=>this._hover(e))}_ndc(e){let t=this.dom.getBoundingClientRect();return new W((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}_hit(e){this.ray.setFromCamera(this._ndc(e),this.sm.camera);let t=[this.house.group,...this.site.pickables()],n=this.ray.intersectObjects(t,!0);for(let e of n){let t=e.object;for(;t;){if(t===this.house.group)return{kind:`house`,id:`house`};if(t.userData.pick)return t.userData.pick;t=t.parent}}return null}_plot(e){this.ray.setFromCamera(this._ndc(e),this.sm.camera);let t=this.ray.ray.intersectPlane(this.ground,new G);return t?this.site.toPlot(t):null}_down(e){if(this.pointers.add(e.pointerId),this.pointers.size>1){this._cancel();return}if(e.button!==0||!this.enabled()||e.target!==this.dom)return;let t=this._hit(e);if(this.down={x:e.clientX,y:e.clientY,pick:t,id:e.pointerId,moved:!1},!t||!this.canDrag())return;this.sm.cameraCtl.controls.enabled=!1;let n=this._plot(e),r=this.positionOf?.(t);n&&r&&(this.down.offset={x:r.x-n.x,z:r.z-n.z}),this.down.token=`site-${++this.seq}`}_move(e){let t=this.down;if(!t||e.pointerId!==t.id||!t.pick||!t.moved&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<6||!t.offset)return;t.moved=!0;let n=this._plot(e);n&&(this.dom.style.cursor=`grabbing`,this.onDrag(t.pick,Math.round((n.x+t.offset.x)*10)/10,Math.round((n.z+t.offset.z)*10)/10,t.token))}_up(e,t=!1){this.pointers.delete(e.pointerId);let n=this.down;n&&e.pointerId===n.id&&(this.down=null,this.sm.walk.active||(this.sm.cameraCtl.controls.enabled=!0),this.dom.style.cursor=``,t||(n.pick&&n.moved?this.onDragEnd?.(n.pick):!n.moved&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<6&&this.onPick(n.pick)))}_cancel(){this.down&&(this.down=null,this.sm.walk.active||(this.sm.cameraCtl.controls.enabled=!0))}_hover(e){!this.down&&e.pointerType===`mouse`&&this.enabled()&&(this.hoverRaf||=requestAnimationFrame(()=>{this.hoverRaf=0,this.dom.style.cursor=this._hit(e)?`pointer`:``}))}},z_=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),B_=e=>`${(Math.round(e*10)/10).toLocaleString(`ru-RU`)} м`,V_={banya:`<path d="M3 11 12 4l9 7M5 10v10h14V10"/><path d="M9 20v-6h3v6M15 13h2v2h-2zM17 4v4"/>`,shed:`<path d="M3 9 21 6v3M4 9v11h16V8.5"/><path d="M13 20v-7h4v7"/>`,greenhouse:`<path d="M3 20V12a9 8 0 0 1 18 0v8z"/><path d="M8 20v-9M16 20v-9M12 4.5V20"/>`,gazebo:`<path d="M2 10 12 3l10 7z"/><path d="M5 10v10M19 10v10M4 16h16"/>`,carport:`<path d="M2 7h20M4 7v13M20 7v13"/><path d="M6 17h12v-3l-2-3H8l-2 3zM8 17v2M16 17v2"/>`,parking:`<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M10 17V7h3a3 3 0 0 1 0 6h-3"/>`,firepit:`<path d="M4 13h16l-2 4H6zM8 17l-2 4M16 17l2 4"/><path d="M12 11c-2-1.5-1-4 0-6 1 2 3 3 1.5 6"/>`,toilet:`<path d="M6 7 12 3l6 4v14H6z"/><path d="M12 9.5c-1-1-2.5 0-1.5 1.2L12 12l1.5-1.3c1-1.2-.5-2.2-1.5-1.2z"/>`,shower:`<path d="M6 21V7h12v14"/><path d="M5 7h14V4H5zM12 10v2M10 13v2M14 13v2M12 16v2"/>`,well:`<path d="M5 13h14v8H5zM4 13h16M7 13V6M17 13V6M4 7l8-4 8 4"/><path d="M12 6v4"/>`,compost:`<path d="M3 9h18v11H3zM12 9v11M3 14.5h18"/>`,bed:`<rect x="3" y="7" width="18" height="10" rx="1"/><path d="M7 12c0-2 1-3 2-3M12 12c0-2 1-3 2-3M17 12c0-2-1-3-2-3"/>`,flowers:`<circle cx="12" cy="9" r="2.5"/><path d="M12 6.5V4M14.5 9H17M12 11.5V14M9.5 9H7M12 14v7M8 18c2 0 4 1 4 3M16 18c-2 0-4 1-4 3"/>`,apple:`<circle cx="12" cy="9" r="6"/><path d="M12 15v6M9 21h6"/><circle cx="10" cy="8" r=".8"/><circle cx="14" cy="10.5" r=".8"/>`,spruce:`<path d="M12 2 6 10h3l-4 6h5v5h4v-5h5l-4-6h3z"/>`,shrub:`<path d="M4 18a4 4 0 0 1 3-6 5 5 0 0 1 10 0 4 4 0 0 1 3 6z"/><path d="M12 18v3"/>`,house:`<path d="M3 11 12 4l9 7M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>`},H_=e=>`<svg viewBox="0 0 24 24" aria-hidden="true">${V_[e]||V_.shed}</svg>`;function U_(e,t){let n=oe(e,t),r=e.t||_[e.type],i=[];return n.side&&i.push(`${r?.kind===`tree`?`Ствол`:`Стены`} — не ближе ${B_(n.side)} к соседям`),n.street&&i.push(`не ближе ${B_(n.street)} к ${t===`lane`?`проезду`:`улице`}`),r?.san===`toilet`&&i.push(`от дома — ${h.houseToilet} м, от колодца — ${h.wellToilet} м`),r?.san===`bath`&&i.push(`от дома — ${h.houseBath} м`),r?.san===`well`&&i.push(`от туалета и компоста — ${h.wellToilet} м`),r?.san===`compost`&&i.push(`от колодца — ${h.wellToilet} м`),i}function W_(e,t){let n=t?e.filter(e=>e.ids.includes(t)):e;return n.length?`<ul class="norms">${n.map(e=>`<li><button type="button" data-act="focus" data-v="${z_(e.ids.find(e=>e!==t)||e.ids[0])}">
    <svg viewBox="0 0 24 24"><path d="M12 3 2 20h20zM12 10v4M12 17v.5"/></svg><span>${z_(e.text)}</span></button></li>`).join(``)}</ul>`:`<p class="norm ok"><svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></svg>${t?`Расстояния в норме`:`Всё расставлено по нормам`}</p>`}function G_(e,{store:t,catalog:n,actions:r}){let i=``,a=null,o=(e,n)=>t.set({site:{...t.get().site,...e}},n),s=0,c=null,l=-1;e.addEventListener(`click`,e=>{let n=e.target.closest(`[data-act]`);if(!n||n.disabled||!a)return;let i=n.dataset.act,s=n.dataset.v,c=t.get();if(i===`open-house`)t.set({page:`house`,siteSel:null});else if(i===`add`)r.add(s);else if(i===`idea`)r.idea(s);else if(i===`arrange`)r.arrangeAll();else if(i===`clear`)r.clear();else if(i===`size`){let e=x[+s];r.resize(c.site,{w:e.w,d:e.d})}else i===`front`?r.resize(c.site,{front:s}):i===`fence`?o({fence:s}):i===`focus`?r.focus(s):i===`deselect`?t.set({siteSel:null}):i===`rotate`?o({items:c.site.items.map(e=>e.id===c.siteSel?{...e,rot:(e.rot+90)%360}:e)}):i===`dup`?r.add(c.site.items.find(e=>e.id===c.siteSel)?.type):i===`del`&&(o({items:c.site.items.filter(e=>e.id!==c.siteSel)}),t.set({siteSel:null}))}),e.addEventListener(`input`,e=>{let n=e.target;if(n.dataset.dim){let e=b[n.dataset.dim];l!==s&&(c=t.get().site,l=s),r.resize(c,{[n.dataset.dim]:Math.round(+n.value/e.step)*e.step},{merge:`site-${n.dataset.dim}-${s}`})}else n.dataset.gate!==void 0&&o({gate:+n.value},{merge:`site-gate-${s}`})}),e.addEventListener(`change`,()=>s++);let u=(e,t,n)=>{let r=b[e],i=n[e];return`<div class="dim"><div class="dim-head"><label for="site-${e}">${t}</label><output class="dim-value">${B_(i)}</output></div>
      <div class="dim-ctrl"><input id="site-${e}" data-dim="${e}" type="range" min="${r.min}" max="${r.max}" step="${r.step}" value="${i}" style="--p:${(i-r.min)/(r.max-r.min)*100}%"/></div></div>`};return(t,n,r,o)=>{a={state:t,r:n,check:r};let s=JSON.stringify([t.site,t.siteSel,r.issues.map(e=>e.text),o.price,o.dims]);if(s===i)return;let c=document.activeElement;if(c&&e.contains(c)&&c.type===`range`){e.querySelectorAll(`[data-dim]`).forEach(e=>{let n=t.site[e.dataset.dim];e.closest(`.dim`).querySelector(`output`).textContent=B_(n),e.style.setProperty(`--p`,`${(n-b[e.dataset.dim].min)/(b[e.dataset.dim].max-b[e.dataset.dim].min)*100}%`)});let n=e.querySelector(`.sotki`);n&&(n.textContent=ve(t.site));return}i=s;let l=t.site,d=t.siteSel&&n.items.find(e=>e.id===t.siteSel);if(d){let t=d.t,n=t.kind===`tree`?`крона около ${B_(t.crown)}`:`${B_(t.w)} × ${B_(t.d)}`;e.innerHTML=`
        <header class="panel-head site-head">
          <button type="button" class="back-link" data-act="deselect"><svg viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg>Участок</button>
          <h1><span class="site-ico big">${H_(t.icon)}</span>${z_(t.name)}</h1>
          <p>${z_(n)}. Тяните на участке, чтобы передвинуть.</p>
        </header>
        <section class="group">
          <div class="btn-row">
            ${t.w===t.d?``:`<button type="button" class="btn" data-act="rotate"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.4-5.7M20 4v4h-4"/></svg>Повернуть</button>`}
            <button type="button" class="btn" data-act="dup" ${l.items.length>=40?`disabled`:``}><svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>Ещё одну</button>
          </div>
          <button type="button" class="btn wide ghost danger" data-act="del">Убрать с участка</button>
        </section>
        <section class="group">
          <h2>Нормы</h2>
          ${W_(r.issues,d.id)}
          ${U_(d,l.front).length?`<p class="note">${z_(U_(d,l.front).join(`; `))}.</p>`:`<p class="note">Для этого объекта отступы не нормируются.</p>`}
        </section>`;return}let f={};for(let e of n.items)f[e.type]=(f[e.type]||0)+1;e.innerHTML=`
      <header class="panel-head">
        <h1>Ваш участок</h1>
        <p class="site-sub"><span class="sotki">${z_(ve(l))}</span> · нажмите на дом или постройку, чтобы изменить. Постройки можно перетаскивать.</p>
      </header>
      <section class="group">
        <button type="button" class="house-card" data-act="open-house">
          ${o.thumb}
          <span class="preset-text"><span class="preset-name">Дом ${z_(o.dims)}</span>
          <span class="preset-note">${z_(o.area)} · отделка, крыша, планировка</span>
          <span class="preset-price">${z_(Uh(o.price))}</span></span>
          <span class="house-card-go">Настроить<svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></span>
        </button>
      </section>
      <section class="group">
        <h2>Нормы расстояний</h2>
        ${W_(r.issues)}
        <p class="note small">Ориентир — СП 53.13330.2019 для садовых участков. Местные правила застройки могут отличаться.</p>
      </section>
      <section class="group">
        <h2>Добавить на участок</h2>
        <div class="site-add">${g.map(e=>`<button type="button" class="site-tile" data-act="add" data-v="${e.id}" ${n.items.length>=40?`disabled`:``}>
          <span class="site-ico">${H_(e.icon)}</span><span>${z_(e.short||e.name)}</span>${f[e.id]?`<b>${f[e.id]}</b>`:``}</button>`).join(``)}</div>
      </section>
      <section class="group">
        <h2>Готовые идеи</h2>
        <div class="site-ideas">${C.map(e=>`<button type="button" class="opt" data-act="idea" data-v="${e.id}"><span class="opt-text"><span class="opt-name">${z_(e.name)}</span><span class="opt-note">${z_(e.note)}</span></span></button>`).join(``)}</div>
        <div class="btn-row">
          <button type="button" class="btn" data-act="arrange"><svg viewBox="0 0 24 24"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 17h6M17 14v6"/></svg>Расставить по нормам</button>
          <button type="button" class="btn ghost danger" data-act="clear" ${n.items.length?``:`disabled`}>Убрать всё</button>
        </div>
      </section>
      <section class="group">
        <h2>Размер участка</h2>
        <div class="chips">${x.map((e,t)=>`<button type="button" class="chip${e.w===l.w&&e.d===l.d?` on`:``}" data-act="size" data-v="${t}">${z_(e.name)} <small>${e.w}×${e.d}</small></button>`).join(``)}</div>
        ${u(`w`,`Ширина вдоль улицы`,l)}
        ${u(`d`,`Глубина`,l)}
        <div class="label">Перед участком</div>
        <div class="chips">${y.map(e=>`<button type="button" class="chip${l.front===e.id?` on`:``}" data-act="front" data-v="${e.id}" title="${z_(e.note)}">${z_(e.name)}</button>`).join(``)}</div>
        <div class="label">Забор</div>
        <div class="chips">${v.map(e=>`<button type="button" class="chip${l.fence===e.id?` on`:``}" data-act="fence" data-v="${e.id}">${z_(e.name)}</button>`).join(``)}</div>
        <div class="dim"><div class="dim-head"><label for="site-gate">Ворота и калитка</label><output class="dim-value">${l.gate<.4?`слева`:l.gate>.6?`справа`:`посередине`}</output></div>
          <div class="dim-ctrl"><input id="site-gate" data-gate type="range" min="0" max="1" step="0.01" value="${l.gate}" style="--p:${l.gate*100}%"/></div></div>
      </section>`}}function K_(e,{state:t,check:n,onRotate:r}){let i=JSON.stringify([t.site.house.rot,n.issues.filter(e=>e.ids.includes(`house`)).map(e=>e.text)]);e.dataset.key!==i&&(e.dataset.key=i,e.innerHTML=`
    ${W_(n.issues,`house`)}
    <p class="note">Дом не ближе ${h.house.boundary} м к соседям и ${t.site.front===`lane`?h.house.lane:h.house.street} м к ${t.site.front===`lane`?`проезду`:`улице`}. Передвинуть дом — потяните его на участке.</p>
    <button type="button" class="btn" data-act="house-rotate"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.4-5.7M20 4v4h-4"/></svg>Повернуть дом на участке</button>`,e.querySelector(`[data-act="house-rotate"]`).onclick=r)}function q_(e,t,n,r){return{thumb:Xh(e,t),dims:`${e.L.toLocaleString(`ru-RU`)} × ${e.W.toLocaleString(`ru-RU`)} м`,area:Gh(n.floorArea+(n.atticArea||0)),price:r.total}}var $=e=>document.getElementById(e),J_=[`length`,`width`,`roofType`,`plan`,`terrace`,`foundation`,`plinth`,`showFurniture`],Y_=[`wallMaterial`,`wallFinish`,`roofMaterial`,`roofFinish`,`plinth`,`windowFrame`,`doorType`],X_=[`site`,`house`,`plan`,`summary`],Z_=(e,t,n)=>n.some(n=>e[n]!==t[n]),Q_=e=>e.page===`plan`&&e.planView===`3d`&&!e.walk,$_=()=>X_.includes(location.hash.slice(1))?location.hash.slice(1):`site`,ev=e=>!e.walk&&(e.page===`site`||e.page===`house`),tv=e=>JSON.parse(JSON.stringify(e)),nv=class{constructor({manufacturer:e,pricing:t}){this.cfg=e,this.pricing=t;let n=e.defaults;this.defaults={length:n.length,width:n.width,roofType:n.roofType||`gable`,wallMaterial:n.wallMaterial,wallFinish:n.wallFinish,roofMaterial:n.roofMaterial,roofFinish:n.roofFinish,plinth:n.plinth,windowFrame:n.windowFrame,doorType:n.doorType,foundation:n.foundation,package:n.package,construction:n.construction,soil:n.soil||`loam`,snowRegion:n.snowRegion||3,terrace:tv(n.terrace||{type:`none`,depth:2}),plan:tv(n.plan)},this.defaults.site=ge(Ze(this.defaults,e));let r=yn(e);!r.site&&Object.keys(r).length&&(r.site=ge(Ze({...this.defaults,...r},e))),this.store=d({...this.defaults,...r,page:$_(),planView:`2d`,planSel:null,planAdd:null,siteSel:null,siteDrag:null,showFurniture:!0,walk:!1}),this.history=m(this.store)}start(){let e=new URLSearchParams(location.search).has(`embed`);document.documentElement.classList.toggle(`embed`,e),this._applyBranding(),Sg(this.cfg.metrikaId);let t=Wm();document.documentElement.dataset.quality=t.level,this.sm=new Um($(`viewer`),t);let n=Math.min(8,this.sm.renderer.capabilities.getMaxAnisotropy());this.materials=Ym({anisotropy:n,quality:t.level}),this.house=new Ch(this.materials,this.cfg),this.sm.add(this.house.group),this.site=new L_(n),this.sm.add(this.site.root),this.sm.siteRoot=this.site.root,this._mountSiteControls(),this._mountUI();let r=this.store.get();this.layout=Ze(r,this.cfg),this._calcStructure(r),this._syncSite(r,null),this._rebuild(r,!0),this.materials.apply(r,this.cfg),this._syncPage(r,null),this._sync(r);let i=0;this.store.subscribe((e,t)=>{this.layout=Ze(e,this.cfg),this._calcStructure(e)&&!Z_(e,t,J_)&&e.walk===t.walk&&this._scheduleRebuild(),Z_(e,t,[...J_,`site`,`siteSel`,`siteDrag`,`page`,`walk`])&&this._syncSite(e,t),e.walk===t.walk?(Z_(e,t,J_)||Q_(e)!==Q_(t))&&this._scheduleRebuild():this._toggleWalk(e),Z_(e,t,Y_)&&(this.materials.apply(e,this.cfg),this.sm.invalidate()),(e.page!==t.page||e.planView!==t.planView)&&this._syncPage(e,t),Z_(e,t,f)&&(clearTimeout(i),i=setTimeout(()=>bn(this.store.get()),400)),this._sync(e)}),bn(r),window.addEventListener(`hashchange`,()=>this.store.set({page:$_(),planAdd:null,siteSel:null})),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.store.set({planAdd:null,planSel:null,walk:!1,siteSel:null});let t=e.target.tagName;if(t===`INPUT`&&e.target.type!==`range`||t===`TEXTAREA`)return;let n=this.store.get();(e.key===`Delete`||e.key===`Backspace`)&&n.page===`site`&&n.siteSel&&t!==`INPUT`&&(e.preventDefault(),this.store.set({site:{...n.site,items:n.site.items.filter(e=>e.id!==n.siteSel)},siteSel:null}));let r=e.ctrlKey||e.metaKey,i=e.key.toLowerCase();r&&(i===`z`||i===`я`)&&!e.shiftKey?(e.preventDefault(),this.history.undo()):r&&((i===`z`||i===`я`)&&e.shiftKey||i===`y`||i===`н`)&&(e.preventDefault(),this.history.redo())}),this.sm.onFirstFrame=()=>{$(`loader`).classList.add(`gone`),window.sceneReady=!0},window.configurator={store:this.store,price:()=>this.lastPrice,structure:()=>this.structure,sm:this.sm,layout:()=>this.layout,history:this.history,site:()=>({r:this.siteR,check:this.siteCheck,labels:this.site.labels}),screen:(e,t,n)=>this._screen(e,t,n)}}_applyBranding(){let e=this.cfg;if(document.querySelectorAll(`[data-bind]`).forEach(t=>{t.textContent=e[t.dataset.bind]??``}),e.accent&&/^#[0-9a-f]{6}$/i.test(e.accent)){let t=document.documentElement.style,n=[1,3,5].map(t=>parseInt(e.accent.slice(t,t+2),16)),r=e=>`rgb(${n.map(t=>Math.round(255+(t-255)*e)).join(`,`)})`;t.setProperty(`--accent`,e.accent),t.setProperty(`--accent-7`,r(.07)),t.setProperty(`--accent-10`,r(.1)),t.setProperty(`--accent-14`,r(.14));for(let e of[14,22,25])t.setProperty(`--accent-a${e}`,`rgba(${n.join(`,`)}, ${e/100})`)}document.title=`${e.title} — конфигуратор${e.brand?` · `+e.brand:``}`,$(`included`).replaceChildren(...(e.included||[]).map(e=>Object.assign(document.createElement(`li`),{textContent:e})))}_mountUI(){let e=this.cfg,t=this.store,n=this.materials;this.syncers=[Zh($(`presets`),{presets:e.presets,store:t,catalog:e,pricing:this.pricing,defaults:this.defaults,onPick:e=>{Cg(`preset`,{id:e.id}),fg(`Загружен проект «${e.name}». Его можно менять как угодно`)}}),qh($(`dimensions`),t,e.limits),Yh($(`constructions`),{list:e.constructions,store:t,key:`construction`,columns:2}),Yh($(`packages`),{list:e.packages,store:t,key:`package`}),Yh($(`foundations`),{list:e.foundations,store:t,key:`foundation`}),Yh($(`roofTypes`),{list:e.roofTypes,store:t,key:`roofType`,disabled:(t,n)=>t.id===`mansard`&&!Xe(n.width,e)?`при ширине от ${Wh(t.minWidth||5)}`:``}),jh($(`wallMaterials`),{kind:`wall`,list:e.wallMaterials,store:t,matKey:`wallMaterial`,finishKey:`wallFinish`,materials:n}),jh($(`roofMaterials`),{kind:`roof`,list:e.roofMaterials,store:t,matKey:`roofMaterial`,finishKey:`roofFinish`,materials:n}),Qh($(`terrace`),{catalog:e,store:t}),Mh($(`plinths`),{list:e.plinths,store:t,key:`plinth`,image:e=>n.preview(`plinth`,e.texture,null,48)}),Mh($(`frames`),{list:e.windowFrames,store:t,key:`windowFrame`,dot:e=>e.color}),Mh($(`doorTypes`),{list:e.doorTypes,store:t,key:`doorType`})],u_($(`budget`),{presets:e.presets,store:t,catalog:e,pricing:this.pricing,defaults:this.defaults,onPick:(e,t)=>{if(e===`search`)return Cg(`budget`,t);fg(`Загружен вариант за ${Math.round(t.price).toLocaleString(`ru-RU`)} ₽. Его можно менять дальше`)}}),this.renderStructure=Vh($(`structure`),{store:t}),this.renderPrice=eg({valueEl:$(`priceValue`),listEl:$(`breakdown`),toggleEl:$(`breakdownBtn`)}),this.renderSitePanel=G_($(`sitePanel`),{store:t,catalog:e,actions:this._siteActions()}),this.planEditor=new cg($(`planView`),t,e),this.renderPlanPanel=bg($(`planPanel`),t,e,this.defaults),this.renderSummary=Ng($(`summaryPanel`),{cfg:e,store:t,pricing:this.pricing,defaults:this.defaults,snapshot:()=>this.sm.snapshot(420,266,.8),onPdf:()=>{let n=t.get();Vg({cfg:e,state:n,layout:this.layout,metrics:$e(this.layout),price:this.lastPrice,image:this.sm.snapshot(),site:{r:this.siteR,check:this.siteCheck},structure:this.structure})}}),document.querySelectorAll(`#ctxBar [data-page], [data-goto]`).forEach(e=>e.addEventListener(`click`,()=>t.set({page:e.dataset.page||e.dataset.goto,planAdd:null,siteSel:null}))),$(`viewSwitch`).addEventListener(`click`,e=>{let n=e.target.closest(`[data-view]`);n&&t.set({planView:n.dataset.view,planAdd:null,walk:!1})});let r=this.history;$(`undoBtn`).onclick=()=>r.undo(),$(`redoBtn`).onclick=()=>r.redo(),r.subscribe(()=>{$(`undoBtn`).disabled=!r.canUndo(),$(`redoBtn`).disabled=!r.canRedo()});let i=this.sm.cameraCtl;$(`zoomIn`).onclick=()=>i.zoom(.8),$(`zoomOut`).onclick=()=>i.zoom(1.25),$(`resetView`).onclick=()=>Q_(t.get())?i.setElevation(55):i.reset(),this.sunPanel=n_({button:$(`sunBtn`),panel:$(`sunPanel`),sm:this.sm,materials:this.materials,app:$(`app`),facade:{get:()=>t.get().site.street,set:e=>t.set({site:{...t.get().site,street:e}}),rot:()=>t.get().site.house.rot}}),$(`sunBtn`).addEventListener(`click`,()=>Cg(`sun`));let a=this.store;$(`walkBtn`).onclick=()=>a.set({walk:!0,planAdd:null}),$(`walkExit`).onclick=()=>a.set({walk:!1});let o=Object.fromEntries(this.cfg.roomTypes.map(e=>[e.id,e.name]));this.sm.walk.onRoom=e=>{$(`walkRoom`).textContent=e?`${o[e.type]||``} · ${Gh(e.area)}`:``},this.sm.walk.onMove=()=>$(`walkHelp`).classList.add(`gone`);let s=$(`hint`),c=()=>s.classList.add(`gone`);i.onUserStart=c,setTimeout(c,6e3)}_toggleWalk(e){let t=e.walk;if($(`app`).classList.toggle(`walking`,t),$(`walkHud`).hidden=!t,t){cancelAnimationFrame(this.pending),this.pending=0,this._rebuild(e),this.sm.setWalk(!0,this.layout);let t=$(`walkHelp`);t.classList.remove(`gone`),clearTimeout(this.walkHelpTimer),this.walkHelpTimer=setTimeout(()=>t.classList.add(`gone`),9e3),Cg(`walk`)}else this.sm.setWalk(!1),this._rebuild(e)}_syncPage(e,t){let n=$(`app`);n.dataset.page=e.page,n.dataset.view=e.page===`plan`?e.planView:`3d`,this.sm.paused=e.page===`plan`&&e.planView===`2d`,document.querySelectorAll(`#ctxBar [role=tab]`).forEach(t=>t.setAttribute(`aria-selected`,t.dataset.page===e.page)),document.querySelectorAll(`#viewSwitch [data-view]`).forEach(t=>t.setAttribute(`aria-selected`,t.dataset.view===e.planView));let r=e.page===`site`?``:`#`+e.page;location.hash!==r&&history.replaceState(null,``,location.pathname+location.search+r),t&&t.page!==e.page&&($(`panelScroll`).scrollTop=0,e.page!==`site`&&Cg(`page_`+e.page),t.page===`site`!=(e.page===`site`)&&this._frame(e)),$(`hintText`).textContent=e.page===`site`?`Нажмите на дом или постройку. Тяните, чтобы передвинуть`:`Покрутите домик, чтобы рассмотреть`;let i=Q_(e);t&&i!==Q_(t)&&this.sm.cameraCtl.setElevation(i?55:17),this.sm.invalidate()}_calcStructure(e){this.structure=Kt(e,this.layout,$e(this.layout));let t=this.structure,n=JSON.stringify([t.house?.kind,t.house?.pile?.id,t.house?.xs,t.house?.zs,t.terrace?.xs,t.terrace?.zs]),r=n!==this.supportsSig;return this.supportsSig=n,r}_scheduleRebuild(){this.pending||=requestAnimationFrame(()=>{this.pending=0,this._rebuild(this.store.get())})}_rebuild(e,t=!1){this.house.build(this.layout,e,{cutaway:Q_(e),furniture:e.showFurniture,walk:e.walk,supports:this.structure}),this._frame(e,t)}_frame(e,t=!1){let n=this.siteR,r=e.page===`site`&&n&&!e.walk?{center:this.site.toScene(0,1,0),radius:Math.hypot(n.W,n.D)*.42}:null;this.sm.fitTo(this.layout,{immediate:t,site:r})}_syncSite(e,t){let n=ee(e.site,this.layout),r=I(n);this.siteR=n,this.siteCheck=r;let i=this.site.root.matrix.clone(),a=ev(e);this.site.update(n,{sel:a?e.page===`house`?`house`:e.siteSel:null,issues:a?r.issues:[],dragging:e.siteDrag}),t&&(i.equals(this.site.root.matrix)||e.page!==`site`&&e.siteDrag!==`house`||this.sm.moveView(this.site.root.matrix.clone().multiply(i.invert())),(e.site.w!==t.site.w||e.site.d!==t.site.d)&&this._frame(e),(e.site.street!==t.site.street||e.site.house.rot!==t.site.house.rot)&&this.sunPanel?.refresh()),this.labelsKey=null,this.sm.invalidate()}_mountSiteControls(){let e=this.store;this.siteCtl=new R_({sm:this.sm,site:this.site,house:this.house,enabled:()=>ev(e.get()),canDrag:()=>e.get().page===`site`,onPick:t=>{let n=e.get();t?t.kind===`house`?n.page!==`house`&&e.set({page:`house`,siteSel:null}):e.set({page:`site`,siteSel:t.id}):(n.page===`house`||n.siteSel)&&e.set({page:`site`,siteSel:null})},onDrag:(t,n,r,i)=>{let a=e.get().site;if(t.kind===`house`){let t=ee({...a,house:{...a.house,x:n,z:r}},this.layout).house;e.set({site:{...a,house:{...a.house,x:t.x,z:t.z}},siteDrag:`house`},{merge:i})}else{let o=a.items.map(e=>e.id===t.id?{...e,x:n,z:r}:e),s=ee({...a,items:o},this.layout).items.find(e=>e.id===t.id);if(!s)return;e.set({site:{...a,items:a.items.map(e=>e.id===t.id?{...e,x:s.x,z:s.z}:e)},siteDrag:t.id,siteSel:t.id,page:`site`},{merge:i})}},onDragEnd:()=>{e.set({siteDrag:null}),e.get().page===`house`&&this._frame(e.get())}}),this.siteCtl.positionOf=e=>{let t=this.siteR;return e.kind===`house`?{x:t.house.x,z:t.house.z}:t.items.find(t=>t.id===e.id)};let t=$(`siteLabels`);this.sm.onRender=()=>{let n=ev(e.get())?this.site.labels:[],r=JSON.stringify(n);r!==this.labelsKey&&(this.labelsKey=r,t.replaceChildren(...n.map(e=>Object.assign(document.createElement(`div`),{className:`site-label`,textContent:e.text}))));let i=t.clientWidth,a=t.clientHeight;n.forEach((e,n)=>{let r=this.site.toScene(e.x,.3,e.z).project(this.sm.camera),o=t.children[n],s=r.z<1&&Math.abs(r.x)<1.1&&Math.abs(r.y)<1.1;o.style.display=s?``:`none`,o.style.transform=`translate(${(r.x+1)/2*i}px, ${(1-r.y)/2*a}px) translate(-50%, -50%)`})}}_screen(e,t,n){let r=this.site.toScene(e,t,n).project(this.sm.camera),i=this.sm.renderer.domElement.getBoundingClientRect();return{x:i.left+(r.x+1)/2*i.width,y:i.top+(1-r.y)/2*i.height}}_siteActions(){let e=this.store,t=(e,t)=>I(ee(e,this.layout)).issues.some(e=>e.ids.some(e=>t.includes(e)));return{add:n=>{if(!n)return;let r=e.get(),{site:i,failed:a}=de(r.site,this.layout,[n],{keep:r.site.items,moveHouse:!1,relax:!0});if(a.length)return fg(`На участке не нашлось места. Увеличьте участок или уберите что-нибудь`);let o=i.items[i.items.length-1];e.set({site:i,siteSel:o.id,page:`site`}),Cg(`site_add`,{type:n}),fg(t(i,[o.id])?`${_[n].name}: по нормам места не хватает — передвиньте или увеличьте участок`:`${_[n].name} на участке. Тяните, чтобы передвинуть`,4200)},idea:t=>{let n=C.find(e=>e.id===t),{site:r,failed:i}=de({...e.get().site,items:[]},this.layout,n.items);e.set({site:r,siteSel:null}),Cg(`site_idea`,{id:t}),fg(i.length?`«${n.name}»: не поместилось по нормам — ${i.map(e=>_[e].name.toLowerCase()).join(`, `)}`:`Участок «${n.name}» расставлен по нормам. Всё можно двигать`,4500)},arrangeAll:()=>{let t=e.get(),{site:n,failed:r}=de({...t.site,items:[]},this.layout,t.site.items.map(e=>e.type));e.set({site:n,siteSel:null}),fg(r.length?`Не поместилось по нормам: ${r.map(e=>_[e].name.toLowerCase()).join(`, `)}`:`Расставлено по нормам`)},resize:(t,n,r)=>{let{site:i,failed:a}=he(t,{...t,...n},this.layout);e.set({site:i},r);let o=r?.merge||Math.random();a.length&&this.refitWarned!==o&&(this.refitWarned=o,fg(`Не всё помещается по нормам — увеличьте участок или уберите что-нибудь`))},clear:()=>e.set({site:{...e.get().site,items:[]},siteSel:null}),focus:t=>t===`house`?e.set({page:`house`,siteSel:null}):e.set({page:`site`,siteSel:t})}}_sync(e){this.syncers.forEach(t=>t(e));let t=$e(this.layout);$(`dimsChip`).textContent=e.page===`site`?`${ve(e.site)} · ${e.site.w.toLocaleString(`ru-RU`)} × ${e.site.d.toLocaleString(`ru-RU`)} м`:`${Wh(e.length).replace(` м`,``)} × ${Wh(e.width)} · ${Gh(t.floorArea)}`,this.lastPrice=kh(e,this.pricing,t,this.cfg),this.renderPrice(this.lastPrice),e.page===`site`?this.renderSitePanel(e,this.siteR,this.siteCheck,q_(this.layout,this.cfg,t,this.lastPrice)):e.page===`house`?(this.renderStructure(e,this.structure,this.layout),K_($(`houseSite`),{state:e,check:this.siteCheck,onRotate:()=>{let e=this.store.get();this.store.set({site:{...e.site,house:{...e.site.house,rot:(e.site.house.rot+90)%360}}})}})):e.page===`plan`?(this.renderPlanPanel(e,this.layout),e.planView===`2d`&&this.planEditor.render(e,this.layout)):e.page===`summary`&&this.renderSummary(e,this.layout,t,this.lastPrice,{r:this.siteR,check:this.siteCheck,rows:Rg(this.siteR,this.siteCheck)})}};l().then(e=>new nv(e).start()).catch(e=>{console.error(e);let t=document.getElementById(`loader`);t.classList.add(`error`),t.textContent=`Не удалось загрузить конфигуратор. Обновите страницу.`});