import { renderRoutes } from 'react-router-config';
import { useEffect } from 'react';
import routes from './router/index.js'
import './App.scss';
function App() {
  useEffect(() => {
    let box = document.getElementById('rainBox');
    let boxHeight = box.clientHeight;
    let boxWidth = box.clientWidth;
    console.log(box)
    window.onresize = function () {
      boxHeight = box.clientHeight;
      boxWidth = box.clientWidth;
    }
    let timer1 = setInterval(() => {    //每30ms新增一滴雨水;
      let rain = document.createElement('div');
      rain.style.position = 'absolute';
      rain.style.top = '0';
      rain.style.left = Math.random() * boxWidth + 'px';
      rain.style.width = '2px';
      rain.style.height = '50px';
      rain.style.borderRadius = '1px';
      rain.style.background = 'linear-gradient(rgba(187,255,255,.2), rgba(187,255,255,.6))';
      // rain.style.background = 'linear-gradient(rgba(255,238,210,.2), rgba(255,268,210,.6))';
      rain.style.opacity = parseInt(1+Math.random()*9)/10;
      box.appendChild(rain);
      let race = 1;
      let h = 0;
      let drop = setInterval(() => {
        if (h >= boxHeight) {
          clearInterval(drop);
          drop = null;
          rain.parentNode.removeChild(rain);
        }
        race++;
        h = parseInt(rain.style.top) + race;
        console.log(h)
        rain.style.top = h + 'px';
      }, 20)
    }, 30)
    return () => {
      clearInterval(timer1);
    }
  }, [])
  return (
    <div id='entry'>
      <div id="rainBox"></div>
      {renderRoutes(routes)}
    </div>

  )
}

export default App;
