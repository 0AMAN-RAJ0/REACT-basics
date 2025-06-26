function Card({username, occupation="software engineer"}) {
    console.log(username)
    return ( 
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/32692708/pexels-photo-32692708.jpeg" alt="" width="384" height="512" />
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {occupation}
              </div>
            </figcaption>
          </div>
        </figure>
     );
}

export default Card;