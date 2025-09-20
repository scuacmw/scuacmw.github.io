import React from 'react';
import './Board.css'; 
import image6 from '../assets/LeilaErhili.png';
import image7 from '../assets/MaddieFollosco.png';
import image8 from '../assets/IreneChang.png';
import image9 from '../assets/SanjnaSood.png';
import image10 from '../assets/PrakritiPatnaik.png';
import image11 from '../assets/Anna_Aldri.png';
import image12 from '../assets/Catherine_Hung.png';
import image13 from '../assets/Ananya_Pagadala.png';
import image14 from '../assets/Samia_Ahmer.png';
import image15 from '../assets/Sattvika_Bhatt.png';
import image16 from '../assets/Trisha_Ganesh.png';
import image17 from '../assets/Group 12.png';
import image18 from '../assets/Group 6.png';
import image19 from '../assets/Group 20.png';







const Board = () => {
  return (
    <div className="board-page">
      <div className= "banner">
        <div className="banner"><img src = {image17} alt = "rect" className = "image17" /></div>
        <div className = "banner-title">
          <h1 className="board-title">2024-2025</h1>
        </div>
      </div>
      
      <div className = "allmembers">
        <div className= "Leila">
        <img src={image6} alt="Leila" className="image6" />
        <h1>Leila Erhili</h1>
        <p>President</p>
        </div>
        <div className= "Maddie">
        <img src={image7} alt="Maddie" className="image7" />
        <h1>Maddie Follosco</h1>
        <p>Vice President</p>
        </div>
        <div className= "Irene">
        <img src={image8} alt="Irene" className="image8" />
        <h1>Irene Change</h1>
        <p>Event Coordinator</p>
        </div>
        <div className= "Sanjna">
        <img src={image9} alt="Sanjna" className="image9" />
        <h1>Sanjna Sood</h1>
        <p>Secretary</p>
        </div>
        <div className= "Prakriti">
        <img src={image10} alt="Prakriti" className="image10" />
        <h1>Prakriti Patnaik</h1>
        <p>Web-Master</p>
        </div>
        <div className= "Anna">
        <img src={image11} alt="Anna" className="image11" />
        <h1>Anna Aldrin</h1>
        <p>Event Coordinator</p>
        </div>
        <div className= "Catherine">
        <img src={image12} alt="Catherine" className="image12" />
        <h1>Catherine Hung</h1>
        <p>Treasurer</p>
        </div>
        <div className= "Ananya">
        <img src={image13} alt="Ananya" className="image13" />
        <h1>Ananya Pagadala</h1>
        <p>Career, Conference Advisor</p>
        </div>
        <div className= "Samia">
        <img src={image14} alt="Samia" className="image14" />
        <h1>Samia Ahmer</h1>
        <p>Director of Public Relations</p>
        </div>
        <div className= "Sattvika">
        <img src={image15} alt="Sattvika" className="image15" />
        <h1>Sattvika Bhatt</h1>
        <p>Hack-a-thon Coordinator</p>
        </div>
        <div className= "Trisha">
        <img src={image16} alt="Trisha" className="image16" />
        <h1>Trisha Ganesh</h1>
        <p>Industry Liaison</p>
        </div>
        <div className= "Sara">
        <img src={image18} alt="Sara" className="image18" />
        <h1>Sara Donnelly</h1>
        <p>Freshmen Rep</p>
        </div>
        <div className= "Kaavya">
        <img src={image19} alt="Kaavya" className="image19" />
        <h1>Kaavya Jethwa</h1>
        <p>Freshmen Rep</p>
        </div>

      </div>
    </div>
  );
};

export default Board;