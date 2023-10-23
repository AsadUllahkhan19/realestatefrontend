import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { feeds } from '../../data/dummyData';

const BlogPost = ({ id, title, image, category, author, date_posted, description }) => {
  return (
    <div className="flex-1 basis-[20rem] shadow-light border rounded-lg overflow-hidden relative group">
    <div className="group !opacity-100 overflow-hidden">
      <Link to={`/blog${id}`} className="!opacity-100">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a"
        />
      </Link>
    </div>
   
    <div className="p-3">
      <p className="text-sm uppercase opacity-60">
        by {author?.name}: {date_posted}
      </p>
      <Link
        to={`/blog${id}`}
        className="group-hover:text-primary transition-a"
      >
        <h1 className="text-lg font-semibold capitalize">{title}</h1>
      </Link>
      <Link className="mt-4 flex-align-center gap-x-2 hover:underline text-primary">
        <span className="uppercase hover:underline">read more</span>{" "}
        <FiArrowRight />
      </Link>
    </div>
  </div>
  );
};

const BlogPostList = () => {
  return (
    <div className='flex flex-wrap gap-7'>
      {feeds.map((feed) => (
        <BlogPost key={feed.id} {...feed} />
      ))}
    </div>
  );
};

export default BlogPostList;
