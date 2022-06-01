import Contact from './Contact/Contact';
import './Info.css';
import InfoBar from './InfoBar/InfoBar';

function Info () {
    return (
        <>
            <div className="info__container">
                <Contact />
                <InfoBar />
            </div>
        </>
    );
}

export default Info;