import React, { Component } from "react";
import { PhoneIncomingIcon, ArrowUpIcon } from "@heroicons/react/solid";
import Foot from "../atoms/Foot";
export class Fotter extends Component {
  render() {
    return (
      <div className=" bg-[#131939]">
        <div className="w-full mt-16 flex justify-center items-center bg-[#131939] text-white">
          <div className=" w-[60%] flex items-center justify-between bg-[#131939]">
            <div className="flex items-center">
              <a className=" flex items-center">
                <span className="border-[0.15rem] border-white rounded-full px-[0.5rem] pt-2 pb-1 font-black flex justify-center items-center">
                  SV
                </span>
                <div className=" flex flex-col tracking-[0.06rem] relative left-3 text-base font-bold">
                  Vilayat Safarov
                  <span className=" text-xs font-normal tracking-[0.20rem] ">
                    {"Web & Designer"}
                  </span>
                </div>
              </a>
            </div>
            <div className="flex items-center h-32">
              <PhoneIncomingIcon className=" text-white w-6 mr-3" />
              <span>+994 50 890-87-27</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex py-1 justify-center items-center mt-4">
          <Foot />
        </div>
      </div>
    );
  }
}

export default React.memo( Fotter);
