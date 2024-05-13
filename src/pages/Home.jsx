import React from "react";
import ExternalLinkButton from "../buttons/ExternalLinkButton";
import NotExternalLinkButton from "../buttons/NotExternalLinkButton";
import photo1 from '../pages/images/photo1.jpg'
import photo2 from '../pages/images/photo2.jpg'
import photo3 from '../pages/images/photo3.jpg'
import '../pages/styles/Home.css';
import ep1 from '../pages/images/mig-images/ep1.png'
import ep2 from '../pages/images/mig-images/ep2.png'
import ep3 from '../pages/images/mig-images/ep3.png'
import ep4 from '../pages/images/mig-images/ep4.png'

const Home = () => {
    const photos = [
        { id: 1, src: photo1, alt: 'Photo 1' },
        { id: 2, src: photo2, alt: 'Photo 2' },
        { id: 3, src: photo3, alt: 'Photo 3' }
    ];

    const migPhotos = [
        { id: 4, src: ep1, alt: 'Ep 1 thumbnail', caption: 'EPISODE 1' },
        { id: 5, src: ep2, alt: 'Ep 2 thumbnail', caption: 'EPISODE 2' },
        { id: 6, src: ep3, alt: 'Ep 3 thumbnail', caption: 'EPISODE 3' },
        { id: 7, src: ep4, alt: 'Ep 4 thumbnail', caption: 'EPISODE 4' }
    ];

    return (
        <div>
            <section>
                <h2>BIG CAT GRAPHICS</h2>
                <p>You can now watch our show called Music In Green on YouTube. Click the link below to go and check it out!</p>
                <ExternalLinkButton url="https://youtube.com/playlist?list=PLauePHtEvgn_LpZyM56zlGohGEDRWVaFQ&si=-OZztOPVSytFcrC8" buttonText="Music In Green" />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6nPHKbf9nZc?si=ErivR5quXWi97zBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

            <section>
                <img src="src/images/New Logo.png" alt="bcg-logo" className="logo" />
                <h2>WELCOME TO BIG CAT GRAPHICS</h2>
                <p>Where creativity roars to life! As a premier creative agency, we specialize in graphic design, 3D modeling, visual effects (VFX), and photography, providing innovative solutions tailored to meet your visual communication needs.</p>
            </section>

            <section>
                <h1>SERVICES</h1>
                <div id="graphic-desgin">
                    <h3>Graphic Design</h3>
                    <p>Let our design expertise at Big Cat Graphics breathe life into your ideas, from logo creation to marketing materials. With a keen eye for aesthetics and a focus on your brand identity, we craft visually stunning designs that leave a memorable mark on your audience.</p>
                </div>
                <div id="video-editing">
                    <h3>Video Editing</h3>
                    <p>Elevate your storytelling with our comprehensive video services tailored to your. From music Videos, ads to post-production, we specialize in creating compelling visuals that captivate audiences and leave a lasting impression.</p>
                </div>
                <div id="cgi-and-vfx">
                    <h3>CGI & VFX</h3>
                    <p>Dive into the realm of immersive experiences with our 3D broad services. Whether it’s architectural visualization, product ads, or Music videos, we leverage the latest tools and techniques to bring your concepts to life in stunning detail and realism.</p>
                </div>
                <NotExternalLinkButton url="/services" buttonText="View More" />
            </section>

            <section>
                <h1>GALLERY</h1>
                <div className="home-photos">
                    {photos.map(photo => (
                        <img key={photo.id} src={photo.src} alt={photo.alt} height='396px' width='280px' style={{ marginRight: '10px' }} />
                    ))}
                </div>
                <NotExternalLinkButton url="/gallery" buttonText="View More" />
            </section>

            <section>
                <h1>MUSIC IN GREEN</h1>
                <p>A Performance Show</p>
                <div className="mig-photos">
                    {migPhotos.map(migPhoto => (
                        <div key={migPhoto.id} className='photo-container'>
                            <img src={migPhoto.src} alt={migPhoto.alt} />
                            <p className="caption">{migPhoto.caption}</p>
                        </div>
                    ))}
                </div>
                <p>A show that brings you some of the most amazing visuals paired with great vocalists</p>
                <ExternalLinkButton url="/music-in-green" buttonText="Watch Now" />
            </section>

            <section>
                <h1>Contact Us</h1>
                <p>Fill in your information below and we'll get back to you as soon as we can.</p>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <input type="submit" value="Submit" />
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <input type="submit" value="Submit" />
                    <textarea>
                        Message...
                    </textarea>
                </form>
            </section>
            
        </div>
    )
}

export default Home;