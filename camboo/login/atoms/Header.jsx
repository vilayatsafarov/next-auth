import React, { useEffect, useState } from "react";
import { PhoneIncomingIcon, UserIcon } from "@heroicons/react/solid";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
const Header = () => {
  const [auth, setAuth] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const { t } = useTranslation("common");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.getItem("id") === null ||
        localStorage.getItem("id") === "undefined"
      ) {
        setAuth(false);
      }
      if (
        localStorage.getItem("id") !== null ||
        localStorage.getItem("id") !== "undefined"
      ) {
        setName(localStorage.getItem("name"));
        setSurname(localStorage.getItem("surname"));
      }
    }
  });

  return (
    <div
      id="header"
      className=" text-[#131939] h-12 w-full py-2 text-sm bg-white flex justify-around  items-center"
    >
      <div className=" w-auto flex justify-between items-center">
        <PhoneIncomingIcon className=" text-[#131939] w-6" />
        <span className="text-[#131939] text-sm px-3">+994 50 890-87-27</span>
      </div>
      <div className=" w-48 flex justify-between items-center">
        {!auth ? (
          <div className=" flex justify-between items-center w-48">
            <Link href={"/register"}>
              <a className="bg-[#FB7201] text-white px-5 py-[5px] rounded-sm font-semibold">
                {t("common:qeydiyyat")}
              </a>
            </Link>
            |
            <Link passHref href="/login">
              <a>{t("common:daxilol")}</a>
            </Link>
          </div>
        ) : (
          <Link href={"/dashboard"}>
            <a className=" w-30 text-[#131939] flex justify-center items-center">
              <UserIcon className=" text-[#131939] font-semibold w-8" />
              <span className=" mt-2 ml-1 text-sm font-bold">
                {name} {surname}
              </span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default React.memo(Header);
