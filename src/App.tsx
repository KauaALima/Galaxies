import { Card } from "./components/Card"

import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import Image5 from '../assets/image5.jpg'
import Image6 from '../assets/image6.jpg'

export function App() { 
  return (
      <div className="max-w-[1000px] my-0 mx-auto h-screen">

        <div className="flex flex-col items-center justify-center gap-16 py-[73px] lg:items-baseline">

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl text-TitleColor lg:text-6xl">As maiores galáxias</h1>
              <p className="font-semibold text-2xl text-TextColor">E curiosidades sobre elas</p>
            </div>

          <div className="grid grid-rows-3 gap-[60px] lg:grid-rows-none lg:grid-cols-3">
            
            <Card
              img={Image1}
              title='IC 1101'
              text='A IC 1101 é a maior galáxia do universo. A galáxia é elíptica à lenticular e aparece como coloração amarelo dourado. A galáxia mais brilhante está situada a mais de 1.04 bilhões de anos-luz da Terra.'
            />

            <Card
              img={Image2}
              title='Phoenix Cluster'
              text='Phoenix Cluster é um dos grupos de galáxia mais sólidos no universo. Ela tem localização em torno de 5.7 bilhões de anos-luz da Terra. A galáxia elíptica é composta de matéria intra-grupo média e escura.'
            />
            
            <Card
              img={Image3}
              title='NGC 262'
              text='A NGC 262 é localizada a 202 milhões de anos-luz da Terra, que é uma das maiores galáxias espirais conhecidas. O diâmetro da galáxia é de aproximadamente 1.3 milhões de anos-luz.'
            />
            
            <Card
              img={Image4}
              title='NGC 4889'
              text='A NGC 4889 é também famosa como “Coma B”, uma galáxia super gigante elíptica situada aproximadamente a 308 milhões de anos-luz da Terra. Ela também foi descoberta pelo astrônomo britânico Frederick William Herschel I em 1785.'
            />
            
            <Card
              img={Image5}
              title='NGC 4874'
              text='A NGC 4874 também conhecida como “Coma A” foi descoberta em 1785 pelo astrônomo britânico Frederick William Herschel I. E está a 350 milhões de anos-luz longe da Terra. É uma galáxia lisa, em forma de bola, cercada por um círculo estelar.'
            />

            <Card
              img={Image6}
              title='A2261-BCG'
              text='A A2261-BCG situou-se a aproximadamente 3 bilhões de anos-luz da Terra. É elíptica em formato e foi encontrada pelo Telescópio Espacial Hubble. A A2261-BCG tem um diâmetro e um milhão de anos-luz.'
            />

          </div> 
        </div>

      </div>
  )
}
