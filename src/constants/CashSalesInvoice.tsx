import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import DAP1Size from "@/utils/salesinvoice/global/DAP1Size";
import DSMSISize from "@/utils/salesinvoice/global/DSMSISize";
import DapCsiSize from "@/utils/salesinvoice/global/DapCsiSize";
import DsmCsiSize from "@/utils/salesinvoice/global/DsmCsiSize";
import HondaDesSize from "@/utils/salesinvoice/global/HdSiSize";
import LuzonSize from "@/utils/salesinvoice/LuzonSize";
import Size1Sales from "@/utils/salesinvoice/size1";
import Size1SalesOld from "@/utils/salesinvoice/size1-old";
import Size2Sales from "@/utils/salesinvoice/size2";
import Size2SalesOld from "@/utils/salesinvoice/size2-old";
import Size3Sales from "@/utils/salesinvoice/size3";
import Size4Sales from "@/utils/salesinvoice/size4";
import Size5Sales from "@/utils/salesinvoice/size5";
import Size6Sales from "@/utils/salesinvoice/size6";
import Size7Sales from "@/utils/salesinvoice/size7";
import Size8Sales from "@/utils/salesinvoice/size8";
import Size9Sales from "@/utils/salesinvoice/size9";
import HdSiSize from "@/utils/salesinvoice/global/HdSiSize";
import HdCsiSizes from "@/utils/salesinvoice/global/HdCsiSize";
import SmctCsiSize from "@/utils/salesinvoice/global/SmctCsiSize";
import SmctSiSize from "@/utils/salesinvoice/global/SmctSiSize";
import HDAurora from "@/utils/salesinvoice/global/hd/new/HDAurora";
import DapLabason from "@/utils/salesinvoice/global/dap/DapLabason";
import Antipolo from "@/utils/salesinvoice/global/smct/new/Antipolo";
import MandaueMulti from "@/utils/salesinvoice/global/dsm/NEW/obbus/MandaueMulti";
import HDBuug from "@/utils/salesinvoice/global/hd/new/HDBuug";
import HDBalamban from "@/utils/salesinvoice/global/hd/new/HDBalamban";
import DSMDanao from "@/utils/salesinvoice/global/dsm/NEW/obbus/DSMDanao";
import DsmCarmenCebu2 from "@/utils/salesinvoice/global/dsm/NEW/obbus/DsmCarmenCebu2";
import DAPBalingasag from "@/utils/salesinvoice/global/dap/DAPBalingasag";
import DAPIligan from "@/utils/salesinvoice/global/dap/DAPIligan";
import DSMBayugan from "@/utils/salesinvoice/global/dsm/NEW/fdl/DSMBayugan";
import Consolacion from "@/utils/salesinvoice/global/obbus/old/dsm/Consolacion";

const CashSalesInvoice: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  // const size1 = [
  //   "DSMC",
  //   "GUSA",
  //   "ILOI",
  //   "CALIN",
  //   "OZAD",
  //   "INAB",
  //   "VITA",
  //   "MEDE",
  //   "SAGBA",
  //   "DSMDN",
  //   "CARMCDO",
  //   "BAYB",
  //   "FAMY",
  //   "DSMAO",
  //   "VILLA2",
  //   "GUIN2",
  //   "DSMA",
  //   "BUUH",
  //   "DIPD2",
  //   "SALA",
  //   "OROH2",
  //   "CALAP2",
  //   "DIPD",
  //   "LAPU",
  //   "VALEN",
  //   "JAGN",
  //   "IPIH",
  //   "DSMSO",
  //   "CARMC",
  //   "DATH",
  //   "BONI",
  //   "SANP",
  //   "OROH",
  //   "SINDA",
  //   "LILD",
  //   "BOGO",
  //   "MALA",
  //   "SMCT",
  //   "TUBU",
  //   "CATM",
  //   "CARMB",
  //   "INIT",
  //   "TANZ",
  //   "SDIP",
  //   "CARS",
  //   "DAAN",
  //   "ALIC",
  //   "CATAR",
  //   "ALAH",
  //   "UBAY",
  //   "REMI",
  //   "MANO",
  //   "TUBI",
  //   "MARH",
  //   "YATI",
  //   "TORI",
  //   "DSML",
  //   "MANG",
  //   "BOHK",
  //   "LIPA",
  //   "DSMCN",
  //   "TALI",
  //   "DSMD",
  //   "ILID",
  //   "PARD3",
  //   "DSMT2",
  //   "BALAM",
  //   "CERI",
  //   "CALA",
  //   "BUUD",
  //   "DSMK",
  //   "VETH",
  //   "CATAR",
  //   "NUND2",
  //   "MOLD2",
  //   "REMI2",
  //   "CARC2",
  //   "OROD",
  //   "SILA",
  //   "BULU",
  //   "TRINI",
  //   "OZAH",
  //   "LOAY",
  //   "SLAP",
  //   "DSMCA",
  //   "MARA2",
  //   "DSMD2",
  //   "SUCD",
  //   "ALEN",
  //   "ILIG",
  //   "JIME",
  //   "PARD",
  //   "SROS",
  //   "DSMTA",
  // ];
  // const size2 = [
  //   "MOLS",
  //   "ALAD",
  //   "SLIL",
  //   "BANTA",
  //   "KATI",
  //   "SANM",
  //   "ANTI",
  //   "MARD",
  //   "TRINI2",
  //   "ELSA",
  //   "DASMA",
  //   "CARMO",
  //   "DSMBN",
  //   "IMED",
  //   "MARA",
  //   "CALD",
  //   "SIND",
  //   "MADRI",
  //   "DSMTG",
  //   "KABD",
  //   "VILLA",
  //   "DSMV",
  //   "DSMB",
  //   "CAMD",
  //   "MOLD",
  //   "AURD",
  //   "SARG",
  //   "KABA2",
  //   "TUBOD",
  //   "DIGOS",
  //   "VILLA",
  //   "LABD",
  //   "GUIN",
  //   "RIZD",
  //   "BALD",
  //   "IPID",
  //   "KABA",
  //   "MONKA",
  // ];
  // const size3 = [
  //   "DSMPO",
  //   "CARC",
  //   "MATI",
  //   "DSMBL",
  //   "LABA",
  //   "COMPO",
  //   "TACU",
  //   "CALI",
  //   "DSMLN",
  //   "DSMP",
  //   "PARD2",
  // ];
  // const size4 = ["PAGS", "ANTIP", "NAIC"];
  // const size5 = ["BALA", "DSMDM", "JIMEDSM"];
  // const size6 = ["BINAN", "SANJ", "DSMM", "AKLA", "DONC", "CALIN2"];
  // const size7 = ["DSMT", "AURO"];
  // const size8 = [
  //   "AURH",
  //   "GENT",
  //   "SANT2",
  //   "CAMH",
  //   "CALAP",
  //   "PUTD",
  //   "TALI2",
  //   "TANH",
  //   "INIT2",
  //   "TANZ2",
  //   "MOLH",
  //   "TANZ3",
  // ];
  // const size9 = [
  //   "BOLOD",
  //   "MING",
  //   "RIZA",
  //   "DSMSB",
  //   "DANAO",
  //   "TOMAS",
  //   "CARMC2",
  //   "CATAR2",
  //   "MAND2",
  //   "MAND",
  // ];

  const luzonSizeData = [
    "BINAN",
    // "CARMO",
    "DASMA",
    "FAMY",
    // "GENT",
    "LIPA",
    "NAIC",
    "PAGS",
    "SANJ",
    "SANM",
    // "SANP",
    "SILA",
    "SLAS",
    "SROS",
    // "TANH",
    // "TANZ",
    "TANZ2",
    "TANZ3",
  ];

  const DAP1SizeData = [
    "ALAD",
    "AURD",
    "CALD",
    "CAMD",
    "KABD",
    "MARD",
    "RIZD",
    "SANM",
    "IMED",
    "IPID",
    "SIND",
    "TUBOD",
  ];

  const dapCsiSizeData = [
    "BUUD",
    "DIPD",
    "JIME",
    "LILD",
    "MANO",
    "MARA2",
    "MOLD2",
    "OROD",
    "OZAD",
    "SUCD",
    "BONI",
  ];

  const DSMSISizeData = ["DIGOS", "TACU", "TOMAS"];

  const dsmCsiSizeData = [
    "BALA",
    "CALIN",
    "CERI",
    "DSMAO",
    "DSMM",
    "DSMT2",
    "ILOI",
    "JIMEDSM",
    "LABA",
    "MAND2",
  ];

  const hdSiSizeData = ["CAMH", "GENT", "OROH", "TANH"];

  const hdCsiSizeData = ["ALAH", "DSML", "PARD3", "INIT", "MARH", "VETH"];

  const smctCsiSizeData = [
    "BAYB",
    "MANG",
    "SAGBA",
    "SALA",
    "SANP",
    "AKLA",
    "TALI",
    "VALEN",
  ];

  const smctSiSizeData = [
    "BANTA",
    "GUIN",
    "MADRI",
    "CARMO",
    "ANTI",
    "TRINI2",
    "ALLEN",
  ];

  // if (size1.some((branch) => branch === user?.branchCode)) {
  //   return <Size1Sales data={data} />;
  // } else if (size2.some((branch) => branch === user?.branchCode)) {
  //   return <Size2Sales data={data} />;
  // } else if (size3.some((branch) => branch === user?.branchCode)) {
  //   return <Size3Sales data={data} />;
  // } else if (size4.some((branch) => branch === user?.branchCode)) {
  //   return <Size4Sales data={data} />;
  // } else if (size5.some((branch) => branch === user?.branchCode)) {
  //   return <Size5Sales data={data} />;
  // } else if (size6.some((branch) => branch === user?.branchCode)) {
  //   return <Size6Sales data={data} />;
  // } else if (size7.some((branch) => branch === user?.branchCode)) {
  //   return <Size7Sales data={data} />;
  // } else if (size8.some((branch) => branch === user?.branchCode)) {
  //   return <Size8Sales data={data} />;
  // } else if (size9.some((branch) => branch === user?.branchCode)) {
  //   return <Size9Sales data={data} />;
  if (luzonSizeData.some((branch) => branch === user?.branchCode)) {
    return <LuzonSize data={data} />;
  } else if (DAP1SizeData.some((branch) => branch === user?.branchCode)) {
    return <DAP1Size data={data} />;
  } else if (dapCsiSizeData.some((branch) => branch === user?.branchCode)) {
    return <DapCsiSize data={data} />;
  } else if (DSMSISizeData.some((branch) => branch === user?.branchCode)) {
    return <DSMSISize data={data} />;
  } else if (dsmCsiSizeData.some((branch) => branch === user?.branchCode)) {
    return <DsmCsiSize data={data} />;
  } else if (hdSiSizeData.some((branch) => branch === user?.branchCode)) {
    return <HdSiSize data={data} />;
  } else if (hdCsiSizeData.some((branch) => branch === user?.branchCode)) {
    return <HdCsiSizes data={data} />;
  } else if (smctCsiSizeData.some((branch) => branch === user?.branchCode)) {
    return <SmctCsiSize data={data} />;
  } else if (smctSiSizeData.some((branch) => branch === user?.branchCode)) {
    return <SmctSiSize data={data} />;
  } else if ("AURH" === user?.branchCode) {
    return <HDAurora data={data} />;
  } else if ("BUUH" === user?.branchCode) {
    return <HDBuug data={data} />;
  } else if ("DANAO" === user?.branchCode) {
    return <DSMDanao data={data} />;
  } else if ("BALAM" === user?.branchCode) {
    return <HDBalamban data={data} />;
  } else if ("LABD" === user?.branchCode) {
    return <DapLabason data={data} />;
  } else if ("ANTIP" === user?.branchCode) {
    return <Antipolo data={data} />;
  } else if ("CARMC2" === user?.branchCode) {
    return <DsmCarmenCebu2 data={data} />;
  } else if ("MAND" === user?.branchCode) {
    return <MandaueMulti data={data} />;
  } else if ("BALD" === user?.branchCode) {
    return <DAPBalingasag data={data} />;
  } else if ("ILID" === user?.branchCode) {
    return <DAPIligan data={data} />;
  } else if ("BAYU" === user?.branchCode) {
    return <DSMBayugan data={data} />;
  } else if ("DSMP" === user?.branchCode) {
    return <Consolacion data={data} />;
  } else {
    return (
      <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
        Sorry, This page is temporary unavailable on your branch
      </div>
    );
  }
};

export default CashSalesInvoice;
