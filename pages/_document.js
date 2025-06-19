import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to external domains for faster loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Fonts already in the project */}
          <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

          {/* Meta tags */}
          <meta name="description" content="SRA VJTI - Society of Robotics and Automation" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
