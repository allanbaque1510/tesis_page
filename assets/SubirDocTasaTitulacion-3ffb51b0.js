import{r as s,s as y,b,j as a,T as E,c as d,d as c,e as m}from"./index-21055db3.js";import{D as j}from"./DraggerComponent-51565c63.js";import{E as n}from"./ExcelService-9f11adce.js";import{h as v,D as C}from"./moment-a4e1700f.js";import{C as S,T as P}from"./index-7fa0c08c.js";import{T as _}from"./Table-99b5c404.js";import"./row-36c7c26f.js";import"./context-1fc4877a.js";import"./useForceUpdate-c784bdaf.js";import"./EyeOutlined-6816cc68.js";import"./styleChecker-2da1bf7b.js";import"./scrollTo-c5b2038a.js";import"./BaseInput-9763bb7b.js";import"./index-680fd5a3.js";import"./TextArea-1e7806d6.js";const L=()=>{const[p,u]=s.useState([]);y("#FE7072");const o=b(),[h,f]=s.useState(null),g=[{align:"right",key:"numero",dataIndex:"numero",title:"#"},{align:"center",key:"periodo",dataIndex:"periodo",title:"Periodo"},{align:"center",key:"carrera",dataIndex:"carrera",title:"Carrera"},{align:"center",key:"fecha_creacion",dataIndex:"fecha_creacion",title:"Fecha creacion"},{align:"center",key:"accion",dataIndex:"accion",title:"Acción"}],x=(e,r)=>{n.eliminarDatosTasaTitulacion({id:e,id_carrera:r}).then(i=>{console.log(i),t()}).catch(i=>{console.log(i)})},l=p.map((e,r)=>({key:r,numero:r+1,periodo:e.periodo,carrera:e.carrera,fecha_creacion:v(e.created_at).format("DD/MM/YYYY"),accion:a.jsx(E,{title:"Borrar todos los datos de este periodo",children:a.jsx(C,{onClick:()=>x(e.id,e.id_carrera),style:{fontSize:"25px",cursor:"pointer"}})})}));console.log(l);const t=()=>{o(d()),n.obtenerHistorialPeriodoTasaTitulacion().then(e=>{e.data.ok&&u(e.data.periodos)}).catch(e=>{o(c({success:!1,title:"Error al cargar datos del excel",message:e.response.data.error}))}).finally(()=>o(m()))};s.useEffect(()=>{t()},[]);const T=e=>{f(e)},D=async()=>{o(d()),await n.registrarDatosExcelPeriodoTitulacion({file:h}).then(e=>{e.data.ok&&(o(c({success:!0,title:e.data.message,message:""})),t())}).catch(e=>{console.log(e.response.data),o(c({success:!1,title:"Error al cargar datos del excel",message:e.response.data.error}))}).finally(()=>{o(m())})},k=[{key:"1",label:"Subir Documento",children:a.jsx(j,{onArchivoChange:T,funcionEnviarDatos:D})},{key:"2",label:"Archivos subidos",children:a.jsx(_,{dataSource:l,columns:g})}];return a.jsxs("div",{children:[a.jsx("h2",{children:"Documentos del indicador tasa de titulación"}),a.jsx(S,{children:a.jsx(P,{items:k})})]})};export{L as default};
