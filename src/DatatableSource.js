export const userColumns = [
    {
      field: 'id', headerName: 'ID', width: 70 
    },
    {
      field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img src={params.row.img} className="cellImg" alt="User Profile with User Image" />
            {params.row.fullName}
          </div>
        )
      }
    },
    {
      field: "email", headerName: "Email", width: 230,
    },
    {
      field: "age", headerName: "Current Age", width: 120,
    },
    {
      field: "username", headerName: "Username", width: 150,
    },
    {
      field: "status", headerName: "Status", width: 160, renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
      }
    },
]


// Temporary user data

export const userRows = [
  { 
    id: 1, lastName: 'Guard', firstName:'Brandon', age: 22, fullName: 'Brandon Guard', username: 'BrandonCodes', email: 'brandon@thecoder.com', status: 'Active', img: "https://www.brandonguard.com/images/Avatar-Image.jpeg",
  },
  { 
    id: 2, lastName: 'Babini', firstName:'Michelle', age: 39, fullName: 'Michelle Babini', username: 'Babini12', email: 'michellebabini@bbb.com', status:'Active', img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60",
  },
  { 
    id: 3, lastName: 'Waltz', firstName:'Nelly', age: 25, fullName: 'Nelly Waltz', username: 'Nelly', email: 'nellywaltz@ccc.com', status:'Offline', img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80",
  },
  { 
    id: 4, lastName: 'Jenkinson', firstName:'Sam', age: 41, fullName:'Sam Jenkins', username: 'AwesomeSam', email: 'samjenkins@ddd.com', status:'Offline', img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60",
  },
  { 
    id: 5, lastName: 'Kitts', firstName:'Harry', age: 24, fullName:'Harry Kitts', username: 'Kitts', email: 'harrykitts@eee.com', status:'Active', img: "https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60",
  },
  { 
    id: 6, lastName: 'Cooper', firstName:'Eddie', age: 43, fullName:'Eddie Cooper', username: 'EddieC43', email: 'eddiecooper@fff.com', status:'Offline', img: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 7, lastName: 'Cupton', firstName:'Sarah', age: 29, fullName:'Sarah Cupton', username: 'Sarah811', email: 'sarahcupton@ggg.com', status:'Active', img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
  },
  { 
    id: 8, lastName: 'Ikers', firstName:'Jasper', age: 25, fullName:'Jasper Ikers', username: 'Jasper121', email: 'jasper121@hhh.com', status:'Offline', img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  { 
    id: 9, lastName: 'Walters', firstName:'Vanessa', age: 32, fullName:'Vanessa Gomez', username: 'Vanessa32', email: 'vanessa32@iii.com', status:'Active', img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60",
  },
  { 
    id: 10, lastName: 'B', firstName:'Lowenna', age: 33, fullName:'Lowenna B', username: 'Lowenna33', email: 'lowenna33@jjj.com', status:'Active', img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  { 
    id: 11, lastName: 'Boulton', firstName:'Josh', age: 29, fullName:'Josh Boulton', username: 'JoshB', email: 'josh29@987.com', status:'Active', img: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  { 
    id: 12, lastName: 'Jones', firstName:'Martin', age: 42, fullName:'Martin Jones', username: 'Martin42', email: 'martinjones@jjj.com', status:'Offline', img: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 13, lastName: 'Laurel', firstName:'Ben', age: 29, fullName:'Ben Laurel', username: 'BenL29', email: 'benl29@879.com', status:'Offline', img: "https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  { 
    id: 14, lastName: 'H', firstName:'Calvin', age: 56, fullName:'Calvin H', username: 'CalvinH56', email: 'calvinh56@879.com', status:'Active', img: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 15, lastName: 'Jewels', firstName:'Leon', age: 27, fullName:'Leon Jewels', username: 'LeonJ27', email: 'leonjewels27@123.com', status:'Offline', img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  { 
    id: 16, lastName: 'Leonard', firstName:'Jay', age: 36, fullName:'Jay Leonard', username: 'JayL36', email: 'jayleonard36@798.com', status:'Offline', img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 17, lastName: 'M', firstName:'Emily', age: 25, fullName:'Emily M', username: 'EmilyM25', email: 'emilym25@654.com', status:'Active', img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 18, lastName: 'E', firstName:'Tyler', age: 30, fullName:'Tyler E', username: 'TylerE30', email: 'tylere30@345.com', status:'Active', img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  { 
    id: 19, lastName: 'G', firstName:'Josh', age: 26, fullName:'Josh G', username: 'JoshG26', email: 'joshg26@121.com', status:'Active', img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  { 
    id: 20, lastName: 'I', firstName:'Jack', age: 51, fullName:'Jack I', username: 'JackI51', email: 'jacki51@232.com', status:'Offline', img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  { 
    id: 21, lastName: 'D', firstName:'Robert', age: 30, fullName:'Robert D', username: 'RobertD30', email: 'robertd@0202.com', status:'Offline', img: "https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },
  { 
    id: 22, lastName: 'P', firstName:'Jennifer', age: 48, fullName:'Jennifer P', username: 'JenniferP48', email: 'jenniferp48@879.com', status:'Active', img: "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  { 
    id: 23, lastName: 'W', firstName:'Patrick', age: 34, fullName:'Patrick W', username: 'PatrickW34', email: 'patrickw34@3434.com', status:'Offline', img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 24, lastName: 'A', firstName:'Lauren', age: 26, fullName:'Lauren A', username: 'LaurenA26', email: 'laurena26@2626.com', status:'Active', img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  { 
    id: 25, lastName: 'C', firstName:'Louise', age: 40, fullName:'Louise C', username: 'LouiseC40', email: 'louisec40@445.com', status:'Active', img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80",
  },
];

