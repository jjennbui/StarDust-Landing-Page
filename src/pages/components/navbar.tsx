
import Image from 'next/image';


export default function Navbar() {
    return (
        <header className="flex justify-between items-center p-12 text-white fixed top-0 left-0 right-0 w-full">
            <Image src="/assets/stardustLogo.svg" width={100} height={100} alt="Logo" />
            <div >
                Sign Up
            </div>
        </header>
    );
}
