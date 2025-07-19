import clsx from "clsx";

export default function FlapDisplayPlaceholder({ className = "" }) {
    return (
        <div
            className={clsx(
                "w-full",
                className
            )}
        />
    );
}