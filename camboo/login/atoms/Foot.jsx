import React from "react";
import useTranslation from 'next-translate/useTranslation'
const Foot = () => {
  const {t}=useTranslation('common')
  return (
    <div className="text-white text-sm text-center pb-4">
     {
       t('common:title')
     } 
    </div>
  );
};

export default React.memo(Foot);
