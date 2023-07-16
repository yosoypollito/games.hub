import styles from "@/app/page.module.css";

import GoToRooms from "@/app/rooms/components/GoToRooms";

import { monoton } from "@/constants";
import HomeSection from "./components/Home/Section";
import SectionTitle from "./components/Home/SectionTitle";
import HomeSectionButton from "./components/Home/SectionButton";
export default function Home() {
  return (
    <main className={`${styles.center} flex flex-col gap-8 m-auto`}>
      <header className="flex flex-col gap-4 items-center max-w-3xl py-20">
        <h1 className={`${monoton.className} text-5xl text-center leading-tight text-black dark:text-white`}>
          Instant fun with exciting mini games.
        </h1>
        <GoToRooms />
      </header>

      <HomeSection>
        <div className="flex flex-col gap-2 text-center">
          <SectionTitle as="h2" size="medium">
            Our game collection
          </SectionTitle>
          <p>
            Our collection of minigames is carefully curated to provide you with the best selection of classic and popular games.
          </p>
        </div>

        <div>
        </div>
      </HomeSection>

      <HomeSection>
        <SectionTitle as="h2" size="medium">
          Don't See Your Favorite Minigame?
        </SectionTitle>
        <HomeSectionButton>
          Leave Your Game Idea Now!
        </HomeSectionButton>
      </HomeSection>

      <footer>
      </footer>
    </main>
  );
}
