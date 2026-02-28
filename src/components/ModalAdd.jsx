import React, { useState } from "react";
import cl from "../styles/ModalAdd.module.css"
import Mybutton from "../UI/button/Mybutton";
import Myinput from "../UI/input/Myinput";

const ModalAdd = ({visibleAdd, setVisibleAdd}) => {
    const rootClasses = [cl.MyModal]
    if(visibleAdd) {
        rootClasses.push(cl.active)
    }
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [description ,setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [period, setPeriod] = useState("");
    const [notAllowed, setNotAllowed] = useState("")


    const handleUpload = async()=>{
        const form = new FormData();
        form.append('file',file);
        form.append('name',name);
        form.append('description', description);
        form.append('year', year);
        form.append('period', period);
        form.append('category', category);
        form.append('notAllowed', notAllowed);
        const respone = await fetch("https://portfolio-project-back-production.up.railway.app/upload", {
            method: "POST",
            body: form, 
        }).then(res=>res.json())
    }
  return (
    <div className={rootClasses.join(' ')}>
        <div className={cl.myModalContent}>
            <div>
                <Myinput key="1" onChange={(e)=>setFile(e.target.files[0])} type="file" placeholder="choose a file" /> 
                <Myinput value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="add name"/>
                <Myinput value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder="add description"/>
                <Myinput value={year} onChange={(e)=>{setYear(e.target.value)}} type="text" placeholder="add year"/>
                <Myinput value={period} onChange={(e)=>{setPeriod(e.target.value)}} type="text" placeholder="add period"/>
                <Myinput value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" placeholder="add categoty"/>
                <Myinput value={notAllowed} onChange={(e)=>{setNotAllowed(e.target.value)}} type="text" placeholder="set who is not allowed to see"/>
                <Mybutton onClick={()=>setVisibleAdd(false)}>Cancel</Mybutton>
                <Mybutton onClick={()=>handleUpload()}>Add</Mybutton>
            </div>
        </div>
    </div>
    
  );
};

export default ModalAdd;


{/**{"ok":true,"bucket":"Files","path":"2026/3b0436ca4146f9fbd9ed4ae8af5c4419-Informatics_Report_NoStyles__1_.docx","publicUrl":"https://bkxdllgumbiggwsdidxk.supabase.co/storage/v1/object/public/Files/2026/3b0436ca4146f9fbd9ed4ae8af5c4419-Informatics_Report_NoStyles__1_.docx","mimeType":"application/vnd.openxmlformats-officedocument.wordprocessingml.document","size":37694,"originalName":"Informatics_Report_NoStyles (1).docx"} */}