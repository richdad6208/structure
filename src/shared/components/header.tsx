import { tw } from "@/config/constants/CONSTANTS";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className={`h-[var(--header-height)] between ${tw.layout.px}`}>
      <h1 className="text-4xl font-bold">쇼핑몰</h1>

      <nav>
        <ul className="flex gap-2.5 text-lg">
          {[
            { lable: "로그인", href: "/login" },
            { lable: "회원가입", href: "/signup" },
          ].map((it, idx) => (
            <li key={idx}>
              <Link to={it.href} className="p-2">
                {it.lable}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
