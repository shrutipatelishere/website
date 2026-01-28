import React, { useState } from 'react';

const NewsResearch = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    {
      id: 1,
      category: 'Breakthrough',
      title: 'Medix Achieves First Successful AI-Assisted Brain Surgery in the Region',
      excerpt: 'Our neurosurgery team completed a groundbreaking procedure using artificial intelligence to map neural pathways with unprecedented accuracy.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      category: 'Award',
      title: 'Medix Named #1 Hospital for Cardiac Care for Third Consecutive Year',
      excerpt: 'U.S. News & World Report recognizes our cardiovascular program\'s excellence in patient outcomes and innovation.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
      date: 'Jan 10, 2025',
      readTime: '3 min read'
    },
    {
      id: 3,
      category: 'Research',
      title: 'Clinical Trial Shows Promise for New Cancer Immunotherapy',
      excerpt: 'Phase III trial results demonstrate 40% improvement in survival rates for advanced melanoma patients.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop',
      date: 'Jan 8, 2025',
      readTime: '4 min read'
    },
    {
      id: 4,
      category: 'Community',
      title: 'Free Health Screening Event Serves Over 2,000 Community Members',
      excerpt: 'Annual community health fair provides vital screenings and health education to underserved populations.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      date: 'Jan 5, 2025',
      readTime: '3 min read'
    },
  ];

  const research = [
    {
      id: 1,
      title: 'CRISPR Gene Therapy for Sickle Cell Disease',
      status: 'Recruiting',
      phase: 'Phase III',
      department: 'Hematology',
      participants: '150/200'
    },
    {
      id: 2,
      title: 'Novel Biomarker Detection for Early Pancreatic Cancer',
      status: 'Active',
      phase: 'Phase II',
      department: 'Oncology',
      participants: '89/100'
    },
    {
      id: 3,
      title: 'AI-Powered Cardiac Arrhythmia Prediction Study',
      status: 'Recruiting',
      phase: 'Observational',
      department: 'Cardiology',
      participants: '1,200/2,000'
    },
    {
      id: 4,
      title: 'Minimally Invasive Robotic Spine Surgery Outcomes',
      status: 'Active',
      phase: 'Phase IV',
      department: 'Orthopedics',
      participants: '450/500'
    },
    {
      id: 5,
      title: 'Pediatric Asthma Prevention Through Microbiome Modification',
      status: 'Recruiting',
      phase: 'Phase II',
      department: 'Pediatrics',
      participants: '75/150'
    },
  ];

  const featuredNews = news.find(n => n.featured);
  const regularNews = news.filter(n => !n.featured);

  return (
    <section id="research" className="news-research">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-newspaper"></i>
            LATEST UPDATES
          </span>
          <h2>News & <span className="gradient-text">Research</span></h2>
          <p>Stay informed about our latest medical breakthroughs, research initiatives, and hospital news</p>
        </div>

        {/* Tab Navigation */}
        <div className="news-tabs">
          <button
            className={`news-tab ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            <i className="fas fa-newspaper"></i>
            Latest News
          </button>
          <button
            className={`news-tab ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            <i className="fas fa-flask"></i>
            Clinical Trials
          </button>
          <button
            className={`news-tab ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            <i className="fas fa-book-medical"></i>
            Publications
          </button>
        </div>

        {/* News Content */}
        {activeTab === 'news' && (
          <div className="news-grid">
            {/* Featured Article */}
            <article className="news-featured">
              <div className="featured-image">
                <img src={featuredNews.image} alt={featuredNews.title} />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-content">
                <span className="news-category">{featuredNews.category}</span>
                <h3>{featuredNews.title}</h3>
                <p>{featuredNews.excerpt}</p>
                <div className="news-meta">
                  <span><i className="fas fa-calendar"></i> {featuredNews.date}</span>
                  <span><i className="fas fa-clock"></i> {featuredNews.readTime}</span>
                </div>
                <a href="#article" className="read-more">
                  Read Full Article
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>

            {/* Regular News */}
            <div className="news-list">
              {regularNews.map(article => (
                <article key={article.id} className="news-card">
                  <div className="news-card-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="news-card-content">
                    <span className="news-category">{article.category}</span>
                    <h4>{article.title}</h4>
                    <p>{article.excerpt}</p>
                    <div className="news-meta">
                      <span><i className="fas fa-calendar"></i> {article.date}</span>
                      <span><i className="fas fa-clock"></i> {article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Research/Clinical Trials Content */}
        {activeTab === 'research' && (
          <div className="research-content">
            <div className="research-intro">
              <div className="intro-stats">
                <div className="intro-stat">
                  <span className="stat-num">45+</span>
                  <span className="stat-txt">Active Studies</span>
                </div>
                <div className="intro-stat">
                  <span className="stat-num">3,500</span>
                  <span className="stat-txt">Participants</span>
                </div>
                <div className="intro-stat">
                  <span className="stat-num">$50M</span>
                  <span className="stat-txt">Research Funding</span>
                </div>
              </div>
            </div>

            <div className="trials-list">
              {research.map(trial => (
                <div key={trial.id} className="trial-card">
                  <div className="trial-status">
                    <span className={`status-badge ${trial.status.toLowerCase()}`}>
                      {trial.status}
                    </span>
                    <span className="trial-phase">{trial.phase}</span>
                  </div>
                  <h4>{trial.title}</h4>
                  <div className="trial-meta">
                    <span className="trial-dept">
                      <i className="fas fa-hospital"></i>
                      {trial.department}
                    </span>
                    <span className="trial-participants">
                      <i className="fas fa-users"></i>
                      {trial.participants}
                    </span>
                  </div>
                  <div className="trial-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${(parseInt(trial.participants) / parseInt(trial.participants.split('/')[1])) * 100}%` }}
                    ></div>
                  </div>
                  <a href="#enroll" className="trial-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publications Content */}
        {activeTab === 'publications' && (
          <div className="publications-content">
            <div className="pub-header">
              <p>Our physicians and researchers have published over 500 peer-reviewed papers this year alone.</p>
            </div>
            <div className="pub-stats">
              <div className="pub-stat">
                <i className="fas fa-file-medical"></i>
                <span className="num">500+</span>
                <span className="txt">Papers Published</span>
              </div>
              <div className="pub-stat">
                <i className="fas fa-quote-left"></i>
                <span className="num">12,000+</span>
                <span className="txt">Citations</span>
              </div>
              <div className="pub-stat">
                <i className="fas fa-globe"></i>
                <span className="num">50+</span>
                <span className="txt">Countries Reached</span>
              </div>
            </div>
            <a href="#publications" className="btn-publications">
              Browse All Publications
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        )}

        <div className="news-cta">
          <a href="#all-news" className="view-all-btn">
            View All Updates
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsResearch;
