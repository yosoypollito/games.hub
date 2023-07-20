export default function FormGroup({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col w-full gap-1">
      {children}
    </div>
  )
}