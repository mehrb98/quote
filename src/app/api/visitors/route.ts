import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/**
   * POST endpoint to increment visitor count
**/

export async function POST() {
   try {
      const visitor = await prisma.visitor.upsert({
         where: { id: 1 },
         update: { count: { increment: 1 } },
         create: { id: 1, count: 1 },
      })

      return NextResponse.json({ count: visitor.count })
   } catch (error) {
      console.error("Database error:", error)

      return NextResponse.json(
         { error: "Failed to update visitor count" }, 
         { status: 500 }
      )
   }
}

/**
   * GET endpoint to retrieve current visitor count
**/

export async function GET() {
   try {
      const visitor = await prisma.visitor.findUnique({
         where: { id: 1 },
      })

      return NextResponse.json({ count: visitor?.count || 0 })
   } catch (error) {
      console.error("Database error:", error)

      return NextResponse.json(
         { error: "Failed to fetch visitor count" }, 
         { status: 500 }
      )
   }
}
