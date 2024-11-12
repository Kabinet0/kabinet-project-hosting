import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Raptor from "@/public/images/Raptor 3 2.webp";
import LabPhoto from "@/public/images/Lab-Photo.webp";
import LinkBox from "@/components/LinkBox";
import BackArrowButton from "@/components/BackArrowButton";

export default function Lab() {
  return (
    <>
      <Head>
        <title>Lab Work</title>
        <meta name="description" content="Matthew's portmolio project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="76x76" href="static/favicon.ico" />
      </Head>
      <div>
        <NavBar 
          text="PORTMOLIO - LAB WORK" 
          extra_additions={
            <BackArrowButton href={"/portmolio"}/>
          }
        />
        <div className="pageContent">
            <div className="contentContainer">
              <h1 className="titleText">Lab Work</h1>

              <div className="centerContainer">
                <h2 className="paragraphHeader">
                  Stoichiometry - From Rags to Riches
                </h2>
              </div>

              <div className="spacer" />

              <div className="centerContainer">
                <Image 
                  src={LabPhoto} 
                  width={800} 
                  onLoad={(e) => e.target.style.opacity = "1"}
                  className={["imageRound", "easeImageload"].join(" ")}
                />
              </div>

              <div className="largeParagraphContainer">
              <div className="smallSpacer" />
                <p className="largeParagraph" style={{textIndent:"unset"}}>
                  Figure 1. The lab setup on the second day of the experiment.
                </p>
              </div>

              <div className="spacer" />

              <div className="largeParagraphContainer">
                <div className="smallSpacer" />
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Analysis
                </h1>

                <div className="smallSpacer" />

                <p className="largeParagraph" style={{textIndent:"unset"}}>
                  Click below to open a google sheet containing my lab analysis.
                </p>

                <div className="smallSpacer" />

                {/*https://docs.google.com/spreadsheets/d/1O_wdYD2GWGCDdhhLxb2oFfhtwzwJr-HXETrBuT9J-Xw/edit?usp=sharing*/}
                <LinkBox 
                  title_text={"Google Sheets"}
                  href="https://docs.google.com/spreadsheets/d/1O_wdYD2GWGCDdhhLxb2oFfhtwzwJr-HXETrBuT9J-Xw/edit?usp=sharing"
                  categoryColor={"var(--c1)"} 
                  gradient_angle={90} 
                  height={100}
                />             
              </div>

              <div className="spacer" />

              <div className="largeParagraphContainer">
                <h1 className="paragraphHeader" style={{color:"var(--c2)"}}>
                  Lab Questions
                </h1>

                <h2 className="paragraphHeader" >
                  <span>Question</span> #1:
                </h2>

                <div className="smallSpacer" />

                <p className="largeParagraph">
                  Combining one or more reagents to form some (or several) products is at its core just a chemical reaction. But how we contextualise and describe aspects of this reaction has significant depth. Stoichiometry, the concept of a limiting reagent, and yield all help us explain what happens when two chemicals react. When compounds react, their quantities are relative to each other not by mass, but by number of particles. Since we deal with huge quantities of particles, when at a human scale, the mole is used as a shorthand for a large number (Avegadro’s number) of particles. Stoichiometry is a blanket group of techniques that use the ratio of particles to one another in an equation, to let us predict the quantities of reactants or products involved.
                </p>  
                
                <div className="spacer" />
                <p className="largeParagraph">
                  Additionally, stoichiometry leads naturally to the concept of a limiting reagent. When the ratio of reactants does not exactly match the ratio of reactants in the chemical equation of the reaction at hand, one reactant runs out first, becoming the limiting reagent, and leaving the other as an excess reagent. Finally, although stoichiometry describes the perfect, theoretical world, we inhabit the decidedly imperfect real world instead. Since the ratios of reactants in real chemical reactions are never perfect, we have a concept of percent yield, which is relative to the perfect stoichiometric world. Due to any number of factors (contaminants, etc..) even the most controlled conditions will produce a slightly imperfect result, which can be quantified as a percentage of the “ideal” result.
                </p>        
                <div className="spacer" />



                <h2 className="paragraphHeader" >
                  <span>Question</span> #2:
                </h2>   

                {/* Question 2 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  As an individual group, we were relatively accurate, with a 82.20% silver yield. But accuracy across the whole class varied dramatically in our case. Other groups had yields closer to 30%, which leads me to say our class was rather imprecise, although on average, we ended up being somewhat accurate, with an average yield of 70.46%.
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #3:
                </h2>   

                {/* Question 3 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  Random error is derived from the measurement devices used to gather data. Firstly, and most obviously, there’s the error from the scale we used to mass all our objects.  An additional possibility is that the silver Nitrate we used was not entirely pure, though considering the bottle we used was industrially produced, its likely tolerances were fairly tight, and that this source of error is minimal. 
                </p>        
                <div className="spacer" />
                <p className="largeParagraph">
                  When it comes to procedural or systematic error, it’s likely that our test tubes (having been only lightly rinsed) still had other contaminants of some kind inside, this could have likely been controlled for with additional effort. One other source of procedural error could have been how long we let the reaction run. There was no indication that the one day we gave it was sufficient for the reaction to run its entire course.
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #4:
                </h2>   

                {/* Question 4 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  My first recommendation would probably be to run the reaction for much longer if possible, as well as maybe agitating the solution a bit part way through, to help mix the reactants further. Additionally, using a more precise mass balance could increase the precision of all measurements, and improve accuracy somewhat. 
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #5:
                </h2>   

                {/* Question 5 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  As another related experiment, I would be curious about separating the trace quantities of gold from microelectronics. This is usually considered hazardous, due to the chemicals needed, and not economically viable due to the tiny amount of gold recoverable, but I am still curious as to what yield might be achievable without industrial resources or high end lab equipment. 
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #6:
                </h2>   

                {/* Question 6 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  The yield of a reaction in industrial chemistry is important to be aware of. From the standpoint of the company performing the reaction, their machinery would need to be able to handle the final separation of the desired product from waste, or unreacted components, to ensure the purity of the resulting product. Additionally, from an economical standpoint, it’s important to be able to acquire reactants in sufficient quantities to offset the reduced yield of the chemical reaction, ensuring sufficient production of the final product.
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #7:
                </h2>   

                {/* Question 7 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  As the copper is dissolved in water, it oxidises and turns blue. Since the copper is the excess reagent in this case, there is still a lot of copper left over in the solution by the time the reaction is over, meaning that the blue colour remains throughout the entire experiment.
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #8:
                </h2>   

                {/* Question 8 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  Acetone is a good solvent of nearly anything (much like water is), so to ensure our results are as accurate as possible, we washed our copper with acetone. This removed many contaminants by dissolving them, and allowed us to mass the copper more accurately. Acetone also has the advantage of evaporating extremely quickly, which makes it more convenient than water, which takes a long time to fully dry in ambient conditions.
                </p>        
                <div className="spacer" />

                <h2 className="paragraphHeader" >
                  <span>Question</span> #9:
                </h2>           

                {/* Question 9 */}
                <div className="smallSpacer" />
                <p className="largeParagraph">
                  According to my research, the 0.57 grams of silver we recovered is worth around $0.60 USD, since silver is valued around $1.05 USD per gram. In Canadian Dollars, that ends up being around $0.84.
                </p>        
                <div className="spacer" />
              </div>


              <div className="spacer" />

            </div>
          </div>
        </div>
    </>
  );
}
