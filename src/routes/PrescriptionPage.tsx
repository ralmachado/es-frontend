import Prescription from '../components/Prescription'
import Alternative from '../components/Alternative'
import { useState } from 'react'

const PrescriptionPage: React.FC = () => {
    const [wantsAlternative, setAlternative] = useState<boolean>(false)
    const changeAlternative = (wantsAlternative: boolean): void => {
        setAlternative(wantsAlternative);
    }
    return (
    <div>
        <Prescription wantsAlternative={wantsAlternative} changeAlternative={changeAlternative} />
        { wantsAlternative ? <Alternative/> : null}
    </div>
    )
}

export default PrescriptionPage
