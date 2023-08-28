import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-sky-300 py-20" id="about">
      <div className="align-element grid gap-16 items-center md:grid-cols-2">
        {/* img */}
        <img src={aboutImg} alt="code image" className="w-full h-64" />
        {/* article */}
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            impedit sed soluta? Nemo sunt dicta tenetur reiciendis magnam ipsam
            delectus deserunt dolorum obcaecati accusantium, officiis
            consequatur odit, quidem voluptas, natus eveniet mollitia debitis.
            Reiciendis dolorum a ipsam. Quia laboriosam molestias vel officiis
            numquam repellendus consequatur, ipsam deserunt ullam? Architecto,
            iste?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
