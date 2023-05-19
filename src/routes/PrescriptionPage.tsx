import Drug from '../models/Drug';
import DrugRow from '../components/DrugRow';
import Menu from '../components/Menu';
import { useNavigate } from 'react-router-dom';

const PrescriptionPage: React.FC = () => {
    const drugs: Drug[] = [ 
        {name:"lmao", price: 20, brand: true, 
            alternatives: [{name: "lmao1", price: 10, brand:false}, {name: "lmao2", price:15, brand:false}]}
        , {name:"lmaotest", price: 20, brand: true, 
            alternatives: [{name: "lmao3", price: 10, brand:false}, {name: "lmao4", price:15, brand:false}]}
        , {name:"lmaotest2", price: 20, brand: true, 
            alternatives: [{name: "lmao5", price: 10, brand:false}, {name: "lmao6", price:15, brand:false}]}
        , {name:"lmaotest3", price: 20, brand: true, 
            alternatives: [{name: "lmao8", price: 10, brand:false}, {name: "lmao7", price:15, brand:false}]}
    ];
    const navigate = useNavigate();
    return (
    <div>
        <Menu/>
        <div className="flex flex-col mt-24 rounded-lg items-center">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-11">Prescription</h3>
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
                    {
                        drugs.map((drug: Drug) =>(
                            <DrugRow drug={drug} />
                        ))
                    }
                </tbody>
            </table>
        <button className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
			onClick={() => navigate("/prescription")}>Advance</button>
        </div>
		
    </div>
    )
}

export default PrescriptionPage
