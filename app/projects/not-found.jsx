import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import FooterSimple from "@/components/ui/footer-simple";
import { FolderX } from "lucide-react";

export const metadata = {
  title: "Project Not Found - Abdullah Saeed",
  description: "The requested project could not be found.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-[calc(100vh-160px)] pt-24">
        <div className="max-w-md text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 w-20 h-20 rounded-full flex items-center justify-center">
              <FolderX className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the project you're looking for. It might have been removed or doesn't exist.
          </p>
          <Button asChild>
            <Link href="/#Projects">
              Browse All Projects
            </Link>
          </Button>
        </div>
      </div>
      <FooterSimple />
    </>
  );
} 