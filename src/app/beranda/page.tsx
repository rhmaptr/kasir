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
    <div className="bg-slate-50 w-screen h-screen flex">
      <div className="bg-[#50C878] w-[110px] h-screen rounded-tr-[12px] rounded-br-[12px]">
        <div className="bg-green-400 w-20 h-16 ml-[15px] mt-4 rounded-[16px] pt-3 flex-col cursor-pointer">
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
        <div className="hover:bg-green-400 w-20 h-16 ml-[15px] mt-2 rounded-[16px] pt-[8px] flex-col cursor-pointer">
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
      <div className="bg-white w-80 h-64 mt-[70px] ml-[-250px] rounded-[20px] shadow-xl">
        <h2 className="text-green-500 text-center font-semibold text-[25px] mt-[40px]">PENGINGAT</h2>
        <p className="text-center text-gray-600 ml-2 mr-2 font-semibold pt-2">Jangan lupa berdoa sebelum memulai pekerjaan, agar selalu diberikan kemudahan oleh Tuhan Yang Maha Esa.</p>
      </div>
      <div className="bg-white w-[890px] h-64 mt-[70px] ml-4 rounded-[20px] text-center pt-28 font-semibold text-[40px] shadow-xl text-black">Grafik</div>
      <div className="bg-white w-[800px] h-[280px] mt-[340px] ml-[-1220px] rounded-[20px] shadow-xl">
        <select className="bg-slate-100 w-[765px] h-[40px] ml-4 mt-4 rounded-[5px] shadow-lg text-black font-medium cursor-pointer">
          <option>Stok Terkecil</option>
          <option>Stok Terbesar</option>
        </select>
        <div className="bg-slate-400 w-[800px] h-[220px] overflow-y-auto no-scrollbar rounded-[20px]">
        <div className="bg-blue-400 w-[765px] h-[50px] ml-4 mt-4 rounded-[5px] flex shadow-lg">
          <div className="bg-red-400 w-[100px] h-[50px]">
            <div className="bg-slate-200 w-[70px] h-[40px] ml-2 mt-[5px] rounded-[10px]"></div>
          </div>
          <div className="bg-orange-400 w-[200px] h-[50px]">
            <div className="bg-green-300 w-[150px] h-[25px] ml-[10px] mt-[13px] line-clamp-1 text-black text-center font-medium">0987352</div>
          </div>
          <div className="bg-yellow-400 w-[200px] h[50px]">
            <div className="bg-pink-400 w-[150px] h-[25px] ml-[10px] mt-[13px] line-clamp-1 text-black text-center font-medium">uncle muthu</div>
          </div>
          <div className="bg-green-500 w-[200px] h-[50px]">
            <div className="bg-red-500 w-[150px] h-[25px] ml-[10px] mt-[13px] line-clamp-1 text-black text-center font-medium">50</div>
          </div>
          <div className="bg-indigo-500 w-[200px] h-50px]">
            <div className="bg-orange-400 w-[150px] h-[25px] ml-[10px] mt-[13px] flex justify-center items-center">
              <div className="bg-cyan-400 w-[30px] h-[25px] text-center text-black font-medium">Rp.</div>
              <div className="bg-amber-300 h-[25px] text-center text-black font-medium line-clamp-1">300.000</div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      <div className="bg-white w-[400px] h-[280px] mt-[340px] ml-4 rounded-[20px] shadow-xl">
        <div className="bg-black w-[80px] h-[80px] ml-[160px] mt-6 pl-[10px] pt-[12px]">
        <Image
          src= {"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE2IDlhNCA0IDAgMSAxLTggMGE0IDQgMCAwIDEgOCAwbS0yIDBhMiAyIDAgMSAxLTQgMGEyIDIgMCAwIDEgNCAwIi8+PHBhdGggZD0iTTEyIDFDNS45MjUgMSAxIDUuOTI1IDEgMTJzNC45MjUgMTEgMTEgMTFzMTEtNC45MjUgMTEtMTFTMTguMDc1IDEgMTIgMU0zIDEyYzAgMi4wOS43MTMgNC4wMTQgMS45MDggNS41NDJBOC45ODYgOC45ODYgMCAwIDEgMTIuMDY1IDE0YTguOTg0IDguOTg0IDAgMCAxIDcuMDkyIDMuNDU4QTkgOSAwIDEgMCAzIDEybTkgOWE4Ljk2MyA4Ljk2MyAwIDAgMS01LjY3Mi0yLjAxMkE2Ljk5MiA2Ljk5MiAwIDAgMSAxMi4wNjUgMTZhNi45OTEgNi45OTEgMCAwIDEgNS42ODkgMi45MkE4Ljk2NCA4Ljk2NCAwIDAgMSAxMiAyMSIvPjwvZz48L3N2Zz4="}
          className="w-[60px] h-[60px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
          />
        </div>
        <div className="bg-white w-80 h-8 ml-[40px]">
          <p className="text-[20px] font-semibold text-center text-black">Nama Pengguna</p>
        </div>
        <div className="bg-black w-[380px] h-[2px] mt-4 ml-2"></div>
        <div className="bg-white w-[360px] h-[80px] mt-2 ml-[20px]">
          <p className="text-center text-gray-600 font-medium pt-2">'nama pengguna' sebagai</p>
          <p className="text-center text-black font-semibold text-[25px]">Petugas</p>
        </div>
      </div>
    </div>
  );
}
