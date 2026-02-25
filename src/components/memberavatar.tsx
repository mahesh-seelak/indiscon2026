"use client"

import Image from "next/image"

type Props = {
name: string
imageUrl?: string
}

export default function MemberAvatar({ name, imageUrl }: Props) {

// if no image provided → use default avatar
const src = imageUrl && imageUrl.trim() !== ""
? imageUrl
: "/avatar.jpeg"

return ( <Image
   src={src}
   alt={name}
   width={160}
   height={160}
   className="h-40 w-40 rounded-full object-cover border"
 />
)
}