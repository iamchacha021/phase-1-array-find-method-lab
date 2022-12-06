// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(stat){
    const yearWithWin = stat.find(function(record){
        return record.result=== 'W'
    })
    return yearWithWin === undefined? undefined : yearWithWin.year;
  }