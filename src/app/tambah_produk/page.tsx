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
    <Tambah_produk />
    </>
  );
}

function Tambah_produk() {
  return (
    <div className="bg-sky-300 w-screen h-screen flex justify-center items-center">
        <div className="bg-yellow-300 w-[700px] h-[460px] rounded-[15px]">
          <div className="bg-slate-300 w-[700px] h-[50px] rounded-tl-[15px] rounded-tr-[15px] flex">
            <div className="bg-neutral-400 w-[250px] h-[50px] text-black text-[25px] font-medium text-center flex items-center justify-center rounded-tl-[15px]">Tambah Produk</div>
            <div className="bg-yellow-300 w-[60px] h-[50px] ml-[390px] rounded-tr-[15px] flex items-center justify-center">
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
            </div>
          </div>
          <div className="bg-black w-[700px] h-[1px]"></div>
          <div className="bg-rose-700 w-[700px] h-[330px] flex">
            <div className="bg-pink-400 w-[350px] h-[330px] flex-col">
              <div className="bg-red-400 w-[150px] h-[22px] ml-[10px] mt-[10px] text-black text-[15px] font-medium">Kode Barang</div>
              <input className="bg-white w-[330px] h-[45px] ml-[10px] rounded-[5px] text-black text-[17px] font-medium pl-[10px]"></input>
              <div className="bg-red-400 w-[150px] h-[22px] ml-[10px] mt-[10px] text-black text-[15px] font-medium">Nama Barang</div>
              <input className="bg-white w-[330px] h-[45px] ml-[10px] rounded-[5px] text-black text-[17px] font-medium pl-[10px]"></input>
              <div className="bg-red-400 w-[150px] h-[22px] ml-[10px] mt-[10px] text-black text-[15px] font-medium">Harga Barang</div>
              <input className="bg-white w-[330px] h-[45px] ml-[10px] rounded-[5px] text-black text-[17px] font-medium pl-[10px]"></input>
              <div className="bg-red-400 w-[150px] h-[22px] ml-[10px] mt-[10px] text-black text-[15px] font-medium">Stok Barang</div>
              <input type="number" className="bg-white w-[330px] h-[45px] ml-[10px] rounded-[5px] text-black text-[17px] font-medium pl-[10px]"></input>
            </div>
            <div className="bg-teal-400 w-[350px] h-[330px]">
              <div className="bg-green-400 w-[150px] h-[24px] ml-[10px] mt-[10px] text-black text-[15px] font-medium">Foto Barang</div>
              <div className="bg-slate-50 w-[329px] h-[275px] ml-[10px] rounded-[10px] cursor-pointer flex items-center justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#697565" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
              </div>
            </div>
          </div>
          <div className="bg-purple-500 w-[700px] h-[50px] rounded-bl-[15px] rounded-br-[15px]">
            <div className="bg-green-400 w-[650px] h-[50px] ml-[24px] mt-[10px] rounded-[10px] text-black text-[20px] font-medium flex justify-center items-center cursor-pointer">Simpan</div>
          </div>
        </div>
    </div>
  );
}