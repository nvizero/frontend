import Layout from "./components/layout";
import { useSelector, useDispatch } from "react-redux";
function Contact() {
  const todoList = useSelector((state) => state.todoList);
  return (
    <Layout title={"About"}>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="contact__content">
                <div className="contact__address">
                  <h5>Contact info</h5>
                   
                  <ul>
                    <li>
                      <h6>
                        <i className="fa fa-map-marker"></i> Address
                      </h6>
                      <p>
                        160 Pennsylvania Ave NW, Washington, Castle, PA
                        16101-5161
                      </p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-phone"></i> Phone
                      </h6>
                      <p>
                        <span>125-711-811</span>
                        <span>125-668-886</span>
                      </p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-headphones"></i> Support
                      </h6>
                      <p>Support.photography@gmail.com</p>
                    </li>
                  </ul>
                </div>
                <div className="contact__form">
                  <h5>SEND MESSAGE</h5>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Website" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="site-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
