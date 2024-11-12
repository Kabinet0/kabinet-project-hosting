import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import LabPhoto from "@/public/images/Lab-Photo.webp";
import BackArrowButton from "@/components/BackArrowButton";

export default function Lab() {
  return (
    <>
      <Head>
        <title>Cover Letter</title>
        <meta name="description" content="Matthew's portmolio project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="76x76" href="static/favicon.ico" />
      </Head>
      <div>
        <NavBar 
          text="PORTMOLIO - Cover Letter"
          extra_additions={
            <BackArrowButton href={"/portmolio"}/>
          }
        />
        <div className="pageContent">
            <div className="contentContainer">
              <h1 className="titleText">Cover Letter</h1>

              <div className="spacer" />

              <div className="largeParagraphContainer">
                <p className="largeParagraph">
                  This Unit was probably the most fundamental and far reaching I’m going to end up encountering in this course. (To my knowledge at least) In the end, everything covered relates back in some way to the mole, (and to a lesser extent stoichiometry), which lives up to its name as the central unit to chemistry. Being able to predict how reactions, be it with diluted solutions, or gases, was a key part of all of this. It also let us actually work with real quantities and measurements, opening the door to some actual, practical uses for chemistry, and expanding the sorts of conclusions we could draw from an experiment. There were a few other related topics we touched on, such as gas laws, concentration, and empirical formulas, but I’d categorise them as extensions of the concept of the mole. They really just allow us to apply or calculate moles in different real world conditions.
                </p>              

                <div className="spacer" />

                <p className="largeParagraph">
                  Throughout the unit, I also had to solve a bunch of problems (coincidental I know). When it comes to some of these problems, it’s sometimes hard to know exactly where to start, hence why my first problem solving strategy would be to simply write out unknowns and givens. I’ve honestly never really seen the need in the past, but I didn’t properly appreciate its value until this year, now that the problems I’m encountering have become complex enough to really warrant it. I also used the fairly standard, though certainly helpful technique of decomposing the problem into a sequence of simpler tasks I can consider one at a time. Finally, I’d also add that sometimes, when a problem, (In my case I can clearly remember the bonus problem on the second quiz) is truly overwhelming, It’s best to just forge ahead doing something, despite not being particularly sure of where I’d end up. Once I’d started work on the problem, things generally fell into place as I went, and although I didn’t really see it from the start, eventually I finished.
                </p>        

                <div className="spacer" />

                <p className="largeParagraph">
                  Taking a step back, this is likely one of the most important units in chemistry. Knowing how to manipulate and compare quantities in chemistry is essential to being able to do almost anything else in the subject, since quantities underpin chemical reactions, which I’d generally regard as the core of chemistry as a whole. Just from the types of problems I was able to include in my portfolio, I can notice just how many possibilities understanding moles can open new chemists up to.
                </p>        

                <div className="spacer" />

                <p className="largeParagraph">
                  In conclusion, this portfolio allowed for creativity in ways a test just wouldn’t allow for, and gave a lot more time to perfect parts of it. However, there is a definite tradeoff when it comes to time investment, there’s a lot of extra effort, just by virtue of there being so much more work to do in a portfolio style summative. The difference is stark when compared to a summative test, which only really takes a single class period. Even considering the disadvantages, such as a test requiring you to perform under pressure, I still feel like I would prefer taking the test in most cases. 
                </p>        
                <div className="spacer" />

                <p style={{color:"white", textAlign:"right"}}>
                  -Matthew Kabin
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
