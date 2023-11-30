import { IconType } from "react-icons";
import { FiHome, FiInfo, FiShoppingBag } from "react-icons/fi";
import { IoDocumentText } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";

export const menuItems: { name: string, path: string, icon: IconType }[] = [
    {
        name: "Home",
        path: "/",
        icon: FiHome
    },
    {
        name: "O nas",
        path: "/about",
        icon: FiInfo
    },
    {
        name: "Oferta",
        path: "/offer",
        icon: FiShoppingBag
    },
    {
        name: "Portfolio",
        path: "/certificates",
        icon: IoDocumentText
    },
    {
        name: "Kontakt",
        path: "/contact",
        icon: MdPermContactCalendar
    }
]