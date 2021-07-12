import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <link
                  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
                  rel="stylesheet"
               ></link>

               <link
                  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                  rel="stylesheet"
               ></link>

               <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=G-YD6QN1PQHN"
               />

               <script
                  dangerouslySetInnerHTML={{
                     __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-YD6QN1PQHN');
                `,
                  }}
               />
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
