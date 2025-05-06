import React from 'react'

export default function UserInfo () {
    const User = ()=> {
        return {
            name: "Nguyễn Văn A",
            gender: "Nam",
            birthday: "06/03/2024",
            Email: "nva@gmail.com",
            Address: "Thanh Xuân, Hà Nội",
        };
    }
    const RenderUser = User();

  return (
    <>
    <h3> Thông tin cá nhân </h3>
    <ul>
        <li>Họ và tên: {RenderUser.name} </li>
        <li>Giới tính: {RenderUser.gender} </li>
        <li>Ngày sinh: {RenderUser.birthday} </li>
        <li>Email: {RenderUser.Email} </li>
        <li>Địa chỉ: {RenderUser.Address} </li>
    </ul>

    </>
  )
}
