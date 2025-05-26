import React, {useState, useEffect} from 'react'
import PageWrapper from "../../shared/page-components/PageWrapper.jsx";
import Card from "../../shared/Card.jsx";
import {houses} from '../../dataLists.js'

const HousePlans = () => {
    // индекс выбранной карточки
    const [hoveredIndex, setHoveredIndex] = useState(null)

    // подсчет колонок
    function useColumnsCount() {
        const getCount = () => {
            const w = window.innerWidth;
            if (w > 1377) return 4;
            if (w >= 1025) return 3;
            if (w >= 650) return 2;
            return 1;
        };

        const [columns, setColumns] = useState(getCount);

        useEffect(() => {
            const onResize = () => setColumns(getCount());
            window.addEventListener('resize', onResize);
            return () => window.removeEventListener('resize', onResize);
        }, []);

        return columns;
    }
    const columnsCount = useColumnsCount();
    const cols = Array.from({length: columnsCount}, (_, i) => i);

    return (
        <PageWrapper pageClass="house-plans" title="Проекты домов">
            <h1 className="title">ПРОЕКТЫ ДОМОВ</h1>

            <div className="cards" style={{'--cols': columnsCount}}>
                {cols.map(col => (
                    <div className="cards__column" key={col}>
                        {houses
                            .filter((_, i) => i % columnsCount === col)
                            .map((house, idxInCol) => {
                                const index = idxInCol * columnsCount + col;
                                return (
                                    <Card
                                        className="card__item"
                                        key={index}
                                        house={house}
                                        index={index}
                                        hoveredIndex={hoveredIndex}
                                        setHoveredIndex={setHoveredIndex}
                                    />
                                )
                            })}
                    </div>
                ))}
            </div>

            {/*<div className="cards">*/}
            {/*    {[0, 1, 2, 3].map(col => (*/}
            {/*        <div className="cards__column" key={col}>*/}
            {/*            {houses*/}
            {/*                .filter((_, i) => i % 4 === col)*/}
            {/*                .map((house, i) => {*/}
            {/*                    const colIndex = i * 4 + col*/}
            {/*                    return (*/}
            {/*                        <Card*/}
            {/*                            className="card__item"*/}
            {/*                            key={colIndex}*/}
            {/*                            house={house}*/}
            {/*                            index={colIndex}*/}
            {/*                            hoveredIndex={hoveredIndex}*/}
            {/*                            setHoveredIndex={setHoveredIndex}*/}
            {/*                        />*/}
            {/*                    )*/}
            {/*                })}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <hr/>
        </PageWrapper>
    )
};

export default HousePlans;