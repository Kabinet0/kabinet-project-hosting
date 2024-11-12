import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import HorizontalScrollElement from "@/components/HorizontalScrollElement";
import LinkBox from "@/components/LinkBox";

export default function Index() {
  return (
    <>
      <Head>
        <title>Portmolio</title>
        <meta name="description" content="Matthew's portmolio project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="pageBackground">
      <NavBar text="PORTMOLIO"/>
        <div className="pageContent">
          <div className="contentContainer">
            <h1 className="titleText">Matthew Kabin's<br/>Portmolio</h1>
            <h2 className="spaceTitle"><span>Theme |</span> SPACE</h2>
            
            <div className="spacer" />

            <div className="centerContainer">
              <div className="lineSpacer" />
            </div>

            <div className="spacer" />

            <h3 className="subheading">Browse through the sections below to find what you're looking for</h3>

            <div className="spacer" />

            <div style={{position: "relative"}}>
              <HorizontalScrollElement button_color={"var(--c1)"}>
                <div className="carouselContainer">
                  <LinkBox title_text={"Summative Test"} categoryColor={"var(--c1)"} href={"/test"} animDelay={0}/>
                  <LinkBox title_text={"Cover Letter"} categoryColor={"var(--c2)"} href={"/cover"} animDelay={0.1}/>
                  <LinkBox title_text={"Quiz Corrections"} categoryColor={"var(--c3)"} href={"/corrections"} animDelay={0.2}/>
                  <LinkBox title_text={"Applications"} categoryColor={"var(--c1)"} href={"/applications"} animDelay={0.3}/>
                  <LinkBox title_text={"Lab Work"} categoryColor={"var(--c2)"} href={"/lab"} animDelay={0.4}/>
                </div>
              </HorizontalScrollElement>
            </div>

            <div className="spacer" />
          </div>
        </div>
      </div>
    </>
  );
}
