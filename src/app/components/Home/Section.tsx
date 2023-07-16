export default function HomeSection({ children }: { children: React.ReactNode }) {

  return (
    <section className="flex flex-col gap-4 py-20 max-w-xl md:max-w-2xl">
      {children}
    </section>
  )
}