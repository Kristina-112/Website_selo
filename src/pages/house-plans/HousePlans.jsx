import React, {useState} from 'react'
import PageWrapper from "../../shared/page-components/PageWrapper.jsx";
import Card from "../../shared/Card.jsx";
import {houses} from '../../dataLists.js'

const HousePlans = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <PageWrapper pageClass="house-plans" title="Проекты домов">
            <h1 className="title">ПРОЕКТЫ ДОМОВ</h1>

            <div className="cards">
                {[0, 1, 2, 3].map(col => (
                    <div className="cards__column" key={col}>
                        {houses
                            .filter((_, i) => i % 4 === col)
                            .map((house, i) => {
                                const colIndex = i * 4 + col
                                return (
                                    <Card
                                        key={colIndex}
                                        house={house}
                                        index={colIndex}
                                        hoveredIndex={hoveredIndex}
                                        setHoveredIndex={setHoveredIndex}
                                    />
                                )
                            })}
                    </div>
                ))}
            </div>
            <hr/>
        </PageWrapper>
    )
};

export default HousePlans;