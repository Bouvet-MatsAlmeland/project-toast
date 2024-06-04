import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const {toasts, handleDismiss, handleCreateToast, message, setMessage, variant, setVariant} = React.useContext(ToastContext);

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf toasts={toasts} handleDismiss={handleDismiss}/>

            <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea id="message" className={styles.messageInput} value={message}
                                  onChange={(event) => setMessage(event.target.value)}/>
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
                                    checked={variant === buttonVariant}
                                    value={buttonVariant}
                                    onChange={event => {
                                        setVariant(event.target.value);
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
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default ToastPlayground;
