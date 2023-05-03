import { useEffect, useState } from "react"

interface IPrescriptionProps{
    wantsAlternative: boolean, 
    changeAlternative: (arg: boolean) => void 
}

const Prescription: React.FC<IPrescriptionProps> = ({wantsAlternative, changeAlternative}) => {
    const [wantsAlternative_, setAlternative] = useState<boolean>(false)
     useEffect(() => {
                setAlternative(wantsAlternative)
            }, [wantsAlternative]);
    return (
    <div className="flex items-center justify-center">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-2">
            Prescription
        </h3>

        <button className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
            onClick={() => setAlternative(!wantsAlternative_)}>Advance</button> 
    </div>
    )
}

export default Prescription