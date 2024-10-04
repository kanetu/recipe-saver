import React from "react";
import IngredientItem from "./IngredientItem";

const FoodCard: React.FC = () => {
  const recipe = {
    name: "Cá Kho",
    ingredients: [
      { name: "Cá (cá trắm, cá basa, cá lóc)", amount: "1 kg" },
      { name: "Thịt ba chỉ (tùy chọn)", amount: "200g" },
      { name: "Hành khô", amount: "3 củ" },
      { name: "Tỏi", amount: "1 củ" },
      { name: "Ớt", amount: "1-2 quả" },
      { name: "Gừng", amount: "1 nhánh nhỏ" },
      { name: "Nước mắm", amount: "3-4 muỗng canh" },
      { name: "Đường", amount: "2 muỗng canh" },
      { name: "Nước dừa tươi (tùy chọn)", amount: "1 quả" },
      { name: "Tiêu", amount: "tùy ý" },
      { name: "Muối", amount: "tùy ý" },
      { name: "Bột ngọt", amount: "tùy ý" },
      { name: "Nước hàng (nước màu)", amount: "tùy ý" },
      { name: "Hành lá, thì là (tùy thích)", amount: "tùy ý" },
    ],
    steps: [
      "1. Sơ chế nguyên liệu: Làm sạch cá, cắt khúc vừa ăn, thịt ba chỉ cắt miếng nhỏ. Hành, tỏi, gừng băm nhỏ, ớt cắt lát.",
      "2. Ướp cá với nước mắm, đường, tiêu, muối, gừng, hành tỏi băm. Ướp 20-30 phút.",
      "3. Thắng nước hàng bằng cách đun đường đến khi có màu cánh gián, thêm nước và tắt bếp.",
      "4. Xếp thịt ba chỉ dưới đáy nồi, xếp cá lên trên, thêm nước dừa và nước hàng. Kho cá với lửa nhỏ 45-60 phút.",
      "5. Nêm nếm lại cho vừa ăn, thêm tiêu, hành lá, thì là trước khi tắt bếp.",
    ],
    tips: [
      "Kho cá với lửa nhỏ để cá ngấm gia vị và không bị nát.",
      "Nước dừa tươi giúp cá kho có vị ngọt tự nhiên.",
      "Thêm nhiều ớt nếu thích ăn cay.",
    ],
    serving: "Ăn kèm với cơm trắng, rau luộc hoặc dưa chua.",
  };

  return (
    <div className="flex flex-col rounded py-[20px] px-[40px] border-4 border-dashed border-black">
      <h3>{recipe.name}</h3>

      <h4>Công thức</h4>
      <div className="flex flex-wrap w-[550px]">
        {React.Children.toArray(
          recipe.ingredients.map((item) => (
            <IngredientItem name={item.name} amount={item.amount} />
          ))
        )}
      </div>

      <h4>Cách làm</h4>
      <ul className="pl-[20px]">
        {React.Children.toArray(recipe.steps.map((item) => <li>{item}</li>))}
      </ul>

      <h4>Tips</h4>
      <ul className="pl-[20px]">
        {React.Children.toArray(recipe.tips.map((item) => <li>{item}</li>))}
      </ul>
    </div>
  );
};

export default FoodCard;
