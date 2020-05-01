export interface Ticket {
    title: string,
    name: string,
    dateCreated: Date,
    subTickets?: Ticket[]
}
