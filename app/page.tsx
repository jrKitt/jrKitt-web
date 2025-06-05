import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="">
          <p className="text-5xl font-bold">Kittichai Raksawong</p>
          <p className="mt-5">
            Hello, I&apos;m Kittichai, I&apos;m student in the Department of
            Computer Science at KhonKaen University
          </p>

          <p className="text-5xl font-bold mt-[5rem]">Educations</p>
          <details open>
            <summary>KhonKaen University</summary>
            <ul>
              <li>
                <div className="mockup-code bg-white">
                  <pre>
                    <code>
                      May 2024 - College Of Computing <br /> (Computer Science)
                    </code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Disrustive Thinking Hackathon (
                    <EmojiEventsRoundedIcon className="text-warning" /> 4nd -
                    2025){" "}
                  </pre>
                </div>
              </li>
            </ul>
          </details>
          <details>
            <summary>Udonthani Technical College</summary>
            <ul>
              <li>
                <div className="mockup-code bg-white">
                  <pre>
                    <code>May 2021 - Department of Infomation Technology</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    PGS - Progress Chart (
                    <HistoryEduRoundedIcon className="text-warning" /> Project
                    Contest 2024){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    EDS - Education System (
                    <AccountTreeRoundedIcon className="text-warning" /> Final
                    Project){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Computer programming skills (
                    <EmojiEventsRoundedIcon className="text-warning" /> 2nd -
                    2023){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Computer programming skills (
                    <EmojiEventsRoundedIcon className="text-warning" /> 2nd -
                    2022){" "}
                  </pre>
                </div>
              </li>
            </ul>
          </details>
          <p className="text-5xl font-bold mt-[5rem]">Work Experince</p>
          <details open>
            <summary>Intership - IT NETWORK</summary>
            <ul>
              <li>
                <div className="mockup-code bg-white">
                  <pre>
                    <code>Oct 2023 - Feb 2024 </code>
                  </pre>
                  <pre data-prefix="?" className="text-error">
                    Complete
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Logs Website (
                    <AccountTreeRoundedIcon className="text-warning" /> PHP, JS,
                    TailwindCss){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Setup Internet Router (
                    <HistoryEduRoundedIcon className="text-warning" /> Onsite){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Setup Computer for Company (
                    <HistoryEduRoundedIcon className="text-warning" /> Onsite){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Setup Computer for Police Station (
                    <HistoryEduRoundedIcon className="text-warning" /> Onsite){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Software Support (
                    <HistoryEduRoundedIcon className="text-warning" /> Online /
                    Onsite){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Setup Software for Department Store (
                    <HistoryEduRoundedIcon className="text-warning" /> Onsite){" "}
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    Sell Software for Department Store (
                    <HistoryEduRoundedIcon className="text-warning" /> Onsite){" "}
                  </pre>
                </div>
              </li>
            </ul>
          </details>
        <p className="text-5xl font-bold mt-[5rem]">Projects</p>
        <p className="mt-5"></p>
        <CardList />
        </div>
      </section>
    </main>
  );
}
