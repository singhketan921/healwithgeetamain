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
    <section className="w-full bg-[#f8f3ef] px-6 py-12 text-[#ad7f53] sm:py-16">
      <div className="mx-auto max-w-[1520px]">
        <div className="mb-10 text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[18px] font-normal text-[#ad7f53]">
            <span className="text-[25px] leading-none">✽</span>
            Contact Us
          </p>
          <h2 className="text-[44px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[62px] md:text-[72px]">
            Get In Touch
            <span className="mt-2 block font-serif text-[48px] italic leading-none sm:text-[66px] md:text-[76px]">
              With Us
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {CONTACT_CARDS.map((card) => (
            <article
              key={card.title}
              className="group flex min-h-[240px] flex-col justify-center border border-[#ad7f53] px-6 py-8 text-center transition-colors duration-300 hover:bg-[#ad7f53] sm:px-8 lg:min-h-[280px]"
            >
              <h3 className="text-[28px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[34px]">
                {card.title}
              </h3>
              <div className="my-6 h-px w-full bg-[#ad7f53] transition-colors duration-300 group-hover:bg-white" />
              <p className="text-[18px] font-normal leading-snug text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[21px]">
                {card.value}
              </p>
              <p className="mx-auto mt-6 max-w-[360px] text-[17px] leading-[1.25] text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[19px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
