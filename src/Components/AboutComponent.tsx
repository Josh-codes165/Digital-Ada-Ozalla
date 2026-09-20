import image from "../assets/image1.jpg";
import { useInView } from "../hooks/useInView";

export default function AboutComponent() {
  const [imgRef, imgInView] = useInView();
  const [textRef, textInView] = useInView();
  const [panelRef, panelInView] = useInView();

  return (
    <section className="px-6 sm:px-10 md:px-16 md:mx-20 py-16 md:py-24 flex flex-col gap-16 md:gap-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-center">
        <div
          ref={imgRef}
          className={`relative w-full md:w-1/2 opacity-0 ${imgInView ? "animate-fadeInUp" : ""}`}
        >
          <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full bg-green-100 rounded-2xl -z-10" />
          <img
            src={image}
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[440px] object-cover"
          />
        </div>
        <div
          ref={textRef}
          style={{ animationDelay: "150ms" }}
          className={`w-full md:w-1/2 flex flex-col gap-5 opacity-0 ${textInView ? "animate-fadeInUp" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-green-950">
            Who are we
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-prose">
            Digital Ada Ozalla is a community of women brought together by a
            shared commitment to sisterhood, faith, service and personal
            growth. Our purpose is to create a supportive community where
            women can connect, grow together, empower one another and
            contribute meaningfully to their families and communities.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-prose">
            Through fellowship, women's gatherings, community outreach,
            celebrations, welfare and other activities, we create
            opportunities for our members to build meaningful relationships,
            support one another and make a positive difference around them.
            We believe in the strength of unity and the value every woman
            brings to the community. Together, we grow, serve and build a
            lasting legacy.
          </p>
          <button className="mt-4 w-fit bg-green-950 hover:bg-green-800 hover:scale-105 text-white text-base font-black px-7 py-3.5 rounded-lg transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        className={`rounded-3xl bg-green-950 overflow-hidden opacity-0 ${panelInView ? "animate-fadeInUp" : ""}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
          <div className="p-8 sm:p-10 md:p-14 flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-wide text-green-400">
              Our Vision
            </span>
            <p className="text-white/85 leading-relaxed max-w-prose">
              To nurture a strong and united community of empowered women who
              inspire one another, positively influence their families and
              communities, and leave a lasting legacy for generations to come.
            </p>
          </div>
          <div className="p-8 sm:p-10 md:p-14 flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-wide text-green-400">
              Our Mission
            </span>
            <p className="text-white/85 leading-relaxed max-w-prose">
              To build a supportive and purposeful community where women can
              grow in faith, strengthen meaningful relationships, empower one
              another, and make a positive impact through service and shared
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}