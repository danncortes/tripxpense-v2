export const chartsColorConfig = {
  colors: {
    spent: ['#e65c00', '#b34700', '#803300'],
    operations: ['#0052cc', '#003d99', '#002966'],
    income: ['#2eb82e', '#248f24', '#196619']
  }
};

export const chartPayMethodConfig = {
  type: 'doughnut',
  options: {
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 11,
        usePointStyle: true
      }
    }
  },
  income: {
    labels: [],
    data: [],
    colors: [{
      backgroundColor: chartsColorConfig.colors.income
    }]
  },
  spent: {
    labels: [],
    data: [],
    colors: [{
      backgroundColor: chartsColorConfig.colors.spent
    }]
  },
  operations: {
    labels: [],
    data: [],
    colors: [{
      backgroundColor: chartsColorConfig.colors.operations
    }]
  }
};

export const chartCategoryConfig = {
  type: 'doughnut',
  options: {
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 11,
        usePointStyle: true
      }
    }
  },
  labels: [],
  data: [],
  colors: [{
    backgroundColor: [
      '#ff8000',
      '#3366ff',
      '#ff9999', '#993300', '#666699', '#006600', '#cc0066', '#ff0000', '#33cccc', '#4da6ff', '#666666', '#00bfff', '#cc9900'
    ]
  },
  {
    backgroundColor: [
      '#ffa64d',
      '#809fff',
      '#ffcccc', '#cc4400', '#8585ad', '#009900', '#ff0080', '#ff4d4d', '#70dbdb', '#99ccff', '#999999', '#4dd2ff', '#ffc61a'
    ]
  }]
};
