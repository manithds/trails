import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon, TranslateIcon, UserIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from 'next/router';
import Footer from '../components/Footer';



export default function Home() {

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);


  };
  return (
    <div className="body flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Xplor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./public/fav.svg" />
      </Head>

    

      

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        <div className="flex space-x-4 items-center">
          <p className="link"></p>
          <p className="link"></p>
        </div>

        <div className="flex space-x-4 items-center">
        <p className="link"></p>
        <p className="link"></p>


        {/* Icon */}
        
        <TranslateIcon className="h-10 w-10 p-2 rounded-full hover:bg-[#DBDAF6] cursor-pointer"></TranslateIcon>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-[#DBDAF6] cursor-pointer"/>
        <UserIcon className="h-10 w-10 p-2 rounded-full hover:bg-[#DBDAF6] cursor-pointer"></UserIcon>
        {/* Avatar */}
        
        </div>

      </header>
      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
        
        src={"https://svgshare.com/i/i3G.svg"}
        height={170}
        width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full border border-grey-200 bg-[#ffffff] px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon onClick={search} className="h-5 mr-3 text-gray-500"></SearchIcon>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none bg-[#ffffff]"></input>
          <MicrophoneIcon className="h-5"></MicrophoneIcon>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 
        sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Xplor the World</button>
          
          
        </div>
       

      </form>


      {/* Footer */}

      <Footer />

      
    </div>

    
  )
}
