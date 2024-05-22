import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className=" gap-2 md:gap-2 align-middle w-full  ">
      <Link href="/" className="flex-col">
        <p className="font-black flex pt-2 tracking-tighter text-3xl w-full">
          <img
            alt="ezoic logo"
            src="./ezlogo.png"
            className="flex w-[40px] brightness-100 p"
          />
          entity
          <span className="dark:text-[#7ede46] text-[#439b10]">graph</span>
        </p>
      </Link>
      {items?.length ? (
        <div className="flex-row  gap-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className="flex items-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
