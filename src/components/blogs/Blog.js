import Image from "next/image"
import Link from "next/link"
import _ from "lodash"

export default function Blog(props) {
   const { slug, frontmatter } = props
   return (
      <div className="max-w-[350px] h-[450px] shadow-lg rounded-lg bg-white dark:bg-slate-800 overflow-hidden">
         <Link href={`/blog/${slug}`}>
            <a className="block relative w-full h-[200px] cursor-pointer">
               <Image src={frontmatter.coverImage} className="rounded-t-lg object-contain" priority="true" layout="fill" alt={frontmatter.title} />
            </a>
         </Link>
         <div className="p-3 relative h-1/2">
            <Link href={`/blog/${slug}`}>
               <a className="text-[22px] dark:text-white font-semibold">{frontmatter.title}</a>
            </Link>
            <p className="dark:text-gray-400">{_.truncate(frontmatter.description, { length: 105 })}</p>
            <time className="absolute bottom-0 right-5 dark:text-white">{new Date(frontmatter.date).toLocaleString("th", { dateStyle: "long" })}</time>
         </div>
      </div>
   )
}