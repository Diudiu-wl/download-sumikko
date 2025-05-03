
import React from "react";
import { useNavigate } from "react-router-dom";
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import "./Octo.css";

function Octo() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  

  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage); // 设置语言
  }


  return (
    <div className="octo-container">
      <div className="container">
        <h1>{t("congrats")}</h1>
        <p>{t("instruct")}</p>
        <div>
          <button
            className="sumikko"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/点击召唤小章鱼.exe`}
          >
            {t("wasabi")}
          </button>
          <button
            className="sumikko"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/xiaozhang.dmg.zip`}
          >
            {t("kome")}
          </button>

          <button
            className="sumikko"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/xiaozhang.dmg.zip`}
          >
            {t("gari")}
          </button>
        </div>
      </div>
 
      <button onClick={() => navigate('/')} className="back-button">
      {t("back")}
      </button>

      <div className="tutorial">
        <h2>{t("mactip")}</h2>
        <div className="step">
          <span>{t("i1")}<strong>Applications</strong>{t("i2")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/1.jpg`} alt="Step 1" />
        </div>
        <div className="step">
          <span>{t("i3")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/2.jpeg`} alt="Step 2" />
        </div>
        <div className="step">
          <span>{t("i4")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/3.jpeg`} alt="Step 3" />
        </div>
        <div className="step">
          <span>{t("i5")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/4.jpeg`} alt="Step 4" />
        </div>
        <div className="step">
          <span>{t("i6")}</span>
          <img src={`${process.env.PUBLIC_URL}/images/7.png`} alt="Step 5" />
        </div>
       

      </div>
        
      <div className="tutorial">
      <h2>{t("s6")}</h2>
      </div>
    </div>


    

    
  );
}

export default Octo;
