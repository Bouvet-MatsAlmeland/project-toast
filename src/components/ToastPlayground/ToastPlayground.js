import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState('notice');
  const [showToast, setShowToast] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && <Toast variant={toastVariant} toastMessage={message} handleClose={setShowToast} />}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((buttonVariant) => (
                <label htmlFor={`variant-${buttonVariant}`} key={buttonVariant}>
                  <input
                      id={`variant-${buttonVariant}`}
                      type="radio"
                      name='variant'
                      checked={toastVariant === buttonVariant}
                      value={buttonVariant}
                      onChange={event => {
                        setToastVariant(event.target.value);
                      }}
                  />
                  {buttonVariant}
                </label>
            ))}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}/>
          <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setShowToast(!showToast)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
