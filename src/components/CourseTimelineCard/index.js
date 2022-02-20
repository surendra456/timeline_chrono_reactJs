// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="items-container">
      <div className="name-time">
        <h1 className="card-head">{courseTitle}</h1>
        <div className="time-card">
          <AiFillClockCircle className="icon" />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list-container">
        {tagsList.map(each => (
          <p className="tag-item" key={each.id}>
            {each.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
