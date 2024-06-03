import InsightRoll from "@/src/components/About/InsightRoll"


const insights = [
  "20+ Projects Completed",
  "2+ Years of Freelancing",
  "99% Client Satisfaction",
  "Published 5 apps to Google Play Store",
  "Founder of BarberJet",
]

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  )
}
