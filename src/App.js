import { renderRoutes } from 'react-router-config';
import { useEffect, Suspense } from 'react';
import routes from './router/index.js'
import './App.scss';
import Loading from './commonets/loading';
const App = () => {
  useEffect(() => {
    const box = document.getElementById('rainBox');
    let boxHeight = box.clientHeight;
    const resize = () => {
      boxHeight = box.clientHeight;
    }

    // 雨水池
    let rainPool = [];
    let timer1 = setInterval(() => {    //每30ms新增一滴雨水;
      let rain = null;
      if (rainPool.length === 0) {
        rain = document.createElement('div');
        rain.classList.add('rain');
      } else {
        rain = rainPool.pop();
        rain.style.visibility = 'visible';
      }
      rain.style.top = '0';
      rain.style.left = Math.random() * 100 + '%';
      rain.style.opacity = Math.random();
      if (rainPool.length === 0) box.appendChild(rain);
      let race = 1;
      let h = 0;
      let drop = setInterval(() => {
        if (h >= boxHeight) {
          clearInterval(drop);
          // box.removeChild(rain);
          box.style.visibility = 'hidden';
          rainPool.push(rain);
          drop = null;
        }
        race++;
        h = parseInt(rain.style.top) + race;
        rain.style.top = h + 'px';
      }, 20);
    }, 30);
    window.addEventListener('resize', resize);
    return () => {
      clearInterval(timer1);
      rainPool = [];
      window.removeEventListener('resize', resize);
    }
  }, []);
  return (
    <div id='App'>
      <div id="rainBox"></div>
      <Suspense fallback={<Loading />}>
        {renderRoutes(routes)}
      </Suspense>
    </div>

  )
}

export default App;
