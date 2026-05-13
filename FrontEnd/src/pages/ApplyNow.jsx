

import { useEffect, useRef, useState } from "react";
import {
  Home, ChevronRight, ChevronDown, GraduationCap,
  User, BookOpen, Layers,
  Phone, Mail, Clock, MessageCircle,
  ArrowLeft, ArrowRight, Plus, Check,
  Info, Upload, AlertCircle, Send, AlertTriangle, X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
function usePoppins() {
  useEffect(() => {
    if (document.getElementById("poppins-font")) return;
    const l = document.createElement("link");
    l.id = "poppins-font"; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(l);
  }, []);
}


const C = {
  primary:   "#062B6B",
  dark:      "#041F4D",
  yellow:    "#F4B400",
  bg:        "#F8FAFC",
  border:    "#E5E7EB",
  textDark:  "#111827",
  textGray:  "#6B7280",
  white:     "#FFFFFF",
  green:     "#16A34A",
  lightBlue: "#EFF6FF",
  red:       "#EF4444",
  redLight:  "#FEF2F2",
  redBorder: "#FECACA",
};


const STEPS = [
  { num:1, label:"Personal\nDetails",   short:"Personal Details"   },
  { num:2, label:"Academic\nDetails",   short:"Academic Details"   },
  { num:3, label:"Course\nDetails",     short:"Course Details"     },
  { num:4, label:"Additional\nDetails", short:"Additional Details" },
];

// ── Dropdown options
const genders       = ["Male","Female","Other","Prefer not to say"];
const categories    = ["General","OBC","SC","ST","EWS"];
const states        = ["Andhra Pradesh","Telangana","Tamil Nadu","Karnataka","Maharashtra","Kerala","Gujarat","Other"];
const qualLevels    = ["10th (SSC)","12th (HSC / Intermediate)","Diploma","UG Degree","PG Degree"];
const qualNames     = ["Science (MPC)","Science (BiPC)","Commerce","Arts / Humanities","Vocational"];
const boards        = ["BIEAP","TSBIE","CBSE","ICSE","Andhra University","Osmania University","Other"];
const years         = Array.from({length:10},(_,i)=>String(new Date().getFullYear()-i));
const marksTypes    = ["Percentage","CGPA","Grade"];
const courseList    = ["MBA","BBA","B.Sc Hotel Management","BCA","B.Com","BHM","Diploma in Culinary Arts","Diploma in Front Office","Diploma in Travel & Tourism"];
const specializations = {
  MBA:  ["Finance","Marketing","HR","Operations","Business Analytics"],
  BBA:  ["Finance","Marketing","HR","International Business"],
  "B.Sc Hotel Management":["Food & Beverage","Housekeeping","Front Office"],
  BCA:  ["Software Development","Data Science","Cyber Security"],
  "B.Com":["Accounting","Finance","Taxation"],
  BHM:  ["Hotel Operations","Event Management","Food Science"],
  default:["General"],
};
const batches       = ["2024-25","2025-26","2026-27"];
const studyModes    = ["Full Time","Part Time","Distance"];
const hearAbout     = ["Social Media","Friends / Family","Online Search","Newspaper","TV / Radio","School / College","Other"];
const relationships = ["Father","Mother","Brother","Sister","Spouse","Guardian","Other"];


// VALIDATION RULES

const validatePersonal = (d) => {
  const e = {};
  if (!d.firstName.trim())  e.firstName  = "First name is required";
  if (!d.lastName.trim())   e.lastName   = "Last name is required";
  if (!d.dob)               e.dob        = "Date of birth is required";
  if (!d.gender)            e.gender     = "Please select gender";
  if (!d.category)          e.category   = "Please select category";
  if (!d.phone.trim())      e.phone      = "Mobile number is required";
  else if (!/^\d{10}$/.test(d.phone.replace(/\s/g,""))) e.phone = "Enter a valid 10-digit number";
  if (!d.email.trim())      e.email      = "Email address is required";
  else if (!/\S+@\S+\.\S+/.test(d.email)) e.email = "Enter a valid email address";
  if (!d.fatherName.trim()) e.fatherName = "Father's name is required";
  if (!d.motherName.trim()) e.motherName = "Mother's name is required";
  if (!d.address.trim())    e.address    = "Address is required";
  if (!d.city.trim())       e.city       = "City is required";
  if (!d.state)             e.state      = "Please select state";
  if (!d.pincode.trim())    e.pincode    = "Pincode is required";
  else if (!/^\d{6}$/.test(d.pincode)) e.pincode = "Enter a valid 6-digit pincode";
  return e;
};

const validateAcademic = (d) => {
  const e = {};
  if (!d.level)          e.level     = "Please select qualification level";
  if (!d.name)           e.name      = "Please select qualification name";
  if (!d.board)          e.board     = "Please select board / university";
  if (!d.school.trim())  e.school    = "School / college name is required";
  if (!d.year)           e.year      = "Please select year";
  if (!d.roll.trim())    e.roll      = "Roll number is required";
  if (!d.marksType)      e.marksType = "Please select marks type";
  if (!d.obtained.trim())e.obtained  = "Obtained marks / CGPA is required";
  if (!d.total.trim())   e.total     = "Total marks / CGPA is required";
  return e;
};

const validateCourse = (d) => {
  const e = {};
  if (!d.course)       e.course      = "Please select a course";
  if (!d.batch)        e.batch       = "Please select a batch / year";
  if (!d.mode)         e.mode        = "Please select study mode";
  if (!d.source)       e.source      = "Please select how you heard about us";
  if (!d.scholarship)  e.scholarship = "Please select an option";
  if (!d.financial)    e.financial   = "Please select an option";
  if (!d.prevApplied)  e.prevApplied = "Please select an option";
  return e;
};

const validateAdditional = (d) => {
  const e = {};
  if (!d.emergName.trim())  e.emergName  = "Emergency contact name is required";
  if (!d.relation)          e.relation   = "Please select relationship";
  if (!d.emergPhone.trim()) e.emergPhone = "Emergency contact number is required";
  else if (!/^\d{10}$/.test(d.emergPhone.replace(/\s/g,""))) e.emergPhone = "Enter a valid 10-digit number";
  if (!d.hasMedical)        e.hasMedical = "Please select an option";
  if (d.hasMedical==="Yes" && !d.medicalDesc.trim()) e.medicalDesc = "Please describe the medical condition";
  if (!d.photo)   e.photo   = "Passport photo is required";
  if (!d.cert10)  e.cert10  = "10th certificate is required";
  if (!d.cert12)  e.cert12  = "12th certificate is required";
  if (!d.declared) e.declared = "Please accept the declaration to continue";
  return e;
};

const validators = [validatePersonal, validateAcademic, validateCourse, validateAdditional];


// FIELD COMPONENTS (error-aware)

const FieldLabel = ({ text, required, optional }) => (
  <label className="block text-[13px] font-semibold mb-[7px]" style={{color:C.textDark}}>
    {text}
    {required && <span style={{color:C.red}}> *</span>}
    {optional && <span style={{color:C.textGray, fontWeight:400}}> (Optional)</span>}
  </label>
);

const ErrorMsg = ({ msg }) =>
  msg ? (
    <p className="flex items-center gap-1 text-[11px] mt-1.5 font-medium" style={{color:C.red}}>
      <AlertCircle size={11} strokeWidth={2.5}/>{msg}
    </p>
  ) : null;

const inputStyle = (err) => ({
  borderColor:     err ? C.red       : C.border,
  backgroundColor: err ? C.redLight  : C.white,
  fontSize: 13, color: C.textDark,
  fontFamily: "'Poppins',sans-serif",
});

const InputField = ({ label, placeholder, value, onChange, type="text", required, optional, hint, error, id }) => (
  <div className="flex flex-col" id={id}>
    <FieldLabel text={label} required={required} optional={optional}/>
    <input
      type={type} placeholder={placeholder}
      value={value} onChange={e=>onChange(e.target.value)}
      className="w-full border rounded-lg px-3 py-[10px] text-[13px] outline-none
                 transition-all focus:ring-1 placeholder-[#9CA3AF]"
      style={{
        ...inputStyle(error),
   
      }}
      onFocus={e=>{if(!error)e.target.style.borderColor=C.primary;}}
      onBlur={e=>{if(!error)e.target.style.borderColor=C.border;}}
    />
    {hint && !error && <p className="text-[11px] mt-1" style={{color:C.textGray}}>{hint}</p>}
    <ErrorMsg msg={error}/>
  </div>
);

const SelectField = ({ label, options, value, onChange, placeholder, required, optional, hint, error, id }) => (
  <div className="flex flex-col" id={id}>
    <FieldLabel text={label} required={required} optional={optional}/>
    <div className="relative">
      <select
        value={value} onChange={e=>onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-[10px] text-[13px] outline-none
                   transition-all appearance-none cursor-pointer"
        style={{...inputStyle(error), color: value ? C.textDark : C.textGray}}
      >
        <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={15} color={error ? C.red : C.textGray} strokeWidth={2.5}
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
    </div>
    {hint && !error && <p className="text-[11px] mt-1" style={{color:C.textGray}}>{hint}</p>}
    <ErrorMsg msg={error}/>
  </div>
);

const TextareaField = ({ label, placeholder, value, onChange, required, optional, rows=3, error, id }) => (
  <div className="flex flex-col" id={id}>
    <FieldLabel text={label} required={required} optional={optional}/>
    <textarea
      placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)}
      rows={rows}
      className="w-full border rounded-lg px-3 py-[10px] text-[13px] outline-none
                 transition-all placeholder-[#9CA3AF] resize-none"
      style={inputStyle(error)}
    />
    <ErrorMsg msg={error}/>
  </div>
);

const RadioGroup = ({ label, options, value, onChange, required, error, id }) => (
  <div className="flex flex-col" id={id}>
    <FieldLabel text={label} required={required}/>
    <div className="flex flex-wrap gap-3 mt-0.5">
      {options.map(o=>(
        <button key={o} type="button" onClick={()=>onChange(o)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-[13px] font-medium transition-all"
          style={{
            borderColor:     value===o ? C.primary : error ? C.red : C.border,
            backgroundColor: value===o ? "#EFF6FF" : error ? C.redLight : C.white,
            color:           value===o ? C.primary : C.textGray,
          }}>
          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
            style={{borderColor: value===o ? C.primary : error ? C.red : C.border}}>
            {value===o && <div className="w-2 h-2 rounded-full" style={{backgroundColor:C.primary}}/>}
          </div>
          {o}
        </button>
      ))}
    </div>
    <ErrorMsg msg={error}/>
  </div>
);

const FileUpload = ({ label, hint, value, onChange, required, optional, error, id }) => (
  <div className="flex flex-col" id={id}>
    <FieldLabel text={label} required={required} optional={optional}/>
    <label
      className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl py-5 cursor-pointer transition-all hover:border-[#062B6B] hover:bg-[#EFF6FF]"
      style={{
        borderColor:     value ? C.primary : error ? C.red : "#CBD5E1",
        backgroundColor: value ? "#EFF6FF" : error ? C.redLight : "#F8FAFC",
      }}>
      <input type="file" className="hidden" onChange={e=>onChange(e.target.files[0])}/>
      <Upload size={20} color={value ? C.primary : error ? C.red : C.textGray} strokeWidth={1.8}/>
      <p className="text-[12px] font-medium mt-1.5" style={{color: value ? C.primary : error ? C.red : C.textGray}}>
        {value ? value.name : "Click to upload"}
      </p>
      {hint && <p className="text-[11px] mt-0.5" style={{color:C.textGray}}>{hint}</p>}
    </label>
    <ErrorMsg msg={error}/>
  </div>
);

// ── Error banner 
const ErrorBanner = ({ count, onClose }) => (
  <div className="flex items-center gap-3 rounded-xl px-4 py-3 mb-5 border"
       style={{backgroundColor:"#FEF2F2", borderColor:"#FECACA"}}>
    <AlertTriangle size={18} color={C.red} className="flex-shrink-0"/>
    <p className="text-[13px] font-semibold flex-1" style={{color:"#991B1B"}}>
      Please fill in {count} required field{count>1?"s":""} before proceeding.
    </p>
    <button onClick={onClose}><X size={16} color="#991B1B"/></button>
  </div>
);

// ── Shared layout helpers
const SectionDivider = ({ title }) => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px" style={{backgroundColor:C.border}}/>
    <span className="text-[11px] font-semibold uppercase tracking-wider px-2" style={{color:C.textGray}}>{title}</span>
    <div className="flex-1 h-px" style={{backgroundColor:C.border}}/>
  </div>
);

const FormCard = ({ icon:Icon, iconBg, title, subtitle, children }) => (
  <div className="rounded-2xl border overflow-hidden" style={{backgroundColor:C.white, borderColor:C.border}}>
    <div className="flex items-center gap-4 px-5 sm:px-7 py-5 border-b" style={{borderColor:C.border}}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
           style={{backgroundColor: iconBg || C.lightBlue}}>
        <Icon size={22} color={C.primary} strokeWidth={1.8}/>
      </div>
      <div>
        <h2 className="font-bold text-[15px] sm:text-[17px]" style={{color:C.textDark}}>{title}</h2>
        <p className="text-[12px] sm:text-[13px] mt-0.5" style={{color:C.textGray}}>{subtitle}</p>
      </div>
    </div>
    <div className="px-5 sm:px-7 py-6">{children}</div>
  </div>
);

// ── Stepper 
const Stepper = ({ active }) => (
  <div className="relative flex items-start justify-between px-2 sm:px-6">
    <div className="absolute top-5 h-[2px] pointer-events-none"
         style={{
           left:"calc(10% + 20px)", right:"calc(10% + 20px)",
           background:`linear-gradient(to right,
             ${C.green} ${((Math.min(active,2)-1)/(STEPS.length-1))*100}%,
             ${C.primary} ${((Math.min(active,2)-1)/(STEPS.length-1))*100}% ${((active-1)/(STEPS.length-1))*100}%,
             ${C.border} ${((active-1)/(STEPS.length-1))*100}%)`,
           zIndex:0,
         }}/>
    {STEPS.map(step=>{
      const done    = step.num < active;
      const current = step.num === active;
      return (
        <div key={step.num} className="flex flex-col items-center gap-2 z-10" style={{flex:1}}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300"
               style={{
                 backgroundColor: done ? C.green : current ? C.primary : C.white,
                 color:           done||current ? C.white : C.textGray,
                 border:          done ? `2px solid ${C.green}` : current ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
                 boxShadow:       current ? `0 0 0 4px ${C.primary}20` : "none",
               }}>
            {done ? <Check size={16} strokeWidth={2.5}/> : step.num}
          </div>
          <span className="text-center text-[10px] sm:text-[11px] font-semibold whitespace-pre-line leading-tight"
                style={{color: current ? C.primary : done ? C.green : C.textGray}}>
            {step.label}
          </span>
        </div>
      );
    })}
  </div>
);

// ── Sidebar 
const ProgressSidebar = ({ active }) => (
  <div className="rounded-2xl border p-5" style={{backgroundColor:C.white, borderColor:C.border}}>
    <h3 className="font-bold text-[15px] mb-4" style={{color:C.textDark}}>Application Progress</h3>
    <div className="flex flex-col gap-2">
      {STEPS.map(step=>{
        const done    = step.num < active;
        const current = step.num === active;
        return (
          <div key={step.num}
               className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all"
               style={{
                 backgroundColor: current ? "#EFF6FF" : "transparent",
                 border: current ? `1.5px solid ${C.primary}25` : "1.5px solid transparent",
               }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                 style={{
                   backgroundColor: done ? C.green : current ? C.primary : "#F3F4F6",
                   color: done||current ? C.white : C.textGray,
                 }}>
              {done ? <Check size={13} strokeWidth={2.5}/> : step.num}
            </div>
            <span className="text-[13px] font-medium"
                  style={{color: current ? C.primary : done ? C.green : C.textGray}}>
              {step.short}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const NeedHelpCard = ({ navigate }) => (
    <div className="rounded-2xl border mt-4 p-5" style={{backgroundColor:"#EFF6FF", borderColor:"#BFDBFE"}}>
    <h3 className="font-bold text-[15px] mb-1" style={{color:C.textDark}}>Need Help?</h3>
    <p className="text-[12px] mb-4" style={{color:C.textGray}}>Our admission counselors are here to help you.</p>
    <div className="flex flex-col gap-3 mb-4">
      {[
        {Icon:Phone, text:"0891-2951555"},
        {Icon:Mail,  text:"admissions@alliancedegreecollege.com"},
        {Icon:Clock, text:"Mon - Sat: 9:00 AM - 6:00 PM"},
      ].map(({Icon,text},i)=>(
        <div key={i} className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
               style={{backgroundColor:`${C.primary}18`}}>
            <Icon size={13} color={C.primary} strokeWidth={2}/>
          </div>
          <span className="text-[12px] font-medium break-all" style={{color:C.textDark}}>{text}</span>
        </div>
      ))}
    </div>
    <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:opacity-90" onClick={()=>{navigate("/contact")}}
            style={{backgroundColor:C.primary, color:C.white}}>
      <MessageCircle size={15} strokeWidth={2}/> Talk to Counselor
    </button>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// STEP 1 — PERSONAL DETAILS
// ══════════════════════════════════════════════════════════════════════════════
const PersonalDetailsForm = ({ data, onChange, errors }) => {
  const f = (field) => (val) => onChange({...data, [field]:val});
  return (
    <FormCard icon={User} title="Personal Details" subtitle="Please provide your personal information">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField  id="f-firstName"  label="First Name"     placeholder="Enter first name"     value={data.firstName}  onChange={f("firstName")}  required error={errors.firstName}/>
          <InputField  id="f-lastName"   label="Last Name"      placeholder="Enter last name"      value={data.lastName}   onChange={f("lastName")}   required error={errors.lastName}/>
          <InputField  id="f-dob"        label="Date of Birth"  placeholder="DD/MM/YYYY" type="date" value={data.dob}    onChange={f("dob")}        required error={errors.dob}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <SelectField id="f-gender"     label="Gender"         options={genders}    value={data.gender}    onChange={f("gender")}    required error={errors.gender}/>
          <SelectField id="f-category"   label="Category"       options={categories} value={data.category}  onChange={f("category")}  required error={errors.category}/>
          <InputField  id="f-nationality"label="Nationality"    placeholder="Enter nationality"    value={data.nationality} onChange={f("nationality")} required error={errors.nationality}/>
        </div>

        <SectionDivider title="Contact Information"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField id="f-phone"    label="Mobile Number"   type="tel"   placeholder="10-digit mobile number"  value={data.phone}    onChange={f("phone")}    required error={errors.phone}/>
          <InputField id="f-email"    label="Email Address"   type="email" placeholder="Enter email address"     value={data.email}    onChange={f("email")}    required error={errors.email}/>
          <InputField id="f-altPhone" label="Alternate Phone" type="tel"   placeholder="Alternate number"        value={data.altPhone} onChange={f("altPhone")} optional/>
        </div>

        <SectionDivider title="Family Information"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField id="f-fatherName"  label="Father's Name"        placeholder="Enter father's name"   value={data.fatherName}  onChange={f("fatherName")}  required error={errors.fatherName}/>
          <InputField id="f-fatherOccup" label="Father's Occupation"   placeholder="Enter occupation"      value={data.fatherOccup} onChange={f("fatherOccup")} optional/>
          <InputField id="f-motherName"  label="Mother's Name"        placeholder="Enter mother's name"   value={data.motherName}  onChange={f("motherName")}  required error={errors.motherName}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField id="f-income"  label="Annual Family Income" placeholder="e.g. 3,00,000"     value={data.income}  onChange={f("income")}  optional/>
          <InputField id="f-aadhar"  label="Aadhar Number"        placeholder="12-digit Aadhar"   value={data.aadhar}  onChange={f("aadhar")}  optional/>
        </div>

        <SectionDivider title="Address"/>

        <TextareaField id="f-address" label="Current Address" placeholder="Enter full address" value={data.address} onChange={f("address")} required rows={2} error={errors.address}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField  id="f-city"    label="City"    placeholder="Enter city"    value={data.city}    onChange={f("city")}    required error={errors.city}/>
          <SelectField id="f-state"   label="State"   options={states}            value={data.state}   onChange={f("state")}   required error={errors.state}/>
          <InputField  id="f-pincode" label="Pincode" placeholder="6-digit pincode" value={data.pincode} onChange={f("pincode")} required error={errors.pincode}/>
        </div>
      </div>
    </FormCard>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// STEP 2 — ACADEMIC DETAILS
// ══════════════════════════════════════════════════════════════════════════════
const emptyQual = () => ({id:Date.now(),level:"",name:"",board:"",school:"",year:"",roll:"",marksType:"",obtained:"",total:""});

const AcademicDetailsForm = ({ data, onChange, errors }) => {
  const f = (field) => (val) => onChange({...data, [field]:val});
  const updateExtra = (id,field,val) => onChange({...data, extraQuals:data.extraQuals.map(q=>q.id===id?{...q,[field]:val}:q)});
  return (
    <FormCard icon={GraduationCap} title="Academic Details" subtitle="Please provide your educational information">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <SelectField id="f-level"     label="Qualification Level"    options={qualLevels} value={data.level}     onChange={f("level")}     required placeholder="Select qualification level"  error={errors.level}/>
          <SelectField id="f-name"      label="Qualification Name"     options={qualNames}  value={data.name}      onChange={f("name")}      required placeholder="Select qualification"         error={errors.name}/>
          <SelectField id="f-board"     label="Board / University"     options={boards}     value={data.board}     onChange={f("board")}     required placeholder="Select board / university"    error={errors.board}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField  id="f-school"    label="School / College Name"             placeholder="Enter school / college name"  value={data.school}    onChange={f("school")}    required error={errors.school}/>
          <SelectField id="f-year"      label="Year of Passing / Appearing"       options={years}      value={data.year}      onChange={f("year")}      required placeholder="Select year"         error={errors.year}/>
          <InputField  id="f-roll"      label="Roll Number / Registration Number" placeholder="Enter roll number"           value={data.roll}      onChange={f("roll")}      required error={errors.roll}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <SelectField id="f-marksType" label="Marks Type"            options={marksTypes} value={data.marksType} onChange={f("marksType")} required placeholder="Select marks type" hint="(Percentage / CGPA)" error={errors.marksType}/>
          <InputField  id="f-obtained"  label="Obtained Marks / CGPA" placeholder="e.g. 85% or 8.5 CGPA"  value={data.obtained}  onChange={f("obtained")}  required hint="(e.g. 85% or 8.5 CGPA)"  error={errors.obtained}/>
          <InputField  id="f-total"     label="Total Marks / CGPA"    placeholder="e.g. 100% or 10 CGPA"  value={data.total}     onChange={f("total")}     required hint="(e.g. 100% or 10 CGPA)"  error={errors.total}/>
        </div>

        {data.extraQuals.map((eq,idx)=>(
          <div key={eq.id} className="border rounded-xl p-4 sm:p-5" style={{borderColor:C.border, backgroundColor:"#FAFAFA"}}>
            <p className="text-[12px] font-bold mb-4" style={{color:C.primary}}>Additional Qualification {idx+1}</p>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <SelectField label="Qualification Level" options={qualLevels} value={eq.level}     onChange={v=>updateExtra(eq.id,"level",v)}     required placeholder="Select level"/>
                <SelectField label="Qualification Name"  options={qualNames}  value={eq.name}      onChange={v=>updateExtra(eq.id,"name",v)}      required placeholder="Select name"/>
                <SelectField label="Board / University"  options={boards}     value={eq.board}     onChange={v=>updateExtra(eq.id,"board",v)}     required placeholder="Select board"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField  label="School / College Name" placeholder="Enter school name" value={eq.school}    onChange={v=>updateExtra(eq.id,"school",v)}    required/>
                <SelectField label="Year of Passing"       options={years}                 value={eq.year}      onChange={v=>updateExtra(eq.id,"year",v)}      required placeholder="Select year"/>
                <InputField  label="Roll Number"           placeholder="Enter roll number" value={eq.roll}      onChange={v=>updateExtra(eq.id,"roll",v)}      required/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <SelectField label="Marks Type"            options={marksTypes}            value={eq.marksType} onChange={v=>updateExtra(eq.id,"marksType",v)} required placeholder="Select type"/>
                <InputField  label="Obtained Marks / CGPA" placeholder="Enter marks"       value={eq.obtained}  onChange={v=>updateExtra(eq.id,"obtained",v)}  required/>
                <InputField  label="Total Marks / CGPA"    placeholder="Enter total"       value={eq.total}     onChange={v=>updateExtra(eq.id,"total",v)}     required/>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl p-4 border"
             style={{backgroundColor:"#F8FAFC", borderColor:C.border}}>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{backgroundColor:C.lightBlue}}>
              <Info size={13} color={C.primary} strokeWidth={2}/>
            </div>
            <div>
              <p className="text-[13px] font-semibold" style={{color:C.textDark}}>
                Add More Qualification <span style={{color:C.textGray, fontWeight:400}}>(Optional)</span>
              </p>
              <p className="text-[12px] mt-0.5" style={{color:C.textGray}}>If you have more than one qualification, you can add it.</p>
            </div>
          </div>
          <button onClick={()=>onChange({...data, extraQuals:[...data.extraQuals, emptyQual()]})}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-[13px] font-semibold
                       transition-all hover:bg-[#062B6B] hover:text-white hover:border-[#062B6B] whitespace-nowrap flex-shrink-0"
            style={{borderColor:C.primary, color:C.primary}}>
            <Plus size={14} strokeWidth={2.5}/> Add Another Qualification
          </button>
        </div>
      </div>
    </FormCard>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// STEP 3 — COURSE DETAILS
// ══════════════════════════════════════════════════════════════════════════════
const CourseDetailsForm = ({ data, onChange, errors }) => {
  const f = (field) => (val) => onChange({...data, [field]:val});
  const specOptions = data.course ? (specializations[data.course] || specializations.default) : [];
  return (
    <FormCard icon={BookOpen} title="Course Details" subtitle="Select your preferred course and study options">
      <div className="flex flex-col gap-5">
        <SectionDivider title="Course Selection"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <SelectField id="f-course" label="Course Interested In"   options={courseList}   value={data.course}  onChange={val=>{onChange({...data,course:val,specialization:""});}} required placeholder="Select course"          error={errors.course}/>
          <SelectField            label="Specialization / Stream" options={specOptions}  value={data.specialization} onChange={f("specialization")} optional placeholder="Select specialization"/>
          <SelectField id="f-batch"  label="Preferred Batch / Year" options={batches}     value={data.batch}   onChange={f("batch")}   required placeholder="Select batch"           error={errors.batch}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <SelectField id="f-mode"   label="Preferred Study Mode"            options={studyModes} value={data.mode}   onChange={f("mode")}   required placeholder="Select mode"   error={errors.mode}/>
          <SelectField id="f-source" label="How Did You Hear About Us?"      options={hearAbout}  value={data.source} onChange={f("source")} required placeholder="Select source" error={errors.source}/>
        </div>

        <SectionDivider title="Scholarship & Financial Aid"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <RadioGroup id="f-scholarship" label="Are you applying for Scholarship?" options={["Yes","No"]} value={data.scholarship} onChange={f("scholarship")} required error={errors.scholarship}/>
          <RadioGroup id="f-financial"   label="Do you need Financial Aid?"        options={["Yes","No"]} value={data.financial}   onChange={f("financial")}   required error={errors.financial}/>
        </div>

        <SectionDivider title="Previous Application"/>
        <RadioGroup id="f-prevApplied" label="Have you previously applied to Alliance Degree College?" options={["Yes","No"]} value={data.prevApplied} onChange={f("prevApplied")} required error={errors.prevApplied}/>
        {data.prevApplied==="Yes" && (
          <InputField label="Previous Application ID" placeholder="Enter application ID" value={data.prevAppId} onChange={f("prevAppId")} optional/>
        )}

        <SectionDivider title="Additional Preferences"/>
        <TextareaField label="Any Specific Requirements or Preferences"           placeholder="Write any specific requirements about the course..."      value={data.preferences} onChange={f("preferences")} optional rows={3}/>
        <TextareaField label="Skills, Achievements, or Extracurricular Activities" placeholder="Describe your skills, awards, certifications, sports..." value={data.skills}       onChange={f("skills")}       optional rows={3}/>
      </div>
    </FormCard>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// STEP 4 — ADDITIONAL DETAILS
// ══════════════════════════════════════════════════════════════════════════════
const AdditionalDetailsForm = ({ data, onChange, errors }) => {
  const f = (field) => (val) => onChange({...data, [field]:val});
  return (
    <FormCard icon={Layers} title="Additional Details" subtitle="Emergency contact, documents & declaration">
      <div className="flex flex-col gap-5">
        <SectionDivider title="Emergency Contact"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <InputField  id="f-emergName"  label="Emergency Contact Name"   placeholder="Enter contact name"   value={data.emergName}  onChange={f("emergName")}  required error={errors.emergName}/>
          <SelectField id="f-relation"   label="Relationship"             options={relationships}             value={data.relation}   onChange={f("relation")}   required placeholder="Select relationship" error={errors.relation}/>
          <InputField  id="f-emergPhone" label="Emergency Contact Number" type="tel" placeholder="10-digit number" value={data.emergPhone} onChange={f("emergPhone")} required error={errors.emergPhone}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <InputField label="Alternate Emergency Number" type="tel"   placeholder="Alternate number"       value={data.emergAlt}   onChange={f("emergAlt")}   optional/>
          <InputField label="Emergency Contact Email"    type="email" placeholder="Enter contact email"    value={data.emergEmail} onChange={f("emergEmail")} optional/>
        </div>

        <SectionDivider title="Health Information"/>
        <RadioGroup id="f-hasMedical" label="Do you have any medical conditions or disabilities?" options={["Yes","No"]} value={data.hasMedical} onChange={f("hasMedical")} required error={errors.hasMedical}/>
        {data.hasMedical==="Yes" && (
          <TextareaField id="f-medicalDesc" label="Please describe your medical condition" placeholder="Describe medical conditions or special assistance required..." value={data.medicalDesc} onChange={f("medicalDesc")} required rows={3} error={errors.medicalDesc}/>
        )}

        <SectionDivider title="Document Uploads"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <FileUpload id="f-photo"  label="Passport Photo"       hint="JPG/PNG, max 2MB" value={data.photo}  onChange={f("photo")}  required error={errors.photo}/>
          <FileUpload id="f-cert10" label="10th Certificate"     hint="PDF/JPG, max 5MB" value={data.cert10} onChange={f("cert10")} required error={errors.cert10}/>
          <FileUpload id="f-cert12" label="12th Certificate"     hint="PDF/JPG, max 5MB" value={data.cert12} onChange={f("cert12")} required error={errors.cert12}/>
          <FileUpload               label="Transfer Certificate" hint="PDF/JPG, max 5MB" value={data.tc}     onChange={f("tc")}     optional/>
          <FileUpload               label="Aadhar Card"          hint="PDF/JPG, max 2MB" value={data.aadharFile} onChange={f("aadharFile")} optional/>
          <FileUpload               label="Income Certificate"   hint="PDF/JPG, max 5MB" value={data.income} onChange={f("income")} optional/>
        </div>

        <SectionDivider title="Declaration"/>
        <div className="rounded-xl border p-4 sm:p-5" style={{backgroundColor:"#FFFBEB", borderColor: errors.declared ? C.red : "#FDE68A"}}>
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle size={18} color="#D97706" strokeWidth={2} className="flex-shrink-0 mt-0.5"/>
            <p className="text-[13px] leading-relaxed" style={{color:"#92400E"}}>
              I hereby declare that all information provided in this application is true, complete, and correct to the best of my knowledge and belief. I understand that any false statement may result in rejection of my application or cancellation of admission.
            </p>
          </div>
          <button type="button" onClick={()=>onChange({...data, declared:!data.declared})}
            className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
                 style={{
                   backgroundColor: data.declared ? C.primary : C.white,
                   border: `2px solid ${data.declared ? C.primary : errors.declared ? C.red : C.border}`,
                 }}>
              {data.declared && <Check size={12} color={C.white} strokeWidth={3}/>}
            </div>
            <span className="text-[13px] font-semibold" style={{color: errors.declared ? C.red : C.textDark}}>
              I agree to the terms &amp; conditions and confirm the above declaration
            </span>
          </button>
          <ErrorMsg msg={errors.declared}/>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded flex items-center justify-center" style={{backgroundColor:C.lightBlue}}>
            <Info size={10} color={C.primary}/>
          </div>
          <p className="text-[11px]" style={{color:C.textGray}}>
            Your information is protected and will only be used for admission purposes.
          </p>
        </div>
      </div>
    </FormCard>
  );
};

// ── Success ───────────────────────────────────────────────────────────────────
const SuccessScreen = () => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
         style={{backgroundColor:`${C.green}15`}}>
      <Check size={38} color={C.green} strokeWidth={2.5}/>
    </div>
    <h2 className="font-extrabold text-2xl sm:text-3xl mb-3" style={{color:C.textDark}}>Application Submitted!</h2>
    <p className="text-[15px] mb-1" style={{color:C.textGray, maxWidth:420}}>Thank you for applying to Alliance Degree College.</p>
    <p className="text-[14px] mb-8" style={{color:C.textGray, maxWidth:420}}>Our admissions team will review your application and contact you within 2–3 working days.</p>
    <div className="flex flex-col sm:flex-row gap-3">
      <button className="px-8 py-3 rounded-xl font-bold text-[14px] transition-all hover:opacity-90"
              style={{backgroundColor:C.primary, color:C.white}}>Go to Dashboard</button>
      <button className="px-8 py-3 rounded-xl font-semibold text-[14px] border transition-all hover:bg-gray-50"
              style={{borderColor:C.border, color:C.textGray}}>Back to Home</button>
    </div>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// INITIAL STATE
// ══════════════════════════════════════════════════════════════════════════════
const initPersonal    = { firstName:"",lastName:"",dob:"",gender:"",category:"",nationality:"India",phone:"",email:"",altPhone:"",fatherName:"",fatherOccup:"",motherName:"",income:"",aadhar:"",address:"",city:"",state:"",pincode:"" };
const initAcademic    = { level:"",name:"",board:"",school:"",year:"",roll:"",marksType:"",obtained:"",total:"",extraQuals:[] };
const initCourse      = { course:"",specialization:"",batch:"",mode:"",source:"",scholarship:"",financial:"",prevApplied:"",prevAppId:"",preferences:"",skills:"" };
const initAdditional  = { emergName:"",relation:"",emergPhone:"",emergAlt:"",emergEmail:"",hasMedical:"",medicalDesc:"",photo:null,cert10:null,cert12:null,tc:null,aadharFile:null,income:null,declared:false };

// ══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
export default function ApplyNow() {
  const navigate=useNavigate()
  usePoppins();

  const formTopRef = useRef(null);

  const [activeStep, setActiveStep] = useState(1);
  const [submitted,  setSubmitted]  = useState(false);
  const [personal,   setPersonal]   = useState(initPersonal);
  const [academic,   setAcademic]   = useState(initAcademic);
  const [course,     setCourse]     = useState(initCourse);
  const [additional, setAdditional] = useState(initAdditional);

  // errors per step — only shown after user clicks Next
  const [errors,     setErrors]     = useState({});
  const [showBanner, setShowBanner] = useState(false);

  const stepData = [personal, academic, course, additional];

  // ── Validate current step ─────────────────────────────────────────────────
  const runValidation = () => {
    const validate = validators[activeStep - 1];
    const errs     = validate(stepData[activeStep - 1]);
    setErrors(errs);
    return errs;
  };

  // ── Scroll to first error field ───────────────────────────────────────────
  const scrollToFirstError = (errs) => {
    const keys = Object.keys(errs);
    if (!keys.length) return;
    // Try by id
    const firstId = `f-${keys[0]}`;
    const el = document.getElementById(firstId);
    if (el) {
      el.scrollIntoView({ behavior:"smooth", block:"center" });
    } else {
      formTopRef.current?.scrollIntoView({ behavior:"smooth", block:"start" });
    }
  };

  // ── Next / Submit ─────────────────────────────────────────────────────────
  const handleNext = () => {
    const errs = runValidation();
    if (Object.keys(errs).length > 0) {
      setShowBanner(true);
      scrollToFirstError(errs);
      return;
    }
    setShowBanner(false);
    setErrors({});
    if (activeStep < 4) {
      setActiveStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setErrors({});
    setShowBanner(false);
    if (activeStep > 1) {
      setActiveStep(s => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Clear error for a field as soon as user starts typing
  const clearError = (field) => {
    if (errors[field]) setErrors(prev => { const n={...prev}; delete n[field]; return n; });
  };

  // Wrap setters to clear per-field errors on change
  const makeOnChange = (setter, stepErrors) => (newData) => {
    setter(newData);
    // clear errors for any field that now has a value
    const updated = { ...errors };
    let changed = false;
    Object.keys(stepErrors || errors).forEach(k => {
      const v = newData[k];
      if (v !== undefined && v !== null && v !== "" && v !== false) {
        delete updated[k]; changed = true;
      }
    });
    if (changed) {
      setErrors(updated);
      if (Object.keys(updated).length === 0) setShowBanner(false);
    }
  };

  const errCount  = Object.keys(errors).length;
  const isLastStep = activeStep === 4;

  return (
    <div className="min-h-screen" style={{ fontFamily:"'Poppins',sans-serif", backgroundColor:C.bg }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight:220 }}>
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=75"
             alt="Campus" className="absolute inset-0 w-full h-full object-cover object-center"/>
        <div className="absolute inset-0"
             style={{ background:"linear-gradient(to right,rgba(2, 29, 75, 0.93) 45%,rgba(6,43,107,0.5) 100%)" }}/>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pb-14">
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
            <Home size={13} color="#9CA3AF"/>
            <span className="text-gray-400 text-xs">Home</span>
            <ChevronRight size={13} color="#9CA3AF"/>
            <span className="text-gray-300 text-xs">Apply Now</span>
          </nav>
          <h1 className="font-extrabold text-white mb-3 leading-tight"
              style={{ fontSize:"clamp(2rem,5vw,2.75rem)" }}>Apply Now</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-sm leading-relaxed">
            Take the first step towards a successful career. Fill out the application form and our team will get in touch with you.
          </p>
        </div>
      </section>

      {/* ══ CONTENT ═══════════════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {submitted ? (
          <div className="rounded-2xl border" style={{ backgroundColor:C.white, borderColor:C.border }}>
            <SuccessScreen/>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <div className="rounded-2xl border p-5 sm:p-7 mb-6"
                 style={{ backgroundColor:C.white, borderColor:C.border }}>
              <Stepper active={activeStep}/>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">

              {/* ── Form column ──────────────────────────────────────── */}
              <div className="flex-1 min-w-0 flex flex-col gap-5" ref={formTopRef}>

                {/* Error banner */}
                {showBanner && errCount > 0 && (
                  <ErrorBanner count={errCount} onClose={()=>setShowBanner(false)}/>
                )}

                {activeStep===1 && (
                  <PersonalDetailsForm
                    data={personal}
                    onChange={makeOnChange(setPersonal)}
                    errors={errors}
                  />
                )}
                {activeStep===2 && (
                  <AcademicDetailsForm
                    data={academic}
                    onChange={makeOnChange(setAcademic)}
                    errors={errors}
                  />
                )}
                {activeStep===3 && (
                  <CourseDetailsForm
                    data={course}
                    onChange={makeOnChange(setCourse)}
                    errors={errors}
                  />
                )}
                {activeStep===4 && (
                  <AdditionalDetailsForm
                    data={additional}
                    onChange={makeOnChange(setAdditional)}
                    errors={errors}
                  />
                )}

                {/* Desktop footer buttons */}
                <div className="hidden sm:flex items-center justify-between rounded-2xl border px-5 sm:px-7 py-4"
                     style={{ backgroundColor:C.white, borderColor:C.border }}>
                  <button onClick={handleBack} disabled={activeStep===1}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-[13px] font-semibold transition-all hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ borderColor:C.border, color:C.textGray }}>
                    <ArrowLeft size={15} strokeWidth={2.2}/> Back
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="text-[12px]" style={{ color:C.textGray }}>Step {activeStep} of 4</span>
                    <button onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90 active:scale-[0.98]"
                      style={{ backgroundColor: isLastStep ? C.green : C.primary, color:C.white }}>
                      {isLastStep
                        ? <><Send size={15} strokeWidth={2}/> Submit Application</>
                        : <>Save &amp; Next <ArrowRight size={15} strokeWidth={2.2}/></>}
                    </button>
                  </div>
                </div>
              </div>

              {/* ── Sidebar ──────────────────────────────────────────── */}
              <div className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0">
                <ProgressSidebar active={activeStep}/>
               <NeedHelpCard navigate={navigate} />
              </div>
            </div>

            {/* Mobile sidebar below form */}
            <div className="lg:hidden mt-6 flex flex-col gap-4">
              <ProgressSidebar active={activeStep}/>
             <NeedHelpCard navigate={navigate} />
            </div>
          </>
        )}
      </div>

      {/* ══ MOBILE STICKY BAR ═════════════════════════════════════════════ */}
      {!submitted && (
        <div className="sm:hidden sticky bottom-0 left-0 right-0 border-t px-4 py-3 flex items-center gap-3 z-40"
             style={{ backgroundColor:C.white, borderColor:C.border }}>
          <button onClick={handleBack} disabled={activeStep===1}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border text-[13px] font-semibold flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ borderColor:C.border, color:C.textGray }}>
            <ArrowLeft size={14} strokeWidth={2.2}/> Back
          </button>
          <button onClick={handleNext}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-bold flex-[2]"
            style={{ backgroundColor: isLastStep ? C.green : C.primary, color:C.white }}>
            {isLastStep
              ? <><Send size={14}/> Submit</>
              : <>Save &amp; Next <ArrowRight size={14} strokeWidth={2.2}/></>}
          </button>
        </div>
      )}
    </div>
  );
}