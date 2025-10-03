import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const refreshPage = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setIsOpen(false);
    } else {
      window.location.reload();
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Services", id: "services" }
  ];

  const pageLinks = [
    { label: "Blogs", to: "/blogs" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/70 via-white/80 to-white/70 backdrop-blur-xl border-b border-primary/10 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={refreshPage}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-primary bg-clip-text text-transparent hover:from-primary hover:to-gray-800 transition-all duration-300 font-sans">
              Kishore <span className="font-extrabold">Foam Agencies</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item.id)}
                  className="relative text-foreground hover:text-primary px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-primary/5 backdrop-blur-sm group font-sans"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="relative text-foreground hover:text-primary px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-primary/5 backdrop-blur-sm group font-sans"
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
              <Button
                className="ml-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none rounded-xl px-6 py-2 font-semibold font-sans"
                onClick={() => handleSectionNavigation("contact")}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-white/20 backdrop-blur-sm focus:outline-none transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6 bg-white/95 backdrop-blur-xl border-t border-primary/10 rounded-b-2xl shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionNavigation(item.id)}
                  className="block text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 backdrop-blur-sm font-sans"
                >
                  {item.label}
                </button>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 backdrop-blur-sm font-sans"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="w-full mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl py-3 font-semibold font-sans"
                onClick={() => handleSectionNavigation("contact")}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
