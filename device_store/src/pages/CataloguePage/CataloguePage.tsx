import { Header, Footer,  ProductGridWithFilters } from "../../widgets";

export function CataloguePage(props){
    return (
        <html lang="rus">
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Device</title>
                <link rel="stylesheet" href="assets/css/general.css"/>
                <link rel="stylesheet" href="assets/css/main.css"/>
                <link rel="stylesheet" href="assets/css/style.css"/>
                <link rel="stylesheet" href="assets/css/queries.css"/>
            </head>
            <body>
                <Header></Header>
                <main>
                    <ProductGridWithFilters/>
                </main>
                <Footer></Footer>
            </body>
        </html>
    )
}
