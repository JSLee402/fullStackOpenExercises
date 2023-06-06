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

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.ex}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} ex={props.ex1} />
      <Part part={props.part2} ex={props.ex2} />
      <Part part={props.part3} ex={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      {/* <Content part={part1} ex={exercises1} />
      <Content part={part2} ex={exercises2} />
      <Content part={part3} ex={exercises3} /> */}
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App;
