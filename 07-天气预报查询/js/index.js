

function getweather() {

  //TODO：请补充代码

  const doms = document.querySelectorAll('section.week-weather > div')



  $.ajax({

    url: 'js/weather.json',

    method: 'get',

    success: function (res) {

      const data = res.result

      doms.forEach((item, index) => {

        item.querySelector('img').setAttribute('src', data[index].weather_icon)

        const itemMess = item.querySelector('div.item-mess')

        itemMess.querySelector('div:nth-child(1)').innerHTML = data[index].weather

        itemMess.querySelector('div:nth-child(2)').innerHTML = data[index].temperature

        itemMess.querySelector('div:nth-child(3)').innerHTML = data[index].winp

        itemMess.querySelector('div:nth-child(4) > span:nth-child(1)').innerHTML = data[index].days

        itemMess.querySelector('div:nth-child(4) > span:nth-child(2)').innerHTML = data[index].week

      })

    }

  })

}



getweather();