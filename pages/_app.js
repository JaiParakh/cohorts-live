// top level component which is common across all the different pages
//  restart necessary when this file is added
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
