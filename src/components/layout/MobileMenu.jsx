'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function MobileMenu({ links, isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[199] bg-black/60 transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-72 z-[200] bg-black border-l border-white/10
        px-6 py-8 flex flex-col transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-lg mb-8 self-end"
        >
          <Icon icon="mdi:close" className="w-6 h-6" />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="text-lg font-semibold text-gray-300 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}