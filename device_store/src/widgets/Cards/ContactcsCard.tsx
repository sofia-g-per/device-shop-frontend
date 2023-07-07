import { ButtonFramed, InfoCard, LinkFramed, List, TextCard } from "../../shared/UI";

export function ContactsCard(){
    return (
        <InfoCard>
            <TextCard title="Контакты" text={[
                `Вы можете забрать товар сами, заехав в наш офис. Заодно, вы сможете 
                проверить работоспособность покупки. Всякое бывает.`
            ]}></TextCard>
            {/* !!fix!! change to actual map */}
            <img className="contact-us__map" src="assets/images/contact-us/map_small.png" alt="Адрес: улица Строителей, 15"/>
            <ButtonFramed className="line-through-btn" label="Напишите нам"></ButtonFramed>
        </InfoCard>
    )
}