import CheckIcon from "../icons/Check";

interface IngredientItemProps {
  name: string;
  amount: string;
}
const IngredientItem: React.FC<IngredientItemProps> = ({ name, amount }) => {
  return (
    <div className="border-2 border-solid border-gray rounded-lg p-[10px] m-[10px]">
      <CheckIcon className="w-[20px] h-[20px]" /> {name}:
      <span className="text-red-600">{amount}</span>
    </div>
  );
};

export default IngredientItem;
