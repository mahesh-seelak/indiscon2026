"use client";

import { useState, useCallback, memo, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
  isNew?: boolean;
}

interface NavItemProps {
  item: NavItem;
  isNew?: boolean;
  isActive: boolean;
  onClick: (title: string) => void;
  onNavigate: () => void;
}

interface MobileNavItemProps {
  item: NavItem;
  onNavigate: () => void;
}

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Authors",
    href: "/guidelines",
    items: [
      {
        title: "Call for Papers",
        href: "/guidelines",
      },
      /*  {
         title: "Special Sessions",
         href: "/callforpapers",
       },
       {
         title: "Camera Ready Instructions",
         href: "/camReady",
       },
       {
         title: "Final Schedule",
         href: "/tentativeSchedule",
       }, */
    ],
  },
  /*  {
     title: "WIE Special Session",
     href: "/wiespecialsession",
   }, */
  {
    title: "Committee",
    href: "#",
    items: [
      { title: "Advisory Committee", href: "/committee/international-advisory" },
      { title: "Executive Steering Committee", href: "/committee/executive-steering" },
      { title: "Technical Program Committee", href: "/committee/tpc" },
      { title: "Organizing Committee", href: "/committee/organizing" },
    ],
  },
  {
    title: "Speakers",
    href: "/speakers",
  },
  /*
 {
   title: "Partners",
   href: "/partners",
 },
 {
   title: "Travel",
   href: "/map",
 }, */
  /* {
    title:"Accomodation",
    href:"/accomodationDet",
    items: [
      {
        title: "Accomodation Details for Opted Participants",
        href: "/accOpt",
      },
      {
        title: "Accomodation Details ",
        href: "/accomodationDet",
      }
    
    ],
    isNew: true,
   
  }, */
];

const NavItem = memo<NavItemProps>(
  ({ item, isActive, onClick, onNavigate }) => {
    const hasDropdown = Boolean(item.items);
    const pathname = usePathname();
    const isCurrentPage = pathname === item.href;

    return (
      <motion.div
        className="relative group "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {hasDropdown ? (
          <button
            onClick={() => onClick(item.title)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center
    ${isActive ? "text-blue-600" : "text-gray-700"} 
    hover:text-blue-600 rounded-full hover:bg-blue-50 relative`}
            aria-expanded={isActive}
          >
            {item.title}
            {item.isNew && (
              <span className="text-xs text-red-500 absolute -top-1 -right-1">New</span>
            )}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""
                }`}
            />
          </button>
        ) : (
          <Link
            href={item.href}
            onClick={onNavigate}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center rounded-full relative
    ${isCurrentPage ? "text-blue-600 bg-blue-50" : "text-gray-700"} 
    hover:text-blue-600 hover:bg-blue-50`}
          >
            {item.title}
            {item.isNew && (
              <span className="text-xs text-red-500 absolute -top-1 -right-1">New</span>
            )}
          </Link>
        )}

        <AnimatePresence>
          {hasDropdown && isActive && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
            >
              <div className="py-2">
                {item.items?.map((subItem) => (
                  <motion.div
                    key={subItem.title}
                    whileHover={{ backgroundColor: "#EBF8FF", x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={subItem.href}
                      onClick={onNavigate}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 transition-all duration-300"
                    >
                      {subItem.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

NavItem.displayName = "NavItem";

const MobileNavItem = memo<MobileNavItemProps>(({ item, onNavigate }) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === item.href;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block px-4 py-2 rounded-full transition-all duration-300 relative
    ${isCurrentPage ? "text-blue-600 bg-blue-50" : "text-gray-700"}
    hover:bg-blue-50 hover:text-blue-600`}
      >
        {item.title}
        {item.isNew && (
          <span className="text-xs text-red-500 absolute top-0 right-0">New</span>
        )}
      </Link>
      {item.items && (
        <div className="ml-4 space-y-1 mt-2">
          {item.items.map((subItem) => (
            <motion.div
              key={subItem.title}
              whileHover={{ backgroundColor: "#EBF8FF", x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={subItem.href}
                onClick={onNavigate}
                className="block px-4 py-2 text-gray-500 rounded-full hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                {subItem.title}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
});

MobileNavItem.displayName = "MobileNavItem";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const handleNavigate = useCallback(() => {
    if (dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, []);

  const handleDropdownClick = useCallback(
    (title: string) => {
      setActiveDropdown(activeDropdown === title ? "" : title);
    },
    [activeDropdown]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="sticky top-0 z-50  bg-white/90 backdrop-blur-lg border-b border-gray-200 w-screen "
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link
            href="/"
            onClick={handleNavigate}
            className="flex-shrink-0 group"
          >
            <motion.div
              initial={{ scale: 2.0 }}
              whileHover={{ scale: 2.05 }}
              whileTap={{ scale: 1.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/logo2.png"
                alt="Conference Logo"
                width={80}      // reduced from 128
                height={32}     // reduced from 50
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex md:items-center">
            <motion.div
              className="bg-gray-50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {navigationItems
                .filter((item) => item.title !== "REGISTRATION")
                .map((item) => (
                  <NavItem
                    key={item.title}
                    item={item}
                    isActive={activeDropdown === item.title}
                    onClick={handleDropdownClick}
                    onNavigate={handleNavigate}
                  />
                ))}
            </motion.div>
          </div>

          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/*  <Link
                href="/registration"
                className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Register Now
              </Link> */}
            </motion.div>
          </div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-white overflow-hidden border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigationItems.map((item) => (
                <MobileNavItem
                  key={item.title}
                  item={item}
                  onNavigate={handleNavigate}
                />
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="mt-4 px-2"
              >
                {/* <Link
                  href="/registration"
                  className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={handleNavigate}
                >
                  Register Now
                </Link> */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
