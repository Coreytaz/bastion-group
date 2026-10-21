import { Link } from "react-router-dom";

export default function NotFound() {
  return <main className="container empty-state"><h1>Страница не найдена</h1><Link to="/">Вернуться в каталог</Link></main>;
}
