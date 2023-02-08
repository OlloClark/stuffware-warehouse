import {useState} from "react";
import LandingPageOne from './Landing Pages/LandingPageOne'
import LandingPageTwo from './Landing Pages/LandingPageTwo'
import {getRandomIntInclusive} from '../helpers/getRandomIntInclusive'

export const LoadRandomUnderConstructionPage = () => {
  const pages = ['one', 'two']

  const [page, setPage] = useState(pages[getRandomIntInclusive(0,pages.length - 1)])

  const renderPage = () => {
    switch(page){
      case 'one':
        return <LandingPageOne />
      case 'two':
        return <LandingPageTwo />
      default:
        return <LandingPageOne />
    }
  }

  return renderPage()
}
