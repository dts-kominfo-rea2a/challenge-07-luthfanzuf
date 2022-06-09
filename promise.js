const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (paramString) => {
  try{
    let hasilTheaterIXX = await promiseTheaterIXX();
    let hasilTheaterVGC = await promiseTheaterVGC();
    let hasilSemuaTheater = hasilTheaterIXX.concat(hasilTheaterVGC);

    let counter = 0

    for(obj of hasilSemuaTheater) {
      if(paramString === obj.hasil) {
        counter = counter + 1
      } else {
        counter = counter + 0
      }
    }
    return counter
  }
  catch (error){
    console.log('error')
  }
}
promiseOutput()

module.exports = {
  promiseOutput,
};
