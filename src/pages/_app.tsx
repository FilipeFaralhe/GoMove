/* fica todos os meus componentes repetidos*/
import '../styles/global.css';

// fica por volta de toda nossa aplicação
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
