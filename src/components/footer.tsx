import Image from "next/image";
const Footer = () => {
    return (
      <footer className=" w-full p-4 font-medium bg-[#f5f5f5] dark:bg-[#161527]">
        <div className="pl-[80px] mx-auto max-w-[1080px] lg:pl-0">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 space-x-3 sm:justify-center sm:mt-0">
              <Image src="/tokenup.png" width={20} height={20} alt="logo" />
              <a
                href="https://github.com/vrajdesai78/tokenup"
                target="_blank"
                className="text-[#666666] hover:text-[#a1a1a1] dark:text-[#605e8a]"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <span className="text-md text-[#666666] hover:text-[#a1a1a1] sm:text-center dark:text-[#605e8a]">
              © {new Date().getFullYear()}{" "}
              <a href="" className="hover:underline">
                TokenUp
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;