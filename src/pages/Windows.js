
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Windows.css';

function Windows() {
  const [showAbout, setShowAbout] = useState(false);
  const [aboutImage, setAboutImage] = useState(null);  
  const [showModal, setShowModal] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false); 
  const [showMessage, setShowMessage] = useState(false); 
  const timeoutRef = useRef(null); // 引用保存计时器 ID
  const navigate = useNavigate(); 

  const { t, i18n } = useTranslation();

  const validCode = "6688"; 

  const handleMouseEnter = () => {
    setShowTooltip(true);

    // 开始计时
    timeoutRef.current = setTimeout(() => {
      setShowMessage(true); 
    }, 5000); // 5 秒后触发
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);

    // 鼠标移开时清除计时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const closeMessage = () => {
    setShowMessage(false); 
  };



  const handleDownloadClick = () => {
    navigate("/mac");
  };

  const handleConfirmCode = () => {
    if (codeInput === validCode) {
      navigate("/mac");
    } else {
      setErrorMessage(t("error"));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorMessage("");
    setCodeInput("");
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleConfirmCode();
    }
  };


  // 更改语言
  const changeLanguage = (lng) => {    
    i18n.changeLanguage(lng); // 切换语言
    localStorage.setItem('selectedLanguage', lng); // 存储语言到 localStorage
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAbout && !event.target.closest(".about-author-container")) {
        setShowAbout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAbout]);
  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    if (!showAbout) {
      setAboutImage(`${process.env.PUBLIC_URL}/images/author.jpeg`);  
    } else {
      setAboutImage(null);  
    }
  };

  return (
    <div>
      {/* 左上角的语言切换菜单 */}
      <div className="language-menu">        
        <div className="language-switcher">
          <button className="language-button" onClick={() => changeLanguage('zh')}>中文</button>
          <button className="language-button" onClick={() => changeLanguage('en')}>English</button>
          <button className="language-button" onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
      </div>
      <div className="container">
        <p>{t("note")}</p>
        <h1>{t("welcome")}</h1>
        <p>{t("describe")}</p>
        <div>
          <button
            className="windows"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/downloads/sumikko.exe`}
          >
            Windows
          </button>
          <button className="macos" onClick={handleDownloadClick}>
          MacOS
        </button>
        </div>
        
      </div>

      

      {/* 输入领取码 */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{t("entercode")}</h2>
            <input
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              onKeyDown={handleKeyDown} //回车监听
              placeholder="小章鱼领取码"
            />
            <button className="confirm-button" onClick={handleConfirmCode}>
             {t("confirm")}
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="cancel-button" onClick={closeModal}>
             {t("cancel")}
            </button>
          </div>
        </div>
      )}


      <div className="tutorial">
        <h2>{t("contact")}</h2>
      </div>
      
      <div className="text-button-container" style={{ position: "relative" }}>
          
          <button
            className="hover-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {t("donate")}
          </button>
        
          {showTooltip && (
            <div className="tooltip">
              <div className="image-container">
                <div className="image-block">
                  <p>{t("wechat")}</p>
                  <img
                    src = {`${process.env.PUBLIC_URL}${t('image')}`}
                    
                    alt="QR 1"
                    className="fixed-image"
                  />
                </div>
                <div className="image-block">
                  <p>{t("alipay")}</p>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/alipay.jpg`}
                    alt="QR 2"
                    className="fixed-image"
                  />
                </div>
              </div>
            </div>
          )}

          
          {showMessage && (
            <div className="message-popup">
              <div className="message-content">
                <p>{t("thank")}</p>
                <p>{t("code")}</p>
                <button onClick={closeMessage}>{t("close")}</button>
              </div>
            </div>
          )}

        </div>
      
     
      <div className="tutorial">
      
        {/*
        <div className="text-button-container" style={{ position: "relative" }}>
          <h2>{t("contact")}</h2> 
          <button
            className="hover-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {t("donate")}
          </button>
        
          {showTooltip && (
            <div className="tooltip">
              <div className="image-container">
                <div className="image-block">
                  <p>{t("wechat")}</p>
                  <img
                    src = {`${process.env.PUBLIC_URL}${t('image')}`}
                    
                    alt="QR 1"
                    className="fixed-image"
                  />
                </div>
                <div className="image-block">
                  <p>{t("alipay")}</p>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/alipay.jpg`}
                    alt="QR 2"
                    className="fixed-image"
                  />
                </div>
              </div>
            </div>
          )}

          
          {showMessage && (
            <div className="message-popup">
              <div className="message-content">
                <p>{t("thank")}</p>
                <p>{t("code")}</p>
                <button onClick={closeMessage}>{t("close")}</button>
              </div>
            </div>
          )}

        </div>*/}
        
        
        {/*MacOS教程*/}
        <h2>{t("wintip")}</h2> 
        <p>{t("notice")}</p>
 
      </div>




      <div className="about-author-container">
      <button onClick={handleAboutClick} className="about-button">
        {t("author")}
        </button>
        {showAbout && (
          <div className="about-info">
          <p>tapioca :</p>
          {aboutImage && <img src={aboutImage} alt="About the Author" className="about-image" />}  
          {/*<p>tapioca</p>*/}
          {/* 这里是 GitHub 关注按钮 */}
      <a href="https://github.com/Diudiu-wl" target="_blank" rel="noopener noreferrer" className="github-button">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
        Follow Me
      </a>
          <p>{t("about3")}</p>
          <p>{t("about")}</p>
          <p>{t("about2")}</p>
          </div>
        )}
      </div>
     
    </div>

    

    
  );
}

export default Windows;
