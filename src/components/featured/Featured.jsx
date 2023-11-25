import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Explore Creativity:</b>  Where Stories and Ideas Converge.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Discover the Uncharted: A Blogging Odyssey.</h1>
          <p className={styles.postDesc}>
            Embark on an odyssey with BlogSync! Immerse in storytelling and explore creative realms. Uncover the allure of uncharted territories and join us in a venture where every word unveils new experiences. Discover the magic of content that weaves compelling narratives and imaginative escapades. Your passport to a world where each click opens dimensions of inspiration and wonder.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
