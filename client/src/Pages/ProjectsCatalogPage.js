import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Grid, Container, Box } from '@mui/material'
import ProjectCardComponent from '../Components/ProjectCardComponent'

import PageLoader from '../Components/Common/PageLoader'
import HeaderComponent from '../Components/HeaderComponent'

function ProjectsCatalogPage({ themeSwitchHandler, isDarkTheme }) {
  const projects = useSelector((state) => state.projects)

  const [loading, setLoading] = useState(true)
  const [searchProject, setSearchProject] = useState(null)

  useEffect(() => {
    if (projects.length) {
      setLoading(false)
    }
  }, [projects])

  function changeCurrentProjectOnSearch(projectName) {
    if (projectName) {
      let newSearchProject = projects?.find((p) => {
        return p.name.toUpperCase() === projectName.toUpperCase()
      })
      setSearchProject(newSearchProject)
    } else {
      setSearchProject(null)
    }
  }

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <HeaderComponent
            projects={projects}
            searchHandler={changeCurrentProjectOnSearch}
            themeSwitchHandler={themeSwitchHandler}
            isDarkTheme={isDarkTheme}
          />
          <Container>
            <Box mt={5} mb={0}>
              <Grid container spacing={2} justifyContent="center">
                {projects &&
                  !searchProject &&
                  projects.map((project) => {
                    return (
                      <Grid item xs={12} sm={4} md={3} key={project.name}>
                        <ProjectCardComponent
                          imgUrl={project.imgUrl}
                          description={project.description}
                          name={project.name.toUpperCase()}
                        />
                      </Grid>
                    )
                  })}
                {searchProject && (
                  <Grid item xs={12} sm={6} md={3}>
                    <ProjectCardComponent
                      imgUrl={searchProject.imgUrl}
                      description={searchProject.description}
                      name={searchProject.name.toUpperCase()}
                    />
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </>
  )
}

export default ProjectsCatalogPage
