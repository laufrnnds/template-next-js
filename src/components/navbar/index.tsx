import { useRouter } from "next/router";
import Button from "../button";

export default function Navbar() {
  const router = useRouter();

  const { pathname } = router;
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#46572B",
        position: "absolute",
        top: "0px",
        gap: "16px",
      }}
    >
      {pathname !== "/" && <Button title="Home" url="/" />}
      {pathname !== "/teste" && <Button title="Teste" url="/teste" />}
    </div>
  );
}
