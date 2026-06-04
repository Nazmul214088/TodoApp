const StatsCard = ({ title, total, ...props }) => {
  return (
    <div className="max-w-80 p-6 text-center dark:text-[#ced6e0] rounded-xl dark:bg-[#2a3541] light:bg-white shadow-[0_5px_10px_#5352ed]">
      <p className="text-2xl py-2 my-2">{title}</p>
      <h2 className="text-5xl font-bold py-2 my-2">
        {total}
        {props.percentage}
      </h2>
    </div>
  );
};

export default StatsCard;
