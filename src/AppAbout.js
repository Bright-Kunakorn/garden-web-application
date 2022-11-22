import React  from 'react';
import './App.css';
import AboutImg from './item/img/Export.jpg'

function AppAbout() {
  return (
    <body>
    <main>
        <section class="about section container" id="about">
            <div class="about__container grid">   
                <img src={AboutImg} alt="" class="about__img"/>
                
                <div class="about__data">
                    <h2 class="section__title about__title">
                        Create your ideal landscape with our friendly
                    </h2>
                    <p class="about__description">
                        Plan and visualize your new landscaping before any construction begins. The time has come for you to finally have the landscape you have always dreamed of. 
                        No more starting wistfully out your windows, envisioning a fabulous pool, enticing barbecue, and gorgeous landscaping.
                    </p>
                </div>
                <div class="about__data">
                    <h2 class="section__title about__title">
                        Create your ideal landscape with our friendly
                    </h2>

                    <p class="about__description">
                        Plan and visualize your new landscaping before any construction begins. The time has come for you to finally have the landscape you have always dreamed of. 
                        No more starting wistfully out your windows, envisioning a fabulous pool, enticing barbecue, and gorgeous landscaping.
                    </p>
                </div>
                <img src={AboutImg} alt="" class="about__img"/>
            </div>
        </section>
    </main>
</body>
  );
}

export default AppAbout;
