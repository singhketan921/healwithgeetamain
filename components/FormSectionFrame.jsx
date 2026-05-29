export const formInputClass =
  "w-full border-0 border-b border-[#ad7f53] bg-transparent px-0 py-5 text-[18px] leading-none text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";

export const formBoxInputClass =
  "w-full border border-[#ad7f53] bg-transparent px-5 py-4 text-[18px] leading-none text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";

export const formTextareaClass =
  "w-full min-h-[230px] resize-none border-0 border-b border-[#ad7f53] bg-transparent px-0 py-5 text-[18px] text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";

export const formSubmitClass =
  "inline-flex h-[66px] w-full items-center justify-center gap-3 bg-[#dccbb6] px-8 text-[16px] font-medium uppercase tracking-[0.14em] text-[#ad7f53] transition-colors hover:bg-[#d0b894] disabled:cursor-not-allowed disabled:opacity-60";

export default function FormSectionFrame({
  eyebrow = "Ask Us Question",
  title = "Can't Find What You're",
  accentTitle = "Looking For?",
  intro = "Ask us directly through the form below and our team will respond quickly.",
  image = "/assets/images/astrology.jpg",
  imageAlt = "",
  children,
  id,
}) {
  return (
    <section id={id} className="bg-[#f8f3ef] px-6 py-24 text-[#ad7f53] sm:py-28">
      <div className="mx-auto max-w-[1520px]">
        <div className="mb-20 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[22px] font-normal text-[#ad7f53]">
              <span className="text-[25px] leading-none">✽</span>
              {eyebrow}
            </p>
            <h2 className="max-w-[900px] text-[48px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[70px] md:text-[84px]">
              {title}
              <span className="mt-3 block font-serif text-[54px] italic leading-none sm:text-[76px] md:text-[88px]">
                {accentTitle}
              </span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[21px] leading-[1.35] text-[#ad7f53] lg:pb-4">
            {intro}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.26fr] lg:items-start">
          <img
            src={image}
            alt={imageAlt}
            className="hidden h-[520px] w-full object-cover sm:h-[620px] lg:block lg:h-[710px]"
          />
          <div className="bg-white px-8 py-10 sm:px-12 sm:py-14 lg:px-16">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
