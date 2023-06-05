import React from 'react';

function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://deadline.com/wp-content/uploads/2020/01/avengers-endgame-joker-hobbs-shaw.jpg"
          alt="mercedes sl"
          className="max-w-2xl max-h-full rounded-lg shadow-2xl"
        />
        <div className="md:text-center sm:text-center">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
