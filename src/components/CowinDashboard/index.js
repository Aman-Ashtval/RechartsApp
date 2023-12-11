import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

class CowinDashboard extends Component {
  state = {
    lastWeekVaccinations: [],
    vaccinationByGenderList: [],
    vaccinationByAgeList: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const response = await fetch(vaccinationDataApiUrl)

    if (response.ok) {
      const data = await response.json()
      const lastWeekVaccinations = data.last_7_days_vaccination.map(each => ({
        firstDose: each.dose_1,
        secondDose: each.dose_2,
        vaccinationDate: each.vaccine_date,
      }))

      const vaccinationByGenderList = data.vaccination_by_gender
      const vaccinationByAgeList = data.vaccination_by_age
      this.setState({
        lastWeekVaccinations,
        vaccinationByGenderList,
        vaccinationByAgeList,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  successView = () => {
    const {
      lastWeekVaccinations,
      vaccinationByGenderList,
      vaccinationByAgeList,
    } = this.state
    return (
      <>
        <VaccinationCoverage lastWeekVaccinations={lastWeekVaccinations} />
        <VaccinationByGender
          vaccinationByGenderList={vaccinationByGenderList}
        />
        <VaccinationByAge vaccinationByAgeList={vaccinationByAgeList} />
      </>
    )
  }

  getFailureView = () => (
    <div className="failure-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="error-img"
      />
      <h1 className="failure-h1">Something went wrong</h1>
    </div>
  )

  getLoadingView = () => (
    <div data-testid="loader" className="loading-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.successView()
      case apiConstants.failure:
        return this.getFailureView()
      case apiConstants.inProgress:
        return this.getLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="CowinDashboard-bg">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <p className="logo-title">Co-WIN</p>
        </div>
        <h1 className="co-win-h1">CoWIN Vaccination in India</h1>
        {this.renderView()}
      </div>
    )
  }
}

export default CowinDashboard
