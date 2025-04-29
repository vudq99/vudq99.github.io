import Link from "next/link"
import { contactData } from "@/data/contact"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">© 2023 Duong Quang Vu. All rights reserved.</div>
        <div className="flex gap-4">
          {contactData.social.map((platform, index) => (
            <Link key={index} href={platform.url} className="text-sm text-muted-foreground hover:text-foreground">
              {platform.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
