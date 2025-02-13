/* eslint-disable react/prop-types */
const Input = ({ title, name, onChange, value }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{title}</label>
      <input
        type="text"
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
