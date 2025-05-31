export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow mt-[40px]">
      <div className="max-w-[1440px] h-[68px] px-4 sm:px-[100px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/Frame 9.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <ul className="hidden md:flex items-center space-x-8 font-space-grotesk text-gray-800">
          <li className="cursor-pointer text-[20px] leading-[28px]">About us</li>
          <li className="cursor-pointer text-[20px] leading-[28px]">Services</li>
          <li className="cursor-pointer text-[20px] leading-[28px]">UseCases</li>
          <li className="cursor-pointer text-[20px] leading-[28px]">Pricing</li>
          <li className="cursor-pointer text-[20px] leading-[28px]">Blog</li>
          <li>
            <button
              className="w-[231px] h-[68px] rounded-[14px] border border-[#191A23] transition px-[35px] py-[20px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Request a quote"
            >
              Request a quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
