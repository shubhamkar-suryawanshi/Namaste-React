const FoodItem = ({ name, description, price }) => {
  return (
    <div className="p-3 m-2 text-left shadow-lg w-7/8">
      <h2 className="font-bold">{name} </h2>
      <h4>description: {description}</h4>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
