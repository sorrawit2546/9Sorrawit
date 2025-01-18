'use client'
import "@/styles/globals.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  email: string,
  name: string,
  password: string,

}

export default function RegisterPage() {

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
  })

  const handleRegister = async (e: any) => {
    try {
      e.preventDefault();
      const data = await axios.post('http://localhost:4000/api/register', {
        email,
        name,
        password
      });
      
    } catch (error) {

    }
  }


  return (
    <div className="flex justify-self-center mt-60">
      <form onSubmit={handleRegister}>
        <div className="flex flex-row w-[980px] h-full shadow-2xl  rounded-xl space-x-20">
          <div className="flex w-[490px] h-96 shadow-2xl rounded-xl justify-center items-center">
            <img className="w-[300px] h-[300px]" src="/logo9sorrawit.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <div className="flex flex-row-10">
              Email
              <input className="ml-2 pl-2 border-[2px] border-black rounded-lg shadow-lg" type="email" name="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="Pls.Input Email" />
            </div>

            <div className="flex flex-row ">
              Name
              <input className="ml-2 pl-2 border-[2px] border-black rounded-lg shadow-lg" type="name" name="name" value={name} onChange={(e: any) => setName(e.target.value)} placeholder="Pls.Input Name" />
            </div>

            <div className="flex flex-row ">
              Password
              <input className="ml-2 pl-2 border-[2px] border-black rounded-lg shadow-lg" type="password" name="password" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Pls.Input password" />
            </div>

            <div className="flex justify-center items-center">
              <button className="bg-white shadow-2xl rounded-3xl w-40 h-10 mt-10" type="submit">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
