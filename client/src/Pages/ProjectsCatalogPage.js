import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Grid, Container, Box } from '@mui/material'
import ProjectCardComponent from '../Components/ProjectCardComponent'

import PageLoader from '../Components/Common/PageLoader'
import HeaderWithHamburgerComponent from '../Components/HeaderWithHamburgerComponent'

function ProjectsCatalogPage({ themeSwitchHandler, isDarkTheme }) {
  const projects = useSelector((state) => state.projects)

  const [loading, setLoading] = useState(true)
  const [searchProject, setSearchProject] = useState([])

  useEffect(() => {
    if (projects && projects.length > 0) {
      setLoading(false)
    }
  }, [projects])

  function changeCurrentProjectOnSearch(value) {
    if (value) {
      let newSearchProjectArray = projects.filter((p) => {
        return p.name.toUpperCase().includes(value.toUpperCase())
      })
      newSearchProjectArray.length > 0 && value
        ? setSearchProject(newSearchProjectArray)
        : setSearchProject(null)
    } else {
      setSearchProject([])
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
          <Container sx={{ paddingBottom: 20, minHeight: '100vh' }}>
            <Box pt={5} mb={0}>
              <Grid container spacing={2} justifyContent="center">
                {projects.length > 0 &&
                  searchProject &&
                  searchProject.length <= 0 &&
                  projects.map((project) => {
                    console.log(project)
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
                {searchProject &&
                  searchProject.length > 0 &&
                  searchProject.map((project) => {
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
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </>
  )
}

export default ProjectsCatalogPage
