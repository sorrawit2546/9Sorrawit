import React from 'react'


interface myParams {
    params: {
        id:string
    }
}
export default function page({params} : myParams) {
  return (
    <div>{params.id}</div>
  )
}
