const CONTACT_CARDS = [
  {
    title: "Office Location",
    value: "Mumbai, India",
    description: "Address shared upon confirmation. Appointments are arranged in advance.",
  },
  {
    title: "Phone Number",
    value: "+91 98208 88862",
    description: "Reach our team for appointment support or detailed inquiries today.",
  },
  {
    title: "E-mail Address",
    value: "hello@healwithgeeta.com",
    description: "Contact our team for guidance, scheduling, or information quickly.",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="w-full bg-[#f8f3ef] px-6 py-24 text-[#ad7f53] sm:py-28">
      <div className="mx-auto max-w-[1520px]">
        <div className="mb-20 text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-[22px] font-normal text-[#ad7f53]">
            <span className="text-[25px] leading-none">✽</span>
            Contact Us
          </p>
          <h2 className="text-[54px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[76px] md:text-[86px]">
            Get In Touch
            <span className="mt-2 block font-serif text-[58px] italic leading-none sm:text-[78px] md:text-[88px]">
              With Us
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {CONTACT_CARDS.map((card) => (
            <article
              key={card.title}
              className="group flex min-h-[350px] flex-col justify-center border border-[#ad7f53] px-6 py-12 text-center transition-colors duration-300 hover:bg-[#ad7f53] sm:px-10"
            >
              <h3 className="text-[34px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[40px]">
                {card.title}
              </h3>
              <div className="my-10 h-px w-full bg-[#ad7f53] transition-colors duration-300 group-hover:bg-white" />
              <p className="text-[21px] font-normal leading-snug text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[24px]">
                {card.value}
              </p>
              <p className="mx-auto mt-10 max-w-[360px] text-[20px] leading-[1.25] text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[23px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
