import { TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const socialLinks = [{
    url:"#",
    icon:"x"
},
{
    url:"#",
    icon:"linkedin"
},
{
    url:"#",
    icon:"github"
},
{
    url:"#",
    icon:"slack"
},
{
    url:"#",
    icon:"youtube"
}]
export default function Footer({}: Props) {
  return (
    <footer className="w-full bg-background text-sm relative flex items-center justify-between px-container py-small">
      {/* copyright */}
      <p className="text-foreground/60">Copyright &copy; 2025 SourceX. All rights reserved</p>
      {/* tos-pp */}
      <ul className="tos-pp-list w-fit md:absolute top-1/2 left-1/2 -translate-1/2 flex items-center gap-4">
        <li className="tos-item">
          <Link href={"/"}>Terms of Service</Link>
        </li>
        <li className="pp-item">
          <Link href={"/"}>Privacy Policy</Link>
        </li>
      </ul>
      {/* social-icons */}
      <ul className="w-fit flex gap-small social-icons">
        {
            socialLinks.map((i, idx) => <li key={idx}><SocialIcon url={i.url} className="!size-8 social-icon [--fg-color:var(--color-foreground)]" fgColor="var(--fg-color)" bgColor="transparent" network={i.icon}/></li>)
        }
        
      </ul>
    </footer>
  );
}
