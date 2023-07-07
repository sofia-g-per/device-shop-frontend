import { CategoryGrid, ProductCard } from "../../entities";
import { FocusCarousel} from "../../shared/UI";
import { ContactsCard, Header, Footer, OfferedServicesTabs, PartnersLogosGrid, AboutUsCard } from "../../widgets";

export function MainPage(props){
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
                    {/* !!fix!! carousel as a separate component */}
                    <FocusCarousel>
                        {
                            props.focusedProducts.map(product => 
                                <ProductCard product={product}></ProductCard>
                            )
                        }
                    </FocusCarousel>
                    <CategoryGrid></CategoryGrid>
                    <OfferedServicesTabs></OfferedServicesTabs>
                    <PartnersLogosGrid></PartnersLogosGrid>
                    <section className="section-about-us main-section container">
                        <AboutUsCard/>
                        <ContactsCard/>
                    </section>
                </main>
                <Footer></Footer>
            </body>
        </html>
    )
}
