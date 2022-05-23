import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ShoppingBagIcon,
  LogoutIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Sidebar() {
  const router = useRouter();
  const onClick = () => {
    let text = "Səhifəni tərk etmək istəyirsiniz?.";
    if (confirm(text) === true) {
      localStorage.clear();
      router.push("/");
    }
  };
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("id") !== null) {
        setName(localStorage.getItem("name"));
        setSurname(localStorage.getItem("surname"));
        setNumber(localStorage.getItem("number"));
      }
    }
  });
  return (
    <div className="h-screen w-[32.5vh] text-white bg-[#131939] flex flex-col justify-start">
      <div className=" w-[32.5vh] h-72 relative top-16  flex flex-col justify-between">
        <div className="pl-10 pb-10 w-full flex justify-between">
          <Link href="/">
            <a className=" flex items-center">
              <span className="border-[0.15rem] border-white rounded-full px-[0.5rem] pt-2 pb-1 font-black flex justify-center items-center">
                SV
              </span>
            </a>
          </Link>
          <div className=" pr-4 flex flex-col">
            <span className=" font-bold">
              {name}
              {surname}
            </span>
            <span className=" font-bold">#{number}</span>
          </div>
        </div>
        <div className=" pl-10 py-6 text-lg font-bold">
          <a className=" flex">
            <UserIcon className="w-6 " />
            <span className=" mt-1 ml-2">Şəxsi kabinetim</span>
          </a>
        </div>
        <div className=" pl-10 py-6 text-lg font-bold">
          <a className=" flex">
            <ShoppingBagIcon className="w-6 " />
            <span className=" mt-1 ml-2">Sifarişlərim</span>
          </a>
        </div>
        <div className=" pl-10 py-6 text-lg font-bold">
          <a className=" flex">
            <CogIcon className="w-6 " />
            <span className=" mt-1 ml-2">Tənzimləmələr</span>
          </a>
        </div>
        <div className=" pl-10 py-6 text-lg font-bold">
          <div className=" flex ml-1">
            <LogoutIcon className=" w-6" />
            <button className="font-bold ml-2" onClick={onClick}>
              Çıxış
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
