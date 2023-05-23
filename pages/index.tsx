import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// Components
import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import UncleIroh from "../assets/iroh.png";
import AvatarRoku from "../assets/avatar_roku.png";

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

      <div>
        <GradientBackgroundCon></GradientBackgroundCon>
        <BackgroundImage1 src={UncleIroh} height="300" alt="UncleIrohAvatar" />
        <BackgroundImage2
          src={AvatarRoku}
          height="300"
          alt="AvatarRokuAvatar"
        />
      </div>
      <main className={styles.main}></main>
    </>
  );
}
