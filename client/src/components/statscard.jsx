function StatsCard({ indvfoodSaved, indvfoodDonated }) {
  const indvtotal = indvfoodSaved + indvfoodDonated;

  // Meal equivalent of the total (assuming 0.5kg is 1 meal)
  const meals = Math.round(indvtotal / 0.5);

  // Achievements for each user 
  let achievement;
  if (indvtotal >= 10) achievement = "Bronze";
  else if (indvtotal >= 30 ) achievement = "Silver";
  else achievement = "Gold";

  // sample Tips of the Day for each user
  const tips = [
    "Overripe fruits can be blended into smoothies, milkshakes, or used in baking (e.g., banana bread).",
    "Buy only what you need — plan meals ahead.",
    "When storing new groceries, move older items to the front of the fridge or pantry so they are used first.",
    "Items like potatoes, onions, garlic, and whole pumpkins prefer cool, dark, and dry places like a pantry or cupboard, not the fridge.",
 ];

  // Pick a random tip from the tips list
  const randomIndex = Math.floor(Math.random() * tips.length);
  const tipOfTheDay = tips[randomIndex];

   return (
    <div className="bg-yellow-50 shadow-md p-4 rounded-xl w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-3">Summary</h2>

      <div className="bg-purple-100 flex justify-between">
        <div>Your Food Saved:</div>
        <div>{indvfoodSaved} kg</div>
      </div>

      <div className="bg-purple-100 flex justify-between">
        <div>Your Food Donated:</div>
        <div>{indvfoodDonated} kg</div>
      </div>

      <div className="bg-purple-100 flex justify-between">
        <div>Meals Equivalent:</div>
        <div>{meals} meals</div>
      </div>

      <div className="bg-blue-100 p-2 rounded-md mt-3">
        Achievement: {achievement}
      </div>

      <div className="bg-green-100 p-2 rounded-md mt-3">
         Tip of the day: {tipOfTheDay}
      </div>
    </div>
  );
}

export default StatsCard;
