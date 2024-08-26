import Header from "../Header";
import './About.css';
//add some animations to the background (rainbow like intro?)

function About() {
    return (
      <div className =  'About Dion'>

        <div className = 'About_title '>
        <h1>About</h1>
       </div>

      <div className = 'About_container'>
          <div className = 'About_paragraph'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla mattis ligula. Cras facilisis, lectus in laoreet pellentesque, nisl odio aliquet elit, a sagittis metus nisi eu ex. Nullam justo quam, convallis vitae est sit amet, facilisis elementum eros. In in tristique lorem, ac facilisis sapien. Nulla sed metus convallis, rhoncus neque sed, efficitur elit. Sed sed ligula venenatis, efficitur leo sit amet, euismod sem. Aenean lacus justo, lobortis a nisi non, facilisis suscipit massa. 
            Mauris faucibus sapien in augue bibendum feugiat. Vivamus vitae risus interdum, malesuada sapien id, blandit lectus. 
            Sed in nibh ipsum. Ut ut pharetra turpis. Quisque eleifend, nisl eget mattis posuere, libero odio gravida neque, 
            et elementum neque erat eget nibh. Praesent id laoreet justo. Ut interdum, lectus luctus molestie consectetur, 
            lacus quam ornare metus, vitae dignissim tortor nunc sed nisl. Phasellus varius justo ante, vitae suscipit nisl pretium vitae. 
            Phasellus elementum ligula eget enim sagittis finibus. Vestibulum aliquet ipsum sed laoreet blandit. 
            Ut ipsum diam, tristique id ullamcorper in, eleifend sit amet nisi. 
            Sed vitae mauris hendrerit, commodo diam in, luctus quam. Mauris at interdum diam. 
            Pellentesque tincidunt semper nunc, non laoreet lacus.</p>
          </div>

          <div className = 'About_photo'> 
            <img src={require('../pictures/DH_portfolio.jpg')} alt="DH_portfolio" />
          </div>
      </div>
        
      </div>
    );
}  
  
  export default About;
