import { TabsWithSideBar } from "../../shared/UI";

export function OfferedServicesTabs(){
    const services = [
        {
            name: "Доставка",
            description: `Мы с удовольствием доставим ваш товар прямо к вашему 
            подъезду совершенно бесплатно! Ведь мы неплохо 
            заработаем, поднимая его на ваш этаж.`,
            img: ""
        },
        {
            name: "Гарантия",
            description: `Если из-за возгорания купленного у нас товара у вас сгорит дом — 
            не переживайте, мы выдадим вам новый.
            Товар, не дом, конечно же.`,
            img: ""
        },
        {
            name: "Кредит",
            description: `Залезть в долговую яму стало проще! Кредитные консультанты 
            подберут для вас наиболее выгодные 
            условия кредита. Выгодные для нашего банка, разумеется.`,
            img: ""
        }
    ];
    return (
        <TabsWithSideBar tabs={services}></TabsWithSideBar>
    );
}