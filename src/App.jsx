import './App.css'

import Header from './assets/components/header'
import Footer from './assets/components/Footer'
import Job from './assets/components/Job'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div><Job className="red" title="Full Time Sales Associate - Sydney Boutique" contractType="CDI" country="Australie" city="Sydney" /> </div>
          <div><Job className="green" title="Agent de Sécurité - Pantin" contractType="CDI" country="France" city="Pantin" /></div>
          <div><Job className="yellow" title="Responsable d'Atelier(H/F)" contractType="CDD" country="France" city="Paris" /></div>
          <div><Job className="blue" title="Chef de Projets" contractType="CDD" country="France" city="Paris" /></div>
          <div><Job className="pink" title="Développeur React.js" contractType="CDI" country="France" city="Paris" /></div>
          <div><Job className="red" title="Sales associate Stockholm" contractType="CDI" country="Suède" city="Stockholm" /></div>
          <div><Job className="green" title="Vendeur/se - Crans Montana" contractType="CDI" country="Suisse" city="Crans-Montana" /></div>
          <div><Job className="yellow" title="CRM & Data Quality Analyst" contractType="CDI" country="USA" city="New York" /></div>
          <div><Job className="blue" title="Infirmier (H/F)" contractType="CDI" country="France" city="Pantin" /></div>

        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
