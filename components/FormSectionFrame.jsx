export const formInputClass =
  "w-full border-0 border-b border-[#ad7f53] bg-transparent px-0 py-3.5 text-[17px] leading-none text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";

export const formBoxInputClass =
  "w-full border border-[#ad7f53] bg-transparent px-5 py-3.5 text-[17px] leading-none text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";

export const formTextareaClass =
  "w-full min-h-[150px] resize-none border-0 border-b border-[#ad7f53] bg-transparent px-0 py-3.5 text-[17px] text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";

export const formSubmitClass =
  "inline-flex h-[56px] w-full items-center justify-center gap-3 bg-[#dccbb6] px-8 text-[15px] font-medium uppercase tracking-[0.14em] text-[#ad7f53] transition-colors hover:bg-[#d0b894] disabled:cursor-not-allowed disabled:opacity-60";

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
    <section id={id} className="bg-[#f8f3ef] px-6 py-12 text-[#ad7f53] sm:py-16">
      <div className="mx-auto max-w-[1520px]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[18px] font-normal text-[#ad7f53]">
              <span className="text-[25px] leading-none">✽</span>
              {eyebrow}
            </p>
            <h2 className="max-w-[900px] text-[42px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[56px] md:text-[68px]">
              {title}
              <span className="mt-2 block font-serif text-[46px] italic leading-none sm:text-[62px] md:text-[72px]">
                {accentTitle}
              </span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[18px] leading-[1.35] text-[#ad7f53] lg:pb-2">
            {intro}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.26fr] lg:items-start">
          <img
            src={image}
            alt={imageAlt}
            className="hidden h-[420px] w-full object-cover sm:h-[500px] lg:block lg:h-[560px]"
          />
          <div className="bg-white px-7 py-8 sm:px-10 sm:py-10 lg:px-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
