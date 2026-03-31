"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<header className="w-full bg-background/80 backdrop-blur-sm border-b border-border">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link href="/" className="text-lg font-medium">IndiaExpo</Link>

						<nav className="hidden md:flex items-center gap-4">
							<Link href="#" className="px-2 py-1 text-sm hover:underline">Home</Link>
							<Link href="#about" className="px-2 py-1 text-sm hover:underline">About</Link>
							<Link href="#expo" className="px-2 py-1 text-sm hover:underline">Expo</Link>
							<Link href="#contact" className="px-2 py-1 text-sm hover:underline">Contact</Link>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="hidden md:block">
							<Button variant="outline" size="sm" asChild>
								<Link href="/tickets">Get Tickets</Link>
							</Button>
						</div>

						{/* Mobile menu button */}
						<button
							aria-label="Toggle menu"
							className="md:hidden inline-flex items-center justify-center p-2 rounded-none"
							onClick={() => setOpen((v) => !v)}
						>
							{!open ? (
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							) : (
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.18 }}
						className="md:hidden border-t border-border bg-background/95"
					>
						<div className="px-4 pt-3 pb-4">
							<div className="flex flex-col gap-2">
								<Link href="#" onClick={() => setOpen(false)} className="px-2 py-2">Home</Link>
								<Link href="#about" onClick={() => setOpen(false)} className="px-2 py-2">About</Link>
								<Link href="#expo" onClick={() => setOpen(false)} className="px-2 py-2">Expo</Link>
								<Link href="#contact" onClick={() => setOpen(false)} className="px-2 py-2">Contact</Link>

								<div className="pt-2">
									<Button variant="default" size="default" asChild>
										<Link href="/tickets" onClick={() => setOpen(false)}>Get Tickets</Link>
									</Button>
								</div>
							</div>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}
