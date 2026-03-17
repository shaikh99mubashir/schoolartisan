import type { ReactNode } from "react";
import {
  UserPlus, ArrowUpCircle, CreditCard, Percent, Tag, Receipt,
  Users, Search, FolderOpen, User, Wallet, ClipboardCheck,
  FileText, CalendarDays, BookOpenCheck, Award, LayoutGrid, BookOpen,
  UserCheck, Clock, Download, Library, BookPlus, BookCopy,
  Bus, Route, Home, MessageSquare, BarChart2, FileSpreadsheet,
  ClipboardList, Settings, CalendarRange, MessageCircle, Mail, Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Step {
  number: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
  imageBg: string;
  imageContent: ReactNode;
}

const iconPlaceholder = (Icon: LucideIcon, color: string, bgColor: string) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className={`w-24 h-24 rounded-2xl ${bgColor} flex items-center justify-center`}>
      <Icon size={48} color={color} />
    </div>
  </div>
);

const gradients = [
  "from-blue-100 via-blue-50 to-blue-200",
  "from-purple-100 via-purple-50 to-purple-200",
  "from-green-100 via-green-50 to-green-200",
  "from-orange-100 via-orange-50 to-orange-200",
  "from-pink-100 via-pink-50 to-pink-200",
  "from-cyan-100 via-cyan-50 to-cyan-200",
];

const stepData: { title: string; description: string; icon: LucideIcon; color: string; bgColor: string }[] = [
  {
    title: "Student Admission",
    description: "Powerful student admission form add 40+ records for student including previous school details. Add student siblings, RTE, IDs and multiple documents to maintain complete record in student profile.",
    icon: UserPlus, color: "#3b82f6", bgColor: "bg-blue-200",
  },
  {
    title: "Promote Students",
    description: "Promote student in next academic session based on pass/fail and continue/leaving school.",
    icon: ArrowUpCircle, color: "#9333ea", bgColor: "bg-purple-200",
  },
  {
    title: "Fees Collection",
    description: "Most advanced fees collection module available on envato market. Not just invoicing complete fees configuration including fees type, fees groups, fees master, fees fine, due date etc.",
    icon: CreditCard, color: "#16a34a", bgColor: "bg-green-200",
  },
  {
    title: "Fees Discount",
    description: "Create fees discount like staff child, sibling discount, early admission discount etc.",
    icon: Percent, color: "#ea580c", bgColor: "bg-orange-200",
  },
  {
    title: "Fees/Discount Allotment",
    description: "Fees and discount allotment on more than 5 different criteria. Allocate fees on whole class-section or on single student.",
    icon: Tag, color: "#ec4899", bgColor: "bg-pink-200",
  },
  {
    title: "Collect Fees",
    description: "State of the art collect fees page to give whole details of student fees standing.",
    icon: Receipt, color: "#0891b2", bgColor: "bg-cyan-200",
  },
  {
    title: "Add Siblings",
    description: "Smart school supports to add any no of siblings at time student admission. Parent can check their all children in one parent account.",
    icon: Users, color: "#3b82f6", bgColor: "bg-blue-200",
  },
  {
    title: "Search Students",
    description: "Search by Class-Section or any keyword like student name, admission no, father name, id no etc.",
    icon: Search, color: "#9333ea", bgColor: "bg-purple-200",
  },
  {
    title: "Student Categories",
    description: "Categories students in a class-section based on different criteria like caste, their skill ability etc.",
    icon: FolderOpen, color: "#16a34a", bgColor: "bg-green-200",
  },
  {
    title: "Profile System",
    description: "Edit profile settings as you wish.",
    icon: User, color: "#ea580c", bgColor: "bg-orange-200",
  },
  {
    title: "School Expense",
    description: "Record school expense like electricity bill, telephone bill, miscellaneous bill etc.",
    icon: Wallet, color: "#ec4899", bgColor: "bg-pink-200",
  },
  {
    title: "Student Attendance",
    description: "Manage student attendance smartly in few clicks. Get attendance report monthly class-section wise.",
    icon: ClipboardCheck, color: "#0891b2", bgColor: "bg-cyan-200",
  },
  {
    title: "Examination",
    description: "Complete examination management from exam create to exam schedule to marks entry to progress report (2.2.0) with grades.",
    icon: FileText, color: "#3b82f6", bgColor: "bg-blue-200",
  },
  {
    title: "Exam Schedule",
    description: "Schedule exams with start/end time, exam room, full marks and passing marks.",
    icon: CalendarDays, color: "#9333ea", bgColor: "bg-purple-200",
  },
  {
    title: "Marks Register",
    description: "Enter student marks for exam with exam attendance.",
    icon: BookOpenCheck, color: "#16a34a", bgColor: "bg-green-200",
  },
  {
    title: "Marks Grade",
    description: "Add marks range wise marks grade.",
    icon: Award, color: "#ea580c", bgColor: "bg-orange-200",
  },
  {
    title: "Class/Grade & Section",
    description: "Add any no of class/grade and add any no of sections at once.",
    icon: LayoutGrid, color: "#ec4899", bgColor: "bg-pink-200",
  },
  {
    title: "Subject",
    description: "Add subjects with subject code and select whether it is theory or practical subject.",
    icon: BookOpen, color: "#0891b2", bgColor: "bg-cyan-200",
  },
  {
    title: "Assign Subjects",
    description: "Assign subjects and subject teacher on a class-section.",
    icon: UserCheck, color: "#3b82f6", bgColor: "bg-blue-200",
  },
  {
    title: "Class Timetable",
    description: "Create subject wise class-section timetable for whole week with subject period start/end time and class room number.",
    icon: Clock, color: "#9333ea", bgColor: "bg-purple-200",
  },
  {
    title: "Download Center",
    description: "Manage downloadable content for students, teacher like syllabus, assignments, study material etc.",
    icon: Download, color: "#16a34a", bgColor: "bg-green-200",
  },
  {
    title: "Library Management",
    description: "Complete library management system with books add, members add, books issue/return.",
    icon: Library, color: "#ea580c", bgColor: "bg-orange-200",
  },
  {
    title: "Add Books in Library",
    description: "Manage books with complete books inventory including details like ISBN, author, publisher, rack number, quantity, price, postdate etc.",
    icon: BookPlus, color: "#ec4899", bgColor: "bg-pink-200",
  },
  {
    title: "Books Issue/Return",
    description: "Add Student/Teacher Member the issue/return books in one click.",
    icon: BookCopy, color: "#0891b2", bgColor: "bg-cyan-200",
  },
  {
    title: "School Transport",
    description: "Manage school vehicle/bus/van, routes, and driver details.",
    icon: Bus, color: "#3b82f6", bgColor: "bg-blue-200",
  },
  {
    title: "Transport Routes",
    description: "Manage bus routes by assigning vehicles and driver details.",
    icon: Route, color: "#9333ea", bgColor: "bg-purple-200",
  },
  {
    title: "Hostel",
    description: "Manage school hostel, hostel rooms with room types.",
    icon: Home, color: "#16a34a", bgColor: "bg-green-200",
  },
  {
    title: "Communicate",
    description: "Send messages to students, parent and teachers through notice board.",
    icon: MessageSquare, color: "#ea580c", bgColor: "bg-orange-200",
  },
  {
    title: "Student Report",
    description: "Get student report based on class-section, category, gender & RTE.",
    icon: BarChart2, color: "#ec4899", bgColor: "bg-pink-200",
  },
  {
    title: "Fees Statement Report",
    description: "Get one shot student fees statement report.",
    icon: FileSpreadsheet, color: "#0891b2", bgColor: "bg-cyan-200",
  },
  {
    title: "Exam Marks Report",
    description: "Get exam wise class-section marks report for every student with grand total, percent% and result.",
    icon: ClipboardList, color: "#3b82f6", bgColor: "bg-blue-200",
  },
  {
    title: "General Settings",
    description: "Add system general settings like school name, address, school code, current academic session, session start month, school logo etc.",
    icon: Settings, color: "#9333ea", bgColor: "bg-purple-200",
  },
  {
    title: "Academic Session",
    description: "Create unlimited academic session year wise.",
    icon: CalendarRange, color: "#16a34a", bgColor: "bg-green-200",
  },
  {
    title: "SMS Gateways",
    description: "Supports multiple sms gateways including Clickatell, Twilio and custom sms gateway to integrate any http based sms gateway.",
    icon: MessageCircle, color: "#ea580c", bgColor: "bg-orange-200",
  },
  {
    title: "Email Engines",
    description: "Use smtp or sendmail email engines to send emails for notification.",
    icon: Mail, color: "#ec4899", bgColor: "bg-pink-200",
  },
  {
    title: "Internet Payment Gateways",
    description: "Add PayPal account details to collect payment online from parent.",
    icon: Globe, color: "#0891b2", bgColor: "bg-cyan-200",
  },
];

export const allSteps: Step[] = stepData.map((item, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: item.title,
  description: item.description,
  imagePosition: i % 2 === 0 ? "right" : "left",
  imageBg: gradients[i % gradients.length],
  imageContent: iconPlaceholder(item.icon, item.color, item.bgColor),
}));
