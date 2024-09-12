export default function SectionTemplate({title, children}) {
    return <>
        <h1>{title}</h1>
        <div className="text-red-500">
        {children}
        </div>
    </>
}