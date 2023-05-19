import { useEffect, useState } from "react";
import Alternative from "../models/Alternative";
import Drug from "../models/Drug";

interface IAlternativesProps{
    options: Alternative[];
    drug: Drug;
    changeDrug: (arg: Alternative) => void;
}


const Alternatives: React.FC<IAlternativesProps> = ({options, drug, changeDrug}) => {
  const [drug_, setDrug] = useState<Alternative>(drug)
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = event.target.value;
    const selectedOption = options[Number(selectedValue)];
    changeDrug(selectedOption)
  };

  useEffect(() => {
    setDrug(drug_);
  }, [drug_])

  return (
    <div>
      <select id="dropdown" onChange={handleOptionChange}>
        <option value={undefined}>Select an option</option>
        {options.map((option: Alternative) => (
          <option key={option.name} value={options.indexOf(option)}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Alternatives