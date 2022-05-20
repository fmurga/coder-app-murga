import React from 'react';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const LoginWidget = () => {
  return (
    <button className="px-4 py-2 border-0 rounded-2xl bg-purple-600 font-bold text-white hover:text-white hover:bg-purple-500 ">
    <div className="flex felx-row justify-between text-center items-center">
      <PersonOutlineIcon />
      <p>Login</p>
    </div>
  </button>
  )
}

export default LoginWidget