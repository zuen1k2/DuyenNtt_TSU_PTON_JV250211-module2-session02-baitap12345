import React from 'react'

export default function AccountList () {
  const Users = [
      {
      id:1,
      userName:"Malcolm Lockyer",
      dateOfBirth: "21/03/1961",
      gender: "Nam",
      address: "New york",
      },
      {
       id:2,
      userName:"Maria",
      dateOfBirth: "11/02/1990",
      gender: "Nữ",
      address: "London",
      },
  ];
 
  return (
    <>
    <table border={1} style={{width:800,height:100,marginTop:20}}>
      <thead>
      <tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Ngày sinh</th>
        <th>Giới tính</th>
        <th>Địa chỉ</th>
        <th>Hành động</th>
      </tr>
      </thead>
      <tbody style={{textAlign:"center"}}>
        { Users.map((user)=> (
         <tr key={user.id}> 
          <td> {user.id} </td>
          <td>{user.userName}</td>
          <td>{user.dateOfBirth}</td>
          <td>{user.gender}</td>
          <td>{user.address}</td>
            <td> <button>Sửa</button> <button style={{color:"white",backgroundColor:"red"}}>Xóa</button></td>
        </tr>
          ))}
      </tbody>
    </table>
     </>
    )
}
