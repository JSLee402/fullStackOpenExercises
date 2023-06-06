// const App = () => {
//   console.log('Hello from componenet')
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>Hello {props.name}, you are {props.age} years old.</h1>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='George' age='12' />
//       <Hello name='Joon' />
//       <Hello name='Jacob' />
//       <Hello name='Maya' age={26+10} />
//       <Hello name={name} age = {age} />
//     </div>
//   )
// }

// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 }
//   ]
//   const coworkers = ['Johnny', 'Donny', 'Frankie']

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//       <p>coworkers: {coworkers}</p>
//     </div>
//   )
// }

// const Header = (props) => {
//   console.log(props)
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Total = (props) => {
//   console.log(props)
//   return (
//     <>
//       <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
//     </>
//   )
// }

//--------------- 1.2 -----------------
// const Part = (props) => {
//   return (
//     <p>{props.name} {props.exercises}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} />
//       <Part part={props.part2} />
//       <Part part={props.part3} />
//     </div>
//   )
// }

//----------------- 1.3 ------------------
// const Content = (props) => {
//   console.log(props)
//   return (
//     <>
//       <p>{props.name} {props.exercises}</p>
//     </>
//   )
// }

// const Header = (props) => {
//   console.log(props)
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Total = (props) => {
//   console.log(props)
//   return (
//     <>
//       <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
//     </>
//   )
// }



// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content name={part1.name} exercises={part1.exercises} />
//       <Content name={part2.name} exercises={part2.exercises} />
//       <Content name={part3.name} exercises={part3.exercises} />
//       {/* <Content part1={part1} part2={part2} part3={part3} /> */}
//       <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
//     </div>
//   )
// }

//-------------------- 1.4 ------------------

const Header = (props) => {
  console.log(props)
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Total = (props) => {
  let result = 0
  for (let i = 0; i < props.parts.length; i++){
    result = result + props.parts[i].exercises
  }
  return(
    <>
    <p>Number of exercises {result}</p>
    </>
  )
}

const Content = (props) => {
  let str1 = props.parts[0].name + ' ' + props.parts[0].exercises
  let str2 = props.parts[1].name + ' ' + props.parts[1].exercises
  let str3 = props.parts[2].name + ' ' + props.parts[2].exercises
  return(
    <>
      <p>{str1}</p>
      <p>{str2}</p>
      <p>{str3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return(
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
