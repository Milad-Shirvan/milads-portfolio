"use client"

export default function StylizedPortrait() {
  return (
    <div className="w-full flex justify-center items-center">
      <img
        src="/profile.jpg"
        alt="Milad's Portrait"
        className="rounded-xl shadow-xl max-w-sm w-full h-auto"
      />
    </div>
  )
}
