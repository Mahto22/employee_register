import React, { useState } from 'react'

function Crud() {
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
    });
    const [tableData,setTableData] = useState([]);
    const [editClick,seteditClick] = useState(false);
    const [editText,setEditText] =useState("");
    const handleChange = (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("inputs",inputs);
        console.log("tableData",tableData);
        if(editClick){
            const tempTableData = tableData;
            Object.assign(tempTableData[editText],inputs)
            setTableData([...tempTableData]);
        } else{
            setTableData([...tableData,inputs]);
            setInputs({
                name:"",
                email:"",
            });
        }
    }
    const handleDelete = (index)=>{
        const filterData = tableData.filter((item,i)=>i !== index)
        setTableData(filterData);
    }
    const handleEdit = (index)=>{
        const tempData = tableData[index];
        console.log("tempData",tempData);
        setInputs({
            name:tempData.name,
            email:tempData.email,
        });
        seteditClick(true);
        setEditText(index);
    }
  return (
    <div className='min-h-screen bg-[#004b43]'>
    <h1 className='text-center'>Crud App</h1>
    <div className='bg-[#fff] max-w-fit m-auto p-10'>
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <label>Name</label>
            <input type='text' name='name' value={inputs.name} onChange={handleChange}></input>
        </div>
        <div className='flex flex-col'>
            <label>Email</label>
            <input type='email' name='email' value={inputs.email} onChange={handleChange}></input>
        </div>
        <button type='submit' className='w-full bg-[#014d64] text-white'>{editClick?"Update":"Add"}</button>
    </form>
    </div>
    <table border="1" className='text-center'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                tableData.map((items,i)=>{
            return(<tr>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>
                    <button onClick={()=>handleEdit(i)}>Edit</button>
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                </td>
            </tr>
                )})
            }
        </tbody>
    </table>
    </div>
  )
}

export default Crud