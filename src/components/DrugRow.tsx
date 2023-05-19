import { useState } from "react"
import Drug from "../models/Drug"
import Alternatives from "./Alternatives";
import Alternative from "../models/Alternative";

interface IDrugRowProps{
    drug: Drug;
}

const DrugRow: React.FC<IDrugRowProps> = ({drug}) => {
    const [drug_, setDrug] = useState<Drug>(drug)
    const changeToAlternative = (drug__: Alternative): void => {
        const changedDrug: Drug = {name: drug__.name, price: drug__.price, brand: drug__.brand, alternatives: [drug_]}
        drug_.alternatives.forEach((alternative: Alternative) => {
            if (alternative.name !== changedDrug.name)
                changedDrug.alternatives.push(alternative)
        });
        setDrug(changedDrug);
    }
    return (
    <tr className="mx-auto"> 
        <td className="py-3 px-6">{drug_.name}</td>
        <td className="py-3 px-6">{drug_.price}</td>
        <td className="py-3 px-6">{drug_.brand ? "Brand" : "Generic"}</td>
        <td className="py-3 px-6">
            <Alternatives options={drug_.alternatives} drug={drug_} changeDrug={changeToAlternative}/>    
        </td>
    </tr>
    )
}

export default DrugRow 