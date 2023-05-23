import React from 'react'
import CardContainer from './CardContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup'
const EntityCardCount = ({title, amount, icon, bg_color}) => {
  return (
    <CardContainer>
        <div className="flex items-center space-x-3 ml-2">
            <span className={`h-14 w-14 flex justify-center items-center rounded-full bg-green-700 bg-${bg_color}-700`}> <FontAwesomeIcon icon={icon} /> </span>
            <div className="">
                <p className="text-xl font-light"><CountUp end={amount} duration={5} /></p>
                <p className="text-sm">{title}</p>
            </div>
        </div>
    </CardContainer>
  )
}

export default EntityCardCount