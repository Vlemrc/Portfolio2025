"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Resume() {
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTitle(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden">
            <Link href="/CV2025VictorLemercier.pdf" target="_blank" className={`flex flex-row items-end gap-1 group transition-transform duration-300 ${showTitle ? 'translate-y-0' : '-translate-y-6'}`}>
                <p className="text-white text-[10px] uppercase font-bold">Download my resume</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[8px] -translate-y-[3px] transition-transform duration-300 group-hover:rotate-45 rotate-90" viewBox="0 0 233.23 251.64">
                    <path fill="#fff" d="M228.84,106.01L127.22,4.39c-.35-.35-.72-.68-1.1-1-.17-.14-.35-.26-.53-.4-.21-.16-.42-.33-.65-.48-.22-.14-.44-.27-.66-.4-.2-.12-.39-.24-.6-.35-.23-.12-.46-.22-.69-.33-.21-.1-.42-.21-.64-.3-.23-.09-.46-.17-.69-.25-.23-.08-.46-.17-.7-.24-.23-.07-.47-.12-.7-.18-.24-.06-.48-.13-.72-.18-.27-.05-.55-.09-.82-.13-.21-.03-.42-.07-.63-.09-.99-.1-1.98-.1-2.96,0-.21.02-.42.06-.63.09-.27.04-.55.07-.82.13-.24.05-.48.12-.72.18-.23.06-.47.11-.7.18-.24.07-.47.16-.7.24-.23.08-.46.16-.69.25-.22.09-.43.2-.64.3-.23.11-.46.21-.69.33-.2.11-.4.23-.6.35-.22.13-.44.26-.66.4-.22.15-.43.32-.65.48-.18.13-.36.25-.53.4-.38.31-.75.65-1.1,1L4.39,106.01c-5.86,5.86-5.86,15.36,0,21.21,2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39L101.61,51.21v185.43c0,8.28,6.72,15,15,15s15-6.72,15-15V51.21l76.01,76.01c2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39c5.86-5.86,5.86-15.36,0-21.21Z"/>
                </svg>
            </Link>
        </div>
    )
}