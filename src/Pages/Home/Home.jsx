
import preview from '../img/preview.jpg';
import ImageSlider from '../../Components/imageSlider'
import { SliderData } from '../../Components/sliderData'
import './home.css'
import Nav from '../../Components/Nav/Nav'

function Home () {

	return (
		<>
		<Nav />
		<main>
  <section className="freedom-section">
    <div className="container">
      <div className="freedom">
        <div className="content">
          <h1>Freedom calls.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, porro! Ullam commodi vero nihil, vitae libero architecto. Exercitationem, accusantium provident. Nobis ipsum maxime vitae molestias id accusantium, ducimus ea itaque.</p>
          <a className="btn" href="#">Watch the keynote</a>
        </div>
      </div>
    </div>
  </section>
  
  
  <section>
    <div className="container">
      <div className="paragraphs">
        <div className="left text">
          <h3>Know your runs. In and out</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni facilis enim nesciunt ratione, reprehenderit asperiores! Deleniti quibusdam corporis repudiandae error nihil nulla, quidem sint, Lorem ipsum dolor sit amet</p>
          <div className="more">
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
          </div>
        </div>
        <div className="middle text">
          <h3>Run in good spirits</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tempore facere provident alias eius perferendis eaque recusandae assumenda voluptatum, Lorem ipsum </p>
          <div className="more">
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
          </div>
        </div>
        <div className="right text">
          <h3>Just do it Sunday</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta adipisci esse repellendus harum, quis lorem </p>
          <div className="learn-more">
            <hr className="hr" />
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
      
      <div className="preview">
        <div className="content preview-text">
          <h1 className="preview-heading">Nike Sport Band. Light. Flexible. Breathable.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum, molestias hic, natus sed ipsum voluptates optio vitae deleniti, tempore quaerat totam accusantium? Dolore alias odio quam ipsa laudantium dolorem.</p>
          <a href="#" className="btn">Buy now</a>
        </div>
        <img src={preview} alt="preview"  width="400" height="650" />
      </div>
    </div>
  </section>
  
  
  <section className="last-section">
    <div className="container">
      <div className="health-text">
        <h1>Take control of your health</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum quibusdam ratione iste quis maxime totam placeat. Aliquid quam inventore earum est voluptas fuga quidem deleniti! Aliquam excepturi recusandae ex?</p>
        <a href="#" className="btn">Explore feautures</a>
      </div>
    </div>
  </section>


	<ImageSlider slides={SliderData}/>
  
  
  </main>
		
		</>
	)
}

export default Home
