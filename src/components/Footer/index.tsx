import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import "./style.css";

export function Footer() {
  return (
    <footer className="footer">

      <button className="button-arrow">
        <ArrowLeft className="arrow" />
      </button>

      <div className="footer-links">

        <a
          target="_blank"
          rel="noopener"
          href="https://Facebook.com"
          className="socialmedias"
        >
          Facebook
        </a>

        <a
          target="_blank"
          rel="noopener"
          href="https://Instagram.com"
          className="socialmedias"
        >
          Instagram
        </a>

        <a
          target="_blank"
          rel="noopener"
          href="https://Twitter.com"
          className="socialmedias"
        >
          Twitter
        </a>

      </div>

      <button className="button-arrow">
        <ArrowRight className="arrow" />
      </button>

    </footer>
  );
}
