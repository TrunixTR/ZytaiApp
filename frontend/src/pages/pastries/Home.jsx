import { useEffect, useState } from "react";

export default function Home() {
  const [pastries, setPastries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPastries = async () => {
      try {
        const response = await fetch("/api/pastries");

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setPastries(await response.json());
      } catch {
        setError("The menu could not be loaded. Please start the backend and try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPastries();
  }, []);

  return (
    <div className='min-h-screen bg-rose-50 text-stone-900'>
      <header className='bg-pink-300 px-5 py-14 text-center sm:px-8 sm:py-20'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-950'>SkyCity bakery</p>
        <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>Zytia's Pastries</h1>
        <h2 className='mx-auto mt-5 max-w-2xl text-xl font-medium sm:text-2xl'>Celebration cakes and luxury bakes, made to order</h2>
        <p className='mx-auto mt-3 max-w-xl text-sm leading-6 sm:text-base'>Elegant handmade cakes, cupcakes, muffins and biscuits baked fresh for your sweetest moments.</p>
        <a href='https://wa.me/27752304312?text=Hello%20there%20I%20would%20like%20to%20order!' target='_blank' rel='noreferrer'
          className='mt-7 inline-block rounded-full bg-green-400 px-6 py-3 font-semibold text-black shadow-md transition hover:bg-green-300'>Order on WhatsApp</a>
      </header>

      <main className='mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16'>
        <section className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-pink-700'>Made with care</p>
          <h2 className='mt-2 text-3xl font-bold sm:text-4xl'>A little sweetness for every occasion</h2>
          <p className='mt-5 leading-7 text-stone-600'>Baking is my passion. I specialise in modern, glam celebration cakes and small-batch treats baked fresh to order.</p>
          <p className='mt-3 leading-7 text-stone-600'>From a 21st birthday crown cake to signature gold-pearl cupcakes, every bake is designed around your theme and finished with love.</p>
        </section>

        <hr className='my-12 border-pink-200 sm:my-16' />

        <section>
          <div className='mb-7 flex items-end justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-pink-700'>Fresh from the oven</p>
              <h2 className='mt-1 text-3xl font-bold sm:text-4xl'>Our menu</h2>
            </div>
            <p className='hidden text-right text-sm text-stone-500 sm:block'>Small batches. Big joy.</p>
          </div>

          {isLoading && <p className='p-4 text-center'>Loading menu...</p>}
          {error && <p className='rounded-lg bg-red-50 p-4 text-center text-red-600'>{error}</p>}
          {!isLoading && !error && (
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {pastries.map((pastry) => (
                <article key={pastry.id} className='overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-pink-100 transition hover:-translate-y-1 hover:shadow-xl'>
                  <img className='aspect-[4/3] w-full object-cover' src={pastry.imageLink} alt={pastry.name} />
                  <div className='p-5'>
                    <h3 className='text-xl font-bold'>{pastry.name}</h3>
                    <p className='my-3 text-sm leading-6 text-stone-600'>{pastry.description}</p>
                    <p className='font-semibold text-pink-700'>Price: R{pastry.price}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className='bg-stone-950 px-5 py-10 text-center text-stone-200 sm:px-8'>
        <div className='mx-auto grid max-w-4xl gap-6 sm:grid-cols-2'>
          <div>
            <p className='font-semibold text-white'>Get in touch</p>
            <p className='mt-2 text-sm'>Contact: 0817503678</p>
            <p className='text-sm'>Email: zytiasgroup.com</p>
          </div>
          <div>
            <p className='font-semibold text-white'>Follow and order</p>
            <p className='mt-2 text-sm'>Instagram: @zytiasgroup</p>
            <p className='text-sm'>WhatsApp: <a className='text-pink-300 hover:text-pink-200' href='https://wa.me/27752304312?text=Hello%20there!' target='_blank' rel='noreferrer'>0752304312</a></p>
          </div>
        </div>
        <div className='mt-8 border-t border-stone-800 pt-5 text-sm text-stone-400'>
          <p>Established 2026 | Zytia's Pastries | SkyCity</p>
        </div>
      </footer>
    </div>
  );
}
