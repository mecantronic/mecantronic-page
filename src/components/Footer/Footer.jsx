// @ts-nocheck
import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer bg-black text-white flex flex-col">
        <span>
          <div className="brand">
            <Link
              to={"/"}
              className="navItem"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div></div>
            </Link>
          </div>
          <span className="flex justify-around mt-8">
            <div className="aboutUs">
              <p className="footerTitle">{t("navigation")}</p>
              <ul>
                <li>
                  <Link
                    to={"/servicios/2"}
                    className="navItem"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products/1"}
                    className="navItem"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {t("products")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/aboutUs"}
                    className="navItem"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {t("aboutUs")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="contacData">
              <p className="footerTitle">{t("contact")}</p>
              <ul>
                <li>Belgrano, Ciudad Autónoma de Buenos Aires.</li>
                <a
                  href="https://wa.me/5491157397834"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>+54 9 11 5 739 7834</li>
                </a>
                <a href="mailto:info@mecantronic.com.ar" rel="noreferrer">
                  <li>info@mecantronic.com.ar</li>
                </a>
              </ul>
            </div>
          </span>

          <div className="socialMedia">
            <p className="footerTitle">{t("connect")}</p>
            <p className="footerSubTitle">{t("followUs")}</p>
            <div className="icons">
              <a
                href="https://www.facebook.com/mecantronic"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/icons/facebook.svg"
                  alt="Facebook MECANTRONIC"
                />
              </a>
              <a
                href="https://www.instagram.com/mecantronic/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/icons/instagram.svg"
                  alt="Instagram MECANTRONIC"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/11534294/admin/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/icons/linkedin.svg"
                  alt="Linkedin MECANTRONIC"
                />
              </a>
            </div>
          </div>
        </span>
        <span className="copyrights">
          <p>Copyright 2023 Todos los derechos reservados</p>
          <p>©Mecantronic 2023</p>
        </span>
      </div>
    </>
  );
};
