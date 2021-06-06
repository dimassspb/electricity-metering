// import { meterReadings } from './DB';
// export
const meterReadings = {
  dayData: [0],
  nightData: [0],
};

const dayMeterReadingInput = document.querySelector('.day');
const nightMeterReadingInput = document.querySelector('.night');
const btn = document.querySelector('.button');
const results = document.querySelector('.results');
const costs = document.querySelector('.costs');

var today = new Date();

var strDate = 'd-m-Y'
  .replace('Y', today.getFullYear())
  .replace('m', today.getMonth() + 1)
  .replace('d', today.getDate());

// console.log(strDate);
const getData = () => {
  const dayLastItem = meterReadings.dayData[meterReadings.dayData.length - 1];
  const nightLastItem =
    meterReadings.nightData[meterReadings.nightData.length - 1];

  const dayDiff = dayMeterReadingInput.value - dayLastItem;
  const nightDiff = nightMeterReadingInput.value - nightLastItem;

  const dayRate = 6.44;
  const nightRate = 4.28;

  const forPay = parseFloat((dayDiff * dayRate + nightDiff * nightRate).toFixed(2));
  // console.log(forPay);

  // console.log(dayDiff, nightDiff);
  meterReadings.dayData.push(dayMeterReadingInput.value);
  meterReadings.nightData.push(nightMeterReadingInput.value);
  results.textContent = '';
  costs.textContent = '';

  const div = document.createElement('div');
  div.classList.add('result');
  div.textContent = `Показания счетчика на ${strDate} день ${dayMeterReadingInput.value}кВт ночь ${nightMeterReadingInput.value}кВт`;
  results.append(div);

  const cost = document.createElement('div');
  cost.classList.add('cost');
  cost.textContent = `К оплате: ${forPay} руб`;
  costs.append(cost);

  dayMeterReadingInput.value = '';
  nightMeterReadingInput.value = '';
};

btn.addEventListener('click', getData);

// var lastItem = myArray[myArray.length-1];

//  var objOutput = {
//    first : firstItem,
//    last : lastItem
//   };

// return objOutput;
// }
