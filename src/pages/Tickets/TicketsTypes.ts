export type Ticket = {
  id: string
  title: string
  status: "OPEN"| "IN_PROGRESS" | "PENDING" | "RESOLVED" |"CLOSED"
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  client: string
}

export const PRIORITIES = [
    "LOW", "MEDIUM" ,"HIGH", "CRITICAL"
]

export const STATUS = [
    "OPEN", "IN_PROGRESS" ,  "PENDING" ,  "RESOLVED" , "CLOSED"
]