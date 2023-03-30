const Input = ({ value, onChange }: any) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
};

export default Input;
