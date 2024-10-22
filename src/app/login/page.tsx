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
    <Login />
    </>
  );
}

function Login() {
  return (
    <div className="bg-[#F5FCF5] w-screen h-screen pr-[150px] pt-[65px]">
      <div className="bg-[#ffffff] w-[816px] h-[500px] ml-[280px] rounded-[20px] flex">
        <div className="flex flex-col gap-8">
          <div className="bg-[#ffffff] w-[100px] h-[30px] ml-4 mt-4 ">
            <Image
              src={"/logokasirku.png"}
              className="w-[100px] h-[30px]"
              width={0}
              height={0}
              alt={"logo"}
              unoptimized
            />
          </div>
          <div className="bg-[#fff] w-[400px] h-[400px] mr-4 ml-4">
            <div className="bg-[#ffffff] w-80 h-25 mt-8 ml-10">
              <h1 className=" text-[#50C878] pl-[100px] text-[35px] font-semibold">Masuk</h1>
              <p className="text-[#b1b0b0] text-[12px] pl-2">Selamat datang kembali! Silahkan masukan nama</p>
              <p className="text-[#b1b0b0] text-[12px] pl-8">pengguna dan kata sandi untuk masuk!</p>
            </div>
            <div className="bg-[#fff]-400 w-80 h-52 mt-4 ml-10">
              <input className="bg-white w-72 h-10 ml-4 rounded-[6px] pl-4 text-black font-medium" type="text" placeholder="Nama Pengguna"></input>
              <input className="bg-white text-black w-72 h-10 mt-6 ml-4 rounded-[6px] pl-4 font-medium" type="password" placeholder="Kata Sandi"></input>
              <button className="bg-[#50C878] w-72 h-10 mt-6 ml-4 rounded-[6px]" type="submit">Masuk</button>
            </div>
          </div>
        </div>
        <div className="bg-[#50C878] w-[400px] h-[500px] rounded-[20px] rounded-tl-[70px] rounded-bl-[70px] pt-6 pl-4">
        <Image
          src= {"/login.svg"}
          className="w-[350px] h-[450px]"
          width={0}
          height={0}
          alt={""}
          unoptimized
        />
      </div>
      </div>
    </div>
  );
}
