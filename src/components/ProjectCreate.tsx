import React, { ReactElement} from "react"
import ProjectForm from './ProjectForm'

export default function ProjectCreate(): ReactElement {
  return(
    <ProjectForm
      title=""
      image=""
      status="on-hold"
      progress={0}
      times={[{title: '', begin: '', end: ''}]}
      isEdit={false}
    />
  )
}
