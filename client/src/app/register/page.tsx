'use client'
import Header from "@/components/header";
import "@/styles/globals.css";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import Footer from "@/components/footer";

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
      if (!email || !name || !password) {
        console.log("pls. check Data!")
      }
      if (email && name && password) {
        const data = await axios.post('http://localhost:4000/api/register', {
          email,
          name,
          password
        });
      }

    } catch (error) {

    }
  }


  return (
    <div className="font-manrope font-bold space-y-3 bg-white dark:bg-black">
      <Header />
      <Alert className="flex flex-col justify-self-center w-[800px]">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <div className="flex justify-self-center dark:bg-gray-200 rounded-xl">
        <form onSubmit={handleRegister}>
          <div className="flex flex-row w-[980px] h-[500px] shadow-2xl  rounded-xl space-x-20">
            <div className="flex w-[490px] h-full shadow-2xl rounded-xl justify-center items-center">
              <img className="w-[300px] h-[300px]" src="/newlog_website.PNG" alt="" />
            </div>
            <div className="flex flex-col justify-center items-start space-y-2">
              <div className="">
                Email
              </div>
              <div className="flex flex-row-10">
                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="email" name="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="example@gmail.com" />
              </div>
              <div>
                Name
              </div>
              <div className="flex flex-row ">
                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="name" name="name" value={name} onChange={(e: any) => setName(e.target.value)} placeholder="johnDoe" />
              </div>
              <div>
                Password
              </div>
              <div className="flex flex-row ">
                <input className="h-10 pl-2  border-black rounded-lg shadow-lg" type="password" name="password" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Input password" />
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-white dark:bg-black dark:hover:hover:bg-sky-400  dark:text-white shadow-2xl rounded-3xl w-40 h-10 mt-5" type="submit">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>   
      <Footer />
    </div>
  )
}
