"use client";
import { getServerSession } from "next-auth";
import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";

const Navbar = async ({}) => {
  const notify = () => toast("Here is your toast.");
  //   const session = await getServerSession();
  return (
    <div className="bg-white text-gray-950">
      <Toaster position="top-center" reverseOrder={false} />
      <button onClick={notify}>Make me a toast</button>
    </div>
  );
};

export default Navbar;
