import "./App.css";


// const name = "Vijay";
// const age = 20;

function App() {
  return (
    <>
      {/* <h1>Hi My Name is {name}</h1>
      {age > 18 ? <h3>Adult</h3> : <h3>Children</h3>}
      <p>{age > 18 ? "Adult" : "Children"}</p>

      <input type="text" placeholder="Enter Your Name"></input>
      <button type="submit">Click Here</button> */}
      {/* <div className="box">
        <p>this is paragraph tag</p>
      </div>
      <div>
        <input type="text" placeholder="Enter Your Name"/>
        <input type="email" placeholder="Enter Your Email"/>
        <button type="submit">Submit</button>
      </div> */}

      <nav className="navbar">
        <div className="logo">Parul University</div>
        <ul className="nav-items">
          <li><a href="">Home</a></li>
          <li><a href="">Result</a></li>
          <li><a href="">Get Addmission</a></li>
          <button type="submit" className="btn">Login</button>
        </ul>
      </nav>

      <section className="img-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsvfNMh_95YCv0Sn4wAcQfjP97veiaBbnfw&s" alt="" width={500}></img>
      </section>

      <section className="form-section">
        <h1>Register Form</h1>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email Address" />
          <input type="text" placeholder="Enter Your Contact Number" />
          <input type="text" placeholder="Enter Your Course" />
          <button type="submit">Register</button>
        </form>
      </section>




      <footer className="footer">CopyRight Under 2025 Parul University</footer>
    </>
  );
}

export default App;
