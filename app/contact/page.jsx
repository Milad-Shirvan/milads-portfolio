"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Send, CheckCircle2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const formRef = useRef()
  const emailAddress = "milad.b.shirvan@gmail.com"

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // EmailJS credentials - all set with your actual values
    const serviceId = "service_3knzzcv"
    const templateId = "template_gn8ghyv"
    const publicKey = "Fw-AMNBW3NIc8soDo"

    // Log to confirm we're using the right credentials
    console.log("Sending email with:", { serviceId, templateId })

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text)
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          })
          setFormSubmitted(true)
        },
        (error) => {
          console.error("Failed to send email:", error)
          toast({
            title: "Error sending message",
            description: `${error.text || "Please try again or use the direct email link below."}`,
            variant: "destructive",
          })
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress).then(
      () => {
        setCopied(true)
        toast({
          title: "Email copied!",
          description: "Email address copied to clipboard.",
        })

        // Reset copied state after 2 seconds
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      },
      (err) => {
        console.error("Could not copy email: ", err)
        toast({
          title: "Error",
          description: "Could not copy email address. Please try again.",
          variant: "destructive",
        })
      },
    )
  }

  return (
    <main className="min-h-screen">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 tech-font">CONTACT</h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for part-time opportunities in tech or retail to gain practical experience
                alongside my studies. Feel free to reach out if you'd like to discuss potential collaborations.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{emailAddress}</span>
                    <button
                      onClick={copyEmailToClipboard}
                      className="ml-2 p-1 hover:bg-muted rounded-md transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground">Carlflormans gatan 4, Malmö</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">0729033626</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Social</h3>
                  <div className="space-y-2">
                    <Link
                      href="https://github.com/Milad-Shirvan"
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email option */}
              <div className="mt-8">
                <Button onClick={copyEmailToClipboard} className="glass-button w-full">
                  {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Email Copied!" : "Copy Email Address"}
                </Button>
              </div>
            </div>

            <div className="md:col-span-7">
              {formSubmitted ? (
                <div className="glass-card p-8 rounded-xl text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="h-16 w-16 text-swiss-red" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground mb-6">Thank you for your message. I'll get back to you soon.</p>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false)
                      formRef.current.reset()
                    }}
                    className="glass-button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6 glass-card p-6 rounded-xl">
                    <div className="space-y-2">
                      <label htmlFor="user_name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="user_name" name="user_name" placeholder="Your name" required className="rounded-lg" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="user_email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={6}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    {/* Hidden field to store recipient email */}
                    <input type="hidden" name="to_email" value={emailAddress} />

                    <div>
                      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto glass-button">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </>
              )}

              <div className="mt-6">
                <div className="text-sm text-muted-foreground">
                  <p>Prefer to email directly? Copy the email address above to contact me.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
