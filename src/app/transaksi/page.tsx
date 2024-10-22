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
    <Transaksi />
    </>
  );
}

function Transaksi() {
  return (
    <div className="bg-slate-50 w-screen h-screen flex">
      <div className="bg-[#50C878] w-[110px] h-screen rounded-tr-[12px] rounded-br-[12px]">
        <div className="hover:bg-green-400 w-20 h-16 ml-[15px] mt-4 rounded-[16px] pt-3 flex-col cursor-pointer">
          <div className="hover:bg-green-400 w-8 h-7 ml-[25px] mt-[-7px]">
          <Image
          src= {"/iconhome.svg"}
          className="w-[30px] h-8[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
          <div className="hover:bg-green-400 w-[8px] h-6 ml-2">
            <p className="text-[14px] font-medium ml-[2px]">Beranda</p>
          </div>
        </div>
        <div className="bg-green-400 w-20 h-16 ml-[15px] mt-2 rounded-[16px] pt-[8px] flex-col cursor-pointer">
          <div className="hover:bg-green-400 w-8 h-7 ml-[25px]">
          <Image
          src= {"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMjggMjRhMTA0IDEwNCAwIDEgMCAxMDQgMTA0QTEwNC4xMSAxMDQuMTEgMCAwIDAgMTI4IDI0bTAgMTkyYTg4IDg4IDAgMSAxIDg4LTg4YTg4LjEgODguMSAwIDAgMS04OCA4OG00MC02OGEyOCAyOCAwIDAgMS0yOCAyOGgtNHY4YTggOCAwIDAgMS0xNiAwdi04aC0xNmE4IDggMCAwIDEgMC0xNmgzNmExMiAxMiAwIDAgMCAwLTI0aC0yNGEyOCAyOCAwIDAgMSAwLTU2aDR2LThhOCA4IDAgMCAxIDE2IDB2OGgxNmE4IDggMCAwIDEgMCAxNmgtMzZhMTIgMTIgMCAwIDAgMCAyNGgyNGEyOCAyOCAwIDAgMSAyOCAyOCIvPjwvc3ZnPg=="}
          className="w-[30px] h-8[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
          <div className="hover:bg-green-400 w-16 h-6 ml-[4px]">
            <p className="text-[14px] font-medium ml-[2px]">Transaksi</p>
          </div>
        </div>
        <div className="hover:bg-green-400 w-20 h-16 ml-[15px] mt-4 rounded-[16px] pt-3 cursor-pointer">
          <div className="hover:bg-green-400 w-8 h-7 ml-[25px] ">
          <Image
          src= {"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Im0yMTMuNjYgODIuMzRsLTU2LTU2QTggOCAwIDAgMCAxNTIgMjRINTZhMTYgMTYgMCAwIDAtMTYgMTZ2MTc2YTE2IDE2IDAgMCAwIDE2IDE2aDE0NGExNiAxNiAwIDAgMCAxNi0xNlY4OGE4IDggMCAwIDAtMi4zNC01LjY2TTE2MCA1MS4zMUwxODguNjkgODBIMTYwWk0yMDAgMjE2SDU2VjQwaDg4djQ4YTggOCAwIDAgMCA4IDhoNDh6bS00MC02NGE4IDggMCAwIDEtOCA4aC0xNnYxNmE4IDggMCAwIDEtMTYgMHYtMTZoLTE2YTggOCAwIDAgMSAwLTE2aDE2di0xNmE4IDggMCAwIDEgMTYgMHYxNmgxNmE4IDggMCAwIDEgOCA4Ii8+PC9zdmc+"}
          className="w-[30px] h-8[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
        <div className="hover:bg-green-400 w-2 h-4 pl-[17px] ml-2">
          <p className="text-[14px] font-medium ml-[-2px]">Data</p>
        </div>
        </div>
        <div className="hover:bg-green-400 w-20 h-16 ml-[15px] mt-4 rounded-[16px] pt-2 cursor-pointer">
          <div className="hover:bg-green-400 w-8 h-7 ml-[25px]">
          <Image
          src= {"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTY3OC4zIDY0Mi40YzI0LjItMTMgNTEuOS0yMC40IDgxLjQtMjAuNGguMWMzIDAgNC40LTMuNiAyLjItNS42YTM3MS43IDM3MS43IDAgMCAwLTEwMy43LTY1LjhjLS40LS4yLS44LS4zLTEuMi0uNUM3MTkuMiA1MDUgNzU5LjYgNDMxLjcgNzU5LjYgMzQ5YzAtMTM3LTExMC44LTI0OC0yNDcuNS0yNDhTMjY0LjcgMjEyIDI2NC43IDM0OWMwIDgyLjcgNDAuNCAxNTYgMTAyLjYgMjAxLjFjLS40LjItLjguMy0xLjIuNWMtNDQuNyAxOC45LTg0LjggNDYtMTE5LjMgODAuNmEzNzMuNCAzNzMuNCAwIDAgMC04MC40IDExOS41QTM3My42IDM3My42IDAgMCAwIDEzNyA4ODguOGE4IDggMCAwIDAgOCA4LjJoNTkuOWM0LjMgMCA3LjktMy41IDgtNy44YzItNzcuMiAzMi45LTE0OS41IDg3LjYtMjA0LjNDMzU3IDYyOC4yIDQzMi4yIDU5NyA1MTIuMiA1OTdjNTYuNyAwIDExMS4xIDE1LjcgMTU4IDQ1LjFhOC4xIDguMSAwIDAgMCA4LjEuM001MTIuMiA1MjFjLTQ1LjggMC04OC45LTE3LjktMTIxLjQtNTAuNEExNzEuMiAxNzEuMiAwIDAgMSAzNDAuNSAzNDljMC00NS45IDE3LjktODkuMSA1MC4zLTEyMS42UzQ2Ni4zIDE3NyA1MTIuMiAxNzdzODguOSAxNy45IDEyMS40IDUwLjRBMTcxLjIgMTcxLjIgMCAwIDEgNjgzLjkgMzQ5YzAgNDUuOS0xNy45IDg5LjEtNTAuMyAxMjEuNkM2MDEuMSA1MDMuMSA1NTggNTIxIDUxMi4yIDUyMU04ODAgNzU5aC04NHYtODRjMC00LjQtMy42LTgtOC04aC01NmMtNC40IDAtOCAzLjYtOCA4djg0aC04NGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg4NHY4NGMwIDQuNCAzLjYgOCA4IDhoNTZjNC40IDAgOC0zLjYgOC04di04NGg4NGM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOCIvPjwvc3ZnPg=="}
          className="w-[30px] h-8[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
        <div className="hover:bg-green-400 w-2 h-2 pl-[6px]">
          <p className="text-[14px] font-medium ml-[-1px]">Pengguna</p>
        </div>
        </div>
        <div className="hover:bg-green-400 w-20 h-16 ml-[15px] mt-4 rounded-[16px] pt-2 cursor-pointer">
          <div className="hover:bg-green-400 w-8 h-7 ml-[26px]">
          <Image
          src= {"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC44IDlWNi43SDEwLjIwNEw4LjMzIDUuMkgzLjJWOXptMCAxLjJIMy4ydjguNmgxNy42ek0zIDRoNS43NWwxLjg3NSAxLjVIMjFhMSAxIDAgMCAxIDEgMVYxOWExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTEiLz48L3N2Zz4="}
          className="w-[30px] h-8[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
        <div className="hover:bg-green-400 w-2 h-2 pl-[6px]">
          <p className="text-[14px] font-medium ml-[13px]">Rekap</p>
        </div>
        </div>
        <div className="hover:bg-green-400 w-20 h-16 ml-[15px] mt-40 rounded-[16px] pt-2 cursor-pointer">
          <div className="hover:bg-green-400 w-8 h-7 ml-[28px]">
          <Image
          src= {"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNSAyMXEtLjgyNSAwLTEuNDEyLS41ODdUMyAxOVY1cTAtLjgyNS41ODgtMS40MTJUNSAzaDd2Mkg1djE0aDd2MnptMTEtNGwtMS4zNzUtMS40NWwyLjU1LTIuNTVIOXYtMmg4LjE3NWwtMi41NS0yLjU1TDE2IDdsNSA1eiIvPjwvc3ZnPg=="}
          className="w-[30px] h-8[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
        <div className="hover:bg-green-400 w-2 h-2 pl-[6px]">
          <p className="text-[14px] font-medium ml-[12px]">Keluar</p>
        </div>
        </div>
      </div>
      <div className="bg-slate-50 w-[250px] h-10 ml-4 mt-2 flex gap-2">
        <div className="bg-slate-50 w-[30px] h-[30px] mt-1">
        <Image
          src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%234ade80' d='M9 10H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z'/%3E%3C/svg%3E"}
          className="w-[30px] h-[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
        </div>
        <p className="text-center text-green-400 font-bold pt-2"> ini adalah tanggal</p>
      </div>
      <div className="bg-slate-50 w-[250px] h-10 mt-2 ml-[720px] flex gap-1">
        <p className="text-center text-green-400 font-semibold pt-2 ml-[75px]">Nama Pengguna</p>
        <div className="bg-slate-50 w-[30px] h-[30px] mt-1">
        <Image
          src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='%234ade80' d='M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3'/%3E%3Cpath fill='%234ade80' d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0'/%3E%3C/svg%3E"}
          className="w-[30px] h-[30px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
        </div>
      </div>
      <div className="bg-black w-[1220px] h-[1px] mt-16 ml-[-1220px]"></div>
      <div className="bg-slate-50 w-[635px] h-[557px] mt-[75px] ml-[-1220px]">
        <div className="bg-sky-400 w-[625px] h-[50px] rounded-[15px] flex">
          <input className=" bg-white w-[570px] h-[50px] rounded-tl-[13px] rounded-bl-[13px] shadow-lg text-black pl-4 font-medium" placeholder="Telusuri..."></input>
          <div className="bg-slate-100 w-[55px] h-[50px] pt-[9px] pl-[12px] rounded-br-[13px] rounded-tr-[13px] cursor-pointer shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
          </div>
        </div>
      <div className="bg-slate-200 w-[600px] h-[485px] ml-[15px] mt-4 flex flex-wrap content-start gap-4 overflow-y-auto no-scrollbar">
        <div className="bg-slate-400 w-[290px] h-[150px] mt-2 rounded-[20px] shadow-lg cursor-pointer">
          <div className="bg-pink-200 w-[140px] h-[150px] rounded-tl-[20px] rounded-bl-[20px]">
          <Image
          src={"/login.svg"}
          className="w-[140px] h-[150px] rounded-tl-[20px] rounded-bl-[20px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
          <div className="bg-slate-200 w-[125px] h-[25px] ml-[150px] mt-[-140px] text-black font-semibold text-[15px]">Icon Login</div>
          <div className="bg-blue-200 w-[125px] h-[30px] ml-[150px] flex">
            <div className="bg-red-300 w-[30px] h-[30px] text-center pt-[3px] text-black font-medium">Rp.</div>
            <div className="bg-yellow-300 w-[95px] h-[30px] pt-[3px] text-black font-medium line-clamp-1">1.000</div>
          </div>
          <div className="bg-green-400 w-[125px] h-[30px] ml-[150px] mt-[45px] flex">
            <div className="bg-purple-300 w-[45px] h-[30px] flex">
              <div className="bg-sky-400 w-[40px] h-[30px] text-center pt-1 text-black font-medium">Stok</div>
              <div className="bg-pink-500 w-[10px] h-[30px] pt-1 text-center text-black font-medium">:</div>
            </div>
            <div className="bg-orange-500 pt-1 line-clamp-1 text-black font-medium">50000</div>
          </div>
        </div>
        </div>
      </div>
      <div className="bg-black w-[1px] h-[557px] mt-[70px] ml-2"></div>
      <div className="bg-slate-50 w-[570px] h-[557px] mt-[70px] ml-2">
        <p className="text-green-400 text-[35px] font-semibold">Pesanan</p>
        <div className="bg-black w-[570px] h-[1px]"></div>
        <div className="bg-slate-400 w-[570px] h-[390px] flex-col overflow-y-auto no-scrollbar">
          <div className="bg-slate-200 w-[570px] h-[40px] flex">
            <div className="bg-amber-400 w-[160px] h-[40px] text-black text-[20px] font-medium pt-[5px]">Kode Transaksi</div>
            <div className="bg-red-400 w-[15px] h-[40px] text-black text-[25px] font-medium">:</div>
            <div className="bg-sky-400 w-[395px] h-[40px] text-black text-[20px] font-medium pt-[5px] line-clamp-1">123445</div>
          </div>
        <div className="bg-white w-[550px] h-[70px] mt-4 ml-[10px] rounded-[15px] pt-[10px] flex shadow-lg">
          <div className="bg-slate-200 w-[80px] h-[50px] ml-4 rounded-[10px]">
          <Image
          src={"/login.svg"}
          className="w-[80px] h-[50px] rounded-tl-[20px] rounded-bl-[20px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
          </div>
          <div className="bg-yellow-300 w-[150px] h-[25px] ml-4 text-black font-semibold pt-1 line-clamp-1">Nama Barang apa aja boleh terserah kamu</div>
          <div className="bg-teal-600 w-[150px] h-[25px] mt-[25px] ml-[-150px] flex">
            <div className="bg-red-400 w-[30px] h-[25px] pt-[1px] text-black font-medium">Rp.</div>
            <div className="bg-indigo-500 w-[113px] h-[25px] pt-[2px] text-black font-medium line-clamp-1">300.000.000.000</div>
          </div>
          <div className="bg-sky-300 w-[30px] h-[28px] mt-[25px] ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#dc2626" viewBox="0 0 256 256"><path d="M180,128a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h80A12,12,0,0,1,180,128Zm56,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path></svg>
          </div>
          <input className="bg-slate-200 w-[30px] h-[28px] mt-[25px] ml-2 text-center text-black font-medium pt-1 rounded-[7px]"></input>
          <div className="bg-rose-400 w-[30px] h-[28px] mt-[25px] ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4ade80" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z"></path></svg>
          </div>
          <div className="bg-yellow-200 w-[140px] h-[25px] mt-[25px] ml-[20px] flex">
            <div className="bg-blue-400 w-[30px] h-[25px] text-black font-medium">Rp.</div>
            <div className="bg-red-500 w-[110px] h-[25px] text-black font-medium line-clamp-1">300.000.000.000</div>
          </div>
        </div> 
        </div>
        <div className="bg-black w-[570px] h-[1px]"></div>
        <div className="bg-yellow-300 w-[570px] h-[110px]">
          <div className="bg-pink-300 w-[570px] h-[50px] flex">
            <div className="bg-red-300 w-[100px] h-[50px] text-black text-[30px] font-semibold">Total :</div>
            <div className="bg-orange-400 w-[470px] h-[50px] flex justify-end">
              <div className="bg-slate-50 h-[50px] flex line-clamp-1">
                <div className="bg-blue-400 w-[50px] h-[50px] text-[30px] text-black font-semibold">Rp.</div>
                <div className="bg-red-500 h-[50px] text-black text-[30px] font-semibold">3000.000.000.000</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-300 w-[570px] h-[50px] mt-[10px]">
            <div className="bg-green-400 w-[550px] h-[50px] ml-[10px] rounded-[20px] text-center pt-[10px] font-semibod text-[20px] cursor-pointer">Pesan</div>
          </div>
        </div>
        </div>
    </div>
  );
}