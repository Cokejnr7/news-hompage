const posts = [
  {
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const Post = () => {
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div
            className={index + 1 === posts.length ? "post" : "post post-border"}
            key={post.title}
          >
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default Post;
