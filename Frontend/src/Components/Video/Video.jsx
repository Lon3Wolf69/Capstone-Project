import React from 'react';

const Video = () => {
    return (
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            {/* FEMA disaster assistance ad */}
            <iframe
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                src="https://www.youtube.com/embed/Y5sQipRt4dI?rel=0&modestbranding=1"
                title="FEMA Disaster Assistance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default Video;