import { useEffect, useState } from "react"
import Drug from "../models/Drug"

interface IPrescriptionProps{
    wantsAlternative: boolean, 
    changeAlternative: (arg: boolean) => void;
    drug: Drug;
}

const DrugRow: React.FC<IPrescriptionProps> = ({wantsAlternative, changeAlternative, drug}) => {
    const [wantsAlternative_, setAlternative] = useState<boolean>(false)
     useEffect(() => {
                setAlternative(wantsAlternative)
            }, [wantsAlternative]);
    return (
    <tr className="mx-auto"> 
        <td className="py-3 px-6">{drug.name}</td>
        <td className="py-3 px-6">{drug.price}</td>
        <td className="py-3 px-6">{drug.brand ? "Brand" : "Generic"}</td>
        <td className="py-3 px-6">{
            !wantsAlternative_ ? <button className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 
                active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
            onClick={() => changeAlternative(!wantsAlternative_)}>Alternatives</button> 
            : null
        }
        </td>
    </tr>
    )
}

export default DrugRow 