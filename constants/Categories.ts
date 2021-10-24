const expense_categories = [
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/food_ebNZzYIJz.png?updatedAt=1635067130364',
      name: 'Food & Drink',
      type: 'expenses',
      color: '#FD3C4A'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/shopping_NcP4dGK_c.png?updatedAt=1635067396353',
      name: 'Shopping',
      type: 'expenses',
      color: '#EF6C00'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/transport_0C2VtvDuHZ.png?updatedAt=1635067134714',
      name: 'Transport',
      type: 'expenses',
      color: '#FBC02D'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/bills_Z-t8AnaPB.png?updatedAt=1635067396246',
      name: 'Bills & Fees',
      type: 'expenses',
      color: '#303F9F'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/entertainment_EQBw5OxtJ0.png?updatedAt=1635067396214',
      name: 'Entertainment',
      type: 'expenses',
      color: '#7B1FA2'
    },
    { 
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/car_v9bVajYtBT.png?updatedAt=1635067128480', 
      name: 'Car', 
      type: 'expenses', 
      color: '#19b966' 
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/travel_tw1SEk-Sn4.png?updatedAt=1635067135098',
      name: 'Travel',
      type: 'expenses',
      color: '#C2185B'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/family_z1kbvNnXl6.png?updatedAt=1635067129943',
      name: 'Family & Personal',
      type: 'expenses',
      color: '#00796B'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/education_I2llmeiacf.png?updatedAt=1635067129010',
      name: 'Education',
      type: 'expenses',
      color: '#8bb9e4'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/health_cegTioOHPA.png?updatedAt=1635067130909',
      name: 'Health Care',
      type: 'expenses',
      color: '#004BA0'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/beauty_VYNoGYeBD.png?updatedAt=1635067128297',
      name: 'Beauty',
      type: 'expenses',
      color: '#B0003A'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/internet_7AqlJlX7R.png?updatedAt=1635067132418',
      name: 'Internet',
      type: 'expenses',
      color: '#007C91'
    },
    { 
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/work_Uf7NRXzIh.png?updatedAt=1635067135410', 
      name: 'Work', 
      type: 'expenses', 
      color: '#E37414' 
    },
    { 
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/gifts_-pQOvBCdz.png?updatedAt=1635067130616', 
      name: 'Gifts', 
      type: 'expenses', 
      color: '#F50057' 
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/sports_2Zss-cA_xEt.png?updatedAt=1635067134454',
      name: 'Sports & Hobbies',
      type: 'expenses',
      color: '#880E4F'
    },
    { 
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/other_ugvJva27xg.png?updatedAt=1635067133208', 
      name: 'Other', 
      type: 'expenses', 
      color: '#ADADAD' 
    }
  ]


const income_categories = [
    { 
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/salary_ax_xo0ZSi.png?updatedAt=1635067134034', 
      name: 'Salary', 
      type: 'income', 
      color: '#17A437' 
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/business_vlH9juK859a.png?updatedAt=1635067128297',
      name: 'Business',
      type: 'income',
      color: '#F57C00'
    },
    { 
        icon: 'https://ik.imagekit.io/enchird/inpensar_categories/gifts_-pQOvBCdz.png?updatedAt=1635067130616', 
        name: 'Gifts', 
        type: 'income', 
        color: '#F50057' 
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/extra_icome_I5TFNrXGoC.png?updatedAt=1635067129663',
      name: 'Extra Income',
      type: 'income',
      color: '#26418F'
    },
    { 
        icon: 'https://ik.imagekit.io/enchird/inpensar_categories/loan_HnSaFvhpsWU.png?updatedAt=1635067132756', 
        name: 'Loan', 
        type: 'income', 
        color: '#1976D2' 
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/parental_leave_ygjnEssSg.png?updatedAt=1635067133816',
      name: 'Parantal leave',
      type: 'income',
      color: '#1976D2'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/insurance_Vk-zR_0_MZ.png?updatedAt=1635067132087',
      name: 'Insurance Payout',
      type: 'income',
      color: '#D81B60'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/allowance_MxflCsHda1.png',
      name: 'Allowance',
      type: 'income',
      color: '#BC5100'
    },
    {
      icon: 'https://ik.imagekit.io/enchird/inpensar_categories/debt_settlement_Zgw1tHdI_.png?updatedAt=1635067128706',
      name: 'Debt settlement',
      type: 'income',
      color: '#087F23'
    },
    { 
        icon: 'https://ik.imagekit.io/enchird/inpensar_categories/other_ugvJva27xg.png?updatedAt=1635067133208', 
        name: 'Other', 
        type: 'income', 
        color: '#ADADAD' 
    }  
  ]

  export const Categories =  {
      expenses: expense_categories,
      income: income_categories
  }