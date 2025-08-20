import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const socialLinks = [
  {
    url: "#",
    icon: "x",
  },
  {
    url: "#",
    icon: "linkedin",
  },
  {
    url: "#",
    icon: "github",
  },
  {
    url: "#",
    icon: "slack",
  },
  {
    url: "#",
    icon: "youtube",
  },
];
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary text-sm relative flex gap-peers flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap items-center justify-between px-container py-small">
      <div className="w-full flex items-center flex-col-reverse sm:flex-row justify-between gap-peers">
        {/* copyright */}
        <p className="text-muted-foreground">
          Copyright &copy; {year} SourceX. All rights reserved
        </p>
        {/* tos-pp */}
        <ul className="tos-pp-list w-fit static lg:absolute top-1/2 left-1/2 lg:-translate-1/2 flex items-center gap-4">
          <li className="tos-item">
            <Link href={"/"}>Terms of Service</Link>
          </li>
          <li className="pp-item">
            <Link href={"/"}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      {/* social-icons */}
      <ul className="w-full flex justify-center gap-small social-icons lg:w-fit">
        {socialLinks.map((i, idx) => (
          <li key={idx}>
            <SocialIcon
              url={i.url}
              className="!size-8 social-icon [--fg-color:var(--color-foreground)]"
              fgColor="var(--fg-color)"
              bgColor="transparent"
              network={i.icon}
            />
          </li>
        ))}
      </ul>
    </footer>
  );
}
