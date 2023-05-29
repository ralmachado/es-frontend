import Drug from '../models/Drug';
import DrugRow from '../components/DrugRow';
import Menu from '../components/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { apiInstance } from '../services/apiService';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

const PrescriptionPage: React.FC = () => {
    const [drugs, setDrugs] = useState<Drug[]>([])
    const [error, setError] = useState("");
    const api = apiInstance();
    const getDrug = async () => {
        const drugs1: Drug[] = []
        try{
            const response = await api.get("/prescription");
            console.log("Response: ", response);
            response.data.forEach((drug: Drug) => {
                drugs1.push(drug);
            })
            setDrugs(drugs1)
        } catch (err) {
            if (err && err instanceof AxiosError) setError(err.response?.data.message);
            else if (err && err instanceof Error) setError(err.message);
            console.log("Error: ", err);
        }
    };
    useEffect(() => {
        getDrug();
    }, [])

    const calculatePrice = ((): number => {
        let sum = 0 
        drugs.forEach((drug: Drug) => {
            sum += drug.price;
        })
        return sum;
    });

    const sum = calculatePrice();
    return (
    <div>
        <Menu/>
        <div>{error}</div>
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
                            <DrugRow drug={drug} />),
                        )
                    }
                </tbody>
            </table>
        <Link className="px-4 py-2 text-white text-center font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
			to={`/payment/${sum}`}>Advance</Link>
        </div>
		
    </div>
    )
}

export default PrescriptionPage
