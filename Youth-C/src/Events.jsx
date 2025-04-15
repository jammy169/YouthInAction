import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Youth Leadership Summit',
      date: 'March 15, 2023',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3',
      description: 'Join us for a day of inspiring talks and networking with young leaders from around the world.',
      featured: true,
    },
    {
      id: 2,
      title: 'Community Service Day',
      date: 'April 10, 2023',
      image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3',
      description: 'Make a difference in your community by participating in our service day activities.',
      featured: false,
    },
    {
      id: 3,
      title: 'Global Youth Conference',
      date: 'May 5, 2023',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3',
      description: 'Connect with youth from around the globe and share your ideas for a better future.',
      featured: true,
    },
  ];

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {event.featured && <span className="featured-badge">Featured</span>}
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
            <button className="cta-button" onClick={() => window.location.href='/signin'}>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events; 