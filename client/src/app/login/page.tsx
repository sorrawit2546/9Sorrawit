import "@/styles/globals.css";

export default function LoginPage() {
  return (
    <div className="flex justify-self-center mt-60">
      <form action="">
        <div className="flex flex-row w-[980px] h-full shadow-2xl  rounded-xl space-x-20">
          <div className="flex w-[490px] h-96 shadow-2xl rounded-xl justify-center items-center">
            <img className="w-[300px] h-[300px]" src="/logo9sorrawit.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row ">
              Email
              <input className="ml-2 pl-2 border-[2px] border-black rounded-lg shadow-lg" type="email" name="email" id="" placeholder="Pls.Input Email" />
            </div>

            <div className="flex flex-row ">
              Password
              <input className="ml-2 pl-2 border-[2px] border-black rounded-lg shadow-lg" type="password" name="password" id="" placeholder="Pls.Input password" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
