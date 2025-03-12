import { createConnection } from "@/lib/database.jsx";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const offset = (page - 1) * limit;
    const db = await createConnection();
    const dataQuery = "SELECT * FROM employees LIMIT ? OFFSET ?";
    const countQuery = "SELECT COUNT(*) AS total FROM employees";
    const [data] = await db.query(dataQuery, [limit, offset]);
    const [[{ total }]] = await db.query(countQuery);
    return NextResponse.json({
      data,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log("error:", error);
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req) {
  try {
    const db = await createConnection();
    const body = await req.json();
    console.log("body:", body);

    const {
      firstName = "",
      lastName = "",
      mobile = "",
      email = "",
      dob = "",
      maritalStatus = "",
      gender = "",
      nationality = "",
      address = "",
      city = "",
      state = "",
      zipCode = "",
    } = body.personalData || {};

    const {
      employeeID = "",
      userName = "",
      employeeType = "",
      professionalemail = "",
      department = "",
      designation = "",
      workingDays = "",
      joiningDate = "",
      officeLocation = "",
    } = body.professionalData || {};

    const {
      accessemail = "",
      slackID = "",
      skypeID = "",
      githubID = "",
    } = body.accountAccessData || {};

    const {
      appointmentLetter = "",
      salarySlips = "",
      relivingLetter = "",
      experienceLetter = "",
    } = body.documentsData || {};

    const sql = `INSERT INTO employees 
      (image, first_name, last_name, phone, email, birth_date, marital_status, gender, nationality, address, city, state, zip_code,
       employee_id, username, employee_type, professional_email, department, designation, joining_date, working_day, office_location,
       access_email, slack_id, skype_id, github_id, appointment_letter, salary_slip, reliving_letter, experience_letter)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      "https://robohash.org/utdoloremquevoluptatibus.png?size=100x100&set=set1",
      firstName,
      lastName,
      mobile,
      email,
      dob,
      maritalStatus,
      gender,
      nationality,
      address,
      city,
      state,
      zipCode,
      employeeID,
      userName,
      employeeType,
      professionalemail,
      department,
      designation,
      joiningDate,
      workingDays,
      officeLocation,
      accessemail,
      slackID,
      skypeID,
      githubID,
      appointmentLetter,
      salarySlips,
      relivingLetter,
      experienceLetter,
    ];

    await db.query(sql, values);

    return NextResponse.json(
      { message: "Employee added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function GET(params) {

// }

export async function DELETE(req) {}

export async function PUT(req) {}
