import React from 'react';

interface StatusDisplayProps {
  
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({}) => {
  return <span className='inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200'>
    done
  </span>
}

export default StatusDisplay