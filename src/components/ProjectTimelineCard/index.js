// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="title-name">
        <h1 className="head">{projectTitle}</h1>
        <div className="time-icon">
          <AiFillCalendar color="#171f46" />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
