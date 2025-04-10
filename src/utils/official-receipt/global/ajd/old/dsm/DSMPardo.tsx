"use client";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const DSMPardo = ({ data }: any) => {
  const CR_Date = 0;
  const CR_Name = 1;
  const CR_TIN = 2;
  const CR_Address = 3;
  const CR_BusinessStyle = 4;
  const CR_AmountInFigures = 5;
  const CR_AmountInWords = 6;
  const CR_Memo = 7;
  const CR_FormOfPayment = 8;
  const CR_PartnerName = 9;
  const CR_Reference = 10;

  return (
    <div className="text-xs w-[778.58267717px] h-[396.8503937px] ml-[10px]">
      <div className="flex mt-[96.708661417px]">
        <p className="ml-[454.33858268px] w-[102.04724409px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[778.58267717px] mt-[4.7952755906px]">
        <div className="w-[461.1023622px]">
          <p className="ml-[276.7007874px] text-xs">
            {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[156.47244094px]">
          <p className="ml-[56.692913386px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex ml-[265.36220472px]">
        <p className="w-[211.65354331px] text-xs">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex text-xs ml-[280.48031496px] mt-[6.8267716539px]">
        <p className="w-[207.87401575px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex ml-[189.77165354px] mt-[3.8267716539px]">
        <p className="w-[328.81889764px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-[778.58267717px] mt-[6.8267716539px]">
        <div className="w-[325.03937008px]">
          <p className="ml-[197.33070866px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[292.91338583px]">
          <p className="ml-[110.4015748px] text-xs">
            {data[1]?.[CR_Memo] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[188.97637795px] ml-[367.40944882px] mt-[52.913385827px]">
        <p className="text-center">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default DSMPardo;