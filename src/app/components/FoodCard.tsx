import React from "react";
import Image from "next/image";
import IngredientItem from "./IngredientItem";

const FoodCard: React.FC = () => {
  const recipe = {
    name: "Cá Kho",
    image: "https://cdn.tgdd.vn/Files/2021/02/23/1329799/bi-quyet-nau-ca-kho-to-ngon-chuan-vi-ca-dai-mau-sac-chuan-dep-202208271627215315.jpg",
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
      "Sơ chế nguyên liệu: Làm sạch cá, cắt khúc vừa ăn, thịt ba chỉ cắt miếng nhHành, tỏi, gừng băm nhỏ, ớt cắt lát.",
      "Ướp cá với nước mắm, đường, tiêu, muối, gừng, hành tỏi băm. Ướp 20-30 p.",
      "Thắng nước hàng bằng cách đun đường đến khi có màu cánh gián, thêm n và tắt bếp.",
      "Xếp thịt ba chỉ dưới đáy nồi, xếp cá lên trên, thêm nước dừa và n hàng. Kho cá với lửa nhỏ 45-60 phút.",
      "Nêm nếm lại cho vừa ăn, thêm tiêu, hành lá, thì là trước khi tbếp.",
    ],
    tips: [
      "Kho cá với lửa nhỏ để cá ngấm gia vị và không bị nát.",
      "Nước dừa tươi giúp cá kho có vị ngọt tự nhiên.",
      "Thêm nhiều ớt nếu thích ăn cay.",
    ],
    serving: "Ăn kèm với cơm trắng, rau luộc hoặc dưa chua.",
  };

  return (
    <div className="flex flex-col rounded-xl py-[20px] px-[40px] border-4 border-dashed border-gray-400 w-[800px]">
      <Image
          className="dark:invert"
          src={recipe.image}
          alt={recipe.name}
          width={180}
          height={38}
          priority
        />
      <h3 className="text-4xl mb-6">{recipe.name}</h3>

      <h4 className="text-2xl mb-2 mt-3">Công thức</h4>
      <div className="w-[550px]">
        {React.Children.toArray(
          recipe.ingredients.map((item) => (
            <IngredientItem name={item.name} amount={item.amount} />
          ))
        )}
      </div>

      <h4 className="text-2xl mb-2 mt-3">Cách làm</h4>
      <div className="pl-[20px]">
        {React.Children.toArray(recipe.steps.map((item, index) => <p><b>Bước {index + 1}</b>. {item}</p>))}
      </div>

      <h4 className="text-2xl mb-2 mt-3">Tips</h4>
      <ul className="pl-[20px] list-disc">
        {React.Children.toArray(recipe.tips.map((item) => <li>{item}</li>))}
      </ul>
    </div>
  );
};

export default FoodCard;
