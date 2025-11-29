const http = require('http');
const fs = require('fs'); 
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/home') {
        res.statusCode = 200;
        res.write('<h1>Home Page</h1>')
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
body {
  background-color: white;
  color: black;
}

.section{
    grid-template-columns: 1fr 1fr;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 150px;
}

.hero-content h1 {
  font-size: 40px;
  margin-bottom: 15px;
  line-height: 1.2;
}

.hero-content span {
  color: blue;
}

.hero-content p {
  color: #555;
  margin-bottom: 35px;
  font-size: 20px;
  max-width: 500px;
}

.hero-content button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
}

.hero-content button:hover {
  background-color: #004288;
}

.hero-image {
  text-align: center;
  min-width: 500px;
}

.hero-image img {
  width: 80%;
  max-width: 400px;
}
</style>
<body>
    <section id="home" class="hero">
            <div class="hero-content">
      <h1>Revitalize Your Clothes with Expert <span> Services!</span></h1>
      <p>From premium dry cleaning to swift wash and fold, we deliver care and convenience. 
      Schedule a pickup and rediscover the freshness of your clothes today!</p>
      <button id="book-btn">Book a service today!</button>
    </div>
    <div class="hero-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuaxXlX6Ev5c45kb1ZTr4m9gvxCd5szE-5Q&s" alt="Laundry Service Image" />
    </div>
  </section>
</body>
</html>
            `)
        return res.end();    
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.write('<h1>About Page</h1>')
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .achievements {
  background-color: #007bff;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
}

.achievements h2 {
  font-size: 40px;
  margin-top: 25px;
  margin-left: 120px;
  text-align: left;
  color: black;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  color: black;
  margin-left: 400px;
}

.stat-item h3 {
  font-size: 30px;
  margin-top: -55px;
  line-height: 1.2;
}

.stat-item p {
  font-size: 20px;
  color: black;
}
</style>
<body>
    <section id="services" class="achievements">
    <h2>Our Achievements</h2>
    <div class="stats">
      <div class="stat-item">
        <h3>15+</h3>
        <p>Laundry Services</p>
      </div>
      <div class="stat-item">
        <h3>240+</h3>
        <p>Happy Customers</p>
      </div>
      <div class="stat-item">
        <h3>2+ Yrs</h3>
        <p>Experience</p>
      </div>
    </div>
  </section>
</body>
</html>
            `)
        return res.end();
    } else if (req.url === '/services') {
        res.statusCode = 200;
        res.write('<h1>Services Page</h1>')
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
.section{
  grid-template-columns: 1fr;
}
.booking-section {
  background: whitesmoke;
  display: flex;
  gap: 30px;
  padding: 50px;
  border-radius: 20px;
  margin: 100px auto;
  max-width: 1200px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.5);
}

.services-list {
  background: white;
  padding: 30px;
  border-radius: 10px;
  line-height: 1.3;
}

#service-items {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.service-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 10px 0;
}

.service-name { 
  font-weight: 500; 
}

.service-price { 
  color: blue; 
  font-weight: 600; 
  margin-left: 100px; 
}

.service-actions button {
  margin-left: px;
  padding: 5px 15px;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  background: white;
  color: #555;
  transition: background 0.5s;
}
.service-actions .add-btn { 
  background: rgb(57, 57, 179); 
  color: white; 
}

.service-actions button:hover { 
  opacity: 0.9; 
}

.add-info { 
  margin-top: 20px; 
  color: black; 
}
</style>
<body>
    <div class="booking-section">
  <div class="services-list">
    <h2>Our Services</h2>
    <p>Click On The Add To Cart Button To Add The Services To Your Cart</p>
    <ul id="service-items">
      <li class="service-item" data-name="Dry Cleaning" data-price="200">
        <span class="service-name">Dry Cleaning</span>
        <span class="service-price">₹200.00</span>
        <span class="service-actions">
          <button class="add-btn">Add Item</button>
          <button class="remove-btn" style="display:none;">Remove Item</button>
        </span>
      </li>
      <li class="service-item" data-name="Wash & Fold" data-price="100">
        <span class="service-name">Wash & Fold</span>
        <span class="service-price">₹100.00</span>
        <span class="service-actions">
          <button class="add-btn">Add Item</button>
          <button class="remove-btn" style="display:none;">Remove Item</button>
        </span>
      </li>
      <li class="service-item" data-name="Ironing" data-price="30">
        <span class="service-name">Ironing</span>
        <span class="service-price">₹30.00</span>
        <span class="service-actions">
          <button class="add-btn">Add Item</button>
          <button class="remove-btn" style="display:none;">Remove Item</button>
        </span>
      </li>
      <li class="service-item" data-name="Stain Removal" data-price="500">
        <span class="service-name">Stain Removal</span>
        <span class="service-price">₹500.00</span>
        <span class="service-actions">
          <button class="add-btn">Add Item</button>
          <button class="remove-btn" style="display:none;">Remove Item</button>
        </span>
      </li>
      <li class="service-item" data-name="Leather & Suede Cleaning" data-price="999">
        <span class="service-name">Leather & Suede Cleaning</span>
        <span class="service-price">₹999.00</span>
        <span class="service-actions">
          <button class="add-btn">Add Item</button>
          <button class="remove-btn" style="display:none;">Remove Item</button>
        </span>
      </li>
      <li class="service-item" data-name="Wedding Dress Cleaning" data-price="2800">
        <span class="service-name">Wedding Dress Cleaning</span>
        <span class="service-price">₹2800.00</span>
        <span class="service-actions">
          <button class="add-btn">Add Item</button>
          <button class="remove-btn" style="display:none;">Remove Item</button>
        </span>
      </li>
    </ul>
    <div class="add-info">Add the items to the cart and book now</div>
  </div>
</body>
</html>
            `)
        return res.end();
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.write('<h1>Contact Page</h1>')
        res.write(`
            <form action="/submitted-data" method="POST">
            <button type="submit">Submit Data</button>
            </form>
            `)
        return res.end();
    }else if (req.method === 'POST' && req.url === '/submitted-data') {
    let body = '';
    req.on('data', (chunk) => { 
        body += chunk; 
    });
    req.on('end', () => {
        fs.appendFile('user-data.txt','Atharva Pawar',() => {  
            res.statusCode = 302;
            res.setHeader('Location', '/redirected');
            res.end();
        });
    });
    return;
    }else if (req.url === '/redirected') {
    res.statusCode = 200;
    res.write('<h1>Redirected</h1><a href="/home">Go Home</a>')
    return res.end();
    }else {
      res.statusCode = 404;
      res.write(`
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
nav ul{
  list-style: none;      
  margin: 0;
  padding: 0;
  display: flex;         
  gap: 20px;
  background-color: aqua;
  text-align: center;
  justify-content: center;
}

nav a{
  text-decoration: none; 
  color: black;
  font-family: cursive;
}
</style>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</body>
</html>
        `)
        res.end();
    }
}).listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
