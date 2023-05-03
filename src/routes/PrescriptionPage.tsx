import Prescription from '../components/Prescription'
import Alternative from '../components/Alternative'
import { useState } from 'react'

const PrescriptionPage = () => {
    /*
    There is supposed to exist a property of the component that checks if the users wants to see the generics
    If it is true, it renders the Alternative components, that has a table related to the specific drug
     */
    const [wantsAlternative, setAlternative] = useState<boolean>(false)
    const changeAlternative = (wantsAlternative: boolean): void => {
        setAlternative(wantsAlternative);
    }
    return (
    <div>
        <div className="flex items-center justify-center ">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-2">
                PrescriptionPage
            </h3>
        </div>
        <Prescription wantsAlternative={wantsAlternative} changeAlternative={changeAlternative} />
        <Alternative />
    </div>
    )
}

export default PrescriptionPage
