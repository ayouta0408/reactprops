import Image from "./image1.jpg"
import  image2 from './image2.png'
import image3 from './image3.jpeg'
import Image4 from './image4.webp' 
import Image5 from "./image5.jpg"


function profile () {
    const profile =[{profilename:"profile 1",imgsrc:image2}
    ,{profilename:"profile 2",imgsrc:image3,}
    ,{profilename:"profile 3",imgsrc:Image4,},
    {profilename:"profile4",imgsrc:Image5,}]

    return (
        <section id="profile">
        <h2 class="text-important">Profession</h2>
        <div class="profile-container">
            {
                profile.map((el)=>(
                    <div className="profile-card">
                    <img src={el.imgsrc} alt="profile" />
                    <h3>{el.profilename}</h3>
                    
                    <p><a href="#">Github Link</a></p>
</div>
))

}




        </div>
</section>

    );
}

export default profile ;