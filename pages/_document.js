import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
        </head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
