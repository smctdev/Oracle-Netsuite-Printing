"use client";
import { PrintPageProps } from "@/types/types";

const Size1SalesOld: React.FC<PrintPageProps> = ({ data }) => {
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-xs h-[774.7px] w-[601px]">
      <div className="flex mt-[117.1px]">
        <p className="w-[378px] pl-[95px]">Sold to No data</p>
        <p className="w-[223px] pl-[53px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex">
        <p className="w-[378px] pl-[95px]">Tin No data</p>
        <p className="w-[223px] pl-[53px]">Terms</p>
      </div>
      <div className="flex h-[29px]">
        <p className="w-[378px] pl-[95px]">Address</p>
        <p className="w-[223px] pl-[136px]">104</p>
      </div>
      <div className="flex">
        <p className="w-[378px] pl-[129px]">Business style</p>
        <p className="w-[223px] pl-[87px]"></p>
      </div>
      <div className="mx-[26.4px] mt-[23px] h-[302.3px] mb-[37.8px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[72px] h-[19px]">{row[10]}</td>
                <td className="w-[53px] h-[19px]">{row[11]}</td>
                <td
                  className={`w-[238.1px] h-[19px] ${
                    row[9]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[76px] h-[19px]">{row[13]}</td>
                <td className="w-[98.2px] h-[19px]">{row[15]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[26.4px] h-[136px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]">PHP0.00</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]">PHP142,857.14</td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]">PHP0.00</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]">17,142.86</td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]">PHP0.00</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]">PHP17,142.86</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]"></td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]">PHP160,000.00</td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]"></td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19px] w-[125px]"></td>
              <td className="h-[19px] w-[181.4px]"></td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[98.3px]">PHP160,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size1SalesOld;
