import { createStore } from 'redux'
import { projects } from '../mock/projects.json'
import { amdocsProductsList, developmentTechnologiesList, admins } from '../mock/general.json'

const projectsReducer = (
  state = {
    projects: projects.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)),
    amdocsProductsList: amdocsProductsList,
    developmentTechnologiesList: developmentTechnologiesList,
    admins: admins.length > 0 && admins.map(({ password, ...other }) => other),
    // admins: admins.length > 0 && admins,
    logedInUser: { _id: 2, name: 'Nir', isMaster: true },
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
