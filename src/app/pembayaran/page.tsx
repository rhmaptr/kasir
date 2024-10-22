import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
}); 


export default function Page() {
  return (
    <>
    <Beranda />
    </>
  );
}

function Beranda() {
  return (
    <div className="bg-sky-300 w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-[400px] h-[500px] rounded-[20px]">
            <div className="bg-slate-400 w-[400px] h-[50px] text-green-400 text-[30px] font-medium flex justify-center items-center rounded-t-[20px]">Pembayaran</div>
            <div className="bg-black w-[400px] h-[1px]"></div>
            <div className="bg-slate-300 w-[400px] h-[50px] mt-[10px] flex">
                <div className="bg-pink-200 w-[120px] h-[50px] text-black text-[18px] font-medium flex">
                    <div className="bg-yellow-200 w-[110px] h-[50px] flex justify-center items-center">Total Harga</div>
                    <div className="bg-orange-200 w-[10px] flex items-center">:</div>
                </div>
                <div className="bg-green-200 "></div>
            </div>
        </div>
    </div>
);
}
