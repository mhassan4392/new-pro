import { NavLink } from "react-router-dom";

const HomeLatestPost = ({ post, ...rest }) => {
  return (
    <div {...rest} className="hover:shadow-lg p-8 transition-all duration-300">
      <div className="text-sm text-gray-600">{post.date}</div>
      <div className="w-full h-0.5 bg-primary my-7"></div>
      <h2 className="text-gray-900 text-2xl hover:text-primary mb-5 hover:cursor-pointer">
        {post.title}
      </h2>
      <p>{post.desc}</p>
      <div className="space-x-3 mt-5">
        <span className="text-primary">标签：</span>
        {post.links.map((link, i) => (
          <NavLink
            to={link.link}
            key={i}
            className="text-primary hover:underline"
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomeLatestPost;
