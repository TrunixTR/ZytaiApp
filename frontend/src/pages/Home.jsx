import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Pastries & Cakes',
    text: 'Fresh bakes, celebration cakes, and sweet treats designed for every occasion.',
    accent: 'from-rose-300 to-pink-500',
    link: '/pastries',
    button: 'Explore pastries',
  },
  {
    title: 'Greener Pastures',
    text: 'Wellness-focused care, learning spaces, and community-first experiences.',
    accent: 'from-emerald-300 to-teal-500',
    link: '/greener-pastures',
    button: 'Visit greener pastures',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-slate-800">
      <header className="bg-[#173f35] text-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">Zytai&apos;s Group</p>
            <h1 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">Fresh. Warm. Thoughtful.</h1>
          </div>
          <Link
            to="/pastries"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#173f35]"
          >
            View menu
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f5d7a6] via-[#f8efe2] to-[#dff3ef] shadow-[0_20px_60px_rgba(23,63,53,0.12)]">
          <div className="grid items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
            <div>
              <p className="inline-flex rounded-full bg-[#173f35] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                Welcome home
              </p>
              <h2 className="mt-5 max-w-xl text-4xl font-black leading-none tracking-[-0.06em] text-[#173f35] sm:text-5xl lg:text-6xl">
                Beautiful choices for everyday life.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
                Discover sweet bakery moments and uplifting spaces designed to bring comfort, joy, and connection to your community.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/pastries"
                  className="rounded-full bg-[#e77853] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#d96a43]"
                >
                  Order pastries
                </Link>
                <Link
                  to="/greener-pastures"
                  className="rounded-full border-2 border-[#173f35] bg-white/70 px-6 py-3 text-sm font-bold text-[#173f35] transition hover:bg-[#173f35] hover:text-white"
                >
                  Explore the campus
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="flex -space-x-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#f3b54b] text-xs font-bold text-[#173f35]">Z</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#d9ebdb] text-xs font-bold text-[#173f35]">P</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#8ec5b0] text-xs font-bold text-[#173f35]">G</span>
                </div>
                <span>Built around joy, care, and community.</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-[#173f35] p-4 shadow-[0_25px_40px_rgba(23,63,53,0.25)]">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#f7efe3] via-[#fff7ef] to-[#dff3ef] p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-2xl bg-white/80 p-4 shadow-sm">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Popular</p>
                        <h3 className="mt-1 text-xl font-black text-[#173f35]">Signature cake</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3b54b] text-2xl">🍰</div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-[#fce4d5] p-4">
                        <div className="mb-3 text-3xl">🥐</div>
                        <p className="text-sm font-bold text-[#173f35]">Bakery</p>
                        <p className="mt-1 text-xs text-slate-600">Fresh pastries</p>
                      </div>
                      <div className="rounded-2xl bg-[#dff3ef] p-4">
                        <div className="mb-3 text-3xl">🌿</div>
                        <p className="text-sm font-bold text-[#173f35]">Wellbeing</p>
                        <p className="mt-1 text-xs text-slate-600">Community care</p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#173f35] p-4 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">Why people love us</p>
                      <p className="mt-3 text-base font-medium leading-6 text-slate-100">
                        Thoughtful service, delightful details, and memorable experiences from the first bite to the final smile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-4 bg-gradient-to-r ${feature.accent}`} />
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Collection</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Open now</span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-[#173f35] sm:text-3xl">{feature.title}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">{feature.text}</p>

                <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#173f35] px-4 py-2.5 text-sm font-bold text-white transition group-hover:bg-[#e77853]">
                  {feature.button}
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] bg-[#173f35] px-6 py-8 text-white shadow-[0_20px_40px_rgba(23,63,53,0.18)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">Our promise</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Warm service with memorable details.</h3>
            </div>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-black text-[#f3b54b]">Fresh</p>
                <p>Handmade daily</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#f3b54b]">Thoughtful</p>
                <p>Tailored to you</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#f3b54b]">Joyful</p>
                <p>Made to delight</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f7f3ea]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm text-slate-600 sm:flex-row sm:px-8">
          <p className="font-semibold text-[#173f35]">© 2026 Zytai&apos;s Group</p>
          <p>Fresh bakes, thoughtful spaces, and happy moments.</p>
        </div>
      </footer>
    </div>
  );
}
