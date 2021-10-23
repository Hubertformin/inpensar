const expense_categories = [
    {
      icon: 'food',
      name: 'Food & Drink',
      type: 'expenses',
      color: '#FD3C4A'
    },
    {
      icon: 'shopping',
      name: 'Shopping',
      type: 'expenses',
      color: '#EF6C00'
    },
    {
      icon: 'transport',
      name: 'Transport',
      type: 'expenses',
      color: '#FBC02D'
    },
    {
      icon: 'bills',
      name: 'Bills & Fees',
      type: 'expenses',
      color: '#303F9F'
    },
    {
      icon: 'entertainment',
      name: 'Entertainment',
      type: 'expenses',
      color: '#7B1FA2'
    },
    { icon: 'car', name: 'Car', type: 'expenses', color: '#19b966' },
    {
      icon: 'travel',
      name: 'Travel',
      type: 'expenses',
      color: '#C2185B'
    },
    {
      icon: 'family',
      name: 'Family & Personal',
      type: 'expenses',
      color: '#00796B'
    },
    {
      icon: 'education',
      name: 'Education',
      type: 'expenses',
      color: '#8bb9e4'
    },
    {
      icon: 'health_care',
      name: 'Health Care',
      type: 'expenses',
      color: '#004BA0'
    },
    {
      icon: 'beauty',
      name: 'Beauty',
      type: 'expenses',
      color: '#B0003A'
    },
    {
      icon: 'internet',
      name: 'Internet',
      type: 'expenses',
      color: '#007C91'
    },
    { icon: 'work', name: 'Work', type: 'expenses', color: '#E37414' },
    { icon: 'gifts', name: 'Gifts', type: 'expenses', color: '#F50057' },
    {
      icon: 'sports',
      name: 'Sports & Hobbies',
      type: 'expenses',
      color: '#880E4F'
    },
    { icon: 'other', name: 'Other', type: 'expenses', color: '#ADADAD' }
  ]


const income_categories = [
    { icon: 'salary', name: 'Salary', type: 'income', color: '#17A437' },
    {
      icon: 'business',
      name: 'Business',
      type: 'income',
      color: '#F57C00'
    },
    { 
        icon: 'gifts', 
        name: 'Gifts', 
        type: 'income', 
        color: '#F50057' 
    },
    {
      icon: 'extra_income',
      name: 'Extra Income',
      type: 'income',
      color: '#26418F'
    },
    { 
        icon: 'loan', 
        name: 'Loan', 
        type: 'income', 
        color: '#1976D2' 
    },
    {
      icon: 'parantal_leave',
      name: 'Parantal leave',
      type: 'income',
      color: '#1976D2'
    },
    {
      icon: 'insurance_payout',
      name: 'Insurance Payout',
      type: 'income',
      color: '#D81B60'
    },
    {
      icon: 'allowance',
      name: 'Allowance',
      type: 'income',
      color: '#BC5100'
    },
    {
      icon: 'debt_settlement',
      name: 'Debt settlement',
      type: 'income',
      color: '#087F23'
    },
    { 
        icon: 'other', 
        name: 'Other', 
        type: 'income', 
        color: '#ADADAD' 
    }  
  ]

  export const Categories =  {
      expenses: expense_categories,
      income: income_categories
  }