import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quotes Generator</title>
        <meta
          name="description"
          content="Quote Generator using Next.js, Typscript, and AWS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon></GradientBackgroundCon>
      <main className={styles.main}></main>
    </>
  );
}
