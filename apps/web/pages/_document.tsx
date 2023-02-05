import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const { renderPage } = ctx;
    const initialProps = await Document.getInitialProps(ctx);

    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...initialProps, ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props as any;
    return (
      <Html>
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
