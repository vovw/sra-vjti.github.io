import '../styles/globals.scss';
// Removed global Navbar and Footer for horizontal layout
// Components now handle their own navigation

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
