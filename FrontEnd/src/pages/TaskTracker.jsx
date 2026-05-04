// import { useState, useRef, useEffect } from "react";

// const TEAM = [
//   { id: 1, name: "Kartik K",    role: "Manager",       avatar: "KK", color: "#3B82F6", dept: "Management", leaveBalance: { casual: 8,  sick: 10, privilege: 15 } },
//   { id: 2, name: "Shinisha R",  role: "Content Lead",  avatar: "SR", color: "#8B5CF6", dept: "Content",    leaveBalance: { casual: 6,  sick: 10, privilege: 12 } },
//   { id: 3, name: "Arjun M",     role: "Developer",     avatar: "AM", color: "#10B981", dept: "Tech",       leaveBalance: { casual: 5,  sick: 9,  privilege: 15 } },
//   { id: 4, name: "Priya S",     role: "Designer",      avatar: "PS", color: "#F59E0B", dept: "Design",     leaveBalance: { casual: 7,  sick: 10, privilege: 12 } },
//   { id: 5, name: "Rahul D",     role: "Marketing Exec",avatar: "RD", color: "#EF4444", dept: "Marketing",  leaveBalance: { casual: 4,  sick: 8,  privilege: 10 } },
// ];

// const INIT_TASKS = [
//   { id:1,  title:"Instagram Reels for EcoHomely",        priority:"High",   status:"In Progress", assignee:2, tags:["Social","Content"],  dueDate:"2026-04-28", recurring:false, project:"EcoHomely"   },
//   { id:2,  title:"Meta Ads Campaign – Meera Basu",       priority:"High",   status:"Pending",     assignee:1, tags:["Ads","Meta"],         dueDate:"2026-04-27", recurring:true,  project:"Meera Basu"  },
//   { id:3,  title:"Shopzzy April Content Calendar",       priority:"Medium", status:"Done",        assignee:2, tags:["Content","Calendar"], dueDate:"2026-04-25", recurring:true,  project:"Shopzzy"     },
//   { id:4,  title:"UI/UX Audit Report Delivery",          priority:"Low",    status:"Pending",     assignee:3, tags:["Dev","Audit"],        dueDate:"2026-04-30", recurring:false, project:"EcoHomely"   },
//   { id:5,  title:"Weekly Performance Report",            priority:"Medium", status:"In Progress", assignee:1, tags:["Reporting"],          dueDate:"2026-04-26", recurring:true,  project:"Genie Media" },
//   { id:6,  title:"Podcast Question Bank – NGO",          priority:"Low",    status:"Done",        assignee:4, tags:["Podcast","Content"],  dueDate:"2026-04-24", recurring:false, project:"Genie Media" },
//   { id:7,  title:"#ZeroToStore Reel Script – Week 2",    priority:"High",   status:"Pending",     assignee:2, tags:["Shopzzy","Reel"],     dueDate:"2026-04-29", recurring:true,  project:"Shopzzy"     },
//   { id:8,  title:"React Blog Platform – TipTap Editor",  priority:"Medium", status:"In Progress", assignee:3, tags:["Dev","React"],        dueDate:"2026-05-01", recurring:false, project:"Genie Media" },
//   { id:9,  title:"EcoHomely Google App Install Campaign",priority:"High",   status:"Pending",     assignee:5, tags:["Ads","Google"],       dueDate:"2026-04-28", recurring:false, project:"EcoHomely"   },
//   { id:10, title:"Manyam Documentary – Treatment Doc",   priority:"Medium", status:"Done",        assignee:1, tags:["Video","CSR"],        dueDate:"2026-04-22", recurring:false, project:"Manyam"      },
// ];

// const INIT_MSGS = [
//   { id:1, from:2, text:"Hey! EcoHomely reel scripts are ready for review",                           time:"09:14 AM" },
//   { id:2, from:1, text:"Great, I'll check after the client call. Tag Arjun for dev tasks please.",   time:"09:20 AM" },
//   { id:3, from:3, text:"On it — UI audit done by Thursday. Contact form issue is fixed.",             time:"09:35 AM" },
//   { id:4, from:4, text:"Design assets shared in Drive. Let me know if any changes needed!",           time:"10:02 AM" },
// ];

// const INIT_LEAVES = [
//   { id:1, employee:3, type:"Sick Leave",     from:"2026-04-28", to:"2026-04-29", status:"Approved", reason:"Fever and rest"    },
//   { id:2, employee:5, type:"Casual Leave",   from:"2026-05-02", to:"2026-05-03", status:"Pending",  reason:"Family function"   },
//   { id:3, employee:2, type:"Privilege Leave",from:"2026-05-10", to:"2026-05-12", status:"Pending",  reason:"Anniversary trip"  },
// ];

// const ATTENDANCE_HISTORY = {
//   1:[{date:"Mon Apr 21",status:"Present",in:"09:02",out:"18:15",hours:"9h 13m"},{date:"Tue Apr 22",status:"Present",in:"09:18",out:"18:30",hours:"9h 12m"},{date:"Wed Apr 23",status:"Late",in:"10:05",out:"19:00",hours:"8h 55m"},{date:"Thu Apr 24",status:"Present",in:"09:00",out:"18:00",hours:"9h 0m"}],
//   2:[{date:"Mon Apr 21",status:"Present",in:"09:10",out:"18:20",hours:"9h 10m"},{date:"Tue Apr 22",status:"Present",in:"09:05",out:"18:00",hours:"8h 55m"},{date:"Wed Apr 23",status:"Present",in:"09:00",out:"18:10",hours:"9h 10m"},{date:"Thu Apr 24",status:"Absent",in:"—",out:"—",hours:"—"}],
//   3:[{date:"Mon Apr 21",status:"Present",in:"09:30",out:"18:30",hours:"9h 0m"},{date:"Tue Apr 22",status:"Late",in:"10:15",out:"19:15",hours:"9h 0m"},{date:"Wed Apr 23",status:"Present",in:"09:00",out:"18:00",hours:"9h 0m"},{date:"Thu Apr 24",status:"Present",in:"09:05",out:"18:05",hours:"9h 0m"}],
//   4:[{date:"Mon Apr 21",status:"Present",in:"09:00",out:"17:55",hours:"8h 55m"},{date:"Tue Apr 22",status:"Present",in:"09:00",out:"18:00",hours:"9h 0m"},{date:"Wed Apr 23",status:"Late",in:"10:30",out:"19:30",hours:"9h 0m"},{date:"Thu Apr 24",status:"Present",in:"09:00",out:"18:00",hours:"9h 0m"}],
//   5:[{date:"Mon Apr 21",status:"Absent",in:"—",out:"—",hours:"—"},{date:"Tue Apr 22",status:"Present",in:"09:20",out:"18:20",hours:"9h 0m"},{date:"Wed Apr 23",status:"Present",in:"09:00",out:"18:00",hours:"9h 0m"},{date:"Thu Apr 24",status:"Present",in:"09:10",out:"18:05",hours:"8h 55m"}],
// };

// const PROJECTS   = ["All Projects","EcoHomely","Meera Basu","Shopzzy","Genie Media","Manyam"];
// const FILTERS    = ["All","Pending","In Progress","Done","High Priority","Recurring"];
// const LEAVE_TYPES= ["Sick Leave","Casual Leave","Privilege Leave","Maternity Leave"];
// const SHIFTS     = [{name:"Morning Shift",time:"07:00–15:00"},{name:"General Shift",time:"09:00–18:00"},{name:"Evening Shift",time:"14:00–22:00"},{name:"Night Shift",time:"22:00–06:00"}];

// // ─── SHARED COMPONENTS ──────────────────────────────────────────────────────
// const Avatar=({member,size=32})=>(<div style={{width:size,height:size,borderRadius:"50%",background:member.color+"22",border:`2px solid ${member.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.34,fontWeight:700,color:member.color,flexShrink:0}}>{member.avatar}</div>);

// const BADGE_MAP={High:{bg:"#FEF2F2",t:"#DC2626",b:"#FECACA"},Medium:{bg:"#FFFBEB",t:"#D97706",b:"#FDE68A"},Low:{bg:"#F0FDF4",t:"#16A34A",b:"#BBF7D0"},"In Progress":{bg:"#EFF6FF",t:"#2563EB",b:"#BFDBFE"},Pending:{bg:"#FFFBEB",t:"#D97706",b:"#FDE68A"},Done:{bg:"#F0FDF4",t:"#16A34A",b:"#BBF7D0"},Approved:{bg:"#F0FDF4",t:"#16A34A",b:"#BBF7D0"},Rejected:{bg:"#FEF2F2",t:"#DC2626",b:"#FECACA"},Present:{bg:"#F0FDF4",t:"#16A34A",b:"#BBF7D0"},Late:{bg:"#FFFBEB",t:"#D97706",b:"#FDE68A"},Absent:{bg:"#FEF2F2",t:"#DC2626",b:"#FECACA"}};
// const Badge=({label})=>{const c=BADGE_MAP[label]||{bg:"#F3F4F6",t:"#6B7280",b:"#E5E7EB"};return <span style={{fontSize:11,fontWeight:700,padding:"2px 9px",borderRadius:20,background:c.bg,color:c.t,border:`1px solid ${c.b}`,whiteSpace:"nowrap"}}>{label}</span>;};

// const Modal=({open,onClose,title,children})=>{if(!open)return null;return(<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}><div style={{background:"#fff",borderRadius:16,padding:26,width:460,maxWidth:"92vw",boxShadow:"0 24px 64px rgba(0,0,0,0.22)"}} onClick={e=>e.stopPropagation()}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}><h3 style={{margin:0,fontSize:16,fontWeight:800,color:"#111827"}}>{title}</h3><button onClick={onClose} style={{background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#9CA3AF",lineHeight:1}}>×</button></div>{children}</div></div>);};

// const Inp=({label,...p})=>(<div style={{marginBottom:12}}>{label&&<label style={{display:"block",fontSize:12,fontWeight:700,color:"#374151",marginBottom:4}}>{label}</label>}<input style={{width:"100%",boxSizing:"border-box",padding:"9px 12px",borderRadius:8,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB",color:"#111827"}} {...p}/></div>);
// const Sel=({label,children,...p})=>(<div style={{marginBottom:12}}>{label&&<label style={{display:"block",fontSize:12,fontWeight:700,color:"#374151",marginBottom:4}}>{label}</label>}<select style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB",color:"#111827"}} {...p}>{children}</select></div>);
// const Card=({children,style})=>(<div style={{background:"#fff",border:"1.5px solid #F1F5F9",borderRadius:14,padding:"18px 20px",...style}}>{children}</div>);

// const StatCard=({label,value,icon,color,sub})=>(
//   <Card style={{borderLeft:`4px solid ${color}`}}>
//     <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
//       <div>
//         <div style={{fontSize:10,fontWeight:800,color:"#9CA3AF",letterSpacing:"0.07em",marginBottom:5,textTransform:"uppercase"}}>{label}</div>
//         <div style={{fontSize:28,fontWeight:900,color,lineHeight:1}}>{value}</div>
//         {sub&&<div style={{fontSize:11,color:"#9CA3AF",marginTop:3}}>{sub}</div>}
//       </div>
//       <div style={{fontSize:24,opacity:0.75}}>{icon}</div>
//     </div>
//   </Card>
// );

// const DonutRing=({pct,color,size=68,stroke=8})=>{
//   const r=(size-stroke)/2;const circ=2*Math.PI*r;const dash=(pct/100)*circ;
//   return(<svg width={size} height={size}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#F1F5F9" strokeWidth={stroke}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}/><text x={size/2} y={size/2+4} textAnchor="middle" fontSize={12} fontWeight="800" fill={color}>{pct}%</text></svg>);
// };

// const MiniBar=({data,color="#3B82F6"})=>{
//   const max=Math.max(...data.map(d=>d.val),1);
//   return(<svg width="100%" height="56" style={{overflow:"visible"}}>{data.map((d,i)=>{const h=Math.max(3,(d.val/max)*42);const x=(i/data.length)*100;const w=(1/data.length)*100-1.5;return(<g key={i}><rect x={`${x}%`} y={56-h} width={`${w}%`} height={h} rx={3} fill={color} opacity={0.82}/><text x={`${x+w/2}%`} y={55} textAnchor="middle" fontSize={9} fill="#9CA3AF">{d.label}</text></g>);})}</svg>);
// };

// // ─── LOGIN ──────────────────────────────────────────────────────────────────
// function LoginScreen({onLogin}){
//   const [role,setRole]=useState(null);
//   const [empId,setEmpId]=useState(1);
//   return(
//     <div style={{minHeight:"100vh",background:"#0F172A",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
//       <div style={{width:440}}>
//         <div style={{textAlign:"center",marginBottom:36}}>
//           <div style={{width:52,height:52,background:"#3B82F6",borderRadius:14,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:900,color:"#fff",marginBottom:14}}>G</div>
//           <div style={{color:"#fff",fontSize:24,fontWeight:900,letterSpacing:"-0.5px"}}>Genie Media</div>
//           <div style={{color:"#64748B",fontSize:13,marginTop:3}}>Workspace · Task Tracker</div>
//         </div>
//         {!role?(
//           <div>
//             <div style={{color:"#64748B",fontSize:13,textAlign:"center",marginBottom:18}}>Select your role to continue</div>
//             <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
//               {[{key:"admin",label:"Admin",icon:"🛡",desc:"Full workspace control, team analytics and approvals"},{key:"employee",label:"Employee",icon:"👤",desc:"Personal tasks, attendance and leave management"}].map(r=>(
//                 <button key={r.key} onClick={()=>setRole(r.key)} style={{background:"#1E293B",border:"1.5px solid #334155",borderRadius:14,padding:"22px 18px",cursor:"pointer",textAlign:"left"}}
//                   onMouseEnter={e=>e.currentTarget.style.borderColor="#3B82F6"} onMouseLeave={e=>e.currentTarget.style.borderColor="#334155"}>
//                   <div style={{fontSize:26,marginBottom:10}}>{r.icon}</div>
//                   <div style={{color:"#fff",fontSize:14,fontWeight:800,marginBottom:5}}>{r.label}</div>
//                   <div style={{color:"#64748B",fontSize:12,lineHeight:1.5}}>{r.desc}</div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         ):(
//           <div style={{background:"#1E293B",border:"1.5px solid #334155",borderRadius:16,padding:26}}>
//             <button onClick={()=>setRole(null)} style={{background:"none",border:"none",color:"#64748B",fontSize:12,cursor:"pointer",marginBottom:18,padding:0}}>← Back</button>
//             <div style={{color:"#fff",fontSize:17,fontWeight:800,marginBottom:3}}>{role==="admin"?"🛡 Admin Login":"👤 Employee Login"}</div>
//             <div style={{color:"#64748B",fontSize:12,marginBottom:20}}>{role==="admin"?"Access full team management panel":"Access your personal workspace"}</div>
//             {role==="employee"&&(
//               <div style={{marginBottom:18}}>
//                 <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.07em",marginBottom:8}}>SELECT YOUR PROFILE</div>
//                 {TEAM.map(m=>(
//                   <div key={m.id} onClick={()=>setEmpId(m.id)} style={{display:"flex",alignItems:"center",gap:11,padding:"9px 12px",borderRadius:10,cursor:"pointer",marginBottom:5,background:empId===m.id?"#0F172A":"transparent",border:`1.5px solid ${empId===m.id?m.color:"transparent"}`}}>
//                     <Avatar member={m} size={32}/>
//                     <div style={{flex:1}}><div style={{color:"#fff",fontSize:13,fontWeight:700}}>{m.name}</div><div style={{color:"#64748B",fontSize:11}}>{m.role} · {m.dept}</div></div>
//                     {empId===m.id&&<div style={{width:8,height:8,borderRadius:"50%",background:m.color}}/>}
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button onClick={()=>onLogin(role,role==="admin"?null:empId)} style={{width:"100%",padding:13,background:"#3B82F6",border:"none",borderRadius:10,color:"#fff",fontSize:14,fontWeight:800,cursor:"pointer"}}>
//               {role==="admin"?"Enter Admin Panel":`Login as ${TEAM.find(m=>m.id===empId)?.name}`}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── ADMIN DASHBOARD ────────────────────────────────────────────────────────
// function AdminDashboard({tasks,leaves,setView}){
//   const total=tasks.length,done=tasks.filter(t=>t.status==="Done").length,inprog=tasks.filter(t=>t.status==="In Progress").length,pend=tasks.filter(t=>t.status==="Pending").length,highPri=tasks.filter(t=>t.priority==="High").length,pLeaves=leaves.filter(l=>l.status==="Pending").length,compRate=total?Math.round((done/total)*100):0;
//   const projectStats=PROJECTS.slice(1).map(p=>({name:p,total:tasks.filter(t=>t.project===p).length,done:tasks.filter(t=>t.project===p&&t.status==="Done").length})).filter(p=>p.total>0);
//   const teamStats=TEAM.map(m=>{const mt=tasks.filter(t=>t.assignee===m.id),md=mt.filter(t=>t.status==="Done").length,hist=ATTENDANCE_HISTORY[m.id]||[],present=hist.filter(h=>h.status!=="Absent").length;return{...m,total:mt.length,done:md,pending:mt.length-md,attend:`${present}/${hist.length}`};});
//   const weeklyData=[{label:"Mon",val:3},{label:"Tue",val:5},{label:"Wed",val:4},{label:"Thu",val:6},{label:"Fri",val:2},{label:"Sat",val:1}];
//   const feed=[
//     {icon:"✅",text:"Shopzzy April Content Calendar marked Done",time:"10 mins ago",color:"#10B981"},
//     {icon:"📝",text:"Manyam Documentary – Treatment Doc completed",time:"2 hrs ago",color:"#3B82F6"},
//     {icon:"🏖",text:"Casual Leave request from Rahul D pending",time:"3 hrs ago",color:"#F59E0B"},
//     {icon:"🔄",text:"Meta Ads Campaign set as recurring by Kartik",time:"Yesterday",color:"#8B5CF6"},
//     {icon:"📤",text:"3 tasks bulk-uploaded to Shopzzy project",time:"Yesterday",color:"#6B7280"},
//   ];
//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:22}}>
//         <div>
//           <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
//             <span style={{fontSize:10,fontWeight:800,background:"#FEF2F2",color:"#DC2626",border:"1px solid #FECACA",borderRadius:20,padding:"2px 10px",letterSpacing:"0.06em"}}>🛡 ADMIN VIEW</span>
//           </div>
//           <h2 style={{margin:0,fontSize:22,fontWeight:900,color:"#111827",letterSpacing:"-0.3px"}}>Team Command Center</h2>
//           <p style={{color:"#6B7280",fontSize:13,margin:"3px 0 0"}}>{new Date().toLocaleDateString("en-IN",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</p>
//         </div>
//         {pLeaves>0&&<button onClick={()=>setView("leave")} style={{display:"flex",alignItems:"center",gap:7,background:"#FFFBEB",border:"1.5px solid #FDE68A",borderRadius:10,padding:"9px 15px",cursor:"pointer",color:"#D97706",fontSize:13,fontWeight:700}}>⚠ {pLeaves} Leave{pLeaves>1?"s":""} Pending · Review →</button>}
//       </div>

//       <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:13,marginBottom:20}}>
//         <StatCard label="Total Tasks"    value={total}       icon="📋" color="#3B82F6" sub={`${inprog} in progress`}/>
//         <StatCard label="Completed"      value={done}        icon="✅" color="#10B981" sub={`${compRate}% rate`}/>
//         <StatCard label="Pending"        value={pend}        icon="⏳" color="#F59E0B" sub={`${highPri} high priority`}/>
//         <StatCard label="Team Members"   value={TEAM.length} icon="👥" color="#8B5CF6" sub="All active"/>
//         <StatCard label="Leave Requests" value={pLeaves}     icon="📅" color="#EF4444" sub="Awaiting approval"/>
//       </div>

//       <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:16,marginBottom:16}}>
//         <Card>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
//             <span style={{fontSize:14,fontWeight:800,color:"#111827"}}>Team Performance</span>
//             <button onClick={()=>setView("attendance")} style={{fontSize:12,color:"#3B82F6",background:"none",border:"none",cursor:"pointer",fontWeight:600}}>View Attendance →</button>
//           </div>
//           <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
//             <thead><tr style={{background:"#F8FAFC"}}>{["Member","Tasks","Done","Pend.","Attend.","Progress"].map(h=>(<th key={h} style={{padding:"7px 10px",textAlign:"left",fontSize:10,fontWeight:800,color:"#9CA3AF",letterSpacing:"0.06em",borderBottom:"1.5px solid #F1F5F9"}}>{h}</th>))}</tr></thead>
//             <tbody>
//               {teamStats.map(m=>{const pct=m.total?Math.round((m.done/m.total)*100):0;return(
//                 <tr key={m.id} style={{borderBottom:"1px solid #F8FAFC"}}>
//                   <td style={{padding:"10px 10px"}}><div style={{display:"flex",alignItems:"center",gap:8}}><Avatar member={m} size={26}/><div><div style={{fontSize:12,fontWeight:700,color:"#111827"}}>{m.name}</div><div style={{fontSize:10,color:"#9CA3AF"}}>{m.role}</div></div></div></td>
//                   <td style={{padding:"10px 10px",fontWeight:700,color:"#374151"}}>{m.total}</td>
//                   <td style={{padding:"10px 10px",fontWeight:700,color:"#10B981"}}>{m.done}</td>
//                   <td style={{padding:"10px 10px",fontWeight:700,color:"#F59E0B"}}>{m.pending}</td>
//                   <td style={{padding:"10px 10px",fontWeight:600,color:"#374151"}}>{m.attend}</td>
//                   <td style={{padding:"10px 10px"}}><div style={{display:"flex",alignItems:"center",gap:5}}><div style={{flex:1,height:5,background:"#F1F5F9",borderRadius:10}}><div style={{height:"100%",width:`${pct}%`,background:m.color,borderRadius:10}}/></div><span style={{fontSize:10,fontWeight:800,color:m.color,minWidth:26}}>{pct}%</span></div></td>
//                 </tr>);
//               })}
//             </tbody>
//           </table>
//         </Card>
//         <div style={{display:"flex",flexDirection:"column",gap:14}}>
//           <Card>
//             <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:12}}>Completion Overview</div>
//             <div style={{display:"flex",alignItems:"center",gap:16}}>
//               <DonutRing pct={compRate} color="#3B82F6" size={70} stroke={9}/>
//               <div style={{fontSize:12,color:"#6B7280",lineHeight:2}}>
//                 <div><span style={{color:"#10B981",fontWeight:800}}>●</span> Done: <b>{done}</b></div>
//                 <div><span style={{color:"#3B82F6",fontWeight:800}}>●</span> Active: <b>{inprog}</b></div>
//                 <div><span style={{color:"#F59E0B",fontWeight:800}}>●</span> Pending: <b>{pend}</b></div>
//               </div>
//             </div>
//           </Card>
//           <Card>
//             <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:9}}>Tasks Closed / Week</div>
//             <MiniBar data={weeklyData} color="#10B981"/>
//           </Card>
//         </div>
//       </div>

//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
//         <Card>
//           <div style={{fontSize:14,fontWeight:800,color:"#111827",marginBottom:14}}>Project Health</div>
//           {projectStats.map(p=>{const pct=p.total?Math.round((p.done/p.total)*100):0,color=pct===100?"#10B981":pct>=50?"#3B82F6":"#F59E0B";return(
//             <div key={p.name} style={{marginBottom:13}}>
//               <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
//                 <span style={{fontSize:13,fontWeight:700,color:"#374151"}}>📁 {p.name}</span>
//                 <span style={{fontSize:12,fontWeight:700,color}}>{p.done}/{p.total} · {pct}%</span>
//               </div>
//               <div style={{height:7,background:"#F1F5F9",borderRadius:10}}><div style={{height:"100%",width:`${pct}%`,background:color,borderRadius:10,transition:"width 0.5s"}}/></div>
//             </div>
//           );})}
//         </Card>
//         <Card>
//           <div style={{fontSize:14,fontWeight:800,color:"#111827",marginBottom:14}}>Recent Activity</div>
//           {feed.map((a,i)=>(
//             <div key={i} style={{display:"flex",gap:11,alignItems:"flex-start",paddingBottom:10,borderBottom:i<feed.length-1?"1px solid #F8FAFC":"none",marginBottom:i<feed.length-1?10:0}}>
//               <div style={{width:28,height:28,borderRadius:"50%",background:a.color+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0}}>{a.icon}</div>
//               <div style={{flex:1}}><div style={{fontSize:12,color:"#374151",lineHeight:1.4}}>{a.text}</div><div style={{fontSize:10,color:"#9CA3AF",marginTop:2}}>{a.time}</div></div>
//             </div>
//           ))}
//         </Card>
//       </div>
//     </div>
//   );
// }

// // ─── EMPLOYEE DASHBOARD ─────────────────────────────────────────────────────
// function EmployeeDashboard({user,tasks,leaves,setView}){
//   const myTasks=tasks.filter(t=>t.assignee===user.id),myLeaves=leaves.filter(l=>l.employee===user.id);
//   const done=myTasks.filter(t=>t.status==="Done").length,inprog=myTasks.filter(t=>t.status==="In Progress").length,pend=myTasks.filter(t=>t.status==="Pending").length,compRate=myTasks.length?Math.round((done/myTasks.length)*100):0;
//   const hist=ATTENDANCE_HISTORY[user.id]||[],present=hist.filter(h=>h.status!=="Absent").length,attendPct=hist.length?Math.round((present/hist.length)*100):0;
//   const upcoming=myTasks.filter(t=>t.status!=="Done").sort((a,b)=>a.dueDate<b.dueDate?-1:1).slice(0,4);
//   const recentDone=myTasks.filter(t=>t.status==="Done").slice(0,3);
//   const lb=user.leaveBalance;
//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:22}}>
//         <div>
//           <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
//             <span style={{fontSize:10,fontWeight:800,background:"#EFF6FF",color:"#2563EB",border:"1px solid #BFDBFE",borderRadius:20,padding:"2px 10px",letterSpacing:"0.06em"}}>👤 EMPLOYEE VIEW</span>
//             <span style={{fontSize:11,color:"#9CA3AF"}}>{user.dept} · {user.role}</span>
//           </div>
//           <h2 style={{margin:0,fontSize:22,fontWeight:900,color:"#111827",letterSpacing:"-0.3px"}}>Good morning, {user.name.split(" ")[0]} 👋</h2>
//           <p style={{color:"#6B7280",fontSize:13,margin:"3px 0 0"}}>{new Date().toLocaleDateString("en-IN",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</p>
//         </div>
//         <div style={{display:"flex",gap:9}}>
//           <button onClick={()=>setView("attendance")} style={{padding:"8px 14px",background:"#F0FDF4",border:"1.5px solid #BBF7D0",borderRadius:9,fontSize:12,fontWeight:700,cursor:"pointer",color:"#16A34A"}}>📍 Mark Attendance</button>
//           <button onClick={()=>setView("leave")} style={{padding:"8px 14px",background:"#EFF6FF",border:"1.5px solid #BFDBFE",borderRadius:9,fontSize:12,fontWeight:700,cursor:"pointer",color:"#2563EB"}}>📅 Apply Leave</button>
//         </div>
//       </div>

//       <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:13,marginBottom:20}}>
//         <StatCard label="My Tasks"      value={myTasks.length}        icon="📋" color="#3B82F6" sub={`${inprog} in progress`}/>
//         <StatCard label="Completed"     value={done}                  icon="✅" color="#10B981" sub={`${compRate}% done`}/>
//         <StatCard label="Due/Pending"   value={pend}                  icon="⏳" color="#F59E0B" sub="Action needed"/>
//         <StatCard label="Days Present"  value={`${present}/${hist.length}`} icon="📍" color="#8B5CF6" sub={`${attendPct}% attendance`}/>
//       </div>

//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
//         <Card>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:13}}>
//             <span style={{fontSize:14,fontWeight:800,color:"#111827"}}>My Upcoming Tasks</span>
//             <button onClick={()=>setView("tasks")} style={{fontSize:12,color:"#3B82F6",background:"none",border:"none",cursor:"pointer",fontWeight:600}}>All tasks →</button>
//           </div>
//           {upcoming.length===0&&<div style={{color:"#9CA3AF",fontSize:13,textAlign:"center",padding:22}}>All caught up! 🎉</div>}
//           {upcoming.map(t=>(
//             <div key={t.id} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",background:"#F8FAFC",borderRadius:9,marginBottom:6}}>
//               <div style={{width:8,height:8,borderRadius:"50%",background:t.priority==="High"?"#EF4444":t.priority==="Medium"?"#F59E0B":"#10B981",flexShrink:0}}/>
//               <div style={{flex:1,minWidth:0}}>
//                 <div style={{fontSize:13,fontWeight:600,color:"#111827",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.title}</div>
//                 <div style={{fontSize:10,color:"#9CA3AF"}}>📁 {t.project}{t.dueDate&&` · Due ${t.dueDate}`}</div>
//               </div>
//               <Badge label={t.status}/>
//             </div>
//           ))}
//         </Card>
//         <div style={{display:"flex",flexDirection:"column",gap:14}}>
//           <Card>
//             <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:12}}>My Progress</div>
//             <div style={{display:"flex",alignItems:"center",gap:16}}>
//               <DonutRing pct={compRate} color={user.color} size={70} stroke={9}/>
//               <div style={{fontSize:12,color:"#6B7280",lineHeight:2.1}}>
//                 <div><span style={{color:"#10B981",fontWeight:800}}>●</span> Done: <b>{done}</b></div>
//                 <div><span style={{color:"#3B82F6",fontWeight:800}}>●</span> In Progress: <b>{inprog}</b></div>
//                 <div><span style={{color:"#F59E0B",fontWeight:800}}>●</span> Pending: <b>{pend}</b></div>
//               </div>
//             </div>
//           </Card>
//           <Card>
//             <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:12}}>Leave Balance</div>
//             <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
//               {[{label:"Casual",val:lb.casual,c:"#3B82F6"},{label:"Sick",val:lb.sick,c:"#EF4444"},{label:"Privilege",val:lb.privilege,c:"#8B5CF6"}].map(lt=>(
//                 <div key={lt.label} style={{background:lt.c+"0D",borderRadius:10,padding:"10px 8px",textAlign:"center",border:`1px solid ${lt.c}22`}}>
//                   <div style={{fontSize:20,fontWeight:900,color:lt.c}}>{lt.val}</div>
//                   <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,marginTop:2}}>{lt.label}</div>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </div>
//       </div>

//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
//         <Card>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
//             <span style={{fontSize:14,fontWeight:800,color:"#111827"}}>Recent Attendance</span>
//             <button onClick={()=>setView("attendance")} style={{fontSize:12,color:"#3B82F6",background:"none",border:"none",cursor:"pointer",fontWeight:600}}>Details →</button>
//           </div>
//           {hist.map((r,i)=>(
//             <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #F8FAFC"}}>
//               <span style={{fontSize:12,fontWeight:600,color:"#374151"}}>{r.date}</span>
//               <div style={{display:"flex",gap:8,alignItems:"center"}}>
//                 {r.status!=="Absent"&&<span style={{fontSize:11,color:"#6B7280"}}>{r.in}–{r.out}</span>}
//                 <Badge label={r.status}/>
//               </div>
//             </div>
//           ))}
//         </Card>
//         <Card>
//           <div style={{fontSize:14,fontWeight:800,color:"#111827",marginBottom:12}}>My Leave History</div>
//           {myLeaves.length===0&&<div style={{color:"#9CA3AF",fontSize:13,padding:"10px 0"}}>No leave requests yet.</div>}
//           {myLeaves.map(l=>(
//             <div key={l.id} style={{padding:"10px 12px",background:"#F8FAFC",borderRadius:9,marginBottom:7}}>
//               <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
//                 <span style={{fontSize:13,fontWeight:700,color:"#111827"}}>{l.type}</span>
//                 <Badge label={l.status}/>
//               </div>
//               <div style={{fontSize:11,color:"#9CA3AF"}}>{l.from} → {l.to} · {l.reason}</div>
//             </div>
//           ))}
//           {recentDone.length>0&&(
//             <>
//               <div style={{fontSize:13,fontWeight:800,color:"#111827",margin:"14px 0 9px"}}>Recently Completed ✅</div>
//               {recentDone.map(t=>(
//                 <div key={t.id} style={{display:"flex",gap:8,alignItems:"center",padding:"6px 0",borderBottom:"1px solid #F8FAFC"}}>
//                   <div style={{width:16,height:16,borderRadius:"50%",background:"#10B981",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#fff",fontWeight:900,flexShrink:0}}>✓</div>
//                   <div><div style={{fontSize:12,fontWeight:600,color:"#374151"}}>{t.title}</div><div style={{fontSize:10,color:"#9CA3AF"}}>{t.project}</div></div>
//                 </div>
//               ))}
//             </>
//           )}
//         </Card>
//       </div>
//     </div>
//   );
// }

// // ─── TASKS VIEW ─────────────────────────────────────────────────────────────
// function TasksView({tasks,setTasks,userId,isAdmin}){
//   const vis=isAdmin?tasks:tasks.filter(t=>t.assignee===userId);
//   const [filter,setFilter]=useState("All"),[project,setProject]=useState("All Projects"),[search,setSearch]=useState("");
//   const [showAdd,setShowAdd]=useState(false),[showBulk,setShowBulk]=useState(false),[bulkText,setBulkText]=useState("");
//   const [nt,setNt]=useState({title:"",priority:"Medium",assignee:userId||1,dueDate:"",project:"Genie Media",recurring:false,tags:""});

//   const filtered=vis.filter(t=>{
//     if(search&&!t.title.toLowerCase().includes(search.toLowerCase()))return false;
//     if(project!=="All Projects"&&t.project!==project)return false;
//     if(filter==="Pending")return t.status==="Pending";
//     if(filter==="In Progress")return t.status==="In Progress";
//     if(filter==="Done")return t.status==="Done";
//     if(filter==="High Priority")return t.priority==="High";
//     if(filter==="Recurring")return t.recurring;
//     return true;
//   });

//   const addTask=()=>{if(!nt.title)return;setTasks(p=>[...p,{id:Date.now(),...nt,status:"Pending",assignee:parseInt(nt.assignee),tags:nt.tags?nt.tags.split(",").map(s=>s.trim()):[]}]);setShowAdd(false);setNt({title:"",priority:"Medium",assignee:userId||1,dueDate:"",project:"Genie Media",recurring:false,tags:""});};
//   const bulkUpload=()=>{const lines=bulkText.split("\n").map(s=>s.trim()).filter(Boolean);setTasks(p=>[...p,...lines.map((title,i)=>({id:Date.now()+i,title,priority:"Medium",status:"Pending",assignee:userId||1,tags:["Bulk"],dueDate:"",recurring:false,project:"Genie Media"}))]);setShowBulk(false);setBulkText("");};
//   const cycle=id=>{const c={"Pending":"In Progress","In Progress":"Done","Done":"Pending"};setTasks(p=>p.map(t=>t.id===id?{...t,status:c[t.status]}:t));};

//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
//         <h2 style={{margin:0,fontSize:20,fontWeight:900,color:"#111827"}}>{isAdmin?"All Tasks":"My Tasks"}</h2>
//         <div style={{display:"flex",gap:9}}>
//           {isAdmin&&<button onClick={()=>setShowBulk(true)} style={{padding:"8px 15px",background:"#F3F4F6",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",color:"#374151"}}>📤 Bulk Upload</button>}
//           <button onClick={()=>setShowAdd(true)} style={{padding:"8px 15px",background:"#3B82F6",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",color:"#fff"}}>+ Add Task</button>
//         </div>
//       </div>
//       <div style={{display:"flex",gap:9,marginBottom:12,flexWrap:"wrap"}}>
//         <input placeholder="🔍 Search..." value={search} onChange={e=>setSearch(e.target.value)} style={{flex:1,minWidth:160,padding:"8px 13px",borderRadius:8,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB"}}/>
//         {isAdmin&&<select value={project} onChange={e=>setProject(e.target.value)} style={{padding:"8px 12px",borderRadius:8,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB",color:"#374151"}}>{PROJECTS.map(p=><option key={p}>{p}</option>)}</select>}
//       </div>
//       <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
//         {FILTERS.map(f=><button key={f} onClick={()=>setFilter(f)} style={{padding:"5px 13px",borderRadius:20,border:filter===f?"none":"1.5px solid #E5E7EB",background:filter===f?"#3B82F6":"#fff",color:filter===f?"#fff":"#6B7280",fontSize:12,fontWeight:700,cursor:"pointer"}}>{f}</button>)}
//       </div>
//       <div style={{display:"flex",flexDirection:"column",gap:6}}>
//         {filtered.length===0&&<div style={{textAlign:"center",color:"#9CA3AF",fontSize:14,padding:44}}>No tasks found</div>}
//         {filtered.map(t=>{const member=TEAM.find(m=>m.id===t.assignee);return(
//           <div key={t.id} style={{background:"#fff",border:"1.5px solid #F1F5F9",borderRadius:11,padding:"12px 16px",display:"flex",alignItems:"center",gap:12}}>
//             <button onClick={()=>cycle(t.id)} style={{width:21,height:21,borderRadius:"50%",border:`2px solid ${t.status==="Done"?"#10B981":"#D1D5DB"}`,background:t.status==="Done"?"#10B981":"transparent",cursor:"pointer",flexShrink:0,color:"#fff",fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900}}>{t.status==="Done"?"✓":""}</button>
//             <div style={{flex:1,minWidth:0}}>
//               <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:2}}>
//                 <span style={{fontSize:13,fontWeight:700,color:t.status==="Done"?"#9CA3AF":"#111827",textDecoration:t.status==="Done"?"line-through":"none"}}>{t.title}</span>
//                 {t.recurring&&<span style={{fontSize:9,background:"#EFF6FF",color:"#3B82F6",borderRadius:20,padding:"1px 6px",fontWeight:700}}>↻ Recurring</span>}
//               </div>
//               <div style={{display:"flex",gap:5,flexWrap:"wrap",alignItems:"center"}}>
//                 <span style={{fontSize:10,color:"#9CA3AF"}}>📁 {t.project}</span>
//                 {t.dueDate&&<span style={{fontSize:10,color:"#9CA3AF"}}>📅 {t.dueDate}</span>}
//                 {t.tags?.map(tag=><span key={tag} style={{fontSize:10,background:"#F3F4F6",color:"#6B7280",borderRadius:20,padding:"1px 6px"}}>{tag}</span>)}
//               </div>
//             </div>
//             <div style={{display:"flex",gap:6,alignItems:"center"}}>
//               <Badge label={t.priority}/><Badge label={t.status}/>
//               {isAdmin&&member&&<Avatar member={member} size={24}/>}
//             </div>
//           </div>
//         );})}
//       </div>

//       <Modal open={showAdd} onClose={()=>setShowAdd(false)} title="Add New Task">
//         <Inp label="Task Title" placeholder="Enter task title..." value={nt.title} onChange={e=>setNt(p=>({...p,title:e.target.value}))}/>
//         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11}}>
//           <Sel label="Priority" value={nt.priority} onChange={e=>setNt(p=>({...p,priority:e.target.value}))}>{["High","Medium","Low"].map(p=><option key={p}>{p}</option>)}</Sel>
//           {isAdmin?<Sel label="Assign To" value={nt.assignee} onChange={e=>setNt(p=>({...p,assignee:e.target.value}))}>{TEAM.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</Sel>:<div style={{marginBottom:12}}><label style={{display:"block",fontSize:12,fontWeight:700,color:"#374151",marginBottom:4}}>Assigned To</label><div style={{padding:"9px 12px",borderRadius:8,background:"#F3F4F6",fontSize:13,color:"#6B7280"}}>You</div></div>}
//         </div>
//         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11}}>
//           <Inp label="Due Date" type="date" value={nt.dueDate} onChange={e=>setNt(p=>({...p,dueDate:e.target.value}))}/>
//           <Sel label="Project" value={nt.project} onChange={e=>setNt(p=>({...p,project:e.target.value}))}>{PROJECTS.slice(1).map(p=><option key={p}>{p}</option>)}</Sel>
//         </div>
//         <Inp label="Tags (comma separated)" placeholder="Content, Dev, Ads..." value={nt.tags} onChange={e=>setNt(p=>({...p,tags:e.target.value}))}/>
//         <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}><input type="checkbox" id="rec" checked={nt.recurring} onChange={e=>setNt(p=>({...p,recurring:e.target.checked}))}/><label htmlFor="rec" style={{fontSize:13,color:"#374151"}}>Set as recurring task</label></div>
//         <button onClick={addTask} style={{width:"100%",padding:12,background:"#3B82F6",color:"#fff",border:"none",borderRadius:10,fontSize:14,fontWeight:800,cursor:"pointer"}}>Add Task</button>
//       </Modal>
//       <Modal open={showBulk} onClose={()=>setShowBulk(false)} title="Bulk Upload Tasks">
//         <p style={{fontSize:13,color:"#6B7280",margin:"0 0 10px"}}>One task per line — all created as Medium priority.</p>
//         <textarea value={bulkText} onChange={e=>setBulkText(e.target.value)} placeholder={"Task 1\nTask 2\nTask 3..."} rows={8} style={{width:"100%",boxSizing:"border-box",padding:"10px 12px",borderRadius:8,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB",resize:"vertical"}}/>
//         <button onClick={bulkUpload} style={{width:"100%",marginTop:10,padding:12,background:"#10B981",color:"#fff",border:"none",borderRadius:10,fontSize:14,fontWeight:800,cursor:"pointer"}}>Upload {bulkText.split("\n").filter(Boolean).length} Tasks</button>
//       </Modal>
//     </div>
//   );
// }

// // ─── MESSAGING ──────────────────────────────────────────────────────────────
// function MessagingView({userId}){
//   const [msgs,setMsgs]=useState(INIT_MSGS),[input,setInput]=useState(""),[tagged,setTagged]=useState(null);
//   const endRef=useRef(null);
//   useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
//   const me=TEAM.find(m=>m.id===userId)||TEAM[0];
//   const send=()=>{if(!input.trim())return;setMsgs(p=>[...p,{id:Date.now(),from:userId||me.id,text:(tagged?`@${tagged.name} `:"")+input,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]);setInput("");setTagged(null);};
//   return(
//     <div style={{display:"flex",height:"calc(100vh - 150px)",background:"#fff",borderRadius:16,border:"1.5px solid #F1F5F9",overflow:"hidden"}}>
//       <div style={{width:200,borderRight:"1.5px solid #F1F5F9",padding:14,overflowY:"auto"}}>
//         <div style={{fontSize:10,fontWeight:800,color:"#9CA3AF",letterSpacing:"0.08em",marginBottom:10}}>TEAM</div>
//         {TEAM.filter(m=>m.id!==userId).map(m=>(
//           <div key={m.id} onClick={()=>setTagged(tagged?.id===m.id?null:m)} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 9px",borderRadius:9,marginBottom:2,cursor:"pointer",background:tagged?.id===m.id?"#EFF6FF":"transparent"}}>
//             <div style={{position:"relative"}}><Avatar member={m} size={30}/><div style={{position:"absolute",bottom:0,right:0,width:8,height:8,background:"#10B981",borderRadius:"50%",border:"2px solid #fff"}}/></div>
//             <div><div style={{fontSize:12,fontWeight:700,color:"#111827"}}>{m.name}</div><div style={{fontSize:10,color:"#9CA3AF"}}>{m.role}</div></div>
//           </div>
//         ))}
//       </div>
//       <div style={{flex:1,display:"flex",flexDirection:"column"}}>
//         <div style={{padding:"12px 16px",borderBottom:"1.5px solid #F1F5F9",display:"flex",alignItems:"center",gap:9}}>
//           <div style={{width:32,height:32,borderRadius:"50%",background:"#EFF6FF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15}}>💬</div>
//           <div><div style={{fontSize:13,fontWeight:800,color:"#111827"}}>Genie Media · Team Chat</div><div style={{fontSize:11,color:"#10B981",fontWeight:700}}>{TEAM.length} online</div></div>
//         </div>
//         <div style={{flex:1,overflowY:"auto",padding:"14px 16px",display:"flex",flexDirection:"column",gap:13}}>
//           {msgs.map(msg=>{const isMe=msg.from===userId||msg.from===me.id;const sender=isMe?me:TEAM.find(m=>m.id===msg.from);return(
//             <div key={msg.id} style={{display:"flex",gap:8,flexDirection:isMe?"row-reverse":"row"}}>
//               {!isMe&&sender&&<Avatar member={sender} size={28}/>}
//               <div style={{maxWidth:"72%"}}>
//                 {!isMe&&<div style={{fontSize:10,fontWeight:800,color:sender?.color,marginBottom:3}}>{sender?.name}</div>}
//                 <div style={{padding:"9px 13px",borderRadius:isMe?"14px 14px 3px 14px":"14px 14px 14px 3px",background:isMe?me.color:"#F3F4F6",color:isMe?"#fff":"#111827",fontSize:13,lineHeight:1.5}}>
//                   {msg.text.split(/(@[\w\s]+)/g).map((part,i)=>part.startsWith("@")?<span key={i} style={{background:isMe?"rgba(255,255,255,0.25)":"#DBEAFE",borderRadius:4,padding:"0 3px",fontWeight:800}}>{part}</span>:part)}
//                 </div>
//                 <div style={{fontSize:10,color:"#9CA3AF",marginTop:2,textAlign:isMe?"right":"left"}}>{msg.time}</div>
//               </div>
//             </div>
//           );})}
//           <div ref={endRef}/>
//         </div>
//         {tagged&&<div style={{padding:"3px 16px",background:"#EFF6FF",borderTop:"1px solid #DBEAFE",fontSize:12,color:"#3B82F6",fontWeight:700}}>Tagging @{tagged.name} · <span style={{cursor:"pointer",fontWeight:400}} onClick={()=>setTagged(null)}>Remove</span></div>}
//         <div style={{padding:"10px 16px",borderTop:"1.5px solid #F1F5F9",display:"flex",gap:7,alignItems:"center"}}>
//           <div style={{flex:1,display:"flex",background:"#F9FAFB",borderRadius:22,border:"1.5px solid #E5E7EB",padding:"7px 13px"}}>
//             <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Type a message…" style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:13,color:"#111827"}}/>
//           </div>
//           <button onClick={()=>setTagged(TEAM.find(m=>m.id!==userId))} style={{width:34,height:34,borderRadius:"50%",background:"#F3F4F6",border:"none",cursor:"pointer",fontSize:13,fontWeight:800,color:"#6B7280"}}>@</button>
//           <button onClick={send} style={{width:34,height:34,borderRadius:"50%",background:me.color,border:"none",cursor:"pointer",color:"#fff",fontSize:14}}>→</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── ATTENDANCE ─────────────────────────────────────────────────────────────
// function AttendanceView({userId,isAdmin}){
//   const [punchIn,setPunchIn]=useState(null),[punchOut,setPunchOut]=useState(null),[inGeo,setInGeo]=useState(true),[shift,setShift]=useState("General Shift"),[viewMember,setViewMember]=useState(userId||1);
//   const hist=ATTENDANCE_HISTORY[viewMember]||[];
//   const handlePunch=()=>{if(!punchIn){if(!inGeo){alert("Outside geofenced zone!");return;}setPunchIn(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}));}else if(!punchOut){setPunchOut(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}));}};
//   return(
//     <div>
//       <h2 style={{margin:"0 0 5px",fontSize:20,fontWeight:900,color:"#111827"}}>Attendance {isAdmin?"Management":"Tracker"}</h2>
//       <p style={{color:"#6B7280",fontSize:13,margin:"0 0 20px"}}>{new Date().toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
//       {isAdmin&&(
//         <div style={{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"}}>
//           {TEAM.map(m=><button key={m.id} onClick={()=>setViewMember(m.id)} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 12px",borderRadius:20,border:`1.5px solid ${viewMember===m.id?m.color:"#E5E7EB"}`,background:viewMember===m.id?m.color+"18":"#fff",cursor:"pointer"}}><Avatar member={m} size={18}/><span style={{fontSize:12,fontWeight:700,color:viewMember===m.id?m.color:"#374151"}}>{m.name}</span></button>)}
//         </div>
//       )}
//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:18}}>
//         <Card>
//           <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:13}}>{isAdmin?`Today – ${TEAM.find(m=>m.id===viewMember)?.name}`:"Today's Attendance"}</div>
//           <div style={{display:"flex",gap:10,marginBottom:13}}>
//             {[{l:"Punch In",v:punchIn},{l:"Punch Out",v:punchOut}].map(x=><div key={x.l} style={{flex:1,background:"#F9FAFB",borderRadius:9,padding:"9px 12px"}}><div style={{fontSize:10,color:"#9CA3AF",fontWeight:700}}>{x.l}</div><div style={{fontSize:19,fontWeight:900,color:"#111827",marginTop:1}}>{x.v||"--:--"}</div></div>)}
//           </div>
//           <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,padding:"8px 12px",borderRadius:9,background:inGeo?"#F0FDF4":"#FEF2F2",border:`1px solid ${inGeo?"#BBF7D0":"#FECACA"}`}}>
//             <span style={{fontSize:13}}>{inGeo?"📍":"⚠️"}</span>
//             <span style={{fontSize:11,fontWeight:700,color:inGeo?"#16A34A":"#DC2626",flex:1}}>{inGeo?"Within Geofenced Zone – Vizag Office":"Outside Geofenced Zone"}</span>
//             <button onClick={()=>setInGeo(p=>!p)} style={{fontSize:10,background:"transparent",border:`1px solid ${inGeo?"#16A34A":"#DC2626"}`,borderRadius:5,padding:"2px 7px",cursor:"pointer",color:inGeo?"#16A34A":"#DC2626",fontWeight:700}}>Simulate</button>
//           </div>
//           {!punchOut?<button onClick={handlePunch} style={{width:"100%",padding:11,borderRadius:9,border:"none",cursor:"pointer",background:punchIn?"#EF4444":inGeo?"#3B82F6":"#9CA3AF",color:"#fff",fontSize:13,fontWeight:800}}>{punchIn?"Punch Out":inGeo?"Punch In":"Location Required"}</button>:<div style={{textAlign:"center",padding:11,background:"#F0FDF4",borderRadius:9,fontSize:13,fontWeight:700,color:"#16A34A"}}>✅ Attendance marked</div>}
//         </Card>
//         <Card>
//           <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:13}}>Shift Management</div>
//           {SHIFTS.map(s=><div key={s.name} onClick={()=>setShift(s.name)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",borderRadius:9,marginBottom:6,cursor:"pointer",background:shift===s.name?"#EFF6FF":"#F9FAFB",border:`1.5px solid ${shift===s.name?"#BFDBFE":"transparent"}`}}><div><div style={{fontSize:12,fontWeight:700,color:"#111827"}}>{s.name}</div><div style={{fontSize:11,color:"#9CA3AF"}}>{s.time}</div></div>{shift===s.name&&<span style={{fontSize:10,background:"#3B82F6",color:"#fff",borderRadius:20,padding:"2px 8px",fontWeight:700}}>Active</span>}</div>)}
//         </Card>
//       </div>
//       <Card>
//         <div style={{fontSize:13,fontWeight:800,color:"#111827",marginBottom:13}}>Attendance Log{isAdmin?` – ${TEAM.find(m=>m.id===viewMember)?.name}`:""}</div>
//         <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
//           <thead><tr style={{background:"#F8FAFC"}}>{["Date","Status","In","Out","Hours"].map(h=><th key={h} style={{padding:"7px 12px",textAlign:"left",fontSize:10,fontWeight:800,color:"#9CA3AF",letterSpacing:"0.06em",borderBottom:"1.5px solid #F1F5F9"}}>{h}</th>)}</tr></thead>
//           <tbody>{hist.map((r,i)=><tr key={i} style={{borderBottom:"1px solid #F8FAFC"}}><td style={{padding:"9px 12px",fontWeight:600,color:"#374151"}}>{r.date}</td><td style={{padding:"9px 12px"}}><Badge label={r.status}/></td><td style={{padding:"9px 12px",color:"#10B981",fontWeight:700}}>{r.in}</td><td style={{padding:"9px 12px",color:"#EF4444",fontWeight:700}}>{r.out}</td><td style={{padding:"9px 12px",color:"#374151"}}>{r.hours}</td></tr>)}</tbody>
//         </table>
//       </Card>
//     </div>
//   );
// }

// // ─── LEAVE ───────────────────────────────────────────────────────────────────
// function LeaveView({leaves,setLeaves,userId,isAdmin}){
//   const vis=isAdmin?leaves:leaves.filter(l=>l.employee===userId);
//   const [showForm,setShowForm]=useState(false),[form,setForm]=useState({employee:userId||1,type:"Casual Leave",from:"",to:"",reason:""});
//   const submit=()=>{if(!form.from||!form.to)return;setLeaves(p=>[...p,{id:Date.now(),...form,employee:parseInt(form.employee),status:"Pending"}]);setShowForm(false);setForm({employee:userId||1,type:"Casual Leave",from:"",to:"",reason:""});};
//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
//         <h2 style={{margin:0,fontSize:20,fontWeight:900,color:"#111827"}}>Leave Management</h2>
//         <button onClick={()=>setShowForm(true)} style={{padding:"8px 15px",background:"#3B82F6",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",color:"#fff"}}>+ Apply Leave</button>
//       </div>
//       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:13,marginBottom:20}}>
//         {[{l:"Total",v:vis.length,c:"#3B82F6"},{l:"Approved",v:vis.filter(l=>l.status==="Approved").length,c:"#10B981"},{l:"Pending",v:vis.filter(l=>l.status==="Pending").length,c:"#F59E0B"}].map(s=><Card key={s.l} style={{borderTop:`3px solid ${s.c}`}}><div style={{fontSize:24,fontWeight:900,color:s.c}}>{s.v}</div><div style={{fontSize:12,color:"#6B7280",fontWeight:700,marginTop:2}}>{s.l}</div></Card>)}
//       </div>
//       <div style={{display:"flex",flexDirection:"column",gap:9}}>
//         {vis.map(l=>{const emp=TEAM.find(m=>m.id===l.employee);return(
//           <Card key={l.id} style={{padding:"13px 18px"}}>
//             <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//               <div style={{display:"flex",gap:11,alignItems:"center"}}>
//                 {emp&&<Avatar member={emp} size={34}/>}
//                 <div><div style={{fontSize:13,fontWeight:700,color:"#111827"}}>{emp?.name}</div><div style={{fontSize:12,color:"#6B7280"}}>{l.type} · {l.from} → {l.to}</div><div style={{fontSize:11,color:"#9CA3AF",marginTop:1}}>Reason: {l.reason}</div></div>
//               </div>
//               <div style={{display:"flex",gap:7,alignItems:"center"}}>
//                 <Badge label={l.status}/>
//                 {isAdmin&&l.status==="Pending"&&<><button onClick={()=>setLeaves(p=>p.map(x=>x.id===l.id?{...x,status:"Approved"}:x))} style={{padding:"5px 10px",background:"#10B981",border:"none",borderRadius:7,fontSize:11,fontWeight:700,cursor:"pointer",color:"#fff"}}>Approve</button><button onClick={()=>setLeaves(p=>p.map(x=>x.id===l.id?{...x,status:"Rejected"}:x))} style={{padding:"5px 10px",background:"#FEF2F2",border:"1px solid #FECACA",borderRadius:7,fontSize:11,fontWeight:700,cursor:"pointer",color:"#DC2626"}}>Reject</button></>}
//               </div>
//             </div>
//           </Card>
//         );})}
//       </div>
//       <Modal open={showForm} onClose={()=>setShowForm(false)} title="Apply for Leave">
//         {isAdmin&&<Sel label="Employee" value={form.employee} onChange={e=>setForm(p=>({...p,employee:e.target.value}))}>{TEAM.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</Sel>}
//         <Sel label="Leave Type" value={form.type} onChange={e=>setForm(p=>({...p,type:e.target.value}))}>{LEAVE_TYPES.map(lt=><option key={lt}>{lt}</option>)}</Sel>
//         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11}}><Inp label="From" type="date" value={form.from} onChange={e=>setForm(p=>({...p,from:e.target.value}))}/><Inp label="To" type="date" value={form.to} onChange={e=>setForm(p=>({...p,to:e.target.value}))}/></div>
//         <div style={{marginBottom:13}}><label style={{display:"block",fontSize:12,fontWeight:700,color:"#374151",marginBottom:4}}>Reason</label><textarea value={form.reason} onChange={e=>setForm(p=>({...p,reason:e.target.value}))} rows={3} placeholder="Enter reason…" style={{width:"100%",boxSizing:"border-box",padding:"9px 12px",borderRadius:8,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB",resize:"none"}}/></div>
//         <button onClick={submit} style={{width:"100%",padding:12,background:"#3B82F6",color:"#fff",border:"none",borderRadius:10,fontSize:14,fontWeight:800,cursor:"pointer"}}>Submit Request</button>
//       </Modal>
//     </div>
//   );
// }

// // ─── CALENDAR ────────────────────────────────────────────────────────────────
// function CalendarView({tasks,userId,isAdmin}){
//   const vis=isAdmin?tasks:tasks.filter(t=>t.assignee===userId);
//   const [calView,setCalView]=useState("month");
//   const today=new Date(),[month,setMonth]=useState(today.getMonth()),[year,setYear]=useState(today.getFullYear());
//   const first=new Date(year,month,1).getDay(),count=new Date(year,month+1,0).getDate(),mName=new Date(year,month).toLocaleString("en-IN",{month:"long",year:"numeric"});
//   const tbd={};vis.forEach(t=>{if(t.dueDate){const[y,m,d]=t.dueDate.split("-").map(Number);if(y===year&&m-1===month){if(!tbd[d])tbd[d]=[];tbd[d].push(t);}}});
//   return(
//     <div>
//       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
//         <h2 style={{margin:0,fontSize:20,fontWeight:900,color:"#111827"}}>Calendar</h2>
//         <div style={{display:"flex",gap:8,alignItems:"center"}}>
//           <div style={{display:"flex",background:"#F3F4F6",borderRadius:8,padding:3}}>{["week","month"].map(v=><button key={v} onClick={()=>setCalView(v)} style={{padding:"5px 13px",borderRadius:6,border:"none",background:calView===v?"#fff":"transparent",color:calView===v?"#111827":"#6B7280",fontSize:12,fontWeight:700,cursor:"pointer"}}>{v==="week"?"Week":"Month"}</button>)}</div>
//           {calView==="month"&&<div style={{display:"flex",gap:5,alignItems:"center"}}><button onClick={()=>month===0?(setMonth(11),setYear(y=>y-1)):setMonth(m=>m-1)} style={{background:"#F3F4F6",border:"none",borderRadius:6,padding:"5px 10px",cursor:"pointer",fontWeight:700}}>‹</button><span style={{fontSize:13,fontWeight:800,color:"#111827",minWidth:120,textAlign:"center"}}>{mName}</span><button onClick={()=>month===11?(setMonth(0),setYear(y=>y+1)):setMonth(m=>m+1)} style={{background:"#F3F4F6",border:"none",borderRadius:6,padding:"5px 10px",cursor:"pointer",fontWeight:700}}>›</button></div>}
//         </div>
//       </div>
//       <Card>
//         <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,marginBottom:6}}>{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=><div key={d} style={{textAlign:"center",fontSize:10,fontWeight:800,color:"#9CA3AF",padding:"4px 0"}}>{d}</div>)}</div>
//         <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
//           {Array(first).fill(null).map((_,i)=><div key={"e"+i}/>)}
//           {Array(count).fill(null).map((_,i)=>{const day=i+1,isToday=day===today.getDate()&&month===today.getMonth()&&year===today.getFullYear(),dt=tbd[day]||[];return(
//             <div key={day} style={{minHeight:65,padding:"5px 6px",borderRadius:8,background:isToday?"#EFF6FF":"#F8FAFC",border:isToday?"1.5px solid #3B82F6":"1.5px solid transparent"}}>
//               <div style={{fontSize:11,fontWeight:isToday?900:600,color:isToday?"#3B82F6":"#374151",marginBottom:2}}>{day}</div>
//               {dt.slice(0,2).map(t=><div key={t.id} style={{fontSize:9,background:"#3B82F6",color:"#fff",borderRadius:3,padding:"1px 4px",marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.title}</div>)}
//               {dt.length>2&&<div style={{fontSize:9,color:"#6B7280"}}>+{dt.length-2}</div>}
//             </div>
//           );})}
//         </div>
//       </Card>
//     </div>
//   );
// }

// // ─── ITEM LISTS ──────────────────────────────────────────────────────────────
// function ItemListsView(){
//   const [lists,setLists]=useState([{id:1,listName:"Client Deliverables",items:["EcoHomely reel pack","Meera Basu ads creative","Shopzzy calendar PDF"]},{id:2,listName:"Weekly Checklist",items:["Review all task statuses","Send performance report","Schedule team standup"]}]);
//   const [active,setActive]=useState(1),[newName,setNewName]=useState(""),[newItem,setNewItem]=useState(""),[showNL,setShowNL]=useState(false);
//   const cur=lists.find(l=>l.id===active);
//   const addItem=()=>{if(!newItem.trim())return;setLists(p=>p.map(l=>l.id===active?{...l,items:[...l.items,newItem.trim()]}:l));setNewItem("");};
//   const makeList=()=>{if(!newName.trim())return;const nl={id:Date.now(),listName:newName.trim(),items:[]};setLists(p=>[...p,nl]);setActive(nl.id);setNewName("");setShowNL(false);};
//   return(
//     <div style={{display:"flex",gap:18}}>
//       <div style={{width:200,flexShrink:0}}>
//         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:11}}>
//           <span style={{fontSize:13,fontWeight:800,color:"#111827"}}>My Lists</span>
//           <button onClick={()=>setShowNL(p=>!p)} style={{width:24,height:24,background:"#EFF6FF",border:"none",borderRadius:6,cursor:"pointer",color:"#3B82F6",fontSize:16,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
//         </div>
//         {showNL&&<input value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&makeList()} placeholder="List name…" style={{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:8,border:"1.5px solid #3B82F6",fontSize:12,outline:"none",marginBottom:8}} autoFocus/>}
//         {lists.map(l=><div key={l.id} onClick={()=>setActive(l.id)} style={{padding:"8px 10px",borderRadius:9,cursor:"pointer",marginBottom:3,background:active===l.id?"#EFF6FF":"transparent",border:`1.5px solid ${active===l.id?"#BFDBFE":"transparent"}`}}><div style={{fontSize:12,fontWeight:700,color:"#111827"}}>📋 {l.listName}</div><div style={{fontSize:10,color:"#9CA3AF"}}>{l.items.length} items</div></div>)}
//       </div>
//       <div style={{flex:1}}>
//         {cur?(<Card>
//           <h3 style={{margin:"0 0 16px",fontSize:16,fontWeight:900,color:"#111827"}}>📋 {cur.listName}</h3>
//           <div style={{display:"flex",gap:8,marginBottom:14}}>
//             <input value={newItem} onChange={e=>setNewItem(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addItem()} placeholder="Add new item…" style={{flex:1,padding:"9px 13px",borderRadius:9,border:"1.5px solid #E5E7EB",fontSize:13,outline:"none",background:"#F9FAFB"}}/>
//             <button onClick={addItem} style={{padding:"9px 15px",background:"#3B82F6",border:"none",borderRadius:9,color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer"}}>Add</button>
//           </div>
//           {cur.items.length===0&&<div style={{color:"#9CA3AF",textAlign:"center",padding:24,fontSize:13}}>No items yet.</div>}
//           {cur.items.map((item,i)=>(
//             <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:"#F8FAFC",borderRadius:9,marginBottom:5}}>
//               <div style={{width:16,height:16,borderRadius:"50%",border:"2px solid #D1D5DB",flexShrink:0}}/>
//               <span style={{flex:1,fontSize:13,color:"#374151"}}>{item}</span>
//               <button onClick={()=>setLists(p=>p.map(l=>l.id===active?{...l,items:l.items.filter((_,j)=>j!==i)}:l))} style={{background:"none",border:"none",cursor:"pointer",color:"#D1D5DB",fontSize:16,padding:"0 3px"}}>×</button>
//             </div>
//           ))}
//         </Card>):<div style={{color:"#9CA3AF",textAlign:"center",padding:60}}>Select or create a list</div>}
//       </div>
//     </div>
//   );
// }

// // ─── APP SHELL ───────────────────────────────────────────────────────────────
// export default function App(){
//   const [session,setSession]=useState(null);
//   const [view,setView]=useState("dashboard");
//   const [tasks,setTasks]=useState(INIT_TASKS);
//   const [leaves,setLeaves]=useState(INIT_LEAVES);

//   if(!session) return <LoginScreen onLogin={(role,userId)=>{setSession({role,userId});setView("dashboard");}}/>;

//   const {role,userId}=session,isAdmin=role==="admin",currentUser=TEAM.find(m=>m.id===userId)||TEAM[0];

//   const NAV=isAdmin?[
//     {id:"dashboard",label:"Dashboard",  icon:"⊞",badge:0},
//     {id:"tasks",    label:"All Tasks",  icon:"✓", badge:tasks.filter(t=>t.status!=="Done").length},
//     {id:"messages", label:"Messages",   icon:"💬",badge:0},
//     {id:"attendance",label:"Attendance",icon:"📍",badge:0},
//     {id:"leave",    label:"Leave",      icon:"📅",badge:leaves.filter(l=>l.status==="Pending").length},
//     {id:"calendar", label:"Calendar",   icon:"🗓",badge:0},
//     {id:"itemlists",label:"Item Lists", icon:"📋",badge:0},
//   ]:[
//     {id:"dashboard",label:"My Dashboard",icon:"⊞",badge:0},
//     {id:"tasks",    label:"My Tasks",    icon:"✓", badge:tasks.filter(t=>t.assignee===userId&&t.status!=="Done").length},
//     {id:"messages", label:"Messages",   icon:"💬",badge:0},
//     {id:"attendance",label:"Attendance",icon:"📍",badge:0},
//     {id:"leave",    label:"My Leave",   icon:"📅",badge:0},
//     {id:"calendar", label:"Calendar",   icon:"🗓",badge:0},
//     {id:"itemlists",label:"Item Lists", icon:"📋",badge:0},
//   ];

//   const sidebarUser=isAdmin?{...TEAM[0],avatar:"AD",color:"#EF4444",name:"Admin",role:"Full Access"}:currentUser;

//   return(
//     <div style={{display:"flex",minHeight:"100vh",background:"#F8FAFC",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
//       <div style={{width:220,background:"#0F172A",display:"flex",flexDirection:"column",position:"fixed",top:0,left:0,bottom:0,zIndex:100}}>
//         <div style={{padding:"20px 16px 13px",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
//           <div style={{display:"flex",alignItems:"center",gap:9}}>
//             <div style={{width:32,height:32,background:"#3B82F6",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,color:"#fff"}}>G</div>
//             <div><div style={{color:"#fff",fontSize:13,fontWeight:900}}>Genie Media</div><div style={{color:"#64748B",fontSize:10}}>Workspace</div></div>
//           </div>
//         </div>
//         <div style={{padding:"8px 14px 4px"}}>
//           <div style={{display:"inline-flex",alignItems:"center",gap:5,background:isAdmin?"#FEF2F2":"#EFF6FF",borderRadius:20,padding:"2px 10px",border:`1px solid ${isAdmin?"#FECACA":"#BFDBFE"}`}}>
//             <span style={{fontSize:10}}>{isAdmin?"🛡":"👤"}</span>
//             <span style={{fontSize:9,fontWeight:800,color:isAdmin?"#DC2626":"#2563EB",letterSpacing:"0.07em"}}>{isAdmin?"ADMIN":"EMPLOYEE"}</span>
//           </div>
//         </div>
//         <nav style={{flex:1,padding:"5px 10px",overflowY:"auto"}}>
//           {NAV.map(item=>(
//             <button key={item.id} onClick={()=>setView(item.id)} style={{width:"100%",display:"flex",alignItems:"center",gap:9,padding:"9px 12px",borderRadius:9,border:"none",cursor:"pointer",marginBottom:2,textAlign:"left",background:view===item.id?"#1E293B":"transparent",color:view===item.id?"#fff":"#94A3B8"}}>
//               <span style={{fontSize:13,width:19,textAlign:"center"}}>{item.icon}</span>
//               <span style={{fontSize:12,fontWeight:view===item.id?800:500,flex:1}}>{item.label}</span>
//               {item.badge>0&&<span style={{background:isAdmin&&item.id==="leave"?"#F59E0B":"#3B82F6",color:"#fff",borderRadius:20,fontSize:9,fontWeight:800,padding:"1px 6px",minWidth:16,textAlign:"center"}}>{item.badge}</span>}
//             </button>
//           ))}
//         </nav>
//         <div style={{padding:"11px 14px",borderTop:"1px solid rgba(255,255,255,0.07)"}}>
//           <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:9}}>
//             <Avatar member={sidebarUser} size={28}/>
//             <div style={{flex:1,minWidth:0}}><div style={{color:"#fff",fontSize:11,fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{sidebarUser.name}</div><div style={{color:"#64748B",fontSize:10}}>{sidebarUser.role}</div></div>
//           </div>
//           <button onClick={()=>{setSession(null);setView("dashboard");}} style={{width:"100%",padding:"6px 0",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:7,color:"#64748B",fontSize:11,fontWeight:700,cursor:"pointer"}}>↩ Switch Role</button>
//         </div>
//       </div>

//       <div style={{marginLeft:220,flex:1,padding:28,overflowY:"auto",minHeight:"100vh"}}>
//         {view==="dashboard"&&(isAdmin?<AdminDashboard tasks={tasks} leaves={leaves} setView={setView}/>:<EmployeeDashboard user={currentUser} tasks={tasks} leaves={leaves} setView={setView}/>)}
//         {view==="tasks"     &&<TasksView      tasks={tasks} setTasks={setTasks} userId={userId} isAdmin={isAdmin}/>}
//         {view==="messages"  &&<MessagingView  userId={userId}/>}
//         {view==="attendance"&&<AttendanceView userId={isAdmin?null:userId} isAdmin={isAdmin}/>}
//         {view==="leave"     &&<LeaveView      leaves={leaves} setLeaves={setLeaves} userId={userId} isAdmin={isAdmin}/>}
//         {view==="calendar"  &&<CalendarView   tasks={tasks} userId={userId} isAdmin={isAdmin}/>}
//         {view==="itemlists" &&<ItemListsView/>}
//       </div>
//     </div>
//   );
// }
