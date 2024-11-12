import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Unused</title>
        <meta name="description" content="This page is currently unused" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pageContent">
          <div className="contentContainer">
            <h1 className="titleText">
                    This page is currently unused
                </h1>
            </div>
        </div>
    </>
  );
}