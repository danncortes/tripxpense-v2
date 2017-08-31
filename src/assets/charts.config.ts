export const chartsColorConfig = {
  colors : {
      spent : ['#e65c00', '#b34700', '#803300'],
      operations : ['#0052cc', '#003d99', '#002966'],
      income : ['#2eb82e', '#248f24', '#196619']
  }
};

export const chartPayMethodConfig = {
  type : 'doughnut',
  options : {
    legend : {
      position : 'bottom',
      labels : {
        fontSize: 11,
        usePointStyle : true
      }
    }
  },
  income : {
    labels : [],
    data : [],
    colors : [{
      backgroundColor: chartsColorConfig.colors.income
    }]
  },
  spent : {
    labels : [],
    data : [],
    colors : [{
      backgroundColor: chartsColorConfig.colors.spent
    }]
  },
  operations : {
    labels : [],
    data : [],
    colors : [{
      backgroundColor: chartsColorConfig.colors.operations
    }]
  }
};