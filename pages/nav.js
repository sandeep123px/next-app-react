import Link from "next/link";
import { useRouter } from "next/router";
const Navigation = ({ navigation }) => {
  console.log(navigation, "nav");
  let router = useRouter();
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "500px",
          textDecoration: "none",
        }}
      >
        {navigation.map((x, i) => {
          return (
            <li key={x.id}>
              <Link href={x.slug}>
                <a className={router.pathname === x.slug ? "active" : ""}>
                  {x.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Navigation;
