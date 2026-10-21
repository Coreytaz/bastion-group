import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/logo.svg";
import "./Footer.scss";

export default function Footer() {
  function requestCallback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Запрос обратного звонка — Бастион Груп");
    const body = encodeURIComponent(
      `Имя: ${String(data.get("name") ?? "").trim()}\nТелефон: ${String(data.get("phone") ?? "").trim()}\n\nПрошу связаться со мной.`,
    );
    window.location.href = `mailto:info@bastion.pro?subject=${subject}&body=${body}`;
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <form
          className="footer-callback"
          aria-label="Заказать обратный звонок"
          onSubmit={requestCallback}
        >
          <div className="footer-callback__field">
            <label htmlFor="callback-name">Ваше имя</label>
            <input
              id="callback-name"
              name="name"
              autoComplete="name"
              placeholder="Как к вам обращаться"
              maxLength={100}
              required
            />
          </div>
          <div className="footer-callback__field">
            <label htmlFor="callback-phone">Ваш телефон</label>
            <input
              id="callback-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+7 (___) ___-__-__"
              maxLength={30}
              pattern="[+0-9\(\) .\-]{6,30}"
              title="Введите номер телефона, используя цифры, пробелы, скобки, + или дефис"
              required
            />
          </div>
          <div className="footer-callback__action">
            <Button type="submit" appearance="primary">
              Заказать звонок
            </Button>
            <p>Запрос откроется в вашей почтовой программе.</p>
          </div>
        </form>

        <div className="footer-main">
          <Link className="footer-brand" to="/" aria-label="Бастион Груп — на главную">
            <img src={Logo} alt="Бастион Груп" width={104} height={86} />
            <span>
              Производитель
              <br />
              металлических изделий
            </span>
          </Link>
          <div className="footer-directions">
            <p className="footer-heading">Направления</p>
            <ul>
              <li>Металлоконструкции</li>
              <li>Фасадные конструкции</li>
              <li>Порошковая покраска</li>
              <li>Светопрозрачные конструкции</li>
            </ul>
          </div>
          <address className="footer-contact">
            <a className="footer-contact__phone" href="tel:+74993807890">
              +7 (499) 380-78-90
            </a>
            <a href="mailto:info@bastion.pro">info@bastion.pro</a>
            <span>Москва</span>
          </address>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Бастион Груп. Все права защищены.</span>
          <nav aria-label="Навигация в подвале">
            <Link to="/">Каталог продукции</Link>
            <Link to="/cart">Корзина</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
