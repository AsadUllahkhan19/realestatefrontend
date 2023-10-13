const SelectOption = ({ _options, _selectedValue, _onSelectChange, purpvalue, type, label, name }) => {
  
  return (
    <select
      value={_selectedValue}
      name={name}
      onChange={_onSelectChange}
      className="text-footer w-full border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  rounded-lg p-3 bg-transparent hover:border-green-500 my-1"
    >
      <option value=""  selected>
        {label}
      </option>
      {_options.map((opt, i) => (
        <option
          key={i}
          name="option"
          value={opt.key}
          disabled={
            (type === 'completion' && purpvalue !== 'forSale') && true
            // (type === 'completion' && purpvalue !== 'forSale') && true
          }
        >
          {opt.key}
        </option>
      ))}
    </select>

  );
};

export default SelectOption;