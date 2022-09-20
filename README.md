# Sparks-Banking-System
Task #1 in the web development and designing internship offered by <a href="https://www.linkedin.com/company/the-sparks-foundation/">The Sparks Foundation</a>.😉😉
 
## 🔴 Live Host
https://sparksbankbasmaelhoseny.herokuapp.com/Transactions

## 🎥 Demo:
[![Watch the video](https://img.youtube.com/vi/OXhK_JB4K_U/maxresdefault.jpg)](https://www.youtube.com/watch?v=OXhK_JB4K_U)

## Features
<ul>
<li>Create new Customer</li>
<li>Make money transaction between customers</li>
<li>Dsiply transactions either failed or succeeded</li>
</ul>

## 📸 ScreenShots:
 <div style="display: flex;">
<img width="500" alt="Screenshot 2022-09-20 012419" src="https://user-images.githubusercontent.com/72309546/191136282-fa4c87f3-5922-4fa8-a879-f218fd5e5c44.png"/>
<img width="500"  margin="auto" cealt="Screenshot 2022-09-20 012433" src="https://user-images.githubusercontent.com/72309546/191136285-e82ebb7f-26f8-4de8-a939-7483c3da9d84.png"/>
<img width="500" alt="Screenshot 2022-09-20 012446" src="https://user-images.githubusercontent.com/72309546/191136668-0deaea26-c996-43e9-acbd-2f9758110bd5.png"/>
<img width="500" alt="Screenshot 2022-09-20 012504" src="https://user-images.githubusercontent.com/72309546/191136278-dfdddcf3-7589-42db-bc7d-45147217abe0.png"/>
</div>

## 🔨Built Using
<img height="40" align="left" alt="react js" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-1024.png"/>
<img height="40" align="left" alt="CSS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/>
<img height="40" align="left" alt="node js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"/>
<img height="40" align="left" alt="express js" src="https://miro.medium.com/max/1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png"/>
<img height="40" align="left" alt="Mongo DB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"/>
<img height="40" align="left" alt="Heroku" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"/>

</br></br>
## 📥 Install and run the Project on your local machine
<ol>
<li>download the zip folder of the project.</li>
<li>unzip folder</li>
<li>open terimnal</li>
<li>cd to the folder of the project</li>

<ol>run server side:
<li>run: npm install </li>
<li>run: npm start </li>
</oi>

<ol>run client side:
<li>run: cd client</li>
<li>run: npm install </li>
<li>run: npm start </li>
</ol>

</ol>
DONE 😜

## 📝 Note:
Make sure you aren't using PORT 5000 and 3000 because this project uses them otherwise you can change them from package.json of each
by changing 
<ul>
<li>in root directory 
<ol>
 <li>package.json </br>
 "proxy": "http://localhost: client_port_no"
 <li>index.json<br>
 const PORT = process.env.PORT || server_port_no;  (line 34)
 </li>
 </ol>
 </li>
 
 <li>in client directory 
<ol>
 <li>package.json </br>
 "proxy": "http://localhost: server_port_no"
 </ol>
 </li>
</ul>

