import {images} from "../../../utils/themeContext.jsx";

const FloorPlan = ({plan1Key, plan2Key, slug}) => {
    return (
        <div className="floor-plan">
            <img src={images.static[plan1Key]} alt=""/>
            <img src={images.static[plan2Key]} alt=""
                     onClick={() => console.log(slug)}/>

            <div className={`floor-plan__list_invisible ${slug === 'kd-001' ? 'floor-plan__list_visible' : ''} mt-3`}>

                <div className="floor-plan__list shadowed">{
                    [
                        {title: "Гостиная", area: "26,6"},
                        {title: "Кухня-столовая", area: "11,4"},
                        {title: "Спальня", area: "11,4"},
                        {title: "Бойлерная", area: "6,3"},
                        {title: "Лестничный холл", area: "9,84"},
                        {title: "Санузел", area: "3,78"},
                        {title: "Тамбур", area: "4,5"},
                        {title: "Терраса", area: "26"},
                        {title: "Крыльцо", area: "4,16"}
                    ].map(({title, area}, index) =>
                        <p>{index + 1}. {title}
                            <span>  {area}м²</span>
                        </p>)
                }
                </div>

                <div className="floor-plan__list shadowed ml-5">
                    {
                        [
                            {title: "Спальня", area: "19,0"},
                            {title: "Спальня", area: "19,0"},
                            {title: "Спальня", area: "11,4"},
                            {title: "Кабинет", area: "11,4"},
                            {title: "Лестничный холл", area: "9,84"},
                            {title: "Санузел", area: "3,78"},
                        ].map(({title, area}, index) =>
                            <p>{index + 1}. {title}
                                <span>  {area}м²</span>
                            </p>)
                    }
                </div>
            </div>

            <div className={`floor-plan__list_invisible ${slug === 'kd-003' ? 'floor-plan__list_visible' : ''} mt-3`}>

                <div className="floor-plan__list shadowed">{
                    [
                        {title: "Гостиная", area: "28,3"},
                        {title: "Кухня-столовая", area: "19,1"},
                        {title: "Холл", area: "20,8"},
                        {title: "Бойлерная", area: "7,7"},
                        {title: "Санузел", area: "8,8"},
                        {title: "Гардероб", area: "7,3"},
                        {title: "Тамбур", area: "6,2"},
                        {title: "Веранда", area: "20,4"},
                        {title: "Веранда", area: "14"}
                    ].map(({title, area}, index) =>
                        <p>{index + 1}. {title}
                            <span>  {area}м²</span>
                        </p>)
                }
                </div>

                <div className="floor-plan__list shadowed ml-5">
                    {
                        [
                            {title: "Спальня", area: "20,6"},
                            {title: "Спальня", area: "11"},
                            {title: "Спальня", area: "24,8"},
                            {title: "Холл", area: "21,7"},
                            {title: "Санузел", area: "9,6"},
                            {title: "Санузел", area: "8,6"},
                            {title: "Веранда", area: "12,8"},
                            {title: "Веранда", area: "14"},
                            {title: "Балкон", area: "7,4"}
                        ].map(({title, area}, index) =>
                            <p>{index + 1}. {title}
                                <span>  {area}м²</span>
                            </p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FloorPlan;