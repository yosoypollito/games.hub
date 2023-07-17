export default function SectionButton({ props, children }: { props?: React.ComponentProps<"button">; children: React.ReactNode }) {
  return (
    <button
      className="px-4 py-2 bg-light-blue text-black font-semibold rounded-lg shadow-sm hover:scale-105 transition-all dark:text-white dark:bg-red"
      {...props}>
      {children}
    </button>
  )
}