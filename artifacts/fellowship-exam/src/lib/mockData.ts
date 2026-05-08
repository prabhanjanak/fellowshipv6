/**
 * COMPREHENSIVE MOCK DATA FOR FELLOWSHIP PORTAL TESTING
 * Includes: Dashboard, Programs, Units, Users, Forms, Candidates, Exams, 
 * Interviews, Seat Matrix, Rankings, Allocations, Payments, Batches, Reports, Templates.
 */

export const MOCK_DATA = {
  "/dashboard/summary": {
    candidates: 124,
    programs: 8,
    units: 12,
    activeExams: 3,
    allocated: 45,
    pendingReview: 12,
  },

  "/programs": [
    { id: 101, name: "Vitreo-Retina Fellowship", code: "VR-2026", academicYear: "2026-27", description: "Comprehensive training in surgical and medical retina." },
    { id: 102, name: "Cornea & Anterior Segment", code: "CAS-2026", academicYear: "2026-27", description: "Advanced training in corneal transplants and refractive surgery." },
    { id: 103, name: "Pediatric Ophthalmology", code: "PEDI-2026", academicYear: "2026-27", description: "Focus on pediatric cataracts, strabismus, and retinopathy of prematurity." },
    { id: 104, name: "Glaucoma Management", code: "GLAU-2026", academicYear: "2026-27", description: "Specialized training in surgical and medical glaucoma care." },
  ],

  "/units": [
    { id: 1, name: "Sankara Eye Hospital - Bangalore", city: "Bangalore" },
    { id: 2, name: "Sankara Eye Hospital - Coimbatore", city: "Coimbatore" },
    { id: 3, name: "Sankara Eye Hospital - Shimoga", city: "Shimoga" },
    { id: 4, name: "Sankara Eye Hospital - Hyderabad", city: "Hyderabad" },
  ],

  "/users": [
    { id: 1, fullName: "Admin User", email: "admin@sankaraeye.com", role: "super_admin" },
    { id: 2, fullName: "Dr. Arvind Kumar", email: "arvind@sankaraeye.com", role: "doctor", unitId: 1 },
    { id: 3, fullName: "Dr. Meera Nair", email: "meera@sankaraeye.com", role: "doctor", unitId: 2 },
    { id: 4, fullName: "Staff Coordinator", email: "staff@sankaraeye.com", role: "program_admin" },
  ],

  "/application-forms": [
    { id: 501, title: "Fellowship Admission July 2026", token: "JUL2026", deadline: "2026-06-30", isActive: true },
    { id: 502, title: "Surgical Training Workshop", token: "SURG2026", deadline: "2026-08-15", isActive: true },
  ],

  "/candidates": [
    { id: 1001, fullName: "Rahul Sharma", candidateCode: "C001", status: "allocated", email: "rahul@test.com", phone: "9876543210" },
    { id: 1002, fullName: "Ananya Iyer", candidateCode: "C002", status: "interview_completed", email: "ananya@test.com", phone: "9876543211" },
    { id: 1003, fullName: "Vikram Seth", candidateCode: "C003", status: "pending", email: "vikram@test.com", phone: "9876543212" },
    { id: 1004, fullName: "Priya Das", candidateCode: "C004", status: "approved", email: "priya@test.com", phone: "9876543213" },
  ],

  "/exams": [
    { id: 201, title: "General Ophthalmology Entrance", kind: "Entrance", durationMinutes: 60, totalQuestions: 50, active: true },
    { id: 202, title: "Retina Specialization Quiz", kind: "Speciality", durationMinutes: 30, totalQuestions: 20, active: true },
  ],

  "/display/live": [
    {
      panelId: 1,
      panelName: "Retina Selection Panel",
      roomNumber: "101",
      isActive: true,
      current: { candidateCode: "C001", calledAt: new Date().toISOString() },
      nextQueue: [{ candidateCode: "C002" }, { candidateCode: "C005" }]
    },
    {
      panelId: 2,
      panelName: "Cornea Interview Room",
      roomNumber: "102",
      isActive: true,
      current: { candidateCode: "C003", calledAt: new Date().toISOString() },
      nextQueue: [{ candidateCode: "C004" }, { candidateCode: "C006" }]
    }
  ],

  "/seat-matrix": {
    units: ["Bangalore", "Coimbatore", "Shimoga", "Hyderabad"],
    rows: [
      { speciality: "Vitreo-Retina", seats: { "Bangalore": { total: 4, allocated: 2 }, "Coimbatore": { total: 2, allocated: 1 } }, total: 6, totalAllocated: 3 },
      { speciality: "Cornea", seats: { "Bangalore": { total: 3, allocated: 3 }, "Shimoga": { total: 2, allocated: 0 } }, total: 5, totalAllocated: 3 },
    ],
    source: "db",
    interviewSchedule: [],
    inductionDates: []
  },

  "/rankings": [
    { id: 1, candidateName: "Rahul Sharma", score: 92, rank: 1, status: "allocated" },
    { id: 2, candidateName: "Ananya Iyer", score: 88, rank: 2, status: "waitlisted" },
  ],

  "/allocations": [
    { id: 1, candidateName: "Rahul Sharma", programName: "Vitreo-Retina", unitName: "Bangalore", status: "SELECTED" },
  ],

  "/payments": [
    { id: 1, candidateName: "Rahul Sharma", amount: 2500, status: "captured", date: "2026-05-01" },
    { id: 2, candidateName: "Ananya Iyer", amount: 2500, status: "captured", date: "2026-05-02" },
  ],

  "/batches": [
    { id: 1, name: "JUL-2026-MAIN", academicYear: "2026-27", isActive: true },
  ],

  "/settings/email": {
    enabled: true,
    host: "smtp.mockserver.com",
    port: 587,
    user: "mock@sankaraeye.com",
    fromName: "Mock Admissions",
    fromEmail: "mock@sankaraeye.com",
    useSsl: false
  },

  "/templates": [
    { id: 1, name: "Interview Call Letter", type: "call_letter", content: "Dear {{FULL_NAME}}, you are invited..." },
    { id: 2, name: "Admission Offer", type: "offer_letter", content: "Congratulations {{FULL_NAME}}!" },
  ],

  "/reports/summary": {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      { label: "Applications", data: [45, 52, 68, 85, 124] }
    ]
  }
};
