import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container ">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}
