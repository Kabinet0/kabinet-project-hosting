import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Raptor from "@/public/images/Raptor 3 2.webp";
import LinkBox from "@/components/LinkBox";
import BackArrowButton from "@/components/BackArrowButton";

export default function Corrections() {
  return (
    <>
      <Head>
        <title>Quiz Corrections</title>
        <meta name="description" content="Matthew's portmolio project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar 
          text="PORTMOLIO - Quiz Corrections" 
          extra_additions={
            <BackArrowButton href={"/portmolio"}/>
          }
        />
        <div className="pageContent">
            <div className="contentContainer">
              <h1 className="titleText">Quiz Corrections</h1>

              <div className="centerContainer">
                <h2 className="paragraphHeader">
                  Quizzes 1-3
                </h2>
              </div>

              <div className="spacer" />

              {/* <div className="centerContainer">
                <Image 
                  src={Raptor} 
                  width={800} 
                  onLoad={(e) => e.target.style.opacity = "1"}
                  className={["imageRound", "easeImageload"].join(" ")}
                />
              </div> */}

              <div className="spacer" />

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Quiz #1
                </h1>

                <div className="smallSpacer" />

                {/*https://drive.google.com/file/d/18MOLqx7AHCSVf01EtIEU15JX6miYgv4b/view?usp=sharing*/}
                <LinkBox 
                  title_text={"Click Here"}
                  href="https://drive.google.com/file/d/18MOLqx7AHCSVf01EtIEU15JX6miYgv4b/view?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                />             
              </div>

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Quiz #2
                </h1>


                <div className="smallSpacer" />

                {/*https://drive.google.com/file/d/142l1Tftv9cknpyHUOgUdMk91jsdxhyVz/view?usp=sharing*/}
                <LinkBox 
                  title_text={"Click Here"}
                  href="https://drive.google.com/file/d/142l1Tftv9cknpyHUOgUdMk91jsdxhyVz/view?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                />             
              </div>

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Quiz #3
                </h1>

                <div className="smallSpacer" />

                {/*https://drive.google.com/file/d/15SkalWM2GsUwc_qCUm3Pnrv0CNaiF5dE/view?usp=sharing*/}
                <LinkBox 
                  title_text={"Click Here"}
                  href="https://drive.google.com/file/d/15SkalWM2GsUwc_qCUm3Pnrv0CNaiF5dE/view?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                />             
              </div>

              <div className="spacer" />
              <div className="spacer" />

            </div>
          </div>
        </div>
    </>
  );
}
