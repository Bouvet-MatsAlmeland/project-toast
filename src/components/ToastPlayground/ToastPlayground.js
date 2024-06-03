import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [toasts, setToasts] = React.useState([
        {
            message: "Hello!",
            variant: VARIANT_OPTIONS[0],
            id: crypto.randomUUID()
        },
        {
            message: "Hello bby!",
            variant: VARIANT_OPTIONS[1],
            id: crypto.randomUUID()
        }]);

    const handleCreateToast = (event) => {
        event.preventDefault();

        const nextToast = [
            ...toasts,
            {
                id: crypto.randomUUID(),
                message,
                variant,
            },
        ];

        setToasts(nextToast);

        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
    }

    const handleDismiss = (id) => {
        const nextToasts = toasts.filter((toast) => {
            return toast.id !== id
        });

        setToasts(nextToasts);
    }

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
