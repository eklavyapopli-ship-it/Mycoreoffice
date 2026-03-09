"use client"
import { useState } from "react"

type FormData = {
  name: string
  email: string
  phone: string
  queryType: string
  message: string
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const interests = [
    "GST Compliance",
    "Business Compliance",
    "Mailing Address",
    "Desk Address for Registration",
    "Bank Account Registration",
    "Ecommerce Registration",
    "Transferring Address",
    "Need Help / Clarification",
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleInterest = (value: string) => {
    setFormData({ ...formData, queryType: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Submitting...")

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      setStatus("Submitted successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        queryType: "",
        message: "",
      })
    } catch (error) {
      setStatus("Submission failed. Try again.")
    }
  }

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* LEFT SECTION */}

        <div className="flex flex-col gap-8">
          <h1 className="text-4xl leading-snug font-medium">
            Let's talk on <br />
            something <span className="text-blue-600">great</span> <br />
            together
          </h1>

          <div className="space-y-4 text-lg">
            <p>📞 +918920743180=</p>
          </div>

          <div className="flex gap-4 text-white">
            <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">f</div>
            <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">t</div>
            <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">ig</div>
            <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">in</div>
          </div>
        </div>

        {/* RIGHT FORM */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-sm"
        >
          <p className="font-semibold text-gray-700">I'm interested in:</p>

          {/* INTEREST OPTIONS */}

          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleInterest(item)}
                className={`px-4 py-2 rounded-full border transition
                ${
                  formData.queryType === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-400 hover:border-blue-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* INPUT ROW */}

          <div className="grid grid-cols-2 gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border-b border-gray-400 p-2 outline-none"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile"
              required
              className="border-b border-gray-400 p-2 outline-none"
            />
          </div>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border-b border-gray-400 p-2 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Locations / Message"
            rows={3}
            className="border rounded-lg p-3 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-md tracking-wider hover:bg-blue-800 transition"
          >
            SEND MESSAGE
          </button>

          {status && (
            <p className="text-sm text-gray-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}