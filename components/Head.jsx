import Head from "next/head"
import Config from "../portfolio.config"

function Header() {
    return(<div>
        <Head>
            <title>Xariona Portfolio - v1.0.0</title>
            <meta property="og:title" content="Xariona Portfolio - v1.0.0"/>
            <meta property="og:description" content="Personality Portfolio"/>
            <meta property="og:type" content="portfolio"/>
            <meta property="og:image" content={Config.personalInfo.pp}/>
            <meta name="theme-color" content="#7700ff"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
    </div>)
}

export default Header
