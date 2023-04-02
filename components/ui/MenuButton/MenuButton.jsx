export default function MenuButton({
    onClick,
    isMenuOpen,
    className = 'md:hidden',
}) {
    return (
        <>
            <button
                className={`relative w-12 h-12  rounded-full lg:hidden flex flex-col items-end  justify-center
                ${className}  ${!isMenuOpen ? "space-y-[6px]" : ""}`}
                onClick={onClick}
            >
                <span className={`h-[2px]   z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "w-6 mb-[-1px] rotate-45 bg-secondary hover:bg-secondary-2 transition-all duration-300"}`}></span>
                <span className={`h-[2px]   z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "hidden"} transition-all duration-300`}></span>
                <span className={`h-[2px]   z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "w-6 mb-[-1px]  bg-secondary hover:bg-secondary-2 -rotate-45 "}
                transition-all duration-300
                `}></span>
            </button>

        </>
    );
}

