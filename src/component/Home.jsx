import "../styles/home.scss";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillAmazonCircle,
} from "react-icons/ai";
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TECHYSTAR</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the problem you face everyday.
            we are leading tech company whose aim is to increase the problem
            solving ability to the children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            deserunt rem culpa optio voluptatem minima dolorem asperiores cumque
            quibusdam temporibus. Vero fugit soluta quos voluptas aliquid.
            Tempore nesciunt repellendus doloribus! Incidunt velit tempore esse
            fugiat. Magni explicabo id velit ducimus reiciendis vero cum quaerat
            quasi alias nam. Dolorum nulla exercitationem repellat, ducimus
            veritatis rerum ipsam! Ipsum quaerat eaque minima non? Odio,
            repellendus? Accusantium, molestias? Numquam cupiditate sequi optio
            dicta nobis blanditiis! Aliquid id modi nulla error enim maiores
            asperiores ut doloribus vitae dolorum suscipit eum qui, eaque quia
            quod doloremque. Suscipit labore fugiat rem quam itaque culpa odit
            esse. Culpa doloremque quidem, qui est, nostrum numquam magnam sequi
            expedita accusamus, nemo tempore quod quae eligendi blanditiis. Enim
            repellat saepe fugit.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
