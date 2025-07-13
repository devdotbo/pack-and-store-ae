"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Link2, Facebook, Twitter, Linkedin } from "lucide-react";

interface ShareButtonsProps {
  postUrl: string;
  postTitle: string;
}

export function ShareButtons({ postUrl }: ShareButtonsProps) {
  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      getUrl: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      getUrl: (url: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      getUrl: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex gap-2">
      {shareLinks.map((platform) => (
        <Button
          key={platform.name}
          variant="outline"
          size="icon"
          asChild
        >
          <Link
            href={platform.getUrl(postUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${platform.name}`}
          >
            <platform.icon className="h-4 w-4" />
          </Link>
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={() => navigator.clipboard.writeText(postUrl)}
        title="Copy link"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}