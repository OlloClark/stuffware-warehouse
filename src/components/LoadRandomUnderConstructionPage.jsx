import {useState} from "react";
import LandingPageOne from './Landing Pages/LandingPageOne'
import LandingPageThree from './Landing Pages/LandingPageThree'
import LandingPageFive from './Landing Pages/LandingPageFive'
import {getRandomIntInclusive} from '../helpers/getRandomIntInclusive'

export const LoadRandomUnderConstructionPage = () => {
  const pages = ['one']

  const [page, setPage] = useState(pages[getRandomIntInclusive(0,pages.length - 1)])

  const renderPage = () => {
    switch(page){
      case 'one':
        return <LandingPageOne />
      default:
        return <LandingPageOne />
    }
  }

  return renderPage()
}
