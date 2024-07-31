import{r as s,as as _e,ai as W,af as he,ag as ee,M as Ne,k as Oe,R as h,_ as pe,h as $,J as Ze,ah as me,z as Ge,C as Pe,v as Te,av as Xe,ap as je,am as Ve,al as Be,ak as Je,b1 as Ae,b2 as Ie,Y as $e,aH as Ue,w as Fe}from"./index-21055db3.js";import{B as Me,t as qe,r as xe,u as De}from"./BaseInput-9763bb7b.js";import{a as Le,b as Ee,g as ke}from"./row-36c7c26f.js";var Qe=["show"];function He(e,o){return s.useMemo(function(){var a={};o&&(a.show=_e(o)==="object"&&o.formatter?o.formatter:!!o),a=W(W({},a),e);var t=a,n=t.show,g=he(t,Qe);return W(W({},g),{},{show:!!n,showFormatter:typeof n=="function"?n:void 0,strategy:g.strategy||function(i){return i.length}})},[e,o])}var et=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],tt=s.forwardRef(function(e,o){var a=e.autoComplete,t=e.onChange,n=e.onFocus,g=e.onBlur,i=e.onPressEnter,u=e.onKeyDown,A=e.prefixCls,d=A===void 0?"rc-input":A,p=e.disabled,I=e.htmlSize,w=e.className,k=e.maxLength,F=e.suffix,M=e.showCount,J=e.count,te=e.type,_=te===void 0?"text":te,l=e.classes,C=e.classNames,P=e.styles,R=e.onCompositionStart,S=e.onCompositionEnd,c=he(e,et),f=s.useState(!1),Y=ee(f,2),N=Y[0],v=Y[1],T=s.useRef(!1),b=s.useRef(null),Z=function(r){b.current&&qe(b.current,r)},ae=Ne(e.defaultValue,{value:e.value}),j=ee(ae,2),D=j[0],H=j[1],K=D==null?"":String(D),O=s.useState(null),L=ee(O,2),z=L[0],E=L[1],x=He(J,M),G=x.max||k,re=x.strategy(K),ce=!!G&&re>G;s.useImperativeHandle(o,function(){return{focus:Z,blur:function(){var r;(r=b.current)===null||r===void 0||r.blur()},setSelectionRange:function(r,q,de){var oe;(oe=b.current)===null||oe===void 0||oe.setSelectionRange(r,q,de)},select:function(){var r;(r=b.current)===null||r===void 0||r.select()},input:b.current}}),s.useEffect(function(){v(function(y){return y&&p?!1:y})},[p]);var ie=function(r,q,de){var oe=q;if(!T.current&&x.exceedFormatter&&x.max&&x.strategy(q)>x.max){if(oe=x.exceedFormatter(q,{max:x.max}),q!==oe){var fe,le;E([((fe=b.current)===null||fe===void 0?void 0:fe.selectionStart)||0,((le=b.current)===null||le===void 0?void 0:le.selectionEnd)||0])}}else if(de.source==="compositionEnd")return;H(oe),b.current&&xe(b.current,r,t,oe)};s.useEffect(function(){if(z){var y;(y=b.current)===null||y===void 0||y.setSelectionRange.apply(y,Oe(z))}},[z]);var ve=function(r){ie(r,r.target.value,{source:"change"})},V=function(r){T.current=!1,ie(r,r.currentTarget.value,{source:"compositionEnd"}),S==null||S(r)},ne=function(r){i&&r.key==="Enter"&&i(r),u==null||u(r)},U=function(r){v(!0),n==null||n(r)},se=function(r){v(!1),g==null||g(r)},be=function(r){H(""),Z(),b.current&&xe(b.current,r,t)},ge=ce&&"".concat(d,"-out-of-range"),Ce=function(){var r=Ze(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return h.createElement("input",pe({autoComplete:a},r,{onChange:ve,onFocus:U,onBlur:se,onKeyDown:ne,className:$(d,me({},"".concat(d,"-disabled"),p),C==null?void 0:C.input),style:P==null?void 0:P.input,ref:b,size:I,type:_,onCompositionStart:function(de){T.current=!0,R==null||R(de)},onCompositionEnd:V}))},Se=function(){var r=Number(G)>0;if(F||x.show){var q=x.showFormatter?x.showFormatter({value:K,count:re,maxLength:G}):"".concat(re).concat(r?" / ".concat(G):"");return h.createElement(h.Fragment,null,x.show&&h.createElement("span",{className:$("".concat(d,"-show-count-suffix"),me({},"".concat(d,"-show-count-has-suffix"),!!F),C==null?void 0:C.count),style:W({},P==null?void 0:P.count)},q),F)}return null};return h.createElement(Me,pe({},c,{prefixCls:d,className:$(w,ge),handleReset:be,value:K,focused:N,triggerFocus:Z,suffix:Se(),disabled:p,classes:l,classNames:C,styles:P}),Ce())});const at=e=>{let o;return typeof e=="object"&&(e!=null&&e.clearIcon)?o=e:e&&(o={clearIcon:h.createElement(Ge,null)}),o},Ke=at;function nt(e,o){const a=s.useRef([]),t=()=>{a.current.push(setTimeout(()=>{var n,g,i,u;!((n=e.current)===null||n===void 0)&&n.input&&((g=e.current)===null||g===void 0?void 0:g.input.getAttribute("type"))==="password"&&(!((i=e.current)===null||i===void 0)&&i.input.hasAttribute("value"))&&((u=e.current)===null||u===void 0||u.input.removeAttribute("value"))}))};return s.useEffect(()=>(o&&t(),()=>a.current.forEach(n=>{n&&clearTimeout(n)})),[]),t}function ot(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var rt=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function st(e,o){if(!e)return;e.focus(o);const{cursor:a}=o||{};if(a){const t=e.value.length;switch(a){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t);break}}}const lt=s.forwardRef((e,o)=>{var a;const{prefixCls:t,bordered:n=!0,status:g,size:i,disabled:u,onBlur:A,onFocus:d,suffix:p,allowClear:I,addonAfter:w,addonBefore:k,className:F,style:M,styles:J,rootClassName:te,onChange:_,classNames:l,variant:C}=e,P=rt(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:R,direction:S,input:c}=h.useContext(Pe),f=R("input",t),Y=s.useRef(null),N=Te(f),[v,T,b]=De(f,N),{compactSize:Z,compactItemClassnames:ae}=Xe(f,S),j=je(U=>{var se;return(se=i??Z)!==null&&se!==void 0?se:U}),D=h.useContext(Ve),H=u??D,{status:K,hasFeedback:O,feedbackIcon:L}=s.useContext(Be),z=ke(K,g),E=ot(e)||!!O;s.useRef(E);const x=nt(Y,!0),G=U=>{x(),A==null||A(U)},re=U=>{x(),d==null||d(U)},ce=U=>{x(),_==null||_(U)},ie=(O||p)&&h.createElement(h.Fragment,null,p,O&&L),ve=Ke(I??(c==null?void 0:c.allowClear)),[V,ne]=Le(C,n);return v(h.createElement(tt,Object.assign({ref:Je(o,Y),prefixCls:f,autoComplete:c==null?void 0:c.autoComplete},P,{disabled:H,onBlur:G,onFocus:re,style:Object.assign(Object.assign({},c==null?void 0:c.style),M),styles:Object.assign(Object.assign({},c==null?void 0:c.styles),J),suffix:ie,allowClear:ve,className:$(F,te,b,N,ae,c==null?void 0:c.className),onChange:ce,addonAfter:w&&h.createElement(Ae,null,h.createElement(Ie,{override:!0,status:!0},w)),addonBefore:k&&h.createElement(Ae,null,h.createElement(Ie,{override:!0,status:!0},k)),classNames:Object.assign(Object.assign(Object.assign({},l),c==null?void 0:c.classNames),{input:$({[`${f}-sm`]:j==="small",[`${f}-lg`]:j==="large",[`${f}-rtl`]:S==="rtl"},l==null?void 0:l.input,(a=c==null?void 0:c.classNames)===null||a===void 0?void 0:a.input,T),variant:$({[`${f}-${V}`]:ne},Ee(f,z)),affixWrapper:$({[`${f}-affix-wrapper-sm`]:j==="small",[`${f}-affix-wrapper-lg`]:j==="large",[`${f}-affix-wrapper-rtl`]:S==="rtl"},T),wrapper:$({[`${f}-group-rtl`]:S==="rtl"},T),groupWrapper:$({[`${f}-group-wrapper-sm`]:j==="small",[`${f}-group-wrapper-lg`]:j==="large",[`${f}-group-wrapper-rtl`]:S==="rtl",[`${f}-group-wrapper-${V}`]:ne},Ee(`${f}-group-wrapper`,z,O),T)})})))}),St=lt;var it=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,ut=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ye={},X;function ct(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(o&&ye[a])return ye[a];var t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing")||t.getPropertyValue("-moz-box-sizing")||t.getPropertyValue("-webkit-box-sizing"),g=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),i=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),u=ut.map(function(d){return"".concat(d,":").concat(t.getPropertyValue(d))}).join(";"),A={sizingStyle:u,paddingSize:g,borderSize:i,boxSizing:n};return o&&a&&(ye[a]=A),A}function dt(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;X||(X=document.createElement("textarea"),X.setAttribute("tab-index","-1"),X.setAttribute("aria-hidden","true"),document.body.appendChild(X)),e.getAttribute("wrap")?X.setAttribute("wrap",e.getAttribute("wrap")):X.removeAttribute("wrap");var n=ct(e,o),g=n.paddingSize,i=n.borderSize,u=n.boxSizing,A=n.sizingStyle;X.setAttribute("style","".concat(A,";").concat(it)),X.value=e.value||e.placeholder||"";var d=void 0,p=void 0,I,w=X.scrollHeight;if(u==="border-box"?w+=i:u==="content-box"&&(w-=g),a!==null||t!==null){X.value=" ";var k=X.scrollHeight-g;a!==null&&(d=k*a,u==="border-box"&&(d=d+g+i),w=Math.max(d,w)),t!==null&&(p=k*t,u==="border-box"&&(p=p+g+i),I=w>p?"":"hidden",w=Math.min(p,w))}var F={height:w,overflowY:I,resize:"none"};return d&&(F.minHeight=d),p&&(F.maxHeight=p),F}var ft=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],we=0,Re=1,ze=2,vt=s.forwardRef(function(e,o){var a=e,t=a.prefixCls;a.onPressEnter;var n=a.defaultValue,g=a.value,i=a.autoSize,u=a.onResize,A=a.className,d=a.style,p=a.disabled,I=a.onChange;a.onInternalAutoSize;var w=he(a,ft),k=Ne(n,{value:g,postState:function(E){return E??""}}),F=ee(k,2),M=F[0],J=F[1],te=function(E){J(E.target.value),I==null||I(E)},_=s.useRef();s.useImperativeHandle(o,function(){return{textArea:_.current}});var l=s.useMemo(function(){return i&&_e(i)==="object"?[i.minRows,i.maxRows]:[]},[i]),C=ee(l,2),P=C[0],R=C[1],S=!!i,c=function(){try{if(document.activeElement===_.current){var E=_.current,x=E.selectionStart,G=E.selectionEnd,re=E.scrollTop;_.current.setSelectionRange(x,G),_.current.scrollTop=re}}catch{}},f=s.useState(ze),Y=ee(f,2),N=Y[0],v=Y[1],T=s.useState(),b=ee(T,2),Z=b[0],ae=b[1],j=function(){v(we)};$e(function(){S&&j()},[g,P,R,S]),$e(function(){if(N===we)v(Re);else if(N===Re){var z=dt(_.current,!1,P,R);v(ze),ae(z)}else c()},[N]);var D=s.useRef(),H=function(){Fe.cancel(D.current)},K=function(E){N===ze&&(u==null||u(E),i&&(H(),D.current=Fe(function(){j()})))};s.useEffect(function(){return H},[]);var O=S?Z:null,L=W(W({},d),O);return(N===we||N===Re)&&(L.overflowY="hidden",L.overflowX="hidden"),s.createElement(Ue,{onResize:K,disabled:!(i||u)},s.createElement("textarea",pe({},w,{ref:_,style:L,className:$(t,A,me({},"".concat(t,"-disabled"),p)),disabled:p,value:M,onChange:te})))}),mt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"],gt=h.forwardRef(function(e,o){var a,t,n=e.defaultValue,g=e.value,i=e.onFocus,u=e.onBlur,A=e.onChange,d=e.allowClear,p=e.maxLength,I=e.onCompositionStart,w=e.onCompositionEnd,k=e.suffix,F=e.prefixCls,M=F===void 0?"rc-textarea":F,J=e.showCount,te=e.count,_=e.className,l=e.style,C=e.disabled,P=e.hidden,R=e.classNames,S=e.styles,c=e.onResize,f=he(e,mt),Y=Ne(n,{value:g,defaultValue:n}),N=ee(Y,2),v=N[0],T=N[1],b=v==null?"":String(v),Z=h.useState(!1),ae=ee(Z,2),j=ae[0],D=ae[1],H=h.useRef(!1),K=h.useState(null),O=ee(K,2),L=O[0],z=O[1],E=s.useRef(null),x=function(){var m;return(m=E.current)===null||m===void 0?void 0:m.textArea},G=function(){x().focus()};s.useImperativeHandle(o,function(){return{resizableTextArea:E.current,focus:G,blur:function(){x().blur()}}}),s.useEffect(function(){D(function(B){return!C&&B})},[C]);var re=h.useState(null),ce=ee(re,2),ie=ce[0],ve=ce[1];h.useEffect(function(){if(ie){var B;(B=x()).setSelectionRange.apply(B,Oe(ie))}},[ie]);var V=He(te,J),ne=(a=V.max)!==null&&a!==void 0?a:p,U=Number(ne)>0,se=V.strategy(b),be=!!ne&&se>ne,ge=function(m,Q){var ue=Q;!H.current&&V.exceedFormatter&&V.max&&V.strategy(Q)>V.max&&(ue=V.exceedFormatter(Q,{max:V.max}),Q!==ue&&ve([x().selectionStart||0,x().selectionEnd||0])),T(ue),xe(m.currentTarget,m,A,ue)},Ce=function(m){H.current=!0,I==null||I(m)},Se=function(m){H.current=!1,ge(m,m.currentTarget.value),w==null||w(m)},y=function(m){ge(m,m.target.value)},r=function(m){var Q=f.onPressEnter,ue=f.onKeyDown;m.key==="Enter"&&Q&&Q(m),ue==null||ue(m)},q=function(m){D(!0),i==null||i(m)},de=function(m){D(!1),u==null||u(m)},oe=function(m){T(""),G(),xe(x(),m,A)},fe=k,le;V.show&&(V.showFormatter?le=V.showFormatter({value:b,count:se,maxLength:ne}):le="".concat(se).concat(U?" / ".concat(ne):""),fe=h.createElement(h.Fragment,null,fe,h.createElement("span",{className:$("".concat(M,"-data-count"),R==null?void 0:R.count),style:S==null?void 0:S.count},le)));var We=function(m){var Q;c==null||c(m),(Q=x())!==null&&Q!==void 0&&Q.style.height&&z(!0)},Ye=!f.autoSize&&!J&&!d;return h.createElement(Me,{value:b,allowClear:d,handleReset:oe,suffix:fe,prefixCls:M,classNames:W(W({},R),{},{affixWrapper:$(R==null?void 0:R.affixWrapper,(t={},me(t,"".concat(M,"-show-count"),J),me(t,"".concat(M,"-textarea-allow-clear"),d),t))}),disabled:C,focused:j,className:$(_,be&&"".concat(M,"-out-of-range")),style:W(W({},l),L&&!Ye?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof le=="string"?le:void 0}},hidden:P},h.createElement(vt,pe({},f,{maxLength:p,onKeyDown:r,onChange:y,onFocus:q,onBlur:de,onCompositionStart:Ce,onCompositionEnd:Se,className:$(R==null?void 0:R.textarea),style:W(W({},S==null?void 0:S.textarea),{},{resize:l==null?void 0:l.resize}),disabled:C,prefixCls:M,onResize:We,ref:E})))}),pt=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const xt=s.forwardRef((e,o)=>{var a,t;const{prefixCls:n,bordered:g=!0,size:i,disabled:u,status:A,allowClear:d,classNames:p,rootClassName:I,className:w,style:k,styles:F,variant:M}=e,J=pt(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant"]),{getPrefixCls:te,direction:_,textArea:l}=s.useContext(Pe),C=je(i),P=s.useContext(Ve),R=u??P,{status:S,hasFeedback:c,feedbackIcon:f}=s.useContext(Be),Y=ke(S,A),N=s.useRef(null);s.useImperativeHandle(o,()=>{var K;return{resizableTextArea:(K=N.current)===null||K===void 0?void 0:K.resizableTextArea,focus:O=>{var L,z;st((z=(L=N.current)===null||L===void 0?void 0:L.resizableTextArea)===null||z===void 0?void 0:z.textArea,O)},blur:()=>{var O;return(O=N.current)===null||O===void 0?void 0:O.blur()}}});const v=te("input",n),T=Te(v),[b,Z,ae]=De(v,T),[j,D]=Le(M,g),H=Ke(d??(l==null?void 0:l.allowClear));return b(s.createElement(gt,Object.assign({autoComplete:l==null?void 0:l.autoComplete},J,{style:Object.assign(Object.assign({},l==null?void 0:l.style),k),styles:Object.assign(Object.assign({},l==null?void 0:l.styles),F),disabled:R,allowClear:H,className:$(ae,T,w,I,l==null?void 0:l.className),classNames:Object.assign(Object.assign(Object.assign({},p),l==null?void 0:l.classNames),{textarea:$({[`${v}-sm`]:C==="small",[`${v}-lg`]:C==="large"},Z,p==null?void 0:p.textarea,(a=l==null?void 0:l.classNames)===null||a===void 0?void 0:a.textarea),variant:$({[`${v}-${j}`]:D},Ee(v,Y)),affixWrapper:$(`${v}-textarea-affix-wrapper`,{[`${v}-affix-wrapper-rtl`]:_==="rtl",[`${v}-affix-wrapper-sm`]:C==="small",[`${v}-affix-wrapper-lg`]:C==="large",[`${v}-textarea-show-count`]:e.showCount||((t=e.count)===null||t===void 0?void 0:t.show)},Z)}),prefixCls:v,suffix:c&&s.createElement("span",{className:`${v}-textarea-suffix`},f),ref:N})))}),yt=xt;export{St as I,yt as T,nt as u};
