type NavButtonProps = {
    text : string;
}

export default function NavButton({text} : NavButtonProps) {
    return (
        <button className={`text-sm max-w-10 min-w-10 text-sky-300 mx-10 hover:text-sky-50`}>
            {text}
        </button>
    );
}