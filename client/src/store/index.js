import { createStore } from 'redux'
import { projects } from '../mock/projects.json'
import { amdocsProductsList, developmentTechnologiesList, admins } from '../mock/general.json'

const projectsReducer = (
  state = {
    projects: projects,
    amdocsProductsList: amdocsProductsList,
    developmentTechnologiesList: developmentTechnologiesList,
    admins: admins.length > 0 && admins.map(({ password, ...other }) => other),
    logedInUser: { _id: 1, name: 'Nir', isMaster: true },
  },
  action
) => {
  return state
}

const store = createStore(
  projectsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
