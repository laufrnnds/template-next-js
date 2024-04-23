import apiTeste from "@/config/config";
import DefaultLayout from "@/pages/layout/default";
import ReactPlayer from "react-player";

export default function Teste() {
  return (
    <div>
      <h1>Página Teste</h1>
      <p>{apiTeste.apiUrl}</p>
      <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
    </div>
  );
}

Teste.getLayout = DefaultLayout;
