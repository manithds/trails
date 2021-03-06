import { MicrophoneIcon, SearchIcon, XIcon, UserIcon } from "@heroicons/react/solid";
import Image from "next/image";
import {useRouter} from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header (){

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
            <header className="sticky top-0 bg-[#ffffff] shadow-lg">
                <div className="flex w-full p-6 items-center">
                <Image 
                src='https://svgshare.com/i/i2C.svg'
                height={70}
                width={120}
                onClick={() => router.push("/")}
                className="hover:cursor-pointer"
                />

                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full
                 shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex-grow w-full
                    focus:outline-none" type="text"
                    defaultValue={router.query.term}>
                    
                    </input>
                    <XIcon className="h-7 sm:mr-3 text-[#00593F] cursor-pointer transition duration-100
                    transform hover:scale-110"
                    
                    onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-[#00593F]
                    border-l-2 pl-4 border-gray-300 " />
                    <SearchIcon className="h-6 text-[#00593F] hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <UserIcon className="ml-auto h-10 w-10 p-2 rounded-full hover:bg-[#DBDAF6] cursor-pointer"></UserIcon>
                
                </div>


                {/* Header Options */}
                <HeaderOptions />
                
        </header>
    )
}

export default Header