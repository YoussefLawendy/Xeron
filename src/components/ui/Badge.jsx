export default function Badge({ children }) {
    return (
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[12px] font-medium bg-accent/10 text-accent-light border border-accent/25 tracking-wide">
            {children}
        </span>
    );
}