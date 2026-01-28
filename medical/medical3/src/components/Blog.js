import React from 'react';

const Blog = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop',
      category: 'Health Tips',
      date: 'Dec 15, 2024',
      title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
      excerpt: 'Discover how mindfulness meditation can help reduce stress and improve mental health.',
    },
    {
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
      category: 'Nutrition',
      date: 'Dec 12, 2024',
      title: 'Healthy Eating on a Budget: Tips and Strategies',
      excerpt: 'Learn how to maintain a healthy diet without breaking the bank.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
      category: 'Prevention',
      date: 'Dec 10, 2024',
      title: 'The Importance of Regular Cancer Screenings and Early Detection',
      excerpt: 'Why regular screenings are crucial for early detection and better outcomes.',
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Blog Posts</span>
          <h2 className="section-title">
            Latest <span className="text-primary">Update</span>
          </h2>
          <p className="section-desc">
            Stay informed with our latest health tips, news, and medical insights.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="fas fa-calendar-alt"></i>
                    {post.date}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
