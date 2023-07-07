import { InfoCard, LinkFramed, List, TextCard } from "../../shared/UI";

export function AboutUsCard(){
    return (
        <InfoCard>
            <TextCard title="О нас" text={[
                `Огромный выбор гаджетов не оставит равнодушным гика, который есть в каждом из нас.`,
                `Мы можем доставить ваш товар в самые отдаленные точки 
                России! DEVICE работает со многими транспортными компаниями:`
            ]}></TextCard>
            <List>
                <p className="strong">Деловые линии</p>
                <p className="strong"> Автотрейдинг</p>
                <p className="strong">ЖелДорЭкспедиция</p>
            </List>
            <LinkFramed label="Подробнее о нас" link="#"></LinkFramed>
        </InfoCard>
    )
}