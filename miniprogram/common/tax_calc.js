// 城市的社保公积金 和 社会平均工资参数
let CityData = {
//  #City, ID, Endowment %, Medical %, Unemployment %, Housing Fund %, Salary Cap1 - 4
'北京': ['beijing', 0.08, 0.02, 0.002, 0.12, 25401.0, 25551.0, 25400.0, 25401.0],
'上海': ['shanghai', 0.08, 0.02, 0.005, 0.07, 21396.0, 21396.0, 21396.0, 21400.0],
'广州': ['guangzhou', 0.08, 0.02, 0.002, 0.12, 20004.0, 24654.0, 24655.0, 24654.0],
'深圳': ['shenzhen', 0.08, 0.02, 0.01, 0.12, 25044.0, 25044.0, 2200.0, 25044.0],
'武汉': ['wuhan', 0.08, 0.02, 0.003, 0.12, 19921.0, 20271.0, 19920.0, 17991.0],
'天津': ['tianjin', 0.08, 0.02, 0.005, 0.11, 16821.0, 16821.0, 16822.0, 24240.0],
'西安': ['xian', 0.08, 0.02, 0.003, 0.12, 16857.0, 19446.0, 19446.67, 19443.0],
'重庆': ['chongqing', 0.08, 0.02, 0.005, 0.12, 18318.0, 18518.0, 18318.0, 18318.0],
'南京': ['nanjing', 0.08, 0.02, 0.005, 0.08, 19935.0, 19935.0, 19936.0, 25300.0],
'杭州': ['hangzhou', 0.08, 0.02, 0.005, 0.12, 15275.0, 15275.0, 15276.0, 24311.0],
'成都': ['chengdu', 0.08, 0.02, 0.004, 0.12, 17908.0, 16274.0, 16275.0, 22302.0],
'苏州': ['suzhou', 0.08, 0.02, 0.005, 0.08, 21963.0, 21963.0, 21964.0, 21900.0],
'无锡': ['wuxi', 0.08, 0.02, 0.005, 0.08, 18171.0, 18171.0, 18172.0, 21250.0],
'济南': ['jinan', 0.08, 0.02, 0.003, 0.12, 17550.0, 17550.0, 17550.0, 17550.0],
'青岛': ['qingdao', 0.08, 0.02, 0.003, 0.12, 15927.0, 15927.0, 15926.67, 20885.0],
'常州': ['changzhou', 0.08, 0.02, 0.005, 0.1, 19935.0, 19935.0, 19936.0, 20980.0],
'南通': ['nantong', 0.08, 0.02, 0.005, 0.08, 19935.0, 19935.0, 19936.0, 18660.0],
'宁波': ['ningbo', 0.08, 0.02, 0.005, 0.12, 16394.0, 16394.0, 16394.0, 24420.0],
'温州': ['wenzhou', 0.08, 0.02, 0.005, 0.05, 12930.0, 12930.0, 12930.0, 15910.0],
'徐州': ['xuzhou', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'连云港': ['lianyungang', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'淮安': ['huaian', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'盐城': ['yancheng', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'徐州': ['xuzhou', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'扬州': ['yangzhou', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'镇江': ['zhenjiang', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'泰州': ['taizhou', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17878.0],
'威海': ['weihai', 0.08, 0.02, 0.003, 0.12, 17326.0, 17326.0, 17326.67, 15586.0],
'嘉兴': ['jiaxing', 0.08, 0.02, 0.005, 0.12, 15280.0, 4977.0, 15280.0, 20733.0],
'湖州': ['huzhou', 0.08, 0.01, 0.005, 0.12, 15275.0, 15275.0, 15276.0, 17847.0],
'绍兴': ['shaoxing', 0.08, 0.0, 0.005, 0.12, 15274.0, 0, 15274.0, 18817.0],
'金华': ['jinhua', 0.08, 0.0, 0.005, 0.12, 15280.0, 0, 15280.0, 21852.0],
'台州': ['taizhou', 0.08, 0.0, 0.005, 0.12, 15274.0, 0, 15274.0, 18513.0],
'合肥': ['hefei', 0.08, 0.02, 0.005, 0.12, 16986.0, 16986.0, 16986.0, 20172.0],
'昆山': ['kunshan', 0.08, 0.02, 0.005, 0.12, 19935.0, 19935.0, 19936.0, 17700.0],
'张家港': ['zhangjiagang', 0.08, 0.02, 0.005, 0.12, 21963.0, 21963.0, 21964.0, 21900.0],
'沈阳': ['shenyang', 0.08, 0.02, 0.005, 0.09, 18546.0, 17973.0, 18546.0, 18546.0],
'大连': ['dalian', 0.08, 0.02, 0.005, 0.12, 20472.0, 20472.0, 20472.0, 20472.0],
'石家庄': ['shijiazhuang', 0.08, 0.02, 0.003, 0.12, 16317.0, 16970.0, 16970.0, 18285.0],
'太原': ['taiyuan', 0.08, 0.02, 0.003, 0.12, 15387.0, 15387.0, 15386.67, 18030.0],
'呼和浩特': ['hohhot', 0.08, 0.02, 0.005, 0.12, 16923.0, 15771.0, 15772.0, 15771.0],
'长春': ['changchun', 0.08, 0.02, 0.003, 0.12, 19837.0, 18034.0, 19836.67, 18034.0],
'包头': ['baotou', 0.08, 0.02, 0.005, 0.12, 16923.0, 17427.0, 17428.0, 5808.0],
'哈尔滨': ['harbin', 0.08, 0.02, 0.005, 0.12, 13935.0, 16886.0, 16886.0, 16883.0],
'郑州': ['zhengzhou', 0.08, 0.02, 0.003, 0.12, 17616.0, 17622.0, 17620.0, 17625.0],
'洛阳': ['luoyang', 0.08, 0.02, 0.003, 0.12, 14140.0, 14140.0, 14140.0, 11121.0],
'佛山': ['foshan', 0.08, 0.0, 0.002, 0.12, 20004.0, 0, 18175.0, 18178.0],
'珠海': ['zhuhai', 0.08, 0.01, 0.002, 0.05, 18213.0, 27320.0, 18730.0, 20253.0],
'惠州': ['huizhou', 0.08, 0.02, 0.002, 0.05, 20004.0, 11781.0, 17725.0, 20682.0],
'厦门': ['xiamen', 0.08, 0.02, 0.005, 0.12, 18864.0, 18864.0, 18864.0, 18864.0],
'东莞': ['dongguan', 0.08, 0.02, 0.002, 0.05, 20004.0, 4454.0, 15405.0, 27391.0],
'长沙': ['changsha', 0.08, 0.02, 0.003, 0.12, 13473.0, 13473.0, 13473.33, 21297.0],
'中山': ['zhongshan', 0.08, 0.0, 0.002, 0.05, 20004.0, 0, 17010.0, 17010.0],
'福州': ['fuzhou', 0.08, 0.02, 0.01, 0.05, 14301.0, 15620.0, 14301.0, 15620.0],
'泉州': ['quanzhou', 0.08, 0.02, 0.005, 0.12, 12206.0, 12206.0, 12206.0, 13511.0],
'武汉': ['wuhan', 0.08, 0.02, 0.003, 0.12, 19921.0, 20271.0, 19920.0, 17991.0],
'汕头': ['shantou', 0.08, 0.02, 0.002, 0.12, 20004.0, 20004.0, 20005.0, 15468.0],
'南昌': ['nanchang', 0.08, 0.02, 0.005, 0.12, 15357.0, 17502.0, 15358.0, 18175.0],
'江门': ['jiangmen', 0.08, 0.02, 0.002, 0.12, 20004.0, 12396.0, 16525.0, 18849.0],
'南宁': ['nanning', 0.08, 0.02, 0.005, 0.12, 15399.0, 15399.0, 15400.0, 18870.0],
'汕尾': ['shanwei', 0.08, 0.02, 0.002, 0.12, 20004.0, 14202.0, 14200.0, 17010.0],
'海口': ['haikou', 0.08, 0.02, 0.005, 0.12, 17265.0, 17265.0, 17266.0, 17010.0],
'潮州': ['chaozhou', 0.08, 0.02, 0.002, 0.12, 20004.0, 14886.0, 14885.0, 15468.0],
'贵阳': ['guiyang', 0.08, 0.02, 0.003, 0.12, 16137.0, 16137.0, 16136.67, 16875.0],
'昆明': ['kunming', 0.08, 0.02, 0.003, 0.12, 18378.0, 18378.0, 15890.0, 19088.0],
'拉萨': ['lhasa', 0.08, 0.02, 0.005, 0.12, 17787.0, 17787.0, 17788.0, 17787.0],
'兰州': ['lanzhou', 0.08, 0.02, 0.003, 0.09, 16432.0, 16432.0, 16433.33, 18071.0],
'西宁': ['xining', 0.08, 0.02, 0.005, 0.12, 19134.0, 19134.0, 19134.0, 19134.0],
'银川': ['yinchuan', 0.08, 0.02, 0.005, 0.12, 18195.0, 18195.0, 18196.0, 18462.0],
'乌鲁木齐': ['urumqi', 0.08, 0.02, 0.005, 0.12, 15096.0, 15096.0, 15096.0, 15399.0]
};

// 月免税额起点
let MonthlyDeducted = 5000;

// 新税法税率表
let DeductInAdvance =[
  [0.03, 0, 36000],
  [0.10, 2520, 144000],
  [0.20, 16920, 300000],
  [0.25, 31920, 420000],
  [0.30, 52920, 660000],
  [0.35, 85920, 960000],
  [0.45, 181920, -1],
];

// 用名字找到城市
function findCityByName(name) {
  try{
    return CityData[name].slice(1, 9)
  } catch (err) {
    return []
  }
}

// 用拼音找到城市
function findCityById(id) {
  let ret=[];
  Object.values(CityData).forEach(v=>{
    if (v[0] == id.toLowerCase()) {
      ret= v.slice(1, 9);
    }
  })
  return ret;
}

// 用任意输入找城市
function findCity(key) {
  // 如果是数字，对应找到城市的字符串
  if (typeof key === "number" || parseInt(key, 10) + "" === key) {
    key = Object.keys(CityData)[key]
  } 

  // 通过字符串找到城市详细信息
  return findCityByName(key).concat(findCityById(key));
}

// 通过税率抵扣表找到应纳税额
function findTaxAmount(taxableIncome) {
  let currentTax = [];
  for (let k in DeductInAdvance) {
    let i = DeductInAdvance[k]
    if (i[2]==-1 || taxableIncome<=i[2]) {
      currentTax = i;
      break;
    }
  }
  return currentTax[0] * taxableIncome - currentTax[1];
}

// 数字转化为会计数字的字符串（每1000有个逗号分割）
function toThousands(num) {
  num = (num || 0).toString();
  var decimal;
  if (num.lastIndexOf('.') != -1) {
    decimal = num.split('.')[1];
  }
  num = num.split('.')[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  if (decimal) {
    num += '.' + decimal;
  }
  return num;
}

// 计算12个月的汇总
function total(calcTable) {
  var ret = [0,0,0,0,0];
  for (let i = 0; i < 12; i++) {
    ret[1] += calcTable[i][1] * 1;
    ret[2] += calcTable[i][2] * 1;
    ret[3] += calcTable[i][3] * 1;
    ret[4] += calcTable[i][4] * 1;
  }
  ret[1] = toThousands(ret[1]);
  ret[2] = toThousands(ret[2]);
  ret[3] = toThousands(ret[3]);
  ret[4] = toThousands(ret[4]);
  return ret;
}

// 计算12个月的纳税现金流
function calcTable(city, salary, deductible) {
  let citydata = findCity(city);

  if (citydata.length === 0) 
    return (["error", "city benefits data are not exist."])

  let endowmentDeductible = citydata[0] * Math.min(salary, citydata[4]);
  let medicalDeductible = citydata[1] * Math.min(salary, citydata[5]);
  let unemploymentDeductible = citydata[2] * Math.min(salary, citydata[6]);
  let housingFundDeductible = citydata[3] * Math.min(salary, citydata[7]);
  let benefitsDeductible = endowmentDeductible + medicalDeductible + unemploymentDeductible + housingFundDeductible;
  
  let accTaxableIncome = 0
  let accTaxPaid = 0
  let retTable = [];

  for (let  i = 0; i < 12; i++)  {
    let monthAccTaxableIncome = Math.max(0, salary - benefitsDeductible - MonthlyDeducted - deductible + accTaxableIncome);
    let monthTaxAmount = findTaxAmount(monthAccTaxableIncome) - accTaxPaid;
    accTaxableIncome = monthAccTaxableIncome;
    accTaxPaid = accTaxPaid + monthTaxAmount;
    let monthCashIn = salary - monthTaxAmount - benefitsDeductible
    retTable = retTable.concat([[i + 1, salary.toFixed(0), benefitsDeductible.toFixed(0), monthTaxAmount.toFixed(0), monthCashIn.toFixed(0), (citydata[0] * 100).toFixed(0), (citydata[1] * 100).toFixed(0), (citydata[2] * 100).toFixed(1), (citydata[3] * 100).toFixed(0), endowmentDeductible.toFixed(0), medicalDeductible.toFixed(0), unemploymentDeductible.toFixed(0), housingFundDeductible.toFixed(0)    
    ]])
  }

  return retTable
}

// 导出暴露给外部的数据和函数
module.exports = {
  cityData: CityData,
  calcTable: calcTable,
  total: total
}
