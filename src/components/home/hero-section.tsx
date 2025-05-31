export default function Hero() {
  return (
    <section className="w-full max-w-[1440px] h-auto py-[60px] px-[20px] md:px-[100px] bg-white text-black mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="space-y-6 mb-10 md:mb-0">
        <h1 className="max-w-[531px] font-space-grotesk font-medium text-[40px] md:text-[60px] leading-[60px] tracking-normal">
          Navigating the <br /> digital landscape <br /> for success
        </h1>
        <p className="max-w-[498px] font-space-grotesk font-normal text-[18px] md:text-[20px] leading-[28px] tracking-normal text-black">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="px-[35px] py-[20px] rounded-[14px] font-space-grotesk font-normal text-[20px] leading-[28px] text-white bg-black text-center">
          Book a consultation
        </button>
      </div>
      <div className="w-full md:w-[600px] h-auto">
        <img src="/image.png" alt="image" className="w-full h-auto" />
      </div>
    </section>
  );
}
