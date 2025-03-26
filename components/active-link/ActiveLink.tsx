
interface ActiveLinkProps {
  text: string
  path: string
  children: React.ReactNode
  className?: string
}

export const ActiveLink = ({ text, path, children, className }: ActiveLinkProps) => {
  return (
    <>
      <div className="text-3xl"> Active Link </div>
    </>
  );
}