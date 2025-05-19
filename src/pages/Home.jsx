import {useState, useContext} from "react";
import {motion} from "framer-motion";
import {images, ThemeContext} from "../utils/themeContext.jsx";
import BulletPoint from "../components/BulletPoint.jsx";
import ScrollTop from "../components/ScrollTop.jsx";
import ContentsDropDown from "../components/Contents.jsx";

const Home = () => {
    const contents = [
        "Расположение",
        "Описание",
        "Строительство",
        "Инфраструктура посёлка",
        "Окружение",
    ];

    const infrastructure = [
        "Высокое ограждение по периметру",
        "Служба охраны на въезде, КПП",
        "Круглосуточная охрана территории посёлка, видеонаблюдение",
        "Сеть автомобильных и пешеходных дорог с удобными подъездами к участкам и зонам разворота",
        "Оборудованные гостевые автостоянки",
        "Оборудованные зоны отдыха",
        "Оборудованный пляж вблизи озера",
        "Игровые площадки для детей",
        "Универсальная спортивная площадка для любителей активного отдыха",
        "Магазин",
        "Летнее кафе",
        "Резервное электроснабжение",
        "Администрация посёлка",
        "Офис продаж",
    ];

    const {theme} = useContext(ThemeContext);
    const [showContents, setShowContents] = useState(false);

    return (
        <div className="home">
            <div className="header">
                <img className="header_background" src={images.static.bg_home}/>
                <p className="header_title">О нас</p>
            </div>

            <motion.div
                className="container"
                initial={{opacity: 50, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                viewport={{once: false}}
            >

                <div className="h1-wrapper">
                    <div className="d-flex ai-center">
                        <h1>ЗАПОВЕДНОЕ<br/>
                            дачный посёлок
                        </h1>
                        <img className={`contents_arrow ${showContents ? 'rotated' : ''}`}
                             src={images[theme].arrow}
                             onClick={() => setShowContents(!showContents)}
                        />
                    </div>
                    <ContentsDropDown contents={contents} visible={showContents}/>
                </div>

                <h2 id="1">Расположение</h2>
                <div className="info_row info_row-thirds">
                    <p className="info_text">
                        Дачный поселок «Заповедное» находится в <span className="highlighted">
                        88 км от Москвы, по Ярославскому или Щелковскому шоссе </span>
                        рядом с деревней Малое Каринское, Александровского района Владимирской области.
                    </p>
                    <div className="info_item">
                        <p className="info_label">
                            <img className="bullet-point" src={images.static.car}/>
                            на автомобиле</p>
                        <div className="info_text shadowed">
                            <p>Весь путь от МКАД в ДПК «Заповедное» занимает всего <span className="highlighted">50 минут</span> на
                                автомобиле.</p>
                            <p>От шоссе до поселка ведет асфальтированная дорога хорошего качества.</p>
                        </div>
                    </div>
                    <div className="info_item">
                        <p className="info_label">
                            <img className="bullet-point" src={images.static.train}/>
                            на электричке</p>
                        <div className="info_text shadowed">
                            <p>На электричке можно добраться с Ярославского вокзала, доехав до станции «Струнино».</p>
                            <p>От станции ходит автобус «Струнино - Александров», маршрут которого проходит через наш
                                поселок.</p>
                        </div>
                    </div>
                </div>

                <h2 id="2">Описание</h2>
                <div className="info_row info_row-half">
                    <div className="info_text as-end">
                        <p>Дачный поселок «Заповедное» расположен в живописном, экологически чистом месте.</p>
                        <p>На территории сохранен естественный ландшафт, созданный самой природой.</p>
                        <ul>
                            <BulletPoint name="plant"
                                         text="Поселок окружен лесом с преимущественно хвойными породами деревьев"/>
                            <BulletPoint name="plant"
                                         text="Внутри поселка есть природное озеро с благоустроенной территорией для Вашего комфортного отдыха"/>
                        </ul>
                        <p>Администрация ДПК «Заповедное»
                            проделала огромную работу и постаралась создать условия для того, чтобы каждое мгновение,
                            проведенное здесь, наполняло Вас живительной силой природы.</p>
                    </div>
                    <img className="info_image js-end" src={images.static.house_field}/>
                </div>

                <div className="info_row info_row-half">
                    <p className="info_text dotted">
                        Все дома в поселке возводятся из экологически чистых материалов с использованием современных
                        энергосберегающих технологий с соблюдением высоких стандартов качества строительства, учитывая
                        пожелания заказчика. Подведены все коммуникации для круглогодичного проживания с учетом
                        климатических условий нашего региона. Есть <span className="highlighted">газ, свет, водопровод, канализация</span>,
                        возможно
                        подключение к сети <span className="highlighted">Internet</span>.
                    </p>

                    <p className="info_text"
                       style={{
                           padding: '1rem',
                           textAlign: 'center',
                           lineHeight: '1.5',
                           boxShadow: '0 0 10px 10px var(--green)',
                       }}>
                        Приобретая участок и заказывая дом в ДПК «Заповедное» Вы инвестируете капитал в недвижимость в
                        <span style={{color: 'var(--green)', fontWeight: 'bold'}}> экологически чистом районе</span>,
                        удачно
                        расположенном вблизи границы Московской и Владимирской
                        области, с развитой инфраструктурой, отличными пейзажами первозданной природы, где для Вас
                        существуют все блага цивилизации.
                    </p>

                </div>

                <h2 id="3">Строительство</h2>
                <div className="info_row info_row-aside-left">
                    <img className="info_image area-main" src={images.static.forest}/>
                    <div className="info_text area-top"> Строительство деревянных домов на Руси популярно испокон веков.<br/>
                        И сегодня, несмотря на все
                        изыски технического прогресса, мы возвращаемся к истокам и начинаем ценить простые, но
                        действительно важные, жизненно необходимые вещи: <span
                            style={{color: 'var(--label)', fontWeight: 'bold'}}>свежий воздух</span> вместо удушающего
                        смога
                        мегаполиса, <span
                            style={{color: 'var(--green)', fontWeight: 'bold'}}>красоту природы</span> вместо безликих
                        каменных джунглей,
                        <span style={{
                            color: 'var(--highlight-text)',
                            fontWeight: 'bold'
                        }}> тепло и защиту родного дома</span> из
                        бруса вместо зажатой среди тысяч таких же, типовой квартирки с тонкими стенами и ужасаемой
                        слышимостью.
                    </div>
                    <div className="info_text area-bottom">
                        Наша компания строит дома и бани, используя <span className="highlighted">материалы, изготовленные из северных лесов
                        Костромской области</span>. Заготовка леса для отделочных и строительных материалов, как
                        правило,
                        производится в холодное зимнее время, в итоге получаются качественные древесные строительные
                        и
                        отделочные материалы.
                    </div>
                </div>


                <h3>производство стройматериалов</h3>
                <div className="info_row info_row-thirds">
                    <div className="info_text ">
                        Качество материала напрямую зависит от самого производителя. На нашем
                        предприятии работают высококвалифицированные специалисты по деревообработке, которые
                        постоянно следят за качеством выпускаемой продукции. Костромской лес давно заработал хорошую
                        репутацию.
                        <div className="mt-3">
                            В сезон строительства пиломатериалы загружаются для доставки напрямую
                            "из под ленты" - что означает огромный спрос на нашу продукцию. За счет максимальной
                            механизации в производстве отделочных материалов, их стоимость вполне разумная.
                        </div>
                    </div>
                    <img className="info_image" src={images.static.house2}/>
                    <div className="info_text shadow">Комплект поставки дома из бруса состоит из нескольких элементов,
                        производство которых прекрасно налажено в нашей компании:
                        <ul className="shadowed">
                            <BulletPoint name="check"
                                         text="Стены дома"/>
                            <BulletPoint name="check"
                                         text="Внутренние перегородки"/>
                            <BulletPoint name="check"
                                         text="Стропильная система"/>
                            <BulletPoint name="check"
                                         text="Обрешетка крыши"/>
                            <BulletPoint name="check"
                                         text="Лаги пола и потолка"/>
                            <BulletPoint name="check"
                                         text="Черновой пол"/>
                            <BulletPoint name="check"
                                         text="Перекрытие потолка"/>
                            <BulletPoint name="check"
                                         text="Обшивка фронтонов"/>

                        </ul>
                        Даже с помощью перечисленных выше компонентов можно
                        построить деревянный дом, что называется <span
                            className="highlighted">«без единого гвоздя»</span>.
                    </div>
                </div>

                <h3>какие материалы мы производим?</h3>
                <div className="info_row info_row-thirds">
                    <div className="info_text">Самым популярным и экономным строительным материалом является <span
                        className="highlighted">брус</span>.
                        Мы строим дома из профилированного и обычного (естественной влажности) бруса. <br/> Для
                        строительства
                        используется брус различных размеров, от 50 мм до 200 мм шириной и высотой, 6 метров длиной.
                    </div>
                    <div className="info_image-label">
                        <img className="info_image" src={images.static.timber1}/>
                        профилированный брус
                    </div>
                    <div className="info_image-label">
                        <img className="info_image" src={images.static.timber2}/>
                        брус естественной влажности
                    </div>
                </div>

                <hr/>

                <div className="info_text mb-3">
                    Началом всех начал служило бревно из хвойных пород деревьев. Издавна самым теплым жилищем
                    считается дом из бревна.<br/>
                    Для строительства мы используем <span
                    className="highlighted"> оцилиндрованные, строганные и цельные</span> бревна.
                </div>
                <div className="info_row info_row-thirds">
                    <div className="info_image-label">
                        <img className="info_image flex-grow-1" src={images.static.log1}/>
                        оцилиндрованное
                    </div>
                    <div className="info_image-label">
                        <img className="info_image flex-grow-1" src={images.static.log2}/>
                        строганное
                    </div>
                    <div className="info_image-label">
                        <img className="info_image flex-grow-1" src={images.static.log3}/>
                        цельное
                    </div>
                </div>

                <h3>материалы для отделки</h3>
                <div className="info_row info_row-quarters">
                    <div className="info_text"> Большинство деревянных новостроек хозяева предпочитают отделывать
                        вагонкой.<br/>
                        <span className="highlighted">Вагонка</span> - очень практичный и недорогой отделочный материал,
                        имеющий множество разновидностей.
                    </div>
                    <div className="info_image-label">
                        <img className="info_image flex-grow-1" src={images.static.finish1}/>
                        вагонка
                    </div>
                    <div className="info_image-label">
                        <img className="info_image flex-grow-1" src={images.static.finish2}/>
                        блок-хаус
                    </div>
                    <div className="info_text">
                        Для отделки деревянного дома из бруса не так давно вышел на рынок другой отделочный материал,
                        получивший название <span className="highlighted">блок-хаус</span>.
                    </div>
                </div>

                <h2 id="4">Инфраструктура посёлка</h2>
                <div className="info_row info_row-half info_text">
                    <ul>
                        {infrastructure.slice(0, 7).map((text) =>
                            <BulletPoint name="check" text={text}/>
                        )}
                    </ul>
                    <ul>
                        {infrastructure.slice(7, 14).map((text) =>
                            <BulletPoint name="check" text={text}/>
                        )}
                    </ul>
                </div>

                <h3>в планах развития</h3>
                <ul className="info_text">
                    <BulletPoint name="check" text="Открытие ресторана"/>
                    <BulletPoint name="check" text="Строительство часовни"/>
                </ul>

                <h2 id="5">Окружение</h2>
                <div className="info_row info_row-thirds info-text mb-5">
                    <div className="info_text dotted">
                        Заповедное - отличное место для жизни и отдыха людей, ведущих здоровый и
                        активный образ жизни. Здесь возможны прогулки на лошадях, рыбалка и охота.
                    </div>
                    <div className="info_text">Александровский район славится богатой фауной.
                        В лесах Владимирской области можно встретить лося, кабана, косулю, лису, зайца, ястреба.<br/>
                        Утро для Вас будет начинаться с нежного воздуха хвойного леса и звуков пения соловьев и чибисов.
                    </div>
                    <div className="info_text">Рядом с поселком расположен населенный пункт, город
                        Струнино с развитой инфраструктурой
                        (супермаркеты, детские сады, школы, рестораны, поликлиника, больница и т.д.).
                    </div>
                </div>

                <div className="ta-center">
                    <b>
                        <div className="info_text">
                            Мы гарантируем качество, юридическую чистоту сделки и строгое выполнение всех сроков
                            оформления
                            документации и строительства.
                        </div>
                        <div className="info_text">Строительство в поселке началось в 2007 году.</div>
                        <div className="info_text">В настоящее время в поселке проживает более 150 семей.</div>
                    </b>
                </div>
            </motion.div>
            <ScrollTop/>
        </div>
    )
}

export default Home;