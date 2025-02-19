import { NextResponse } from "next/server";
import pool from "../../utils/postgres";

export async function GET() {
  try {
    // Ensure a query is executed to test connection
    await pool.query("SELECT * FROM page_schemas");
    return NextResponse.json({
      message: "Database connection established successfully",
    });
  } catch (error) {
    console.error("Database connection error:", error); // Log the error to help debugging
    return NextResponse.json(
      { message: "Failed to connect to database", error: error.message },
      { status: 500 }
    );
  }
}
//http://localhost:3000/api/check-connection
