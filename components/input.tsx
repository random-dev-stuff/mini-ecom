interface InputProps {
  label: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, type, onChange }: InputProps) => {
  return (
    <div>
      {label && (
        <label className="font-bold text-black" htmlFor="">
          {label}
        </label>
      )}

      <input
        className="text-black focus:outline-none w-full border rounded px-3 py-2"
        type={type}
        onChange={onChange}
      />
    </div>
  );
};
