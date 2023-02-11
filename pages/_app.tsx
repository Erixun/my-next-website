import "../styles/global.scss";
import "../styles/darkness.scss";

export default function App({ Component, pageProps }) {
  return <Component className="app" {...pageProps} />;
}
