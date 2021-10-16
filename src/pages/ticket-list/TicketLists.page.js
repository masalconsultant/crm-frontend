import React,{ useState, useEffect } from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import { PageBreadcrumb }  from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import {TicketTable} from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';






export const TicketLists = () => {
  const [str, setStr ] = useState("");
  const[dispTicket,setDispTicket]=useState(tickets);
   
  useEffect(() => {}, [str,dispTicket]);

    const handleOnchange = (e) => {
        const { value } = e.target;// here we took out the value
        console.log(value);
        setStr(value);
        searchTicket(value);// we called search ticket and passed the value into it
 };

 const searchTicket = (sttr) => {
     const displayTickets = tickets.filter((row) => 
     row.subject.toLowerCase().includes(sttr.toLowerCase())
     );

     setDispTicket(displayTickets);
 };

    return (
       <Container>
           <Row>
               <Col>
                 <PageBreadcrumb page="Ticket Lists" />
               </Col>
            </Row>
           <Row className="mt-4">
               <Col>
                  <Button variant="info">Add new Ticket</Button>
               </Col>

               <Col className="text-right">
                   <SearchForm handleOnchange= {handleOnchange} str={str} />
               </Col>
              
           </Row>
           <hr />
           <Row>
               <Col>
                 <TicketTable tickets ={dispTicket} />
               </Col>
            </Row>
        
       </Container>
    );
};
