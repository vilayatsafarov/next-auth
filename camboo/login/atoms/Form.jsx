import React, { useState } from "react";
import Button from "../atoms/Button";

function Input() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [text, setText] = useState("");
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/v1/contact/";

    if (form.email.includes("@gmail.com")) {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      setForm();
    } else {
      alert(" @gmail.com - sonluğunun olması zəruridir..");
    }
  };

  const style = "bg-[#131939] px-12 py-2 text-white  ";
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col justify-center  w-full "
    >
      <div className=" flex justify-center ">
        <div className=" flex justify-center w-full">
          <input
            required
            className=" w-[18%] focus: outline-none border-b-2 border-[#131939] mr-4 indent-1 "
            onChange={(e) => onChange(e)}
            value={form.name}
            placeholder={"Ad.."}
            name={"name"}
            type="text"
          />
          <input
            required
            className=" w-[18%] focus: outline-none  border-b-2 border-[#131939] ml-4 indent-1"
            onChange={(e) => {
              onChange(e);
            }}
            value={form.email}
            placeholder={"Email.."}
            name={"email"}
            type="email"
          />
        </div>
      </div>
      <div className=" flex mt-16 justify-center w-full">
        <input
          required
          className=" w-[38%] focus: outline-none border-b-2 border-[#131939] indent-1 "
          onChange={(e) => onChange(e)}
          value={form.subject}
          placeholder={"Mövzu.."}
          name={"subject"}
          type="text"
        />
      </div>
      <div className=" flex mt-16 justify-center w-full">
        <input
          required
          className=" w-[38%] focus: outline-none border-b-2 border-[#131939] indent-1 "
          onChange={(e) => onChange(e)}
          value={form.message}
          placeholder={"Mesaj.."}
          name={"message"}
          type="textarea"
        />
      </div>
      <span>{text}</span>
      <div className=" flex justify-center mt-12">
        <Button styles={style} name="Göndər" color={"#131939"} />
      </div>
    </form>
  );
}

export default React.memo(Input);
