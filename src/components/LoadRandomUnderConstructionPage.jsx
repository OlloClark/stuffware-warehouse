import {useState} from "react";
import {UnderConstructionBasic} from './'
import {getRandomIntInclusive} from '../helpers/getRandomIntInclusive'

export const LoadRandomUnderConstructionPage = () => {
  const pages = ['basic']

  const [page, setPage] = useState(pages[getRandomIntInclusive(0,pages.length - 1)])

  const renderPage = () => {
    switch(page){
      case 'basic':
        return <UnderConstructionBasic />
      default:
        return <UnderConstructionBasic />
    }
  }

  return renderPage()
}
