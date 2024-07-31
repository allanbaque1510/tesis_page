import{g as et,K as I,W as ot,f as nt,n as j,m as St,r as s,C as q,X as rt,h as w,i as st,L as Nt}from"./index-21055db3.js";const xt=new I("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),Ot=new I("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),wt=new I("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),jt=new I("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),Et=new I("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Pt=new I("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Tt=t=>{const{componentCls:e,iconCls:i,antCls:n,badgeShadowSize:o,motionDurationSlow:d,textFontSize:l,textFontSizeSM:y,statusSize:h,dotSize:g,textFontWeight:m,indicatorHeight:a,indicatorHeightSM:c,marginXS:f,calc:C}=t,u=`${n}-scroll-number`,v=ot(t,(b,$)=>{let{darkColor:S}=$;return{[`&${e} ${e}-color-${b}`]:{background:S,[`&:not(${e}-count)`]:{color:S},"a:hover &":{background:S}}}});return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},nt(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{display:"inline-flex",justifyContent:"center",zIndex:t.indicatorZIndex,minWidth:a,height:a,color:t.badgeTextColor,fontWeight:m,fontSize:l,lineHeight:j(a),whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:C(a).div(2).equal(),boxShadow:`0 0 0 ${j(o)} ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:c,height:c,fontSize:y,lineHeight:j(c),borderRadius:C(c).div(2).equal()},[`${e}-multiple-words`]:{padding:`0 ${j(t.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${e}-dot`]:{zIndex:t.indicatorZIndex,width:g,minWidth:g,height:g,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${j(o)} ${t.badgeShadowColor}`},[`${e}-dot${u}`]:{transition:`background ${d}`},[`${e}-count, ${e}-dot, ${u}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${i}-spin`]:{animationName:Pt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:h,height:h,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{overflow:"visible",color:t.colorInfo,backgroundColor:t.colorInfo,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:o,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:xt,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:f,color:t.colorText,fontSize:t.fontSize}}}),v),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:Ot,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:wt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:jt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:Et,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${u}-custom-component, ${e}-count`]:{transform:"none"},[`${u}-custom-component, ${u}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${u}`]:{overflow:"hidden",[`${u}-only`]:{position:"relative",display:"inline-block",height:a,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${u}-only-unit`]:{height:a,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${u}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${u}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},it=t=>{const{fontHeight:e,lineWidth:i,marginXS:n,colorBorderBg:o}=t,d=e,l=i,y=t.colorBgContainer,h=t.colorError,g=t.colorErrorHover;return St(t,{badgeFontHeight:d,badgeShadowSize:l,badgeTextColor:y,badgeColor:h,badgeColorHover:g,badgeShadowColor:o,badgeProcessingDuration:"1.2s",badgeRibbonOffset:n,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},at=t=>{const{fontSize:e,lineHeight:i,fontSizeSM:n,lineWidth:o}=t;return{indicatorZIndex:"auto",indicatorHeight:Math.round(e*i)-2*o,indicatorHeightSM:e,dotSize:n/2,textFontSize:n,textFontSizeSM:n,textFontWeight:"normal",statusSize:n/2}},It=et("Badge",t=>{const e=it(t);return Tt(e)},at),zt=t=>{const{antCls:e,badgeFontHeight:i,marginXS:n,badgeRibbonOffset:o,calc:d}=t,l=`${e}-ribbon`,y=`${e}-ribbon-wrapper`,h=ot(t,(g,m)=>{let{darkColor:a}=m;return{[`&${l}-color-${g}`]:{background:a,color:a}}});return{[`${y}`]:{position:"relative"},[`${l}`]:Object.assign(Object.assign(Object.assign(Object.assign({},nt(t)),{position:"absolute",top:n,padding:`0 ${j(t.paddingXS)}`,color:t.colorPrimary,lineHeight:j(i),whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${l}-text`]:{color:t.colorTextLightSolid},[`${l}-corner`]:{position:"absolute",top:"100%",width:o,height:o,color:"currentcolor",border:`${j(d(o).div(2).equal())} solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),h),{[`&${l}-placement-end`]:{insetInlineEnd:d(o).mul(-1).equal(),borderEndEndRadius:0,[`${l}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${l}-placement-start`]:{insetInlineStart:d(o).mul(-1).equal(),borderEndStartRadius:0,[`${l}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},Bt=et(["Badge","Ribbon"],t=>{const e=it(t);return zt(e)},at),Rt=t=>{const{className:e,prefixCls:i,style:n,color:o,children:d,text:l,placement:y="end",rootClassName:h}=t,{getPrefixCls:g,direction:m}=s.useContext(q),a=g("ribbon",i),c=`${a}-wrapper`,[f,C,u]=Bt(a,c),v=rt(o,!1),b=w(a,`${a}-placement-${y}`,{[`${a}-rtl`]:m==="rtl",[`${a}-color-${o}`]:v},e),$={},S={};return o&&!v&&($.background=o,S.color=o),f(s.createElement("div",{className:w(c,h,C,u)},d,s.createElement("div",{className:w(b,C),style:Object.assign(Object.assign({},$),n)},s.createElement("span",{className:`${a}-text`},l),s.createElement("div",{className:`${a}-corner`,style:S}))))},Dt=Rt;function tt(t){let{prefixCls:e,value:i,current:n,offset:o=0}=t,d;return o&&(d={position:"absolute",top:`${o}00%`,left:0}),s.createElement("span",{style:d,className:w(`${e}-only-unit`,{current:n})},i)}function Wt(t,e,i){let n=t,o=0;for(;(n+10)%10!==e;)n+=i,o+=i;return o}function Ft(t){const{prefixCls:e,count:i,value:n}=t,o=Number(n),d=Math.abs(i),[l,y]=s.useState(o),[h,g]=s.useState(d),m=()=>{y(o),g(d)};s.useEffect(()=>{const f=setTimeout(()=>{m()},1e3);return()=>{clearTimeout(f)}},[o]);let a,c;if(l===o||Number.isNaN(o)||Number.isNaN(l))a=[s.createElement(tt,Object.assign({},t,{key:o,current:!0}))],c={transition:"none"};else{a=[];const f=o+10,C=[];for(let b=o;b<=f;b+=1)C.push(b);const u=C.findIndex(b=>b%10===l);a=C.map((b,$)=>{const S=b%10;return s.createElement(tt,Object.assign({},t,{key:b,value:S,offset:$-u,current:$===u}))});const v=h<d?1:-1;c={transform:`translateY(${-Wt(l,o,v)}00%)`}}return s.createElement("span",{className:`${e}-only`,style:c,onTransitionEnd:m},a)}var Ht=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]]);return i};const _t=s.forwardRef((t,e)=>{const{prefixCls:i,count:n,className:o,motionClassName:d,style:l,title:y,show:h,component:g="sup",children:m}=t,a=Ht(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:c}=s.useContext(q),f=c("scroll-number",i),C=Object.assign(Object.assign({},a),{"data-show":h,style:l,className:w(f,o,d),title:y});let u=n;if(n&&Number(n)%1===0){const v=String(n).split("");u=s.createElement("bdi",null,v.map((b,$)=>s.createElement(Ft,{prefixCls:f,count:Number(n),value:b,key:v.length-$})))}return l&&l.borderColor&&(C.style=Object.assign(Object.assign({},l),{boxShadow:`0 0 0 1px ${l.borderColor} inset`})),m?st(m,v=>({className:w(`${f}-custom-component`,v==null?void 0:v.className,d)})):s.createElement(g,Object.assign({},C,{ref:e}),u)}),Mt=_t;var Zt=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]]);return i};const Vt=s.forwardRef((t,e)=>{var i,n,o,d,l;const{prefixCls:y,scrollNumberPrefixCls:h,children:g,status:m,text:a,color:c,count:f=null,overflowCount:C=99,dot:u=!1,size:v="default",title:b,offset:$,style:S,className:ct,rootClassName:dt,classNames:O,styles:N,showZero:F=!1}=t,K=Zt(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:U,direction:H,badge:r}=s.useContext(q),p=U("badge",y),[Y,ut,mt]=It(p),_=f>C?`${C}+`:f,B=_==="0"||_===0,bt=f===null||B&&!F,M=(m!=null||c!=null)&&bt,z=u&&!B,E=z?"":_,P=s.useMemo(()=>(E==null||E===""||B&&!F)&&!z,[E,B,F,z]),k=s.useRef(f);P||(k.current=f);const T=k.current,G=s.useRef(E);P||(G.current=E);const Z=G.current,J=s.useRef(z);P||(J.current=z);const R=s.useMemo(()=>{if(!$)return Object.assign(Object.assign({},r==null?void 0:r.style),S);const x={marginTop:$[1]};return H==="rtl"?x.left=parseInt($[0],10):x.right=-parseInt($[0],10),Object.assign(Object.assign(Object.assign({},x),r==null?void 0:r.style),S)},[H,$,S,r==null?void 0:r.style]),gt=b??(typeof T=="string"||typeof T=="number"?T:void 0),ft=P||!a?null:s.createElement("span",{className:`${p}-status-text`},a),pt=!T||typeof T!="object"?void 0:st(T,x=>({style:Object.assign(Object.assign({},R),x.style)})),D=rt(c,!1),Ct=w(O==null?void 0:O.indicator,(i=r==null?void 0:r.classNames)===null||i===void 0?void 0:i.indicator,{[`${p}-status-dot`]:M,[`${p}-status-${m}`]:!!m,[`${p}-color-${c}`]:D}),V={};c&&!D&&(V.color=c,V.background=c);const Q=w(p,{[`${p}-status`]:M,[`${p}-not-a-wrapper`]:!g,[`${p}-rtl`]:H==="rtl"},ct,dt,r==null?void 0:r.className,(n=r==null?void 0:r.classNames)===null||n===void 0?void 0:n.root,O==null?void 0:O.root,ut,mt);if(!g&&M){const x=R.color;return Y(s.createElement("span",Object.assign({},K,{className:Q,style:Object.assign(Object.assign(Object.assign({},N==null?void 0:N.root),(o=r==null?void 0:r.styles)===null||o===void 0?void 0:o.root),R)}),s.createElement("span",{className:Ct,style:Object.assign(Object.assign(Object.assign({},N==null?void 0:N.indicator),(d=r==null?void 0:r.styles)===null||d===void 0?void 0:d.indicator),V)}),a&&s.createElement("span",{style:{color:x},className:`${p}-status-text`},a)))}return Y(s.createElement("span",Object.assign({ref:e},K,{className:Q,style:Object.assign(Object.assign({},(l=r==null?void 0:r.styles)===null||l===void 0?void 0:l.root),N==null?void 0:N.root)}),g,s.createElement(Nt,{visible:!P,motionName:`${p}-zoom`,motionAppear:!1,motionDeadline:1e3},x=>{let{className:vt,ref:$t}=x;var A,L;const ht=U("scroll-number",h),X=J.current,yt=w(O==null?void 0:O.indicator,(A=r==null?void 0:r.classNames)===null||A===void 0?void 0:A.indicator,{[`${p}-dot`]:X,[`${p}-count`]:!X,[`${p}-count-sm`]:v==="small",[`${p}-multiple-words`]:!X&&Z&&Z.toString().length>1,[`${p}-status-${m}`]:!!m,[`${p}-color-${c}`]:D});let W=Object.assign(Object.assign(Object.assign({},N==null?void 0:N.indicator),(L=r==null?void 0:r.styles)===null||L===void 0?void 0:L.indicator),R);return c&&!D&&(W=W||{},W.background=c),s.createElement(Mt,{prefixCls:ht,show:!P,motionClassName:vt,className:yt,count:Z,title:gt,style:W,key:"scrollNumber",ref:$t},pt)}),ft))}),lt=Vt;lt.Ribbon=Dt;const Lt=lt;export{Lt as B};
