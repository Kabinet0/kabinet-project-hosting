import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import LinkBox from "@/components/LinkBox";
import BackArrowButton from "@/components/BackArrowButton";

export default function Test() {
  return (
    <>
      <Head>
        <title>Portmolio Test</title>
        <meta name="description" content="Matthew's portmolio project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar 
          text="PORTMOLIO - Portmolio Test" 
          extra_additions={
            <BackArrowButton href={"/portmolio"}/>
          }
        />
        <div className="pageContent">
            <div className="contentContainer">
              <h1 className="titleText">Portmolio Test</h1>

              <div className="spacer" />

              <div className="centerContainer">
                <div className="lineSpacer" />
              </div>

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
                  Original Test
                </h1>

                <div className="smallSpacer" />

                {/*https://drive.google.com/file/d/15fW33WxGARb3NpUnXOI4Ietnwbxxansc/view?usp=sharing*/}
                <LinkBox 
                  title_text={"Click Here"}
                  href="https://drive.google.com/file/d/15fW33WxGARb3NpUnXOI4Ietnwbxxansc/view?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                  slideRight={true}
                />             
              </div>

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Completed Test
                </h1>


                <div className="smallSpacer" />

                {/*https://drive.google.com/file/d/1MNNBbMODxumsAtR99IcDJr4VwSDXTwHk/view?usp=sharing*/}
                <LinkBox 
                  title_text={"Click Here"}
                  href="https://drive.google.com/file/d/1MNNBbMODxumsAtR99IcDJr4VwSDXTwHk/view?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                  slideRight={true}
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
