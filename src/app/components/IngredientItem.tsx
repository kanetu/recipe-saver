"use client"
import React from "react";
import CheckIcon from "../icons/Check";

interface IngredientItemProps {
  name: string;
  amount: string;
}
const IngredientItem: React.FC<IngredientItemProps> = ({ name, amount }) => {
  return (
    <div className="flex pointer items-center border-2 border-solid border-gray rounded-lg m-[5px]">
      <span className="p-[5px] border-r-2 border-gray-400">
      <CheckIcon className="w-[20px] h-[20px]" />
        </span>
      <span className="p-[5px]">
        {name}:
        <span className="text-red-600">{amount}</span>
      </span>
    </div>
  );
};

export default IngredientItem;
