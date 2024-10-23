import React from 'react';

interface TicketPageProps {
  params: {
    id: string
  }
}

const TicketPage: React.FC<TicketPageProps> = ({ params }) => {
  return <div>TicketPage ${params.id}</div>
}

export default TicketPage;