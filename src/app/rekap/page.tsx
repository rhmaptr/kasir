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
    <Data />
    </>
  );
}

function Data() {
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
      <div className="bg-green-400 w-20 h-16 ml-[15px] mt-4 rounded-[16px] pt-2 cursor-pointer">
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
    <div className="bg-slate-50 w-[260px] h-10 mt-2 ml-[720px] flex gap-1">
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
      <div className="bg-black w-[1220px] h-[1px] mt-[56px] ml-[-1203px]"></div>
      <div className="bg-pink-200 w-[1222px] h-[550px] mt-[65px] ml-[-1225px] rounded-[10px]">
        <div className="bg-green-400 w-[1190px] h-[50px] mt-4 ml-4 rounded-[5px] flex">
           <div className="bg-yellow-300 w-[200px] h-[30px] ml-[50px] mt-[10px] text-center font-medium">Tanggal</div>
           <div className="bg-yellow-300 w-[200px] h-[30px] ml-[96px] mt-[10px] text-center font-medium">Kode transaksi</div>
           <div className="bg-yellow-300 w-[200px] h-[30px] ml-[96px] mt-[10px] text-center font-medium">Total Harga</div>
           <div className="bg-yellow-300 w-[200px] h-[30px] ml-[100px] mt-[10px] text-center font-medium">Aksi</div>
        </div>
        <div className="bg-sky-400 w-[1190px] h-[475px] ml-4 flex-col">
          <div className="bg-slate-50 w-[1190px] h-[50px] mt-2 rounded-[5px] flex">
            <div className="bg-orange-400 w-[250px] h-[30px] text-center font-medium text-black ml-[25px] mt-[10px] line-clamp-1">6 september 2024</div>
            <div className="bg-orange-400 w-[250px] h-[30px] text-center font-medium text-black ml-[45px] mt-[10px] line-clamp-1">12345</div>
            <div className="bg-orange-400 w-[250px] h-[30px] text-center font-medium text-black ml-[50px] mt-[10px] line-clamp-1 flex items-center justify-center">
              <div className="bg-sky-400 w-[30px] h-[30px] text-center">Rp.</div>
              <div className="bg-violet-300 h-[30px] text-center line-clamp-1">300.000</div>
            </div>
            <div className="bg-orange-400 w-[250px] h-[30px] text-center font-medium text-black ml-[45px] mt-[10px] line-clamp-1 flex items-center justify-center">
              <div className="bg-pink-200 w-[40px] h-[30px] flex items-center justify-center">
              <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#377bc3" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"></path></svg>
              </div>
              <div className="bg-green-300 w-[40px] h-[30px] flex items-center justify-center">
              <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#db3333" viewBox="0 0 256 256"><path d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}