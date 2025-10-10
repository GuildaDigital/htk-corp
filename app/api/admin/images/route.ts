import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const images = await prisma.image.findMany()
    return NextResponse.json(images)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 })
  }
}
