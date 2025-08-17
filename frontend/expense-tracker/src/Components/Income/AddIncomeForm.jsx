import React, { useState } from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../layouts/EmojiPickerPopup';


const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: ""
  });

  const handleChange = (key, value) => {
    setIncome({ ...income, [key]: value });
  };

  return (
    <div>
        <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon",selectedIcon)} />
      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc"
        type="text"
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />
       <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />
     <div className="flex justify-end mt-6">
  <button
    type="button"
    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    onClick={() => {
      console.log("AddIncome button clicked");
      onAddIncome(income);
    }}
  >
    Add Income
  </button>
</div>

      
    </div>
  );
};

export default AddIncomeForm;
