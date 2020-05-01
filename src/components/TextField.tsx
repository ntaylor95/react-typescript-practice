import React, { useState, useRef } from 'react';
import { Book } from '../data/book';
import { Ticket } from '../data/ticket';

const TextField: React.FC<Book> = ({title}) => {
    const [count, setCount] = useState<number | null | undefined | string>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const ticketDate: Date = new Date(2020, 3, 10);

const networkSetup: Ticket = {
    title: "Setup Network",
    name: "Jan",
    dateCreated: ticketDate
}

const awsSetup: Ticket = {
    title: "AWS Setup",
    name: "Jan",
    dateCreated: ticketDate
}

const externaConfigSetup: Ticket = {
    title: "External Config Setup",
    name: "Jan",
    dateCreated: ticketDate,
    subTickets: [networkSetup, awsSetup]
}

const jiraSetup: Ticket = {
    title: 'Jira Setup',
    name: "Jan",
    dateCreated: ticketDate
}

const companySetup: Ticket = {
    title: 'Company Setup',
    name: "Jan",
    dateCreated: ticketDate,
    subTickets: [jiraSetup, externaConfigSetup]
}
    
    const handleChange = (e:any) => {
        console.log(e.target.value);
        setCount(parseInt(e.target.value));
    }

    const myArr: Ticket[] = [];
    const todaysDate: Date = new Date();

    const checkOverdue = (ticket:Ticket) => {
        if (ticket.dateCreated < todaysDate) {
            myArr.push(ticket);
        }
    }

    const test = (ticket: Ticket) => {
        checkOverdue(ticket);

        if (ticket.subTickets) {
            for (var i=0; i<ticket.subTickets.length; i++) {
                test(ticket.subTickets[i]);
            }
        }
    }

    test(companySetup);

    const overdueTickets = myArr.map((ticket, i) => {
        return (
            <h4 key={i}>{`${ticket.title} is overdue`}</h4>
        )
    })

    return (
        <div ref={divRef}>
            <div>
                { overdueTickets }
            </div>
            <h1>{title}</h1>
            <h2>{`The total number is books is ${count}`}</h2>
            <input ref={inputRef} onChange={handleChange} className="input-field text" type='text'></input>
        </div>
    )
}

export default TextField;