"use client";
import React from 'react'
import Sidebar from './Sidebar/page'
import Employee from './Employee/page'

// import Addemployee from './Addemployee/page'
export default function Page() 
{
    return (
        <div style={{display:"flex "}}>
       <div>
      <Sidebar></Sidebar>
      </div>
      <div>
       
      </div>
        <div>
      <Employee></Employee> 
      {/* <Addemployee></Addemployee> */}
        </div>
        </div> 
       
    )
}