import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="BlogSync" width={50} height={50} />
          <h1 className={styles.logoText}>BlogSync</h1>
        </div>
        <p className={styles.desc}>
          Uncover a realm of ideas and inspiration with our blog app, InsightHub. From engaging articles to thought-provoking content, InsightHub is your gateway to a curated world of knowledge. Dive in for a captivating and enriching reading experience.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="#">Style</Link>
          <Link href="#">Fashion</Link>
          <Link href="#">Coding</Link>
          <Link href="#">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.linkedin.com/in/vaibhav-sharma-a94678200/">Linkedin</Link>
          <Link href="https://www.instagram.com/tux.ygj_hji/">Instagram</Link>
          <Link href="https://github.com/Vaibhav-Sharma-1">Github</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
