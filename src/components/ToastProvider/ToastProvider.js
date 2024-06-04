import React from 'react';
import useKeyDown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({children}) {
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

    const handleEscape = React.useCallback(() => {
        setToasts([]);
    }, []);
    useKeyDown('Escape', handleEscape);

    return (
        <ToastContext.Provider
            value={{toasts, handleDismiss, handleCreateToast, message, setMessage, variant, setVariant}}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
