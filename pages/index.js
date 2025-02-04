import Head from 'next/head'
import NavBar from '../components/homePage/navbar'
import MainSlider from '../components/homePage/mainSlider'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CINE APP</title>
                <link rel="icon" href="/favicon.ico" />
                <script
                    data-ad-client="ca-pub-2228533750363168"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
                <meta
                    name="google-site-verification"
                    content="2khcBYVmiR3Hlgvu_c5OITo7sQgaN3OHLE3sXtaFZqA"
                />
                <meta name="clckd" content="b9385dfad483d6eb893a3d243f7e89e6" />
                <meta property="og:title" content={`CINE APP`} />
                <meta
                    property="og:description"
                    content={`Download movies for free via CIENAPP. Simple! Search the movie and download the copy which fits
                    best for you! Happy cinema time!`}
                />
            </Head>
            <div className="page-container">
                {/* <!-- add format one --> */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-2228533750363168"
                    data-ad-slot="5147353463"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                {/* <!-- add format one --> */}
                <div
                    style={{
                        textAlign: 'center',
                        margin: '10px',
                        padingLeft: '10px',
                        paddingTop: '40px',
                        fontSize: '36px',
                    }}
                >
                    Download movies for free via{' '}
                    <span
                        style={{
                            color: 'rgb(223, 163, 0)',
                            fontWeight: 600,
                            textShadow: `0 0 100px rgb(223, 191, 191)`,
                            animation: 'text-flicker 3s linear 1',
                        }}
                    >
                        CI<span id="offset">N</span>E APP
                    </span>
                </div>
                <div
                    style={{
                        textAlign: 'center',
                        margin: '10px',
                        paddingTop: '10px',
                        paddingBottom: '30px',
                        fontSize: '24px',
                    }}
                >
                    Simple! Search the movie and download the copy which fits
                    best for you! Happy cinema time!
                </div>
                <h2
                    style={{
                        fontFamily: `"Times New Roman", Times, serif`,
                        fontSize: '24px',
                        textAlign: 'center',
                        color: '#FFF',
                        fontStyle: 'italic',
                    }}
                >
                    “Cinema is a matter of what's in the frame and what's out” ―
                    Martin Scorsese
                </h2>
                <MainSlider title="Latest Movies" filterBy="year" />
                <MainSlider title="Most Loved" filterBy="like_count" />
                <MainSlider title="Recent Uploads" filterBy="date_uploaded" />
                <MainSlider title="Most Downloaded" filterBy="download_count" />
            </div>
        </div>
    )
}
