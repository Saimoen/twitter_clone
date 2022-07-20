import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="col-span-2 flex flex-col items-center pw-4 md:items-start">
      <img
        src="https://links.papareact.com/drq"
        className="m-3 h-10 w-10"
        alt="twitter icon"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        onClick={session ? signIn : signOut}
        Icon={UserIcon}
        title={session ? "Sign out" : "Sign In"}
      />

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};

export default Sidebar;
