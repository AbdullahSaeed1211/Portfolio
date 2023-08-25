import Image from "next/image"
const Hero = () => {
  return (
    <section className="w-full min-h-screen flex-center flex-col  md:flex-left md:flex-row">
        <div className="flex-col md:flex-auto animate-fade-in-up ">
          <h2 className="head_text text-center md:text-left">
            Hello, My name is
            <br className="max-lg:hidden" />
            <span className="cyan_gradient"> Abdullah Saeed</span>
          </h2>
          <p className="desc text-center md:text-left animate-fade-in-up">
            Software & Web-Developer
          </p>
        </div>
        <div className=" sm:mt-5">
          <div className="relative w-[270px] h-[270px] sm:h-[300px] sm:w-[300px] lg:h-[600px] lg:w-[600px] -z-10 animate-fade-in-right">
            {/* <a href="https://storyset.com/rocket">Rocket illustrations by Storyset</a> */}
            <Image
              className="mt-5 object-cover"
              src={"/assets/images/logo2.svg"}
              alt={"Hero pic"}
              fill
            />
          </div>
        </div>
        <hr />
       
      </section>
  )
}

export default Hero