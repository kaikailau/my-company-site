"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if we're on the homepage
    const isHomePage = pathname === "/"

    // Set initial state based on whether we're on homepage or not
    setIsScrolled(!isHomePage)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        // Only set to false if we're on the homepage
        if (isHomePage) {
          setIsScrolled(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-40 bg-amber-500 flex items-center justify-center text-black font-bold rounded">
              时代玻璃
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-white hover:text-amber-400 transition-colors ${isActive("/") ? "text-amber-400" : ""}`}
            >
              首页
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-amber-400 transition-colors ${isActive("/about") ? "text-amber-400" : ""}`}
            >
              关于我们
            </Link>
            <Link
              href="/products"
              className={`text-white hover:text-amber-400 transition-colors ${isActive("/products") ? "text-amber-400" : ""}`}
            >
              产品展示
            </Link>
            <Link
              href="/workshop"
              className={`text-white hover:text-amber-400 transition-colors ${isActive("/workshop") ? "text-amber-400" : ""}`}
            >
              车间设备
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:text-amber-400 transition-colors ${isActive("/contact") ? "text-amber-400" : ""}`}
            >
              联系我们
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col text-white">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span>023-68433031</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-4 w-4 mr-2 text-amber-400" />
                <span>18696591661</span>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">在线咨询</Button>
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-white hover:text-amber-400 transition-colors py-2 ${isActive("/") ? "text-amber-400" : ""}`}
                onClick={closeMobileMenu}
              >
                首页
              </Link>
              <Link
                href="/about"
                className={`text-white hover:text-amber-400 transition-colors py-2 ${isActive("/about") ? "text-amber-400" : ""}`}
                onClick={closeMobileMenu}
              >
                关于我们
              </Link>
              <Link
                href="/products"
                className={`text-white hover:text-amber-400 transition-colors py-2 ${isActive("/products") ? "text-amber-400" : ""}`}
                onClick={closeMobileMenu}
              >
                产品展示
              </Link>
              <Link
                href="/workshop"
                className={`text-white hover:text-amber-400 transition-colors py-2 ${isActive("/workshop") ? "text-amber-400" : ""}`}
                onClick={closeMobileMenu}
              >
                车间设备
              </Link>
              <Link
                href="/contact"
                className={`text-white hover:text-amber-400 transition-colors py-2 ${isActive("/contact") ? "text-amber-400" : ""}`}
                onClick={closeMobileMenu}
              >
                联系我们
              </Link>

              <div className="pt-4 border-t border-gray-800">
                <div className="flex items-center text-white mb-2">
                  <Phone className="h-4 w-4 mr-2 text-amber-400" />
                  <span>023-68433031</span>
                </div>
                <div className="flex items-center text-white mb-4">
                  <Smartphone className="h-4 w-4 mr-2 text-amber-400" />
                  <span>18696591661</span>
                </div>
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">在线咨询</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
