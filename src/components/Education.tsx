"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Education() {
  const [showExp1, setShowExp1] = useState(false);
  const [showExp2, setShowExp2] = useState(false);
  const [showExp3, setShowExp3] = useState(false);


  useEffect(() => {
      const timerExp1 = setTimeout(() => setShowExp1(true), 400);
      const timerExp2 = setTimeout(() => setShowExp2(true), 500);
      const timerExp3 = setTimeout(() => setShowExp3(true), 600);
    return () => {
      clearTimeout(timerExp1);
      clearTimeout(timerExp2);
      clearTimeout(timerExp3);
    };
  }, []);

    return (
        <div className="overflow-hidden mt-8">
          <h3 className={`uppercase text-[10px] font-bold pb-5 text-white ${showExp1 ? "translate-y-0" : "-translate-y-4"} transition-transform duration-300`}>Education</h3>
          <ul className="text-white flex flex-col gap-5">
            <li className="overflow-hidden h-[30px]">
              <div className={`${showExp1 ? "translate-y-0" : "-translate-y-12"} transition-transform duration-300 flex flex-row gap-8`}>
                <p className="uppercase text-[10px]">2023 - 2025</p>
                <div>
                  <p className="uppercase text-[10px] font-bold">Master Full Stack Developement</p>
                  <Link href="https://www.iim.fr/" target="_blank" className="flex flex-row items-end gap-0.5 group">
                    <p className="uppercase text-[10px]">IIM - Paris</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[8px] -translate-y-[3px] transition-transform duration-300 group-hover:rotate-45 rotate-90" viewBox="0 0 233.23 251.64">
                          <path fill="#fff" d="M228.84,106.01L127.22,4.39c-.35-.35-.72-.68-1.1-1-.17-.14-.35-.26-.53-.4-.21-.16-.42-.33-.65-.48-.22-.14-.44-.27-.66-.4-.2-.12-.39-.24-.6-.35-.23-.12-.46-.22-.69-.33-.21-.1-.42-.21-.64-.3-.23-.09-.46-.17-.69-.25-.23-.08-.46-.17-.7-.24-.23-.07-.47-.12-.7-.18-.24-.06-.48-.13-.72-.18-.27-.05-.55-.09-.82-.13-.21-.03-.42-.07-.63-.09-.99-.1-1.98-.1-2.96,0-.21.02-.42.06-.63.09-.27.04-.55.07-.82.13-.24.05-.48.12-.72.18-.23.06-.47.11-.7.18-.24.07-.47.16-.7.24-.23.08-.46.16-.69.25-.22.09-.43.2-.64.3-.23.11-.46.21-.69.33-.2.11-.4.23-.6.35-.22.13-.44.26-.66.4-.22.15-.43.32-.65.48-.18.13-.36.25-.53.4-.38.31-.75.65-1.1,1L4.39,106.01c-5.86,5.86-5.86,15.36,0,21.21,2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39L101.61,51.21v185.43c0,8.28,6.72,15,15,15s15-6.72,15-15V51.21l76.01,76.01c2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39c5.86-5.86,5.86-15.36,0-21.21Z"/>
                      </svg>
                  </Link>
                </div>
              </div>
            </li>
            <li className="overflow-hidden h-[30px]">
              <div className={`${showExp2 ? "translate-y-0" : "-translate-y-12"} transition-transform duration-300 flex flex-row gap-8`}>
                <p className="uppercase text-[10px]">2020 - 2023</p>
                <div>
                  <p className="uppercase text-[10px] font-bold">Bachelor digital project management</p>
                  <Link href="https://www.digital-campus.fr/ecole/rennes" target="_blank" className="flex flex-row items-end gap-0.5 group">
                    <p className="uppercase text-[10px]">Digital Campus - Rennes</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[8px] -translate-y-[3px] transition-transform duration-300 group-hover:rotate-45 rotate-90" viewBox="0 0 233.23 251.64">
                          <path fill="#fff" d="M228.84,106.01L127.22,4.39c-.35-.35-.72-.68-1.1-1-.17-.14-.35-.26-.53-.4-.21-.16-.42-.33-.65-.48-.22-.14-.44-.27-.66-.4-.2-.12-.39-.24-.6-.35-.23-.12-.46-.22-.69-.33-.21-.1-.42-.21-.64-.3-.23-.09-.46-.17-.69-.25-.23-.08-.46-.17-.7-.24-.23-.07-.47-.12-.7-.18-.24-.06-.48-.13-.72-.18-.27-.05-.55-.09-.82-.13-.21-.03-.42-.07-.63-.09-.99-.1-1.98-.1-2.96,0-.21.02-.42.06-.63.09-.27.04-.55.07-.82.13-.24.05-.48.12-.72.18-.23.06-.47.11-.7.18-.24.07-.47.16-.7.24-.23.08-.46.16-.69.25-.22.09-.43.2-.64.3-.23.11-.46.21-.69.33-.2.11-.4.23-.6.35-.22.13-.44.26-.66.4-.22.15-.43.32-.65.48-.18.13-.36.25-.53.4-.38.31-.75.65-1.1,1L4.39,106.01c-5.86,5.86-5.86,15.36,0,21.21,2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39L101.61,51.21v185.43c0,8.28,6.72,15,15,15s15-6.72,15-15V51.21l76.01,76.01c2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39c5.86-5.86,5.86-15.36,0-21.21Z"/>
                      </svg>
                  </Link>
                </div>
              </div>
            </li>
            <li className="overflow-hidden h-[30px]">
              <div className={`${showExp3 ? "translate-y-0" : "-translate-y-12"} transition-transform duration-300 flex flex-row gap-8`}>
                <p className="min-w-[58px] text-[10px]">2019 - 2025</p>
                <div>
                  <p className="uppercase text-[10px] font-bold">E-learning web development</p>
                  <Link href="https://dyma.fr/" target="_blank" className="flex flex-row items-end gap-0.5 group">
                    <p className="uppercase text-[10px]">DYMA</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[8px] -translate-y-[3px] transition-transform duration-300 group-hover:rotate-45 rotate-90" viewBox="0 0 233.23 251.64">
                          <path fill="#fff" d="M228.84,106.01L127.22,4.39c-.35-.35-.72-.68-1.1-1-.17-.14-.35-.26-.53-.4-.21-.16-.42-.33-.65-.48-.22-.14-.44-.27-.66-.4-.2-.12-.39-.24-.6-.35-.23-.12-.46-.22-.69-.33-.21-.1-.42-.21-.64-.3-.23-.09-.46-.17-.69-.25-.23-.08-.46-.17-.7-.24-.23-.07-.47-.12-.7-.18-.24-.06-.48-.13-.72-.18-.27-.05-.55-.09-.82-.13-.21-.03-.42-.07-.63-.09-.99-.1-1.98-.1-2.96,0-.21.02-.42.06-.63.09-.27.04-.55.07-.82.13-.24.05-.48.12-.72.18-.23.06-.47.11-.7.18-.24.07-.47.16-.7.24-.23.08-.46.16-.69.25-.22.09-.43.2-.64.3-.23.11-.46.21-.69.33-.2.11-.4.23-.6.35-.22.13-.44.26-.66.4-.22.15-.43.32-.65.48-.18.13-.36.25-.53.4-.38.31-.75.65-1.1,1L4.39,106.01c-5.86,5.86-5.86,15.36,0,21.21,2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39L101.61,51.21v185.43c0,8.28,6.72,15,15,15s15-6.72,15-15V51.21l76.01,76.01c2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39c5.86-5.86,5.86-15.36,0-21.21Z"/>
                      </svg>
                  </Link>
                </div>
              </div>
            </li>
            <li className="overflow-hidden h-[30px]">
              <div className={`${showExp3 ? "translate-y-0" : "-translate-y-12"} transition-transform duration-300 flex flex-row gap-8`}>
                <p className="min-w-[58px] text-[10px]">2017 - 2019</p>
                <div>
                  <p className="uppercase text-[10px] font-bold">BAC S</p>
                    <p className="uppercase text-[10px]">Lycée Alain Chartier - Bayeux</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
    )
}