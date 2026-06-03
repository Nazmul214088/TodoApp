import cn from "../lib/Utility";

const TableData = ({ tData, className, ...props }) => {
  return (
    <td
      // className={twMerge(
      //   clsx(
      //     " border border-gray-300 p-3",
      //     className,
      //     {
      //       "text-[#04c301]": props.isComplete,
      //       "text-[#d00202]": !props.isComplete,
      //     },
      //     className,
      //   ),
      // )}
      className={cn(
        " border border-gray-300 p-3",
        className,
        {
          "text-[#04c301]": props.isComplete,
          "text-[#d00202]": !props.isComplete,
        },
        className,
      )}
    >
      {tData}
    </td>
  );
};

export default TableData;
