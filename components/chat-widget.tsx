"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User, Clock, Phone, Mail, Minimize2 } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const predefinedQuestions = [
  "What services does Nimblaze offer?",
  "How can I get started?",
  "What are your pricing options?",
  "Do you offer 24/7 support?",
  "Can I schedule a consultation?",
]

const botResponses: Record<string, string> = {
  "what services does nimblaze offer":
    "Nimblaze offers comprehensive technology solutions including Cloud Infrastructure, AI & Machine Learning, Data Management, Cybersecurity, Custom Development, and Business Intelligence. We help businesses transform digitally with cutting-edge technology.",
  "how can i get started":
    "Getting started is easy! You can book a free consultation, start a trial, or contact our team directly. We'll assess your needs and create a customized solution plan for your business.",
  "what are your pricing options":
    "Our pricing is tailored to each client's specific needs and scale. We offer flexible packages from startup-friendly options to enterprise solutions. Contact us for a personalized quote based on your requirements.",
  "do you offer 24/7 support":
    "Yes! We provide 24/7 monitoring and emergency support for all our clients. Our expert team is always available to ensure your systems run smoothly and any issues are resolved quickly.",
  "can i schedule a consultation":
    "You can schedule a free consultation with our experts. We'll discuss your business needs, challenges, and how our solutions can help you achieve your goals. Would you like me to connect you with our scheduling team?",
  hello:
    "Hello! Welcome to Nimblaze. I'm here to help you learn about our technology solutions and answer any questions you might have. How can I assist you today?",
  hi: "Hi there! Thanks for visiting Nimblaze. I'm your virtual assistant and I'm here to help with any questions about our services, pricing, or how we can help transform your business. What would you like to know?",
  help: "I'm here to help! You can ask me about our services, pricing, support options, or how to get started with Nimblaze. You can also use the quick questions below or type your own question.",
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Nimblaze. I'm here to help you with any questions about our technology solutions. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase().trim()

    // Check for exact matches first
    if (botResponses[normalizedMessage]) {
      return botResponses[normalizedMessage]
    }

    // Check for partial matches
    for (const [key, response] of Object.entries(botResponses)) {
      if (normalizedMessage.includes(key) || key.includes(normalizedMessage)) {
        return response
      }
    }

    // Default response
    return "Thank you for your question! For detailed information about that topic, I'd recommend speaking with one of our specialists. You can schedule a consultation or contact us directly at hello@nimblaze.com or +1 (555) 123-4567."
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(text),
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Chat with us
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-80 sm:w-96 border-border shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[500px]"}`}
      >
        <CardHeader className="p-4 bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Nimblaze Support</CardTitle>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Online now
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <div className="flex items-center gap-1 mt-1 opacity-70">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{formatTime(message.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-border">
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {predefinedQuestions.slice(0, 3).map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage(inputValue)
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  size="sm"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Contact Options */}
              <div className="flex justify-center gap-4 mt-3 pt-3 border-t border-border">
                <Button variant="ghost" size="sm" className="text-xs">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  <Mail className="h-3 w-3 mr-1" />
                  Email
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
