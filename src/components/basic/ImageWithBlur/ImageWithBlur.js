// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ImageWithBlur.module.scss';

// ASSETS

// STORE

// 3RD PARTY

// OTHER COMPONENTS

// UTILS

// CONFIG & DATA

// COMPONENT: ImageWithBlur
const ImageWithBlur = (props) => {
  // PROPS
  const { src, alt } = props;

  // COMPONENT/UI STATE and REFS

  // STORE HOOKS

  // EFFECT HOOKS

  // OTHER HOOKS

  // METHODS

  // EVENT HANDLES

  // HELPERS

  // RENDERS

  // RENDER: ImageWithBlur
  return (
    <div className={`${styles.imageWithBlur}`}>
      <img className={styles.image} src={src} alt={alt} />
      <img className={styles.imageBlur} src={src} alt={alt} />
    </div>
  );
};

export default ImageWithBlur;
