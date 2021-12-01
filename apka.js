
const header = (
<div className="title">
<h1 className="tytuł">BEAUTIFULL WORLD</h1>



  <div className="linki">
   <a href={'https://www.linkedin.com/feed/?trk=onboarding-landing'}>linkedin</a>
   <a href={'https://github.com/Maciejj1'}>GitHub</a>
  </div>
  </div>
)

const main=(

    <div >
      <div className="artykuł">
      <article>
        <h3>Why World is beautiful?</h3>
        <p>With all its hypocrisy, drudgery and broken dreams, this world is still beautiful ”.

I am a child of the universe and no less than the trees and the stars have a right to be here,<br></br>
 I have no doubt that the universe is as it should be.<br></br>
In the contemporary world, people were more aggressive, more uncultured,<br></br>
 more likely to fall into bad habits and were more resistant to human harm.<br></br>
 A dozen or so years ago it was not like that,
 people were not afraid to go out into the street, and now people are in danger everywhere.<br></br>

Who would have thought that was how technology would evolve. For us, telephones, computers, 
the Internet and ever newer and more convenient means of transport are not new. <br></br>
Our parents still remember when there were no televisions, the first ones were black and white and few Poles could afford them; as on the main streets,
 there were humps and trabants as well as other vehicles of those times. Pupil education has developed, schools are better adapted and better equipped.<br></br>
  Trade, industry and economy also developed. Many new jobs have been created, but unemployment is still high.</p>
        </article>
        </div>
<>
{/*<img src={'./logo.jpg'}/> */}
</>
    </div>
)

const footer = (
<footer>
<p>Page by Maciejj</p>
</footer>

)

const start = [header ,main, footer]

ReactDOM.render(start, document.getElementById('root'))
