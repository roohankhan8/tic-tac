// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function MyButton({ count, onClick }) {
//   // const [count, setCount] = useState(0);
//   // function handleClick() {
//   //   // alert("You clicked me!");
//   //   setCount(count + 1);
//   // }
//   // return <button onClick={handleClick}>Click me {count}</button>;
//   return <button onClick={onClick}>Clicked {count} times</button>;
// }

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// function AboutPage() {
//   const listItems = products.map((product) => (
//     <li key={product.id}>{product.title}</li>
//   ));
//   return (
//     <>
//       <h1>About</h1>
//       <p>
//         Hello there.
//         <br />
//         How do you do?
//       </p>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//       <ul>{listItems}</ul>
//     </>
//   );
// }

// const products = [
//   { title: "Cabbage", id: 1 },
//   { title: "Garlic", id: 2 },
//   { title: "Apple", id: 3 },
// ];

// function AdminPanel() {
//   return <h1>Admin Panel</h1>;
// }
// function LoginForm() {
//   return <h1>Login Form</h1>;
// }

// let isLoggedIn = true;

// function Panel() {
//   let content;
//   if (isLoggedIn) {
//     content = <AdminPanel />;
//   } else {
//     content = <LoginForm />;
//   }
//   return <div>{content}</div>;

//   // <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
//   // <div>{isLoggedIn && <AdminPanel />}</div>;
// }

// export default function MyApp() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     // alert("You clicked me!");
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <AboutPage />
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//       <Panel />
//     </div>
//   );
// }
