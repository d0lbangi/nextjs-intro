import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {

  const router = useRouter();

  return (
    <nav>
      <Link href="/" legacyBehavior>
        {/* <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a> */}
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        {/* <a className={[styles.link, router.pathname === "/about" ? styles.active : "",].join(" ")}>About</a> */}
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
          /* color: tomato; */
        }
      `}</style>
    </nav>
  );
}