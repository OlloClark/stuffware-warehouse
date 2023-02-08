import {useState} from "react";
import LandingPageOne from './Landing Pages/LandingPageOne'
import LandingPageTwo from './Landing Pages/LandingPageTwo'
import LandingPageThree from './Landing Pages/LandingPageThree'
import LandingPageFive from './Landing Pages/LandingPageFive'
import {getRandomIntInclusive} from '../helpers/getRandomIntInclusive'

export const LoadRandomUnderConstructionPage = () => {
  const pages = ['one', 'two', 'three', 'five']

  const [page, setPage] = useState(pages[getRandomIntInclusive(0,pages.length - 1)])

  const renderPage = () => {
    switch(page){
      case 'one':
        return <LandingPageOne />
      case 'two':
        return <LandingPageTwo />
      case 'three':
        return <LandingPageThree />
      case 'five':
        return <LandingPageFive />
      default:
        return <LandingPageOne />
    }
  }

  return renderPage()
}
