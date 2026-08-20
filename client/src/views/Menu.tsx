import React, { useEffect, useState } from "react";

const Menu = () => {
  type Drink = {
    name: string;
    price: number;
    id: number;
  };

  const [drinks, setDrinks] = useState<Array<Drink>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/cocktails/menu");
        const data = await res.json();

        setDrinks(data.menu);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getCocktails();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-cols-4 gap-5 w-[80%] flex">
      {drinks.map((drink: Drink) => {
        return (
          <div key={drink.id} className="w-[20%] bg-indigo-300 p-8">
            {drink.name}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
