import { Inter } from "next/font/google";
import DefaultLayout from "@/pages/layout/default";
import themeconfig from "@/config/theme-config";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        height: "500px",
        width: "90%",
        backgroundColor: themeconfig.theme.primary.default,
        color: themeconfig.theme.primary.contrast,
      }}
    >
      <h1>Home</h1>
    </div>
  );
}

Home.getLayout = DefaultLayout;
