// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="app-container">
      <h1 className="d-head">"MY JOURNEY OF CCBP 4.0"</h1>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
      >
        {timelineItemsList.map(each => renderCard(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
