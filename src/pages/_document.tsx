import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class MyDocument extends Document {
    // Removi o getInitialProps se você não o estiver usando para nada específico
    // static async getInitialProps(ctx: DocumentContext) {
    //   const initialProps = await Document.getInitialProps(ctx);
    //   return { ...initialProps };
    // }

    render() {
        // !!! SUBSTITUA 'GTM-PR9BGPRD' PELO SEU ID REAL DO GTM !!!
        const GTM_ID = 'GTM-PR9BGPRD';

        return (
            <Html lang="pt-br"> {/* Boa prática definir o lang */}
                <Head>
                    {/* */}
                    <meta name="description" content="Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes." />
                    <meta name="keywords" content="industria de cosmeticos, fábrica de cosmeticos, empresa fabricante de cosmeticos, cosmeticos, fabricante, fábrica, industria, daterra" />

                    {/* */}
                    <meta property="og:url" content="https://www.blendquimica.com.br/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Blend Química - Química com essência!" />
                    <meta property="og:description" content="Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes." />
                    <meta property="og:image" content="https://www.blendquimica.com.br/static/img/blend-meta.png" />

                    {/* */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="blendquimica.com.br" />
                    <meta property="twitter:url" content="https://www.blendquimica.com.br/" />
                    <meta name="twitter:title" content="Blend Química - Química com essência!" />
                    <meta name="twitter:description" content="Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes." />
                    <meta name="twitter:image" content="https://www.blendquimica.com.br/static/img/blend-meta.png" />

                    {/* Fontes */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    {/* Adicionei crossorigin ao segundo preconnect, boa prática */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/static/img/blend-icon.png" />

                    {/* Google Tag Manager - Snippet <head> */}
                    {/* Colocado aqui, logo antes do fechamento do </Head> */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');`,
                        }}
                    />
                    {/* Fim do Google Tag Manager */}

                </Head>
                <body style={{ padding: 0, margin: 0 }}> {/* Seu estilo inline mantido */}
                    {/* Google Tag Manager (noscript) - Snippet <body> */}
                    {/* Colocado logo após a abertura do <body> */}
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                    {/* Fim do Google Tag Manager (noscript) */}

                    <Main /> {/* Conteúdo principal da sua página */}
                    <NextScript /> {/* Scripts do Next.js */}
                </body>
            </Html>
        )
    }
}