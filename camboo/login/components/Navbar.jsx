import Link from "next/link";
import React,{ useState } from "react";
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'
function Navbar() {
  const router = useRouter();
  const [style,setStyle]=useState(false)
  const [style2,setStyle2]=useState(false);
  const {t}=useTranslation('common')
  return (
    <div className=" w-full py-2 flex justify-center bg-[#131939] text-white">
      <div className="pt-2 pb-3 w-[60%] flex items-center justify-between bg-[#131939]">
        <Link href="/">
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
        </Link>
       
        <div className="w-auto">
          {router.locales.map((locale) => (
            <Link href={router.asPath} locale={locale}>
              {locale === "en-US" ? (
                <a
                onClick={()=>{ setStyle(true),setStyle2(false)}}
                  className={style ? "bg-[#FB7300] px-6 py-1 rounded mr-5" : 'mr-5'}
                >
                  Az
                </a>
              ) : (
                <a
                onClick={()=>{ setStyle(false),setStyle2(true)}}
                className={style2 ? "bg-[#FB7300] px-6 py-1 rounded mr-5" : 'mr-5'}
                >
                  Rus
                </a>
              )}
            </Link>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
