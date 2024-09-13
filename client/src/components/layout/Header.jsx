import React, { Suspense, useState, lazy } from "react";
import "./Header.css";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { Backdrop, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchDialogue = lazy(() => import("../specific/SearchAnalogue.jsx"));
const NotificationDialogue = lazy(() => import("../specific/NotificationAnalogue.jsx"));
const NewGroupDialogue = lazy(() => import("../specific/NewGroupAnalogue.jsx"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);

  const handleMobile = () => setIsMobile(!isMobile);
  const handleSearch = () => setIsSearch(!isSearch);
  const handleNewGroup = () => setIsNewGroup(!isNewGroup);
  const handleNotification = () => setIsNotifications(!isNotifications);

  const navigate = useNavigate();
  const navigate_to_groups = () => navigate("/groups");

  return (
    <>
      <div className="app-bar">
        <div className="toolbar">
          <h1 className="title">Waffle</h1>
          <h1 className="title-center"></h1>
          <h1 className="title-icon">
            <IconBTN title="Menu" icon={<MenuIcon />} onClick={handleMobile} />
            <IconBTN title="Search" icon={<SearchIcon />} onClick={handleSearch} />
            <IconBTN title="Add" icon={<AddIcon />} onClick={handleNewGroup} />
            <IconBTN title="Groups" icon={<GroupIcon />} onClick={navigate_to_groups} />
            <IconBTN title="Notifications" icon={<NotificationsIcon />} onClick={handleNotification} />
            <IconBTN title="Logout" icon={<LogoutIcon />} />
          </h1>
        </div>
      </div>

      <Suspense fallback={<Backdrop open/>}>
        {isSearch && <SearchDialogue />}
      </Suspense>

      <Suspense fallback={<Backdrop open/>}>
        {isNewGroup && <NewGroupDialogue />}
      </Suspense>

      <Suspense fallback={<Backdrop open/>}>
        {isNotifications && <NotificationDialogue />}
      </Suspense>
    </>
  );
};

const IconBTN = ({ title, icon, onClick }) => (
  <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
);

export default Header;