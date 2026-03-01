'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Container from '../Shared/Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Necə işləyir', href: '/#how-it-works' },
    { label: 'Öyrən',        href: '/ai-assistant' },
    { label: 'Bazar',        href: '#' },
    { label: 'Niyə Sİ',     href: '/#why-ai' },
    { label: 'Haqqımızda',  href: '/about-us' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        .eduvest-nav { font-family: 'Inter', sans-serif; }
        body.menu-open { overflow: hidden; }
      `}</style>

      <nav className="eduvest-nav absolute top-0 left-0 right-0 z-50 w-full">
        <Container className="flex items-center justify-between py-7">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/svg/Logo.svg" alt="Eduvest Logo" width={39} height={24} priority />
            <span style={{ color: '#fff', fontSize: '22.6px', fontWeight: 600, letterSpacing: '-0.1px' }}>
              eduvest
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10 list-none m-0 p-2.5 text-white">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="transition-colors duration-200 font-medium text-white hover:text-blue-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <Link
              href="#"
              style={{ color: 'rgba(255,255,255,1)', fontSize: '16px', fontWeight: 400, textDecoration: 'none', letterSpacing: '-0.1px', transition: 'color 0.2s' }}
            >
              Login
            </Link>
            <Link
              href="#"
              className="flex items-center gap-[7px] select-none"
              style={{ padding: '8px 18px', borderRadius: '100px', border: '1.5px solid rgba(255,255,255,0.30)', background: '#fff', color: '#000000', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.15px', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s, transform 0.15s', whiteSpace: 'nowrap' }}
            >
              Öyrənməyə başla
              <Image src="/svg/storm.svg" alt="Storm" width={12.62} height={23} priority />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 flex-shrink-0 bg-transparent border-none cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menyunu aç"
          >
            <span className="block w-6 bg-white" style={{ height: '1.5px', transition: 'transform 0.3s', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span className="block w-6 bg-white" style={{ height: '1.5px', transition: 'opacity 0.3s', opacity: open ? 0 : 1 }} />
            <span className="block w-6 bg-white" style={{ height: '1.5px', transition: 'transform 0.3s', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>

        </Container>
      </nav>

      {/* ── MOBILE MENU ── */}

      {/* Overlay — boşluğa tıklayanda bağlanır */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 flex flex-col px-8 pb-8 gap-6"
        style={{
          paddingTop: '88px',
          background: 'rgba(5,10,35,0.97)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontFamily: 'Inter, sans-serif',
          pointerEvents: open ? 'all' : 'none',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          // Scroll yox
          overflowY: 'hidden',
          maxHeight: '100dvh',
        }}
      >
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="font-medium text-white hover:text-blue-400 transition-colors duration-200"
            style={{ fontSize: '17px' }}
          >
            {label}
          </Link>
        ))}

        <div
          className="flex flex-col gap-4 mt-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '24px' }}
        >
          <Link
            href="#"
            onClick={() => setOpen(false)}
            style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 400, textDecoration: 'none' }}
          >
            Login
          </Link>
          <Link
            href="/ai-assistant"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-[7px] select-none"
            style={{ padding: '10px 18px', borderRadius: '100px', border: '1.5px solid rgba(255,255,255,0.30)', background: '#fff', color: '#000', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.15px', textDecoration: 'none' }}
          >
            Öyrənməyə başla
            <Image src="/svg/storm.svg" alt="Storm" width={12.62} height={23} priority />
          </Link>
        </div>
      </div>
    </>
  )
}