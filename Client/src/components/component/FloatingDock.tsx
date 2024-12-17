import { FloatingDock } from "../ui/Floating-dock";
import {
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Dashboard",
      icon: (
        <IconHome className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-900 dark:text-neutral-300 " />
      ),
      href: "/",
    },
    {
      title: "New Workplace",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/new-project",
    },

    {
      title: "GroupWork",
      icon: (
        <IconUsersGroup className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "",
    },
    {
      title: "Profile",
      icon: (
        <IconUser className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "/github",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock items={links} />
    </div>
  );
}
