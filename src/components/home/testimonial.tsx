import { ArrowUpRight } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="bg-[#11111a] rounded-2xl p-6 text-white mt-20 mx-6 md:mx-24">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-700">
        {/* First */}
        <div className="flex-1 px-6 py-4">
          <p className="font-normal text-[18px] leading-[120%] font-['Space_Grotesk']">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-lime-400 text-sm font-medium gap-1"
          >
            Learn more <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Second */}
        <div className="flex-1 px-6 py-6">
          <p className="font-normal text-[18px] leading-[120%] font-['Space_Grotesk']">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-lime-400 text-sm font-medium gap-1"
          >
            Learn more <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Third */}
        <div className="flex-1 px-6 py-6 ">
          <p className="font-normal text-[18px] leading-[120%] font-['Space_Grotesk']">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-lime-400 text-sm font-medium gap-1"
          >
            Learn more <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
