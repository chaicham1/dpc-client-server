import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Grid, Container, Box } from '@mui/material'
import ProjectCardComponent from '../Components/ProjectCardComponent'

import PageLoader from '../Components/Common/PageLoader'
import HeaderWithHamburgerComponent from '../Components/HeaderWithHamburgerComponent'

function ProjectsCatalogPage({ themeSwitchHandler, isDarkTheme }) {
  const projects = useSelector((state) => state.projects)

  const [loading, setLoading] = useState(true)
  const [searchProject, setSearchProject] = useState(null)

  useEffect(() => {
    if (projects.length > 0) {
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
          <HeaderWithHamburgerComponent
            projects={projects}
            searchHandler={changeCurrentProjectOnSearch}
            themeSwitchHandler={themeSwitchHandler}
            isDarkTheme={isDarkTheme}
          />
          <Container>
            <Box pt={5} mb={0} minHeight={'100vh'}>
              <Grid container spacing={2} justifyContent="center">
                {projects &&
                  !searchProject &&
                  projects.map((project) => {
                    return (
                      <Grid item xs={6} sm={4} md={3} key={project.name}>
                        <ProjectCardComponent
                          imgUrl={project.imgUrl}
                          description={project.description}
                          name={project.name.toUpperCase()}
                        />
                      </Grid>
                    )
                  })}
                {searchProject && (
                  <Grid item xs={6} sm={6} md={3}>
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
