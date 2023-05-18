import { useState } from 'react'
import Drug from '../models/Drug';
import DrugRow from '../components/DrugRow';

const PrescriptionPage: React.FC = () => {
    const [wantsAlternative, setAlternative] = useState<boolean>(false)
    const changeAlternative = (wantsAlternative: boolean): void => {
        setAlternative(wantsAlternative);
    }
    const drug: Drug = {name:"lmao", price: 20, brand: true, 
        alternatives: [{name: "lmao1", price: 10, brand:false}, {name: "lmao2", price:15, brand:false}]}
    return (
    <div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-auto table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Price</th>
                        <th className="py-3 px-6">Branding</th>
                        <th className="py-3 px-6">Alternatives</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    <DrugRow wantsAlternative={wantsAlternative} changeAlternative={changeAlternative} drug={drug} />
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default PrescriptionPage
