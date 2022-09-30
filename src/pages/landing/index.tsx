import { Link } from "react-router-dom";
import landingPageImg from "assets/landing-page-image.svg";
import { Button } from "components/Button";
import "./styles.css";

export function LandingPage() {
  return (
    <main className="landing text-center flex flex-col items-center py-12 lg:py-20 px-10 min-h-screen  xl:flex-row-reverse  xl:justify-between">
      <div className="xl:text-right xl:ml-20">
        <div className=" max-w-md  xl:max-w-none">
          <h1
            className="text-5xl font-bold  text-purple-dark 
        text-[36px] leading-tight mb-5 lg:text-[64px] xl:leading-"
          >
            Imagine if
            <span className="text-purple-gradient block">Snapchat</span>
            had events.
          </h1>
          <p className="text-base font-thin leading-normal text-gray-6 mb-12 xl:text-[24px]">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>

        <div className="hidden xl:flex justify-end mt-8">
          <Link to="/create" className="w-96">
            <Button>🎉 Create my event</Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <img
          src={landingPageImg}
          alt="events"
          className="block mb-8 h-[35rem] lg:h-auto"
        />

        <Link to="/create" className="block xl:hidden ">
          <Button>🎉 Create my event</Button>
        </Link>
      </div>
    </main>
  );
}
