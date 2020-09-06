import React, { useState, useEffect } from 'react';

const UsersImage = () => {
    const [images, setImages] = useState('');
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => setImages(data.results[0].picture.large))
    }, [])
    return (
        <div>
            <img className="rounded-circle" src={images} alt="" />
        </div>
    );
};

export default UsersImage;