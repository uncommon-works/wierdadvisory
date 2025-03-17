import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import MagneticWrapper from "@/components/ui/magnetic-wrapper"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

// Define types to match your existing PageProps
interface SegmentParams {
  slug: string
  [key: string]: string
}

interface PageProps {
  params: Promise<SegmentParams>
  searchParams?: Promise<string>
}

// Define the content directory path
const contentDirectory = path.join(process.cwd(), "src", "content")

async function getPost(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)

  try {
    const fileContent = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContent)
    return { data, content }
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir(contentDirectory)
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
      }))
  } catch {
    return []
  }
}

// Update generateMetadata to work with Promise params
export async function generateMetadata({
  params,
}: {
  params: Promise<SegmentParams>
}): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const post = await getPost(slug)

  if (!post) {
    return { title: "Case Study Not Found" }
  }

  return {
    title: post.data.title,
    description: post.data.description || "Case Study",
  }
}

// Update Page component to work with your PageProps interface
export default async function Page({ params }: PageProps) {
  // Await the params Promise to get the actual values
  const resolvedParams = await params
  const { slug } = resolvedParams
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="py-[12rem]">
      <div className="max-w-2xl mx-auto px-6 sm:px-0">
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">{post.data.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Render MDX content */}
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <MDXRemote source={post.content} />
        </article>

        {/* Call to action section */}
        <div className="flex flex-col items-start">
          <div className="w-full h-px bg-gray-200 mt-24 mb-12"></div>

          <h3 className="text-3xl">
            Feeling a Little Weird? <span className="font-bold">Let&apos;s talk.</span>
          </h3>
          <div className="flex flex-row gap-4">
            <MagneticWrapper>
              <Button asChild variant="default" className="mt-12">
                <Link href="/contact" className="flex flex-row space-x-1 items-center font-medium">
                  <p>Contact Us</p>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button asChild variant="outline" className="mt-12">
                <Link href="/case-studies" className="flex flex-row space-x-1 items-center font-medium">
                  <p>Back to All Case Studies</p>
                </Link>
              </Button>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}