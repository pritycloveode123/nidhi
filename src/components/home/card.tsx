export default function Card() {
  return (
    <section className="w-[1150px] h-[347px] bg-gray-100 rounded-[45px] flex items-center justify-between px-[60px] mx-auto mt-20 mr-25 ml-25">
      <div className="flex flex-col gap-[26px] w-[500px]">
        <h3
          className="text-[30px] font-medium leading-[30px] text-black"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Let’s make things happen
        </h3>

        <p
          className="text-[18px] font-normal leading-[18px] text-gray-700"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>

        <button className="bg-black text-white text-sm font-medium px-5 py-3 rounded-md hover:bg-gray-900 transition w-fit">
          Get your free proposal
        </button>
      </div>
      <div className="w-[494px] h-[394px] mr-[20px]">
        <img
          src="/Frame.png"
          alt="image"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
