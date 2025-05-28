"use client"
import "@/styles/globals.css";
import axios from "axios";
import { useEffect, useState } from "react";



export default function ResourcePage() {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const getUserAPI = async () => {
        try {
            const res = await axios.get("https://www.melivecode.com/api/users");
            setUsers(res.data)
            console.log(res.data)
        } catch (error) {
            console.log("Somthing Error!!!!")
        }
    }

    const popUpCreateUser = () => {
        if (isOpen == false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }

    }

    const creteUsers = async () => {

    }

    useEffect(() => {
        getUserAPI();
    }, [])

    return (
        <div>
            <div className="text-4xl flex flex-col justify-center items-center mt-4">
                <a href="">Resource</a>
                <div><h1>CRUD TEST</h1></div>
            </div>

            <div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => popUpCreateUser()}>Create
                        {isOpen && (
                            <form action="">
                                <div className="flex flex-col fixed inset-0  items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-md text-black ">
                                        <h1 className="text-lg font-semibold mb-4 pt-5 ">Popup Title</h1>
                                        <h2> Fullname : <input type="text" value="" placeholder="Pls. fill data" /></h2>
                                        <div>
                                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-2" onClick={() => popUpCreateUser()}>Close</button>
                                        </div>
                                    </div>


                                </div>
                            </form>

                        )}
                    </button>
                </div>
                <table className="table-auto flex flex-col items-center ">
                    <thead>
                        <tr className="flex gap-x-10">
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Fullname</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((dataUser, index) => (
                            <div key={index} className="flex flex-row">
                                <tr className="flex gap-x-10">
                                    <td>  <h3>{dataUser.id}</h3></td>
                                    <td> <div className="w-10 h-10">
                                        <img src={dataUser.avatar} alt="" />
                                    </div></td>
                                    <td> <h3>{dataUser.fname}</h3></td>
                                    <td> <h3>{dataUser.lname}</h3></td>
                                    <td>
                                        <div className="flex flex-row gap-x-2">
                                            <button type="button">Edit</button>
                                            <button type="button">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )

}