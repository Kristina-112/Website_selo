import {useState} from "react";
import DocumentList from "./DocumentList.jsx";
import {filters, documents} from "../dataLists.js";

const FilterByCategory = () => {
    const [selectedType, setSelectedType] = useState("all");

    const filteredDocs =
        selectedType === "all"
            ? documents
            : documents.filter((doc) => doc.type === selectedType);

    return (
        <div className="documents__container">
            <div className="filter">
                {filters.map(({attribute, text}) => (
                    <label className="radio-button" htmlFor={attribute} key={attribute}>
                        <input
                            type="radio"
                            id={attribute}
                            value={attribute}
                            checked={selectedType === attribute}
                            onChange={() => setSelectedType(attribute)}
                        />
                        <span className="radio-circle"></span>
                        {text}
                    </label>
                ))}
            </div>
            <DocumentList documents={filteredDocs}/>
        </div>
    );
}

export default FilterByCategory;