export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden bg-[#f8f6ed] text-[#173f35]'>
      <header className='relative z-10 border-b border-[#173f35]/10 bg-[#f8f6ed]/95'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10'>
          <a href='#top' className='flex items-center gap-3' aria-label='Greenres Pastures home'>
            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[#f3b54b] text-xl text-[#173f35]'>GP</span>
            <span className='leading-none'><span className='block text-xl font-black tracking-[-0.04em]'>Greener</span><span className='block text-xs font-bold uppercase tracking-[0.28em] text-[#e77853]'>Pastures</span></span>
          </a>
          <nav className='hidden items-center gap-8 text-sm font-bold md:flex' aria-label='Main navigation'><a href='#about' className='transition-colors hover:text-[#e77853]'>Our approach</a><a href='#programs' className='transition-colors hover:text-[#e77853]'>Programs</a><a href='#day' className='transition-colors hover:text-[#e77853]'>A day with us</a></nav>
          <a href='#enquire' className='rounded-full bg-[#173f35] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#e77853]'>Book a visit</a>
        </div>
      </header>

      <main id='top'>
        <section className='relative isolate bg-[#ccecf0] px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20'>
          <div className='absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-[#f8cf70]/70 blur-[1px]' />
          <div className='absolute bottom-0 left-0 -z-10 h-20 w-full bg-[#9fca7b]' style={{ clipPath: 'ellipse(72% 70% at 25% 100%)' }} />
          <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20'>
            <div className='max-w-2xl'>
              <p className='mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-[#e77853]'><span className='h-px w-8 bg-[#e77853]' />Big beginnings happen here</p>
              <h1 className='max-w-xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-[#173f35] sm:text-7xl'>A little place for <span className='text-[#e77853]'>big wonder.</span></h1>
              <p className='mt-7 max-w-lg text-lg leading-8 text-[#315c51]'>A warm, playful preschool for little explorers from 3 months to 5 years, right in the heart of SkyCity.</p>
              <div className='mt-9 flex flex-wrap items-center gap-4'>
                <a href='#enquire' className='rounded-full bg-[#e77853] px-6 py-4 text-sm font-black text-white shadow-[0_8px_0_#c65c43] transition-transform hover:-translate-y-1'>Come say hello <span className='ml-2'>-&gt;</span></a>
                <a href='#about' className='rounded-full border-2 border-[#173f35]/20 px-6 py-3.5 text-sm font-black transition-colors hover:border-[#173f35]'>See what makes us special</a></div>
                <div className='mt-12 flex items-center gap-3 text-sm font-bold text-[#315c51]'><span className='flex -space-x-2'><span className='h-8 w-8 rounded-full border-2 border-[#ccecf0] bg-[#f3b54b]' /><span className='h-8 w-8 rounded-full border-2 border-[#ccecf0] bg-[#e77853]' /><span className='h-8 w-8 rounded-full border-2 border-[#ccecf0] bg-[#89b9a4]' /></span> A happy start for every family</div>
            </div>
            <div className='relative mx-auto w-full max-w-md lg:mr-8'>
              <div className='relative aspect-[0.92] overflow-hidden rounded-[45%_45%_18%_18%] border-8 border-white bg-[#f3b54b] shadow-[14px_18px_0_#173f35]'><div className='absolute inset-x-0 bottom-0 h-2/5 bg-[#89b9a4]' style={{ clipPath: 'ellipse(75% 68% at 45% 100%)' }} /><div className='absolute left-[17%] top-[26%] h-28 w-28 rounded-full bg-[#f8f6ed]/80' />
                <div className='absolute left-[30%] top-[33%] h-24 w-24 rounded-[45%] bg-[#e77853]' />
                <div className='absolute left-[39%] top-[29%] h-12 w-12 rounded-full border-[10px] border-[#173f35] bg-[#f3b54b]' />
                <div className='absolute right-[16%] top-[24%] h-24 w-24 rounded-full bg-[#ccecf0]' />
                <div className='absolute bottom-[13%] left-[16%] h-10 w-10 rounded-t-full bg-[#f3b54b]' />
                <div className='absolute bottom-[14%] right-[22%] h-16 w-10 rounded-t-full bg-[#e77853]' />
                <div className='absolute bottom-[8%] left-[44%] text-5xl'>✦</div>
            </div>
            <div className='absolute -bottom-5 -left-6 rounded-2xl bg-white px-5 py-4 text-sm font-black shadow-lg'><span className='mr-2 text-[#e77853]'>♥</span> Learn. Laugh. Grow.</div></div>
          </div>
        </section>

        <section id='about' className='mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28'>
          <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'>
            <div>
              <p className='text-sm font-black uppercase tracking-[0.22em] text-[#e77853]'>Our little philosophy</p>
              <h2 className='mt-4 max-w-md text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl'>Childhood is the <span className='text-[#e77853]'>main event.</span></h2>
              </div>
                <p className='max-w-xl text-lg leading-8 text-[#527267]'>At Greener Pastures, children are known, encouraged and trusted to follow their curiosity. We make space for muddy hands, loud laughter, quiet moments and the confidence that grows between them.</p>
              </div>
              <div className='mt-14 grid gap-4 sm:grid-cols-3'>
                <article className='rounded-3xl bg-[#e7f1dc] p-7'><span className='text-3xl'>✿</span>
                  <h3 className='mt-8 text-xl font-black'>Curious minds</h3>
                  <p className='mt-3 leading-7 text-[#527267]'>Open-ended play and real questions lead the way.</p>
                </article>
                <article className='rounded-3xl bg-[#fce4d5] p-7'><span className='text-3xl'>♡</span>
                  <h3 className='mt-8 text-xl font-black'>Kind hearts</h3>
                  <p className='mt-3 leading-7 text-[#527267]'>Small friendships become big lessons in belonging.</p>
                </article>
                <article className='rounded-3xl bg-[#dceff0] p-7'><span className='text-3xl'>☼</span>
                  <h3 className='mt-8 text-xl font-black'>Brave steps</h3>
                  <p className='mt-3 leading-7 text-[#527267]'>A steady, joyful base for growing independence.</p>
                </article>
                </div>
                </section>

        <section id='programs' className='bg-[#173f35] px-6 py-20 text-[#f8f6ed] lg:px-10 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
              <div>
                <p className='text-sm font-black uppercase tracking-[0.22em] text-[#f3b54b]'>Growing together</p>
                <h2 className='mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl'>A place for every stage.</h2>
              </div>
                <p className='max-w-xs leading-7 text-[#b7d1c1]'>Small groups, familiar faces and room to become wonderfully you.</p>
            </div>
                <div className='mt-14 grid gap-5 md:grid-cols-3'>
                  <article className='rounded-3xl bg-[#2b5b4d] p-7'>
                    <p className='text-sm font-bold text-[#f3b54b]'>06 months - 2 years</p>
                    <h3 className='mt-16 text-2xl font-black'>Nest &amp; Nurture</h3>
                    <p className='mt-3 leading-7 text-[#c5ddd0]'>Gentle routines, sensory play and close connections for our youngest learners.</p><span className='mt-8 block text-3xl text-[#f3b54b]'>~</span>
                  </article>
                  <article className='rounded-3xl bg-[#e77853] p-7'>
                    <p className='text-sm font-bold text-[#fff1df]'>2 - 3 years</p>
                    <h3 className='mt-16 text-2xl font-black'>Wonder Walkers</h3>
                    <p className='mt-3 leading-7 text-[#fff1df]'>A world of first friendships, messy making and “I can do it!” moments.</p>
                    <span className='mt-8 block text-3xl text-[#f8cf70]'>✦</span>
                  </article>
                  <article className='rounded-3xl bg-[#f3b54b] p-7 text-[#173f35]'>
                    <p className='text-sm font-bold text-[#315c51]'>3 - 5 years</p>
                    <h3 className='mt-16 text-2xl font-black'>Meadow Makers</h3>
                    <p className='mt-3 leading-7 text-[#315c51]'>Confident thinkers prepare for school through projects, play and discovery.</p>
                    <span className='mt-8 block text-3xl'>✿</span>
                  </article>
                </div>
              </div>
            </section>

            <section id='day' className='mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28'>
              <div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr]'>
                <div>
                  <p className='text-sm font-black uppercase tracking-[0.22em] text-[#e77853]'>A day at Greenres</p>
                  <h2 className='mt-4 max-w-md text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl'>Full of little <span className='text-[#e77853]'>adventures.</span></h2>
                  <p className='mt-6 max-w-md leading-8 text-[#527267]'>There is a gentle rhythm to our days, with plenty of room to follow the moment.</p>
                </div>
                <div className='divide-y divide-[#173f35]/10 border-y border-[#173f35]/10'>
                  <div className='flex items-center gap-6 py-5'>
                    <span className='w-20 text-sm font-black text-[#e77853]'>8:00</span>
                    <div>
                      <h3 className='font-black'>Welcome in</h3>
                      <p className='mt-1 text-sm text-[#527267]'>Warm hellos, free play and settling into the day.</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-6 py-5'>
                    <span className='w-20 text-sm font-black text-[#e77853]'>10:00</span>
                    <div>
                      <h3 className='font-black'>Make &amp; discover</h3>
                      <p className='mt-1 text-sm text-[#527267]'>Stories, songs, art, nature and hands-on projects.</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-6 py-5'>
                    <span className='w-20 text-sm font-black text-[#e77853]'>12:00</span>
                    <div>
                      <h3 className='font-black'>Slow down</h3>
                      <p className='mt-1 text-sm text-[#527267]'>A nourishing lunch followed by rest or calm time.</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-6 py-5'>
                    <span className='w-20 text-sm font-black text-[#e77853]'>15:00</span>
                    <div>
                      <h3 className='font-black'>Homeward bound</h3>
                      <p className='mt-1 text-sm text-[#527267]'>A final play, a story to share and a happy goodbye.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        <section id='enquire' className='relative overflow-hidden bg-[#f3b54b] px-6 py-20 lg:px-10 lg:py-24'>
          <div className='absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-[#f8cf70]' />
            <div className='relative mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-center'>
              <div>
                <p className='text-sm font-black uppercase tracking-[0.22em] text-[#315c51]'>Come grow with us</p>
                <h2 className='mt-4 max-w-xl text-4xl font-black tracking-[-0.05em] sm:text-6xl'>Your next chapter starts here.</h2>
                <p className='mt-5 max-w-lg text-lg leading-8 text-[#315c51]'>Visit our SkyCity home, meet the team and see the magic for yourself.</p>
              </div>
              <div className='flex flex-col gap-3 sm:flex-row lg:flex-col'>
                <a href='mailto:hello@greenrespastures.co' className='rounded-full bg-[#173f35] px-7 py-4 text-center text-sm font-black text-white transition-transform hover:-translate-y-1'>hello@greenrespastures.com</a>
                <a href='tel:+27752304312' className='rounded-full border-2 border-[#173f35] px-7 py-3.5 text-center text-sm font-black transition-colors hover:bg-[#f8cf70]'>075 230 4312</a>
              </div>
            </div>
          </section>
        </main>
        <footer className='bg-[#f8f6ed] px-6 py-8 lg:px-10'>
          <div className='mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#527267] sm:flex-row'>
            <p className='font-black text-[#173f35]'>Greenres Pastures</p>
            <p>Early learning &amp; care in SkyCity · 3 months to 5 years</p>
            <p>© 2026 Greenres Pastures</p>
          </div>
        </footer>
      </div>
    )
}
