import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Raptor from "@/public/images/Raptor 3 2.webp";
import LinkBox from "@/components/LinkBox";
import BackArrowButton from "@/components/BackArrowButton";

export default function Applications() {
  return (
    <>
      <Head>
        <title>Applications</title>
        <meta name="description" content="Matthew's portmolio project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar 
          text="PORTMOLIO - Applications" 
          extra_additions={
            <BackArrowButton href={"/portmolio"}/>
          }
        />
        <div className="pageContent">
            <div className="contentContainer">
              <h1 className="titleText">Applications</h1>

              <div className="centerContainer">
                <h2 className="paragraphHeader">
                  Stoichiometry in Space
                </h2>
              </div>

              <div className="spacer" />

              <div className="centerContainer">
                <Image 
                  src={Raptor} 
                  width={800} 
                  onLoad={(e) => e.target.style.opacity = "1"}
                  className={["imageRound", "easeImageload"].join(" ")}
                />
              </div>

              <div className="largeParagraphContainer">
              <div className="smallSpacer" />
                <p className="largeParagraph" style={{textIndent:"unset"}}>
                  Figure 1. A Raptor 3 methalox engine rendered in Fusion 360.
                </p>
              </div>

              <div className="spacer" />

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Paper Work
                </h1>

                <div className="smallSpacer" />

                <p className="largeParagraph" style={{textIndent:"unset"}}>
                  Click below to open a pdf containing my written answers to most questions.
                </p>

                <div className="smallSpacer" />

                {/*https://drive.google.com/file/d/1ZP8vAOgKGV7ip5bYVJD0qVvju5lHDG-F/view?usp=sharing*/}
                <LinkBox 
                  title_text={"Click Here"}
                  href="https://drive.google.com/file/d/1ZP8vAOgKGV7ip5bYVJD0qVvju5lHDG-F/view?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                />             
              </div>

              <div className="spacer" />

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Answer to Question #3
                </h1>

                <div className="smallSpacer" />

                <p className="largeParagraph">
                  Separating two gases, such as Carbon Monoxide and Oxygen isn’t particularly easy, but since their properties differ somewhat, it remains possible. (Whether or not it’s economically feasible, especially on Mars remains to be seen) I chose to exploit boiling point differences between the two compounds. Oxygen gas boils at 90.15K, and carbon monoxide boils at 81.65K. Knowing this, by cooling both gases to a liquid state, and then raising the temperature to somewhere above the boiling point of carbon monoxide, but still below that of oxygen, it would be possible to boil off the carbon monoxide, and produce extremely pure oxygen gas. 
                </p>   

                <div className="smallSpacer" />     

                <p className="largeParagraph">
                  Unfortunately the power draw for such a system might be highly significant. Power generation is hard to come by on Mars, with solar panels and RTGs (Radioisotope thermoelectric generators) being effectively the only choices that can work with minimal maintenance (as would be the case for an autonomous system). Fortunately, Mars is at times as cold as 120K, which while not cold enough to liquefy either gas, is definitely helpful, means that the system would require less energy to be spent cooling the gases. Due to this fact, it might be most efficient to only run separation of the two gases during night on Mars, to exploit the colder environment and save the MOxIE’s energy. 
                </p>   

              </div>

              <div className="spacer" />
              <div className="spacer" />

            </div>
          </div>
        </div>
    </>
  );
}
