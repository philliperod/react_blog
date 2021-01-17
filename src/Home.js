const Home = () => {
  const handleClick = (event) => {
    console.log('Haayyy', event.target);
  };

  // the 'event' object or parameter
  // automatic access inside a function when the event occurs
  // when you reference the function
  // its first automatic parameter it receives is the event object

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
