import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function DefaultLayout(page: any) {
  return (
    <>
      <Navbar />
      <div style={{ padding: "50px 0px" }}>{page}</div>
      <Footer />
    </>
  );
}
