import React, { useState,useEffect } from "react";
import Button from "../atoms/Button";
import { useRouter } from "next/router";
import AOS from 'aos'
import { EyeOffIcon, EyeIcon } from "@heroicons/react/solid";
import Head from "next/head";
function Regform() {
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  })
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    location: "",
    fin: "",
    password: "",
    user_type: "1",
    passtwo: "",
  });
  const router = useRouter();
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [text, setText] = useState(true);
  const [type, SetType] = useState(true);
  const [text2, setText2] = useState(true);
  const [type2, SetType2] = useState(true);
  const resetSta = () => {
    SetType(!type);
    setText(!text);
  };
  const resetSta2 = () => {
    SetType2(!type2);
    setText2(!text2);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/v1/register/";
    if (form.password !== form.passtwo) {
      alert("Şifrələr uyuşmur..");
    }
    if (form.fin.length < 7) {
      alert("Fin 7 simvoldan az ola bilməz..");
    }
    if (form.password === form.passtwo && form.fin.length === 7) {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          phone: form.phone,
          location: form.location,
          fin: form.fin,
          user_type: form.user_type,
          password: form.password,
        }),
      });
      router.push("/login");
    }
  };
  const style = "bg-[#131939] px-8 py-2 text-white  ";
  return (

    <div className=" w-full h-auto flex justify-center items-center ">
       <Head>
       <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </Head>
      <form
      data-aos={"fade-right"}
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col justify-center relative top-4  w-full h-[75vh] "
      >
        <div className=" flex justify-center ">
          <div className=" flex justify-center w-full">
            <input
              required
              className=" w-[18%] border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] mr-4 indent-4"
              onChange={(e) => onChange(e)}
              value={form.name}
              placeholder={"Ad.."}
              name={"name"}
              type="text"
            />
            <input
              required
              className=" w-[18%]  border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] ml-4 indent-4"
              onChange={(e) => {
                onChange(e);
              }}
              value={form.email}
              placeholder={"Soyad.."}
              name={"surname"}
              type="text"
            />
          </div>
        </div>
        <div className=" flex mt-8 justify-center w-full">
          <input
            type="text"
            required
            className=" w-[38%] border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] indent-4"
            onChange={(e) => onChange(e)}
            value={form.phone}
            placeholder={"Nömrə.."}
            name={"phone"}
            list="number"
          />
          <datalist id="number">
            <option>+99450</option>
            <option>+99455</option>
            <option>+99451</option>
            <option>+99477</option>
            <option>+99460</option>
            <option>+99410</option>
            <option>+99470</option>
            <option>+99499</option>
          </datalist>
        </div>
        <div className=" flex mt-8 justify-center items-center w-full">
          <input
            required
            className=" w-[38%] ml-4 border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] indent-4"
            onChange={(e) => onChange(e)}
            value={form.password}
            placeholder={"Şifrə.."}
            name={"password"}
            type={type ? "password" : "text"}
          />
          {text ? (
            <EyeOffIcon
              className="w-4 relative right-4 cursor-pointer"
              onClick={resetSta}
            />
          ) : (
            <EyeIcon
              className="w-4 relative right-4 cursor-pointer"
              onClick={resetSta}
            />
          )}
        </div>
        <div className=" flex mt-8 justify-center items-center w-full">
          <input
            required
            className=" w-[38%] ml-4 border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] indent-4"
            onChange={(e) => onChange(e)}
            value={form.passtwo}
            placeholder={"Şifrənin təkrarı.."}
            name={"passtwo"}
            type={type2 ? "password" : "text"}
          />
          {text2 ? (
            <EyeOffIcon
              className="w-4 relative right-4 cursor-pointer"
              onClick={resetSta2}
            />
          ) : (
            <EyeIcon
              className="w-4 relative right-4 cursor-pointer"
              onClick={resetSta2}
            />
          )}
        </div>
        <div className=" flex mt-8 justify-center w-full">
          <input
            required
            className=" w-[38%] border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] indent-4"
            onChange={(e) => onChange(e)}
            value={form.location}
            placeholder={"Məkan.."}
            name={"location"}
            type="text"
          />
        </div>
        <div className=" flex mt-8 justify-center w-full">
          <input
            required
            className=" w-[38%] border-b-2 focus:outline-none  rounded-sm  h-11 border-[#131939] indent-4"
            onChange={(e) => onChange(e)}
            value={form.fin}
            placeholder={"Fin.."}
            name={"fin"}
            type="text"
          />
        </div>
        <div className=" w-full text-center mt-2 text-red-700">
          {form.fin.length < 8 ? (
            ""
          ) : (
            <div>Fin 7 simvoldan artıq ola bilməz</div>
          )}
        </div>
        <div className=" flex justify-center mt-8">
          <Button styles={style} name="Qeydiyyat" />
        </div>
      </form>
    </div>
  );
}

export default React.memo(Regform);
