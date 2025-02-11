import{r as m,p as W,u as Y,q as Q,j as c,s as K,t as D,v as cc,w as T,f as ec,a as e,l as f,m as j,P as S,b as l,y as h,d as O,i as u,O as ac,x as tc,n as X,M as sc,R as rc,$ as lc,c as g,e as r,g as I,h as A,k as nc,o as ic}from"../chunks/chunk-BuSc3V9o.js";import{s as _}from"../chunks/chunk-BHBo8IYQ.js";import{i as oc,a as dc,b as M}from"../chunks/chunk-BvhHPjju.js";import{u as hc,p as q}from"../chunks/chunk-QGz1elDG.js";/* empty css                      */function mc(a){const t=m.useRef({value:a,previous:a});return m.useMemo(()=>(t.current.value!==a&&(t.current.previous=t.current.value,t.current.value=a),t.current.previous),[a])}var $="Checkbox",[xc,_c]=W($),[pc,uc]=xc($),J=m.forwardRef((a,t)=>{const{__scopeCheckbox:s,name:n,checked:i,defaultChecked:d,required:b,disabled:p,value:v="on",onCheckedChange:k,form:w,...z}=a,[o,P]=m.useState(null),E=Y(t,x=>P(x)),L=m.useRef(!1),H=o?w||!!o.closest("form"):!0,[N=!1,U]=Q({prop:i,defaultProp:d,onChange:k}),V=m.useRef(N);return m.useEffect(()=>{const x=o==null?void 0:o.form;if(x){const C=()=>U(V.current);return x.addEventListener("reset",C),()=>x.removeEventListener("reset",C)}},[o,U]),c.jsxs(pc,{scope:s,state:N,disabled:p,children:[c.jsx(K.button,{type:"button",role:"checkbox","aria-checked":y(N)?"mixed":N,"aria-required":b,"data-state":G(N),"data-disabled":p?"":void 0,disabled:p,value:v,...z,ref:E,onKeyDown:D(a.onKeyDown,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:D(a.onClick,x=>{U(C=>y(C)?!0:!C),H&&(L.current=x.isPropagationStopped(),L.current||x.stopPropagation())})}),H&&c.jsx(gc,{control:o,bubbles:!L.current,name:n,value:v,checked:N,required:b,disabled:p,form:w,style:{transform:"translateX(-100%)"},defaultChecked:y(d)?!1:d})]})});J.displayName=$;var Z="CheckboxIndicator",wc=m.forwardRef((a,t)=>{const{__scopeCheckbox:s,forceMount:n,...i}=a,d=uc(Z,s);return c.jsx(cc,{present:n||y(d.state)||d.state===!0,children:c.jsx(K.span,{"data-state":G(d.state),"data-disabled":d.disabled?"":void 0,...i,ref:t,style:{pointerEvents:"none",...a.style}})})});wc.displayName=Z;var gc=a=>{const{control:t,checked:s,bubbles:n=!0,defaultChecked:i,...d}=a,b=m.useRef(null),p=mc(s),v=hc(t);m.useEffect(()=>{const w=b.current,z=window.HTMLInputElement.prototype,P=Object.getOwnPropertyDescriptor(z,"checked").set;if(p!==s&&P){const E=new Event("click",{bubbles:n});w.indeterminate=y(s),P.call(w,y(s)?!1:s),w.dispatchEvent(E)}},[p,s,n]);const k=m.useRef(y(s)?!1:s);return c.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i??k.current,...d,tabIndex:-1,ref:b,style:{...a.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function y(a){return a==="indeterminate"}function G(a){return y(a)?"indeterminate":a?"checked":"unchecked"}var fc=J;const R=m.forwardRef(({checked:a,defaultChecked:t,...s},n)=>c.jsx(fc,{...s,ref:n,defaultChecked:a??t})),B=void 0,F={id:"93855c4cc520ed55dbe42dc663eaa7836ce1704f8844f12794ef802e3bd923ee",name:"logo_r1qaJQiri6sK3rPyq-Sar.svg",description:null,projectId:"743529af-0b89-4353-9f6c-42ca4fc90e51",size:16100,type:"image",format:"svg",createdAt:"2024-10-14T22:25:38.984+00:00",meta:{width:280,height:280}},yc=[],bc=[{id:"1ca1ba35aa38b4137cb647d10a13a8054e3724b8935e4da6e095e77886ad3cb3",name:"Group_kCTIep--Fowuzx8m9sVEU.svg",description:null,projectId:"743529af-0b89-4353-9f6c-42ca4fc90e51",size:736,type:"image",format:"svg",createdAt:"2024-12-05T02:02:21.933+00:00",meta:{width:390,height:844}},{id:"84c7896d77c878d48a9f24b8c62143556bde2fee67e1894ffdc5b21699131ad1",name:"bg-top-left_iDPdUzP3CXomJM1M8FrN6.svg",description:null,projectId:"743529af-0b89-4353-9f6c-42ca4fc90e51",size:795,type:"image",format:"svg",createdAt:"2024-12-04T16:33:06.626+00:00",meta:{width:725,height:743}}],jc=({system:a})=>{var k,w,z;let[t,s]=T("initial"),[n,i]=T(!1),[d,b]=T(!1),[p,v]=T(!1);return c.jsx(ec,{className:"w-body",children:c.jsxs(e,{className:"w-box c1yh769p cnu4kgu crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1xzir7e",children:[c.jsx(f,{children:c.jsxs(j,{children:[c.jsx(S,{code:`<style>
  /* So we don't need to add a token to every paragraph to remove margin. */
  p {
    margin: 0;
  }

  li::marker {
    color: var(--foreground-accent);
  }
</style>`,className:"w-html-embed"}),c.jsx(S,{code:`<style>
:root {
  --ani-duration: var(--duration-default, .2s);
  --ani-delay: 0s;
  --ani-slide-offset: 20%;
  --ani-zoom-in-scale: 1;
  --ani-zoom-out-scale: .85;
  --ani-flip-rotate: 30deg;
  --ani-easing: var(--easing-default, ease);
  --ani-fill-mode: forwards;
}
[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}
@keyframes fadeIn{from{opacity:0}
to{opacity:1}}
@keyframes fadeOut{from{opacity:1}
to{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}
@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}
to{opacity:1;translate:none}}
@keyframes slideOut{from{opacity:1;translate:none}
to{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}
@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}
to{opacity:1;scale:1}}
@keyframes zoomOut{from{opacity:1;scale:1}
to{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}
@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}
to{rotate:y 0;opacity:1}}
@keyframes flipOutY{from{rotate:y 0;opacity:1}
to{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}
@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}
to{rotate:x 0;opacity:1}}
@keyframes flipOutX{from{rotate:x 0;opacity:1}
to{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}
@keyframes expandDown{from{height:0}
to{height:var(--newHeight)}}
@keyframes expandUp{from{height:var(--newHeight)}
to{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}
@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}
</style>`,className:"w-html-embed"}),c.jsxs(e,{tag:"header",className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh c18v2pa2 c1z0l37u c1ml0hr7 c15hexcm",children:[c.jsxs(e,{className:"w-box cry9bxc c1qyy4dh c1wt8a7g c1s46o9r cdczzub c16a1k66 c1ksohct",children:[c.jsx(f,{children:c.jsx(j,{children:c.jsx(l,{"aria-label":"Home",href:"/",className:"w-link c5m8ase clv8gve",children:c.jsx(h,{loading:"eager",alt:"Logo",src:"/assets/temp_logo_AmFLqZrz8LXAa321QPw66.png",height:500,width:100,className:"w-image"})})})}),c.jsx(e,{tag:"nav",className:"w-box cc3dq2t",children:c.jsx(f,{children:c.jsx(j,{children:c.jsxs(O,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1e2b3ev ctf8nym c3v2c40 c174sw29 c1rstvfo c10x096o c1565yj9 c1cpmdss",children:[c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/about",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"About"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/pricing",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Pricing"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/tokens",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Tokens"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/blog",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Blog"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/contact",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Contact"})})]})})})})]}),c.jsxs(e,{className:"w-box",children:[c.jsx(e,{className:"w-box cc3dq2t"}),c.jsx(f,{children:c.jsx(j,{children:c.jsxs(ac,{children:[c.jsx(tc,{children:c.jsx(X,{"aria-label":"Open mobile menu",type:"button",className:"w-button cnrz8fp cl8m66n ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cl7jefz c1cb3y4c cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk codg43x c9x99qz cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk cb2iaxq cxrm9n4 covz0n0 c1g7oelg c149s0mc c1mrg60n",children:c.jsx(S,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})}),c.jsx(sc,{className:"w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29",children:c.jsxs(rc,{"data-ani":"fade",className:"w-dialog-content c1fhkm63 cx6c9kw c1a9dz3f colc7hu c174sw29 c1ukpry4 cowwg1a ctgnupg c1i7z02k c5hqtns c4a9xim chekmwa ctiauf2 c1v9i8o6 c15xw1g2",children:[c.jsxs(e,{className:"w-box cx6c9kw c1nd8hlk",children:[c.jsx(f,{children:c.jsx(j,{children:c.jsx(l,{"aria-label":"Home",href:"/",className:"w-link c5m8ase clv8gve",children:c.jsx(h,{loading:"eager",alt:"Logo",src:"/assets/temp_logo_AmFLqZrz8LXAa321QPw66.png",height:500,width:100,className:"w-image"})})})}),c.jsx(lc,{"aria-label":"Close mobile menu",className:"w-close-button cnrz8fp cl8m66n ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk codg43x c9x99qz cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c4rd7b9 cb2iaxq cxrm9n4 covz0n0 c1g7oelg c1mrg60n",children:c.jsx(S,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]}),c.jsx(e,{tag:"nav","aria-label":"Main mobile",className:"w-box",children:c.jsx(f,{children:c.jsx(j,{children:c.jsxs(O,{className:"w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1e2b3ev ctf8nym c3v2c40 c174sw29 c1rstvfo c10x096o c1565yj9 c1cpmdss",children:[c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/about",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"About"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/pricing",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Pricing"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/tokens",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Tokens"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/blog",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Blog"})}),c.jsx(u,{className:"w-list-item",children:c.jsx(l,{href:"/contact",className:"w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u",children:"Contact"})})]})})})}),c.jsx(f,{})]})})]})})})]})]})]})}),c.jsxs(e,{tag:"main",className:"w-box",children:[c.jsx(e,{tag:"section",className:"w-box cfvl0bs c1mzb2kd",children:c.jsxs(e,{className:"w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub",children:[c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c1qyy4dh c18v2pa2 cuj80l1 cq4dxli czqy8m4 c10x096o c174sw29",children:[c.jsx(g,{tag:"h1",className:"w-heading c11nr3ex c11dowh9 c32myit cwrra4i cg5i74l c10r87ok c1dhz37v",children:"Blog"}),c.jsx(r,{className:"w-paragraph c6oj68y",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat."})]}),c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1pqbrmo c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh c174sw29",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image c1bkqfhr c1gxuxwl cdtylqg chmjof8"})}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c11gzs80 cdsjpcc ca97va1",children:[c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb c13qqaub ck3af4j c1dj4rt4 c12xqkwt c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6 c1x4yn0w",children:"Featured"}),c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]})]})]})}),c.jsx(e,{tag:"section",className:"w-box cna0hdz c1mzb2kd c1jcu5b",children:c.jsxs(e,{className:"w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lxiyww c1778y6x ct02u4h c1s46o9r cdczzub c174sw29 c1rstvfo",children:[c.jsxs(e,{className:"w-box cry9bxc c1qyy4dh c1wt8a7g c1z0l37u c1ml0hr7",children:[c.jsx(S,{code:`<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="68" height="68" rx="20" fill="white"></rect>
<g clip-path="url(#clip0_19_9890)">
<path opacity="0.4" d="M54.11 42.5992C54.11 48.334 49.5057 52.9795 43.7708 53H43.7503H23.3803C17.666 53 13 48.3751 13 42.6403V42.6198C13 42.6198 13.0123 33.5221 13.0288 28.9466C13.0308 28.0874 14.0175 27.6064 14.6896 28.1408C19.5735 32.0154 28.3073 39.0802 28.4162 39.1727C29.8757 40.3423 31.7256 41.0021 33.6167 41.0021C35.5077 41.0021 37.3577 40.3423 38.8171 39.1501C38.926 39.0781 47.4646 32.2251 52.4224 28.2868C53.0966 27.7503 54.0874 28.2313 54.0894 29.0884C54.11 33.629 54.11 42.5992 54.11 42.5992Z" fill="#0328EE"></path>
<path d="M53.0331 21.4964C51.253 18.1418 47.7504 16 43.8943 16H23.3804C19.5243 16 16.0217 18.1418 14.2417 21.4964C13.8429 22.2467 14.032 23.1819 14.696 23.7122L29.958 35.9198C31.0269 36.7832 32.3219 37.2128 33.6168 37.2128C33.6251 37.2128 33.6312 37.2128 33.6374 37.2128C33.6436 37.2128 33.6518 37.2128 33.6579 37.2128C34.9529 37.2128 36.2479 36.7832 37.3167 35.9198L52.5788 23.7122C53.2427 23.1819 53.4318 22.2467 53.0331 21.4964Z" fill="#0328EE"></path>
</g>
<defs>
<clipPath id="clip0_19_9890">
<rect width="42" height="37" fill="white" transform="translate(13 16)"></rect>
</clipPath>
</defs>
</svg>
`,className:"w-html-embed"}),c.jsx(_,{className:"w-text-1 cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh c689l5d c1dhz37v",children:"Subscribe to our crypto news weekly newsletter!"})]}),c.jsx(e,{className:"w-box c12sm2j2",children:c.jsxs(oc,{state:t,onStateChange:o=>{t=o,s(t)},className:"w-webhook-form",children:[(t==="initial"||t==="error")&&c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2",children:c.jsxs(e,{className:"w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1fhkm63 clv8gve cavd3zn c1482uel",children:[c.jsx(dc,{placeholder:"Enter email address",required:!0,type:"email",name:"email",id:"inputEmail","aria-label":"email",className:"w-text-input cihfpxt cb4vmi8 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c7nkggm cjj9pla c15s6fjz c1a8d7ts cns5ylf c557ax3 cl60rel c2zsigv c1xzr8sz cz7iwz0 c78vmx4"}),c.jsx(X,{className:"w-button cnrz8fp cl8m66n c1b2tb9q c1xm4ef6 c1a8d7ts c122t6uk cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p cdwd3jx c1g9ftel cuf9c1i cimc1rz c1f6o08m codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk c173sbc c1k8qtmf c1c2dawy",children:"SUbscribe"})]})}),t==="success"&&c.jsx(e,{className:"w-box",children:"Thank you for getting in touch!"}),t==="error"&&c.jsx(e,{className:"w-box cle73z7",children:"Sorry, something went wrong."})]})})]})}),c.jsx(e,{tag:"section",className:"w-box cna0hdz c1mzb2kd",children:c.jsxs(e,{className:"w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub",children:[c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c1qyy4dh c18v2pa2 cuj80l1 cq4dxli czqy8m4 c10x096o c174sw29",children:[c.jsx(g,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh",children:"Latest Posts"}),c.jsxs(e,{className:"w-box cry9bxc c10zkoym ct8c5y2 c1y4fwd4",children:[c.jsx(M,{className:"w-label",children:c.jsx(R,{checked:!!((k=a==null?void 0:a.search)!=null&&k.all),onCheckedChange:o=>{n=o,i(n)},name:"all",value:"yes",className:"w-checkbox cgl7u82 crlid6h caoqbwa c1aguln c1xoi2p2 cnrz8fp c1uadasu cjp3ti0 cd3iwfe c1yhcvvf cwc6hbl c11r52nx codg43x cax3zcx ce4uoav c141dmt7 cu4mxbp c3m619z c2drm8w c10t2rq c1i2efm0 c8ne9c9 c12jb9ox c1tdd38y c1cb3242 c176f98h cdmza2d c1oqsqr1 c1xq0r0a c1hjucea c14mgtun",children:c.jsx(_,{tag:"span",className:"w-text-1",children:"All"})})}),c.jsx(M,{className:"w-label",children:c.jsx(R,{checked:!!((w=a==null?void 0:a.search)!=null&&w.product),onCheckedChange:o=>{d=o,b(d)},name:"product",value:"yes",className:"w-checkbox cgl7u82 crlid6h caoqbwa c1aguln c1xoi2p2 cnrz8fp c1uadasu cjp3ti0 cd3iwfe c1yhcvvf cwc6hbl c11r52nx codg43x cax3zcx ce4uoav c141dmt7 cu4mxbp c3m619z c2drm8w c10t2rq c1i2efm0 c8ne9c9 c12jb9ox c1tdd38y c1cb3242 c176f98h cdmza2d c1oqsqr1 c1xq0r0a c1hjucea c14mgtun",children:c.jsx(_,{tag:"span",className:"w-text-1",children:"Product"})})}),c.jsx(M,{className:"w-label",children:c.jsx(R,{checked:!!((z=a==null?void 0:a.search)!=null&&z.tutorials),onCheckedChange:o=>{p=o,v(p)},name:"tutorials",value:"yes",className:"w-checkbox cgl7u82 crlid6h caoqbwa c1aguln c1xoi2p2 cnrz8fp c1uadasu cjp3ti0 cd3iwfe c1yhcvvf cwc6hbl c11r52nx codg43x cax3zcx ce4uoav c141dmt7 cu4mxbp c3m619z c2drm8w c10t2rq c1i2efm0 c8ne9c9 c12jb9ox c1tdd38y c1cb3242 c176f98h cdmza2d c1oqsqr1 c1xq0r0a c1hjucea c14mgtun",children:c.jsx(_,{tag:"span",className:"w-text-1",children:"Tutorials"})})})]})]}),c.jsxs(e,{className:"w-box copqmak c1s46o9r cejtdrx co2qwzx c1vrexag c1cdc69r cx6c9kw c174sw29 c1ciuywf",children:[c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:[c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image"}),c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6",children:"Products"})]}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc",children:[c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]}),c.jsx(q,{className:"w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt"}),c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1",children:[c.jsx(h,{src:"/assets/div_4suNP1kaJXee07vc7AK9U.png",width:120,height:120,alt:"Author picture",className:"w-image cb6cng2 cnn4ttu"}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h",children:[c.jsx(r,{className:"w-paragraph c1cb3y4c",children:"ALEX TURNER"}),c.jsx(r,{className:"w-paragraph",children:"AUGUST 2, 2021"})]})]})]}),c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:[c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image"}),c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6",children:"Products"})]}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc",children:[c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]}),c.jsx(q,{className:"w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt"}),c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1",children:[c.jsx(h,{src:"/assets/div_4suNP1kaJXee07vc7AK9U.png",width:120,height:120,alt:"Author picture",className:"w-image cb6cng2 cnn4ttu"}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h",children:[c.jsx(r,{className:"w-paragraph c1cb3y4c",children:"ALEX TURNER"}),c.jsx(r,{className:"w-paragraph",children:"AUGUST 2, 2021"})]})]})]}),c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:[c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image"}),c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6",children:"Products"})]}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc",children:[c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]}),c.jsx(q,{className:"w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt"}),c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1",children:[c.jsx(h,{src:"/assets/div_4suNP1kaJXee07vc7AK9U.png",width:120,height:120,alt:"Author picture",className:"w-image cb6cng2 cnn4ttu"}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h",children:[c.jsx(r,{className:"w-paragraph c1cb3y4c",children:"ALEX TURNER"}),c.jsx(r,{className:"w-paragraph",children:"AUGUST 2, 2021"})]})]})]}),c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:[c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image"}),c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6",children:"Products"})]}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc",children:[c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]}),c.jsx(q,{className:"w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt"}),c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1",children:[c.jsx(h,{src:"/assets/div_4suNP1kaJXee07vc7AK9U.png",width:120,height:120,alt:"Author picture",className:"w-image cb6cng2 cnn4ttu"}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h",children:[c.jsx(r,{className:"w-paragraph c1cb3y4c",children:"ALEX TURNER"}),c.jsx(r,{className:"w-paragraph",children:"AUGUST 2, 2021"})]})]})]}),c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:[c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image"}),c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6",children:"Products"})]}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc",children:[c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]}),c.jsx(q,{className:"w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt"}),c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1",children:[c.jsx(h,{src:"/assets/div_4suNP1kaJXee07vc7AK9U.png",width:120,height:120,alt:"Author picture",className:"w-image cb6cng2 cnn4ttu"}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h",children:[c.jsx(r,{className:"w-paragraph c1cb3y4c",children:"ALEX TURNER"}),c.jsx(r,{className:"w-paragraph",children:"AUGUST 2, 2021"})]})]})]}),c.jsxs(l,{href:"/blog/:slug",className:"w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn",children:[c.jsx(h,{alt:"Laptop with colorful lighting",src:"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png",width:764,height:430,className:"w-image"}),c.jsx(e,{className:"w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6",children:"Products"})]}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc",children:[c.jsx(g,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh",children:"The Basics about Cryptocurrency"}),c.jsx(r,{className:"w-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."})]}),c.jsx(q,{className:"w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt"}),c.jsxs(e,{className:"w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1",children:[c.jsx(h,{src:"/assets/div_4suNP1kaJXee07vc7AK9U.png",width:120,height:120,alt:"Author picture",className:"w-image cb6cng2 cnn4ttu"}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h",children:[c.jsx(r,{className:"w-paragraph c1cb3y4c",children:"ALEX TURNER"}),c.jsx(r,{className:"w-paragraph",children:"AUGUST 2, 2021"})]})]})]})]})]})})]}),c.jsx(f,{children:c.jsx(j,{children:c.jsx(e,{tag:"footer",className:"w-box cna0hdz c1mzb2kd cfgetg2"})})})]})})},vc=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let n=t.socialImageUrl;return t.socialImageAssetName&&(n=`${s}${I({src:t.socialImageAssetName,format:"raw"})}`),c.jsxs(c.Fragment,{children:[a.url&&c.jsx("meta",{property:"og:url",content:a.url}),c.jsx("title",{children:t.title}),c.jsx("meta",{property:"og:title",content:t.title}),t.description&&c.jsxs(c.Fragment,{children:[c.jsx("meta",{name:"description",content:t.description}),c.jsx("meta",{property:"og:description",content:t.description})]}),c.jsx("meta",{property:"og:type",content:"website"}),B,n&&c.jsx("meta",{property:"og:image",content:t.socialImageUrl}),B,t.excludePageFromSearch&&c.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:i,content:d})=>c.jsx("meta",{property:i,content:d},i)),F&&c.jsx("link",{rel:"icon",href:I({src:`${A}${F.name}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),yc.map(i=>c.jsx("link",{rel:"preload",href:`${A}${i.name}`,as:"font",crossOrigin:"anonymous"},i.id)),bc.map(i=>c.jsx("link",{rel:"preload",href:`${A}${i.name}`,as:"image"},i.id))]})},kc=Object.freeze(Object.defineProperty({__proto__:null,Head:vc},Symbol.toStringTag,{value:"Module"})),zc=({data:a})=>{const{system:t,resources:s,url:n}=a;return c.jsx(nc.Provider,{value:{imageLoader:I,assetBaseUrl:A,resources:s},children:c.jsx(jc,{system:t},n)})},Nc=Object.freeze(Object.defineProperty({__proto__:null,default:zc},Symbol.toStringTag,{value:"Module"})),Ac={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:ic}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/blog/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:kc}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/blog/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Nc}}};export{Ac as configValuesSerialized};
